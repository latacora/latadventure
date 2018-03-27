// Compiled by ClojureScript 1.9.229 {}
goog.provide('latadventure.core');
goog.require('cljs.core');
goog.require('advenjure.game');
goog.require('latadventure.rooms');
goog.require('latadventure.verbs');
goog.require('advenjure.utils');
latadventure.core.finished_QMARK_ = (function latadventure$core$finished_QMARK_(game_state){
var cape = advenjure.utils.find_first.call(null,game_state,"cape");
var has_cape = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),cape);
cljs.core.println.call(null,has_cape,cape);

return has_cape;
});
latadventure.core.start_BANG_ = (function latadventure$core$start_BANG_(){
var game_state = advenjure.game.make.call(null,latadventure.rooms.room_map,new cljs.core.Keyword(null,"dais","dais",59303308));
return advenjure.game.run.call(null,game_state,latadventure.core.finished_QMARK_,new cljs.core.Keyword(null,"start-message","start-message",-630575289),"Welcome to Latadventure!\ntype 'help' if you don't know what to do.\n",new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),latadventure.verbs.verb_map);
});
cljs.core.enable_console_print_BANG_.call(null);

latadventure.core.start_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1522181797574