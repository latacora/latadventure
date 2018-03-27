(ns latadventure.verbs
  (:require [advenjure.verbs :as vs]
            [advenjure.verb-map :as vm]))

(def yell
  (vs/make-say-verb "AAAAHHHH!!!"))

(def drink
  (vs/make-item-handler "drink" :drink))

(def eat
  (vs/make-item-handler "eat" :eat))

(def verb-map
  (-> vm/default-map
      (vm/add-verb ["^yell$" "^scream$"] yell)
      (vm/add-verb ["^drink (?<item>.*)" "^drink$"] drink)
      (vm/add-verb ["^eat (?<item>.*)" "^drink$"] eat)))
