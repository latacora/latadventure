// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.game');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.ui.output');
goog.require('advenjure.ui.input');
goog.require('advenjure.verb_map');
goog.require('advenjure.hooks');
goog.require('advenjure.gettext.core');
goog.require('advenjure.utils');
goog.require('advenjure.change_rooms');
advenjure.game.default_prompt = (function advenjure$game$default_prompt(gs){
return [cljs.core.str("\n@"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,gs))),cljs.core.str(" ["),cljs.core.str(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(gs)),cljs.core.str("] > ")].join('');
});
advenjure.game.hooks = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),null,new cljs.core.Keyword(null,"after-handler","after-handler",216363306),null,new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),null,new cljs.core.Keyword(null,"after-change-room","after-change-room",-84875115),null,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),null,new cljs.core.Keyword(null,"before-handler","before-handler",-1763527428),null], null), null);
/**
 * Make a new game state based on a room map and an optional initial inventory set.
 */
advenjure.game.make = (function advenjure$game$make(var_args){
var args39304 = [];
var len__21530__auto___39307 = arguments.length;
var i__21531__auto___39308 = (0);
while(true){
if((i__21531__auto___39308 < len__21530__auto___39307)){
args39304.push((arguments[i__21531__auto___39308]));

var G__39309 = (i__21531__auto___39308 + (1));
i__21531__auto___39308 = G__39309;
continue;
} else {
}
break;
}

var G__39306 = args39304.length;
switch (G__39306) {
case 2:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39304.length)].join('')));

}
});

advenjure.game.make.cljs$core$IFn$_invoke$arity$2 = (function (room_map,start_room){
return advenjure.game.make.call(null,room_map,start_room,cljs.core.PersistentHashSet.EMPTY);
});

advenjure.game.make.cljs$core$IFn$_invoke$arity$3 = (function (room_map,start_room,inventory){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"room-map","room-map",978449264),room_map,new cljs.core.Keyword(null,"current-room","current-room",491649183),start_room,new cljs.core.Keyword(null,"inventory","inventory",860201871),inventory,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"executed-dialogs","executed-dialogs",795280986),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"moves","moves",927465255),(0),new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start-message","start-message",-630575289),"",new cljs.core.Keyword(null,"end-message","end-message",-2112830994),"\nThe End.",new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),advenjure.verb_map.default_map,new cljs.core.Keyword(null,"prompt","prompt",-78109487),advenjure.game.default_prompt,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.zipmap.call(null,advenjure.game.hooks,cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY))], null)], null);
});

advenjure.game.make.cljs$lang$maxFixedArity = 3;

/**
 * Merges the given plugin spec into the given game configuration.
 */
advenjure.game.use_plugin = (function advenjure$game$use_plugin(gs,plugin_spec){
var base_config = new cljs.core.Keyword(null,"configuration","configuration",1431842520).cljs$core$IFn$_invoke$arity$1(gs);
var merged_hooks = cljs.core.merge_with.call(null,cljs.core.conj,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(base_config),new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_spec));
var merged_verbs = cljs.core.merge.call(null,new cljs.core.Keyword(null,"verb-map","verb-map",1285414746).cljs$core$IFn$_invoke$arity$1(base_config),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746).cljs$core$IFn$_invoke$arity$1(plugin_spec));
var new_config = cljs.core.merge.call(null,base_config,plugin_spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),merged_hooks], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),merged_verbs], null));
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"configuration","configuration",1431842520),new_config);
});
/**
 * Take an input comand, find the verb in it and execute its action handler.
 */
