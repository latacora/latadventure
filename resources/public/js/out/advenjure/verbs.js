// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.verbs');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('advenjure.ui.input');
goog.require('advenjure.ui.output');
goog.require('advenjure.rooms');
goog.require('clojure.set');
goog.require('advenjure.gettext.core');
goog.require('advenjure.hooks');
goog.require('advenjure.utils');
goog.require('advenjure.change_rooms');
goog.require('advenjure.eval');
advenjure.verbs.noop = (function advenjure$verbs$noop(kw){
return (function() { 
var G__36467__delegate = function (gs,item,etc){
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var speech = temp__4655__auto__;
return advenjure.utils.say.call(null,speech);
} else {
return null;
}
};
var G__36467 = function (gs,item,var_args){
var etc = null;
if (arguments.length > 2) {
var G__36475__i = 0, G__36475__a = new Array(arguments.length -  2);
while (G__36475__i < G__36475__a.length) {G__36475__a[G__36475__i] = arguments[G__36475__i + 2]; ++G__36475__i;}
  etc = new cljs.core.IndexedSeq(G__36475__a,0);
} 
return G__36467__delegate.call(this,gs,item,etc);};
G__36467.cljs$lang$maxFixedArity = 2;
G__36467.cljs$lang$applyTo = (function (arglist__36476){
var gs = cljs.core.first(arglist__36476);
arglist__36476 = cljs.core.next(arglist__36476);
var item = cljs.core.first(arglist__36476);
var etc = cljs.core.rest(arglist__36476);
return G__36467__delegate(gs,item,etc);
});
G__36467.cljs$core$IFn$_invoke$arity$variadic = G__36467__delegate;
return G__36467;
})()
;
});
advenjure.verbs.ask_ambiguous = (function advenjure$verbs$ask_ambiguous(item_name,items){
var first_different = (function (spec){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36477_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36477_SHARP_,item_name);
}),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(spec)));
});
var names = cljs.core.map.call(null,first_different,items);
var names__$1 = cljs.core.map.call(null,((function (first_different,names){
return (function (p1__36478_SHARP_){
return [cljs.core.str("the "),cljs.core.str(p1__36478_SHARP_)].join('');
});})(first_different,names))
,names);
var first_names = clojure.string.join.call(null,", ",cljs.core.butlast.call(null,names__$1));
return [cljs.core.str("Which "),cljs.core.str(item_name),cljs.core.str("? "),cljs.core.str(advenjure.utils.capfirst.call(null,first_names)),cljs.core.str(" or "),cljs.core.str(cljs.core.last.call(null,names__$1)),cljs.core.str("?")].join('');
});
/**
 * Takes the verb name, the kw to look up at the item at the handler function,
 *   wraps the function with the common logic such as trying to find the item,
 *   executing pre/post conditions, etc.
 */
