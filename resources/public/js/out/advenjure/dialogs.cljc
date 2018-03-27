(ns advenjure.dialogs
  #?(:cljs (:require-macros [advenjure.async :refer [let!? <!? aloop]]))
  (:require [advenjure.items :as items]
            [advenjure.ui.output :refer [print-line]]
            [advenjure.ui.input :refer [read-key read-value]]
            #?(:clj [advenjure.async :refer [let!? <!? aloop]])
            #?(:cljs [advenjure.eval :refer [eval]])))

(defn print-dialog
  [game-state character speech]
  (print-line (str character #?(:clj " —" :cljs " &mdash;") speech))
  (read-key)
  game-state)

(defn eval-line
  "If line is a literal line, return the expression to print it.
  If it's a callable, return an expression that calls it."
  [line]
  (cond
    (and (seq? line) (#{'dialog 'conditional 'random 'optional} (first line))) (eval line) ; case (dialog (dialog ...))
    (and (seq? line) (string? (eval (first line)))) `(print-dialog ~@line) ; case dialog literal
    :else (list line))) ; case function literal or symbol

(defmacro dialog
  "Expand a dialog definition into a function to execute it."
  [& lines]
  `(fn [game-state#]
     (-> game-state#
         ~@(map eval-line lines))))

;;; INLINE HELPERS
(defn event?
  [event-kw]
  (fn [game-state]
    (contains? (:events game-state) event-kw)))

(defn not-event? [event-kw]
  (comp not (event? event-kw)))

(defn set-event
  [event-kw]
  (fn [game-state]
    (update-in game-state [:events] conj event-kw)))

(defn item?
  [item-name]
  (fn [game-state]
    (first (items/get-from (:inventory game-state) item-name))))

(defn not-item? [item-name]
  (comp not (item? item-name)))

;;; OPTIONAL DIALOGS
(defn get-show-if
  "Check the list of option modifiers for :show-if and return the associated
  function if present."
  [modifiers]
  (loop [[mod & more] modifiers]
    (cond
      (= :show-if mod) (first more)
      (empty? more) `(fn [gs#] true)
      :else (recur more))))

(defn option-spec
  "Take an option expression and build a spec hash for it."
  [option]
  (let [[title dialog & modifiers] option
        modset (set modifiers)]
    (-> {:id (str (gensym "opt"))
         :title title
         :dialog dialog}
        (assoc :go-back (contains? modset :go-back))
        (assoc :sticky (contains? modset :sticky))
        (assoc :show-if (get-show-if modifiers)))))

(defn is-available
  [game-state option]
  (and
    (or (:sticky option) (not (contains? (:executed-dialogs game-state) (:id option))))
    ((:show-if option) game-state)))

(defn filter-available
  [game-state options]
  (vec (filter #(is-available game-state %) options)))

(defn print-options
  [options]
  (print-line)
  (dorun ; TODO maybe use a more readable loop instead
    (map-indexed (fn [i opt]
                   (print-line (str (inc i) ". " (:title opt))))
                 options))
  (print-line))

(defn select-option
  "Present the player with a list of options, read input and return the
  selected one. If only one option is available return that right away."
  [options]
  (let [amount (count options)
        choices (set (range 1 (inc amount)))]
    (if (= amount 1)
      (first options)
      (do
        (print-options options)
        (aloop [i (<!? (read-value))]
          (if-not (contains? choices i)
            (recur (<!? (read-value)))
            (get options (dec i))))))))

(defn execute-optional
  [game-state options]
  (aloop [available (filter-available game-state options)
          game-state game-state]
    (let!? [option (select-option available)
            dialog-fn (:dialog option)
            dialog-state (dialog-fn game-state)
            new-state (update-in dialog-state [:executed-dialogs] conj (:id option))
            remaining (filter-available new-state options)]

      (if (or (:go-back option) (empty? remaining))
        new-state
        (recur remaining new-state)))))


(defmacro optional
  "Present dialog options to the user and execute the one selected."
  [& options]
  (let [specs (map option-spec options)]
    `(fn [game-state#]
       (execute-optional game-state# (list ~@specs)))))

;;; OTHER DIALOG FORMS
(defmacro random
  "Given a list of dialog forms, return a function that would execute any of
  them randomly each time it's called."
  [& lines]
  (let [lines (vec (map (fn [l] `(dialog ~l)) lines))
        size (count lines)]
    `(fn [game-state#]
       (let [selected# (get ~lines (rand-int ~size))]
         (selected# game-state#)))))

(defmacro conditional
  "Return a function that will test the condition function using the game-state
  and execute the dialog line if true. If false and a second line is given,
  that will be executed instead."
  ([condition true-line]
   `(fn [game-state#]
      (if (~condition game-state#)
        ((dialog ~true-line) game-state#)
        game-state#)))
  ([condition true-line false-line]
   `(fn [game-state#]
      (if (~condition game-state#)
        ((dialog ~true-line) game-state#)
        ((dialog ~false-line) game-state#)))))
