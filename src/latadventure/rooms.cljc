(ns latadventure.rooms
  (:require [advenjure.rooms :as r]
            [advenjure.items :as i]
            [advenjure.utils :as u]
            [advenjure.dialogs :as d]))

;; dais

(def dais
  (r/make "Dais" "You are by some kind of dais. It is made of smooth black leather."))

;; entryway

(def entryway
  (r/make "Entryway" "An entryway. Not much to see here."))

;; kitchen

(def server
  (i/make
   "server"
   "Big rectangular metal box with lights. It is making noise and is warm to the touch. Best not wake it up. It might get angry."))

(defn make-food
  [name description]
  (i/make name description :take true :eat "Truly a great perk of working here."))

(def fridge
  (i/make
   ["fridge" "refrigerator"]
   "A metal box with a glass front. It appears to be a container. The glass is cold to the touch."
   :items #{(make-food "bresaola" "a delicious cut of beef")
            (make-food "country ham" "a delicious cut of pork")}))

(def kitchen
  (->
   (r/make "Kitchen" "Some sort of kitchen. There are lots of metal boxes here.")
   (r/add-item server)
   (r/add-item fridge)))

;;; cabinet

(defn pre-drink-bottle
  [s]
  (if (-> s (u/find-first "bottle") :tried)
    "Not in a million years."
    true))

(defn post-drink-bottle
  [old new]
  (let [bottle (-> old (u/find-first "bottle"))]
    (u/say "Yeeech! This tastes like ox-bile soap.")
    (u/replace-item new bottle (assoc bottle :tried true))))

(def bottle
  (i/make
   ["bottle" "windex" "windex bottle"]
   "a bottle. It says \"Malört\", but you've heard the locals pronounce it \"win-deks\"."
   :take true
   :open true
   :drink {:pre `pre-drink-bottle :post `post-drink-bottle}
   :tried false))

(def cabinet
  (->
   (r/make "Alchemy cabinet" "There is some kind of alchemy cabinet here. There are a number of bottles of colored liquid ranging from yellow to ochre to brown. Every bottle is on the top shelf, out of reach -- except one.")
   (r/add-item bottle)))

;;; center of office

(def paper
  (i/make
   ["paper"]
   "A paper about dif-fuh-ren-shul ah-na-lee-sis. Strange, I didn't think Annalee had a sister. But it makes sense you wouldn't know that if they were hard to tell apart, I suppose."
   :take true))

(def trash
  (i/make
   ["a pile of trash" "a pile of garbage" "trash" "garbage"]
   "A pile of miscellaneous detritus from the denizens of the \"ah-fis\"."
   :items #{paper}))

(def office
  (->
   (r/make
    "Center of the office"
    "You are in the center of an \"ah-fis\". The floor turns from strange soft gray wool to a strange surface that looks like wood but clearly isn't.")
   (r/add-item trash)))

;; den

(declare lvh)

(def lvh-cape
  (i/make
   ["cape" "wizard cape"]
   "A cape, adorned with the colors and shapes of the night sky. You want it. It is your entire reason for existing."
   :take "The wizard scowls at you angrily as you attempt to take his cape from him."))

(def greet-lvh
  (d/conditional (d/event? :knows-lvh)
   ("ME" "Hi \"ell vee aitch\"!")
   ("ME" "Uh, hello?")))

(def lvh-response
  (d/random
   ("LVH" "Hm?")
   ("LVH" "What do you want?")
   ("LVH" "I'm busy.")))

(defn take-paper
  [s]
  (u/say "The wizard mumbles something about \"a fine sai-fer\". He seems very upset about the \"sai-fer\" given that it's supposedly fine. On the other hand he seems pretty generally curmudgeonly so maybe you shouldn't read into it too much.")
  (let [distract (d/set-event :lvh-distracted)]
    (-> s (u/remove-item paper) distract)))

(defn take-bottle
  [s]
  (u/say "The wizard takes a terrifyingly big swig straight from the bottle. He doesn't give it back. That's, uh, fine by you.")
  (let [intoxicate (d/set-event :lvh-drunk)]
    (-> s (u/remove-item bottle) intoxicate)))

(defn lvh-leaves
  [s]
  (u/say "The wizard leaves the office, leaving the cape for the taking!")
  (-> s
      (u/remove-item lvh)
      (u/replace-item lvh-cape (assoc lvh-cape :take true))))

(def lvh-dialog-options
  (d/optional
   ("Who are you?"
    (d/dialog
     ("ME" "Who are you?")
     ("LVH" "I am \"ell vee aitch\". Who are you?")
     (d/set-event :knows-lvh))
    :show-if (advenjure.dialogs/not-event? :knows-lvh)
    :sticky)

   ("Why are you here?"
    (d/dialog
     ("ME" "Why are you here?")
     ("LVH" "I work here, dude.")))

   ("Would you like this bottle?"
    (d/dialog
     ("ME" "Would you like this bottle?")
     ("LVH" "Sure, might as well. What a fucking day, man. Fucking \"vee-ruh-coat\". Even with the form letters, it's a mess.")
     take-bottle)
    :show-if (advenjure.dialogs/item? "bottle"))

   ("Have you read this paper?"
    (d/dialog
     ("ME" "Have you read this paper?")
     ("LVH" "Yeah. I should read it again though. It's a good paper.")
     take-paper)
    :show-if (advenjure.dialogs/item? "paper"))

   ("Maybe you should go back to your tower?"
    (d/dialog
     ("ME" "Sounds like you had a long day, man. Maybe you should go back to your tower?")
     ("LVH" "Yeah. You're right. See ya.")
     lvh-leaves)
    :show-if (fn lvh-ready-to-go
               [s]
               (let [distracted ((advenjure.dialogs/event? :lvh-distracted) s)
                     drunk ((advenjure.dialogs/event? :lvh-drunk) s)]
                 (println (str "checked if lvh was distracted: " distracted  " or drunk: " drunk))
                 (and distracted drunk)))
    :go-back)

   ("Bye."
    (d/dialog ("ME" "Bye.")
              ("NPC" "See you."))
    :sticky
    :go-back)))

(def lvh-dialog
  (d/dialog greet-lvh lvh-response lvh-dialog-options))

(def lvh
  (i/make
   ["wizard" "lvh"]
   "Some sort of wizard. He is tapping a strange black surface furiously. He has a long, forked beard."
   :dialog `lvh-dialog))

(def wizard-den
  (->
   (r/make "Wizard's den" "You are by the wizard's den.")
   (r/add-item lvh)
   (r/add-item lvh-cape)))

(def room-map
  (-> {:dais dais
       :cabinet cabinet
       :entryway entryway
       :kitchen kitchen
       :office office
       :wizard-den wizard-den}
      (r/connect :dais :south :office)
      (r/connect :dais :west :cabinet)
      (r/connect :cabinet :north :entryway)
      (r/connect :entryway :east :kitchen)
      (r/connect :office :west :wizard-den)))