advenjure.verbs.make_item_handler = (function advenjure$verbs$make_item_handler(var_args){
var args36479 = [];
var len__21530__auto___37260 = arguments.length;
var i__21531__auto___37261 = (0);
while(true){
if((i__21531__auto___37261 < len__21530__auto___37260)){
args36479.push((arguments[i__21531__auto___37261]));

var G__37263 = (i__21531__auto___37261 + (1));
i__21531__auto___37261 = G__37263;
continue;
} else {
}
break;
}

var G__36485 = args36479.length;
switch (G__36485) {
case 2:
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args36479.slice((3)),(0),null));
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__36486){
var map__36487 = p__36486;
var map__36487__$1 = ((((!((map__36487 == null)))?((((map__36487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36487):map__36487);
var kw_required = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__36487,map__36487__$1,kw_required){
return (function() {
var G__37269 = null;
var G__37269__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__37269__2 = (function (game_state,item_name){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function (state_36855){
var state_val_36856 = (state_36855[(1)]);
if((state_val_36856 === (65))){
var inst_36522 = (state_36855[(7)]);
var inst_36630 = advenjure.verbs.ask_ambiguous.call(null,item_name,inst_36522);
var inst_36631 = advenjure.utils.say.call(null,inst_36630);
var state_36855__$1 = state_36855;
var statearr_36860_37273 = state_36855__$1;
(statearr_36860_37273[(2)] = inst_36631);

(statearr_36860_37273[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (70))){
var inst_36846 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36862_37276 = state_36855__$1;
(statearr_36862_37276[(2)] = inst_36846);

(statearr_36862_37276[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (62))){
var inst_36624 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_36625 = advenjure.utils.say.call(null,inst_36624);
var state_36855__$1 = state_36855;
var statearr_36868_37279 = state_36855__$1;
(statearr_36868_37279[(2)] = inst_36625);

(statearr_36868_37279[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (74))){
var inst_36621 = (state_36855[(8)]);
var inst_36643 = (inst_36621 == null);
var state_36855__$1 = state_36855;
var statearr_36870_37283 = state_36855__$1;
(statearr_36870_37283[(2)] = inst_36643);

(statearr_36870_37283[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (7))){
var state_36855__$1 = state_36855;
var statearr_36872_37285 = state_36855__$1;
(statearr_36872_37285[(2)] = true);

(statearr_36872_37285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (59))){
var inst_36590 = (state_36855[(9)]);
var state_36855__$1 = state_36855;
var statearr_36874_37357 = state_36855__$1;
(statearr_36874_37357[(2)] = inst_36590);

(statearr_36874_37357[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (20))){
var inst_36524 = (state_36855[(10)]);
var inst_36544 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36524);
var state_36855__$1 = state_36855;
var statearr_36875_37476 = state_36855__$1;
(statearr_36875_37476[(2)] = inst_36544);

(statearr_36875_37476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (72))){
var state_36855__$1 = state_36855;
if(cljs.core.truth_(kw_required)){
var statearr_36876_37483 = state_36855__$1;
(statearr_36876_37483[(1)] = (74));

} else {
var statearr_36877_37485 = state_36855__$1;
(statearr_36877_37485[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (58))){
var inst_36590 = (state_36855[(9)]);
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36855__$1,(61),inst_36590);
} else {
if((state_val_36856 === (60))){
var inst_36619 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36882_37490 = state_36855__$1;
(statearr_36882_37490[(2)] = inst_36619);

(statearr_36882_37490[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (27))){
var inst_36540 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36883_37493 = state_36855__$1;
(statearr_36883_37493[(2)] = inst_36540);

(statearr_36883_37493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (1))){
var inst_36490 = advenjure.utils.find_item.call(null,game_state,item_name);
var inst_36491 = inst_36490;
var state_36855__$1 = (function (){var statearr_36884 = state_36855;
(statearr_36884[(11)] = inst_36491);

return statearr_36884;
})();
var statearr_36885_37494 = state_36855__$1;
(statearr_36885_37494[(2)] = null);

(statearr_36885_37494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (69))){
var inst_36621 = (state_36855[(8)]);
var inst_36637 = inst_36621 === false;
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36637)){
var statearr_36888_37504 = state_36855__$1;
(statearr_36888_37504[(1)] = (71));

} else {
var statearr_36889_37507 = state_36855__$1;
(statearr_36889_37507[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (24))){
var inst_36542 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36891_37512 = state_36855__$1;
(statearr_36891_37512[(2)] = inst_36542);

(statearr_36891_37512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (55))){
var inst_36590 = (state_36855[(9)]);
var inst_36603 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36590);
var state_36855__$1 = state_36855;
var statearr_36893_37518 = state_36855__$1;
(statearr_36893_37518[(2)] = inst_36603);

(statearr_36893_37518[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (39))){
var inst_36575 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36895_37526 = state_36855__$1;
(statearr_36895_37526[(2)] = inst_36575);

(statearr_36895_37526[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (46))){
var inst_36582 = (state_36855[(2)]);
var inst_36557 = inst_36582;
var state_36855__$1 = (function (){var statearr_36897 = state_36855;
(statearr_36897[(12)] = inst_36557);

return statearr_36897;
})();
var statearr_36899_37538 = state_36855__$1;
(statearr_36899_37538[(2)] = null);

(statearr_36899_37538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (4))){
var inst_36491 = (state_36855[(11)]);
var inst_36497 = inst_36491.cljs$core$async$impl$protocols$ReadPort$;
var inst_36498 = (false) || (inst_36497);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36498)){
var statearr_36901_37548 = state_36855__$1;
(statearr_36901_37548[(1)] = (7));

} else {
var statearr_36903_37550 = state_36855__$1;
(statearr_36903_37550[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (77))){
var inst_36648 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_36649 = advenjure.utils.say.call(null,inst_36648);
var state_36855__$1 = state_36855;
var statearr_36905_37560 = state_36855__$1;
(statearr_36905_37560[(2)] = inst_36649);

(statearr_36905_37560[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (54))){
var inst_36608 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36907_37565 = state_36855__$1;
(statearr_36907_37565[(2)] = inst_36608);

(statearr_36907_37565[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (15))){
var inst_36520 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_36909_37571 = state_36855__$1;
(statearr_36909_37571[(2)] = inst_36520);

(statearr_36909_37571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (48))){
var inst_36522 = (state_36855[(7)]);
var inst_36621 = (state_36855[(2)]);
var inst_36622 = cljs.core.empty_QMARK_.call(null,inst_36522);
var state_36855__$1 = (function (){var statearr_36910 = state_36855;
(statearr_36910[(8)] = inst_36621);

return statearr_36910;
})();
if(inst_36622){
var statearr_36911_37587 = state_36855__$1;
(statearr_36911_37587[(1)] = (62));

} else {
var statearr_36913_37589 = state_36855__$1;
(statearr_36913_37589[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (50))){
var inst_36590 = (state_36855[(9)]);
var inst_36610 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36590);
var state_36855__$1 = state_36855;
var statearr_36915_37608 = state_36855__$1;
(statearr_36915_37608[(2)] = inst_36610);

(statearr_36915_37608[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (75))){
var state_36855__$1 = state_36855;
var statearr_36918_37609 = state_36855__$1;
(statearr_36918_37609[(2)] = kw_required);

(statearr_36918_37609[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (21))){
var inst_36546 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36546)){
var statearr_36920_37617 = state_36855__$1;
(statearr_36920_37617[(1)] = (28));

} else {
var statearr_36921_37624 = state_36855__$1;
(statearr_36921_37624[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (31))){
var inst_36549 = (state_36855[(2)]);
var inst_36524 = inst_36549;
var state_36855__$1 = (function (){var statearr_36922 = state_36855;
(statearr_36922[(10)] = inst_36524);

return statearr_36922;
})();
var statearr_36923_37696 = state_36855__$1;
(statearr_36923_37696[(2)] = null);

(statearr_36923_37696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (32))){
var inst_36557 = (state_36855[(12)]);
var inst_36560 = (inst_36557 == null);
var inst_36561 = cljs.core.not.call(null,inst_36560);
var state_36855__$1 = state_36855;
if(inst_36561){
var statearr_36926_37723 = state_36855__$1;
(statearr_36926_37723[(1)] = (34));

} else {
var statearr_36927_37753 = state_36855__$1;
(statearr_36927_37753[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (40))){
var inst_36557 = (state_36855[(12)]);
var inst_36570 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36557);
var state_36855__$1 = state_36855;
var statearr_36928_37811 = state_36855__$1;
(statearr_36928_37811[(2)] = inst_36570);

(statearr_36928_37811[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (56))){
var state_36855__$1 = state_36855;
var statearr_36931_37818 = state_36855__$1;
(statearr_36931_37818[(2)] = false);

(statearr_36931_37818[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (33))){
var inst_36588 = (state_36855[(13)]);
var inst_36588__$1 = (state_36855[(2)]);
var inst_36589 = advenjure.hooks.eval_precondition.call(null,inst_36588__$1,game_state);
var inst_36590 = inst_36589;
var state_36855__$1 = (function (){var statearr_36933 = state_36855;
(statearr_36933[(13)] = inst_36588__$1);

(statearr_36933[(9)] = inst_36590);

return statearr_36933;
})();
var statearr_36934_37826 = state_36855__$1;
(statearr_36934_37826[(2)] = null);

(statearr_36934_37826[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (13))){
var inst_36491 = (state_36855[(11)]);
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36855__$1,(16),inst_36491);
} else {
if((state_val_36856 === (22))){
var state_36855__$1 = state_36855;
var statearr_36937_37839 = state_36855__$1;
(statearr_36937_37839[(2)] = true);

(statearr_36937_37839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (36))){
var inst_36579 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36579)){
var statearr_36940_37845 = state_36855__$1;
(statearr_36940_37845[(1)] = (43));

} else {
var statearr_36941_37846 = state_36855__$1;
(statearr_36941_37846[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (41))){
var state_36855__$1 = state_36855;
var statearr_36944_37850 = state_36855__$1;
(statearr_36944_37850[(2)] = false);

(statearr_36944_37850[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (43))){
var inst_36557 = (state_36855[(12)]);
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36855__$1,(46),inst_36557);
} else {
if((state_val_36856 === (61))){
var inst_36615 = (state_36855[(2)]);
var inst_36590 = inst_36615;
var state_36855__$1 = (function (){var statearr_36946 = state_36855;
(statearr_36946[(9)] = inst_36590);

return statearr_36946;
})();
var statearr_36947_37851 = state_36855__$1;
(statearr_36947_37851[(2)] = null);

(statearr_36947_37851[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (29))){
var inst_36524 = (state_36855[(10)]);
var state_36855__$1 = state_36855;
var statearr_36948_37852 = state_36855__$1;
(statearr_36948_37852[(2)] = inst_36524);

(statearr_36948_37852[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (44))){
var inst_36557 = (state_36855[(12)]);
var state_36855__$1 = state_36855;
var statearr_36950_37853 = state_36855__$1;
(statearr_36950_37853[(2)] = inst_36557);

(statearr_36950_37853[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (6))){
var inst_36513 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36513)){
var statearr_36952_37854 = state_36855__$1;
(statearr_36952_37854[(1)] = (13));

} else {
var statearr_36953_37855 = state_36855__$1;
(statearr_36953_37855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (28))){
var inst_36524 = (state_36855[(10)]);
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36855__$1,(31),inst_36524);
} else {
if((state_val_36856 === (64))){
var inst_36850 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36855__$1,inst_36850);
} else {
if((state_val_36856 === (51))){
var inst_36612 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36612)){
var statearr_36957_37859 = state_36855__$1;
(statearr_36957_37859[(1)] = (58));

} else {
var statearr_36959_37860 = state_36855__$1;
(statearr_36959_37860[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (25))){
var inst_36524 = (state_36855[(10)]);
var inst_36537 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36524);
var state_36855__$1 = state_36855;
var statearr_36962_37870 = state_36855__$1;
(statearr_36962_37870[(2)] = inst_36537);

(statearr_36962_37870[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (34))){
var inst_36557 = (state_36855[(12)]);
var inst_36563 = inst_36557.cljs$core$async$impl$protocols$ReadPort$;
var inst_36564 = (false) || (inst_36563);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36564)){
var statearr_36964_37874 = state_36855__$1;
(statearr_36964_37874[(1)] = (37));

} else {
var statearr_36965_37879 = state_36855__$1;
(statearr_36965_37879[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (17))){
var inst_36524 = (state_36855[(10)]);
var inst_36527 = (inst_36524 == null);
var inst_36528 = cljs.core.not.call(null,inst_36527);
var state_36855__$1 = state_36855;
if(inst_36528){
var statearr_36966_37888 = state_36855__$1;
(statearr_36966_37888[(1)] = (19));

} else {
var statearr_36967_37890 = state_36855__$1;
(statearr_36967_37890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (3))){
var inst_36522 = (state_36855[(7)]);
var inst_36522__$1 = (state_36855[(2)]);
var inst_36523 = cljs.core.first.call(null,inst_36522__$1);
var inst_36524 = inst_36523;
var state_36855__$1 = (function (){var statearr_36980 = state_36855;
(statearr_36980[(10)] = inst_36524);

(statearr_36980[(7)] = inst_36522__$1);

return statearr_36980;
})();
var statearr_37000_37897 = state_36855__$1;
(statearr_37000_37897[(2)] = null);

(statearr_37000_37897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (12))){
var inst_36507 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37015_37898 = state_36855__$1;
(statearr_37015_37898[(2)] = inst_36507);

(statearr_37015_37898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (2))){
var inst_36491 = (state_36855[(11)]);
var inst_36494 = (inst_36491 == null);
var inst_36495 = cljs.core.not.call(null,inst_36494);
var state_36855__$1 = state_36855;
if(inst_36495){
var statearr_37051_37909 = state_36855__$1;
(statearr_37051_37909[(1)] = (4));

} else {
var statearr_37052_37910 = state_36855__$1;
(statearr_37052_37910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (66))){
var inst_36621 = (state_36855[(8)]);
var inst_36633 = typeof inst_36621 === 'string';
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36633)){
var statearr_37055_37911 = state_36855__$1;
(statearr_37055_37911[(1)] = (68));

} else {
var statearr_37056_37913 = state_36855__$1;
(statearr_37056_37913[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (23))){
var inst_36524 = (state_36855[(10)]);
var inst_36534 = inst_36524.cljs$lang$protocol_mask$partition$;
var inst_36535 = (!inst_36534);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36535)){
var statearr_37060_37920 = state_36855__$1;
(statearr_37060_37920[(1)] = (25));

} else {
var statearr_37061_37921 = state_36855__$1;
(statearr_37061_37921[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (47))){
var inst_36590 = (state_36855[(9)]);
var inst_36593 = (inst_36590 == null);
var inst_36594 = cljs.core.not.call(null,inst_36593);
var state_36855__$1 = state_36855;
if(inst_36594){
var statearr_37064_37943 = state_36855__$1;
(statearr_37064_37943[(1)] = (49));

} else {
var statearr_37065_37945 = state_36855__$1;
(statearr_37065_37945[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (35))){
var inst_36557 = (state_36855[(12)]);
var inst_36577 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36557);
var state_36855__$1 = state_36855;
var statearr_37068_37952 = state_36855__$1;
(statearr_37068_37952[(2)] = inst_36577);

(statearr_37068_37952[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (82))){
var inst_36840 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37070_37961 = state_36855__$1;
(statearr_37070_37961[(2)] = inst_36840);

(statearr_37070_37961[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (76))){
var inst_36646 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36646)){
var statearr_37072_37962 = state_36855__$1;
(statearr_37072_37962[(1)] = (77));

} else {
var statearr_37073_37963 = state_36855__$1;
(statearr_37073_37963[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (19))){
var inst_36524 = (state_36855[(10)]);
var inst_36530 = inst_36524.cljs$core$async$impl$protocols$ReadPort$;
var inst_36531 = (false) || (inst_36530);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36531)){
var statearr_37075_37964 = state_36855__$1;
(statearr_37075_37964[(1)] = (22));

} else {
var statearr_37076_37966 = state_36855__$1;
(statearr_37076_37966[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (57))){
var inst_36606 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37077_37968 = state_36855__$1;
(statearr_37077_37968[(2)] = inst_36606);

(statearr_37077_37968[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (68))){
var inst_36621 = (state_36855[(8)]);
var inst_36635 = advenjure.utils.say.call(null,inst_36621);
var state_36855__$1 = state_36855;
var statearr_37079_37972 = state_36855__$1;
(statearr_37079_37972[(2)] = inst_36635);

(statearr_37079_37972[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (11))){
var state_36855__$1 = state_36855;
var statearr_37081_37974 = state_36855__$1;
(statearr_37081_37974[(2)] = false);

(statearr_37081_37974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (9))){
var inst_36509 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37083_37975 = state_36855__$1;
(statearr_37083_37975[(2)] = inst_36509);

(statearr_37083_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (5))){
var inst_36491 = (state_36855[(11)]);
var inst_36511 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36491);
var state_36855__$1 = state_36855;
var statearr_37084_37977 = state_36855__$1;
(statearr_37084_37977[(2)] = inst_36511);

(statearr_37084_37977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (14))){
var inst_36491 = (state_36855[(11)]);
var state_36855__$1 = state_36855;
var statearr_37086_37979 = state_36855__$1;
(statearr_37086_37979[(2)] = inst_36491);

(statearr_37086_37979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (45))){
var inst_36586 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37088_37980 = state_36855__$1;
(statearr_37088_37980[(2)] = inst_36586);

(statearr_37088_37980[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (53))){
var inst_36590 = (state_36855[(9)]);
var inst_36600 = inst_36590.cljs$lang$protocol_mask$partition$;
var inst_36601 = (!inst_36600);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36601)){
var statearr_37089_37982 = state_36855__$1;
(statearr_37089_37982[(1)] = (55));

} else {
var statearr_37090_37983 = state_36855__$1;
(statearr_37090_37983[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (78))){
var state_36855__$1 = state_36855;
var statearr_37091_37985 = state_36855__$1;
(statearr_37091_37985[(1)] = (80));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (26))){
var state_36855__$1 = state_36855;
var statearr_37093_37986 = state_36855__$1;
(statearr_37093_37986[(2)] = false);

(statearr_37093_37986[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (16))){
var inst_36516 = (state_36855[(2)]);
var inst_36491 = inst_36516;
var state_36855__$1 = (function (){var statearr_37098 = state_36855;
(statearr_37098[(11)] = inst_36491);

return statearr_37098;
})();
var statearr_37099_37988 = state_36855__$1;
(statearr_37099_37988[(2)] = null);

(statearr_37099_37988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (81))){
var state_36855__$1 = state_36855;
var statearr_37101_37989 = state_36855__$1;
(statearr_37101_37989[(2)] = null);

(statearr_37101_37989[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (79))){
var inst_36842 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37110_37991 = state_36855__$1;
(statearr_37110_37991[(2)] = inst_36842);

(statearr_37110_37991[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (38))){
var inst_36557 = (state_36855[(12)]);
var inst_36567 = inst_36557.cljs$lang$protocol_mask$partition$;
var inst_36568 = (!inst_36567);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36568)){
var statearr_37112_37992 = state_36855__$1;
(statearr_37112_37992[(1)] = (40));

} else {
var statearr_37113_37994 = state_36855__$1;
(statearr_37113_37994[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (30))){
var inst_36553 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37114_37996 = state_36855__$1;
(statearr_37114_37996[(2)] = inst_36553);

(statearr_37114_37996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (73))){
var inst_36844 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37117_37998 = state_36855__$1;
(statearr_37117_37998[(2)] = inst_36844);

(statearr_37117_37998[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (10))){
var inst_36491 = (state_36855[(11)]);
var inst_36504 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36491);
var state_36855__$1 = state_36855;
var statearr_37120_38000 = state_36855__$1;
(statearr_37120_38000[(2)] = inst_36504);

(statearr_37120_38000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (18))){
var inst_36555 = (state_36855[(14)]);
var inst_36555__$1 = (state_36855[(2)]);
var inst_36556 = verb_kw.call(null,inst_36555__$1);
var inst_36557 = inst_36556;
var state_36855__$1 = (function (){var statearr_37122 = state_36855;
(statearr_37122[(12)] = inst_36557);

(statearr_37122[(14)] = inst_36555__$1);

return statearr_37122;
})();
var statearr_37124_38004 = state_36855__$1;
(statearr_37124_38004[(2)] = null);

(statearr_37124_38004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (52))){
var state_36855__$1 = state_36855;
var statearr_37126_38006 = state_36855__$1;
(statearr_37126_38006[(2)] = true);

(statearr_37126_38006[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (67))){
var inst_36848 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37128_38008 = state_36855__$1;
(statearr_37128_38008[(2)] = inst_36848);

(statearr_37128_38008[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (71))){
var inst_36639 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_36640 = advenjure.utils.say.call(null,inst_36639);
var state_36855__$1 = state_36855;
var statearr_37130_38010 = state_36855__$1;
(statearr_37130_38010[(2)] = inst_36640);

(statearr_37130_38010[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (42))){
var inst_36573 = (state_36855[(2)]);
var state_36855__$1 = state_36855;
var statearr_37131_38011 = state_36855__$1;
(statearr_37131_38011[(2)] = inst_36573);

(statearr_37131_38011[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (80))){
var inst_36588 = (state_36855[(13)]);
var inst_36621 = (state_36855[(8)]);
var inst_36522 = (state_36855[(7)]);
var inst_36555 = (state_36855[(14)]);
var inst_36835 = cljs.core.async.chan.call(null,(1));
var inst_36836 = (function (){var items = inst_36522;
var item = inst_36555;
var conditions = inst_36588;
var value = inst_36621;
var c__24228__auto____$1 = inst_36835;
return ((function (items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function (state_36805){
var state_val_36814 = (state_36805[(1)]);
if((state_val_36814 === (7))){
var state_36805__$1 = state_36805;
var statearr_37133_38014 = state_36805__$1;
(statearr_37133_38014[(2)] = true);

(statearr_37133_38014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (20))){
var inst_36686 = (state_36805[(7)]);
var inst_36709 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36686);
var state_36805__$1 = state_36805;
var statearr_37135_38015 = state_36805__$1;
(statearr_37135_38015[(2)] = inst_36709);

(statearr_37135_38015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (27))){
var inst_36704 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37137_38017 = state_36805__$1;
(statearr_37137_38017[(2)] = inst_36704);

(statearr_37137_38017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (1))){
var inst_36652 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item);
var inst_36653 = inst_36652;
var state_36805__$1 = (function (){var statearr_37139 = state_36805;
(statearr_37139[(8)] = inst_36653);

return statearr_37139;
})();
var statearr_37141_38018 = state_36805__$1;
(statearr_37141_38018[(2)] = null);

(statearr_37141_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (24))){
var inst_36706 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37143_38020 = state_36805__$1;
(statearr_37143_38020[(2)] = inst_36706);

(statearr_37143_38020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (39))){
var inst_36775 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37145_38022 = state_36805__$1;
(statearr_37145_38022[(2)] = inst_36775);

(statearr_37145_38022[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (46))){
var inst_36784 = (state_36805[(2)]);
var inst_36726 = inst_36784;
var state_36805__$1 = (function (){var statearr_37147 = state_36805;
(statearr_37147[(9)] = inst_36726);

return statearr_37147;
})();
var statearr_37148_38024 = state_36805__$1;
(statearr_37148_38024[(2)] = null);

(statearr_37148_38024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (4))){
var inst_36653 = (state_36805[(8)]);
var inst_36659 = inst_36653.cljs$core$async$impl$protocols$ReadPort$;
var inst_36660 = (false) || (inst_36659);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36660)){
var statearr_37151_38026 = state_36805__$1;
(statearr_37151_38026[(1)] = (7));

} else {
var statearr_37152_38027 = state_36805__$1;
(statearr_37152_38027[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (15))){
var inst_36682 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37156_38030 = state_36805__$1;
(statearr_37156_38030[(2)] = inst_36682);

(statearr_37156_38030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (21))){
var inst_36711 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36711)){
var statearr_37157_38032 = state_36805__$1;
(statearr_37157_38032[(1)] = (28));

} else {
var statearr_37158_38033 = state_36805__$1;
(statearr_37158_38033[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (31))){
var inst_36715 = (state_36805[(2)]);
var inst_36686 = inst_36715;
var state_36805__$1 = (function (){var statearr_37160 = state_36805;
(statearr_37160[(7)] = inst_36686);

return statearr_37160;
})();
var statearr_37161_38035 = state_36805__$1;
(statearr_37161_38035[(2)] = null);

(statearr_37161_38035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (32))){
var inst_36726 = (state_36805[(9)]);
var inst_36733 = (inst_36726 == null);
var inst_36734 = cljs.core.not.call(null,inst_36733);
var state_36805__$1 = state_36805;
if(inst_36734){
var statearr_37164_38037 = state_36805__$1;
(statearr_37164_38037[(1)] = (34));

} else {
var statearr_37165_38038 = state_36805__$1;
(statearr_37165_38038[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (40))){
var inst_36726 = (state_36805[(9)]);
var inst_36770 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36726);
var state_36805__$1 = state_36805;
var statearr_37166_38040 = state_36805__$1;
(statearr_37166_38040[(2)] = inst_36770);

(statearr_37166_38040[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (33))){
var inst_36791 = (state_36805[(2)]);
var inst_36792 = advenjure.hooks.execute.call(null,inst_36791,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36805__$1,inst_36792);
} else {
if((state_val_36814 === (13))){
var inst_36653 = (state_36805[(8)]);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(16),inst_36653);
} else {
if((state_val_36814 === (22))){
var state_36805__$1 = state_36805;
var statearr_37168_38043 = state_36805__$1;
(statearr_37168_38043[(2)] = true);

(statearr_37168_38043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (36))){
var inst_36779 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36779)){
var statearr_37169_38045 = state_36805__$1;
(statearr_37169_38045[(1)] = (43));

} else {
var statearr_37170_38046 = state_36805__$1;
(statearr_37170_38046[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (41))){
var state_36805__$1 = state_36805;
var statearr_37171_38048 = state_36805__$1;
(statearr_37171_38048[(2)] = false);

(statearr_37171_38048[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (43))){
var inst_36726 = (state_36805[(9)]);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(46),inst_36726);
} else {
if((state_val_36814 === (29))){
var inst_36686 = (state_36805[(7)]);
var state_36805__$1 = state_36805;
var statearr_37172_38051 = state_36805__$1;
(statearr_37172_38051[(2)] = inst_36686);

(statearr_37172_38051[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (44))){
var inst_36726 = (state_36805[(9)]);
var state_36805__$1 = state_36805;
var statearr_37173_38053 = state_36805__$1;
(statearr_37173_38053[(2)] = inst_36726);

(statearr_37173_38053[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (6))){
var inst_36675 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36675)){
var statearr_37174_38056 = state_36805__$1;
(statearr_37174_38056[(1)] = (13));

} else {
var statearr_37175_38058 = state_36805__$1;
(statearr_37175_38058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (28))){
var inst_36686 = (state_36805[(7)]);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(31),inst_36686);
} else {
if((state_val_36814 === (25))){
var inst_36686 = (state_36805[(7)]);
var inst_36701 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36686);
var state_36805__$1 = state_36805;
var statearr_37176_38063 = state_36805__$1;
(statearr_37176_38063[(2)] = inst_36701);

(statearr_37176_38063[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (34))){
var inst_36726 = (state_36805[(9)]);
var inst_36739 = inst_36726.cljs$core$async$impl$protocols$ReadPort$;
var inst_36740 = (false) || (inst_36739);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36740)){
var statearr_37177_38066 = state_36805__$1;
(statearr_37177_38066[(1)] = (37));

} else {
var statearr_37178_38067 = state_36805__$1;
(statearr_37178_38067[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (17))){
var inst_36686 = (state_36805[(7)]);
var inst_36689 = (inst_36686 == null);
var inst_36690 = cljs.core.not.call(null,inst_36689);
var state_36805__$1 = state_36805;
if(inst_36690){
var statearr_37179_38069 = state_36805__$1;
(statearr_37179_38069[(1)] = (19));

} else {
var statearr_37180_38071 = state_36805__$1;
(statearr_37180_38071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (3))){
var inst_36684 = (state_36805[(10)]);
var inst_36684__$1 = (state_36805[(2)]);
var inst_36685 = handler.call(null,inst_36684__$1,item);
var inst_36686 = inst_36685;
var state_36805__$1 = (function (){var statearr_37181 = state_36805;
(statearr_37181[(10)] = inst_36684__$1);

(statearr_37181[(7)] = inst_36686);

return statearr_37181;
})();
var statearr_37182_38073 = state_36805__$1;
(statearr_37182_38073[(2)] = null);

(statearr_37182_38073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (12))){
var inst_36669 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37183_38075 = state_36805__$1;
(statearr_37183_38075[(2)] = inst_36669);

(statearr_37183_38075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (2))){
var inst_36653 = (state_36805[(8)]);
var inst_36656 = (inst_36653 == null);
var inst_36657 = cljs.core.not.call(null,inst_36656);
var state_36805__$1 = state_36805;
if(inst_36657){
var statearr_37184_38076 = state_36805__$1;
(statearr_37184_38076[(1)] = (4));

} else {
var statearr_37185_38078 = state_36805__$1;
(statearr_37185_38078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (23))){
var inst_36686 = (state_36805[(7)]);
var inst_36697 = inst_36686.cljs$lang$protocol_mask$partition$;
var inst_36698 = (!inst_36697);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36698)){
var statearr_37187_38080 = state_36805__$1;
(statearr_37187_38080[(1)] = (25));

} else {
var statearr_37188_38082 = state_36805__$1;
(statearr_37188_38082[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (35))){
var inst_36726 = (state_36805[(9)]);
var inst_36777 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36726);
var state_36805__$1 = state_36805;
var statearr_37189_38084 = state_36805__$1;
(statearr_37189_38084[(2)] = inst_36777);

(statearr_37189_38084[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (19))){
var inst_36686 = (state_36805[(7)]);
var inst_36692 = inst_36686.cljs$core$async$impl$protocols$ReadPort$;
var inst_36693 = (false) || (inst_36692);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36693)){
var statearr_37190_38087 = state_36805__$1;
(statearr_37190_38087[(1)] = (22));

} else {
var statearr_37191_38088 = state_36805__$1;
(statearr_37191_38088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (11))){
var state_36805__$1 = state_36805;
var statearr_37192_38089 = state_36805__$1;
(statearr_37192_38089[(2)] = false);

(statearr_37192_38089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (9))){
var inst_36671 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37193_38090 = state_36805__$1;
(statearr_37193_38090[(2)] = inst_36671);

(statearr_37193_38090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (5))){
var inst_36653 = (state_36805[(8)]);
var inst_36673 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36653);
var state_36805__$1 = state_36805;
var statearr_37194_38091 = state_36805__$1;
(statearr_37194_38091[(2)] = inst_36673);

(statearr_37194_38091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (14))){
var inst_36653 = (state_36805[(8)]);
var state_36805__$1 = state_36805;
var statearr_37196_38094 = state_36805__$1;
(statearr_37196_38094[(2)] = inst_36653);

(statearr_37196_38094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (45))){
var inst_36789 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37197_38096 = state_36805__$1;
(statearr_37197_38096[(2)] = inst_36789);

(statearr_37197_38096[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (26))){
var state_36805__$1 = state_36805;
var statearr_37199_38099 = state_36805__$1;
(statearr_37199_38099[(2)] = false);

(statearr_37199_38099[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (16))){
var inst_36678 = (state_36805[(2)]);
var inst_36653 = inst_36678;
var state_36805__$1 = (function (){var statearr_37200 = state_36805;
(statearr_37200[(8)] = inst_36653);

return statearr_37200;
})();
var statearr_37201_38101 = state_36805__$1;
(statearr_37201_38101[(2)] = null);

(statearr_37201_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (38))){
var inst_36726 = (state_36805[(9)]);
var inst_36764 = inst_36726.cljs$lang$protocol_mask$partition$;
var inst_36765 = (!inst_36764);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36765)){
var statearr_37202_38104 = state_36805__$1;
(statearr_37202_38104[(1)] = (40));

} else {
var statearr_37203_38105 = state_36805__$1;
(statearr_37203_38105[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (30))){
var inst_36719 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37210_38107 = state_36805__$1;
(statearr_37210_38107[(2)] = inst_36719);

(statearr_37210_38107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (10))){
var inst_36653 = (state_36805[(8)]);
var inst_36666 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36653);
var state_36805__$1 = state_36805;
var statearr_37211_38110 = state_36805__$1;
(statearr_37211_38110[(2)] = inst_36666);

(statearr_37211_38110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (18))){
var inst_36684 = (state_36805[(10)]);
var inst_36721 = (state_36805[(2)]);
var inst_36725 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_36684,inst_36721);
var inst_36726 = inst_36725;
var state_36805__$1 = (function (){var statearr_37212 = state_36805;
(statearr_37212[(9)] = inst_36726);

return statearr_37212;
})();
var statearr_37214_38112 = state_36805__$1;
(statearr_37214_38112[(2)] = null);

(statearr_37214_38112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (42))){
var inst_36773 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_37215_38114 = state_36805__$1;
(statearr_37215_38114[(2)] = inst_36773);

(statearr_37215_38114[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (37))){
var state_36805__$1 = state_36805;
var statearr_37216_38115 = state_36805__$1;
(statearr_37216_38115[(2)] = true);

(statearr_37216_38115[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (8))){
var inst_36653 = (state_36805[(8)]);
var inst_36663 = inst_36653.cljs$lang$protocol_mask$partition$;
var inst_36664 = (!inst_36663);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36664)){
var statearr_37217_38118 = state_36805__$1;
(statearr_37217_38118[(1)] = (10));

} else {
var statearr_37219_38120 = state_36805__$1;
(statearr_37219_38120[(1)] = (11));

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
});})(items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required))
;
return ((function (switch__24031__auto__,items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_37224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37224[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_37224[(1)] = (1));

return statearr_37224;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_36805){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e37225){if((e37225 instanceof Object)){
var ex__24035__auto__ = e37225;
var statearr_37226_38128 = state_36805;
(statearr_37226_38128[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38129 = state_36805;
state_36805 = G__38129;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_36805){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_36805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required))
})();
var state__24230__auto__ = (function (){var statearr_37227 = f__24229__auto__.call(null);
(statearr_37227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto____$1);

return statearr_37227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});
;})(items,item,conditions,value,c__24228__auto____$1,inst_36588,inst_36621,inst_36522,inst_36555,inst_36835,state_val_36856,c__24228__auto__,map__36487,map__36487__$1,kw_required))
})();
var inst_36837 = cljs.core.async.impl.dispatch.run.call(null,inst_36836);
var state_36855__$1 = (function (){var statearr_37228 = state_36855;
(statearr_37228[(15)] = inst_36837);

return statearr_37228;
})();
var statearr_37229_38133 = state_36855__$1;
(statearr_37229_38133[(2)] = inst_36835);

(statearr_37229_38133[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (37))){
var state_36855__$1 = state_36855;
var statearr_37232_38135 = state_36855__$1;
(statearr_37232_38135[(2)] = true);

(statearr_37232_38135[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (63))){
var inst_36522 = (state_36855[(7)]);
var inst_36627 = cljs.core.count.call(null,inst_36522);
var inst_36628 = (inst_36627 > (1));
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36628)){
var statearr_37233_38137 = state_36855__$1;
(statearr_37233_38137[(1)] = (65));

} else {
var statearr_37234_38139 = state_36855__$1;
(statearr_37234_38139[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (8))){
var inst_36491 = (state_36855[(11)]);
var inst_36501 = inst_36491.cljs$lang$protocol_mask$partition$;
var inst_36502 = (!inst_36501);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36502)){
var statearr_37236_38141 = state_36855__$1;
(statearr_37236_38141[(1)] = (10));

} else {
var statearr_37237_38142 = state_36855__$1;
(statearr_37237_38142[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36856 === (49))){
var inst_36590 = (state_36855[(9)]);
var inst_36596 = inst_36590.cljs$core$async$impl$protocols$ReadPort$;
var inst_36597 = (false) || (inst_36596);
var state_36855__$1 = state_36855;
if(cljs.core.truth_(inst_36597)){
var statearr_37239_38144 = state_36855__$1;
(statearr_37239_38144[(1)] = (52));

} else {
var statearr_37240_38145 = state_36855__$1;
(statearr_37240_38145[(1)] = (53));

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
});})(c__24228__auto__,map__36487,map__36487__$1,kw_required))
;
return ((function (switch__24031__auto__,c__24228__auto__,map__36487,map__36487__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_37253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37253[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_37253[(1)] = (1));

return statearr_37253;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_36855){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e37255){if((e37255 instanceof Object)){
var ex__24035__auto__ = e37255;
var statearr_37256_38149 = state_36855;
(statearr_37256_38149[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38155 = state_36855;
state_36855 = G__38155;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_36855){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_36855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,map__36487,map__36487__$1,kw_required))
})();
var state__24230__auto__ = (function (){var statearr_37257 = f__24229__auto__.call(null);
(statearr_37257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_37257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,map__36487,map__36487__$1,kw_required))
);

return c__24228__auto__;
});
G__37269 = function(game_state,item_name){
switch(arguments.length){
case 1:
return G__37269__1.call(this,game_state);
case 2:
return G__37269__2.call(this,game_state,item_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37269.cljs$core$IFn$_invoke$arity$1 = G__37269__1;
G__37269.cljs$core$IFn$_invoke$arity$2 = G__37269__2;
return G__37269;
})()
;})(map__36487,map__36487__$1,kw_required))
});

advenjure.verbs.make_item_handler.cljs$lang$applyTo = (function (seq36480){
var G__36481 = cljs.core.first.call(null,seq36480);
var seq36480__$1 = cljs.core.next.call(null,seq36480);
var G__36482 = cljs.core.first.call(null,seq36480__$1);
var seq36480__$2 = cljs.core.next.call(null,seq36480__$1);
var G__36483 = cljs.core.first.call(null,seq36480__$2);
var seq36480__$3 = cljs.core.next.call(null,seq36480__$2);
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__36481,G__36482,G__36483,seq36480__$3);
});

advenjure.verbs.make_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * The same as above but adapted to compund verbs.
 */
advenjure.verbs.make_compound_item_handler = (function advenjure$verbs$make_compound_item_handler(var_args){
var args38157 = [];
var len__21530__auto___38780 = arguments.length;
var i__21531__auto___38781 = (0);
while(true){
if((i__21531__auto___38781 < len__21530__auto___38780)){
args38157.push((arguments[i__21531__auto___38781]));

var G__38782 = (i__21531__auto___38781 + (1));
i__21531__auto___38781 = G__38782;
continue;
} else {
}
break;
}

var G__38164 = args38157.length;
switch (G__38164) {
case 2:
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args38157.slice((3)),(0),null));
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_compound_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__38169){
var map__38170 = p__38169;
var map__38170__$1 = ((((!((map__38170 == null)))?((((map__38170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38170):map__38170);
var kw_required = cljs.core.get.call(null,map__38170__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__38170,map__38170__$1,kw_required){
return (function() {
var G__38784 = null;
var G__38784__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__38784__2 = (function (game_state,item1){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s %s with what?",verb_name,item1));
});
var G__38784__3 = (function (game_state,item1_name,item2_name){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function (state_38533){
var state_val_38534 = (state_38533[(1)]);
if((state_val_38534 === (65))){
var inst_38305 = (state_38533[(7)]);
var inst_38325 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38305);
var state_38533__$1 = state_38533;
var statearr_38535_38785 = state_38533__$1;
(statearr_38535_38785[(2)] = inst_38325);

(statearr_38535_38785[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (70))){
var inst_38305 = (state_38533[(7)]);
var inst_38318 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38305);
var state_38533__$1 = state_38533;
var statearr_38536_38786 = state_38533__$1;
(statearr_38536_38786[(2)] = inst_38318);

(statearr_38536_38786[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (62))){
var inst_38305 = (state_38533[(7)]);
var inst_38308 = (inst_38305 == null);
var inst_38309 = cljs.core.not.call(null,inst_38308);
var state_38533__$1 = state_38533;
if(inst_38309){
var statearr_38537_38787 = state_38533__$1;
(statearr_38537_38787[(1)] = (64));

} else {
var statearr_38538_38788 = state_38533__$1;
(statearr_38538_38788[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (74))){
var inst_38305 = (state_38533[(7)]);
var state_38533__$1 = state_38533;
var statearr_38539_38789 = state_38533__$1;
(statearr_38539_38789[(2)] = inst_38305);

(statearr_38539_38789[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (110))){
var inst_38407 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_38408 = advenjure.utils.say.call(null,inst_38407);
var state_38533__$1 = state_38533;
var statearr_38540_38790 = state_38533__$1;
(statearr_38540_38790[(2)] = inst_38408);

(statearr_38540_38790[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (7))){
var state_38533__$1 = state_38533;
var statearr_38541_38791 = state_38533__$1;
(statearr_38541_38791[(2)] = true);

(statearr_38541_38791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (59))){
var inst_38272 = (state_38533[(8)]);
var state_38533__$1 = state_38533;
var statearr_38542_38792 = state_38533__$1;
(statearr_38542_38792[(2)] = inst_38272);

(statearr_38542_38792[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (86))){
var state_38533__$1 = state_38533;
var statearr_38543_38793 = state_38533__$1;
(statearr_38543_38793[(2)] = false);

(statearr_38543_38793[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (20))){
var inst_38206 = (state_38533[(9)]);
var inst_38226 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38206);
var state_38533__$1 = state_38533;
var statearr_38544_38794 = state_38533__$1;
(statearr_38544_38794[(2)] = inst_38226);

(statearr_38544_38794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (72))){
var inst_38321 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38545_38795 = state_38533__$1;
(statearr_38545_38795[(2)] = inst_38321);

(statearr_38545_38795[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (58))){
var inst_38272 = (state_38533[(8)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(61),inst_38272);
} else {
if((state_val_38534 === (60))){
var inst_38301 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38546_38796 = state_38533__$1;
(statearr_38546_38796[(2)] = inst_38301);

(statearr_38546_38796[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (27))){
var inst_38222 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38547_38797 = state_38533__$1;
(statearr_38547_38797[(2)] = inst_38222);

(statearr_38547_38797[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (1))){
var inst_38172 = advenjure.utils.find_item.call(null,game_state,item1_name);
var inst_38173 = inst_38172;
var state_38533__$1 = (function (){var statearr_38548 = state_38533;
(statearr_38548[(10)] = inst_38173);

return statearr_38548;
})();
var statearr_38549_38798 = state_38533__$1;
(statearr_38549_38798[(2)] = null);

(statearr_38549_38798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (69))){
var inst_38323 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38550_38799 = state_38533__$1;
(statearr_38550_38799[(2)] = inst_38323);

(statearr_38550_38799[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (101))){
var inst_38371 = (state_38533[(11)]);
var inst_38393 = advenjure.utils.say.call(null,inst_38371);
var state_38533__$1 = state_38533;
var statearr_38556_38800 = state_38533__$1;
(statearr_38556_38800[(2)] = inst_38393);

(statearr_38556_38800[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (24))){
var inst_38224 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38557_38801 = state_38533__$1;
(statearr_38557_38801[(2)] = inst_38224);

(statearr_38557_38801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (102))){
var inst_38371 = (state_38533[(11)]);
var inst_38395 = inst_38371 === false;
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38395)){
var statearr_38558_38802 = state_38533__$1;
(statearr_38558_38802[(1)] = (104));

} else {
var statearr_38559_38803 = state_38533__$1;
(statearr_38559_38803[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (55))){
var inst_38272 = (state_38533[(8)]);
var inst_38285 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38272);
var state_38533__$1 = state_38533;
var statearr_38560_38804 = state_38533__$1;
(statearr_38560_38804[(2)] = inst_38285);

(statearr_38560_38804[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (85))){
var inst_38339 = (state_38533[(12)]);
var inst_38353 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38339);
var state_38533__$1 = state_38533;
var statearr_38561_38805 = state_38533__$1;
(statearr_38561_38805[(2)] = inst_38353);

(statearr_38561_38805[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (39))){
var inst_38257 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38562_38806 = state_38533__$1;
(statearr_38562_38806[(2)] = inst_38257);

(statearr_38562_38806[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (88))){
var inst_38339 = (state_38533[(12)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(91),inst_38339);
} else {
if((state_val_38534 === (46))){
var inst_38264 = (state_38533[(2)]);
var inst_38239 = inst_38264;
var state_38533__$1 = (function (){var statearr_38563 = state_38533;
(statearr_38563[(13)] = inst_38239);

return statearr_38563;
})();
var statearr_38564_38807 = state_38533__$1;
(statearr_38564_38807[(2)] = null);

(statearr_38564_38807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (4))){
var inst_38173 = (state_38533[(10)]);
var inst_38179 = inst_38173.cljs$core$async$impl$protocols$ReadPort$;
var inst_38180 = (false) || (inst_38179);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38180)){
var statearr_38565_38808 = state_38533__$1;
(statearr_38565_38808[(1)] = (7));

} else {
var statearr_38566_38809 = state_38533__$1;
(statearr_38566_38809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (77))){
var inst_38339 = (state_38533[(12)]);
var inst_38343 = (inst_38339 == null);
var inst_38344 = cljs.core.not.call(null,inst_38343);
var state_38533__$1 = state_38533;
if(inst_38344){
var statearr_38567_38810 = state_38533__$1;
(statearr_38567_38810[(1)] = (79));

} else {
var statearr_38568_38811 = state_38533__$1;
(statearr_38568_38811[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (106))){
var inst_38523 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38569_38812 = state_38533__$1;
(statearr_38569_38812[(2)] = inst_38523);

(statearr_38569_38812[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (95))){
var inst_38204 = (state_38533[(14)]);
var inst_38382 = advenjure.verbs.ask_ambiguous.call(null,item1_name,inst_38204);
var inst_38383 = advenjure.utils.say.call(null,inst_38382);
var state_38533__$1 = state_38533;
var statearr_38570_38814 = state_38533__$1;
(statearr_38570_38814[(2)] = inst_38383);

(statearr_38570_38814[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (54))){
var inst_38290 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38571_38816 = state_38533__$1;
(statearr_38571_38816[(2)] = inst_38290);

(statearr_38571_38816[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (92))){
var inst_38376 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_38377 = advenjure.utils.say.call(null,inst_38376);
var state_38533__$1 = state_38533;
var statearr_38572_38817 = state_38533__$1;
(statearr_38572_38817[(2)] = inst_38377);

(statearr_38572_38817[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (104))){
var inst_38397 = [cljs.core.str("I couldn't "),cljs.core.str(verb_name),cljs.core.str(" that.")].join('');
var inst_38398 = advenjure.utils.say.call(null,inst_38397);
var state_38533__$1 = state_38533;
var statearr_38573_38818 = state_38533__$1;
(statearr_38573_38818[(2)] = inst_38398);

(statearr_38573_38818[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (15))){
var inst_38202 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38574_38819 = state_38533__$1;
(statearr_38574_38819[(2)] = inst_38202);

(statearr_38574_38819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (48))){
var inst_38237 = (state_38533[(15)]);
var inst_38303 = (state_38533[(2)]);
var inst_38304 = verb_kw.call(null,inst_38237);
var inst_38305 = inst_38304;
var state_38533__$1 = (function (){var statearr_38575 = state_38533;
(statearr_38575[(16)] = inst_38303);

(statearr_38575[(7)] = inst_38305);

return statearr_38575;
})();
var statearr_38576_38820 = state_38533__$1;
(statearr_38576_38820[(2)] = null);

(statearr_38576_38820[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (50))){
var inst_38272 = (state_38533[(8)]);
var inst_38292 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38272);
var state_38533__$1 = state_38533;
var statearr_38577_38821 = state_38533__$1;
(statearr_38577_38821[(2)] = inst_38292);

(statearr_38577_38821[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (75))){
var inst_38334 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38578_38822 = state_38533__$1;
(statearr_38578_38822[(2)] = inst_38334);

(statearr_38578_38822[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (99))){
var inst_38371 = (state_38533[(11)]);
var inst_38391 = typeof inst_38371 === 'string';
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38391)){
var statearr_38579_38823 = state_38533__$1;
(statearr_38579_38823[(1)] = (101));

} else {
var statearr_38580_38824 = state_38533__$1;
(statearr_38580_38824[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (21))){
var inst_38228 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38228)){
var statearr_38581_38825 = state_38533__$1;
(statearr_38581_38825[(1)] = (28));

} else {
var statearr_38582_38826 = state_38533__$1;
(statearr_38582_38826[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (31))){
var inst_38231 = (state_38533[(2)]);
var inst_38206 = inst_38231;
var state_38533__$1 = (function (){var statearr_38583 = state_38533;
(statearr_38583[(9)] = inst_38206);

return statearr_38583;
})();
var statearr_38584_38827 = state_38533__$1;
(statearr_38584_38827[(2)] = null);

(statearr_38584_38827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (113))){
var inst_38336 = (state_38533[(17)]);
var inst_38303 = (state_38533[(16)]);
var inst_38237 = (state_38533[(15)]);
var inst_38204 = (state_38533[(14)]);
var inst_38371 = (state_38533[(11)]);
var inst_38270 = (state_38533[(18)]);
var inst_38514 = cljs.core.async.chan.call(null,(1));
var inst_38515 = (function (){var items1 = inst_38204;
var item1 = inst_38237;
var items2 = inst_38270;
var item2 = inst_38303;
var conditions = inst_38336;
var value = inst_38371;
var c__24228__auto____$1 = inst_38514;
return ((function (items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function (state_38512){
var state_val_38513 = (state_38512[(1)]);
if((state_val_38513 === (7))){
var state_38512__$1 = state_38512;
var statearr_38585_38828 = state_38512__$1;
(statearr_38585_38828[(2)] = true);

(statearr_38585_38828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (20))){
var inst_38445 = (state_38512[(7)]);
var inst_38465 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38445);
var state_38512__$1 = state_38512;
var statearr_38586_38829 = state_38512__$1;
(statearr_38586_38829[(2)] = inst_38465);

(statearr_38586_38829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (27))){
var inst_38461 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38587_38830 = state_38512__$1;
(statearr_38587_38830[(2)] = inst_38461);

(statearr_38587_38830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (1))){
var inst_38411 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item1,item2);
var inst_38412 = inst_38411;
var state_38512__$1 = (function (){var statearr_38588 = state_38512;
(statearr_38588[(8)] = inst_38412);

return statearr_38588;
})();
var statearr_38589_38831 = state_38512__$1;
(statearr_38589_38831[(2)] = null);

(statearr_38589_38831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (24))){
var inst_38463 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38590_38832 = state_38512__$1;
(statearr_38590_38832[(2)] = inst_38463);

(statearr_38590_38832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (39))){
var inst_38496 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38591_38833 = state_38512__$1;
(statearr_38591_38833[(2)] = inst_38496);

(statearr_38591_38833[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (46))){
var inst_38503 = (state_38512[(2)]);
var inst_38478 = inst_38503;
var state_38512__$1 = (function (){var statearr_38592 = state_38512;
(statearr_38592[(9)] = inst_38478);

return statearr_38592;
})();
var statearr_38593_38834 = state_38512__$1;
(statearr_38593_38834[(2)] = null);

(statearr_38593_38834[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (4))){
var inst_38412 = (state_38512[(8)]);
var inst_38418 = inst_38412.cljs$core$async$impl$protocols$ReadPort$;
var inst_38419 = (false) || (inst_38418);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38419)){
var statearr_38594_38835 = state_38512__$1;
(statearr_38594_38835[(1)] = (7));

} else {
var statearr_38595_38836 = state_38512__$1;
(statearr_38595_38836[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (15))){
var inst_38441 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38596_38837 = state_38512__$1;
(statearr_38596_38837[(2)] = inst_38441);

(statearr_38596_38837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (21))){
var inst_38467 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38467)){
var statearr_38599_38838 = state_38512__$1;
(statearr_38599_38838[(1)] = (28));

} else {
var statearr_38600_38839 = state_38512__$1;
(statearr_38600_38839[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (31))){
var inst_38470 = (state_38512[(2)]);
var inst_38445 = inst_38470;
var state_38512__$1 = (function (){var statearr_38602 = state_38512;
(statearr_38602[(7)] = inst_38445);

return statearr_38602;
})();
var statearr_38603_38840 = state_38512__$1;
(statearr_38603_38840[(2)] = null);

(statearr_38603_38840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (32))){
var inst_38478 = (state_38512[(9)]);
var inst_38481 = (inst_38478 == null);
var inst_38482 = cljs.core.not.call(null,inst_38481);
var state_38512__$1 = state_38512;
if(inst_38482){
var statearr_38604_38841 = state_38512__$1;
(statearr_38604_38841[(1)] = (34));

} else {
var statearr_38605_38842 = state_38512__$1;
(statearr_38605_38842[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (40))){
var inst_38478 = (state_38512[(9)]);
var inst_38491 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38478);
var state_38512__$1 = state_38512;
var statearr_38606_38843 = state_38512__$1;
(statearr_38606_38843[(2)] = inst_38491);

(statearr_38606_38843[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (33))){
var inst_38509 = (state_38512[(2)]);
var inst_38510 = advenjure.hooks.execute.call(null,inst_38509,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item1,item2);
var state_38512__$1 = state_38512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38512__$1,inst_38510);
} else {
if((state_val_38513 === (13))){
var inst_38412 = (state_38512[(8)]);
var state_38512__$1 = state_38512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38512__$1,(16),inst_38412);
} else {
if((state_val_38513 === (22))){
var state_38512__$1 = state_38512;
var statearr_38607_38844 = state_38512__$1;
(statearr_38607_38844[(2)] = true);

(statearr_38607_38844[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (36))){
var inst_38500 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38500)){
var statearr_38608_38845 = state_38512__$1;
(statearr_38608_38845[(1)] = (43));

} else {
var statearr_38609_38846 = state_38512__$1;
(statearr_38609_38846[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (41))){
var state_38512__$1 = state_38512;
var statearr_38610_38847 = state_38512__$1;
(statearr_38610_38847[(2)] = false);

(statearr_38610_38847[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (43))){
var inst_38478 = (state_38512[(9)]);
var state_38512__$1 = state_38512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38512__$1,(46),inst_38478);
} else {
if((state_val_38513 === (29))){
var inst_38445 = (state_38512[(7)]);
var state_38512__$1 = state_38512;
var statearr_38611_38848 = state_38512__$1;
(statearr_38611_38848[(2)] = inst_38445);

(statearr_38611_38848[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (44))){
var inst_38478 = (state_38512[(9)]);
var state_38512__$1 = state_38512;
var statearr_38612_38849 = state_38512__$1;
(statearr_38612_38849[(2)] = inst_38478);

(statearr_38612_38849[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (6))){
var inst_38434 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38434)){
var statearr_38613_38850 = state_38512__$1;
(statearr_38613_38850[(1)] = (13));

} else {
var statearr_38614_38851 = state_38512__$1;
(statearr_38614_38851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (28))){
var inst_38445 = (state_38512[(7)]);
var state_38512__$1 = state_38512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38512__$1,(31),inst_38445);
} else {
if((state_val_38513 === (25))){
var inst_38445 = (state_38512[(7)]);
var inst_38458 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38445);
var state_38512__$1 = state_38512;
var statearr_38615_38852 = state_38512__$1;
(statearr_38615_38852[(2)] = inst_38458);

(statearr_38615_38852[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (34))){
var inst_38478 = (state_38512[(9)]);
var inst_38484 = inst_38478.cljs$core$async$impl$protocols$ReadPort$;
var inst_38485 = (false) || (inst_38484);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38485)){
var statearr_38616_38853 = state_38512__$1;
(statearr_38616_38853[(1)] = (37));

} else {
var statearr_38617_38854 = state_38512__$1;
(statearr_38617_38854[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (17))){
var inst_38445 = (state_38512[(7)]);
var inst_38448 = (inst_38445 == null);
var inst_38449 = cljs.core.not.call(null,inst_38448);
var state_38512__$1 = state_38512;
if(inst_38449){
var statearr_38618_38855 = state_38512__$1;
(statearr_38618_38855[(1)] = (19));

} else {
var statearr_38619_38856 = state_38512__$1;
(statearr_38619_38856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (3))){
var inst_38443 = (state_38512[(10)]);
var inst_38443__$1 = (state_38512[(2)]);
var inst_38444 = handler.call(null,inst_38443__$1,item1,item2);
var inst_38445 = inst_38444;
var state_38512__$1 = (function (){var statearr_38620 = state_38512;
(statearr_38620[(7)] = inst_38445);

(statearr_38620[(10)] = inst_38443__$1);

return statearr_38620;
})();
var statearr_38621_38857 = state_38512__$1;
(statearr_38621_38857[(2)] = null);

(statearr_38621_38857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (12))){
var inst_38428 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38622_38858 = state_38512__$1;
(statearr_38622_38858[(2)] = inst_38428);

(statearr_38622_38858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (2))){
var inst_38412 = (state_38512[(8)]);
var inst_38415 = (inst_38412 == null);
var inst_38416 = cljs.core.not.call(null,inst_38415);
var state_38512__$1 = state_38512;
if(inst_38416){
var statearr_38623_38859 = state_38512__$1;
(statearr_38623_38859[(1)] = (4));

} else {
var statearr_38624_38860 = state_38512__$1;
(statearr_38624_38860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (23))){
var inst_38445 = (state_38512[(7)]);
var inst_38455 = inst_38445.cljs$lang$protocol_mask$partition$;
var inst_38456 = (!inst_38455);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38456)){
var statearr_38625_38861 = state_38512__$1;
(statearr_38625_38861[(1)] = (25));

} else {
var statearr_38626_38862 = state_38512__$1;
(statearr_38626_38862[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (35))){
var inst_38478 = (state_38512[(9)]);
var inst_38498 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38478);
var state_38512__$1 = state_38512;
var statearr_38627_38863 = state_38512__$1;
(statearr_38627_38863[(2)] = inst_38498);

(statearr_38627_38863[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (19))){
var inst_38445 = (state_38512[(7)]);
var inst_38451 = inst_38445.cljs$core$async$impl$protocols$ReadPort$;
var inst_38452 = (false) || (inst_38451);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38452)){
var statearr_38628_38864 = state_38512__$1;
(statearr_38628_38864[(1)] = (22));

} else {
var statearr_38629_38865 = state_38512__$1;
(statearr_38629_38865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (11))){
var state_38512__$1 = state_38512;
var statearr_38630_38866 = state_38512__$1;
(statearr_38630_38866[(2)] = false);

(statearr_38630_38866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (9))){
var inst_38430 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38631_38867 = state_38512__$1;
(statearr_38631_38867[(2)] = inst_38430);

(statearr_38631_38867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (5))){
var inst_38412 = (state_38512[(8)]);
var inst_38432 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38412);
var state_38512__$1 = state_38512;
var statearr_38632_38868 = state_38512__$1;
(statearr_38632_38868[(2)] = inst_38432);

(statearr_38632_38868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (14))){
var inst_38412 = (state_38512[(8)]);
var state_38512__$1 = state_38512;
var statearr_38633_38869 = state_38512__$1;
(statearr_38633_38869[(2)] = inst_38412);

(statearr_38633_38869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (45))){
var inst_38507 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38634_38870 = state_38512__$1;
(statearr_38634_38870[(2)] = inst_38507);

(statearr_38634_38870[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (26))){
var state_38512__$1 = state_38512;
var statearr_38635_38871 = state_38512__$1;
(statearr_38635_38871[(2)] = false);

(statearr_38635_38871[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (16))){
var inst_38437 = (state_38512[(2)]);
var inst_38412 = inst_38437;
var state_38512__$1 = (function (){var statearr_38636 = state_38512;
(statearr_38636[(8)] = inst_38412);

return statearr_38636;
})();
var statearr_38637_38872 = state_38512__$1;
(statearr_38637_38872[(2)] = null);

(statearr_38637_38872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (38))){
var inst_38478 = (state_38512[(9)]);
var inst_38488 = inst_38478.cljs$lang$protocol_mask$partition$;
var inst_38489 = (!inst_38488);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38489)){
var statearr_38638_38873 = state_38512__$1;
(statearr_38638_38873[(1)] = (40));

} else {
var statearr_38639_38874 = state_38512__$1;
(statearr_38639_38874[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (30))){
var inst_38474 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38640_38875 = state_38512__$1;
(statearr_38640_38875[(2)] = inst_38474);

(statearr_38640_38875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (10))){
var inst_38412 = (state_38512[(8)]);
var inst_38425 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38412);
var state_38512__$1 = state_38512;
var statearr_38641_38876 = state_38512__$1;
(statearr_38641_38876[(2)] = inst_38425);

(statearr_38641_38876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (18))){
var inst_38443 = (state_38512[(10)]);
var inst_38476 = (state_38512[(2)]);
var inst_38477 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_38443,inst_38476);
var inst_38478 = inst_38477;
var state_38512__$1 = (function (){var statearr_38642 = state_38512;
(statearr_38642[(9)] = inst_38478);

return statearr_38642;
})();
var statearr_38643_38877 = state_38512__$1;
(statearr_38643_38877[(2)] = null);

(statearr_38643_38877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (42))){
var inst_38494 = (state_38512[(2)]);
var state_38512__$1 = state_38512;
var statearr_38644_38878 = state_38512__$1;
(statearr_38644_38878[(2)] = inst_38494);

(statearr_38644_38878[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (37))){
var state_38512__$1 = state_38512;
var statearr_38645_38879 = state_38512__$1;
(statearr_38645_38879[(2)] = true);

(statearr_38645_38879[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38513 === (8))){
var inst_38412 = (state_38512[(8)]);
var inst_38422 = inst_38412.cljs$lang$protocol_mask$partition$;
var inst_38423 = (!inst_38422);
var state_38512__$1 = state_38512;
if(cljs.core.truth_(inst_38423)){
var statearr_38646_38880 = state_38512__$1;
(statearr_38646_38880[(1)] = (10));

} else {
var statearr_38647_38881 = state_38512__$1;
(statearr_38647_38881[(1)] = (11));

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
});})(items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required))
;
return ((function (switch__24031__auto__,items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_38651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38651[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_38651[(1)] = (1));

return statearr_38651;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_38512){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_38512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e38652){if((e38652 instanceof Object)){
var ex__24035__auto__ = e38652;
var statearr_38653_38882 = state_38512;
(statearr_38653_38882[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38883 = state_38512;
state_38512 = G__38883;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_38512){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_38512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required))
})();
var state__24230__auto__ = (function (){var statearr_38654 = f__24229__auto__.call(null);
(statearr_38654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto____$1);

return statearr_38654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});
;})(items1,item1,items2,item2,conditions,value,c__24228__auto____$1,inst_38336,inst_38303,inst_38237,inst_38204,inst_38371,inst_38270,inst_38514,state_val_38534,c__24228__auto__,map__38170,map__38170__$1,kw_required))
})();
var inst_38516 = cljs.core.async.impl.dispatch.run.call(null,inst_38515);
var state_38533__$1 = (function (){var statearr_38655 = state_38533;
(statearr_38655[(19)] = inst_38516);

return statearr_38655;
})();
var statearr_38656_38884 = state_38533__$1;
(statearr_38656_38884[(2)] = inst_38514);

(statearr_38656_38884[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (32))){
var inst_38239 = (state_38533[(13)]);
var inst_38242 = (inst_38239 == null);
var inst_38243 = cljs.core.not.call(null,inst_38242);
var state_38533__$1 = state_38533;
if(inst_38243){
var statearr_38657_38885 = state_38533__$1;
(statearr_38657_38885[(1)] = (34));

} else {
var statearr_38658_38886 = state_38533__$1;
(statearr_38658_38886[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (40))){
var inst_38239 = (state_38533[(13)]);
var inst_38252 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38239);
var state_38533__$1 = state_38533;
var statearr_38659_38887 = state_38533__$1;
(statearr_38659_38887[(2)] = inst_38252);

(statearr_38659_38887[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (91))){
var inst_38365 = (state_38533[(2)]);
var inst_38339 = inst_38365;
var state_38533__$1 = (function (){var statearr_38662 = state_38533;
(statearr_38662[(12)] = inst_38339);

return statearr_38662;
})();
var statearr_38663_38888 = state_38533__$1;
(statearr_38663_38888[(2)] = null);

(statearr_38663_38888[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (108))){
var state_38533__$1 = state_38533;
var statearr_38665_38889 = state_38533__$1;
(statearr_38665_38889[(2)] = kw_required);

(statearr_38665_38889[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (56))){
var state_38533__$1 = state_38533;
var statearr_38666_38890 = state_38533__$1;
(statearr_38666_38890[(2)] = false);

(statearr_38666_38890[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (33))){
var inst_38270 = (state_38533[(18)]);
var inst_38270__$1 = (state_38533[(2)]);
var inst_38271 = cljs.core.first.call(null,inst_38270__$1);
var inst_38272 = inst_38271;
var state_38533__$1 = (function (){var statearr_38668 = state_38533;
(statearr_38668[(8)] = inst_38272);

(statearr_38668[(18)] = inst_38270__$1);

return statearr_38668;
})();
var statearr_38669_38891 = state_38533__$1;
(statearr_38669_38891[(2)] = null);

(statearr_38669_38891[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (13))){
var inst_38173 = (state_38533[(10)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(16),inst_38173);
} else {
if((state_val_38534 === (22))){
var state_38533__$1 = state_38533;
var statearr_38670_38892 = state_38533__$1;
(statearr_38670_38892[(2)] = true);

(statearr_38670_38892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (90))){
var inst_38369 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38672_38893 = state_38533__$1;
(statearr_38672_38893[(2)] = inst_38369);

(statearr_38672_38893[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (109))){
var inst_38405 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38405)){
var statearr_38673_38894 = state_38533__$1;
(statearr_38673_38894[(1)] = (110));

} else {
var statearr_38674_38895 = state_38533__$1;
(statearr_38674_38895[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (36))){
var inst_38261 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38261)){
var statearr_38675_38896 = state_38533__$1;
(statearr_38675_38896[(1)] = (43));

} else {
var statearr_38676_38897 = state_38533__$1;
(statearr_38676_38897[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (41))){
var state_38533__$1 = state_38533;
var statearr_38677_38898 = state_38533__$1;
(statearr_38677_38898[(2)] = false);

(statearr_38677_38898[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (89))){
var inst_38339 = (state_38533[(12)]);
var state_38533__$1 = state_38533;
var statearr_38678_38899 = state_38533__$1;
(statearr_38678_38899[(2)] = inst_38339);

(statearr_38678_38899[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (100))){
var inst_38527 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38679_38900 = state_38533__$1;
(statearr_38679_38900[(2)] = inst_38527);

(statearr_38679_38900[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (43))){
var inst_38239 = (state_38533[(13)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(46),inst_38239);
} else {
if((state_val_38534 === (61))){
var inst_38297 = (state_38533[(2)]);
var inst_38272 = inst_38297;
var state_38533__$1 = (function (){var statearr_38680 = state_38533;
(statearr_38680[(8)] = inst_38272);

return statearr_38680;
})();
var statearr_38681_38901 = state_38533__$1;
(statearr_38681_38901[(2)] = null);

(statearr_38681_38901[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (29))){
var inst_38206 = (state_38533[(9)]);
var state_38533__$1 = state_38533;
var statearr_38682_38902 = state_38533__$1;
(statearr_38682_38902[(2)] = inst_38206);

(statearr_38682_38902[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (44))){
var inst_38239 = (state_38533[(13)]);
var state_38533__$1 = state_38533;
var statearr_38683_38903 = state_38533__$1;
(statearr_38683_38903[(2)] = inst_38239);

(statearr_38683_38903[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (93))){
var inst_38204 = (state_38533[(14)]);
var inst_38379 = cljs.core.count.call(null,inst_38204);
var inst_38380 = (inst_38379 > (1));
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38380)){
var statearr_38684_38904 = state_38533__$1;
(statearr_38684_38904[(1)] = (95));

} else {
var statearr_38685_38905 = state_38533__$1;
(statearr_38685_38905[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (6))){
var inst_38195 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38195)){
var statearr_38686_38906 = state_38533__$1;
(statearr_38686_38906[(1)] = (13));

} else {
var statearr_38687_38907 = state_38533__$1;
(statearr_38687_38907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (111))){
var state_38533__$1 = state_38533;
var statearr_38688_38908 = state_38533__$1;
(statearr_38688_38908[(1)] = (113));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (28))){
var inst_38206 = (state_38533[(9)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(31),inst_38206);
} else {
if((state_val_38534 === (64))){
var inst_38305 = (state_38533[(7)]);
var inst_38311 = inst_38305.cljs$core$async$impl$protocols$ReadPort$;
var inst_38312 = (false) || (inst_38311);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38312)){
var statearr_38690_38909 = state_38533__$1;
(statearr_38690_38909[(1)] = (67));

} else {
var statearr_38691_38910 = state_38533__$1;
(statearr_38691_38910[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (103))){
var inst_38525 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38692_38911 = state_38533__$1;
(statearr_38692_38911[(2)] = inst_38525);

(statearr_38692_38911[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (51))){
var inst_38294 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38294)){
var statearr_38693_38912 = state_38533__$1;
(statearr_38693_38912[(1)] = (58));

} else {
var statearr_38694_38913 = state_38533__$1;
(statearr_38694_38913[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (25))){
var inst_38206 = (state_38533[(9)]);
var inst_38219 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38206);
var state_38533__$1 = state_38533;
var statearr_38695_38914 = state_38533__$1;
(statearr_38695_38914[(2)] = inst_38219);

(statearr_38695_38914[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (34))){
var inst_38239 = (state_38533[(13)]);
var inst_38245 = inst_38239.cljs$core$async$impl$protocols$ReadPort$;
var inst_38246 = (false) || (inst_38245);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38246)){
var statearr_38696_38915 = state_38533__$1;
(statearr_38696_38915[(1)] = (37));

} else {
var statearr_38697_38916 = state_38533__$1;
(statearr_38697_38916[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (17))){
var inst_38206 = (state_38533[(9)]);
var inst_38209 = (inst_38206 == null);
var inst_38210 = cljs.core.not.call(null,inst_38209);
var state_38533__$1 = state_38533;
if(inst_38210){
var statearr_38698_38917 = state_38533__$1;
(statearr_38698_38917[(1)] = (19));

} else {
var statearr_38699_38918 = state_38533__$1;
(statearr_38699_38918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (3))){
var inst_38204 = (state_38533[(14)]);
var inst_38204__$1 = (state_38533[(2)]);
var inst_38205 = cljs.core.first.call(null,inst_38204__$1);
var inst_38206 = inst_38205;
var state_38533__$1 = (function (){var statearr_38700 = state_38533;
(statearr_38700[(9)] = inst_38206);

(statearr_38700[(14)] = inst_38204__$1);

return statearr_38700;
})();
var statearr_38701_38919 = state_38533__$1;
(statearr_38701_38919[(2)] = null);

(statearr_38701_38919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (12))){
var inst_38189 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38702_38920 = state_38533__$1;
(statearr_38702_38920[(2)] = inst_38189);

(statearr_38702_38920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (2))){
var inst_38173 = (state_38533[(10)]);
var inst_38176 = (inst_38173 == null);
var inst_38177 = cljs.core.not.call(null,inst_38176);
var state_38533__$1 = state_38533;
if(inst_38177){
var statearr_38703_38921 = state_38533__$1;
(statearr_38703_38921[(1)] = (4));

} else {
var statearr_38704_38922 = state_38533__$1;
(statearr_38704_38922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (66))){
var inst_38327 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38327)){
var statearr_38705_38923 = state_38533__$1;
(statearr_38705_38923[(1)] = (73));

} else {
var statearr_38706_38924 = state_38533__$1;
(statearr_38706_38924[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (107))){
var inst_38371 = (state_38533[(11)]);
var inst_38402 = (inst_38371 == null);
var state_38533__$1 = state_38533;
var statearr_38707_38925 = state_38533__$1;
(statearr_38707_38925[(2)] = inst_38402);

(statearr_38707_38925[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (23))){
var inst_38206 = (state_38533[(9)]);
var inst_38216 = inst_38206.cljs$lang$protocol_mask$partition$;
var inst_38217 = (!inst_38216);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38217)){
var statearr_38708_38926 = state_38533__$1;
(statearr_38708_38926[(1)] = (25));

} else {
var statearr_38709_38927 = state_38533__$1;
(statearr_38709_38927[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (47))){
var inst_38272 = (state_38533[(8)]);
var inst_38275 = (inst_38272 == null);
var inst_38276 = cljs.core.not.call(null,inst_38275);
var state_38533__$1 = state_38533;
if(inst_38276){
var statearr_38710_38928 = state_38533__$1;
(statearr_38710_38928[(1)] = (49));

} else {
var statearr_38711_38929 = state_38533__$1;
(statearr_38711_38929[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (35))){
var inst_38239 = (state_38533[(13)]);
var inst_38259 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38239);
var state_38533__$1 = state_38533;
var statearr_38712_38930 = state_38533__$1;
(statearr_38712_38930[(2)] = inst_38259);

(statearr_38712_38930[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (82))){
var state_38533__$1 = state_38533;
var statearr_38713_38931 = state_38533__$1;
(statearr_38713_38931[(2)] = true);

(statearr_38713_38931[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (76))){
var inst_38330 = (state_38533[(2)]);
var inst_38305 = inst_38330;
var state_38533__$1 = (function (){var statearr_38714 = state_38533;
(statearr_38714[(7)] = inst_38305);

return statearr_38714;
})();
var statearr_38715_38932 = state_38533__$1;
(statearr_38715_38932[(2)] = null);

(statearr_38715_38932[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (97))){
var inst_38529 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38716_38933 = state_38533__$1;
(statearr_38716_38933[(2)] = inst_38529);

(statearr_38716_38933[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (19))){
var inst_38206 = (state_38533[(9)]);
var inst_38212 = inst_38206.cljs$core$async$impl$protocols$ReadPort$;
var inst_38213 = (false) || (inst_38212);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38213)){
var statearr_38717_38934 = state_38533__$1;
(statearr_38717_38934[(1)] = (22));

} else {
var statearr_38718_38935 = state_38533__$1;
(statearr_38718_38935[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (57))){
var inst_38288 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38719_38936 = state_38533__$1;
(statearr_38719_38936[(2)] = inst_38288);

(statearr_38719_38936[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (68))){
var inst_38305 = (state_38533[(7)]);
var inst_38315 = inst_38305.cljs$lang$protocol_mask$partition$;
var inst_38316 = (!inst_38315);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38316)){
var statearr_38720_38937 = state_38533__$1;
(statearr_38720_38937[(1)] = (70));

} else {
var statearr_38721_38938 = state_38533__$1;
(statearr_38721_38938[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (11))){
var state_38533__$1 = state_38533;
var statearr_38722_38939 = state_38533__$1;
(statearr_38722_38939[(2)] = false);

(statearr_38722_38939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (115))){
var inst_38519 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38723_38940 = state_38533__$1;
(statearr_38723_38940[(2)] = inst_38519);

(statearr_38723_38940[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (9))){
var inst_38191 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38724_38941 = state_38533__$1;
(statearr_38724_38941[(2)] = inst_38191);

(statearr_38724_38941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (5))){
var inst_38173 = (state_38533[(10)]);
var inst_38193 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38173);
var state_38533__$1 = state_38533;
var statearr_38725_38942 = state_38533__$1;
(statearr_38725_38942[(2)] = inst_38193);

(statearr_38725_38942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (112))){
var inst_38521 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38726_38943 = state_38533__$1;
(statearr_38726_38943[(2)] = inst_38521);

(statearr_38726_38943[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (83))){
var inst_38339 = (state_38533[(12)]);
var inst_38350 = inst_38339.cljs$lang$protocol_mask$partition$;
var inst_38351 = (!inst_38350);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38351)){
var statearr_38727_38944 = state_38533__$1;
(statearr_38727_38944[(1)] = (85));

} else {
var statearr_38728_38945 = state_38533__$1;
(statearr_38728_38945[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (14))){
var inst_38173 = (state_38533[(10)]);
var state_38533__$1 = state_38533;
var statearr_38729_38946 = state_38533__$1;
(statearr_38729_38946[(2)] = inst_38173);

(statearr_38729_38946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (45))){
var inst_38268 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38730_38947 = state_38533__$1;
(statearr_38730_38947[(2)] = inst_38268);

(statearr_38730_38947[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (53))){
var inst_38272 = (state_38533[(8)]);
var inst_38282 = inst_38272.cljs$lang$protocol_mask$partition$;
var inst_38283 = (!inst_38282);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38283)){
var statearr_38731_38948 = state_38533__$1;
(statearr_38731_38948[(1)] = (55));

} else {
var statearr_38732_38949 = state_38533__$1;
(statearr_38732_38949[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (78))){
var inst_38204 = (state_38533[(14)]);
var inst_38270 = (state_38533[(18)]);
var inst_38371 = (state_38533[(2)]);
var inst_38372 = cljs.core.empty_QMARK_.call(null,inst_38204);
var inst_38373 = cljs.core.empty_QMARK_.call(null,inst_38270);
var inst_38374 = (inst_38372) || (inst_38373);
var state_38533__$1 = (function (){var statearr_38733 = state_38533;
(statearr_38733[(11)] = inst_38371);

return statearr_38733;
})();
if(cljs.core.truth_(inst_38374)){
var statearr_38734_38950 = state_38533__$1;
(statearr_38734_38950[(1)] = (92));

} else {
var statearr_38735_38951 = state_38533__$1;
(statearr_38735_38951[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (26))){
var state_38533__$1 = state_38533;
var statearr_38736_38952 = state_38533__$1;
(statearr_38736_38952[(2)] = false);

(statearr_38736_38952[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (16))){
var inst_38198 = (state_38533[(2)]);
var inst_38173 = inst_38198;
var state_38533__$1 = (function (){var statearr_38737 = state_38533;
(statearr_38737[(10)] = inst_38173);

return statearr_38737;
})();
var statearr_38738_38953 = state_38533__$1;
(statearr_38738_38953[(2)] = null);

(statearr_38738_38953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (81))){
var inst_38362 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38362)){
var statearr_38739_38954 = state_38533__$1;
(statearr_38739_38954[(1)] = (88));

} else {
var statearr_38740_38955 = state_38533__$1;
(statearr_38740_38955[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (79))){
var inst_38339 = (state_38533[(12)]);
var inst_38346 = inst_38339.cljs$core$async$impl$protocols$ReadPort$;
var inst_38347 = (false) || (inst_38346);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38347)){
var statearr_38741_38956 = state_38533__$1;
(statearr_38741_38956[(1)] = (82));

} else {
var statearr_38742_38957 = state_38533__$1;
(statearr_38742_38957[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (38))){
var inst_38239 = (state_38533[(13)]);
var inst_38249 = inst_38239.cljs$lang$protocol_mask$partition$;
var inst_38250 = (!inst_38249);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38250)){
var statearr_38743_38958 = state_38533__$1;
(statearr_38743_38958[(1)] = (40));

} else {
var statearr_38744_38959 = state_38533__$1;
(statearr_38744_38959[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (98))){
var inst_38270 = (state_38533[(18)]);
var inst_38388 = advenjure.verbs.ask_ambiguous.call(null,item2_name,inst_38270);
var inst_38389 = advenjure.utils.say.call(null,inst_38388);
var state_38533__$1 = state_38533;
var statearr_38745_38960 = state_38533__$1;
(statearr_38745_38960[(2)] = inst_38389);

(statearr_38745_38960[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (87))){
var inst_38356 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38746_38961 = state_38533__$1;
(statearr_38746_38961[(2)] = inst_38356);

(statearr_38746_38961[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (30))){
var inst_38235 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38747_38962 = state_38533__$1;
(statearr_38747_38962[(2)] = inst_38235);

(statearr_38747_38962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (73))){
var inst_38305 = (state_38533[(7)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(76),inst_38305);
} else {
if((state_val_38534 === (96))){
var inst_38270 = (state_38533[(18)]);
var inst_38385 = cljs.core.count.call(null,inst_38270);
var inst_38386 = (inst_38385 > (1));
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38386)){
var statearr_38748_38963 = state_38533__$1;
(statearr_38748_38963[(1)] = (98));

} else {
var statearr_38749_38964 = state_38533__$1;
(statearr_38749_38964[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (10))){
var inst_38173 = (state_38533[(10)]);
var inst_38186 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38173);
var state_38533__$1 = state_38533;
var statearr_38750_38965 = state_38533__$1;
(statearr_38750_38965[(2)] = inst_38186);

(statearr_38750_38965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (18))){
var inst_38237 = (state_38533[(2)]);
var inst_38238 = advenjure.utils.find_item.call(null,game_state,item2_name);
var inst_38239 = inst_38238;
var state_38533__$1 = (function (){var statearr_38753 = state_38533;
(statearr_38753[(13)] = inst_38239);

(statearr_38753[(15)] = inst_38237);

return statearr_38753;
})();
var statearr_38754_38966 = state_38533__$1;
(statearr_38754_38966[(2)] = null);

(statearr_38754_38966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (105))){
var state_38533__$1 = state_38533;
if(cljs.core.truth_(kw_required)){
var statearr_38755_38967 = state_38533__$1;
(statearr_38755_38967[(1)] = (107));

} else {
var statearr_38756_38968 = state_38533__$1;
(statearr_38756_38968[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (52))){
var state_38533__$1 = state_38533;
var statearr_38758_38969 = state_38533__$1;
(statearr_38758_38969[(2)] = true);

(statearr_38758_38969[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (114))){
var state_38533__$1 = state_38533;
var statearr_38759_38970 = state_38533__$1;
(statearr_38759_38970[(2)] = null);

(statearr_38759_38970[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (67))){
var state_38533__$1 = state_38533;
var statearr_38760_38971 = state_38533__$1;
(statearr_38760_38971[(2)] = true);

(statearr_38760_38971[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (71))){
var state_38533__$1 = state_38533;
var statearr_38762_38972 = state_38533__$1;
(statearr_38762_38972[(2)] = false);

(statearr_38762_38972[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (42))){
var inst_38255 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38763_38973 = state_38533__$1;
(statearr_38763_38973[(2)] = inst_38255);

(statearr_38763_38973[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (80))){
var inst_38339 = (state_38533[(12)]);
var inst_38360 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38339);
var state_38533__$1 = state_38533;
var statearr_38764_38974 = state_38533__$1;
(statearr_38764_38974[(2)] = inst_38360);

(statearr_38764_38974[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (37))){
var state_38533__$1 = state_38533;
var statearr_38765_38975 = state_38533__$1;
(statearr_38765_38975[(2)] = true);

(statearr_38765_38975[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (63))){
var inst_38336 = (state_38533[(17)]);
var inst_38303 = (state_38533[(16)]);
var inst_38336__$1 = (state_38533[(2)]);
var inst_38337 = advenjure.hooks.eval_precondition.call(null,inst_38336__$1,game_state,inst_38303);
var inst_38339 = inst_38337;
var state_38533__$1 = (function (){var statearr_38766 = state_38533;
(statearr_38766[(12)] = inst_38339);

(statearr_38766[(17)] = inst_38336__$1);

return statearr_38766;
})();
var statearr_38767_38976 = state_38533__$1;
(statearr_38767_38976[(2)] = null);

(statearr_38767_38976[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (94))){
var inst_38531 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38533__$1,inst_38531);
} else {
if((state_val_38534 === (8))){
var inst_38173 = (state_38533[(10)]);
var inst_38183 = inst_38173.cljs$lang$protocol_mask$partition$;
var inst_38184 = (!inst_38183);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38184)){
var statearr_38768_38977 = state_38533__$1;
(statearr_38768_38977[(1)] = (10));

} else {
var statearr_38769_38978 = state_38533__$1;
(statearr_38769_38978[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (49))){
var inst_38272 = (state_38533[(8)]);
var inst_38278 = inst_38272.cljs$core$async$impl$protocols$ReadPort$;
var inst_38279 = (false) || (inst_38278);
var state_38533__$1 = state_38533;
if(cljs.core.truth_(inst_38279)){
var statearr_38770_38979 = state_38533__$1;
(statearr_38770_38979[(1)] = (52));

} else {
var statearr_38771_38980 = state_38533__$1;
(statearr_38771_38980[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38534 === (84))){
var inst_38358 = (state_38533[(2)]);
var state_38533__$1 = state_38533;
var statearr_38772_38981 = state_38533__$1;
(statearr_38772_38981[(2)] = inst_38358);

(statearr_38772_38981[(1)] = (81));


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
});})(c__24228__auto__,map__38170,map__38170__$1,kw_required))
;
return ((function (switch__24031__auto__,c__24228__auto__,map__38170,map__38170__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_38776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38776[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_38776[(1)] = (1));

return statearr_38776;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_38533){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_38533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e38777){if((e38777 instanceof Object)){
var ex__24035__auto__ = e38777;
var statearr_38778_38982 = state_38533;
(statearr_38778_38982[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38533;
state_38533 = G__38983;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_38533){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_38533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,map__38170,map__38170__$1,kw_required))
})();
var state__24230__auto__ = (function (){var statearr_38779 = f__24229__auto__.call(null);
(statearr_38779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_38779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,map__38170,map__38170__$1,kw_required))
);

return c__24228__auto__;
});
G__38784 = function(game_state,item1_name,item2_name){
switch(arguments.length){
case 1:
return G__38784__1.call(this,game_state);
case 2:
return G__38784__2.call(this,game_state,item1_name);
case 3:
return G__38784__3.call(this,game_state,item1_name,item2_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38784.cljs$core$IFn$_invoke$arity$1 = G__38784__1;
G__38784.cljs$core$IFn$_invoke$arity$2 = G__38784__2;
G__38784.cljs$core$IFn$_invoke$arity$3 = G__38784__3;
return G__38784;
})()
;})(map__38170,map__38170__$1,kw_required))
});

advenjure.verbs.make_compound_item_handler.cljs$lang$applyTo = (function (seq38158){
var G__38159 = cljs.core.first.call(null,seq38158);
var seq38158__$1 = cljs.core.next.call(null,seq38158);
var G__38160 = cljs.core.first.call(null,seq38158__$1);
var seq38158__$2 = cljs.core.next.call(null,seq38158__$1);
var G__38161 = cljs.core.first.call(null,seq38158__$2);
var seq38158__$3 = cljs.core.next.call(null,seq38158__$2);
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__38159,G__38160,G__38161,seq38158__$3);
});

advenjure.verbs.make_compound_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * Change the location if direction is valid.
 */
advenjure.verbs.go = (function advenjure$verbs$go(var_args){
var args38984 = [];
var len__21530__auto___39159 = arguments.length;
var i__21531__auto___39160 = (0);
while(true){
if((i__21531__auto___39160 < len__21530__auto___39159)){
args38984.push((arguments[i__21531__auto___39160]));

var G__39161 = (i__21531__auto___39160 + (1));
i__21531__auto___39160 = G__39161;
continue;
} else {
}
break;
}

var G__38986 = args38984.length;
switch (G__38986) {
case 1:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38984.length)].join('')));

}
});

advenjure.verbs.go.cljs$core$IFn$_invoke$arity$1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Go where?"));
});

advenjure.verbs.go.cljs$core$IFn$_invoke$arity$2 = (function (game_state,direction){
var current = advenjure.utils.current_room.call(null,game_state);
var temp__4655__auto__ = cljs.core.get.call(null,advenjure.utils.direction_mappings,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,dir,temp__4655__auto__,current){
return (function (state_39084){
var state_val_39085 = (state_39084[(1)]);
if((state_val_39085 === (7))){
var state_39084__$1 = state_39084;
var statearr_39086_39163 = state_39084__$1;
(statearr_39086_39163[(2)] = true);

(statearr_39086_39163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (20))){
var inst_39026 = (state_39084[(7)]);
var inst_39026__$1 = new cljs.core.Keyword(null,"default-go","default-go",-2063089013).cljs$core$IFn$_invoke$arity$1(current);
var state_39084__$1 = (function (){var statearr_39087 = state_39084;
(statearr_39087[(7)] = inst_39026__$1);

return statearr_39087;
})();
if(cljs.core.truth_(inst_39026__$1)){
var statearr_39088_39164 = state_39084__$1;
(statearr_39088_39164[(1)] = (23));

} else {
var statearr_39089_39165 = state_39084__$1;
(statearr_39089_39165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (27))){
var state_39084__$1 = state_39084;
var statearr_39090_39166 = state_39084__$1;
(statearr_39090_39166[(2)] = null);

(statearr_39090_39166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (1))){
var inst_38987 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_38988 = inst_38987;
var state_39084__$1 = (function (){var statearr_39091 = state_39084;
(statearr_39091[(8)] = inst_38988);

return statearr_39091;
})();
var statearr_39092_39167 = state_39084__$1;
(statearr_39092_39167[(2)] = null);

(statearr_39092_39167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (24))){
var inst_39029 = advenjure.gettext.core._.call(null,"Couldn't go in that direction.");
var state_39084__$1 = state_39084;
var statearr_39093_39168 = state_39084__$1;
(statearr_39093_39168[(2)] = inst_39029);

(statearr_39093_39168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (4))){
var inst_38988 = (state_39084[(8)]);
var inst_38994 = inst_38988.cljs$core$async$impl$protocols$ReadPort$;
var inst_38995 = (false) || (inst_38994);
var state_39084__$1 = state_39084;
if(cljs.core.truth_(inst_38995)){
var statearr_39094_39169 = state_39084__$1;
(statearr_39094_39169[(1)] = (7));

} else {
var statearr_39095_39170 = state_39084__$1;
(statearr_39095_39170[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (15))){
var inst_39017 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39096_39171 = state_39084__$1;
(statearr_39096_39171[(2)] = inst_39017);

(statearr_39096_39171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (21))){
var state_39084__$1 = state_39084;
var statearr_39097_39172 = state_39084__$1;
(statearr_39097_39172[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (13))){
var inst_38988 = (state_39084[(8)]);
var state_39084__$1 = state_39084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39084__$1,(16),inst_38988);
} else {
if((state_val_39085 === (22))){
var inst_39080 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39099_39173 = state_39084__$1;
(statearr_39099_39173[(2)] = inst_39080);

(statearr_39099_39173[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (6))){
var inst_39010 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
if(cljs.core.truth_(inst_39010)){
var statearr_39100_39174 = state_39084__$1;
(statearr_39100_39174[(1)] = (13));

} else {
var statearr_39101_39175 = state_39084__$1;
(statearr_39101_39175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (28))){
var inst_39078 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39102_39176 = state_39084__$1;
(statearr_39102_39176[(2)] = inst_39078);

(statearr_39102_39176[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (25))){
var inst_39031 = (state_39084[(2)]);
var inst_39032 = advenjure.utils.say.call(null,inst_39031);
var state_39084__$1 = state_39084;
var statearr_39103_39177 = state_39084__$1;
(statearr_39103_39177[(2)] = inst_39032);

(statearr_39103_39177[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (17))){
var inst_39019 = (state_39084[(9)]);
var inst_39022 = advenjure.utils.say.call(null,inst_39019);
var state_39084__$1 = state_39084;
var statearr_39104_39178 = state_39084__$1;
(statearr_39104_39178[(2)] = inst_39022);

(statearr_39104_39178[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (3))){
var inst_39019 = (state_39084[(9)]);
var inst_39019__$1 = (state_39084[(2)]);
var inst_39020 = typeof inst_39019__$1 === 'string';
var state_39084__$1 = (function (){var statearr_39105 = state_39084;
(statearr_39105[(9)] = inst_39019__$1);

return statearr_39105;
})();
if(cljs.core.truth_(inst_39020)){
var statearr_39106_39179 = state_39084__$1;
(statearr_39106_39179[(1)] = (17));

} else {
var statearr_39107_39180 = state_39084__$1;
(statearr_39107_39180[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (12))){
var inst_39004 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39108_39181 = state_39084__$1;
(statearr_39108_39181[(2)] = inst_39004);

(statearr_39108_39181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (2))){
var inst_38988 = (state_39084[(8)]);
var inst_38991 = (inst_38988 == null);
var inst_38992 = cljs.core.not.call(null,inst_38991);
var state_39084__$1 = state_39084;
if(inst_38992){
var statearr_39109_39182 = state_39084__$1;
(statearr_39109_39182[(1)] = (4));

} else {
var statearr_39110_39183 = state_39084__$1;
(statearr_39110_39183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (23))){
var inst_39026 = (state_39084[(7)]);
var state_39084__$1 = state_39084;
var statearr_39111_39184 = state_39084__$1;
(statearr_39111_39184[(2)] = inst_39026);

(statearr_39111_39184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (19))){
var inst_39082 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39084__$1,inst_39082);
} else {
if((state_val_39085 === (11))){
var state_39084__$1 = state_39084;
var statearr_39112_39185 = state_39084__$1;
(statearr_39112_39185[(2)] = false);

(statearr_39112_39185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (9))){
var inst_39006 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39113_39186 = state_39084__$1;
(statearr_39113_39186[(2)] = inst_39006);

(statearr_39113_39186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (5))){
var inst_38988 = (state_39084[(8)]);
var inst_39008 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38988);
var state_39084__$1 = state_39084;
var statearr_39114_39187 = state_39084__$1;
(statearr_39114_39187[(2)] = inst_39008);

(statearr_39114_39187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (14))){
var inst_38988 = (state_39084[(8)]);
var state_39084__$1 = state_39084;
var statearr_39115_39188 = state_39084__$1;
(statearr_39115_39188[(2)] = inst_38988);

(statearr_39115_39188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (26))){
var inst_39019 = (state_39084[(9)]);
var inst_39073 = cljs.core.async.chan.call(null,(1));
var inst_39074 = (function (){var dir_value = inst_39019;
var c__24228__auto____$1 = inst_39073;
return ((function (dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current){
return (function (state_39071){
var state_val_39072 = (state_39071[(1)]);
if((state_val_39072 === (7))){
var state_39071__$1 = state_39071;
var statearr_39116_39189 = state_39071__$1;
(statearr_39116_39189[(2)] = true);

(statearr_39116_39189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (1))){
var inst_39035 = advenjure.change_rooms.change_rooms.call(null,game_state,dir_value);
var inst_39036 = inst_39035;
var state_39071__$1 = (function (){var statearr_39117 = state_39071;
(statearr_39117[(7)] = inst_39036);

return statearr_39117;
})();
var statearr_39118_39190 = state_39071__$1;
(statearr_39118_39190[(2)] = null);

(statearr_39118_39190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (4))){
var inst_39036 = (state_39071[(7)]);
var inst_39042 = inst_39036.cljs$core$async$impl$protocols$ReadPort$;
var inst_39043 = (false) || (inst_39042);
var state_39071__$1 = state_39071;
if(cljs.core.truth_(inst_39043)){
var statearr_39119_39191 = state_39071__$1;
(statearr_39119_39191[(1)] = (7));

} else {
var statearr_39120_39192 = state_39071__$1;
(statearr_39120_39192[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (15))){
var inst_39065 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
var statearr_39121_39193 = state_39071__$1;
(statearr_39121_39193[(2)] = inst_39065);

(statearr_39121_39193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (13))){
var inst_39036 = (state_39071[(7)]);
var state_39071__$1 = state_39071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39071__$1,(16),inst_39036);
} else {
if((state_val_39072 === (6))){
var inst_39058 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
if(cljs.core.truth_(inst_39058)){
var statearr_39122_39194 = state_39071__$1;
(statearr_39122_39194[(1)] = (13));

} else {
var statearr_39123_39195 = state_39071__$1;
(statearr_39123_39195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (3))){
var inst_39067 = (state_39071[(2)]);
var inst_39068 = dir.call(null,current);
var inst_39069 = advenjure.hooks.eval_postcondition.call(null,inst_39068,game_state,inst_39067);
var state_39071__$1 = state_39071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39071__$1,inst_39069);
} else {
if((state_val_39072 === (12))){
var inst_39052 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
var statearr_39124_39196 = state_39071__$1;
(statearr_39124_39196[(2)] = inst_39052);

(statearr_39124_39196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (2))){
var inst_39036 = (state_39071[(7)]);
var inst_39039 = (inst_39036 == null);
var inst_39040 = cljs.core.not.call(null,inst_39039);
var state_39071__$1 = state_39071;
if(inst_39040){
var statearr_39125_39197 = state_39071__$1;
(statearr_39125_39197[(1)] = (4));

} else {
var statearr_39126_39198 = state_39071__$1;
(statearr_39126_39198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (11))){
var state_39071__$1 = state_39071;
var statearr_39127_39199 = state_39071__$1;
(statearr_39127_39199[(2)] = false);

(statearr_39127_39199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (9))){
var inst_39054 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
var statearr_39128_39200 = state_39071__$1;
(statearr_39128_39200[(2)] = inst_39054);

(statearr_39128_39200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (5))){
var inst_39036 = (state_39071[(7)]);
var inst_39056 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39036);
var state_39071__$1 = state_39071;
var statearr_39129_39201 = state_39071__$1;
(statearr_39129_39201[(2)] = inst_39056);

(statearr_39129_39201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (14))){
var inst_39036 = (state_39071[(7)]);
var state_39071__$1 = state_39071;
var statearr_39130_39202 = state_39071__$1;
(statearr_39130_39202[(2)] = inst_39036);

(statearr_39130_39202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (16))){
var inst_39061 = (state_39071[(2)]);
var inst_39036 = inst_39061;
var state_39071__$1 = (function (){var statearr_39131 = state_39071;
(statearr_39131[(7)] = inst_39036);

return statearr_39131;
})();
var statearr_39132_39203 = state_39071__$1;
(statearr_39132_39203[(2)] = null);

(statearr_39132_39203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (10))){
var inst_39036 = (state_39071[(7)]);
var inst_39049 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39036);
var state_39071__$1 = state_39071;
var statearr_39133_39204 = state_39071__$1;
(statearr_39133_39204[(2)] = inst_39049);

(statearr_39133_39204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (8))){
var inst_39036 = (state_39071[(7)]);
var inst_39046 = inst_39036.cljs$lang$protocol_mask$partition$;
var inst_39047 = (!inst_39046);
var state_39071__$1 = state_39071;
if(cljs.core.truth_(inst_39047)){
var statearr_39134_39205 = state_39071__$1;
(statearr_39134_39205[(1)] = (10));

} else {
var statearr_39135_39206 = state_39071__$1;
(statearr_39135_39206[(1)] = (11));

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
});})(dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24031__auto__,dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_39139 = [null,null,null,null,null,null,null,null];
(statearr_39139[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_39139[(1)] = (1));

return statearr_39139;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_39071){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_39071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e39140){if((e39140 instanceof Object)){
var ex__24035__auto__ = e39140;
var statearr_39141_39207 = state_39071;
(statearr_39141_39207[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39208 = state_39071;
state_39071 = G__39208;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_39071){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_39071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current))
})();
var state__24230__auto__ = (function (){var statearr_39142 = f__24229__auto__.call(null);
(statearr_39142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto____$1);

return statearr_39142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});
;})(dir_value,c__24228__auto____$1,inst_39019,inst_39073,state_val_39085,c__24228__auto__,dir,temp__4655__auto__,current))
})();
var inst_39075 = cljs.core.async.impl.dispatch.run.call(null,inst_39074);
var state_39084__$1 = (function (){var statearr_39143 = state_39084;
(statearr_39143[(10)] = inst_39075);

return statearr_39143;
})();
var statearr_39144_39209 = state_39084__$1;
(statearr_39144_39209[(2)] = inst_39073);

(statearr_39144_39209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (16))){
var inst_39013 = (state_39084[(2)]);
var inst_38988 = inst_39013;
var state_39084__$1 = (function (){var statearr_39145 = state_39084;
(statearr_39145[(8)] = inst_38988);

return statearr_39145;
})();
var statearr_39146_39210 = state_39084__$1;
(statearr_39146_39210[(2)] = null);

(statearr_39146_39210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (10))){
var inst_38988 = (state_39084[(8)]);
var inst_39001 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38988);
var state_39084__$1 = state_39084;
var statearr_39147_39211 = state_39084__$1;
(statearr_39147_39211[(2)] = inst_39001);

(statearr_39147_39211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (18))){
var inst_39019 = (state_39084[(9)]);
var inst_39024 = cljs.core.not.call(null,inst_39019);
var state_39084__$1 = state_39084;
if(inst_39024){
var statearr_39148_39212 = state_39084__$1;
(statearr_39148_39212[(1)] = (20));

} else {
var statearr_39149_39213 = state_39084__$1;
(statearr_39149_39213[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (8))){
var inst_38988 = (state_39084[(8)]);
var inst_38998 = inst_38988.cljs$lang$protocol_mask$partition$;
var inst_38999 = (!inst_38998);
var state_39084__$1 = state_39084;
if(cljs.core.truth_(inst_38999)){
var statearr_39150_39214 = state_39084__$1;
(statearr_39150_39214[(1)] = (10));

} else {
var statearr_39151_39215 = state_39084__$1;
(statearr_39151_39215[(1)] = (11));

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
});})(c__24228__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24031__auto__,c__24228__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_39155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39155[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_39155[(1)] = (1));

return statearr_39155;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_39084){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_39084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e39156){if((e39156 instanceof Object)){
var ex__24035__auto__ = e39156;
var statearr_39157_39216 = state_39084;
(statearr_39157_39216[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39217 = state_39084;
state_39084 = G__39217;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_39084){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_39084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,dir,temp__4655__auto__,current))
})();
var state__24230__auto__ = (function (){var statearr_39158 = f__24229__auto__.call(null);
(statearr_39158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_39158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,dir,temp__4655__auto__,current))
);

return c__24228__auto__;
} else {
var temp__4655__auto____$1 = advenjure.utils.get_visible_room.call(null,game_state,direction);
if(cljs.core.truth_(temp__4655__auto____$1)){
var roomkw = temp__4655__auto____$1;
return advenjure.change_rooms.change_rooms.call(null,game_state,roomkw);
} else {
return advenjure.utils.say.call(null,"Go where?");
}
}
});

advenjure.verbs.go.cljs$lang$maxFixedArity = 2;

/**
 * Describe what's in the given direction.
 */
advenjure.verbs.look_to = (function advenjure$verbs$look_to(var_args){
var args39218 = [];
var len__21530__auto___39395 = arguments.length;
var i__21531__auto___39396 = (0);
while(true){
if((i__21531__auto___39396 < len__21530__auto___39395)){
args39218.push((arguments[i__21531__auto___39396]));

var G__39397 = (i__21531__auto___39396 + (1));
i__21531__auto___39396 = G__39397;
continue;
} else {
}
break;
}

var G__39220 = args39218.length;
switch (G__39220) {
case 1:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39218.length)].join('')));

}
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Look to where?"));
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2 = (function (game_state,direction){
var temp__4655__auto__ = cljs.core.get.call(null,advenjure.utils.direction_mappings,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,dir,temp__4655__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,dir,temp__4655__auto__){
return (function (state_39324){
var state_val_39325 = (state_39324[(1)]);
if((state_val_39325 === (7))){
var state_39324__$1 = state_39324;
var statearr_39326_39399 = state_39324__$1;
(statearr_39326_39399[(2)] = true);

(statearr_39326_39399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (20))){
var inst_39258 = (state_39324[(7)]);
var inst_39278 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39258);
var state_39324__$1 = state_39324;
var statearr_39327_39400 = state_39324__$1;
(statearr_39327_39400[(2)] = inst_39278);

(statearr_39327_39400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (27))){
var inst_39274 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39328_39401 = state_39324__$1;
(statearr_39328_39401[(2)] = inst_39274);

(statearr_39328_39401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (1))){
var inst_39221 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_39222 = inst_39221;
var state_39324__$1 = (function (){var statearr_39329 = state_39324;
(statearr_39329[(8)] = inst_39222);

return statearr_39329;
})();
var statearr_39330_39402 = state_39324__$1;
(statearr_39330_39402[(2)] = null);

(statearr_39330_39402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (24))){
var inst_39276 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39331_39403 = state_39324__$1;
(statearr_39331_39403[(2)] = inst_39276);

(statearr_39331_39403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (39))){
var inst_39289 = (state_39324[(9)]);
var inst_39303 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(inst_39289);
var state_39324__$1 = state_39324;
var statearr_39332_39404 = state_39324__$1;
(statearr_39332_39404[(2)] = inst_39303);

(statearr_39332_39404[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (46))){
var inst_39316 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39333_39405 = state_39324__$1;
(statearr_39333_39405[(2)] = inst_39316);

(statearr_39333_39405[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (4))){
var inst_39222 = (state_39324[(8)]);
var inst_39228 = inst_39222.cljs$core$async$impl$protocols$ReadPort$;
var inst_39229 = (false) || (inst_39228);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39229)){
var statearr_39334_39406 = state_39324__$1;
(statearr_39334_39406[(1)] = (7));

} else {
var statearr_39335_39407 = state_39324__$1;
(statearr_39335_39407[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (15))){
var inst_39251 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39336_39408 = state_39324__$1;
(statearr_39336_39408[(2)] = inst_39251);

(statearr_39336_39408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (21))){
var inst_39280 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39280)){
var statearr_39337_39409 = state_39324__$1;
(statearr_39337_39409[(1)] = (28));

} else {
var statearr_39338_39410 = state_39324__$1;
(statearr_39338_39410[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (31))){
var inst_39283 = (state_39324[(2)]);
var inst_39258 = inst_39283;
var state_39324__$1 = (function (){var statearr_39339 = state_39324;
(statearr_39339[(7)] = inst_39258);

return statearr_39339;
})();
var statearr_39340_39411 = state_39324__$1;
(statearr_39340_39411[(2)] = null);

(statearr_39340_39411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (32))){
var inst_39292 = advenjure.gettext.core._.call(null,"That direction was blocked.");
var inst_39293 = advenjure.utils.say.call(null,inst_39292);
var state_39324__$1 = state_39324;
var statearr_39341_39412 = state_39324__$1;
(statearr_39341_39412[(2)] = inst_39293);

(statearr_39341_39412[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (40))){
var inst_39305 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39305)){
var statearr_39342_39413 = state_39324__$1;
(statearr_39342_39413[(1)] = (41));

} else {
var statearr_39343_39414 = state_39324__$1;
(statearr_39343_39414[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (33))){
var inst_39253 = (state_39324[(10)]);
var inst_39295 = cljs.core.not.call(null,inst_39253);
var state_39324__$1 = state_39324;
if(inst_39295){
var statearr_39344_39415 = state_39324__$1;
(statearr_39344_39415[(1)] = (35));

} else {
var statearr_39345_39416 = state_39324__$1;
(statearr_39345_39416[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (13))){
var inst_39222 = (state_39324[(8)]);
var state_39324__$1 = state_39324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39324__$1,(16),inst_39222);
} else {
if((state_val_39325 === (22))){
var state_39324__$1 = state_39324;
var statearr_39346_39417 = state_39324__$1;
(statearr_39346_39417[(2)] = true);

(statearr_39346_39417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (36))){
var inst_39300 = (state_39324[(11)]);
var inst_39289 = (state_39324[(9)]);
var inst_39300__$1 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(inst_39289);
var state_39324__$1 = (function (){var statearr_39347 = state_39324;
(statearr_39347[(11)] = inst_39300__$1);

return statearr_39347;
})();
if(cljs.core.truth_(inst_39300__$1)){
var statearr_39348_39418 = state_39324__$1;
(statearr_39348_39418[(1)] = (38));

} else {
var statearr_39349_39419 = state_39324__$1;
(statearr_39349_39419[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (41))){
var inst_39289 = (state_39324[(9)]);
var inst_39307 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_39289);
var inst_39308 = advenjure.gettext.core._.call(null,"The %s was in that direction.",inst_39307);
var inst_39309 = advenjure.utils.say.call(null,inst_39308);
var state_39324__$1 = state_39324;
var statearr_39350_39420 = state_39324__$1;
(statearr_39350_39420[(2)] = inst_39309);

(statearr_39350_39420[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (43))){
var inst_39318 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39351_39421 = state_39324__$1;
(statearr_39351_39421[(2)] = inst_39318);

(statearr_39351_39421[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (29))){
var inst_39258 = (state_39324[(7)]);
var state_39324__$1 = state_39324;
var statearr_39352_39422 = state_39324__$1;
(statearr_39352_39422[(2)] = inst_39258);

(statearr_39352_39422[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (44))){
var inst_39312 = advenjure.gettext.core._.call(null,"I didn't know what was in that direction.");
var inst_39313 = advenjure.utils.say.call(null,inst_39312);
var state_39324__$1 = state_39324;
var statearr_39353_39423 = state_39324__$1;
(statearr_39353_39423[(2)] = inst_39313);

(statearr_39353_39423[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (6))){
var inst_39244 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39244)){
var statearr_39354_39424 = state_39324__$1;
(statearr_39354_39424[(1)] = (13));

} else {
var statearr_39355_39425 = state_39324__$1;
(statearr_39355_39425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (28))){
var inst_39258 = (state_39324[(7)]);
var state_39324__$1 = state_39324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39324__$1,(31),inst_39258);
} else {
if((state_val_39325 === (25))){
var inst_39258 = (state_39324[(7)]);
var inst_39271 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39258);
var state_39324__$1 = state_39324;
var statearr_39356_39426 = state_39324__$1;
(statearr_39356_39426[(2)] = inst_39271);

(statearr_39356_39426[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (34))){
var inst_39322 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39324__$1,inst_39322);
} else {
if((state_val_39325 === (17))){
var inst_39258 = (state_39324[(7)]);
var inst_39261 = (inst_39258 == null);
var inst_39262 = cljs.core.not.call(null,inst_39261);
var state_39324__$1 = state_39324;
if(inst_39262){
var statearr_39357_39427 = state_39324__$1;
(statearr_39357_39427[(1)] = (19));

} else {
var statearr_39358_39428 = state_39324__$1;
(statearr_39358_39428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (3))){
var inst_39253 = (state_39324[(10)]);
var inst_39253__$1 = (state_39324[(2)]);
var inst_39254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39255 = [new cljs.core.Keyword(null,"room-map","room-map",978449264),inst_39253__$1];
var inst_39256 = (new cljs.core.PersistentVector(null,2,(5),inst_39254,inst_39255,null));
var inst_39257 = cljs.core.get_in.call(null,game_state,inst_39256);
var inst_39258 = inst_39257;
var state_39324__$1 = (function (){var statearr_39359 = state_39324;
(statearr_39359[(10)] = inst_39253__$1);

(statearr_39359[(7)] = inst_39258);

return statearr_39359;
})();
var statearr_39360_39429 = state_39324__$1;
(statearr_39360_39429[(2)] = null);

(statearr_39360_39429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (12))){
var inst_39238 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39361_39430 = state_39324__$1;
(statearr_39361_39430[(2)] = inst_39238);

(statearr_39361_39430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (2))){
var inst_39222 = (state_39324[(8)]);
var inst_39225 = (inst_39222 == null);
var inst_39226 = cljs.core.not.call(null,inst_39225);
var state_39324__$1 = state_39324;
if(inst_39226){
var statearr_39362_39431 = state_39324__$1;
(statearr_39362_39431[(1)] = (4));

} else {
var statearr_39363_39432 = state_39324__$1;
(statearr_39363_39432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (23))){
var inst_39258 = (state_39324[(7)]);
var inst_39268 = inst_39258.cljs$lang$protocol_mask$partition$;
var inst_39269 = (!inst_39268);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39269)){
var statearr_39364_39433 = state_39324__$1;
(statearr_39364_39433[(1)] = (25));

} else {
var statearr_39365_39434 = state_39324__$1;
(statearr_39365_39434[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (35))){
var inst_39297 = advenjure.gettext.core._.call(null,"There was nothing in that direction.");
var inst_39298 = advenjure.utils.say.call(null,inst_39297);
var state_39324__$1 = state_39324;
var statearr_39366_39435 = state_39324__$1;
(statearr_39366_39435[(2)] = inst_39298);

(statearr_39366_39435[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (19))){
var inst_39258 = (state_39324[(7)]);
var inst_39264 = inst_39258.cljs$core$async$impl$protocols$ReadPort$;
var inst_39265 = (false) || (inst_39264);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39265)){
var statearr_39367_39436 = state_39324__$1;
(statearr_39367_39436[(1)] = (22));

} else {
var statearr_39368_39437 = state_39324__$1;
(statearr_39368_39437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (11))){
var state_39324__$1 = state_39324;
var statearr_39369_39438 = state_39324__$1;
(statearr_39369_39438[(2)] = false);

(statearr_39369_39438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (9))){
var inst_39240 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39370_39439 = state_39324__$1;
(statearr_39370_39439[(2)] = inst_39240);

(statearr_39370_39439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (5))){
var inst_39222 = (state_39324[(8)]);
var inst_39242 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39222);
var state_39324__$1 = state_39324;
var statearr_39371_39440 = state_39324__$1;
(statearr_39371_39440[(2)] = inst_39242);

(statearr_39371_39440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (14))){
var inst_39222 = (state_39324[(8)]);
var state_39324__$1 = state_39324;
var statearr_39372_39441 = state_39324__$1;
(statearr_39372_39441[(2)] = inst_39222);

(statearr_39372_39441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (45))){
var state_39324__$1 = state_39324;
var statearr_39373_39442 = state_39324__$1;
(statearr_39373_39442[(2)] = null);

(statearr_39373_39442[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (26))){
var state_39324__$1 = state_39324;
var statearr_39374_39443 = state_39324__$1;
(statearr_39374_39443[(2)] = false);

(statearr_39374_39443[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (16))){
var inst_39247 = (state_39324[(2)]);
var inst_39222 = inst_39247;
var state_39324__$1 = (function (){var statearr_39375 = state_39324;
(statearr_39375[(8)] = inst_39222);

return statearr_39375;
})();
var statearr_39376_39444 = state_39324__$1;
(statearr_39376_39444[(2)] = null);

(statearr_39376_39444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (38))){
var inst_39300 = (state_39324[(11)]);
var state_39324__$1 = state_39324;
var statearr_39377_39445 = state_39324__$1;
(statearr_39377_39445[(2)] = inst_39300);

(statearr_39377_39445[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (30))){
var inst_39287 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39378_39446 = state_39324__$1;
(statearr_39378_39446[(2)] = inst_39287);

(statearr_39378_39446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (10))){
var inst_39222 = (state_39324[(8)]);
var inst_39235 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39222);
var state_39324__$1 = state_39324;
var statearr_39379_39447 = state_39324__$1;
(statearr_39379_39447[(2)] = inst_39235);

(statearr_39379_39447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (18))){
var inst_39253 = (state_39324[(10)]);
var inst_39289 = (state_39324[(2)]);
var inst_39290 = typeof inst_39253 === 'string';
var state_39324__$1 = (function (){var statearr_39380 = state_39324;
(statearr_39380[(9)] = inst_39289);

return statearr_39380;
})();
if(cljs.core.truth_(inst_39290)){
var statearr_39381_39448 = state_39324__$1;
(statearr_39381_39448[(1)] = (32));

} else {
var statearr_39382_39449 = state_39324__$1;
(statearr_39382_39449[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (42))){
var state_39324__$1 = state_39324;
var statearr_39383_39450 = state_39324__$1;
(statearr_39383_39450[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (37))){
var inst_39320 = (state_39324[(2)]);
var state_39324__$1 = state_39324;
var statearr_39385_39451 = state_39324__$1;
(statearr_39385_39451[(2)] = inst_39320);

(statearr_39385_39451[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39325 === (8))){
var inst_39222 = (state_39324[(8)]);
var inst_39232 = inst_39222.cljs$lang$protocol_mask$partition$;
var inst_39233 = (!inst_39232);
var state_39324__$1 = state_39324;
if(cljs.core.truth_(inst_39233)){
var statearr_39386_39452 = state_39324__$1;
(statearr_39386_39452[(1)] = (10));

} else {
var statearr_39387_39453 = state_39324__$1;
(statearr_39387_39453[(1)] = (11));

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
});})(c__24228__auto__,dir,temp__4655__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__,dir,temp__4655__auto__){
return (function() {
var advenjure$verbs$state_machine__24032__auto__ = null;
var advenjure$verbs$state_machine__24032__auto____0 = (function (){
var statearr_39391 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39391[(0)] = advenjure$verbs$state_machine__24032__auto__);

(statearr_39391[(1)] = (1));

return statearr_39391;
});
var advenjure$verbs$state_machine__24032__auto____1 = (function (state_39324){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_39324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e39392){if((e39392 instanceof Object)){
var ex__24035__auto__ = e39392;
var statearr_39393_39454 = state_39324;
(statearr_39393_39454[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39455 = state_39324;
state_39324 = G__39455;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24032__auto__ = function(state_39324){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24032__auto____1.call(this,state_39324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24032__auto____0;
advenjure$verbs$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24032__auto____1;
return advenjure$verbs$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,dir,temp__4655__auto__))
})();
var state__24230__auto__ = (function (){var statearr_39394 = f__24229__auto__.call(null);
(statearr_39394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_39394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,dir,temp__4655__auto__))
);

return c__24228__auto__;
} else {
var temp__4655__auto____$1 = advenjure.utils.get_visible_room.call(null,game_state,direction);
if(cljs.core.truth_(temp__4655__auto____$1)){
var roomkw = temp__4655__auto____$1;
var room_name = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),roomkw,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var dir_kw = roomkw.call(null,clojure.set.map_invert.call(null,advenjure.utils.current_room.call(null,game_state)));
var dir_name = dir_kw.call(null,advenjure.utils.direction_names);
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"The %s was toward %s.",room_name,dir_name));
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Look to where?"));
}
}
});

advenjure.verbs.look_to.cljs$lang$maxFixedArity = 2;

/**
 * Go to the previous room, if possible.
 */
advenjure.verbs.go_back = (function advenjure$verbs$go_back(game_state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"previous-room","previous-room",1161246873).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(temp__4655__auto__)){
var roomkw = temp__4655__auto__;
if(cljs.core.truth_(advenjure.rooms.connection_dir.call(null,advenjure.utils.current_room.call(null,game_state),roomkw))){
return advenjure.change_rooms.change_rooms.call(null,game_state,roomkw);
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Where would back be?"));
}
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Where would back be?"));
}
});
/**
 * Look around (describe room) and enumerate available movement directions.
 */
advenjure.verbs.look = (function advenjure$verbs$look(game_state){
advenjure.utils.say.call(null,[cljs.core.str(advenjure.rooms.describe.call(null,advenjure.utils.current_room.call(null,game_state)))].join(''));

advenjure.utils.say.call(null," ");

return cljs.core.reduce.call(null,(function (gs,dirkw){
var dir_value = advenjure.hooks.eval_direction.call(null,game_state,dirkw);
var dir_name = dirkw.call(null,advenjure.utils.direction_names);
var dir_room = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),dir_value], null));
if(cljs.core.truth_(dir_value)){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,dir_value,dir_name,dir_room){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,dir_value,dir_name,dir_room){
return (function (state_39708){
var state_val_39709 = (state_39708[(1)]);
if((state_val_39709 === (7))){
var state_39708__$1 = state_39708;
var statearr_39710_39776 = state_39708__$1;
(statearr_39710_39776[(2)] = true);

(statearr_39710_39776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (20))){
var inst_39650 = (state_39708[(7)]);
var inst_39670 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39650);
var state_39708__$1 = state_39708;
var statearr_39711_39777 = state_39708__$1;
(statearr_39711_39777[(2)] = inst_39670);

(statearr_39711_39777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (27))){
var inst_39666 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39712_39778 = state_39708__$1;
(statearr_39712_39778[(2)] = inst_39666);

(statearr_39712_39778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (1))){
var inst_39616 = gs;
var state_39708__$1 = (function (){var statearr_39713 = state_39708;
(statearr_39713[(8)] = inst_39616);

return statearr_39713;
})();
var statearr_39714_39779 = state_39708__$1;
(statearr_39714_39779[(2)] = null);

(statearr_39714_39779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (24))){
var inst_39668 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39715_39780 = state_39708__$1;
(statearr_39715_39780[(2)] = inst_39668);

(statearr_39715_39780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (39))){
var state_39708__$1 = state_39708;
var statearr_39716_39781 = state_39708__$1;
(statearr_39716_39781[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (4))){
var inst_39616 = (state_39708[(8)]);
var inst_39622 = inst_39616.cljs$core$async$impl$protocols$ReadPort$;
var inst_39623 = (false) || (inst_39622);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39623)){
var statearr_39718_39782 = state_39708__$1;
(statearr_39718_39782[(1)] = (7));

} else {
var statearr_39719_39783 = state_39708__$1;
(statearr_39719_39783[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (15))){
var inst_39645 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39720_39784 = state_39708__$1;
(statearr_39720_39784[(2)] = inst_39645);

(statearr_39720_39784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (21))){
var inst_39672 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39672)){
var statearr_39721_39785 = state_39708__$1;
(statearr_39721_39785[(1)] = (28));

} else {
var statearr_39722_39786 = state_39708__$1;
(statearr_39722_39786[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (31))){
var inst_39675 = (state_39708[(2)]);
var inst_39650 = inst_39675;
var state_39708__$1 = (function (){var statearr_39723 = state_39708;
(statearr_39723[(7)] = inst_39650);

return statearr_39723;
})();
var statearr_39724_39787 = state_39708__$1;
(statearr_39724_39787[(2)] = null);

(statearr_39724_39787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (32))){
var inst_39684 = advenjure.gettext.core._.call(null,"blocked.");
var inst_39685 = advenjure.utils.say.call(null,inst_39684);
var state_39708__$1 = state_39708;
var statearr_39725_39788 = state_39708__$1;
(statearr_39725_39788[(2)] = inst_39685);

(statearr_39725_39788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (40))){
var inst_39704 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39726_39789 = state_39708__$1;
(statearr_39726_39789[(2)] = inst_39704);

(statearr_39726_39789[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (33))){
var inst_39687 = (state_39708[(9)]);
var inst_39687__$1 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_39708__$1 = (function (){var statearr_39727 = state_39708;
(statearr_39727[(9)] = inst_39687__$1);

return statearr_39727;
})();
if(cljs.core.truth_(inst_39687__$1)){
var statearr_39728_39790 = state_39708__$1;
(statearr_39728_39790[(1)] = (35));

} else {
var statearr_39729_39791 = state_39708__$1;
(statearr_39729_39791[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (13))){
var inst_39616 = (state_39708[(8)]);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(16),inst_39616);
} else {
if((state_val_39709 === (22))){
var state_39708__$1 = state_39708;
var statearr_39730_39792 = state_39708__$1;
(statearr_39730_39792[(2)] = true);

(statearr_39730_39792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (36))){
var inst_39690 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_39708__$1 = state_39708;
var statearr_39731_39793 = state_39708__$1;
(statearr_39731_39793[(2)] = inst_39690);

(statearr_39731_39793[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (41))){
var inst_39699 = advenjure.utils.say.call(null,"???");
var state_39708__$1 = state_39708;
var statearr_39732_39794 = state_39708__$1;
(statearr_39732_39794[(2)] = inst_39699);

(statearr_39732_39794[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (43))){
var inst_39702 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39733_39795 = state_39708__$1;
(statearr_39733_39795[(2)] = inst_39702);

(statearr_39733_39795[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (29))){
var inst_39650 = (state_39708[(7)]);
var state_39708__$1 = state_39708;
var statearr_39734_39796 = state_39708__$1;
(statearr_39734_39796[(2)] = inst_39650);

(statearr_39734_39796[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (6))){
var inst_39638 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39638)){
var statearr_39735_39797 = state_39708__$1;
(statearr_39735_39797[(1)] = (13));

} else {
var statearr_39736_39798 = state_39708__$1;
(statearr_39736_39798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (28))){
var inst_39650 = (state_39708[(7)]);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(31),inst_39650);
} else {
if((state_val_39709 === (25))){
var inst_39650 = (state_39708[(7)]);
var inst_39663 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39650);
var state_39708__$1 = state_39708;
var statearr_39737_39799 = state_39708__$1;
(statearr_39737_39799[(2)] = inst_39663);

(statearr_39737_39799[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (34))){
var inst_39647 = (state_39708[(10)]);
var inst_39706 = (state_39708[(2)]);
var state_39708__$1 = (function (){var statearr_39738 = state_39708;
(statearr_39738[(11)] = inst_39706);

return statearr_39738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39708__$1,inst_39647);
} else {
if((state_val_39709 === (17))){
var inst_39650 = (state_39708[(7)]);
var inst_39653 = (inst_39650 == null);
var inst_39654 = cljs.core.not.call(null,inst_39653);
var state_39708__$1 = state_39708;
if(inst_39654){
var statearr_39739_39800 = state_39708__$1;
(statearr_39739_39800[(1)] = (19));

} else {
var statearr_39740_39801 = state_39708__$1;
(statearr_39740_39801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (3))){
var inst_39647 = (state_39708[(2)]);
var inst_39648 = [cljs.core.str(dir_name),cljs.core.str(": ")].join('');
var inst_39649 = advenjure.utils.say_inline.call(null,inst_39648);
var inst_39650 = inst_39649;
var state_39708__$1 = (function (){var statearr_39741 = state_39708;
(statearr_39741[(7)] = inst_39650);

(statearr_39741[(10)] = inst_39647);

return statearr_39741;
})();
var statearr_39742_39802 = state_39708__$1;
(statearr_39742_39802[(2)] = null);

(statearr_39742_39802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (12))){
var inst_39632 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39743_39803 = state_39708__$1;
(statearr_39743_39803[(2)] = inst_39632);

(statearr_39743_39803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (2))){
var inst_39616 = (state_39708[(8)]);
var inst_39619 = (inst_39616 == null);
var inst_39620 = cljs.core.not.call(null,inst_39619);
var state_39708__$1 = state_39708;
if(inst_39620){
var statearr_39744_39804 = state_39708__$1;
(statearr_39744_39804[(1)] = (4));

} else {
var statearr_39745_39805 = state_39708__$1;
(statearr_39745_39805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (23))){
var inst_39650 = (state_39708[(7)]);
var inst_39660 = inst_39650.cljs$lang$protocol_mask$partition$;
var inst_39661 = (!inst_39660);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39661)){
var statearr_39746_39806 = state_39708__$1;
(statearr_39746_39806[(1)] = (25));

} else {
var statearr_39747_39807 = state_39708__$1;
(statearr_39747_39807[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (35))){
var inst_39687 = (state_39708[(9)]);
var state_39708__$1 = state_39708;
var statearr_39748_39808 = state_39708__$1;
(statearr_39748_39808[(2)] = inst_39687);

(statearr_39748_39808[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (19))){
var inst_39650 = (state_39708[(7)]);
var inst_39656 = inst_39650.cljs$core$async$impl$protocols$ReadPort$;
var inst_39657 = (false) || (inst_39656);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39657)){
var statearr_39749_39809 = state_39708__$1;
(statearr_39749_39809[(1)] = (22));

} else {
var statearr_39750_39810 = state_39708__$1;
(statearr_39750_39810[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (11))){
var state_39708__$1 = state_39708;
var statearr_39751_39811 = state_39708__$1;
(statearr_39751_39811[(2)] = false);

(statearr_39751_39811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (9))){
var inst_39634 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39752_39812 = state_39708__$1;
(statearr_39752_39812[(2)] = inst_39634);

(statearr_39752_39812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (5))){
var inst_39616 = (state_39708[(8)]);
var inst_39636 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39616);
var state_39708__$1 = state_39708;
var statearr_39753_39813 = state_39708__$1;
(statearr_39753_39813[(2)] = inst_39636);

(statearr_39753_39813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (14))){
var inst_39616 = (state_39708[(8)]);
var state_39708__$1 = state_39708;
var statearr_39754_39814 = state_39708__$1;
(statearr_39754_39814[(2)] = inst_39616);

(statearr_39754_39814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (26))){
var state_39708__$1 = state_39708;
var statearr_39755_39815 = state_39708__$1;
(statearr_39755_39815[(2)] = false);

(statearr_39755_39815[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (16))){
var inst_39641 = (state_39708[(2)]);
var inst_39616 = inst_39641;
var state_39708__$1 = (function (){var statearr_39756 = state_39708;
(statearr_39756[(8)] = inst_39616);

return statearr_39756;
})();
var statearr_39757_39816 = state_39708__$1;
(statearr_39757_39816[(2)] = null);

(statearr_39757_39816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (38))){
var inst_39694 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dir_room);
var inst_39695 = [cljs.core.str(inst_39694),cljs.core.str(".")].join('');
var inst_39696 = advenjure.utils.say.call(null,inst_39695);
var state_39708__$1 = state_39708;
var statearr_39758_39817 = state_39708__$1;
(statearr_39758_39817[(2)] = inst_39696);

(statearr_39758_39817[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (30))){
var inst_39679 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39759_39818 = state_39708__$1;
(statearr_39759_39818[(2)] = inst_39679);

(statearr_39759_39818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (10))){
var inst_39616 = (state_39708[(8)]);
var inst_39629 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39616);
var state_39708__$1 = state_39708;
var statearr_39760_39819 = state_39708__$1;
(statearr_39760_39819[(2)] = inst_39629);

(statearr_39760_39819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (18))){
var inst_39681 = (state_39708[(2)]);
var inst_39682 = typeof dir_value === 'string';
var state_39708__$1 = (function (){var statearr_39761 = state_39708;
(statearr_39761[(12)] = inst_39681);

return statearr_39761;
})();
if(cljs.core.truth_(inst_39682)){
var statearr_39762_39820 = state_39708__$1;
(statearr_39762_39820[(1)] = (32));

} else {
var statearr_39763_39821 = state_39708__$1;
(statearr_39763_39821[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (42))){
var state_39708__$1 = state_39708;
var statearr_39764_39822 = state_39708__$1;
(statearr_39764_39822[(2)] = null);

(statearr_39764_39822[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (37))){
var inst_39692 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39692)){
var statearr_39765_39823 = state_39708__$1;
(statearr_39765_39823[(1)] = (38));

} else {
var statearr_39766_39824 = state_39708__$1;
(statearr_39766_39824[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (8))){
var inst_39616 = (state_39708[(8)]);
var inst_39626 = inst_39616.cljs$lang$protocol_mask$partition$;
var inst_39627 = (!inst_39626);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39627)){
var statearr_39767_39825 = state_39708__$1;
(statearr_39767_39825[(1)] = (10));

} else {
var statearr_39768_39826 = state_39708__$1;
(statearr_39768_39826[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__24228__auto__,dir_value,dir_name,dir_room))
;
return ((function (switch__24031__auto__,c__24228__auto__,dir_value,dir_name,dir_room){
return (function() {
var advenjure$verbs$look_$_state_machine__24032__auto__ = null;
var advenjure$verbs$look_$_state_machine__24032__auto____0 = (function (){
var statearr_39772 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39772[(0)] = advenjure$verbs$look_$_state_machine__24032__auto__);

(statearr_39772[(1)] = (1));

return statearr_39772;
});
var advenjure$verbs$look_$_state_machine__24032__auto____1 = (function (state_39708){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_39708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e39773){if((e39773 instanceof Object)){
var ex__24035__auto__ = e39773;
var statearr_39774_39827 = state_39708;
(statearr_39774_39827[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39828 = state_39708;
state_39708 = G__39828;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$look_$_state_machine__24032__auto__ = function(state_39708){
switch(arguments.length){
case 0:
return advenjure$verbs$look_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$look_$_state_machine__24032__auto____1.call(this,state_39708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$look_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$look_$_state_machine__24032__auto____0;
advenjure$verbs$look_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$look_$_state_machine__24032__auto____1;
return advenjure$verbs$look_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,dir_value,dir_name,dir_room))
})();
var state__24230__auto__ = (function (){var statearr_39775 = f__24229__auto__.call(null);
(statearr_39775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_39775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,dir_value,dir_name,dir_room))
);

return c__24228__auto__;
} else {
return gs;
}
}),game_state,advenjure.utils.directions);
});
/**
 * Describe the inventory contents.
 */
advenjure.verbs.inventory = (function advenjure$verbs$inventory(game_state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state))){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I wasn't carrying anything."));
} else {
return advenjure.utils.say.call(null,[cljs.core.str(advenjure.gettext.core._.call(null,"I was carrying:")),cljs.core.str(advenjure.items.print_list.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state)))].join(''));
}
});
/**
 * Save the current game state to a file.
 */
advenjure.verbs.save = (function advenjure$verbs$save(game_state){
advenjure.ui.output.write_file.call(null,"saved.game",cljs.core.dissoc.call(null,game_state,new cljs.core.Keyword(null,"configuration","configuration",1431842520)));

return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Done."));
});
/**
 * Restore a previous game state from file.
 */
advenjure.verbs.restore = (function advenjure$verbs$restore(game_state){
try{var loaded_state = cljs.core.assoc.call(null,advenjure.ui.input.read_file.call(null,"saved.game"),new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"configuration","configuration",1431842520).cljs$core$IFn$_invoke$arity$1(game_state));
advenjure.utils.say.call(null,advenjure.rooms.describe.call(null,advenjure.utils.current_room.call(null,loaded_state)));

return loaded_state;
}catch (e39830){if((e39830 instanceof Object)){
var e = e39830;
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"No saved game found."));
} else {
throw e39830;

}
}});
/**
 * Close the game.
 */
advenjure.verbs.exit = (function advenjure$verbs$exit(game_state){
advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Bye!"));

return advenjure.ui.input.exit.call(null);
});
advenjure.verbs.look_at = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"look at"),new cljs.core.Keyword(null,"look-at","look-at",189063937),(function (game_state,item){
return advenjure.utils.say.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item));
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.look_inside = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"look inside"),new cljs.core.Keyword(null,"look-in","look-in",97132698),(function (game_state,item){
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"look-in","look-in",97132698),new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var custom_say = temp__4655__auto__;
return advenjure.utils.say.call(null,custom_say);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.items.describe_container.call(null,item));
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I couldn't look inside a %s.",advenjure.items.iname.call(null,item)));
}
}
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.take_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"take"),new cljs.core.Keyword(null,"take","take",-768884900),(function (game_state,item){

if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),item)){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I already had that."));
} else {
var new_state = advenjure.utils.remove_item.call(null,game_state,item);
var new_inventory = cljs.core.conj.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(new_state),item);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Taken.")));

return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"inventory","inventory",860201871),new_inventory);
}
}));
/**
 * Go through every item in the room that defines a value for :take, and attempt
 *   to take it.
 */
advenjure.verbs.take_all = (function advenjure$verbs$take_all(game_state){
var items = advenjure.items.all_items.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,game_state)));
var takeable = cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"take","take",-768884900)),items);
var item_names = cljs.core.map.call(null,((function (items,takeable){
return (function (p1__39831_SHARP_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(p1__39831_SHARP_));
});})(items,takeable))
,takeable);
if(cljs.core.empty_QMARK_.call(null,item_names)){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I saw nothing worth taking."));
} else {
return cljs.core.reduce.call(null,((function (items,takeable,item_names){
return (function (gs,iname){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,items,takeable,item_names){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,items,takeable,item_names){
return (function (state_40198){
var state_val_40199 = (state_40198[(1)]);
if((state_val_40199 === (62))){
var inst_40165 = (state_40198[(7)]);
var state_40198__$1 = state_40198;
var statearr_40200_40292 = state_40198__$1;
(statearr_40200_40292[(2)] = inst_40165);

(statearr_40200_40292[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (7))){
var state_40198__$1 = state_40198;
var statearr_40201_40293 = state_40198__$1;
(statearr_40201_40293[(2)] = true);

(statearr_40201_40293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (59))){
var state_40198__$1 = state_40198;
var statearr_40202_40294 = state_40198__$1;
(statearr_40202_40294[(2)] = false);

(statearr_40202_40294[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (20))){
var inst_40096 = (state_40198[(8)]);
var inst_40116 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40096);
var state_40198__$1 = state_40198;
var statearr_40203_40295 = state_40198__$1;
(statearr_40203_40295[(2)] = inst_40116);

(statearr_40203_40295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (58))){
var inst_40165 = (state_40198[(7)]);
var inst_40178 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40165);
var state_40198__$1 = state_40198;
var statearr_40204_40296 = state_40198__$1;
(statearr_40204_40296[(2)] = inst_40178);

(statearr_40204_40296[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (60))){
var inst_40181 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40205_40297 = state_40198__$1;
(statearr_40205_40297[(2)] = inst_40181);

(statearr_40205_40297[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (27))){
var inst_40112 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40206_40298 = state_40198__$1;
(statearr_40206_40298[(2)] = inst_40112);

(statearr_40206_40298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (1))){
var inst_40062 = gs;
var state_40198__$1 = (function (){var statearr_40207 = state_40198;
(statearr_40207[(9)] = inst_40062);

return statearr_40207;
})();
var statearr_40208_40299 = state_40198__$1;
(statearr_40208_40299[(2)] = null);

(statearr_40208_40299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (24))){
var inst_40114 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40209_40300 = state_40198__$1;
(statearr_40209_40300[(2)] = inst_40114);

(statearr_40209_40300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (55))){
var state_40198__$1 = state_40198;
var statearr_40210_40301 = state_40198__$1;
(statearr_40210_40301[(2)] = true);

(statearr_40210_40301[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (39))){
var inst_40147 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40211_40302 = state_40198__$1;
(statearr_40211_40302[(2)] = inst_40147);

(statearr_40211_40302[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (46))){
var inst_40154 = (state_40198[(2)]);
var inst_40129 = inst_40154;
var state_40198__$1 = (function (){var statearr_40212 = state_40198;
(statearr_40212[(10)] = inst_40129);

return statearr_40212;
})();
var statearr_40213_40303 = state_40198__$1;
(statearr_40213_40303[(2)] = null);

(statearr_40213_40303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (4))){
var inst_40062 = (state_40198[(9)]);
var inst_40068 = inst_40062.cljs$core$async$impl$protocols$ReadPort$;
var inst_40069 = (false) || (inst_40068);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40069)){
var statearr_40214_40304 = state_40198__$1;
(statearr_40214_40304[(1)] = (7));

} else {
var statearr_40215_40305 = state_40198__$1;
(statearr_40215_40305[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (54))){
var inst_40187 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40187)){
var statearr_40216_40306 = state_40198__$1;
(statearr_40216_40306[(1)] = (61));

} else {
var statearr_40217_40307 = state_40198__$1;
(statearr_40217_40307[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (15))){
var inst_40091 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40218_40308 = state_40198__$1;
(statearr_40218_40308[(2)] = inst_40091);

(statearr_40218_40308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (48))){
var inst_40093 = (state_40198[(11)]);
var state_40198__$1 = state_40198;
var statearr_40219_40309 = state_40198__$1;
(statearr_40219_40309[(2)] = inst_40093);

(statearr_40219_40309[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (50))){
var inst_40165 = (state_40198[(7)]);
var inst_40168 = (inst_40165 == null);
var inst_40169 = cljs.core.not.call(null,inst_40168);
var state_40198__$1 = state_40198;
if(inst_40169){
var statearr_40220_40310 = state_40198__$1;
(statearr_40220_40310[(1)] = (52));

} else {
var statearr_40221_40311 = state_40198__$1;
(statearr_40221_40311[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (21))){
var inst_40118 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40118)){
var statearr_40222_40312 = state_40198__$1;
(statearr_40222_40312[(1)] = (28));

} else {
var statearr_40223_40313 = state_40198__$1;
(statearr_40223_40313[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (31))){
var inst_40121 = (state_40198[(2)]);
var inst_40096 = inst_40121;
var state_40198__$1 = (function (){var statearr_40224 = state_40198;
(statearr_40224[(8)] = inst_40096);

return statearr_40224;
})();
var statearr_40225_40314 = state_40198__$1;
(statearr_40225_40314[(2)] = null);

(statearr_40225_40314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (32))){
var inst_40129 = (state_40198[(10)]);
var inst_40132 = (inst_40129 == null);
var inst_40133 = cljs.core.not.call(null,inst_40132);
var state_40198__$1 = state_40198;
if(inst_40133){
var statearr_40226_40315 = state_40198__$1;
(statearr_40226_40315[(1)] = (34));

} else {
var statearr_40227_40316 = state_40198__$1;
(statearr_40227_40316[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (40))){
var inst_40129 = (state_40198[(10)]);
var inst_40142 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40129);
var state_40198__$1 = state_40198;
var statearr_40228_40317 = state_40198__$1;
(statearr_40228_40317[(2)] = inst_40142);

(statearr_40228_40317[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (56))){
var inst_40165 = (state_40198[(7)]);
var inst_40175 = inst_40165.cljs$lang$protocol_mask$partition$;
var inst_40176 = (!inst_40175);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40176)){
var statearr_40229_40318 = state_40198__$1;
(statearr_40229_40318[(1)] = (58));

} else {
var statearr_40230_40319 = state_40198__$1;
(statearr_40230_40319[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (33))){
var inst_40160 = (state_40198[(12)]);
var inst_40160__$1 = (state_40198[(2)]);
var state_40198__$1 = (function (){var statearr_40231 = state_40198;
(statearr_40231[(12)] = inst_40160__$1);

return statearr_40231;
})();
if(cljs.core.truth_(inst_40160__$1)){
var statearr_40232_40320 = state_40198__$1;
(statearr_40232_40320[(1)] = (47));

} else {
var statearr_40233_40321 = state_40198__$1;
(statearr_40233_40321[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (13))){
var inst_40062 = (state_40198[(9)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40198__$1,(16),inst_40062);
} else {
if((state_val_40199 === (22))){
var state_40198__$1 = state_40198;
var statearr_40234_40322 = state_40198__$1;
(statearr_40234_40322[(2)] = true);

(statearr_40234_40322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (36))){
var inst_40151 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40151)){
var statearr_40235_40323 = state_40198__$1;
(statearr_40235_40323[(1)] = (43));

} else {
var statearr_40236_40324 = state_40198__$1;
(statearr_40236_40324[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (41))){
var state_40198__$1 = state_40198;
var statearr_40237_40325 = state_40198__$1;
(statearr_40237_40325[(2)] = false);

(statearr_40237_40325[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (43))){
var inst_40129 = (state_40198[(10)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40198__$1,(46),inst_40129);
} else {
if((state_val_40199 === (61))){
var inst_40165 = (state_40198[(7)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40198__$1,(64),inst_40165);
} else {
if((state_val_40199 === (29))){
var inst_40096 = (state_40198[(8)]);
var state_40198__$1 = state_40198;
var statearr_40238_40326 = state_40198__$1;
(statearr_40238_40326[(2)] = inst_40096);

(statearr_40238_40326[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (44))){
var inst_40129 = (state_40198[(10)]);
var state_40198__$1 = state_40198;
var statearr_40239_40327 = state_40198__$1;
(statearr_40239_40327[(2)] = inst_40129);

(statearr_40239_40327[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (6))){
var inst_40084 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40084)){
var statearr_40240_40328 = state_40198__$1;
(statearr_40240_40328[(1)] = (13));

} else {
var statearr_40241_40329 = state_40198__$1;
(statearr_40241_40329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (28))){
var inst_40096 = (state_40198[(8)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40198__$1,(31),inst_40096);
} else {
if((state_val_40199 === (64))){
var inst_40190 = (state_40198[(2)]);
var inst_40165 = inst_40190;
var state_40198__$1 = (function (){var statearr_40242 = state_40198;
(statearr_40242[(7)] = inst_40165);

return statearr_40242;
})();
var statearr_40243_40330 = state_40198__$1;
(statearr_40243_40330[(2)] = null);

(statearr_40243_40330[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (51))){
var inst_40196 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40198__$1,inst_40196);
} else {
if((state_val_40199 === (25))){
var inst_40096 = (state_40198[(8)]);
var inst_40109 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40096);
var state_40198__$1 = state_40198;
var statearr_40244_40331 = state_40198__$1;
(statearr_40244_40331[(2)] = inst_40109);

(statearr_40244_40331[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (34))){
var inst_40129 = (state_40198[(10)]);
var inst_40135 = inst_40129.cljs$core$async$impl$protocols$ReadPort$;
var inst_40136 = (false) || (inst_40135);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40136)){
var statearr_40245_40332 = state_40198__$1;
(statearr_40245_40332[(1)] = (37));

} else {
var statearr_40246_40333 = state_40198__$1;
(statearr_40246_40333[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (17))){
var inst_40096 = (state_40198[(8)]);
var inst_40099 = (inst_40096 == null);
var inst_40100 = cljs.core.not.call(null,inst_40099);
var state_40198__$1 = state_40198;
if(inst_40100){
var statearr_40247_40334 = state_40198__$1;
(statearr_40247_40334[(1)] = (19));

} else {
var statearr_40248_40335 = state_40198__$1;
(statearr_40248_40335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (3))){
var inst_40093 = (state_40198[(2)]);
var inst_40094 = [cljs.core.str(iname),cljs.core.str(": ")].join('');
var inst_40095 = advenjure.utils.say_inline.call(null,inst_40094);
var inst_40096 = inst_40095;
var state_40198__$1 = (function (){var statearr_40249 = state_40198;
(statearr_40249[(8)] = inst_40096);

(statearr_40249[(11)] = inst_40093);

return statearr_40249;
})();
var statearr_40250_40336 = state_40198__$1;
(statearr_40250_40336[(2)] = null);

(statearr_40250_40336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (12))){
var inst_40078 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40251_40337 = state_40198__$1;
(statearr_40251_40337[(2)] = inst_40078);

(statearr_40251_40337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (2))){
var inst_40062 = (state_40198[(9)]);
var inst_40065 = (inst_40062 == null);
var inst_40066 = cljs.core.not.call(null,inst_40065);
var state_40198__$1 = state_40198;
if(inst_40066){
var statearr_40252_40338 = state_40198__$1;
(statearr_40252_40338[(1)] = (4));

} else {
var statearr_40253_40339 = state_40198__$1;
(statearr_40253_40339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (23))){
var inst_40096 = (state_40198[(8)]);
var inst_40106 = inst_40096.cljs$lang$protocol_mask$partition$;
var inst_40107 = (!inst_40106);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40107)){
var statearr_40254_40340 = state_40198__$1;
(statearr_40254_40340[(1)] = (25));

} else {
var statearr_40255_40341 = state_40198__$1;
(statearr_40255_40341[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (47))){
var inst_40160 = (state_40198[(12)]);
var state_40198__$1 = state_40198;
var statearr_40256_40342 = state_40198__$1;
(statearr_40256_40342[(2)] = inst_40160);

(statearr_40256_40342[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (35))){
var inst_40129 = (state_40198[(10)]);
var inst_40149 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40129);
var state_40198__$1 = state_40198;
var statearr_40257_40343 = state_40198__$1;
(statearr_40257_40343[(2)] = inst_40149);

(statearr_40257_40343[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (19))){
var inst_40096 = (state_40198[(8)]);
var inst_40102 = inst_40096.cljs$core$async$impl$protocols$ReadPort$;
var inst_40103 = (false) || (inst_40102);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40103)){
var statearr_40258_40344 = state_40198__$1;
(statearr_40258_40344[(1)] = (22));

} else {
var statearr_40259_40345 = state_40198__$1;
(statearr_40259_40345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (57))){
var inst_40183 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40260_40346 = state_40198__$1;
(statearr_40260_40346[(2)] = inst_40183);

(statearr_40260_40346[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (11))){
var state_40198__$1 = state_40198;
var statearr_40261_40347 = state_40198__$1;
(statearr_40261_40347[(2)] = false);

(statearr_40261_40347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (9))){
var inst_40080 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40262_40348 = state_40198__$1;
(statearr_40262_40348[(2)] = inst_40080);

(statearr_40262_40348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (5))){
var inst_40062 = (state_40198[(9)]);
var inst_40082 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40062);
var state_40198__$1 = state_40198;
var statearr_40263_40349 = state_40198__$1;
(statearr_40263_40349[(2)] = inst_40082);

(statearr_40263_40349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (14))){
var inst_40062 = (state_40198[(9)]);
var state_40198__$1 = state_40198;
var statearr_40264_40350 = state_40198__$1;
(statearr_40264_40350[(2)] = inst_40062);

(statearr_40264_40350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (45))){
var inst_40158 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40265_40351 = state_40198__$1;
(statearr_40265_40351[(2)] = inst_40158);

(statearr_40265_40351[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (53))){
var inst_40165 = (state_40198[(7)]);
var inst_40185 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40165);
var state_40198__$1 = state_40198;
var statearr_40266_40352 = state_40198__$1;
(statearr_40266_40352[(2)] = inst_40185);

(statearr_40266_40352[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (26))){
var state_40198__$1 = state_40198;
var statearr_40267_40353 = state_40198__$1;
(statearr_40267_40353[(2)] = false);

(statearr_40267_40353[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (16))){
var inst_40087 = (state_40198[(2)]);
var inst_40062 = inst_40087;
var state_40198__$1 = (function (){var statearr_40268 = state_40198;
(statearr_40268[(9)] = inst_40062);

return statearr_40268;
})();
var statearr_40269_40354 = state_40198__$1;
(statearr_40269_40354[(2)] = null);

(statearr_40269_40354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (38))){
var inst_40129 = (state_40198[(10)]);
var inst_40139 = inst_40129.cljs$lang$protocol_mask$partition$;
var inst_40140 = (!inst_40139);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40140)){
var statearr_40270_40355 = state_40198__$1;
(statearr_40270_40355[(1)] = (40));

} else {
var statearr_40271_40356 = state_40198__$1;
(statearr_40271_40356[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (30))){
var inst_40125 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40272_40357 = state_40198__$1;
(statearr_40272_40357[(2)] = inst_40125);

(statearr_40272_40357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (10))){
var inst_40062 = (state_40198[(9)]);
var inst_40075 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_40062);
var state_40198__$1 = state_40198;
var statearr_40273_40358 = state_40198__$1;
(statearr_40273_40358[(2)] = inst_40075);

(statearr_40273_40358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (18))){
var inst_40093 = (state_40198[(11)]);
var inst_40127 = (state_40198[(2)]);
var inst_40128 = advenjure.verbs.take_.call(null,inst_40093,iname);
var inst_40129 = inst_40128;
var state_40198__$1 = (function (){var statearr_40274 = state_40198;
(statearr_40274[(13)] = inst_40127);

(statearr_40274[(10)] = inst_40129);

return statearr_40274;
})();
var statearr_40275_40359 = state_40198__$1;
(statearr_40275_40359[(2)] = null);

(statearr_40275_40359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (52))){
var inst_40165 = (state_40198[(7)]);
var inst_40171 = inst_40165.cljs$core$async$impl$protocols$ReadPort$;
var inst_40172 = (false) || (inst_40171);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40172)){
var statearr_40276_40360 = state_40198__$1;
(statearr_40276_40360[(1)] = (55));

} else {
var statearr_40277_40361 = state_40198__$1;
(statearr_40277_40361[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (42))){
var inst_40145 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40278_40362 = state_40198__$1;
(statearr_40278_40362[(2)] = inst_40145);

(statearr_40278_40362[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (37))){
var state_40198__$1 = state_40198;
var statearr_40279_40363 = state_40198__$1;
(statearr_40279_40363[(2)] = true);

(statearr_40279_40363[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (63))){
var inst_40194 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40280_40364 = state_40198__$1;
(statearr_40280_40364[(2)] = inst_40194);

(statearr_40280_40364[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (8))){
var inst_40062 = (state_40198[(9)]);
var inst_40072 = inst_40062.cljs$lang$protocol_mask$partition$;
var inst_40073 = (!inst_40072);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40073)){
var statearr_40281_40365 = state_40198__$1;
(statearr_40281_40365[(1)] = (10));

} else {
var statearr_40282_40366 = state_40198__$1;
(statearr_40282_40366[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (49))){
var inst_40164 = (state_40198[(2)]);
var inst_40165 = inst_40164;
var state_40198__$1 = (function (){var statearr_40283 = state_40198;
(statearr_40283[(7)] = inst_40165);

return statearr_40283;
})();
var statearr_40284_40367 = state_40198__$1;
(statearr_40284_40367[(2)] = null);

(statearr_40284_40367[(1)] = (50));


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
});})(c__24228__auto__,items,takeable,item_names))
;
return ((function (switch__24031__auto__,c__24228__auto__,items,takeable,item_names){
return (function() {
var advenjure$verbs$take_all_$_state_machine__24032__auto__ = null;
var advenjure$verbs$take_all_$_state_machine__24032__auto____0 = (function (){
var statearr_40288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40288[(0)] = advenjure$verbs$take_all_$_state_machine__24032__auto__);

(statearr_40288[(1)] = (1));

return statearr_40288;
});
var advenjure$verbs$take_all_$_state_machine__24032__auto____1 = (function (state_40198){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_40198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e40289){if((e40289 instanceof Object)){
var ex__24035__auto__ = e40289;
var statearr_40290_40368 = state_40198;
(statearr_40290_40368[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40369 = state_40198;
state_40198 = G__40369;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$verbs$take_all_$_state_machine__24032__auto__ = function(state_40198){
switch(arguments.length){
case 0:
return advenjure$verbs$take_all_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$verbs$take_all_$_state_machine__24032__auto____1.call(this,state_40198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$take_all_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$take_all_$_state_machine__24032__auto____0;
advenjure$verbs$take_all_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$take_all_$_state_machine__24032__auto____1;
return advenjure$verbs$take_all_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,items,takeable,item_names))
})();
var state__24230__auto__ = (function (){var statearr_40291 = f__24229__auto__.call(null);
(statearr_40291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_40291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,items,takeable,item_names))
);

return c__24228__auto__;
});})(items,takeable,item_names))
,game_state,item_names);
}
});
advenjure.verbs.open = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"open"),new cljs.core.Keyword(null,"open","open",-1763596448),(function (game_state,item){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was already open."));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was locked."));
} else {
var open_item = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"closed","closed",-919675359),false);
var custom_say = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(custom_say)){
advenjure.utils.say.call(null,custom_say);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(open_item))){
advenjure.utils.say.call(null,advenjure.items.describe_container.call(null,open_item));
} else {
advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Opened."));

}
}

return advenjure.utils.replace_item.call(null,game_state,item,open_item);

}
}
}));
advenjure.verbs.close = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"close"),new cljs.core.Keyword(null,"close","close",1835149582),(function (game_state,item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was already closed."));
} else {
var closed_item = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"closed","closed",-919675359),true);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Closed.")));

return advenjure.utils.replace_item.call(null,game_state,item,closed_item);
}
}));
advenjure.verbs.unlock = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"unlock"),new cljs.core.Keyword(null,"unlock","unlock",560395192),(function (game_state,locked,key_item){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(locked))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,locked,"It wasn't locked."));
} else {
if(cljs.core.not_EQ_.call(null,locked,new cljs.core.Keyword(null,"unlocks","unlocks",-448720775).cljs$core$IFn$_invoke$arity$1(key_item))){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"That didn't work."));
} else {
var unlocked = cljs.core.assoc.call(null,locked,new cljs.core.Keyword(null,"locked","locked",-1658763820),false);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,locked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlock","unlock",560395192),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Unlocked.")));

return advenjure.utils.replace_item.call(null,game_state,locked,unlocked);

}
}
}));
advenjure.verbs.open_with = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"open"),new cljs.core.Keyword(null,"open-with","open-with",1966309885),(function (game_state,closed,key_item){

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(closed))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,closed,"It was already open."));
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = (function (){var and__20443__auto__ = new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(closed);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,closed,new cljs.core.Keyword(null,"unlocks","unlocks",-448720775).cljs$core$IFn$_invoke$arity$1(key_item));
} else {
return and__20443__auto__;
}
})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,closed,new cljs.core.Keyword(null,"opens","opens",2138874639).cljs$core$IFn$_invoke$arity$1(key_item));
}
})())){
var opened = cljs.core.merge.call(null,closed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locked","locked",-1658763820),false,new cljs.core.Keyword(null,"closed","closed",-919675359),false], null));
advenjure.utils.say.call(null,cljs.core.get_in.call(null,closed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-with","open-with",1966309885),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Opened.")));

return advenjure.utils.replace_item.call(null,game_state,closed,opened);
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"That didn't work."));

}
}
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.talk = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"talk to"),new cljs.core.Keyword(null,"talk","talk",309472888),(function (game_state,item){
var dialog = advenjure.eval.eval.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(item));
return dialog.call(null,game_state);
}));
advenjure.verbs.make_move_item_handler = (function advenjure$verbs$make_move_item_handler(verb_name,verb_kw){
return advenjure.verbs.make_item_handler.call(null,verb_name,verb_kw,(function (game_state,item){
return advenjure.change_rooms.change_rooms.call(null,game_state,advenjure.hooks.eval_precondition.call(null,verb_kw.call(null,item)));
}));
});
advenjure.verbs.climb = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb"),new cljs.core.Keyword(null,"climb","climb",-1345384598));
advenjure.verbs.climb_up = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb up"),new cljs.core.Keyword(null,"climb-up","climb-up",-91800383));
advenjure.verbs.climb_down = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb down"),new cljs.core.Keyword(null,"climb-down","climb-down",1994845284));
advenjure.verbs.enter = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"enter"),new cljs.core.Keyword(null,"enter","enter",1792452624));
advenjure.verbs.read_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"read"),new cljs.core.Keyword(null,"read","read",1140058661));
advenjure.verbs.use_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"use"),new cljs.core.Keyword(null,"use","use",-1846382424));
advenjure.verbs.use_with = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"use"),new cljs.core.Keyword(null,"use-with","use-with",-716477584));
advenjure.verbs.make_say_verb = (function advenjure$verbs$make_say_verb(speech){
return (function (gs){
return advenjure.utils.say.call(null,speech);
});
});
advenjure.verbs.stand = advenjure.verbs.make_say_verb.call(null,advenjure.gettext.core._.call(null,"I was standing up already"));
advenjure.verbs.help = advenjure.verbs.make_say_verb.call(null,clojure.string.join.call(null,"\n    ",new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"You're playing a text adventure game. You control the character by entering commands. Some available commands are:"),advenjure.gettext.core._.call(null,"GO <direction>: move in the given compass direction. For example: \"GO NORTH\". \"NORTH\" and \"N\" will work too."),advenjure.gettext.core._.call(null,"TAKE <item>: add an item to your inventory."),advenjure.gettext.core._.call(null,"INVENTORY: list your inventory contents. \"I\" will work too."),advenjure.gettext.core._.call(null,"LOOK: look around."),advenjure.gettext.core._.call(null,"LOOK AT <item>: look at some specific item."),advenjure.gettext.core._.call(null,"LOOK IN <item>: look inside some container item."),advenjure.gettext.core._.call(null,"TALK TO <character>: start a conversation with another character."),advenjure.gettext.core._.call(null,"UNLOCK <item> WITH <item>: unlock some item using another one. For example: UNLOCK door WITH key."),advenjure.gettext.core._.call(null,"OPEN, CLOSE, READ, TURN ON, PUT IN, EAT, DRINK, KILL, etc. may work on some objects, just try."),advenjure.gettext.core._.call(null,"SAVE: save your current progress."),advenjure.gettext.core._.call(null,"RESTORE: restore a previously saved game."),advenjure.gettext.core._.call(null,"EXIT: close the game."),advenjure.gettext.core._.call(null,"You can use the TAB key to get completion suggestions for a command and the UP/DOWN arrows to search the command history.")], null)));
advenjure.verbs.move = advenjure.verbs.make_item_handler.call(null,"move",new cljs.core.Keyword(null,"move","move",-2110884309));
advenjure.verbs.pull = advenjure.verbs.make_item_handler.call(null,"pull",new cljs.core.Keyword(null,"pull","pull",-860544805));
advenjure.verbs.push = advenjure.verbs.make_item_handler.call(null,"push",new cljs.core.Keyword(null,"push","push",799791267));

//# sourceMappingURL=verbs.js.map?rel=1522181439112