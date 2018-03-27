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
var args40405 = [];
var len__21530__auto___40408 = arguments.length;
var i__21531__auto___40409 = (0);
while(true){
if((i__21531__auto___40409 < len__21530__auto___40408)){
args40405.push((arguments[i__21531__auto___40409]));

var G__40410 = (i__21531__auto___40409 + (1));
i__21531__auto___40409 = G__40410;
continue;
} else {
}
break;
}

var G__40407 = args40405.length;
switch (G__40407) {
case 2:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40405.length)].join('')));

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
var vec__40597 = advenjure.verb_map.find_verb.call(null,verb_map,clean);
var verb = cljs.core.nth.call(null,vec__40597,(0),null);
var tokens = cljs.core.nth.call(null,vec__40597,(1),null);
var handler = cljs.core.get.call(null,verb_map,verb);
if(cljs.core.truth_(handler)){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler){
return (function (state_40708){
var state_val_40709 = (state_40708[(1)]);
if((state_val_40709 === (7))){
var state_40708__$1 = state_40708;
var statearr_40710_40782 = state_40708__$1;
(statearr_40710_40782[(2)] = true);

(statearr_40710_40782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (20))){
var inst_40638 = (state_40708[(7)]);
var inst_40658 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40638);
var state_40708__$1 = state_40708;
var statearr_40711_40783 = state_40708__$1;
(statearr_40711_40783[(2)] = inst_40658);

(statearr_40711_40783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (27))){
var inst_40654 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40712_40784 = state_40708__$1;
(statearr_40712_40784[(2)] = inst_40654);

(statearr_40712_40784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (1))){
var inst_40600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40601 = [new cljs.core.Keyword(null,"moves","moves",927465255)];
var inst_40602 = (new cljs.core.PersistentVector(null,1,(5),inst_40600,inst_40601,null));
var inst_40603 = cljs.core.update_in.call(null,game_state,inst_40602,cljs.core.inc);
var inst_40604 = advenjure.hooks.execute.call(null,inst_40603,new cljs.core.Keyword(null,"before-handler","before-handler",-1763527428));
var inst_40605 = inst_40604;
var state_40708__$1 = (function (){var statearr_40713 = state_40708;
(statearr_40713[(8)] = inst_40605);

return statearr_40713;
})();
var statearr_40714_40785 = state_40708__$1;
(statearr_40714_40785[(2)] = null);

(statearr_40714_40785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (24))){
var inst_40656 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40715_40786 = state_40708__$1;
(statearr_40715_40786[(2)] = inst_40656);

(statearr_40715_40786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (39))){
var inst_40697 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40697)){
var statearr_40716_40787 = state_40708__$1;
(statearr_40716_40787[(1)] = (46));

} else {
var statearr_40717_40788 = state_40708__$1;
(statearr_40717_40788[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (46))){
var inst_40675 = (state_40708[(9)]);
var state_40708__$1 = state_40708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40708__$1,(49),inst_40675);
} else {
if((state_val_40709 === (4))){
var inst_40605 = (state_40708[(8)]);
var inst_40611 = inst_40605.cljs$core$async$impl$protocols$ReadPort$;
var inst_40612 = (false) || (inst_40611);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40612)){
var statearr_40718_40789 = state_40708__$1;
(statearr_40718_40789[(1)] = (7));

} else {
var statearr_40719_40790 = state_40708__$1;
(statearr_40719_40790[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (15))){
var inst_40634 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40720_40791 = state_40708__$1;
(statearr_40720_40791[(2)] = inst_40634);

(statearr_40720_40791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (48))){
var inst_40704 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40721_40792 = state_40708__$1;
(statearr_40721_40792[(2)] = inst_40704);

(statearr_40721_40792[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (21))){
var inst_40660 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40660)){
var statearr_40722_40793 = state_40708__$1;
(statearr_40722_40793[(1)] = (28));

} else {
var statearr_40723_40794 = state_40708__$1;
(statearr_40723_40794[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (31))){
var inst_40663 = (state_40708[(2)]);
var inst_40638 = inst_40663;
var state_40708__$1 = (function (){var statearr_40724 = state_40708;
(statearr_40724[(7)] = inst_40638);

return statearr_40724;
})();
var statearr_40725_40795 = state_40708__$1;
(statearr_40725_40795[(2)] = null);

(statearr_40725_40795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (32))){
var inst_40669 = (state_40708[(10)]);
var state_40708__$1 = state_40708;
var statearr_40726_40796 = state_40708__$1;
(statearr_40726_40796[(2)] = inst_40669);

(statearr_40726_40796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (40))){
var state_40708__$1 = state_40708;
var statearr_40727_40797 = state_40708__$1;
(statearr_40727_40797[(2)] = true);

(statearr_40727_40797[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (33))){
var inst_40636 = (state_40708[(11)]);
var state_40708__$1 = state_40708;
var statearr_40728_40798 = state_40708__$1;
(statearr_40728_40798[(2)] = inst_40636);

(statearr_40728_40798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (13))){
var inst_40605 = (state_40708[(8)]);
var state_40708__$1 = state_40708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40708__$1,(16),inst_40605);
} else {
if((state_val_40709 === (22))){
var state_40708__$1 = state_40708;
var statearr_40729_40799 = state_40708__$1;
(statearr_40729_40799[(2)] = true);

(statearr_40729_40799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (36))){
var inst_40706 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40708__$1,inst_40706);
} else {
if((state_val_40709 === (41))){
var inst_40675 = (state_40708[(9)]);
var inst_40685 = inst_40675.cljs$lang$protocol_mask$partition$;
var inst_40686 = (!inst_40685);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40686)){
var statearr_40730_40800 = state_40708__$1;
(statearr_40730_40800[(1)] = (43));

} else {
var statearr_40731_40801 = state_40708__$1;
(statearr_40731_40801[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (43))){
var inst_40675 = (state_40708[(9)]);
var inst_40688 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40675);
var state_40708__$1 = state_40708;
var statearr_40732_40802 = state_40708__$1;
(statearr_40732_40802[(2)] = inst_40688);

(statearr_40732_40802[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (29))){
var inst_40638 = (state_40708[(7)]);
var state_40708__$1 = state_40708;
var statearr_40733_40803 = state_40708__$1;
(statearr_40733_40803[(2)] = inst_40638);

(statearr_40733_40803[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (44))){
var state_40708__$1 = state_40708;
var statearr_40734_40804 = state_40708__$1;
(statearr_40734_40804[(2)] = false);

(statearr_40734_40804[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (6))){
var inst_40627 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40627)){
var statearr_40735_40805 = state_40708__$1;
(statearr_40735_40805[(1)] = (13));

} else {
var statearr_40736_40806 = state_40708__$1;
(statearr_40736_40806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (28))){
var inst_40638 = (state_40708[(7)]);
var state_40708__$1 = state_40708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40708__$1,(31),inst_40638);
} else {
if((state_val_40709 === (25))){
var inst_40638 = (state_40708[(7)]);
var inst_40651 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40638);
var state_40708__$1 = state_40708;
var statearr_40737_40807 = state_40708__$1;
(statearr_40737_40807[(2)] = inst_40651);

(statearr_40737_40807[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (34))){
var inst_40673 = (state_40708[(2)]);
var inst_40674 = advenjure.hooks.execute.call(null,inst_40673,new cljs.core.Keyword(null,"after-handler","after-handler",216363306));
var inst_40675 = inst_40674;
var state_40708__$1 = (function (){var statearr_40738 = state_40708;
(statearr_40738[(9)] = inst_40675);

return statearr_40738;
})();
var statearr_40739_40808 = state_40708__$1;
(statearr_40739_40808[(2)] = null);

(statearr_40739_40808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (17))){
var inst_40638 = (state_40708[(7)]);
var inst_40641 = (inst_40638 == null);
var inst_40642 = cljs.core.not.call(null,inst_40641);
var state_40708__$1 = state_40708;
if(inst_40642){
var statearr_40740_40809 = state_40708__$1;
(statearr_40740_40809[(1)] = (19));

} else {
var statearr_40741_40810 = state_40708__$1;
(statearr_40741_40810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (3))){
var inst_40636 = (state_40708[(11)]);
var inst_40636__$1 = (state_40708[(2)]);
var inst_40637 = cljs.core.apply.call(null,handler,inst_40636__$1,tokens);
var inst_40638 = inst_40637;
var state_40708__$1 = (function (){var statearr_40742 = state_40708;
(statearr_40742[(7)] = inst_40638);

(statearr_40742[(11)] = inst_40636__$1);

return statearr_40742;
})();
var statearr_40743_40811 = state_40708__$1;
(statearr_40743_40811[(2)] = null);

(statearr_40743_40811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (12))){
var inst_40621 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40744_40812 = state_40708__$1;
(statearr_40744_40812[(2)] = inst_40621);

(statearr_40744_40812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (2))){
var inst_40605 = (state_40708[(8)]);
var inst_40608 = (inst_40605 == null);
var inst_40609 = cljs.core.not.call(null,inst_40608);
var state_40708__$1 = state_40708;
if(inst_40609){
var statearr_40745_40813 = state_40708__$1;
(statearr_40745_40813[(1)] = (4));

} else {
var statearr_40746_40814 = state_40708__$1;
(statearr_40746_40814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (23))){
var inst_40638 = (state_40708[(7)]);
var inst_40648 = inst_40638.cljs$lang$protocol_mask$partition$;
var inst_40649 = (!inst_40648);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40649)){
var statearr_40747_40815 = state_40708__$1;
(statearr_40747_40815[(1)] = (25));

} else {
var statearr_40748_40816 = state_40708__$1;
(statearr_40748_40816[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (47))){
var inst_40675 = (state_40708[(9)]);
var state_40708__$1 = state_40708;
var statearr_40749_40817 = state_40708__$1;
(statearr_40749_40817[(2)] = inst_40675);

(statearr_40749_40817[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (35))){
var inst_40675 = (state_40708[(9)]);
var inst_40678 = (inst_40675 == null);
var inst_40679 = cljs.core.not.call(null,inst_40678);
var state_40708__$1 = state_40708;
if(inst_40679){
var statearr_40750_40818 = state_40708__$1;
(statearr_40750_40818[(1)] = (37));

} else {
var statearr_40751_40819 = state_40708__$1;
(statearr_40751_40819[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (19))){
var inst_40638 = (state_40708[(7)]);
var inst_40644 = inst_40638.cljs$core$async$impl$protocols$ReadPort$;
var inst_40645 = (false) || (inst_40644);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40645)){
var statearr_40752_40820 = state_40708__$1;
(statearr_40752_40820[(1)] = (22));

} else {
var statearr_40753_40821 = state_40708__$1;
(statearr_40753_40821[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (11))){
var state_40708__$1 = state_40708;
var statearr_40754_40822 = state_40708__$1;
(statearr_40754_40822[(2)] = false);

(statearr_40754_40822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (9))){
var inst_40623 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40755_40823 = state_40708__$1;
(statearr_40755_40823[(2)] = inst_40623);

(statearr_40755_40823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (5))){
var inst_40605 = (state_40708[(8)]);
var inst_40625 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40605);
var state_40708__$1 = state_40708;
var statearr_40756_40824 = state_40708__$1;
(statearr_40756_40824[(2)] = inst_40625);

(statearr_40756_40824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (14))){
var inst_40605 = (state_40708[(8)]);
var state_40708__$1 = state_40708;
var statearr_40757_40825 = state_40708__$1;
(statearr_40757_40825[(2)] = inst_40605);

(statearr_40757_40825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (45))){
var inst_40691 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40758_40826 = state_40708__$1;
(statearr_40758_40826[(2)] = inst_40691);

(statearr_40758_40826[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (26))){
var state_40708__$1 = state_40708;
var statearr_40759_40827 = state_40708__$1;
(statearr_40759_40827[(2)] = false);

(statearr_40759_40827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (16))){
var inst_40630 = (state_40708[(2)]);
var inst_40605 = inst_40630;
var state_40708__$1 = (function (){var statearr_40760 = state_40708;
(statearr_40760[(8)] = inst_40605);

return statearr_40760;
})();
var statearr_40761_40828 = state_40708__$1;
(statearr_40761_40828[(2)] = null);

(statearr_40761_40828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (38))){
var inst_40675 = (state_40708[(9)]);
var inst_40695 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40675);
var state_40708__$1 = state_40708;
var statearr_40762_40829 = state_40708__$1;
(statearr_40762_40829[(2)] = inst_40695);

(statearr_40762_40829[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (30))){
var inst_40667 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40763_40830 = state_40708__$1;
(statearr_40763_40830[(2)] = inst_40667);

(statearr_40763_40830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (10))){
var inst_40605 = (state_40708[(8)]);
var inst_40618 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40605);
var state_40708__$1 = state_40708;
var statearr_40764_40831 = state_40708__$1;
(statearr_40764_40831[(2)] = inst_40618);

(statearr_40764_40831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (18))){
var inst_40669 = (state_40708[(10)]);
var inst_40669__$1 = (state_40708[(2)]);
var state_40708__$1 = (function (){var statearr_40765 = state_40708;
(statearr_40765[(10)] = inst_40669__$1);

return statearr_40765;
})();
if(cljs.core.truth_(inst_40669__$1)){
var statearr_40766_40832 = state_40708__$1;
(statearr_40766_40832[(1)] = (32));

} else {
var statearr_40767_40833 = state_40708__$1;
(statearr_40767_40833[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (42))){
var inst_40693 = (state_40708[(2)]);
var state_40708__$1 = state_40708;
var statearr_40768_40834 = state_40708__$1;
(statearr_40768_40834[(2)] = inst_40693);

(statearr_40768_40834[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (37))){
var inst_40675 = (state_40708[(9)]);
var inst_40681 = inst_40675.cljs$core$async$impl$protocols$ReadPort$;
var inst_40682 = (false) || (inst_40681);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40682)){
var statearr_40769_40835 = state_40708__$1;
(statearr_40769_40835[(1)] = (40));

} else {
var statearr_40770_40836 = state_40708__$1;
(statearr_40770_40836[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (8))){
var inst_40605 = (state_40708[(8)]);
var inst_40615 = inst_40605.cljs$lang$protocol_mask$partition$;
var inst_40616 = (!inst_40615);
var state_40708__$1 = state_40708;
if(cljs.core.truth_(inst_40616)){
var statearr_40771_40837 = state_40708__$1;
(statearr_40771_40837[(1)] = (10));

} else {
var statearr_40772_40838 = state_40708__$1;
(statearr_40772_40838[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40709 === (49))){
var inst_40700 = (state_40708[(2)]);
var inst_40675 = inst_40700;
var state_40708__$1 = (function (){var statearr_40773 = state_40708;
(statearr_40773[(9)] = inst_40675);

return statearr_40773;
})();
var statearr_40774_40839 = state_40708__$1;
(statearr_40774_40839[(2)] = null);

(statearr_40774_40839[(1)] = (35));


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
});})(c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler))
;
return ((function (switch__24031__auto__,c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler){
return (function() {
var advenjure$game$process_input_$_state_machine__24032__auto__ = null;
var advenjure$game$process_input_$_state_machine__24032__auto____0 = (function (){
var statearr_40778 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40778[(0)] = advenjure$game$process_input_$_state_machine__24032__auto__);

(statearr_40778[(1)] = (1));

return statearr_40778;
});
var advenjure$game$process_input_$_state_machine__24032__auto____1 = (function (state_40708){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_40708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e40779){if((e40779 instanceof Object)){
var ex__24035__auto__ = e40779;
var statearr_40780_40840 = state_40708;
(statearr_40780_40840[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40841 = state_40708;
state_40708 = G__40841;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$game$process_input_$_state_machine__24032__auto__ = function(state_40708){
switch(arguments.length){
case 0:
return advenjure$game$process_input_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$game$process_input_$_state_machine__24032__auto____1.call(this,state_40708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$process_input_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$process_input_$_state_machine__24032__auto____0;
advenjure$game$process_input_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$process_input_$_state_machine__24032__auto____1;
return advenjure$game$process_input_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler))
})();
var state__24230__auto__ = (function (){var statearr_40781 = f__24229__auto__.call(null);
(statearr_40781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_40781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,verb_map,clean,vec__40597,verb,tokens,handler))
);

return c__24228__auto__;
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
var len__21530__auto___41060 = arguments.length;
var i__21531__auto___41061 = (0);
while(true){
if((i__21531__auto___41061 < len__21530__auto___41060)){
args__21537__auto__.push((arguments[i__21531__auto___41061]));

var G__41062 = (i__21531__auto___41061 + (1));
i__21531__auto___41061 = G__41062;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,finished_QMARK_,p__40845){
var map__40846 = p__40845;
var map__40846__$1 = ((((!((map__40846 == null)))?((((map__40846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40846):map__40846);
var extras = map__40846__$1;
var game_state__$1 = advenjure.game.use_plugin.call(null,game_state,cljs.core.merge.call(null,extras,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"finished","finished",-1018867731),finished_QMARK_], null)));
advenjure.ui.output.init.call(null);

advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"start-message","start-message",-630575289));

var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function (state_40973){
var state_val_40974 = (state_40973[(1)]);
if((state_val_40974 === (7))){
var state_40973__$1 = state_40973;
var statearr_40975_41063 = state_40973__$1;
(statearr_40975_41063[(2)] = true);

(statearr_40975_41063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (1))){
var inst_40848 = advenjure.ui.input.read_key.call(null);
var inst_40849 = inst_40848;
var state_40973__$1 = (function (){var statearr_40976 = state_40973;
(statearr_40976[(7)] = inst_40849);

return statearr_40976;
})();
var statearr_40977_41064 = state_40973__$1;
(statearr_40977_41064[(2)] = null);

(statearr_40977_41064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (4))){
var inst_40849 = (state_40973[(7)]);
var inst_40855 = inst_40849.cljs$core$async$impl$protocols$ReadPort$;
var inst_40856 = (false) || (inst_40855);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40856)){
var statearr_40978_41065 = state_40973__$1;
(statearr_40978_41065[(1)] = (7));

} else {
var statearr_40979_41066 = state_40973__$1;
(statearr_40979_41066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (15))){
var inst_40878 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40980_41067 = state_40973__$1;
(statearr_40980_41067[(2)] = inst_40878);

(statearr_40980_41067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (13))){
var inst_40849 = (state_40973[(7)]);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40973__$1,(16),inst_40849);
} else {
if((state_val_40974 === (6))){
var inst_40871 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40871)){
var statearr_40981_41068 = state_40973__$1;
(statearr_40981_41068[(1)] = (13));

} else {
var statearr_40982_41069 = state_40973__$1;
(statearr_40982_41069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (3))){
var inst_40880 = (state_40973[(2)]);
var inst_40969 = cljs.core.async.chan.call(null,(1));
var inst_40970 = (function (){var k = inst_40880;
var c__24228__auto____$1 = inst_40969;
return ((function (k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function (state_40967){
var state_val_40968 = (state_40967[(1)]);
if((state_val_40968 === (7))){
var inst_40886 = (state_40967[(7)]);
var inst_40906 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40886);
var state_40967__$1 = state_40967;
var statearr_40983_41070 = state_40967__$1;
(statearr_40983_41070[(2)] = inst_40906);

(statearr_40983_41070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (20))){
var inst_40950 = (state_40967[(8)]);
var inst_40950__$1 = (state_40967[(2)]);
var inst_40951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40952 = [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_40953 = (new cljs.core.PersistentVector(null,2,(5),inst_40951,inst_40952,null));
var inst_40954 = cljs.core.get_in.call(null,inst_40950__$1,inst_40953);
var inst_40955 = inst_40954.call(null,inst_40950__$1);
var inst_40956 = cljs.core.not.call(null,inst_40955);
var state_40967__$1 = (function (){var statearr_40984 = state_40967;
(statearr_40984[(8)] = inst_40950__$1);

return statearr_40984;
})();
if(inst_40956){
var statearr_40985_41071 = state_40967__$1;
(statearr_40985_41071[(1)] = (34));

} else {
var statearr_40986_41072 = state_40967__$1;
(statearr_40986_41072[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (27))){
var inst_40919 = (state_40967[(9)]);
var inst_40932 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40919);
var state_40967__$1 = state_40967;
var statearr_40987_41073 = state_40967__$1;
(statearr_40987_41073[(2)] = inst_40932);

(statearr_40987_41073[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (1))){
var inst_40881 = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state__$1);
var inst_40882 = advenjure.change_rooms.change_rooms.call(null,game_state__$1,inst_40881);
var inst_40883 = inst_40882;
var state_40967__$1 = (function (){var statearr_40988 = state_40967;
(statearr_40988[(10)] = inst_40883);

return statearr_40988;
})();
var statearr_40989_41074 = state_40967__$1;
(statearr_40989_41074[(2)] = null);

(statearr_40989_41074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (24))){
var state_40967__$1 = state_40967;
var statearr_40990_41075 = state_40967__$1;
(statearr_40990_41075[(2)] = true);

(statearr_40990_41075[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (4))){
var inst_40886 = (state_40967[(7)]);
var inst_40889 = (inst_40886 == null);
var inst_40890 = cljs.core.not.call(null,inst_40889);
var state_40967__$1 = state_40967;
if(inst_40890){
var statearr_40991_41076 = state_40967__$1;
(statearr_40991_41076[(1)] = (6));

} else {
var statearr_40992_41077 = state_40967__$1;
(statearr_40992_41077[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (15))){
var inst_40886 = (state_40967[(7)]);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40967__$1,(18),inst_40886);
} else {
if((state_val_40968 === (21))){
var inst_40919 = (state_40967[(9)]);
var inst_40925 = inst_40919.cljs$core$async$impl$protocols$ReadPort$;
var inst_40926 = (false) || (inst_40925);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40926)){
var statearr_40993_41078 = state_40967__$1;
(statearr_40993_41078[(1)] = (24));

} else {
var statearr_40994_41079 = state_40967__$1;
(statearr_40994_41079[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (31))){
var inst_40919 = (state_40967[(9)]);
var state_40967__$1 = state_40967;
var statearr_40995_41080 = state_40967__$1;
(statearr_40995_41080[(2)] = inst_40919);

(statearr_40995_41080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (32))){
var inst_40948 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_40996_41081 = state_40967__$1;
(statearr_40996_41081[(2)] = inst_40948);

(statearr_40996_41081[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (33))){
var inst_40944 = (state_40967[(2)]);
var inst_40919 = inst_40944;
var state_40967__$1 = (function (){var statearr_40997 = state_40967;
(statearr_40997[(9)] = inst_40919);

return statearr_40997;
})();
var statearr_40998_41082 = state_40967__$1;
(statearr_40998_41082[(2)] = null);

(statearr_40998_41082[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (13))){
var state_40967__$1 = state_40967;
var statearr_40999_41083 = state_40967__$1;
(statearr_40999_41083[(2)] = false);

(statearr_40999_41083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (22))){
var inst_40919 = (state_40967[(9)]);
var inst_40939 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40919);
var state_40967__$1 = state_40967;
var statearr_41000_41084 = state_40967__$1;
(statearr_41000_41084[(2)] = inst_40939);

(statearr_41000_41084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (36))){
var inst_40963 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41001_41085 = state_40967__$1;
(statearr_41001_41085[(2)] = inst_40963);

(statearr_41001_41085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (29))){
var inst_40935 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41002_41086 = state_40967__$1;
(statearr_41002_41086[(2)] = inst_40935);

(statearr_41002_41086[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (6))){
var inst_40886 = (state_40967[(7)]);
var inst_40892 = inst_40886.cljs$core$async$impl$protocols$ReadPort$;
var inst_40893 = (false) || (inst_40892);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40893)){
var statearr_41003_41087 = state_40967__$1;
(statearr_41003_41087[(1)] = (9));

} else {
var statearr_41004_41088 = state_40967__$1;
(statearr_41004_41088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (28))){
var state_40967__$1 = state_40967;
var statearr_41005_41089 = state_40967__$1;
(statearr_41005_41089[(2)] = false);

(statearr_41005_41089[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (25))){
var inst_40919 = (state_40967[(9)]);
var inst_40929 = inst_40919.cljs$lang$protocol_mask$partition$;
var inst_40930 = (!inst_40929);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40930)){
var statearr_41006_41090 = state_40967__$1;
(statearr_41006_41090[(1)] = (27));

} else {
var statearr_41007_41091 = state_40967__$1;
(statearr_41007_41091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (34))){
var inst_40950 = (state_40967[(8)]);
var inst_40883 = inst_40950;
var state_40967__$1 = (function (){var statearr_41008 = state_40967;
(statearr_41008[(10)] = inst_40883);

return statearr_41008;
})();
var statearr_41009_41092 = state_40967__$1;
(statearr_41009_41092[(2)] = null);

(statearr_41009_41092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (17))){
var inst_40915 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41010_41093 = state_40967__$1;
(statearr_41010_41093[(2)] = inst_40915);

(statearr_41010_41093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (3))){
var inst_40965 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40967__$1,inst_40965);
} else {
if((state_val_40968 === (12))){
var inst_40886 = (state_40967[(7)]);
var inst_40899 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40886);
var state_40967__$1 = state_40967;
var statearr_41011_41094 = state_40967__$1;
(statearr_41011_41094[(2)] = inst_40899);

(statearr_41011_41094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (2))){
var inst_40883 = (state_40967[(10)]);
var inst_40885 = advenjure.ui.input.get_input.call(null,inst_40883);
var inst_40886 = inst_40885;
var state_40967__$1 = (function (){var statearr_41012 = state_40967;
(statearr_41012[(7)] = inst_40886);

return statearr_41012;
})();
var statearr_41013_41095 = state_40967__$1;
(statearr_41013_41095[(2)] = null);

(statearr_41013_41095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (23))){
var inst_40941 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40941)){
var statearr_41014_41096 = state_40967__$1;
(statearr_41014_41096[(1)] = (30));

} else {
var statearr_41015_41097 = state_40967__$1;
(statearr_41015_41097[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (35))){
var inst_40960 = advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"end-message","end-message",-2112830994));
var inst_40961 = advenjure.ui.input.exit.call(null);
var state_40967__$1 = (function (){var statearr_41016 = state_40967;
(statearr_41016[(11)] = inst_40960);

return statearr_41016;
})();
var statearr_41017_41098 = state_40967__$1;
(statearr_41017_41098[(2)] = inst_40961);

(statearr_41017_41098[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (19))){
var inst_40919 = (state_40967[(9)]);
var inst_40922 = (inst_40919 == null);
var inst_40923 = cljs.core.not.call(null,inst_40922);
var state_40967__$1 = state_40967;
if(inst_40923){
var statearr_41018_41099 = state_40967__$1;
(statearr_41018_41099[(1)] = (21));

} else {
var statearr_41019_41100 = state_40967__$1;
(statearr_41019_41100[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (11))){
var inst_40904 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41020_41101 = state_40967__$1;
(statearr_41020_41101[(2)] = inst_40904);

(statearr_41020_41101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (9))){
var state_40967__$1 = state_40967;
var statearr_41021_41102 = state_40967__$1;
(statearr_41021_41102[(2)] = true);

(statearr_41021_41102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (5))){
var inst_40883 = (state_40967[(10)]);
var inst_40917 = (state_40967[(2)]);
var inst_40918 = advenjure.game.process_input.call(null,inst_40883,inst_40917);
var inst_40919 = inst_40918;
var state_40967__$1 = (function (){var statearr_41022 = state_40967;
(statearr_41022[(9)] = inst_40919);

return statearr_41022;
})();
var statearr_41023_41103 = state_40967__$1;
(statearr_41023_41103[(2)] = null);

(statearr_41023_41103[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (14))){
var inst_40902 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41024_41104 = state_40967__$1;
(statearr_41024_41104[(2)] = inst_40902);

(statearr_41024_41104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (26))){
var inst_40937 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_41025_41105 = state_40967__$1;
(statearr_41025_41105[(2)] = inst_40937);

(statearr_41025_41105[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (16))){
var inst_40886 = (state_40967[(7)]);
var state_40967__$1 = state_40967;
var statearr_41026_41106 = state_40967__$1;
(statearr_41026_41106[(2)] = inst_40886);

(statearr_41026_41106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (30))){
var inst_40919 = (state_40967[(9)]);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40967__$1,(33),inst_40919);
} else {
if((state_val_40968 === (10))){
var inst_40886 = (state_40967[(7)]);
var inst_40896 = inst_40886.cljs$lang$protocol_mask$partition$;
var inst_40897 = (!inst_40896);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40897)){
var statearr_41027_41107 = state_40967__$1;
(statearr_41027_41107[(1)] = (12));

} else {
var statearr_41028_41108 = state_40967__$1;
(statearr_41028_41108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (18))){
var inst_40911 = (state_40967[(2)]);
var inst_40886 = inst_40911;
var state_40967__$1 = (function (){var statearr_41029 = state_40967;
(statearr_41029[(7)] = inst_40886);

return statearr_41029;
})();
var statearr_41030_41109 = state_40967__$1;
(statearr_41030_41109[(2)] = null);

(statearr_41030_41109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (8))){
var inst_40908 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40908)){
var statearr_41031_41110 = state_40967__$1;
(statearr_41031_41110[(1)] = (15));

} else {
var statearr_41032_41111 = state_40967__$1;
(statearr_41032_41111[(1)] = (16));

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
});})(k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
;
return ((function (switch__24031__auto__,k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function() {
var advenjure$game$state_machine__24032__auto__ = null;
var advenjure$game$state_machine__24032__auto____0 = (function (){
var statearr_41036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41036[(0)] = advenjure$game$state_machine__24032__auto__);

(statearr_41036[(1)] = (1));

return statearr_41036;
});
var advenjure$game$state_machine__24032__auto____1 = (function (state_40967){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_40967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e41037){if((e41037 instanceof Object)){
var ex__24035__auto__ = e41037;
var statearr_41038_41112 = state_40967;
(statearr_41038_41112[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41113 = state_40967;
state_40967 = G__41113;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$game$state_machine__24032__auto__ = function(state_40967){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24032__auto____1.call(this,state_40967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24032__auto____0;
advenjure$game$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24032__auto____1;
return advenjure$game$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
})();
var state__24230__auto__ = (function (){var statearr_41039 = f__24229__auto__.call(null);
(statearr_41039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto____$1);

return statearr_41039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});
;})(k,c__24228__auto____$1,inst_40880,inst_40969,state_val_40974,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
})();
var inst_40971 = cljs.core.async.impl.dispatch.run.call(null,inst_40970);
var state_40973__$1 = (function (){var statearr_41040 = state_40973;
(statearr_41040[(8)] = inst_40971);

return statearr_41040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40973__$1,inst_40969);
} else {
if((state_val_40974 === (12))){
var inst_40865 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_41041_41114 = state_40973__$1;
(statearr_41041_41114[(2)] = inst_40865);

(statearr_41041_41114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (2))){
var inst_40849 = (state_40973[(7)]);
var inst_40852 = (inst_40849 == null);
var inst_40853 = cljs.core.not.call(null,inst_40852);
var state_40973__$1 = state_40973;
if(inst_40853){
var statearr_41042_41115 = state_40973__$1;
(statearr_41042_41115[(1)] = (4));

} else {
var statearr_41043_41116 = state_40973__$1;
(statearr_41043_41116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (11))){
var state_40973__$1 = state_40973;
var statearr_41044_41117 = state_40973__$1;
(statearr_41044_41117[(2)] = false);

(statearr_41044_41117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (9))){
var inst_40867 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_41045_41118 = state_40973__$1;
(statearr_41045_41118[(2)] = inst_40867);

(statearr_41045_41118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (5))){
var inst_40849 = (state_40973[(7)]);
var inst_40869 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40849);
var state_40973__$1 = state_40973;
var statearr_41046_41119 = state_40973__$1;
(statearr_41046_41119[(2)] = inst_40869);

(statearr_41046_41119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (14))){
var inst_40849 = (state_40973[(7)]);
var state_40973__$1 = state_40973;
var statearr_41047_41120 = state_40973__$1;
(statearr_41047_41120[(2)] = inst_40849);

(statearr_41047_41120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (16))){
var inst_40874 = (state_40973[(2)]);
var inst_40849 = inst_40874;
var state_40973__$1 = (function (){var statearr_41048 = state_40973;
(statearr_41048[(7)] = inst_40849);

return statearr_41048;
})();
var statearr_41049_41121 = state_40973__$1;
(statearr_41049_41121[(2)] = null);

(statearr_41049_41121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (10))){
var inst_40849 = (state_40973[(7)]);
var inst_40862 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40849);
var state_40973__$1 = state_40973;
var statearr_41050_41122 = state_40973__$1;
(statearr_41050_41122[(2)] = inst_40862);

(statearr_41050_41122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (8))){
var inst_40849 = (state_40973[(7)]);
var inst_40859 = inst_40849.cljs$lang$protocol_mask$partition$;
var inst_40860 = (!inst_40859);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40860)){
var statearr_41051_41123 = state_40973__$1;
(statearr_41051_41123[(1)] = (10));

} else {
var statearr_41052_41124 = state_40973__$1;
(statearr_41052_41124[(1)] = (11));

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
});})(c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
;
return ((function (switch__24031__auto__,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras){
return (function() {
var advenjure$game$state_machine__24032__auto__ = null;
var advenjure$game$state_machine__24032__auto____0 = (function (){
var statearr_41056 = [null,null,null,null,null,null,null,null,null];
(statearr_41056[(0)] = advenjure$game$state_machine__24032__auto__);

(statearr_41056[(1)] = (1));

return statearr_41056;
});
var advenjure$game$state_machine__24032__auto____1 = (function (state_40973){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_40973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e41057){if((e41057 instanceof Object)){
var ex__24035__auto__ = e41057;
var statearr_41058_41125 = state_40973;
(statearr_41058_41125[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41126 = state_40973;
state_40973 = G__41126;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$game$state_machine__24032__auto__ = function(state_40973){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24032__auto____1.call(this,state_40973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24032__auto____0;
advenjure$game$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24032__auto____1;
return advenjure$game$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
})();
var state__24230__auto__ = (function (){var statearr_41059 = f__24229__auto__.call(null);
(statearr_41059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_41059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,game_state__$1,map__40846,map__40846__$1,extras))
);

return c__24228__auto__;
});

advenjure.game.run.cljs$lang$maxFixedArity = (2);

advenjure.game.run.cljs$lang$applyTo = (function (seq40842){
var G__40843 = cljs.core.first.call(null,seq40842);
var seq40842__$1 = cljs.core.next.call(null,seq40842);
var G__40844 = cljs.core.first.call(null,seq40842__$1);
var seq40842__$2 = cljs.core.next.call(null,seq40842__$1);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic(G__40843,G__40844,seq40842__$2);
});


//# sourceMappingURL=game.js.map?rel=1522181439772