advenjure.game.process_input = (function advenjure$game$process_input(game_state,input){
var verb_map = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746)], null));
var clean = clojure.string.trim.call(null,clojure.string.lower_case.call(null,input));
var vec__39496 = advenjure.verb_map.find_verb.call(null,verb_map,clean);
var verb = cljs.core.nth.call(null,vec__39496,(0),null);
var tokens = cljs.core.nth.call(null,vec__39496,(1),null);
var handler = cljs.core.get.call(null,verb_map,verb);
if(cljs.core.truth_(handler)){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler){
return (function (state_39607){
var state_val_39608 = (state_39607[(1)]);
if((state_val_39608 === (7))){
var state_39607__$1 = state_39607;
var statearr_39609_39681 = state_39607__$1;
(statearr_39609_39681[(2)] = true);

(statearr_39609_39681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (20))){
var inst_39537 = (state_39607[(7)]);
var inst_39557 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39537);
var state_39607__$1 = state_39607;
var statearr_39610_39682 = state_39607__$1;
(statearr_39610_39682[(2)] = inst_39557);

(statearr_39610_39682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (27))){
var inst_39553 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39611_39683 = state_39607__$1;
(statearr_39611_39683[(2)] = inst_39553);

(statearr_39611_39683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (1))){
var inst_39499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39500 = [new cljs.core.Keyword(null,"moves","moves",927465255)];
var inst_39501 = (new cljs.core.PersistentVector(null,1,(5),inst_39499,inst_39500,null));
var inst_39502 = cljs.core.update_in.call(null,game_state,inst_39501,cljs.core.inc);
var inst_39503 = advenjure.hooks.execute.call(null,inst_39502,new cljs.core.Keyword(null,"before-handler","before-handler",-1763527428));
var inst_39504 = inst_39503;
var state_39607__$1 = (function (){var statearr_39612 = state_39607;
(statearr_39612[(8)] = inst_39504);

return statearr_39612;
})();
var statearr_39613_39684 = state_39607__$1;
(statearr_39613_39684[(2)] = null);

(statearr_39613_39684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (24))){
var inst_39555 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39614_39685 = state_39607__$1;
(statearr_39614_39685[(2)] = inst_39555);

(statearr_39614_39685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (39))){
var inst_39596 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39596)){
var statearr_39615_39686 = state_39607__$1;
(statearr_39615_39686[(1)] = (46));

} else {
var statearr_39616_39687 = state_39607__$1;
(statearr_39616_39687[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (46))){
var inst_39574 = (state_39607[(9)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39607__$1,(49),inst_39574);
} else {
if((state_val_39608 === (4))){
var inst_39504 = (state_39607[(8)]);
var inst_39510 = inst_39504.cljs$core$async$impl$protocols$ReadPort$;
var inst_39511 = (false) || (inst_39510);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39511)){
var statearr_39617_39688 = state_39607__$1;
(statearr_39617_39688[(1)] = (7));

} else {
var statearr_39618_39689 = state_39607__$1;
(statearr_39618_39689[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (15))){
var inst_39533 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39619_39690 = state_39607__$1;
(statearr_39619_39690[(2)] = inst_39533);

(statearr_39619_39690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (48))){
var inst_39603 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39620_39691 = state_39607__$1;
(statearr_39620_39691[(2)] = inst_39603);

(statearr_39620_39691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (21))){
var inst_39559 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39559)){
var statearr_39621_39692 = state_39607__$1;
(statearr_39621_39692[(1)] = (28));

} else {
var statearr_39622_39693 = state_39607__$1;
(statearr_39622_39693[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (31))){
var inst_39562 = (state_39607[(2)]);
var inst_39537 = inst_39562;
var state_39607__$1 = (function (){var statearr_39623 = state_39607;
(statearr_39623[(7)] = inst_39537);

return statearr_39623;
})();
var statearr_39624_39694 = state_39607__$1;
(statearr_39624_39694[(2)] = null);

(statearr_39624_39694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (32))){
var inst_39568 = (state_39607[(10)]);
var state_39607__$1 = state_39607;
var statearr_39625_39695 = state_39607__$1;
(statearr_39625_39695[(2)] = inst_39568);

(statearr_39625_39695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (40))){
var state_39607__$1 = state_39607;
var statearr_39626_39696 = state_39607__$1;
(statearr_39626_39696[(2)] = true);

(statearr_39626_39696[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (33))){
var inst_39535 = (state_39607[(11)]);
var state_39607__$1 = state_39607;
var statearr_39627_39697 = state_39607__$1;
(statearr_39627_39697[(2)] = inst_39535);

(statearr_39627_39697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (13))){
var inst_39504 = (state_39607[(8)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39607__$1,(16),inst_39504);
} else {
if((state_val_39608 === (22))){
var state_39607__$1 = state_39607;
var statearr_39628_39698 = state_39607__$1;
(statearr_39628_39698[(2)] = true);

(statearr_39628_39698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (36))){
var inst_39605 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39607__$1,inst_39605);
} else {
if((state_val_39608 === (41))){
var inst_39574 = (state_39607[(9)]);
var inst_39584 = inst_39574.cljs$lang$protocol_mask$partition$;
var inst_39585 = (!inst_39584);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39585)){
var statearr_39629_39699 = state_39607__$1;
(statearr_39629_39699[(1)] = (43));

} else {
var statearr_39630_39700 = state_39607__$1;
(statearr_39630_39700[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (43))){
var inst_39574 = (state_39607[(9)]);
var inst_39587 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39574);
var state_39607__$1 = state_39607;
var statearr_39631_39701 = state_39607__$1;
(statearr_39631_39701[(2)] = inst_39587);

(statearr_39631_39701[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (29))){
var inst_39537 = (state_39607[(7)]);
var state_39607__$1 = state_39607;
var statearr_39632_39702 = state_39607__$1;
(statearr_39632_39702[(2)] = inst_39537);

(statearr_39632_39702[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (44))){
var state_39607__$1 = state_39607;
var statearr_39633_39703 = state_39607__$1;
(statearr_39633_39703[(2)] = false);

(statearr_39633_39703[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (6))){
var inst_39526 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39526)){
var statearr_39634_39704 = state_39607__$1;
(statearr_39634_39704[(1)] = (13));

} else {
var statearr_39635_39705 = state_39607__$1;
(statearr_39635_39705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (28))){
var inst_39537 = (state_39607[(7)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39607__$1,(31),inst_39537);
} else {
if((state_val_39608 === (25))){
var inst_39537 = (state_39607[(7)]);
var inst_39550 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39537);
var state_39607__$1 = state_39607;
var statearr_39636_39706 = state_39607__$1;
(statearr_39636_39706[(2)] = inst_39550);

(statearr_39636_39706[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (34))){
var inst_39572 = (state_39607[(2)]);
var inst_39573 = advenjure.hooks.execute.call(null,inst_39572,new cljs.core.Keyword(null,"after-handler","after-handler",216363306));
var inst_39574 = inst_39573;
var state_39607__$1 = (function (){var statearr_39637 = state_39607;
(statearr_39637[(9)] = inst_39574);

return statearr_39637;
})();
var statearr_39638_39707 = state_39607__$1;
(statearr_39638_39707[(2)] = null);

(statearr_39638_39707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (17))){
var inst_39537 = (state_39607[(7)]);
var inst_39540 = (inst_39537 == null);
var inst_39541 = cljs.core.not.call(null,inst_39540);
var state_39607__$1 = state_39607;
if(inst_39541){
var statearr_39639_39708 = state_39607__$1;
(statearr_39639_39708[(1)] = (19));

} else {
var statearr_39640_39709 = state_39607__$1;
(statearr_39640_39709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (3))){
var inst_39535 = (state_39607[(11)]);
var inst_39535__$1 = (state_39607[(2)]);
var inst_39536 = cljs.core.apply.call(null,handler,inst_39535__$1,tokens);
var inst_39537 = inst_39536;
var state_39607__$1 = (function (){var statearr_39641 = state_39607;
(statearr_39641[(7)] = inst_39537);

(statearr_39641[(11)] = inst_39535__$1);

return statearr_39641;
})();
var statearr_39642_39710 = state_39607__$1;
(statearr_39642_39710[(2)] = null);

(statearr_39642_39710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (12))){
var inst_39520 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39643_39711 = state_39607__$1;
(statearr_39643_39711[(2)] = inst_39520);

(statearr_39643_39711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (2))){
var inst_39504 = (state_39607[(8)]);
var inst_39507 = (inst_39504 == null);
var inst_39508 = cljs.core.not.call(null,inst_39507);
var state_39607__$1 = state_39607;
if(inst_39508){
var statearr_39644_39712 = state_39607__$1;
(statearr_39644_39712[(1)] = (4));

} else {
var statearr_39645_39713 = state_39607__$1;
(statearr_39645_39713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (23))){
var inst_39537 = (state_39607[(7)]);
var inst_39547 = inst_39537.cljs$lang$protocol_mask$partition$;
var inst_39548 = (!inst_39547);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39548)){
var statearr_39646_39714 = state_39607__$1;
(statearr_39646_39714[(1)] = (25));

} else {
var statearr_39647_39715 = state_39607__$1;
(statearr_39647_39715[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (47))){
var inst_39574 = (state_39607[(9)]);
var state_39607__$1 = state_39607;
var statearr_39648_39716 = state_39607__$1;
(statearr_39648_39716[(2)] = inst_39574);

(statearr_39648_39716[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (35))){
var inst_39574 = (state_39607[(9)]);
var inst_39577 = (inst_39574 == null);
var inst_39578 = cljs.core.not.call(null,inst_39577);
var state_39607__$1 = state_39607;
if(inst_39578){
var statearr_39649_39717 = state_39607__$1;
(statearr_39649_39717[(1)] = (37));

} else {
var statearr_39650_39718 = state_39607__$1;
(statearr_39650_39718[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (19))){
var inst_39537 = (state_39607[(7)]);
var inst_39543 = inst_39537.cljs$core$async$impl$protocols$ReadPort$;
var inst_39544 = (false) || (inst_39543);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39544)){
var statearr_39651_39719 = state_39607__$1;
(statearr_39651_39719[(1)] = (22));

} else {
var statearr_39652_39720 = state_39607__$1;
(statearr_39652_39720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (11))){
var state_39607__$1 = state_39607;
var statearr_39653_39721 = state_39607__$1;
(statearr_39653_39721[(2)] = false);

(statearr_39653_39721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (9))){
var inst_39522 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39654_39722 = state_39607__$1;
(statearr_39654_39722[(2)] = inst_39522);

(statearr_39654_39722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (5))){
var inst_39504 = (state_39607[(8)]);
var inst_39524 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39504);
var state_39607__$1 = state_39607;
var statearr_39655_39723 = state_39607__$1;
(statearr_39655_39723[(2)] = inst_39524);

(statearr_39655_39723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (14))){
var inst_39504 = (state_39607[(8)]);
var state_39607__$1 = state_39607;
var statearr_39656_39724 = state_39607__$1;
(statearr_39656_39724[(2)] = inst_39504);

(statearr_39656_39724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (45))){
var inst_39590 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39657_39725 = state_39607__$1;
(statearr_39657_39725[(2)] = inst_39590);

(statearr_39657_39725[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (26))){
var state_39607__$1 = state_39607;
var statearr_39658_39726 = state_39607__$1;
(statearr_39658_39726[(2)] = false);

(statearr_39658_39726[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (16))){
var inst_39529 = (state_39607[(2)]);
var inst_39504 = inst_39529;
var state_39607__$1 = (function (){var statearr_39659 = state_39607;
(statearr_39659[(8)] = inst_39504);

return statearr_39659;
})();
var statearr_39660_39727 = state_39607__$1;
(statearr_39660_39727[(2)] = null);

(statearr_39660_39727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (38))){
var inst_39574 = (state_39607[(9)]);
var inst_39594 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39574);
var state_39607__$1 = state_39607;
var statearr_39661_39728 = state_39607__$1;
(statearr_39661_39728[(2)] = inst_39594);

(statearr_39661_39728[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (30))){
var inst_39566 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39662_39729 = state_39607__$1;
(statearr_39662_39729[(2)] = inst_39566);

(statearr_39662_39729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (10))){
var inst_39504 = (state_39607[(8)]);
var inst_39517 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39504);
var state_39607__$1 = state_39607;
var statearr_39663_39730 = state_39607__$1;
(statearr_39663_39730[(2)] = inst_39517);

(statearr_39663_39730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (18))){
var inst_39568 = (state_39607[(10)]);
var inst_39568__$1 = (state_39607[(2)]);
var state_39607__$1 = (function (){var statearr_39664 = state_39607;
(statearr_39664[(10)] = inst_39568__$1);

return statearr_39664;
})();
if(cljs.core.truth_(inst_39568__$1)){
var statearr_39665_39731 = state_39607__$1;
(statearr_39665_39731[(1)] = (32));

} else {
var statearr_39666_39732 = state_39607__$1;
(statearr_39666_39732[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (42))){
var inst_39592 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39667_39733 = state_39607__$1;
(statearr_39667_39733[(2)] = inst_39592);

(statearr_39667_39733[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (37))){
var inst_39574 = (state_39607[(9)]);
var inst_39580 = inst_39574.cljs$core$async$impl$protocols$ReadPort$;
var inst_39581 = (false) || (inst_39580);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39581)){
var statearr_39668_39734 = state_39607__$1;
(statearr_39668_39734[(1)] = (40));

} else {
var statearr_39669_39735 = state_39607__$1;
(statearr_39669_39735[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (8))){
var inst_39504 = (state_39607[(8)]);
var inst_39514 = inst_39504.cljs$lang$protocol_mask$partition$;
var inst_39515 = (!inst_39514);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39515)){
var statearr_39670_39736 = state_39607__$1;
(statearr_39670_39736[(1)] = (10));

} else {
var statearr_39671_39737 = state_39607__$1;
(statearr_39671_39737[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (49))){
var inst_39599 = (state_39607[(2)]);
var inst_39574 = inst_39599;
var state_39607__$1 = (function (){var statearr_39672 = state_39607;
(statearr_39672[(9)] = inst_39574);

return statearr_39672;
})();
var statearr_39673_39738 = state_39607__$1;
(statearr_39673_39738[(2)] = null);

(statearr_39673_39738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler))
;
return ((function (switch__24055__auto__,c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler){
return (function() {
var advenjure$game$process_input_$_state_machine__24056__auto__ = null;
var advenjure$game$process_input_$_state_machine__24056__auto____0 = (function (){
var statearr_39677 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39677[(0)] = advenjure$game$process_input_$_state_machine__24056__auto__);

(statearr_39677[(1)] = (1));

return statearr_39677;
});
var advenjure$game$process_input_$_state_machine__24056__auto____1 = (function (state_39607){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_39607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e39678){if((e39678 instanceof Object)){
var ex__24059__auto__ = e39678;
var statearr_39679_39739 = state_39607;
(statearr_39679_39739[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39740 = state_39607;
state_39607 = G__39740;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$game$process_input_$_state_machine__24056__auto__ = function(state_39607){
switch(arguments.length){
case 0:
return advenjure$game$process_input_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$game$process_input_$_state_machine__24056__auto____1.call(this,state_39607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$process_input_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$process_input_$_state_machine__24056__auto____0;
advenjure$game$process_input_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$process_input_$_state_machine__24056__auto____1;
return advenjure$game$process_input_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler))
})();
var state__24328__auto__ = (function (){var statearr_39680 = f__24327__auto__.call(null);
(statearr_39680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_39680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,verb_map,clean,vec__39496,verb,tokens,handler))
);

return c__24326__auto__;
} else {
if(!(clojure.string.blank_QMARK_.call(null,clean))){
advenjure.ui.output.print_line.call(null,advenjure.gettext.core._.call(null,"I didn't know how to do that."));
} else {
}

return game_state;
}
});
advenjure.game.say_message = (function advenjure$game$say_message(gs,kw){
var config = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),kw], null));
var value = ((cljs.core.fn_QMARK_.call(null,config))?config.call(null,gs):config);
return advenjure.utils.say.call(null,value);
});
/**
 * Run the game loop. Requires a finished? function to decide when to terminate
 *   the loop. The rest of the parameters are configuration key/values.
 */
advenjure.game.run = (function advenjure$game$run(var_args){
var args__21537__auto__ = [];
var len__21530__auto___39959 = arguments.length;
var i__21531__auto___39960 = (0);
while(true){
if((i__21531__auto___39960 < len__21530__auto___39959)){
args__21537__auto__.push((arguments[i__21531__auto___39960]));

var G__39961 = (i__21531__auto___39960 + (1));
i__21531__auto___39960 = G__39961;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,finished_QMARK_,p__39744){
var map__39745 = p__39744;
var map__39745__$1 = ((((!((map__39745 == null)))?((((map__39745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39745):map__39745);
var extras = map__39745__$1;
var game_state__$1 = advenjure.game.use_plugin.call(null,game_state,cljs.core.merge.call(null,extras,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"finished","finished",-1018867731),finished_QMARK_], null)));
advenjure.ui.output.init.call(null);

advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"start-message","start-message",-630575289));

var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function (state_39872){
var state_val_39873 = (state_39872[(1)]);
if((state_val_39873 === (7))){
var state_39872__$1 = state_39872;
var statearr_39874_39962 = state_39872__$1;
(statearr_39874_39962[(2)] = true);

(statearr_39874_39962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (1))){
var inst_39747 = advenjure.ui.input.read_key.call(null);
var inst_39748 = inst_39747;
var state_39872__$1 = (function (){var statearr_39875 = state_39872;
(statearr_39875[(7)] = inst_39748);

return statearr_39875;
})();
var statearr_39876_39963 = state_39872__$1;
(statearr_39876_39963[(2)] = null);

(statearr_39876_39963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (4))){
var inst_39748 = (state_39872[(7)]);
var inst_39754 = inst_39748.cljs$core$async$impl$protocols$ReadPort$;
var inst_39755 = (false) || (inst_39754);
var state_39872__$1 = state_39872;
if(cljs.core.truth_(inst_39755)){
var statearr_39877_39964 = state_39872__$1;
(statearr_39877_39964[(1)] = (7));

} else {
var statearr_39878_39965 = state_39872__$1;
(statearr_39878_39965[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (15))){
var inst_39777 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
var statearr_39879_39966 = state_39872__$1;
(statearr_39879_39966[(2)] = inst_39777);

(statearr_39879_39966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (13))){
var inst_39748 = (state_39872[(7)]);
var state_39872__$1 = state_39872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39872__$1,(16),inst_39748);
} else {
if((state_val_39873 === (6))){
var inst_39770 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
if(cljs.core.truth_(inst_39770)){
var statearr_39880_39967 = state_39872__$1;
(statearr_39880_39967[(1)] = (13));

} else {
var statearr_39881_39968 = state_39872__$1;
(statearr_39881_39968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (3))){
var inst_39779 = (state_39872[(2)]);
var inst_39868 = cljs.core.async.chan.call(null,(1));
var inst_39869 = (function (){var k = inst_39779;
var c__24326__auto____$1 = inst_39868;
return ((function (k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function (state_39866){
var state_val_39867 = (state_39866[(1)]);
if((state_val_39867 === (7))){
var inst_39785 = (state_39866[(7)]);
var inst_39805 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39785);
var state_39866__$1 = state_39866;
var statearr_39882_39969 = state_39866__$1;
(statearr_39882_39969[(2)] = inst_39805);

(statearr_39882_39969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (20))){
var inst_39849 = (state_39866[(8)]);
var inst_39849__$1 = (state_39866[(2)]);
var inst_39850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39851 = [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_39852 = (new cljs.core.PersistentVector(null,2,(5),inst_39850,inst_39851,null));
var inst_39853 = cljs.core.get_in.call(null,inst_39849__$1,inst_39852);
var inst_39854 = inst_39853.call(null,inst_39849__$1);
var inst_39855 = cljs.core.not.call(null,inst_39854);
var state_39866__$1 = (function (){var statearr_39883 = state_39866;
(statearr_39883[(8)] = inst_39849__$1);

return statearr_39883;
})();
if(inst_39855){
var statearr_39884_39970 = state_39866__$1;
(statearr_39884_39970[(1)] = (34));

} else {
var statearr_39885_39971 = state_39866__$1;
(statearr_39885_39971[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (27))){
var inst_39818 = (state_39866[(9)]);
var inst_39831 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39818);
var state_39866__$1 = state_39866;
var statearr_39886_39972 = state_39866__$1;
(statearr_39886_39972[(2)] = inst_39831);

(statearr_39886_39972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (1))){
var inst_39780 = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state__$1);
var inst_39781 = advenjure.change_rooms.change_rooms.call(null,game_state__$1,inst_39780);
var inst_39782 = inst_39781;
var state_39866__$1 = (function (){var statearr_39887 = state_39866;
(statearr_39887[(10)] = inst_39782);

return statearr_39887;
})();
var statearr_39888_39973 = state_39866__$1;
(statearr_39888_39973[(2)] = null);

(statearr_39888_39973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (24))){
var state_39866__$1 = state_39866;
var statearr_39889_39974 = state_39866__$1;
(statearr_39889_39974[(2)] = true);

(statearr_39889_39974[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (4))){
var inst_39785 = (state_39866[(7)]);
var inst_39788 = (inst_39785 == null);
var inst_39789 = cljs.core.not.call(null,inst_39788);
var state_39866__$1 = state_39866;
if(inst_39789){
var statearr_39890_39975 = state_39866__$1;
(statearr_39890_39975[(1)] = (6));

} else {
var statearr_39891_39976 = state_39866__$1;
(statearr_39891_39976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (15))){
var inst_39785 = (state_39866[(7)]);
var state_39866__$1 = state_39866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39866__$1,(18),inst_39785);
} else {
if((state_val_39867 === (21))){
var inst_39818 = (state_39866[(9)]);
var inst_39824 = inst_39818.cljs$core$async$impl$protocols$ReadPort$;
var inst_39825 = (false) || (inst_39824);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39825)){
var statearr_39892_39977 = state_39866__$1;
(statearr_39892_39977[(1)] = (24));

} else {
var statearr_39893_39978 = state_39866__$1;
(statearr_39893_39978[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (31))){
var inst_39818 = (state_39866[(9)]);
var state_39866__$1 = state_39866;
var statearr_39894_39979 = state_39866__$1;
(statearr_39894_39979[(2)] = inst_39818);

(statearr_39894_39979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (32))){
var inst_39847 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39895_39980 = state_39866__$1;
(statearr_39895_39980[(2)] = inst_39847);

(statearr_39895_39980[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (33))){
var inst_39843 = (state_39866[(2)]);
var inst_39818 = inst_39843;
var state_39866__$1 = (function (){var statearr_39896 = state_39866;
(statearr_39896[(9)] = inst_39818);

return statearr_39896;
})();
var statearr_39897_39981 = state_39866__$1;
(statearr_39897_39981[(2)] = null);

(statearr_39897_39981[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (13))){
var state_39866__$1 = state_39866;
var statearr_39898_39982 = state_39866__$1;
(statearr_39898_39982[(2)] = false);

(statearr_39898_39982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (22))){
var inst_39818 = (state_39866[(9)]);
var inst_39838 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39818);
var state_39866__$1 = state_39866;
var statearr_39899_39983 = state_39866__$1;
(statearr_39899_39983[(2)] = inst_39838);

(statearr_39899_39983[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (36))){
var inst_39862 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39900_39984 = state_39866__$1;
(statearr_39900_39984[(2)] = inst_39862);

(statearr_39900_39984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (29))){
var inst_39834 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39901_39985 = state_39866__$1;
(statearr_39901_39985[(2)] = inst_39834);

(statearr_39901_39985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (6))){
var inst_39785 = (state_39866[(7)]);
var inst_39791 = inst_39785.cljs$core$async$impl$protocols$ReadPort$;
var inst_39792 = (false) || (inst_39791);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39792)){
var statearr_39902_39986 = state_39866__$1;
(statearr_39902_39986[(1)] = (9));

} else {
var statearr_39903_39987 = state_39866__$1;
(statearr_39903_39987[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (28))){
var state_39866__$1 = state_39866;
var statearr_39904_39988 = state_39866__$1;
(statearr_39904_39988[(2)] = false);

(statearr_39904_39988[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (25))){
var inst_39818 = (state_39866[(9)]);
var inst_39828 = inst_39818.cljs$lang$protocol_mask$partition$;
var inst_39829 = (!inst_39828);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39829)){
var statearr_39905_39989 = state_39866__$1;
(statearr_39905_39989[(1)] = (27));

} else {
var statearr_39906_39990 = state_39866__$1;
(statearr_39906_39990[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (34))){
var inst_39849 = (state_39866[(8)]);
var inst_39782 = inst_39849;
var state_39866__$1 = (function (){var statearr_39907 = state_39866;
(statearr_39907[(10)] = inst_39782);

return statearr_39907;
})();
var statearr_39908_39991 = state_39866__$1;
(statearr_39908_39991[(2)] = null);

(statearr_39908_39991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (17))){
var inst_39814 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39909_39992 = state_39866__$1;
(statearr_39909_39992[(2)] = inst_39814);

(statearr_39909_39992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (3))){
var inst_39864 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39866__$1,inst_39864);
} else {
if((state_val_39867 === (12))){
var inst_39785 = (state_39866[(7)]);
var inst_39798 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39785);
var state_39866__$1 = state_39866;
var statearr_39910_39993 = state_39866__$1;
(statearr_39910_39993[(2)] = inst_39798);

(statearr_39910_39993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (2))){
var inst_39782 = (state_39866[(10)]);
var inst_39784 = advenjure.ui.input.get_input.call(null,inst_39782);
var inst_39785 = inst_39784;
var state_39866__$1 = (function (){var statearr_39911 = state_39866;
(statearr_39911[(7)] = inst_39785);

return statearr_39911;
})();
var statearr_39912_39994 = state_39866__$1;
(statearr_39912_39994[(2)] = null);

(statearr_39912_39994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (23))){
var inst_39840 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39840)){
var statearr_39913_39995 = state_39866__$1;
(statearr_39913_39995[(1)] = (30));

} else {
var statearr_39914_39996 = state_39866__$1;
(statearr_39914_39996[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (35))){
var inst_39859 = advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"end-message","end-message",-2112830994));
var inst_39860 = advenjure.ui.input.exit.call(null);
var state_39866__$1 = (function (){var statearr_39915 = state_39866;
(statearr_39915[(11)] = inst_39859);

return statearr_39915;
})();
var statearr_39916_39997 = state_39866__$1;
(statearr_39916_39997[(2)] = inst_39860);

(statearr_39916_39997[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (19))){
var inst_39818 = (state_39866[(9)]);
var inst_39821 = (inst_39818 == null);
var inst_39822 = cljs.core.not.call(null,inst_39821);
var state_39866__$1 = state_39866;
if(inst_39822){
var statearr_39917_39998 = state_39866__$1;
(statearr_39917_39998[(1)] = (21));

} else {
var statearr_39918_39999 = state_39866__$1;
(statearr_39918_39999[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (11))){
var inst_39803 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39919_40000 = state_39866__$1;
(statearr_39919_40000[(2)] = inst_39803);

(statearr_39919_40000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (9))){
var state_39866__$1 = state_39866;
var statearr_39920_40001 = state_39866__$1;
(statearr_39920_40001[(2)] = true);

(statearr_39920_40001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (5))){
var inst_39782 = (state_39866[(10)]);
var inst_39816 = (state_39866[(2)]);
var inst_39817 = advenjure.game.process_input.call(null,inst_39782,inst_39816);
var inst_39818 = inst_39817;
var state_39866__$1 = (function (){var statearr_39921 = state_39866;
(statearr_39921[(9)] = inst_39818);

return statearr_39921;
})();
var statearr_39922_40002 = state_39866__$1;
(statearr_39922_40002[(2)] = null);

(statearr_39922_40002[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (14))){
var inst_39801 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39923_40003 = state_39866__$1;
(statearr_39923_40003[(2)] = inst_39801);

(statearr_39923_40003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (26))){
var inst_39836 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39924_40004 = state_39866__$1;
(statearr_39924_40004[(2)] = inst_39836);

(statearr_39924_40004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (16))){
var inst_39785 = (state_39866[(7)]);
var state_39866__$1 = state_39866;
var statearr_39925_40005 = state_39866__$1;
(statearr_39925_40005[(2)] = inst_39785);

(statearr_39925_40005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (30))){
var inst_39818 = (state_39866[(9)]);
var state_39866__$1 = state_39866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39866__$1,(33),inst_39818);
} else {
if((state_val_39867 === (10))){
var inst_39785 = (state_39866[(7)]);
var inst_39795 = inst_39785.cljs$lang$protocol_mask$partition$;
var inst_39796 = (!inst_39795);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39796)){
var statearr_39926_40006 = state_39866__$1;
(statearr_39926_40006[(1)] = (12));

} else {
var statearr_39927_40007 = state_39866__$1;
(statearr_39927_40007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (18))){
var inst_39810 = (state_39866[(2)]);
var inst_39785 = inst_39810;
var state_39866__$1 = (function (){var statearr_39928 = state_39866;
(statearr_39928[(7)] = inst_39785);

return statearr_39928;
})();
var statearr_39929_40008 = state_39866__$1;
(statearr_39929_40008[(2)] = null);

(statearr_39929_40008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (8))){
var inst_39807 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
if(cljs.core.truth_(inst_39807)){
var statearr_39930_40009 = state_39866__$1;
(statearr_39930_40009[(1)] = (15));

} else {
var statearr_39931_40010 = state_39866__$1;
(statearr_39931_40010[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
;
return ((function (switch__24055__auto__,k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function() {
var advenjure$game$state_machine__24056__auto__ = null;
var advenjure$game$state_machine__24056__auto____0 = (function (){
var statearr_39935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39935[(0)] = advenjure$game$state_machine__24056__auto__);

(statearr_39935[(1)] = (1));

return statearr_39935;
});
var advenjure$game$state_machine__24056__auto____1 = (function (state_39866){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_39866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e39936){if((e39936 instanceof Object)){
var ex__24059__auto__ = e39936;
var statearr_39937_40011 = state_39866;
(statearr_39937_40011[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40012 = state_39866;
state_39866 = G__40012;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$game$state_machine__24056__auto__ = function(state_39866){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24056__auto____1.call(this,state_39866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24056__auto____0;
advenjure$game$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24056__auto____1;
return advenjure$game$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
})();
var state__24328__auto__ = (function (){var statearr_39938 = f__24327__auto__.call(null);
(statearr_39938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto____$1);

return statearr_39938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});
;})(k,c__24326__auto____$1,inst_39779,inst_39868,state_val_39873,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
})();
var inst_39870 = cljs.core.async.impl.dispatch.run.call(null,inst_39869);
var state_39872__$1 = (function (){var statearr_39939 = state_39872;
(statearr_39939[(8)] = inst_39870);

return statearr_39939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39872__$1,inst_39868);
} else {
if((state_val_39873 === (12))){
var inst_39764 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
var statearr_39940_40013 = state_39872__$1;
(statearr_39940_40013[(2)] = inst_39764);

(statearr_39940_40013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (2))){
var inst_39748 = (state_39872[(7)]);
var inst_39751 = (inst_39748 == null);
var inst_39752 = cljs.core.not.call(null,inst_39751);
var state_39872__$1 = state_39872;
if(inst_39752){
var statearr_39941_40014 = state_39872__$1;
(statearr_39941_40014[(1)] = (4));

} else {
var statearr_39942_40015 = state_39872__$1;
(statearr_39942_40015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (11))){
var state_39872__$1 = state_39872;
var statearr_39943_40016 = state_39872__$1;
(statearr_39943_40016[(2)] = false);

(statearr_39943_40016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (9))){
var inst_39766 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
var statearr_39944_40017 = state_39872__$1;
(statearr_39944_40017[(2)] = inst_39766);

(statearr_39944_40017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (5))){
var inst_39748 = (state_39872[(7)]);
var inst_39768 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39748);
var state_39872__$1 = state_39872;
var statearr_39945_40018 = state_39872__$1;
(statearr_39945_40018[(2)] = inst_39768);

(statearr_39945_40018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (14))){
var inst_39748 = (state_39872[(7)]);
var state_39872__$1 = state_39872;
var statearr_39946_40019 = state_39872__$1;
(statearr_39946_40019[(2)] = inst_39748);

(statearr_39946_40019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (16))){
var inst_39773 = (state_39872[(2)]);
var inst_39748 = inst_39773;
var state_39872__$1 = (function (){var statearr_39947 = state_39872;
(statearr_39947[(7)] = inst_39748);

return statearr_39947;
})();
var statearr_39948_40020 = state_39872__$1;
(statearr_39948_40020[(2)] = null);

(statearr_39948_40020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (10))){
var inst_39748 = (state_39872[(7)]);
var inst_39761 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39748);
var state_39872__$1 = state_39872;
var statearr_39949_40021 = state_39872__$1;
(statearr_39949_40021[(2)] = inst_39761);

(statearr_39949_40021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (8))){
var inst_39748 = (state_39872[(7)]);
var inst_39758 = inst_39748.cljs$lang$protocol_mask$partition$;
var inst_39759 = (!inst_39758);
var state_39872__$1 = state_39872;
if(cljs.core.truth_(inst_39759)){
var statearr_39950_40022 = state_39872__$1;
(statearr_39950_40022[(1)] = (10));

} else {
var statearr_39951_40023 = state_39872__$1;
(statearr_39951_40023[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
;
return ((function (switch__24055__auto__,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras){
return (function() {
var advenjure$game$state_machine__24056__auto__ = null;
var advenjure$game$state_machine__24056__auto____0 = (function (){
var statearr_39955 = [null,null,null,null,null,null,null,null,null];
(statearr_39955[(0)] = advenjure$game$state_machine__24056__auto__);

(statearr_39955[(1)] = (1));

return statearr_39955;
});
var advenjure$game$state_machine__24056__auto____1 = (function (state_39872){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_39872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e39956){if((e39956 instanceof Object)){
var ex__24059__auto__ = e39956;
var statearr_39957_40024 = state_39872;
(statearr_39957_40024[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40025 = state_39872;
state_39872 = G__40025;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$game$state_machine__24056__auto__ = function(state_39872){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24056__auto____1.call(this,state_39872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24056__auto____0;
advenjure$game$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24056__auto____1;
return advenjure$game$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
})();
var state__24328__auto__ = (function (){var statearr_39958 = f__24327__auto__.call(null);
(statearr_39958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_39958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,game_state__$1,map__39745,map__39745__$1,extras))
);

return c__24326__auto__;
});

advenjure.game.run.cljs$lang$maxFixedArity = (2);

advenjure.game.run.cljs$lang$applyTo = (function (seq39741){
var G__39742 = cljs.core.first.call(null,seq39741);
var seq39741__$1 = cljs.core.next.call(null,seq39741);
var G__39743 = cljs.core.first.call(null,seq39741__$1);
var seq39741__$2 = cljs.core.next.call(null,seq39741__$1);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic(G__39742,G__39743,seq39741__$2);
});


//# sourceMappingURL=game.js.map?rel=1522121095139