(ns latadventure.core
  (:require [advenjure.game :as game]
            [latadventure.rooms :refer [room-map]]
            [latadventure.verbs :refer [verb-map]]
            [advenjure.utils :as u])
  #?(:clj (:gen-class)))

(defn finished?
  [game-state]
  (let [cape (u/find-first game-state "cape")
        has-cape (contains? (:inventory game-state) cape)]
    (println has-cape cape)
    has-cape))

(defn start!
  []
  (let [game-state (game/make room-map :dais)]
    (game/run game-state finished?
      :start-message "Welcome to Latadventure!\ntype 'help' if you don't know what to do.\n"
      :verb-map verb-map)))

#?(:cljs (do
           (enable-console-print!)
           (start!))
   :clj (defn -main [& args] (start!)))
