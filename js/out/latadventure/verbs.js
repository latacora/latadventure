// Compiled by ClojureScript 1.9.229 {}
goog.provide('latadventure.verbs');
goog.require('cljs.core');
goog.require('advenjure.verbs');
goog.require('advenjure.verb_map');
latadventure.verbs.yell = advenjure.verbs.make_say_verb.call(null,"AAAAHHHH!!!");
latadventure.verbs.drink = advenjure.verbs.make_item_handler.call(null,"drink",new cljs.core.Keyword(null,"drink","drink",298215495));
latadventure.verbs.eat = advenjure.verbs.make_item_handler.call(null,"eat",new cljs.core.Keyword(null,"eat","eat",1686757401));
latadventure.verbs.verb_map = advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.default_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^yell$","^scream$"], null),latadventure.verbs.yell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^drink (?<item>.*)","^drink$"], null),latadventure.verbs.drink),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^eat (?<item>.*)","^drink$"], null),latadventure.verbs.eat);

//# sourceMappingURL=verbs.js.map?rel=1522181439355