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
var G__36438__delegate = function (gs,item,etc){
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var speech = temp__4655__auto__;
return advenjure.utils.say.call(null,speech);
} else {
return null;
}
};
var G__36438 = function (gs,item,var_args){
var etc = null;
if (arguments.length > 2) {
var G__36439__i = 0, G__36439__a = new Array(arguments.length -  2);
while (G__36439__i < G__36439__a.length) {G__36439__a[G__36439__i] = arguments[G__36439__i + 2]; ++G__36439__i;}
  etc = new cljs.core.IndexedSeq(G__36439__a,0);
} 
return G__36438__delegate.call(this,gs,item,etc);};
G__36438.cljs$lang$maxFixedArity = 2;
G__36438.cljs$lang$applyTo = (function (arglist__36440){
var gs = cljs.core.first(arglist__36440);
arglist__36440 = cljs.core.next(arglist__36440);
var item = cljs.core.first(arglist__36440);
var etc = cljs.core.rest(arglist__36440);
return G__36438__delegate(gs,item,etc);
});
G__36438.cljs$core$IFn$_invoke$arity$variadic = G__36438__delegate;
return G__36438;
})()
;
});
advenjure.verbs.ask_ambiguous = (function advenjure$verbs$ask_ambiguous(item_name,items){
var first_different = (function (spec){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36441_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36441_SHARP_,item_name);
}),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(spec)));
});
var names = cljs.core.map.call(null,first_different,items);
var names__$1 = cljs.core.map.call(null,((function (first_different,names){
return (function (p1__36442_SHARP_){
return [cljs.core.str("the "),cljs.core.str(p1__36442_SHARP_)].join('');
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
var args36443 = [];
var len__21530__auto___36921 = arguments.length;
var i__21531__auto___36922 = (0);
while(true){
if((i__21531__auto___36922 < len__21530__auto___36921)){
args36443.push((arguments[i__21531__auto___36922]));

var G__36923 = (i__21531__auto___36922 + (1));
i__21531__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var G__36449 = args36443.length;
switch (G__36449) {
case 2:
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args36443.slice((3)),(0),null));
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__36450){
var map__36451 = p__36450;
var map__36451__$1 = ((((!((map__36451 == null)))?((((map__36451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36451):map__36451);
var kw_required = cljs.core.get.call(null,map__36451__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__36451,map__36451__$1,kw_required){
return (function() {
var G__36925 = null;
var G__36925__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__36925__2 = (function (game_state,item_name){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function (state_36735){
var state_val_36736 = (state_36735[(1)]);
if((state_val_36736 === (65))){
var inst_36485 = (state_36735[(7)]);
var inst_36593 = advenjure.verbs.ask_ambiguous.call(null,item_name,inst_36485);
var inst_36594 = advenjure.utils.say.call(null,inst_36593);
var state_36735__$1 = state_36735;
var statearr_36737_36926 = state_36735__$1;
(statearr_36737_36926[(2)] = inst_36594);

(statearr_36737_36926[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (70))){
var inst_36729 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36738_36927 = state_36735__$1;
(statearr_36738_36927[(2)] = inst_36729);

(statearr_36738_36927[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (62))){
var inst_36587 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_36588 = advenjure.utils.say.call(null,inst_36587);
var state_36735__$1 = state_36735;
var statearr_36739_36928 = state_36735__$1;
(statearr_36739_36928[(2)] = inst_36588);

(statearr_36739_36928[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (74))){
var inst_36584 = (state_36735[(8)]);
var inst_36606 = (inst_36584 == null);
var state_36735__$1 = state_36735;
var statearr_36740_36929 = state_36735__$1;
(statearr_36740_36929[(2)] = inst_36606);

(statearr_36740_36929[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (7))){
var state_36735__$1 = state_36735;
var statearr_36741_36930 = state_36735__$1;
(statearr_36741_36930[(2)] = true);

(statearr_36741_36930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (59))){
var inst_36553 = (state_36735[(9)]);
var state_36735__$1 = state_36735;
var statearr_36742_36931 = state_36735__$1;
(statearr_36742_36931[(2)] = inst_36553);

(statearr_36742_36931[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (20))){
var inst_36487 = (state_36735[(10)]);
var inst_36507 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36487);
var state_36735__$1 = state_36735;
var statearr_36743_36932 = state_36735__$1;
(statearr_36743_36932[(2)] = inst_36507);

(statearr_36743_36932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (72))){
var state_36735__$1 = state_36735;
if(cljs.core.truth_(kw_required)){
var statearr_36744_36933 = state_36735__$1;
(statearr_36744_36933[(1)] = (74));

} else {
var statearr_36745_36934 = state_36735__$1;
(statearr_36745_36934[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (58))){
var inst_36553 = (state_36735[(9)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36735__$1,(61),inst_36553);
} else {
if((state_val_36736 === (60))){
var inst_36582 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36746_36935 = state_36735__$1;
(statearr_36746_36935[(2)] = inst_36582);

(statearr_36746_36935[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (27))){
var inst_36503 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36747_36936 = state_36735__$1;
(statearr_36747_36936[(2)] = inst_36503);

(statearr_36747_36936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (1))){
var inst_36453 = advenjure.utils.find_item.call(null,game_state,item_name);
var inst_36454 = inst_36453;
var state_36735__$1 = (function (){var statearr_36748 = state_36735;
(statearr_36748[(11)] = inst_36454);

return statearr_36748;
})();
var statearr_36749_36937 = state_36735__$1;
(statearr_36749_36937[(2)] = null);

(statearr_36749_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (69))){
var inst_36584 = (state_36735[(8)]);
var inst_36600 = inst_36584 === false;
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36600)){
var statearr_36750_36938 = state_36735__$1;
(statearr_36750_36938[(1)] = (71));

} else {
var statearr_36751_36939 = state_36735__$1;
(statearr_36751_36939[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (24))){
var inst_36505 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36752_36940 = state_36735__$1;
(statearr_36752_36940[(2)] = inst_36505);

(statearr_36752_36940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (55))){
var inst_36553 = (state_36735[(9)]);
var inst_36566 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36553);
var state_36735__$1 = state_36735;
var statearr_36753_36941 = state_36735__$1;
(statearr_36753_36941[(2)] = inst_36566);

(statearr_36753_36941[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (39))){
var inst_36538 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36754_36942 = state_36735__$1;
(statearr_36754_36942[(2)] = inst_36538);

(statearr_36754_36942[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (46))){
var inst_36545 = (state_36735[(2)]);
var inst_36520 = inst_36545;
var state_36735__$1 = (function (){var statearr_36755 = state_36735;
(statearr_36755[(12)] = inst_36520);

return statearr_36755;
})();
var statearr_36756_36943 = state_36735__$1;
(statearr_36756_36943[(2)] = null);

(statearr_36756_36943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (4))){
var inst_36454 = (state_36735[(11)]);
var inst_36460 = inst_36454.cljs$core$async$impl$protocols$ReadPort$;
var inst_36461 = (false) || (inst_36460);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36461)){
var statearr_36757_36944 = state_36735__$1;
(statearr_36757_36944[(1)] = (7));

} else {
var statearr_36758_36945 = state_36735__$1;
(statearr_36758_36945[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (77))){
var inst_36611 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_36612 = advenjure.utils.say.call(null,inst_36611);
var state_36735__$1 = state_36735;
var statearr_36759_36946 = state_36735__$1;
(statearr_36759_36946[(2)] = inst_36612);

(statearr_36759_36946[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (54))){
var inst_36571 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36760_36947 = state_36735__$1;
(statearr_36760_36947[(2)] = inst_36571);

(statearr_36760_36947[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (15))){
var inst_36483 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36761_36948 = state_36735__$1;
(statearr_36761_36948[(2)] = inst_36483);

(statearr_36761_36948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (48))){
var inst_36485 = (state_36735[(7)]);
var inst_36584 = (state_36735[(2)]);
var inst_36585 = cljs.core.empty_QMARK_.call(null,inst_36485);
var state_36735__$1 = (function (){var statearr_36762 = state_36735;
(statearr_36762[(8)] = inst_36584);

return statearr_36762;
})();
if(inst_36585){
var statearr_36763_36949 = state_36735__$1;
(statearr_36763_36949[(1)] = (62));

} else {
var statearr_36764_36950 = state_36735__$1;
(statearr_36764_36950[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (50))){
var inst_36553 = (state_36735[(9)]);
var inst_36573 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36553);
var state_36735__$1 = state_36735;
var statearr_36765_36951 = state_36735__$1;
(statearr_36765_36951[(2)] = inst_36573);

(statearr_36765_36951[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (75))){
var state_36735__$1 = state_36735;
var statearr_36766_36952 = state_36735__$1;
(statearr_36766_36952[(2)] = kw_required);

(statearr_36766_36952[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (21))){
var inst_36509 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36509)){
var statearr_36767_36953 = state_36735__$1;
(statearr_36767_36953[(1)] = (28));

} else {
var statearr_36768_36954 = state_36735__$1;
(statearr_36768_36954[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (31))){
var inst_36512 = (state_36735[(2)]);
var inst_36487 = inst_36512;
var state_36735__$1 = (function (){var statearr_36769 = state_36735;
(statearr_36769[(10)] = inst_36487);

return statearr_36769;
})();
var statearr_36770_36955 = state_36735__$1;
(statearr_36770_36955[(2)] = null);

(statearr_36770_36955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (32))){
var inst_36520 = (state_36735[(12)]);
var inst_36523 = (inst_36520 == null);
var inst_36524 = cljs.core.not.call(null,inst_36523);
var state_36735__$1 = state_36735;
if(inst_36524){
var statearr_36771_36956 = state_36735__$1;
(statearr_36771_36956[(1)] = (34));

} else {
var statearr_36772_36957 = state_36735__$1;
(statearr_36772_36957[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (40))){
var inst_36520 = (state_36735[(12)]);
var inst_36533 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36520);
var state_36735__$1 = state_36735;
var statearr_36773_36958 = state_36735__$1;
(statearr_36773_36958[(2)] = inst_36533);

(statearr_36773_36958[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (56))){
var state_36735__$1 = state_36735;
var statearr_36774_36959 = state_36735__$1;
(statearr_36774_36959[(2)] = false);

(statearr_36774_36959[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (33))){
var inst_36551 = (state_36735[(13)]);
var inst_36551__$1 = (state_36735[(2)]);
var inst_36552 = advenjure.hooks.eval_precondition.call(null,inst_36551__$1,game_state);
var inst_36553 = inst_36552;
var state_36735__$1 = (function (){var statearr_36775 = state_36735;
(statearr_36775[(13)] = inst_36551__$1);

(statearr_36775[(9)] = inst_36553);

return statearr_36775;
})();
var statearr_36776_36960 = state_36735__$1;
(statearr_36776_36960[(2)] = null);

(statearr_36776_36960[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (13))){
var inst_36454 = (state_36735[(11)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36735__$1,(16),inst_36454);
} else {
if((state_val_36736 === (22))){
var state_36735__$1 = state_36735;
var statearr_36777_36961 = state_36735__$1;
(statearr_36777_36961[(2)] = true);

(statearr_36777_36961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (36))){
var inst_36542 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36542)){
var statearr_36778_36962 = state_36735__$1;
(statearr_36778_36962[(1)] = (43));

} else {
var statearr_36779_36963 = state_36735__$1;
(statearr_36779_36963[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (41))){
var state_36735__$1 = state_36735;
var statearr_36780_36964 = state_36735__$1;
(statearr_36780_36964[(2)] = false);

(statearr_36780_36964[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (43))){
var inst_36520 = (state_36735[(12)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36735__$1,(46),inst_36520);
} else {
if((state_val_36736 === (61))){
var inst_36578 = (state_36735[(2)]);
var inst_36553 = inst_36578;
var state_36735__$1 = (function (){var statearr_36781 = state_36735;
(statearr_36781[(9)] = inst_36553);

return statearr_36781;
})();
var statearr_36782_36965 = state_36735__$1;
(statearr_36782_36965[(2)] = null);

(statearr_36782_36965[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (29))){
var inst_36487 = (state_36735[(10)]);
var state_36735__$1 = state_36735;
var statearr_36783_36966 = state_36735__$1;
(statearr_36783_36966[(2)] = inst_36487);

(statearr_36783_36966[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (44))){
var inst_36520 = (state_36735[(12)]);
var state_36735__$1 = state_36735;
var statearr_36784_36967 = state_36735__$1;
(statearr_36784_36967[(2)] = inst_36520);

(statearr_36784_36967[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (6))){
var inst_36476 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36476)){
var statearr_36785_36968 = state_36735__$1;
(statearr_36785_36968[(1)] = (13));

} else {
var statearr_36786_36969 = state_36735__$1;
(statearr_36786_36969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (28))){
var inst_36487 = (state_36735[(10)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36735__$1,(31),inst_36487);
} else {
if((state_val_36736 === (64))){
var inst_36733 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36735__$1,inst_36733);
} else {
if((state_val_36736 === (51))){
var inst_36575 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36575)){
var statearr_36787_36970 = state_36735__$1;
(statearr_36787_36970[(1)] = (58));

} else {
var statearr_36788_36971 = state_36735__$1;
(statearr_36788_36971[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (25))){
var inst_36487 = (state_36735[(10)]);
var inst_36500 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36487);
var state_36735__$1 = state_36735;
var statearr_36789_36972 = state_36735__$1;
(statearr_36789_36972[(2)] = inst_36500);

(statearr_36789_36972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (34))){
var inst_36520 = (state_36735[(12)]);
var inst_36526 = inst_36520.cljs$core$async$impl$protocols$ReadPort$;
var inst_36527 = (false) || (inst_36526);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36527)){
var statearr_36790_36973 = state_36735__$1;
(statearr_36790_36973[(1)] = (37));

} else {
var statearr_36791_36974 = state_36735__$1;
(statearr_36791_36974[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (17))){
var inst_36487 = (state_36735[(10)]);
var inst_36490 = (inst_36487 == null);
var inst_36491 = cljs.core.not.call(null,inst_36490);
var state_36735__$1 = state_36735;
if(inst_36491){
var statearr_36792_36975 = state_36735__$1;
(statearr_36792_36975[(1)] = (19));

} else {
var statearr_36793_36976 = state_36735__$1;
(statearr_36793_36976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (3))){
var inst_36485 = (state_36735[(7)]);
var inst_36485__$1 = (state_36735[(2)]);
var inst_36486 = cljs.core.first.call(null,inst_36485__$1);
var inst_36487 = inst_36486;
var state_36735__$1 = (function (){var statearr_36794 = state_36735;
(statearr_36794[(7)] = inst_36485__$1);

(statearr_36794[(10)] = inst_36487);

return statearr_36794;
})();
var statearr_36795_36977 = state_36735__$1;
(statearr_36795_36977[(2)] = null);

(statearr_36795_36977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (12))){
var inst_36470 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36796_36978 = state_36735__$1;
(statearr_36796_36978[(2)] = inst_36470);

(statearr_36796_36978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (2))){
var inst_36454 = (state_36735[(11)]);
var inst_36457 = (inst_36454 == null);
var inst_36458 = cljs.core.not.call(null,inst_36457);
var state_36735__$1 = state_36735;
if(inst_36458){
var statearr_36797_36979 = state_36735__$1;
(statearr_36797_36979[(1)] = (4));

} else {
var statearr_36798_36980 = state_36735__$1;
(statearr_36798_36980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (66))){
var inst_36584 = (state_36735[(8)]);
var inst_36596 = typeof inst_36584 === 'string';
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36596)){
var statearr_36799_36981 = state_36735__$1;
(statearr_36799_36981[(1)] = (68));

} else {
var statearr_36800_36982 = state_36735__$1;
(statearr_36800_36982[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (23))){
var inst_36487 = (state_36735[(10)]);
var inst_36497 = inst_36487.cljs$lang$protocol_mask$partition$;
var inst_36498 = (!inst_36497);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36498)){
var statearr_36801_36983 = state_36735__$1;
(statearr_36801_36983[(1)] = (25));

} else {
var statearr_36802_36984 = state_36735__$1;
(statearr_36802_36984[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (47))){
var inst_36553 = (state_36735[(9)]);
var inst_36556 = (inst_36553 == null);
var inst_36557 = cljs.core.not.call(null,inst_36556);
var state_36735__$1 = state_36735;
if(inst_36557){
var statearr_36803_36985 = state_36735__$1;
(statearr_36803_36985[(1)] = (49));

} else {
var statearr_36804_36986 = state_36735__$1;
(statearr_36804_36986[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (35))){
var inst_36520 = (state_36735[(12)]);
var inst_36540 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36520);
var state_36735__$1 = state_36735;
var statearr_36805_36987 = state_36735__$1;
(statearr_36805_36987[(2)] = inst_36540);

(statearr_36805_36987[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (82))){
var inst_36723 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36806_36988 = state_36735__$1;
(statearr_36806_36988[(2)] = inst_36723);

(statearr_36806_36988[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (76))){
var inst_36609 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36609)){
var statearr_36807_36989 = state_36735__$1;
(statearr_36807_36989[(1)] = (77));

} else {
var statearr_36808_36990 = state_36735__$1;
(statearr_36808_36990[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (19))){
var inst_36487 = (state_36735[(10)]);
var inst_36493 = inst_36487.cljs$core$async$impl$protocols$ReadPort$;
var inst_36494 = (false) || (inst_36493);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36494)){
var statearr_36809_36991 = state_36735__$1;
(statearr_36809_36991[(1)] = (22));

} else {
var statearr_36810_36992 = state_36735__$1;
(statearr_36810_36992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (57))){
var inst_36569 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36811_36993 = state_36735__$1;
(statearr_36811_36993[(2)] = inst_36569);

(statearr_36811_36993[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (68))){
var inst_36584 = (state_36735[(8)]);
var inst_36598 = advenjure.utils.say.call(null,inst_36584);
var state_36735__$1 = state_36735;
var statearr_36812_36994 = state_36735__$1;
(statearr_36812_36994[(2)] = inst_36598);

(statearr_36812_36994[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (11))){
var state_36735__$1 = state_36735;
var statearr_36813_36995 = state_36735__$1;
(statearr_36813_36995[(2)] = false);

(statearr_36813_36995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (9))){
var inst_36472 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36814_36996 = state_36735__$1;
(statearr_36814_36996[(2)] = inst_36472);

(statearr_36814_36996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (5))){
var inst_36454 = (state_36735[(11)]);
var inst_36474 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36454);
var state_36735__$1 = state_36735;
var statearr_36815_36997 = state_36735__$1;
(statearr_36815_36997[(2)] = inst_36474);

(statearr_36815_36997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (14))){
var inst_36454 = (state_36735[(11)]);
var state_36735__$1 = state_36735;
var statearr_36816_36998 = state_36735__$1;
(statearr_36816_36998[(2)] = inst_36454);

(statearr_36816_36998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (45))){
var inst_36549 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36817_36999 = state_36735__$1;
(statearr_36817_36999[(2)] = inst_36549);

(statearr_36817_36999[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (53))){
var inst_36553 = (state_36735[(9)]);
var inst_36563 = inst_36553.cljs$lang$protocol_mask$partition$;
var inst_36564 = (!inst_36563);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36564)){
var statearr_36818_37000 = state_36735__$1;
(statearr_36818_37000[(1)] = (55));

} else {
var statearr_36819_37001 = state_36735__$1;
(statearr_36819_37001[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (78))){
var state_36735__$1 = state_36735;
var statearr_36820_37002 = state_36735__$1;
(statearr_36820_37002[(1)] = (80));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (26))){
var state_36735__$1 = state_36735;
var statearr_36822_37003 = state_36735__$1;
(statearr_36822_37003[(2)] = false);

(statearr_36822_37003[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (16))){
var inst_36479 = (state_36735[(2)]);
var inst_36454 = inst_36479;
var state_36735__$1 = (function (){var statearr_36823 = state_36735;
(statearr_36823[(11)] = inst_36454);

return statearr_36823;
})();
var statearr_36824_37004 = state_36735__$1;
(statearr_36824_37004[(2)] = null);

(statearr_36824_37004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (81))){
var state_36735__$1 = state_36735;
var statearr_36825_37005 = state_36735__$1;
(statearr_36825_37005[(2)] = null);

(statearr_36825_37005[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (79))){
var inst_36725 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36826_37006 = state_36735__$1;
(statearr_36826_37006[(2)] = inst_36725);

(statearr_36826_37006[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (38))){
var inst_36520 = (state_36735[(12)]);
var inst_36530 = inst_36520.cljs$lang$protocol_mask$partition$;
var inst_36531 = (!inst_36530);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36531)){
var statearr_36827_37007 = state_36735__$1;
(statearr_36827_37007[(1)] = (40));

} else {
var statearr_36828_37008 = state_36735__$1;
(statearr_36828_37008[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (30))){
var inst_36516 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36829_37009 = state_36735__$1;
(statearr_36829_37009[(2)] = inst_36516);

(statearr_36829_37009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (73))){
var inst_36727 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36830_37010 = state_36735__$1;
(statearr_36830_37010[(2)] = inst_36727);

(statearr_36830_37010[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (10))){
var inst_36454 = (state_36735[(11)]);
var inst_36467 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36454);
var state_36735__$1 = state_36735;
var statearr_36831_37011 = state_36735__$1;
(statearr_36831_37011[(2)] = inst_36467);

(statearr_36831_37011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (18))){
var inst_36518 = (state_36735[(14)]);
var inst_36518__$1 = (state_36735[(2)]);
var inst_36519 = verb_kw.call(null,inst_36518__$1);
var inst_36520 = inst_36519;
var state_36735__$1 = (function (){var statearr_36832 = state_36735;
(statearr_36832[(14)] = inst_36518__$1);

(statearr_36832[(12)] = inst_36520);

return statearr_36832;
})();
var statearr_36833_37012 = state_36735__$1;
(statearr_36833_37012[(2)] = null);

(statearr_36833_37012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (52))){
var state_36735__$1 = state_36735;
var statearr_36834_37013 = state_36735__$1;
(statearr_36834_37013[(2)] = true);

(statearr_36834_37013[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (67))){
var inst_36731 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36835_37014 = state_36735__$1;
(statearr_36835_37014[(2)] = inst_36731);

(statearr_36835_37014[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (71))){
var inst_36602 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_36603 = advenjure.utils.say.call(null,inst_36602);
var state_36735__$1 = state_36735;
var statearr_36836_37015 = state_36735__$1;
(statearr_36836_37015[(2)] = inst_36603);

(statearr_36836_37015[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (42))){
var inst_36536 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36837_37016 = state_36735__$1;
(statearr_36837_37016[(2)] = inst_36536);

(statearr_36837_37016[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (80))){
var inst_36551 = (state_36735[(13)]);
var inst_36485 = (state_36735[(7)]);
var inst_36518 = (state_36735[(14)]);
var inst_36584 = (state_36735[(8)]);
var inst_36718 = cljs.core.async.chan.call(null,(1));
var inst_36719 = (function (){var items = inst_36485;
var item = inst_36518;
var conditions = inst_36551;
var value = inst_36584;
var c__24326__auto____$1 = inst_36718;
return ((function (items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function (state_36716){
var state_val_36717 = (state_36716[(1)]);
if((state_val_36717 === (7))){
var state_36716__$1 = state_36716;
var statearr_36838_37017 = state_36716__$1;
(statearr_36838_37017[(2)] = true);

(statearr_36838_37017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (20))){
var inst_36649 = (state_36716[(7)]);
var inst_36669 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36649);
var state_36716__$1 = state_36716;
var statearr_36839_37018 = state_36716__$1;
(statearr_36839_37018[(2)] = inst_36669);

(statearr_36839_37018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (27))){
var inst_36665 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36840_37019 = state_36716__$1;
(statearr_36840_37019[(2)] = inst_36665);

(statearr_36840_37019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (1))){
var inst_36615 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item);
var inst_36616 = inst_36615;
var state_36716__$1 = (function (){var statearr_36841 = state_36716;
(statearr_36841[(8)] = inst_36616);

return statearr_36841;
})();
var statearr_36842_37020 = state_36716__$1;
(statearr_36842_37020[(2)] = null);

(statearr_36842_37020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (24))){
var inst_36667 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36843_37021 = state_36716__$1;
(statearr_36843_37021[(2)] = inst_36667);

(statearr_36843_37021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (39))){
var inst_36700 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36844_37022 = state_36716__$1;
(statearr_36844_37022[(2)] = inst_36700);

(statearr_36844_37022[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (46))){
var inst_36707 = (state_36716[(2)]);
var inst_36682 = inst_36707;
var state_36716__$1 = (function (){var statearr_36845 = state_36716;
(statearr_36845[(9)] = inst_36682);

return statearr_36845;
})();
var statearr_36846_37023 = state_36716__$1;
(statearr_36846_37023[(2)] = null);

(statearr_36846_37023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (4))){
var inst_36616 = (state_36716[(8)]);
var inst_36622 = inst_36616.cljs$core$async$impl$protocols$ReadPort$;
var inst_36623 = (false) || (inst_36622);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36623)){
var statearr_36847_37024 = state_36716__$1;
(statearr_36847_37024[(1)] = (7));

} else {
var statearr_36848_37025 = state_36716__$1;
(statearr_36848_37025[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (15))){
var inst_36645 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36849_37026 = state_36716__$1;
(statearr_36849_37026[(2)] = inst_36645);

(statearr_36849_37026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (21))){
var inst_36671 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36671)){
var statearr_36850_37027 = state_36716__$1;
(statearr_36850_37027[(1)] = (28));

} else {
var statearr_36851_37028 = state_36716__$1;
(statearr_36851_37028[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (31))){
var inst_36674 = (state_36716[(2)]);
var inst_36649 = inst_36674;
var state_36716__$1 = (function (){var statearr_36852 = state_36716;
(statearr_36852[(7)] = inst_36649);

return statearr_36852;
})();
var statearr_36853_37029 = state_36716__$1;
(statearr_36853_37029[(2)] = null);

(statearr_36853_37029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (32))){
var inst_36682 = (state_36716[(9)]);
var inst_36685 = (inst_36682 == null);
var inst_36686 = cljs.core.not.call(null,inst_36685);
var state_36716__$1 = state_36716;
if(inst_36686){
var statearr_36854_37030 = state_36716__$1;
(statearr_36854_37030[(1)] = (34));

} else {
var statearr_36855_37031 = state_36716__$1;
(statearr_36855_37031[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (40))){
var inst_36682 = (state_36716[(9)]);
var inst_36695 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36682);
var state_36716__$1 = state_36716;
var statearr_36856_37032 = state_36716__$1;
(statearr_36856_37032[(2)] = inst_36695);

(statearr_36856_37032[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (33))){
var inst_36713 = (state_36716[(2)]);
var inst_36714 = advenjure.hooks.execute.call(null,inst_36713,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item);
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36716__$1,inst_36714);
} else {
if((state_val_36717 === (13))){
var inst_36616 = (state_36716[(8)]);
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36716__$1,(16),inst_36616);
} else {
if((state_val_36717 === (22))){
var state_36716__$1 = state_36716;
var statearr_36857_37033 = state_36716__$1;
(statearr_36857_37033[(2)] = true);

(statearr_36857_37033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (36))){
var inst_36704 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36704)){
var statearr_36858_37034 = state_36716__$1;
(statearr_36858_37034[(1)] = (43));

} else {
var statearr_36859_37035 = state_36716__$1;
(statearr_36859_37035[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (41))){
var state_36716__$1 = state_36716;
var statearr_36860_37036 = state_36716__$1;
(statearr_36860_37036[(2)] = false);

(statearr_36860_37036[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (43))){
var inst_36682 = (state_36716[(9)]);
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36716__$1,(46),inst_36682);
} else {
if((state_val_36717 === (29))){
var inst_36649 = (state_36716[(7)]);
var state_36716__$1 = state_36716;
var statearr_36861_37037 = state_36716__$1;
(statearr_36861_37037[(2)] = inst_36649);

(statearr_36861_37037[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (44))){
var inst_36682 = (state_36716[(9)]);
var state_36716__$1 = state_36716;
var statearr_36862_37038 = state_36716__$1;
(statearr_36862_37038[(2)] = inst_36682);

(statearr_36862_37038[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (6))){
var inst_36638 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36638)){
var statearr_36863_37039 = state_36716__$1;
(statearr_36863_37039[(1)] = (13));

} else {
var statearr_36864_37040 = state_36716__$1;
(statearr_36864_37040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (28))){
var inst_36649 = (state_36716[(7)]);
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36716__$1,(31),inst_36649);
} else {
if((state_val_36717 === (25))){
var inst_36649 = (state_36716[(7)]);
var inst_36662 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36649);
var state_36716__$1 = state_36716;
var statearr_36865_37041 = state_36716__$1;
(statearr_36865_37041[(2)] = inst_36662);

(statearr_36865_37041[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (34))){
var inst_36682 = (state_36716[(9)]);
var inst_36688 = inst_36682.cljs$core$async$impl$protocols$ReadPort$;
var inst_36689 = (false) || (inst_36688);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36689)){
var statearr_36866_37042 = state_36716__$1;
(statearr_36866_37042[(1)] = (37));

} else {
var statearr_36867_37043 = state_36716__$1;
(statearr_36867_37043[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (17))){
var inst_36649 = (state_36716[(7)]);
var inst_36652 = (inst_36649 == null);
var inst_36653 = cljs.core.not.call(null,inst_36652);
var state_36716__$1 = state_36716;
if(inst_36653){
var statearr_36868_37044 = state_36716__$1;
(statearr_36868_37044[(1)] = (19));

} else {
var statearr_36869_37045 = state_36716__$1;
(statearr_36869_37045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (3))){
var inst_36647 = (state_36716[(10)]);
var inst_36647__$1 = (state_36716[(2)]);
var inst_36648 = handler.call(null,inst_36647__$1,item);
var inst_36649 = inst_36648;
var state_36716__$1 = (function (){var statearr_36870 = state_36716;
(statearr_36870[(7)] = inst_36649);

(statearr_36870[(10)] = inst_36647__$1);

return statearr_36870;
})();
var statearr_36871_37046 = state_36716__$1;
(statearr_36871_37046[(2)] = null);

(statearr_36871_37046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (12))){
var inst_36632 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36872_37047 = state_36716__$1;
(statearr_36872_37047[(2)] = inst_36632);

(statearr_36872_37047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (2))){
var inst_36616 = (state_36716[(8)]);
var inst_36619 = (inst_36616 == null);
var inst_36620 = cljs.core.not.call(null,inst_36619);
var state_36716__$1 = state_36716;
if(inst_36620){
var statearr_36873_37048 = state_36716__$1;
(statearr_36873_37048[(1)] = (4));

} else {
var statearr_36874_37049 = state_36716__$1;
(statearr_36874_37049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (23))){
var inst_36649 = (state_36716[(7)]);
var inst_36659 = inst_36649.cljs$lang$protocol_mask$partition$;
var inst_36660 = (!inst_36659);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36660)){
var statearr_36875_37050 = state_36716__$1;
(statearr_36875_37050[(1)] = (25));

} else {
var statearr_36876_37051 = state_36716__$1;
(statearr_36876_37051[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (35))){
var inst_36682 = (state_36716[(9)]);
var inst_36702 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36682);
var state_36716__$1 = state_36716;
var statearr_36877_37052 = state_36716__$1;
(statearr_36877_37052[(2)] = inst_36702);

(statearr_36877_37052[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (19))){
var inst_36649 = (state_36716[(7)]);
var inst_36655 = inst_36649.cljs$core$async$impl$protocols$ReadPort$;
var inst_36656 = (false) || (inst_36655);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36656)){
var statearr_36878_37053 = state_36716__$1;
(statearr_36878_37053[(1)] = (22));

} else {
var statearr_36879_37054 = state_36716__$1;
(statearr_36879_37054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (11))){
var state_36716__$1 = state_36716;
var statearr_36880_37055 = state_36716__$1;
(statearr_36880_37055[(2)] = false);

(statearr_36880_37055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (9))){
var inst_36634 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36881_37056 = state_36716__$1;
(statearr_36881_37056[(2)] = inst_36634);

(statearr_36881_37056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (5))){
var inst_36616 = (state_36716[(8)]);
var inst_36636 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36616);
var state_36716__$1 = state_36716;
var statearr_36882_37057 = state_36716__$1;
(statearr_36882_37057[(2)] = inst_36636);

(statearr_36882_37057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (14))){
var inst_36616 = (state_36716[(8)]);
var state_36716__$1 = state_36716;
var statearr_36883_37058 = state_36716__$1;
(statearr_36883_37058[(2)] = inst_36616);

(statearr_36883_37058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (45))){
var inst_36711 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36884_37059 = state_36716__$1;
(statearr_36884_37059[(2)] = inst_36711);

(statearr_36884_37059[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (26))){
var state_36716__$1 = state_36716;
var statearr_36885_37060 = state_36716__$1;
(statearr_36885_37060[(2)] = false);

(statearr_36885_37060[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (16))){
var inst_36641 = (state_36716[(2)]);
var inst_36616 = inst_36641;
var state_36716__$1 = (function (){var statearr_36886 = state_36716;
(statearr_36886[(8)] = inst_36616);

return statearr_36886;
})();
var statearr_36887_37061 = state_36716__$1;
(statearr_36887_37061[(2)] = null);

(statearr_36887_37061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (38))){
var inst_36682 = (state_36716[(9)]);
var inst_36692 = inst_36682.cljs$lang$protocol_mask$partition$;
var inst_36693 = (!inst_36692);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36693)){
var statearr_36888_37062 = state_36716__$1;
(statearr_36888_37062[(1)] = (40));

} else {
var statearr_36889_37063 = state_36716__$1;
(statearr_36889_37063[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (30))){
var inst_36678 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36890_37064 = state_36716__$1;
(statearr_36890_37064[(2)] = inst_36678);

(statearr_36890_37064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (10))){
var inst_36616 = (state_36716[(8)]);
var inst_36629 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36616);
var state_36716__$1 = state_36716;
var statearr_36891_37065 = state_36716__$1;
(statearr_36891_37065[(2)] = inst_36629);

(statearr_36891_37065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (18))){
var inst_36647 = (state_36716[(10)]);
var inst_36680 = (state_36716[(2)]);
var inst_36681 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_36647,inst_36680);
var inst_36682 = inst_36681;
var state_36716__$1 = (function (){var statearr_36892 = state_36716;
(statearr_36892[(9)] = inst_36682);

return statearr_36892;
})();
var statearr_36893_37066 = state_36716__$1;
(statearr_36893_37066[(2)] = null);

(statearr_36893_37066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (42))){
var inst_36698 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36894_37067 = state_36716__$1;
(statearr_36894_37067[(2)] = inst_36698);

(statearr_36894_37067[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (37))){
var state_36716__$1 = state_36716;
var statearr_36895_37068 = state_36716__$1;
(statearr_36895_37068[(2)] = true);

(statearr_36895_37068[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (8))){
var inst_36616 = (state_36716[(8)]);
var inst_36626 = inst_36616.cljs$lang$protocol_mask$partition$;
var inst_36627 = (!inst_36626);
var state_36716__$1 = state_36716;
if(cljs.core.truth_(inst_36627)){
var statearr_36896_37069 = state_36716__$1;
(statearr_36896_37069[(1)] = (10));

} else {
var statearr_36897_37070 = state_36716__$1;
(statearr_36897_37070[(1)] = (11));

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
});})(items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required))
;
return ((function (switch__24055__auto__,items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_36901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36901[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_36901[(1)] = (1));

return statearr_36901;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_36716){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_36716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e36902){if((e36902 instanceof Object)){
var ex__24059__auto__ = e36902;
var statearr_36903_37071 = state_36716;
(statearr_36903_37071[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37072 = state_36716;
state_36716 = G__37072;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_36716){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_36716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required))
})();
var state__24328__auto__ = (function (){var statearr_36904 = f__24327__auto__.call(null);
(statearr_36904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto____$1);

return statearr_36904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});
;})(items,item,conditions,value,c__24326__auto____$1,inst_36551,inst_36485,inst_36518,inst_36584,inst_36718,state_val_36736,c__24326__auto__,map__36451,map__36451__$1,kw_required))
})();
var inst_36720 = cljs.core.async.impl.dispatch.run.call(null,inst_36719);
var state_36735__$1 = (function (){var statearr_36905 = state_36735;
(statearr_36905[(15)] = inst_36720);

return statearr_36905;
})();
var statearr_36906_37073 = state_36735__$1;
(statearr_36906_37073[(2)] = inst_36718);

(statearr_36906_37073[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (37))){
var state_36735__$1 = state_36735;
var statearr_36907_37074 = state_36735__$1;
(statearr_36907_37074[(2)] = true);

(statearr_36907_37074[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (63))){
var inst_36485 = (state_36735[(7)]);
var inst_36590 = cljs.core.count.call(null,inst_36485);
var inst_36591 = (inst_36590 > (1));
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36591)){
var statearr_36908_37075 = state_36735__$1;
(statearr_36908_37075[(1)] = (65));

} else {
var statearr_36909_37076 = state_36735__$1;
(statearr_36909_37076[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (8))){
var inst_36454 = (state_36735[(11)]);
var inst_36464 = inst_36454.cljs$lang$protocol_mask$partition$;
var inst_36465 = (!inst_36464);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36465)){
var statearr_36910_37077 = state_36735__$1;
(statearr_36910_37077[(1)] = (10));

} else {
var statearr_36911_37078 = state_36735__$1;
(statearr_36911_37078[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (49))){
var inst_36553 = (state_36735[(9)]);
var inst_36559 = inst_36553.cljs$core$async$impl$protocols$ReadPort$;
var inst_36560 = (false) || (inst_36559);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36560)){
var statearr_36912_37079 = state_36735__$1;
(statearr_36912_37079[(1)] = (52));

} else {
var statearr_36913_37080 = state_36735__$1;
(statearr_36913_37080[(1)] = (53));

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
});})(c__24326__auto__,map__36451,map__36451__$1,kw_required))
;
return ((function (switch__24055__auto__,c__24326__auto__,map__36451,map__36451__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_36917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36917[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_36917[(1)] = (1));

return statearr_36917;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_36735){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_36735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e36918){if((e36918 instanceof Object)){
var ex__24059__auto__ = e36918;
var statearr_36919_37081 = state_36735;
(statearr_36919_37081[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_36735;
state_36735 = G__37082;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_36735){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_36735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,map__36451,map__36451__$1,kw_required))
})();
var state__24328__auto__ = (function (){var statearr_36920 = f__24327__auto__.call(null);
(statearr_36920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_36920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,map__36451,map__36451__$1,kw_required))
);

return c__24326__auto__;
});
G__36925 = function(game_state,item_name){
switch(arguments.length){
case 1:
return G__36925__1.call(this,game_state);
case 2:
return G__36925__2.call(this,game_state,item_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36925.cljs$core$IFn$_invoke$arity$1 = G__36925__1;
G__36925.cljs$core$IFn$_invoke$arity$2 = G__36925__2;
return G__36925;
})()
;})(map__36451,map__36451__$1,kw_required))
});

advenjure.verbs.make_item_handler.cljs$lang$applyTo = (function (seq36444){
var G__36445 = cljs.core.first.call(null,seq36444);
var seq36444__$1 = cljs.core.next.call(null,seq36444);
var G__36446 = cljs.core.first.call(null,seq36444__$1);
var seq36444__$2 = cljs.core.next.call(null,seq36444__$1);
var G__36447 = cljs.core.first.call(null,seq36444__$2);
var seq36444__$3 = cljs.core.next.call(null,seq36444__$2);
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__36445,G__36446,G__36447,seq36444__$3);
});

advenjure.verbs.make_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * The same as above but adapted to compund verbs.
 */
advenjure.verbs.make_compound_item_handler = (function advenjure$verbs$make_compound_item_handler(var_args){
var args37083 = [];
var len__21530__auto___37681 = arguments.length;
var i__21531__auto___37682 = (0);
while(true){
if((i__21531__auto___37682 < len__21530__auto___37681)){
args37083.push((arguments[i__21531__auto___37682]));

var G__37683 = (i__21531__auto___37682 + (1));
i__21531__auto___37682 = G__37683;
continue;
} else {
}
break;
}

var G__37089 = args37083.length;
switch (G__37089) {
case 2:
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args37083.slice((3)),(0),null));
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_compound_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__37090){
var map__37091 = p__37090;
var map__37091__$1 = ((((!((map__37091 == null)))?((((map__37091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37091):map__37091);
var kw_required = cljs.core.get.call(null,map__37091__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__37091,map__37091__$1,kw_required){
return (function() {
var G__37685 = null;
var G__37685__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__37685__2 = (function (game_state,item1){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s %s with what?",verb_name,item1));
});
var G__37685__3 = (function (game_state,item1_name,item2_name){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function (state_37451){
var state_val_37452 = (state_37451[(1)]);
if((state_val_37452 === (65))){
var inst_37226 = (state_37451[(7)]);
var inst_37246 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37226);
var state_37451__$1 = state_37451;
var statearr_37453_37686 = state_37451__$1;
(statearr_37453_37686[(2)] = inst_37246);

(statearr_37453_37686[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (70))){
var inst_37226 = (state_37451[(7)]);
var inst_37239 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37226);
var state_37451__$1 = state_37451;
var statearr_37454_37687 = state_37451__$1;
(statearr_37454_37687[(2)] = inst_37239);

(statearr_37454_37687[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (62))){
var inst_37226 = (state_37451[(7)]);
var inst_37229 = (inst_37226 == null);
var inst_37230 = cljs.core.not.call(null,inst_37229);
var state_37451__$1 = state_37451;
if(inst_37230){
var statearr_37455_37688 = state_37451__$1;
(statearr_37455_37688[(1)] = (64));

} else {
var statearr_37456_37689 = state_37451__$1;
(statearr_37456_37689[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (74))){
var inst_37226 = (state_37451[(7)]);
var state_37451__$1 = state_37451;
var statearr_37457_37690 = state_37451__$1;
(statearr_37457_37690[(2)] = inst_37226);

(statearr_37457_37690[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (110))){
var inst_37325 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_37326 = advenjure.utils.say.call(null,inst_37325);
var state_37451__$1 = state_37451;
var statearr_37458_37691 = state_37451__$1;
(statearr_37458_37691[(2)] = inst_37326);

(statearr_37458_37691[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (7))){
var state_37451__$1 = state_37451;
var statearr_37459_37692 = state_37451__$1;
(statearr_37459_37692[(2)] = true);

(statearr_37459_37692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (59))){
var inst_37193 = (state_37451[(8)]);
var state_37451__$1 = state_37451;
var statearr_37460_37693 = state_37451__$1;
(statearr_37460_37693[(2)] = inst_37193);

(statearr_37460_37693[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (86))){
var state_37451__$1 = state_37451;
var statearr_37461_37694 = state_37451__$1;
(statearr_37461_37694[(2)] = false);

(statearr_37461_37694[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (20))){
var inst_37127 = (state_37451[(9)]);
var inst_37147 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37127);
var state_37451__$1 = state_37451;
var statearr_37462_37695 = state_37451__$1;
(statearr_37462_37695[(2)] = inst_37147);

(statearr_37462_37695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (72))){
var inst_37242 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37463_37696 = state_37451__$1;
(statearr_37463_37696[(2)] = inst_37242);

(statearr_37463_37696[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (58))){
var inst_37193 = (state_37451[(8)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(61),inst_37193);
} else {
if((state_val_37452 === (60))){
var inst_37222 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37464_37697 = state_37451__$1;
(statearr_37464_37697[(2)] = inst_37222);

(statearr_37464_37697[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (27))){
var inst_37143 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37465_37698 = state_37451__$1;
(statearr_37465_37698[(2)] = inst_37143);

(statearr_37465_37698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (1))){
var inst_37093 = advenjure.utils.find_item.call(null,game_state,item1_name);
var inst_37094 = inst_37093;
var state_37451__$1 = (function (){var statearr_37466 = state_37451;
(statearr_37466[(10)] = inst_37094);

return statearr_37466;
})();
var statearr_37467_37699 = state_37451__$1;
(statearr_37467_37699[(2)] = null);

(statearr_37467_37699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (69))){
var inst_37244 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37468_37700 = state_37451__$1;
(statearr_37468_37700[(2)] = inst_37244);

(statearr_37468_37700[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (101))){
var inst_37290 = (state_37451[(11)]);
var inst_37312 = advenjure.utils.say.call(null,inst_37290);
var state_37451__$1 = state_37451;
var statearr_37469_37701 = state_37451__$1;
(statearr_37469_37701[(2)] = inst_37312);

(statearr_37469_37701[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (24))){
var inst_37145 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37470_37702 = state_37451__$1;
(statearr_37470_37702[(2)] = inst_37145);

(statearr_37470_37702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (102))){
var inst_37290 = (state_37451[(11)]);
var inst_37314 = inst_37290 === false;
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37314)){
var statearr_37471_37703 = state_37451__$1;
(statearr_37471_37703[(1)] = (104));

} else {
var statearr_37472_37704 = state_37451__$1;
(statearr_37472_37704[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (55))){
var inst_37193 = (state_37451[(8)]);
var inst_37206 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37193);
var state_37451__$1 = state_37451;
var statearr_37473_37705 = state_37451__$1;
(statearr_37473_37705[(2)] = inst_37206);

(statearr_37473_37705[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (85))){
var inst_37259 = (state_37451[(12)]);
var inst_37272 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37259);
var state_37451__$1 = state_37451;
var statearr_37474_37706 = state_37451__$1;
(statearr_37474_37706[(2)] = inst_37272);

(statearr_37474_37706[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (39))){
var inst_37178 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37475_37707 = state_37451__$1;
(statearr_37475_37707[(2)] = inst_37178);

(statearr_37475_37707[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (88))){
var inst_37259 = (state_37451[(12)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(91),inst_37259);
} else {
if((state_val_37452 === (46))){
var inst_37185 = (state_37451[(2)]);
var inst_37160 = inst_37185;
var state_37451__$1 = (function (){var statearr_37476 = state_37451;
(statearr_37476[(13)] = inst_37160);

return statearr_37476;
})();
var statearr_37477_37708 = state_37451__$1;
(statearr_37477_37708[(2)] = null);

(statearr_37477_37708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (4))){
var inst_37094 = (state_37451[(10)]);
var inst_37100 = inst_37094.cljs$core$async$impl$protocols$ReadPort$;
var inst_37101 = (false) || (inst_37100);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37101)){
var statearr_37478_37709 = state_37451__$1;
(statearr_37478_37709[(1)] = (7));

} else {
var statearr_37479_37710 = state_37451__$1;
(statearr_37479_37710[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (77))){
var inst_37259 = (state_37451[(12)]);
var inst_37262 = (inst_37259 == null);
var inst_37263 = cljs.core.not.call(null,inst_37262);
var state_37451__$1 = state_37451;
if(inst_37263){
var statearr_37480_37711 = state_37451__$1;
(statearr_37480_37711[(1)] = (79));

} else {
var statearr_37481_37712 = state_37451__$1;
(statearr_37481_37712[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (106))){
var inst_37441 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37482_37713 = state_37451__$1;
(statearr_37482_37713[(2)] = inst_37441);

(statearr_37482_37713[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (95))){
var inst_37125 = (state_37451[(14)]);
var inst_37301 = advenjure.verbs.ask_ambiguous.call(null,item1_name,inst_37125);
var inst_37302 = advenjure.utils.say.call(null,inst_37301);
var state_37451__$1 = state_37451;
var statearr_37483_37714 = state_37451__$1;
(statearr_37483_37714[(2)] = inst_37302);

(statearr_37483_37714[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (54))){
var inst_37211 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37484_37715 = state_37451__$1;
(statearr_37484_37715[(2)] = inst_37211);

(statearr_37484_37715[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (92))){
var inst_37295 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_37296 = advenjure.utils.say.call(null,inst_37295);
var state_37451__$1 = state_37451;
var statearr_37485_37716 = state_37451__$1;
(statearr_37485_37716[(2)] = inst_37296);

(statearr_37485_37716[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (104))){
var inst_37316 = [cljs.core.str("I couldn't "),cljs.core.str(verb_name),cljs.core.str(" that.")].join('');
var inst_37317 = advenjure.utils.say.call(null,inst_37316);
var state_37451__$1 = state_37451;
var statearr_37486_37717 = state_37451__$1;
(statearr_37486_37717[(2)] = inst_37317);

(statearr_37486_37717[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (15))){
var inst_37123 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37487_37718 = state_37451__$1;
(statearr_37487_37718[(2)] = inst_37123);

(statearr_37487_37718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (48))){
var inst_37158 = (state_37451[(15)]);
var inst_37224 = (state_37451[(2)]);
var inst_37225 = verb_kw.call(null,inst_37158);
var inst_37226 = inst_37225;
var state_37451__$1 = (function (){var statearr_37488 = state_37451;
(statearr_37488[(7)] = inst_37226);

(statearr_37488[(16)] = inst_37224);

return statearr_37488;
})();
var statearr_37489_37719 = state_37451__$1;
(statearr_37489_37719[(2)] = null);

(statearr_37489_37719[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (50))){
var inst_37193 = (state_37451[(8)]);
var inst_37213 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37193);
var state_37451__$1 = state_37451;
var statearr_37490_37720 = state_37451__$1;
(statearr_37490_37720[(2)] = inst_37213);

(statearr_37490_37720[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (75))){
var inst_37255 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37491_37721 = state_37451__$1;
(statearr_37491_37721[(2)] = inst_37255);

(statearr_37491_37721[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (99))){
var inst_37290 = (state_37451[(11)]);
var inst_37310 = typeof inst_37290 === 'string';
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37310)){
var statearr_37492_37722 = state_37451__$1;
(statearr_37492_37722[(1)] = (101));

} else {
var statearr_37493_37723 = state_37451__$1;
(statearr_37493_37723[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (21))){
var inst_37149 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37149)){
var statearr_37494_37724 = state_37451__$1;
(statearr_37494_37724[(1)] = (28));

} else {
var statearr_37495_37725 = state_37451__$1;
(statearr_37495_37725[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (31))){
var inst_37152 = (state_37451[(2)]);
var inst_37127 = inst_37152;
var state_37451__$1 = (function (){var statearr_37496 = state_37451;
(statearr_37496[(9)] = inst_37127);

return statearr_37496;
})();
var statearr_37497_37726 = state_37451__$1;
(statearr_37497_37726[(2)] = null);

(statearr_37497_37726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (113))){
var inst_37290 = (state_37451[(11)]);
var inst_37125 = (state_37451[(14)]);
var inst_37158 = (state_37451[(15)]);
var inst_37224 = (state_37451[(16)]);
var inst_37191 = (state_37451[(17)]);
var inst_37257 = (state_37451[(18)]);
var inst_37432 = cljs.core.async.chan.call(null,(1));
var inst_37433 = (function (){var items1 = inst_37125;
var item1 = inst_37158;
var items2 = inst_37191;
var item2 = inst_37224;
var conditions = inst_37257;
var value = inst_37290;
var c__24326__auto____$1 = inst_37432;
return ((function (items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function (state_37430){
var state_val_37431 = (state_37430[(1)]);
if((state_val_37431 === (7))){
var state_37430__$1 = state_37430;
var statearr_37498_37727 = state_37430__$1;
(statearr_37498_37727[(2)] = true);

(statearr_37498_37727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (20))){
var inst_37363 = (state_37430[(7)]);
var inst_37383 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37363);
var state_37430__$1 = state_37430;
var statearr_37499_37728 = state_37430__$1;
(statearr_37499_37728[(2)] = inst_37383);

(statearr_37499_37728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (27))){
var inst_37379 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37500_37729 = state_37430__$1;
(statearr_37500_37729[(2)] = inst_37379);

(statearr_37500_37729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (1))){
var inst_37329 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item1,item2);
var inst_37330 = inst_37329;
var state_37430__$1 = (function (){var statearr_37501 = state_37430;
(statearr_37501[(8)] = inst_37330);

return statearr_37501;
})();
var statearr_37502_37730 = state_37430__$1;
(statearr_37502_37730[(2)] = null);

(statearr_37502_37730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (24))){
var inst_37381 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37503_37731 = state_37430__$1;
(statearr_37503_37731[(2)] = inst_37381);

(statearr_37503_37731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (39))){
var inst_37414 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37504_37732 = state_37430__$1;
(statearr_37504_37732[(2)] = inst_37414);

(statearr_37504_37732[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (46))){
var inst_37421 = (state_37430[(2)]);
var inst_37396 = inst_37421;
var state_37430__$1 = (function (){var statearr_37505 = state_37430;
(statearr_37505[(9)] = inst_37396);

return statearr_37505;
})();
var statearr_37506_37733 = state_37430__$1;
(statearr_37506_37733[(2)] = null);

(statearr_37506_37733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (4))){
var inst_37330 = (state_37430[(8)]);
var inst_37336 = inst_37330.cljs$core$async$impl$protocols$ReadPort$;
var inst_37337 = (false) || (inst_37336);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37337)){
var statearr_37507_37734 = state_37430__$1;
(statearr_37507_37734[(1)] = (7));

} else {
var statearr_37508_37735 = state_37430__$1;
(statearr_37508_37735[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (15))){
var inst_37359 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37509_37736 = state_37430__$1;
(statearr_37509_37736[(2)] = inst_37359);

(statearr_37509_37736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (21))){
var inst_37385 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37385)){
var statearr_37510_37737 = state_37430__$1;
(statearr_37510_37737[(1)] = (28));

} else {
var statearr_37511_37738 = state_37430__$1;
(statearr_37511_37738[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (31))){
var inst_37388 = (state_37430[(2)]);
var inst_37363 = inst_37388;
var state_37430__$1 = (function (){var statearr_37512 = state_37430;
(statearr_37512[(7)] = inst_37363);

return statearr_37512;
})();
var statearr_37513_37739 = state_37430__$1;
(statearr_37513_37739[(2)] = null);

(statearr_37513_37739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (32))){
var inst_37396 = (state_37430[(9)]);
var inst_37399 = (inst_37396 == null);
var inst_37400 = cljs.core.not.call(null,inst_37399);
var state_37430__$1 = state_37430;
if(inst_37400){
var statearr_37514_37740 = state_37430__$1;
(statearr_37514_37740[(1)] = (34));

} else {
var statearr_37515_37741 = state_37430__$1;
(statearr_37515_37741[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (40))){
var inst_37396 = (state_37430[(9)]);
var inst_37409 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37396);
var state_37430__$1 = state_37430;
var statearr_37516_37742 = state_37430__$1;
(statearr_37516_37742[(2)] = inst_37409);

(statearr_37516_37742[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (33))){
var inst_37427 = (state_37430[(2)]);
var inst_37428 = advenjure.hooks.execute.call(null,inst_37427,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item1,item2);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37430__$1,inst_37428);
} else {
if((state_val_37431 === (13))){
var inst_37330 = (state_37430[(8)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37430__$1,(16),inst_37330);
} else {
if((state_val_37431 === (22))){
var state_37430__$1 = state_37430;
var statearr_37517_37743 = state_37430__$1;
(statearr_37517_37743[(2)] = true);

(statearr_37517_37743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (36))){
var inst_37418 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37418)){
var statearr_37518_37744 = state_37430__$1;
(statearr_37518_37744[(1)] = (43));

} else {
var statearr_37519_37745 = state_37430__$1;
(statearr_37519_37745[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (41))){
var state_37430__$1 = state_37430;
var statearr_37520_37746 = state_37430__$1;
(statearr_37520_37746[(2)] = false);

(statearr_37520_37746[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (43))){
var inst_37396 = (state_37430[(9)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37430__$1,(46),inst_37396);
} else {
if((state_val_37431 === (29))){
var inst_37363 = (state_37430[(7)]);
var state_37430__$1 = state_37430;
var statearr_37521_37747 = state_37430__$1;
(statearr_37521_37747[(2)] = inst_37363);

(statearr_37521_37747[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (44))){
var inst_37396 = (state_37430[(9)]);
var state_37430__$1 = state_37430;
var statearr_37522_37748 = state_37430__$1;
(statearr_37522_37748[(2)] = inst_37396);

(statearr_37522_37748[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (6))){
var inst_37352 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37352)){
var statearr_37523_37749 = state_37430__$1;
(statearr_37523_37749[(1)] = (13));

} else {
var statearr_37524_37750 = state_37430__$1;
(statearr_37524_37750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (28))){
var inst_37363 = (state_37430[(7)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37430__$1,(31),inst_37363);
} else {
if((state_val_37431 === (25))){
var inst_37363 = (state_37430[(7)]);
var inst_37376 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37363);
var state_37430__$1 = state_37430;
var statearr_37525_37751 = state_37430__$1;
(statearr_37525_37751[(2)] = inst_37376);

(statearr_37525_37751[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (34))){
var inst_37396 = (state_37430[(9)]);
var inst_37402 = inst_37396.cljs$core$async$impl$protocols$ReadPort$;
var inst_37403 = (false) || (inst_37402);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37403)){
var statearr_37526_37752 = state_37430__$1;
(statearr_37526_37752[(1)] = (37));

} else {
var statearr_37527_37753 = state_37430__$1;
(statearr_37527_37753[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (17))){
var inst_37363 = (state_37430[(7)]);
var inst_37366 = (inst_37363 == null);
var inst_37367 = cljs.core.not.call(null,inst_37366);
var state_37430__$1 = state_37430;
if(inst_37367){
var statearr_37528_37754 = state_37430__$1;
(statearr_37528_37754[(1)] = (19));

} else {
var statearr_37529_37755 = state_37430__$1;
(statearr_37529_37755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (3))){
var inst_37361 = (state_37430[(10)]);
var inst_37361__$1 = (state_37430[(2)]);
var inst_37362 = handler.call(null,inst_37361__$1,item1,item2);
var inst_37363 = inst_37362;
var state_37430__$1 = (function (){var statearr_37530 = state_37430;
(statearr_37530[(10)] = inst_37361__$1);

(statearr_37530[(7)] = inst_37363);

return statearr_37530;
})();
var statearr_37531_37756 = state_37430__$1;
(statearr_37531_37756[(2)] = null);

(statearr_37531_37756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (12))){
var inst_37346 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37532_37757 = state_37430__$1;
(statearr_37532_37757[(2)] = inst_37346);

(statearr_37532_37757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (2))){
var inst_37330 = (state_37430[(8)]);
var inst_37333 = (inst_37330 == null);
var inst_37334 = cljs.core.not.call(null,inst_37333);
var state_37430__$1 = state_37430;
if(inst_37334){
var statearr_37533_37758 = state_37430__$1;
(statearr_37533_37758[(1)] = (4));

} else {
var statearr_37534_37759 = state_37430__$1;
(statearr_37534_37759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (23))){
var inst_37363 = (state_37430[(7)]);
var inst_37373 = inst_37363.cljs$lang$protocol_mask$partition$;
var inst_37374 = (!inst_37373);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37374)){
var statearr_37535_37760 = state_37430__$1;
(statearr_37535_37760[(1)] = (25));

} else {
var statearr_37536_37761 = state_37430__$1;
(statearr_37536_37761[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (35))){
var inst_37396 = (state_37430[(9)]);
var inst_37416 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37396);
var state_37430__$1 = state_37430;
var statearr_37537_37762 = state_37430__$1;
(statearr_37537_37762[(2)] = inst_37416);

(statearr_37537_37762[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (19))){
var inst_37363 = (state_37430[(7)]);
var inst_37369 = inst_37363.cljs$core$async$impl$protocols$ReadPort$;
var inst_37370 = (false) || (inst_37369);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37370)){
var statearr_37538_37763 = state_37430__$1;
(statearr_37538_37763[(1)] = (22));

} else {
var statearr_37539_37764 = state_37430__$1;
(statearr_37539_37764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (11))){
var state_37430__$1 = state_37430;
var statearr_37540_37765 = state_37430__$1;
(statearr_37540_37765[(2)] = false);

(statearr_37540_37765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (9))){
var inst_37348 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37541_37766 = state_37430__$1;
(statearr_37541_37766[(2)] = inst_37348);

(statearr_37541_37766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (5))){
var inst_37330 = (state_37430[(8)]);
var inst_37350 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37330);
var state_37430__$1 = state_37430;
var statearr_37542_37767 = state_37430__$1;
(statearr_37542_37767[(2)] = inst_37350);

(statearr_37542_37767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (14))){
var inst_37330 = (state_37430[(8)]);
var state_37430__$1 = state_37430;
var statearr_37543_37768 = state_37430__$1;
(statearr_37543_37768[(2)] = inst_37330);

(statearr_37543_37768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (45))){
var inst_37425 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37544_37769 = state_37430__$1;
(statearr_37544_37769[(2)] = inst_37425);

(statearr_37544_37769[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (26))){
var state_37430__$1 = state_37430;
var statearr_37545_37770 = state_37430__$1;
(statearr_37545_37770[(2)] = false);

(statearr_37545_37770[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (16))){
var inst_37355 = (state_37430[(2)]);
var inst_37330 = inst_37355;
var state_37430__$1 = (function (){var statearr_37546 = state_37430;
(statearr_37546[(8)] = inst_37330);

return statearr_37546;
})();
var statearr_37547_37771 = state_37430__$1;
(statearr_37547_37771[(2)] = null);

(statearr_37547_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (38))){
var inst_37396 = (state_37430[(9)]);
var inst_37406 = inst_37396.cljs$lang$protocol_mask$partition$;
var inst_37407 = (!inst_37406);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37407)){
var statearr_37548_37772 = state_37430__$1;
(statearr_37548_37772[(1)] = (40));

} else {
var statearr_37549_37773 = state_37430__$1;
(statearr_37549_37773[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (30))){
var inst_37392 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37550_37774 = state_37430__$1;
(statearr_37550_37774[(2)] = inst_37392);

(statearr_37550_37774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (10))){
var inst_37330 = (state_37430[(8)]);
var inst_37343 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37330);
var state_37430__$1 = state_37430;
var statearr_37551_37775 = state_37430__$1;
(statearr_37551_37775[(2)] = inst_37343);

(statearr_37551_37775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (18))){
var inst_37361 = (state_37430[(10)]);
var inst_37394 = (state_37430[(2)]);
var inst_37395 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_37361,inst_37394);
var inst_37396 = inst_37395;
var state_37430__$1 = (function (){var statearr_37552 = state_37430;
(statearr_37552[(9)] = inst_37396);

return statearr_37552;
})();
var statearr_37553_37776 = state_37430__$1;
(statearr_37553_37776[(2)] = null);

(statearr_37553_37776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (42))){
var inst_37412 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37554_37777 = state_37430__$1;
(statearr_37554_37777[(2)] = inst_37412);

(statearr_37554_37777[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (37))){
var state_37430__$1 = state_37430;
var statearr_37555_37778 = state_37430__$1;
(statearr_37555_37778[(2)] = true);

(statearr_37555_37778[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (8))){
var inst_37330 = (state_37430[(8)]);
var inst_37340 = inst_37330.cljs$lang$protocol_mask$partition$;
var inst_37341 = (!inst_37340);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37341)){
var statearr_37556_37779 = state_37430__$1;
(statearr_37556_37779[(1)] = (10));

} else {
var statearr_37557_37780 = state_37430__$1;
(statearr_37557_37780[(1)] = (11));

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
});})(items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required))
;
return ((function (switch__24055__auto__,items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_37561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37561[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_37561[(1)] = (1));

return statearr_37561;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_37430){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_37430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e37562){if((e37562 instanceof Object)){
var ex__24059__auto__ = e37562;
var statearr_37563_37781 = state_37430;
(statearr_37563_37781[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37782 = state_37430;
state_37430 = G__37782;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_37430){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_37430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required))
})();
var state__24328__auto__ = (function (){var statearr_37564 = f__24327__auto__.call(null);
(statearr_37564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto____$1);

return statearr_37564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});
;})(items1,item1,items2,item2,conditions,value,c__24326__auto____$1,inst_37290,inst_37125,inst_37158,inst_37224,inst_37191,inst_37257,inst_37432,state_val_37452,c__24326__auto__,map__37091,map__37091__$1,kw_required))
})();
var inst_37434 = cljs.core.async.impl.dispatch.run.call(null,inst_37433);
var state_37451__$1 = (function (){var statearr_37565 = state_37451;
(statearr_37565[(19)] = inst_37434);

return statearr_37565;
})();
var statearr_37566_37783 = state_37451__$1;
(statearr_37566_37783[(2)] = inst_37432);

(statearr_37566_37783[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (32))){
var inst_37160 = (state_37451[(13)]);
var inst_37163 = (inst_37160 == null);
var inst_37164 = cljs.core.not.call(null,inst_37163);
var state_37451__$1 = state_37451;
if(inst_37164){
var statearr_37567_37784 = state_37451__$1;
(statearr_37567_37784[(1)] = (34));

} else {
var statearr_37568_37785 = state_37451__$1;
(statearr_37568_37785[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (40))){
var inst_37160 = (state_37451[(13)]);
var inst_37173 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37160);
var state_37451__$1 = state_37451;
var statearr_37569_37786 = state_37451__$1;
(statearr_37569_37786[(2)] = inst_37173);

(statearr_37569_37786[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (91))){
var inst_37284 = (state_37451[(2)]);
var inst_37259 = inst_37284;
var state_37451__$1 = (function (){var statearr_37570 = state_37451;
(statearr_37570[(12)] = inst_37259);

return statearr_37570;
})();
var statearr_37571_37787 = state_37451__$1;
(statearr_37571_37787[(2)] = null);

(statearr_37571_37787[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (108))){
var state_37451__$1 = state_37451;
var statearr_37572_37788 = state_37451__$1;
(statearr_37572_37788[(2)] = kw_required);

(statearr_37572_37788[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (56))){
var state_37451__$1 = state_37451;
var statearr_37573_37789 = state_37451__$1;
(statearr_37573_37789[(2)] = false);

(statearr_37573_37789[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (33))){
var inst_37191 = (state_37451[(17)]);
var inst_37191__$1 = (state_37451[(2)]);
var inst_37192 = cljs.core.first.call(null,inst_37191__$1);
var inst_37193 = inst_37192;
var state_37451__$1 = (function (){var statearr_37574 = state_37451;
(statearr_37574[(17)] = inst_37191__$1);

(statearr_37574[(8)] = inst_37193);

return statearr_37574;
})();
var statearr_37575_37790 = state_37451__$1;
(statearr_37575_37790[(2)] = null);

(statearr_37575_37790[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (13))){
var inst_37094 = (state_37451[(10)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(16),inst_37094);
} else {
if((state_val_37452 === (22))){
var state_37451__$1 = state_37451;
var statearr_37576_37791 = state_37451__$1;
(statearr_37576_37791[(2)] = true);

(statearr_37576_37791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (90))){
var inst_37288 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37577_37792 = state_37451__$1;
(statearr_37577_37792[(2)] = inst_37288);

(statearr_37577_37792[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (109))){
var inst_37323 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37323)){
var statearr_37578_37793 = state_37451__$1;
(statearr_37578_37793[(1)] = (110));

} else {
var statearr_37579_37794 = state_37451__$1;
(statearr_37579_37794[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (36))){
var inst_37182 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37182)){
var statearr_37580_37795 = state_37451__$1;
(statearr_37580_37795[(1)] = (43));

} else {
var statearr_37581_37796 = state_37451__$1;
(statearr_37581_37796[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (41))){
var state_37451__$1 = state_37451;
var statearr_37582_37797 = state_37451__$1;
(statearr_37582_37797[(2)] = false);

(statearr_37582_37797[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (89))){
var inst_37259 = (state_37451[(12)]);
var state_37451__$1 = state_37451;
var statearr_37583_37798 = state_37451__$1;
(statearr_37583_37798[(2)] = inst_37259);

(statearr_37583_37798[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (100))){
var inst_37445 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37584_37799 = state_37451__$1;
(statearr_37584_37799[(2)] = inst_37445);

(statearr_37584_37799[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (43))){
var inst_37160 = (state_37451[(13)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(46),inst_37160);
} else {
if((state_val_37452 === (61))){
var inst_37218 = (state_37451[(2)]);
var inst_37193 = inst_37218;
var state_37451__$1 = (function (){var statearr_37585 = state_37451;
(statearr_37585[(8)] = inst_37193);

return statearr_37585;
})();
var statearr_37586_37800 = state_37451__$1;
(statearr_37586_37800[(2)] = null);

(statearr_37586_37800[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (29))){
var inst_37127 = (state_37451[(9)]);
var state_37451__$1 = state_37451;
var statearr_37587_37801 = state_37451__$1;
(statearr_37587_37801[(2)] = inst_37127);

(statearr_37587_37801[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (44))){
var inst_37160 = (state_37451[(13)]);
var state_37451__$1 = state_37451;
var statearr_37588_37802 = state_37451__$1;
(statearr_37588_37802[(2)] = inst_37160);

(statearr_37588_37802[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (93))){
var inst_37125 = (state_37451[(14)]);
var inst_37298 = cljs.core.count.call(null,inst_37125);
var inst_37299 = (inst_37298 > (1));
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37299)){
var statearr_37589_37803 = state_37451__$1;
(statearr_37589_37803[(1)] = (95));

} else {
var statearr_37590_37804 = state_37451__$1;
(statearr_37590_37804[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (6))){
var inst_37116 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37116)){
var statearr_37591_37805 = state_37451__$1;
(statearr_37591_37805[(1)] = (13));

} else {
var statearr_37592_37806 = state_37451__$1;
(statearr_37592_37806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (111))){
var state_37451__$1 = state_37451;
var statearr_37593_37807 = state_37451__$1;
(statearr_37593_37807[(1)] = (113));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (28))){
var inst_37127 = (state_37451[(9)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(31),inst_37127);
} else {
if((state_val_37452 === (64))){
var inst_37226 = (state_37451[(7)]);
var inst_37232 = inst_37226.cljs$core$async$impl$protocols$ReadPort$;
var inst_37233 = (false) || (inst_37232);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37233)){
var statearr_37595_37808 = state_37451__$1;
(statearr_37595_37808[(1)] = (67));

} else {
var statearr_37596_37809 = state_37451__$1;
(statearr_37596_37809[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (103))){
var inst_37443 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37597_37810 = state_37451__$1;
(statearr_37597_37810[(2)] = inst_37443);

(statearr_37597_37810[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (51))){
var inst_37215 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37215)){
var statearr_37598_37811 = state_37451__$1;
(statearr_37598_37811[(1)] = (58));

} else {
var statearr_37599_37812 = state_37451__$1;
(statearr_37599_37812[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (25))){
var inst_37127 = (state_37451[(9)]);
var inst_37140 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37127);
var state_37451__$1 = state_37451;
var statearr_37600_37813 = state_37451__$1;
(statearr_37600_37813[(2)] = inst_37140);

(statearr_37600_37813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (34))){
var inst_37160 = (state_37451[(13)]);
var inst_37166 = inst_37160.cljs$core$async$impl$protocols$ReadPort$;
var inst_37167 = (false) || (inst_37166);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37167)){
var statearr_37601_37814 = state_37451__$1;
(statearr_37601_37814[(1)] = (37));

} else {
var statearr_37602_37815 = state_37451__$1;
(statearr_37602_37815[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (17))){
var inst_37127 = (state_37451[(9)]);
var inst_37130 = (inst_37127 == null);
var inst_37131 = cljs.core.not.call(null,inst_37130);
var state_37451__$1 = state_37451;
if(inst_37131){
var statearr_37603_37816 = state_37451__$1;
(statearr_37603_37816[(1)] = (19));

} else {
var statearr_37604_37817 = state_37451__$1;
(statearr_37604_37817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (3))){
var inst_37125 = (state_37451[(14)]);
var inst_37125__$1 = (state_37451[(2)]);
var inst_37126 = cljs.core.first.call(null,inst_37125__$1);
var inst_37127 = inst_37126;
var state_37451__$1 = (function (){var statearr_37605 = state_37451;
(statearr_37605[(14)] = inst_37125__$1);

(statearr_37605[(9)] = inst_37127);

return statearr_37605;
})();
var statearr_37606_37818 = state_37451__$1;
(statearr_37606_37818[(2)] = null);

(statearr_37606_37818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (12))){
var inst_37110 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37607_37819 = state_37451__$1;
(statearr_37607_37819[(2)] = inst_37110);

(statearr_37607_37819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (2))){
var inst_37094 = (state_37451[(10)]);
var inst_37097 = (inst_37094 == null);
var inst_37098 = cljs.core.not.call(null,inst_37097);
var state_37451__$1 = state_37451;
if(inst_37098){
var statearr_37608_37820 = state_37451__$1;
(statearr_37608_37820[(1)] = (4));

} else {
var statearr_37609_37821 = state_37451__$1;
(statearr_37609_37821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (66))){
var inst_37248 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37248)){
var statearr_37610_37822 = state_37451__$1;
(statearr_37610_37822[(1)] = (73));

} else {
var statearr_37611_37823 = state_37451__$1;
(statearr_37611_37823[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (107))){
var inst_37290 = (state_37451[(11)]);
var inst_37320 = (inst_37290 == null);
var state_37451__$1 = state_37451;
var statearr_37612_37824 = state_37451__$1;
(statearr_37612_37824[(2)] = inst_37320);

(statearr_37612_37824[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (23))){
var inst_37127 = (state_37451[(9)]);
var inst_37137 = inst_37127.cljs$lang$protocol_mask$partition$;
var inst_37138 = (!inst_37137);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37138)){
var statearr_37613_37825 = state_37451__$1;
(statearr_37613_37825[(1)] = (25));

} else {
var statearr_37614_37826 = state_37451__$1;
(statearr_37614_37826[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (47))){
var inst_37193 = (state_37451[(8)]);
var inst_37196 = (inst_37193 == null);
var inst_37197 = cljs.core.not.call(null,inst_37196);
var state_37451__$1 = state_37451;
if(inst_37197){
var statearr_37615_37827 = state_37451__$1;
(statearr_37615_37827[(1)] = (49));

} else {
var statearr_37616_37828 = state_37451__$1;
(statearr_37616_37828[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (35))){
var inst_37160 = (state_37451[(13)]);
var inst_37180 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37160);
var state_37451__$1 = state_37451;
var statearr_37617_37829 = state_37451__$1;
(statearr_37617_37829[(2)] = inst_37180);

(statearr_37617_37829[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (82))){
var state_37451__$1 = state_37451;
var statearr_37618_37830 = state_37451__$1;
(statearr_37618_37830[(2)] = true);

(statearr_37618_37830[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (76))){
var inst_37251 = (state_37451[(2)]);
var inst_37226 = inst_37251;
var state_37451__$1 = (function (){var statearr_37619 = state_37451;
(statearr_37619[(7)] = inst_37226);

return statearr_37619;
})();
var statearr_37620_37831 = state_37451__$1;
(statearr_37620_37831[(2)] = null);

(statearr_37620_37831[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (97))){
var inst_37447 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37621_37832 = state_37451__$1;
(statearr_37621_37832[(2)] = inst_37447);

(statearr_37621_37832[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (19))){
var inst_37127 = (state_37451[(9)]);
var inst_37133 = inst_37127.cljs$core$async$impl$protocols$ReadPort$;
var inst_37134 = (false) || (inst_37133);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37134)){
var statearr_37622_37833 = state_37451__$1;
(statearr_37622_37833[(1)] = (22));

} else {
var statearr_37623_37834 = state_37451__$1;
(statearr_37623_37834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (57))){
var inst_37209 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37624_37835 = state_37451__$1;
(statearr_37624_37835[(2)] = inst_37209);

(statearr_37624_37835[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (68))){
var inst_37226 = (state_37451[(7)]);
var inst_37236 = inst_37226.cljs$lang$protocol_mask$partition$;
var inst_37237 = (!inst_37236);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37237)){
var statearr_37625_37836 = state_37451__$1;
(statearr_37625_37836[(1)] = (70));

} else {
var statearr_37626_37837 = state_37451__$1;
(statearr_37626_37837[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (11))){
var state_37451__$1 = state_37451;
var statearr_37627_37838 = state_37451__$1;
(statearr_37627_37838[(2)] = false);

(statearr_37627_37838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (115))){
var inst_37437 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37628_37839 = state_37451__$1;
(statearr_37628_37839[(2)] = inst_37437);

(statearr_37628_37839[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (9))){
var inst_37112 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37629_37840 = state_37451__$1;
(statearr_37629_37840[(2)] = inst_37112);

(statearr_37629_37840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (5))){
var inst_37094 = (state_37451[(10)]);
var inst_37114 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37094);
var state_37451__$1 = state_37451;
var statearr_37630_37841 = state_37451__$1;
(statearr_37630_37841[(2)] = inst_37114);

(statearr_37630_37841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (112))){
var inst_37439 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37631_37842 = state_37451__$1;
(statearr_37631_37842[(2)] = inst_37439);

(statearr_37631_37842[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (83))){
var inst_37259 = (state_37451[(12)]);
var inst_37269 = inst_37259.cljs$lang$protocol_mask$partition$;
var inst_37270 = (!inst_37269);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37270)){
var statearr_37632_37843 = state_37451__$1;
(statearr_37632_37843[(1)] = (85));

} else {
var statearr_37633_37844 = state_37451__$1;
(statearr_37633_37844[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (14))){
var inst_37094 = (state_37451[(10)]);
var state_37451__$1 = state_37451;
var statearr_37634_37845 = state_37451__$1;
(statearr_37634_37845[(2)] = inst_37094);

(statearr_37634_37845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (45))){
var inst_37189 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37635_37846 = state_37451__$1;
(statearr_37635_37846[(2)] = inst_37189);

(statearr_37635_37846[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (53))){
var inst_37193 = (state_37451[(8)]);
var inst_37203 = inst_37193.cljs$lang$protocol_mask$partition$;
var inst_37204 = (!inst_37203);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37204)){
var statearr_37636_37847 = state_37451__$1;
(statearr_37636_37847[(1)] = (55));

} else {
var statearr_37637_37848 = state_37451__$1;
(statearr_37637_37848[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (78))){
var inst_37125 = (state_37451[(14)]);
var inst_37191 = (state_37451[(17)]);
var inst_37290 = (state_37451[(2)]);
var inst_37291 = cljs.core.empty_QMARK_.call(null,inst_37125);
var inst_37292 = cljs.core.empty_QMARK_.call(null,inst_37191);
var inst_37293 = (inst_37291) || (inst_37292);
var state_37451__$1 = (function (){var statearr_37638 = state_37451;
(statearr_37638[(11)] = inst_37290);

return statearr_37638;
})();
if(cljs.core.truth_(inst_37293)){
var statearr_37639_37849 = state_37451__$1;
(statearr_37639_37849[(1)] = (92));

} else {
var statearr_37640_37850 = state_37451__$1;
(statearr_37640_37850[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (26))){
var state_37451__$1 = state_37451;
var statearr_37641_37851 = state_37451__$1;
(statearr_37641_37851[(2)] = false);

(statearr_37641_37851[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (16))){
var inst_37119 = (state_37451[(2)]);
var inst_37094 = inst_37119;
var state_37451__$1 = (function (){var statearr_37642 = state_37451;
(statearr_37642[(10)] = inst_37094);

return statearr_37642;
})();
var statearr_37643_37852 = state_37451__$1;
(statearr_37643_37852[(2)] = null);

(statearr_37643_37852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (81))){
var inst_37281 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37281)){
var statearr_37644_37853 = state_37451__$1;
(statearr_37644_37853[(1)] = (88));

} else {
var statearr_37645_37854 = state_37451__$1;
(statearr_37645_37854[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (79))){
var inst_37259 = (state_37451[(12)]);
var inst_37265 = inst_37259.cljs$core$async$impl$protocols$ReadPort$;
var inst_37266 = (false) || (inst_37265);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37266)){
var statearr_37646_37855 = state_37451__$1;
(statearr_37646_37855[(1)] = (82));

} else {
var statearr_37647_37856 = state_37451__$1;
(statearr_37647_37856[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (38))){
var inst_37160 = (state_37451[(13)]);
var inst_37170 = inst_37160.cljs$lang$protocol_mask$partition$;
var inst_37171 = (!inst_37170);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37171)){
var statearr_37648_37857 = state_37451__$1;
(statearr_37648_37857[(1)] = (40));

} else {
var statearr_37649_37858 = state_37451__$1;
(statearr_37649_37858[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (98))){
var inst_37191 = (state_37451[(17)]);
var inst_37307 = advenjure.verbs.ask_ambiguous.call(null,item2_name,inst_37191);
var inst_37308 = advenjure.utils.say.call(null,inst_37307);
var state_37451__$1 = state_37451;
var statearr_37650_37859 = state_37451__$1;
(statearr_37650_37859[(2)] = inst_37308);

(statearr_37650_37859[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (87))){
var inst_37275 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37651_37860 = state_37451__$1;
(statearr_37651_37860[(2)] = inst_37275);

(statearr_37651_37860[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (30))){
var inst_37156 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37652_37861 = state_37451__$1;
(statearr_37652_37861[(2)] = inst_37156);

(statearr_37652_37861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (73))){
var inst_37226 = (state_37451[(7)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(76),inst_37226);
} else {
if((state_val_37452 === (96))){
var inst_37191 = (state_37451[(17)]);
var inst_37304 = cljs.core.count.call(null,inst_37191);
var inst_37305 = (inst_37304 > (1));
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37305)){
var statearr_37653_37862 = state_37451__$1;
(statearr_37653_37862[(1)] = (98));

} else {
var statearr_37654_37863 = state_37451__$1;
(statearr_37654_37863[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (10))){
var inst_37094 = (state_37451[(10)]);
var inst_37107 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37094);
var state_37451__$1 = state_37451;
var statearr_37655_37864 = state_37451__$1;
(statearr_37655_37864[(2)] = inst_37107);

(statearr_37655_37864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (18))){
var inst_37158 = (state_37451[(2)]);
var inst_37159 = advenjure.utils.find_item.call(null,game_state,item2_name);
var inst_37160 = inst_37159;
var state_37451__$1 = (function (){var statearr_37656 = state_37451;
(statearr_37656[(13)] = inst_37160);

(statearr_37656[(15)] = inst_37158);

return statearr_37656;
})();
var statearr_37657_37865 = state_37451__$1;
(statearr_37657_37865[(2)] = null);

(statearr_37657_37865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (105))){
var state_37451__$1 = state_37451;
if(cljs.core.truth_(kw_required)){
var statearr_37658_37866 = state_37451__$1;
(statearr_37658_37866[(1)] = (107));

} else {
var statearr_37659_37867 = state_37451__$1;
(statearr_37659_37867[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (52))){
var state_37451__$1 = state_37451;
var statearr_37660_37868 = state_37451__$1;
(statearr_37660_37868[(2)] = true);

(statearr_37660_37868[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (114))){
var state_37451__$1 = state_37451;
var statearr_37661_37869 = state_37451__$1;
(statearr_37661_37869[(2)] = null);

(statearr_37661_37869[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (67))){
var state_37451__$1 = state_37451;
var statearr_37662_37870 = state_37451__$1;
(statearr_37662_37870[(2)] = true);

(statearr_37662_37870[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (71))){
var state_37451__$1 = state_37451;
var statearr_37663_37871 = state_37451__$1;
(statearr_37663_37871[(2)] = false);

(statearr_37663_37871[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (42))){
var inst_37176 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37664_37872 = state_37451__$1;
(statearr_37664_37872[(2)] = inst_37176);

(statearr_37664_37872[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (80))){
var inst_37259 = (state_37451[(12)]);
var inst_37279 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37259);
var state_37451__$1 = state_37451;
var statearr_37665_37873 = state_37451__$1;
(statearr_37665_37873[(2)] = inst_37279);

(statearr_37665_37873[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (37))){
var state_37451__$1 = state_37451;
var statearr_37666_37874 = state_37451__$1;
(statearr_37666_37874[(2)] = true);

(statearr_37666_37874[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (63))){
var inst_37224 = (state_37451[(16)]);
var inst_37257 = (state_37451[(18)]);
var inst_37257__$1 = (state_37451[(2)]);
var inst_37258 = advenjure.hooks.eval_precondition.call(null,inst_37257__$1,game_state,inst_37224);
var inst_37259 = inst_37258;
var state_37451__$1 = (function (){var statearr_37667 = state_37451;
(statearr_37667[(12)] = inst_37259);

(statearr_37667[(18)] = inst_37257__$1);

return statearr_37667;
})();
var statearr_37668_37875 = state_37451__$1;
(statearr_37668_37875[(2)] = null);

(statearr_37668_37875[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (94))){
var inst_37449 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37451__$1,inst_37449);
} else {
if((state_val_37452 === (8))){
var inst_37094 = (state_37451[(10)]);
var inst_37104 = inst_37094.cljs$lang$protocol_mask$partition$;
var inst_37105 = (!inst_37104);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37105)){
var statearr_37669_37876 = state_37451__$1;
(statearr_37669_37876[(1)] = (10));

} else {
var statearr_37670_37877 = state_37451__$1;
(statearr_37670_37877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (49))){
var inst_37193 = (state_37451[(8)]);
var inst_37199 = inst_37193.cljs$core$async$impl$protocols$ReadPort$;
var inst_37200 = (false) || (inst_37199);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37200)){
var statearr_37671_37878 = state_37451__$1;
(statearr_37671_37878[(1)] = (52));

} else {
var statearr_37672_37879 = state_37451__$1;
(statearr_37672_37879[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (84))){
var inst_37277 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37673_37880 = state_37451__$1;
(statearr_37673_37880[(2)] = inst_37277);

(statearr_37673_37880[(1)] = (81));


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
});})(c__24326__auto__,map__37091,map__37091__$1,kw_required))
;
return ((function (switch__24055__auto__,c__24326__auto__,map__37091,map__37091__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_37677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37677[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_37677[(1)] = (1));

return statearr_37677;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_37451){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_37451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e37678){if((e37678 instanceof Object)){
var ex__24059__auto__ = e37678;
var statearr_37679_37881 = state_37451;
(statearr_37679_37881[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37882 = state_37451;
state_37451 = G__37882;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_37451){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_37451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,map__37091,map__37091__$1,kw_required))
})();
var state__24328__auto__ = (function (){var statearr_37680 = f__24327__auto__.call(null);
(statearr_37680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_37680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,map__37091,map__37091__$1,kw_required))
);

return c__24326__auto__;
});
G__37685 = function(game_state,item1_name,item2_name){
switch(arguments.length){
case 1:
return G__37685__1.call(this,game_state);
case 2:
return G__37685__2.call(this,game_state,item1_name);
case 3:
return G__37685__3.call(this,game_state,item1_name,item2_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37685.cljs$core$IFn$_invoke$arity$1 = G__37685__1;
G__37685.cljs$core$IFn$_invoke$arity$2 = G__37685__2;
G__37685.cljs$core$IFn$_invoke$arity$3 = G__37685__3;
return G__37685;
})()
;})(map__37091,map__37091__$1,kw_required))
});

advenjure.verbs.make_compound_item_handler.cljs$lang$applyTo = (function (seq37084){
var G__37085 = cljs.core.first.call(null,seq37084);
var seq37084__$1 = cljs.core.next.call(null,seq37084);
var G__37086 = cljs.core.first.call(null,seq37084__$1);
var seq37084__$2 = cljs.core.next.call(null,seq37084__$1);
var G__37087 = cljs.core.first.call(null,seq37084__$2);
var seq37084__$3 = cljs.core.next.call(null,seq37084__$2);
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__37085,G__37086,G__37087,seq37084__$3);
});

advenjure.verbs.make_compound_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * Change the location if direction is valid.
 */
advenjure.verbs.go = (function advenjure$verbs$go(var_args){
var args37883 = [];
var len__21530__auto___38058 = arguments.length;
var i__21531__auto___38059 = (0);
while(true){
if((i__21531__auto___38059 < len__21530__auto___38058)){
args37883.push((arguments[i__21531__auto___38059]));

var G__38060 = (i__21531__auto___38059 + (1));
i__21531__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var G__37885 = args37883.length;
switch (G__37885) {
case 1:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37883.length)].join('')));

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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,dir,temp__4655__auto__,current){
return (function (state_37983){
var state_val_37984 = (state_37983[(1)]);
if((state_val_37984 === (7))){
var state_37983__$1 = state_37983;
var statearr_37985_38062 = state_37983__$1;
(statearr_37985_38062[(2)] = true);

(statearr_37985_38062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (20))){
var inst_37925 = (state_37983[(7)]);
var inst_37925__$1 = new cljs.core.Keyword(null,"default-go","default-go",-2063089013).cljs$core$IFn$_invoke$arity$1(current);
var state_37983__$1 = (function (){var statearr_37986 = state_37983;
(statearr_37986[(7)] = inst_37925__$1);

return statearr_37986;
})();
if(cljs.core.truth_(inst_37925__$1)){
var statearr_37987_38063 = state_37983__$1;
(statearr_37987_38063[(1)] = (23));

} else {
var statearr_37988_38064 = state_37983__$1;
(statearr_37988_38064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (27))){
var state_37983__$1 = state_37983;
var statearr_37989_38065 = state_37983__$1;
(statearr_37989_38065[(2)] = null);

(statearr_37989_38065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (1))){
var inst_37886 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_37887 = inst_37886;
var state_37983__$1 = (function (){var statearr_37990 = state_37983;
(statearr_37990[(8)] = inst_37887);

return statearr_37990;
})();
var statearr_37991_38066 = state_37983__$1;
(statearr_37991_38066[(2)] = null);

(statearr_37991_38066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (24))){
var inst_37928 = advenjure.gettext.core._.call(null,"Couldn't go in that direction.");
var state_37983__$1 = state_37983;
var statearr_37992_38067 = state_37983__$1;
(statearr_37992_38067[(2)] = inst_37928);

(statearr_37992_38067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (4))){
var inst_37887 = (state_37983[(8)]);
var inst_37893 = inst_37887.cljs$core$async$impl$protocols$ReadPort$;
var inst_37894 = (false) || (inst_37893);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37894)){
var statearr_37993_38068 = state_37983__$1;
(statearr_37993_38068[(1)] = (7));

} else {
var statearr_37994_38069 = state_37983__$1;
(statearr_37994_38069[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (15))){
var inst_37916 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37995_38070 = state_37983__$1;
(statearr_37995_38070[(2)] = inst_37916);

(statearr_37995_38070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (21))){
var state_37983__$1 = state_37983;
var statearr_37996_38071 = state_37983__$1;
(statearr_37996_38071[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (13))){
var inst_37887 = (state_37983[(8)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37983__$1,(16),inst_37887);
} else {
if((state_val_37984 === (22))){
var inst_37979 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37998_38072 = state_37983__$1;
(statearr_37998_38072[(2)] = inst_37979);

(statearr_37998_38072[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (6))){
var inst_37909 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37909)){
var statearr_37999_38073 = state_37983__$1;
(statearr_37999_38073[(1)] = (13));

} else {
var statearr_38000_38074 = state_37983__$1;
(statearr_38000_38074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (28))){
var inst_37977 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38001_38075 = state_37983__$1;
(statearr_38001_38075[(2)] = inst_37977);

(statearr_38001_38075[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (25))){
var inst_37930 = (state_37983[(2)]);
var inst_37931 = advenjure.utils.say.call(null,inst_37930);
var state_37983__$1 = state_37983;
var statearr_38002_38076 = state_37983__$1;
(statearr_38002_38076[(2)] = inst_37931);

(statearr_38002_38076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (17))){
var inst_37918 = (state_37983[(9)]);
var inst_37921 = advenjure.utils.say.call(null,inst_37918);
var state_37983__$1 = state_37983;
var statearr_38003_38077 = state_37983__$1;
(statearr_38003_38077[(2)] = inst_37921);

(statearr_38003_38077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (3))){
var inst_37918 = (state_37983[(9)]);
var inst_37918__$1 = (state_37983[(2)]);
var inst_37919 = typeof inst_37918__$1 === 'string';
var state_37983__$1 = (function (){var statearr_38004 = state_37983;
(statearr_38004[(9)] = inst_37918__$1);

return statearr_38004;
})();
if(cljs.core.truth_(inst_37919)){
var statearr_38005_38078 = state_37983__$1;
(statearr_38005_38078[(1)] = (17));

} else {
var statearr_38006_38079 = state_37983__$1;
(statearr_38006_38079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (12))){
var inst_37903 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38007_38080 = state_37983__$1;
(statearr_38007_38080[(2)] = inst_37903);

(statearr_38007_38080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (2))){
var inst_37887 = (state_37983[(8)]);
var inst_37890 = (inst_37887 == null);
var inst_37891 = cljs.core.not.call(null,inst_37890);
var state_37983__$1 = state_37983;
if(inst_37891){
var statearr_38008_38081 = state_37983__$1;
(statearr_38008_38081[(1)] = (4));

} else {
var statearr_38009_38082 = state_37983__$1;
(statearr_38009_38082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (23))){
var inst_37925 = (state_37983[(7)]);
var state_37983__$1 = state_37983;
var statearr_38010_38083 = state_37983__$1;
(statearr_38010_38083[(2)] = inst_37925);

(statearr_38010_38083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (19))){
var inst_37981 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37983__$1,inst_37981);
} else {
if((state_val_37984 === (11))){
var state_37983__$1 = state_37983;
var statearr_38011_38084 = state_37983__$1;
(statearr_38011_38084[(2)] = false);

(statearr_38011_38084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (9))){
var inst_37905 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38012_38085 = state_37983__$1;
(statearr_38012_38085[(2)] = inst_37905);

(statearr_38012_38085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (5))){
var inst_37887 = (state_37983[(8)]);
var inst_37907 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37887);
var state_37983__$1 = state_37983;
var statearr_38013_38086 = state_37983__$1;
(statearr_38013_38086[(2)] = inst_37907);

(statearr_38013_38086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (14))){
var inst_37887 = (state_37983[(8)]);
var state_37983__$1 = state_37983;
var statearr_38014_38087 = state_37983__$1;
(statearr_38014_38087[(2)] = inst_37887);

(statearr_38014_38087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (26))){
var inst_37918 = (state_37983[(9)]);
var inst_37972 = cljs.core.async.chan.call(null,(1));
var inst_37973 = (function (){var dir_value = inst_37918;
var c__24326__auto____$1 = inst_37972;
return ((function (dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current){
return (function (state_37970){
var state_val_37971 = (state_37970[(1)]);
if((state_val_37971 === (7))){
var state_37970__$1 = state_37970;
var statearr_38015_38088 = state_37970__$1;
(statearr_38015_38088[(2)] = true);

(statearr_38015_38088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (1))){
var inst_37934 = advenjure.change_rooms.change_rooms.call(null,game_state,dir_value);
var inst_37935 = inst_37934;
var state_37970__$1 = (function (){var statearr_38016 = state_37970;
(statearr_38016[(7)] = inst_37935);

return statearr_38016;
})();
var statearr_38017_38089 = state_37970__$1;
(statearr_38017_38089[(2)] = null);

(statearr_38017_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (4))){
var inst_37935 = (state_37970[(7)]);
var inst_37941 = inst_37935.cljs$core$async$impl$protocols$ReadPort$;
var inst_37942 = (false) || (inst_37941);
var state_37970__$1 = state_37970;
if(cljs.core.truth_(inst_37942)){
var statearr_38018_38090 = state_37970__$1;
(statearr_38018_38090[(1)] = (7));

} else {
var statearr_38019_38091 = state_37970__$1;
(statearr_38019_38091[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (15))){
var inst_37964 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_38020_38092 = state_37970__$1;
(statearr_38020_38092[(2)] = inst_37964);

(statearr_38020_38092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (13))){
var inst_37935 = (state_37970[(7)]);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37970__$1,(16),inst_37935);
} else {
if((state_val_37971 === (6))){
var inst_37957 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
if(cljs.core.truth_(inst_37957)){
var statearr_38021_38093 = state_37970__$1;
(statearr_38021_38093[(1)] = (13));

} else {
var statearr_38022_38094 = state_37970__$1;
(statearr_38022_38094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (3))){
var inst_37966 = (state_37970[(2)]);
var inst_37967 = dir.call(null,current);
var inst_37968 = advenjure.hooks.eval_postcondition.call(null,inst_37967,game_state,inst_37966);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37970__$1,inst_37968);
} else {
if((state_val_37971 === (12))){
var inst_37951 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_38023_38095 = state_37970__$1;
(statearr_38023_38095[(2)] = inst_37951);

(statearr_38023_38095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (2))){
var inst_37935 = (state_37970[(7)]);
var inst_37938 = (inst_37935 == null);
var inst_37939 = cljs.core.not.call(null,inst_37938);
var state_37970__$1 = state_37970;
if(inst_37939){
var statearr_38024_38096 = state_37970__$1;
(statearr_38024_38096[(1)] = (4));

} else {
var statearr_38025_38097 = state_37970__$1;
(statearr_38025_38097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (11))){
var state_37970__$1 = state_37970;
var statearr_38026_38098 = state_37970__$1;
(statearr_38026_38098[(2)] = false);

(statearr_38026_38098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (9))){
var inst_37953 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_38027_38099 = state_37970__$1;
(statearr_38027_38099[(2)] = inst_37953);

(statearr_38027_38099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (5))){
var inst_37935 = (state_37970[(7)]);
var inst_37955 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37935);
var state_37970__$1 = state_37970;
var statearr_38028_38100 = state_37970__$1;
(statearr_38028_38100[(2)] = inst_37955);

(statearr_38028_38100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (14))){
var inst_37935 = (state_37970[(7)]);
var state_37970__$1 = state_37970;
var statearr_38029_38101 = state_37970__$1;
(statearr_38029_38101[(2)] = inst_37935);

(statearr_38029_38101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (16))){
var inst_37960 = (state_37970[(2)]);
var inst_37935 = inst_37960;
var state_37970__$1 = (function (){var statearr_38030 = state_37970;
(statearr_38030[(7)] = inst_37935);

return statearr_38030;
})();
var statearr_38031_38102 = state_37970__$1;
(statearr_38031_38102[(2)] = null);

(statearr_38031_38102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (10))){
var inst_37935 = (state_37970[(7)]);
var inst_37948 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37935);
var state_37970__$1 = state_37970;
var statearr_38032_38103 = state_37970__$1;
(statearr_38032_38103[(2)] = inst_37948);

(statearr_38032_38103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (8))){
var inst_37935 = (state_37970[(7)]);
var inst_37945 = inst_37935.cljs$lang$protocol_mask$partition$;
var inst_37946 = (!inst_37945);
var state_37970__$1 = state_37970;
if(cljs.core.truth_(inst_37946)){
var statearr_38033_38104 = state_37970__$1;
(statearr_38033_38104[(1)] = (10));

} else {
var statearr_38034_38105 = state_37970__$1;
(statearr_38034_38105[(1)] = (11));

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
});})(dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24055__auto__,dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_37970){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_37970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__24059__auto__ = e38039;
var statearr_38040_38106 = state_37970;
(statearr_38040_38106[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38107 = state_37970;
state_37970 = G__38107;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_37970){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_37970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current))
})();
var state__24328__auto__ = (function (){var statearr_38041 = f__24327__auto__.call(null);
(statearr_38041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto____$1);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});
;})(dir_value,c__24326__auto____$1,inst_37918,inst_37972,state_val_37984,c__24326__auto__,dir,temp__4655__auto__,current))
})();
var inst_37974 = cljs.core.async.impl.dispatch.run.call(null,inst_37973);
var state_37983__$1 = (function (){var statearr_38042 = state_37983;
(statearr_38042[(10)] = inst_37974);

return statearr_38042;
})();
var statearr_38043_38108 = state_37983__$1;
(statearr_38043_38108[(2)] = inst_37972);

(statearr_38043_38108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (16))){
var inst_37912 = (state_37983[(2)]);
var inst_37887 = inst_37912;
var state_37983__$1 = (function (){var statearr_38044 = state_37983;
(statearr_38044[(8)] = inst_37887);

return statearr_38044;
})();
var statearr_38045_38109 = state_37983__$1;
(statearr_38045_38109[(2)] = null);

(statearr_38045_38109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (10))){
var inst_37887 = (state_37983[(8)]);
var inst_37900 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37887);
var state_37983__$1 = state_37983;
var statearr_38046_38110 = state_37983__$1;
(statearr_38046_38110[(2)] = inst_37900);

(statearr_38046_38110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (18))){
var inst_37918 = (state_37983[(9)]);
var inst_37923 = cljs.core.not.call(null,inst_37918);
var state_37983__$1 = state_37983;
if(inst_37923){
var statearr_38047_38111 = state_37983__$1;
(statearr_38047_38111[(1)] = (20));

} else {
var statearr_38048_38112 = state_37983__$1;
(statearr_38048_38112[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (8))){
var inst_37887 = (state_37983[(8)]);
var inst_37897 = inst_37887.cljs$lang$protocol_mask$partition$;
var inst_37898 = (!inst_37897);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37898)){
var statearr_38049_38113 = state_37983__$1;
(statearr_38049_38113[(1)] = (10));

} else {
var statearr_38050_38114 = state_37983__$1;
(statearr_38050_38114[(1)] = (11));

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
});})(c__24326__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24055__auto__,c__24326__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_38054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38054[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_38054[(1)] = (1));

return statearr_38054;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_37983){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_37983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e38055){if((e38055 instanceof Object)){
var ex__24059__auto__ = e38055;
var statearr_38056_38115 = state_37983;
(statearr_38056_38115[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38116 = state_37983;
state_37983 = G__38116;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_37983){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_37983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,dir,temp__4655__auto__,current))
})();
var state__24328__auto__ = (function (){var statearr_38057 = f__24327__auto__.call(null);
(statearr_38057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_38057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,dir,temp__4655__auto__,current))
);

return c__24326__auto__;
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
var args38117 = [];
var len__21530__auto___38294 = arguments.length;
var i__21531__auto___38295 = (0);
while(true){
if((i__21531__auto___38295 < len__21530__auto___38294)){
args38117.push((arguments[i__21531__auto___38295]));

var G__38296 = (i__21531__auto___38295 + (1));
i__21531__auto___38295 = G__38296;
continue;
} else {
}
break;
}

var G__38119 = args38117.length;
switch (G__38119) {
case 1:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38117.length)].join('')));

}
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Look to where?"));
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2 = (function (game_state,direction){
var temp__4655__auto__ = cljs.core.get.call(null,advenjure.utils.direction_mappings,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,dir,temp__4655__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,dir,temp__4655__auto__){
return (function (state_38223){
var state_val_38224 = (state_38223[(1)]);
if((state_val_38224 === (7))){
var state_38223__$1 = state_38223;
var statearr_38225_38298 = state_38223__$1;
(statearr_38225_38298[(2)] = true);

(statearr_38225_38298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (20))){
var inst_38157 = (state_38223[(7)]);
var inst_38177 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38157);
var state_38223__$1 = state_38223;
var statearr_38226_38299 = state_38223__$1;
(statearr_38226_38299[(2)] = inst_38177);

(statearr_38226_38299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (27))){
var inst_38173 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38227_38300 = state_38223__$1;
(statearr_38227_38300[(2)] = inst_38173);

(statearr_38227_38300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (1))){
var inst_38120 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_38121 = inst_38120;
var state_38223__$1 = (function (){var statearr_38228 = state_38223;
(statearr_38228[(8)] = inst_38121);

return statearr_38228;
})();
var statearr_38229_38301 = state_38223__$1;
(statearr_38229_38301[(2)] = null);

(statearr_38229_38301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (24))){
var inst_38175 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38230_38302 = state_38223__$1;
(statearr_38230_38302[(2)] = inst_38175);

(statearr_38230_38302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (39))){
var inst_38188 = (state_38223[(9)]);
var inst_38202 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(inst_38188);
var state_38223__$1 = state_38223;
var statearr_38231_38303 = state_38223__$1;
(statearr_38231_38303[(2)] = inst_38202);

(statearr_38231_38303[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (46))){
var inst_38215 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38232_38304 = state_38223__$1;
(statearr_38232_38304[(2)] = inst_38215);

(statearr_38232_38304[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (4))){
var inst_38121 = (state_38223[(8)]);
var inst_38127 = inst_38121.cljs$core$async$impl$protocols$ReadPort$;
var inst_38128 = (false) || (inst_38127);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38128)){
var statearr_38233_38305 = state_38223__$1;
(statearr_38233_38305[(1)] = (7));

} else {
var statearr_38234_38306 = state_38223__$1;
(statearr_38234_38306[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (15))){
var inst_38150 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38235_38307 = state_38223__$1;
(statearr_38235_38307[(2)] = inst_38150);

(statearr_38235_38307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (21))){
var inst_38179 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38179)){
var statearr_38236_38308 = state_38223__$1;
(statearr_38236_38308[(1)] = (28));

} else {
var statearr_38237_38309 = state_38223__$1;
(statearr_38237_38309[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (31))){
var inst_38182 = (state_38223[(2)]);
var inst_38157 = inst_38182;
var state_38223__$1 = (function (){var statearr_38238 = state_38223;
(statearr_38238[(7)] = inst_38157);

return statearr_38238;
})();
var statearr_38239_38310 = state_38223__$1;
(statearr_38239_38310[(2)] = null);

(statearr_38239_38310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (32))){
var inst_38191 = advenjure.gettext.core._.call(null,"That direction was blocked.");
var inst_38192 = advenjure.utils.say.call(null,inst_38191);
var state_38223__$1 = state_38223;
var statearr_38240_38311 = state_38223__$1;
(statearr_38240_38311[(2)] = inst_38192);

(statearr_38240_38311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (40))){
var inst_38204 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38204)){
var statearr_38241_38312 = state_38223__$1;
(statearr_38241_38312[(1)] = (41));

} else {
var statearr_38242_38313 = state_38223__$1;
(statearr_38242_38313[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (33))){
var inst_38152 = (state_38223[(10)]);
var inst_38194 = cljs.core.not.call(null,inst_38152);
var state_38223__$1 = state_38223;
if(inst_38194){
var statearr_38243_38314 = state_38223__$1;
(statearr_38243_38314[(1)] = (35));

} else {
var statearr_38244_38315 = state_38223__$1;
(statearr_38244_38315[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (13))){
var inst_38121 = (state_38223[(8)]);
var state_38223__$1 = state_38223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38223__$1,(16),inst_38121);
} else {
if((state_val_38224 === (22))){
var state_38223__$1 = state_38223;
var statearr_38245_38316 = state_38223__$1;
(statearr_38245_38316[(2)] = true);

(statearr_38245_38316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (36))){
var inst_38188 = (state_38223[(9)]);
var inst_38199 = (state_38223[(11)]);
var inst_38199__$1 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(inst_38188);
var state_38223__$1 = (function (){var statearr_38246 = state_38223;
(statearr_38246[(11)] = inst_38199__$1);

return statearr_38246;
})();
if(cljs.core.truth_(inst_38199__$1)){
var statearr_38247_38317 = state_38223__$1;
(statearr_38247_38317[(1)] = (38));

} else {
var statearr_38248_38318 = state_38223__$1;
(statearr_38248_38318[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (41))){
var inst_38188 = (state_38223[(9)]);
var inst_38206 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_38188);
var inst_38207 = advenjure.gettext.core._.call(null,"The %s was in that direction.",inst_38206);
var inst_38208 = advenjure.utils.say.call(null,inst_38207);
var state_38223__$1 = state_38223;
var statearr_38249_38319 = state_38223__$1;
(statearr_38249_38319[(2)] = inst_38208);

(statearr_38249_38319[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (43))){
var inst_38217 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38250_38320 = state_38223__$1;
(statearr_38250_38320[(2)] = inst_38217);

(statearr_38250_38320[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (29))){
var inst_38157 = (state_38223[(7)]);
var state_38223__$1 = state_38223;
var statearr_38251_38321 = state_38223__$1;
(statearr_38251_38321[(2)] = inst_38157);

(statearr_38251_38321[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (44))){
var inst_38211 = advenjure.gettext.core._.call(null,"I didn't know what was in that direction.");
var inst_38212 = advenjure.utils.say.call(null,inst_38211);
var state_38223__$1 = state_38223;
var statearr_38252_38322 = state_38223__$1;
(statearr_38252_38322[(2)] = inst_38212);

(statearr_38252_38322[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (6))){
var inst_38143 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38143)){
var statearr_38253_38323 = state_38223__$1;
(statearr_38253_38323[(1)] = (13));

} else {
var statearr_38254_38324 = state_38223__$1;
(statearr_38254_38324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (28))){
var inst_38157 = (state_38223[(7)]);
var state_38223__$1 = state_38223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38223__$1,(31),inst_38157);
} else {
if((state_val_38224 === (25))){
var inst_38157 = (state_38223[(7)]);
var inst_38170 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38157);
var state_38223__$1 = state_38223;
var statearr_38255_38325 = state_38223__$1;
(statearr_38255_38325[(2)] = inst_38170);

(statearr_38255_38325[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (34))){
var inst_38221 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38223__$1,inst_38221);
} else {
if((state_val_38224 === (17))){
var inst_38157 = (state_38223[(7)]);
var inst_38160 = (inst_38157 == null);
var inst_38161 = cljs.core.not.call(null,inst_38160);
var state_38223__$1 = state_38223;
if(inst_38161){
var statearr_38256_38326 = state_38223__$1;
(statearr_38256_38326[(1)] = (19));

} else {
var statearr_38257_38327 = state_38223__$1;
(statearr_38257_38327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (3))){
var inst_38152 = (state_38223[(10)]);
var inst_38152__$1 = (state_38223[(2)]);
var inst_38153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38154 = [new cljs.core.Keyword(null,"room-map","room-map",978449264),inst_38152__$1];
var inst_38155 = (new cljs.core.PersistentVector(null,2,(5),inst_38153,inst_38154,null));
var inst_38156 = cljs.core.get_in.call(null,game_state,inst_38155);
var inst_38157 = inst_38156;
var state_38223__$1 = (function (){var statearr_38258 = state_38223;
(statearr_38258[(10)] = inst_38152__$1);

(statearr_38258[(7)] = inst_38157);

return statearr_38258;
})();
var statearr_38259_38328 = state_38223__$1;
(statearr_38259_38328[(2)] = null);

(statearr_38259_38328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (12))){
var inst_38137 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38260_38329 = state_38223__$1;
(statearr_38260_38329[(2)] = inst_38137);

(statearr_38260_38329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (2))){
var inst_38121 = (state_38223[(8)]);
var inst_38124 = (inst_38121 == null);
var inst_38125 = cljs.core.not.call(null,inst_38124);
var state_38223__$1 = state_38223;
if(inst_38125){
var statearr_38261_38330 = state_38223__$1;
(statearr_38261_38330[(1)] = (4));

} else {
var statearr_38262_38331 = state_38223__$1;
(statearr_38262_38331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (23))){
var inst_38157 = (state_38223[(7)]);
var inst_38167 = inst_38157.cljs$lang$protocol_mask$partition$;
var inst_38168 = (!inst_38167);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38168)){
var statearr_38263_38332 = state_38223__$1;
(statearr_38263_38332[(1)] = (25));

} else {
var statearr_38264_38333 = state_38223__$1;
(statearr_38264_38333[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (35))){
var inst_38196 = advenjure.gettext.core._.call(null,"There was nothing in that direction.");
var inst_38197 = advenjure.utils.say.call(null,inst_38196);
var state_38223__$1 = state_38223;
var statearr_38265_38334 = state_38223__$1;
(statearr_38265_38334[(2)] = inst_38197);

(statearr_38265_38334[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (19))){
var inst_38157 = (state_38223[(7)]);
var inst_38163 = inst_38157.cljs$core$async$impl$protocols$ReadPort$;
var inst_38164 = (false) || (inst_38163);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38164)){
var statearr_38266_38335 = state_38223__$1;
(statearr_38266_38335[(1)] = (22));

} else {
var statearr_38267_38336 = state_38223__$1;
(statearr_38267_38336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (11))){
var state_38223__$1 = state_38223;
var statearr_38268_38337 = state_38223__$1;
(statearr_38268_38337[(2)] = false);

(statearr_38268_38337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (9))){
var inst_38139 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38269_38338 = state_38223__$1;
(statearr_38269_38338[(2)] = inst_38139);

(statearr_38269_38338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (5))){
var inst_38121 = (state_38223[(8)]);
var inst_38141 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38121);
var state_38223__$1 = state_38223;
var statearr_38270_38339 = state_38223__$1;
(statearr_38270_38339[(2)] = inst_38141);

(statearr_38270_38339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (14))){
var inst_38121 = (state_38223[(8)]);
var state_38223__$1 = state_38223;
var statearr_38271_38340 = state_38223__$1;
(statearr_38271_38340[(2)] = inst_38121);

(statearr_38271_38340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (45))){
var state_38223__$1 = state_38223;
var statearr_38272_38341 = state_38223__$1;
(statearr_38272_38341[(2)] = null);

(statearr_38272_38341[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (26))){
var state_38223__$1 = state_38223;
var statearr_38273_38342 = state_38223__$1;
(statearr_38273_38342[(2)] = false);

(statearr_38273_38342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (16))){
var inst_38146 = (state_38223[(2)]);
var inst_38121 = inst_38146;
var state_38223__$1 = (function (){var statearr_38274 = state_38223;
(statearr_38274[(8)] = inst_38121);

return statearr_38274;
})();
var statearr_38275_38343 = state_38223__$1;
(statearr_38275_38343[(2)] = null);

(statearr_38275_38343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (38))){
var inst_38199 = (state_38223[(11)]);
var state_38223__$1 = state_38223;
var statearr_38276_38344 = state_38223__$1;
(statearr_38276_38344[(2)] = inst_38199);

(statearr_38276_38344[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (30))){
var inst_38186 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38277_38345 = state_38223__$1;
(statearr_38277_38345[(2)] = inst_38186);

(statearr_38277_38345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (10))){
var inst_38121 = (state_38223[(8)]);
var inst_38134 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38121);
var state_38223__$1 = state_38223;
var statearr_38278_38346 = state_38223__$1;
(statearr_38278_38346[(2)] = inst_38134);

(statearr_38278_38346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (18))){
var inst_38152 = (state_38223[(10)]);
var inst_38188 = (state_38223[(2)]);
var inst_38189 = typeof inst_38152 === 'string';
var state_38223__$1 = (function (){var statearr_38279 = state_38223;
(statearr_38279[(9)] = inst_38188);

return statearr_38279;
})();
if(cljs.core.truth_(inst_38189)){
var statearr_38280_38347 = state_38223__$1;
(statearr_38280_38347[(1)] = (32));

} else {
var statearr_38281_38348 = state_38223__$1;
(statearr_38281_38348[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (42))){
var state_38223__$1 = state_38223;
var statearr_38282_38349 = state_38223__$1;
(statearr_38282_38349[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (37))){
var inst_38219 = (state_38223[(2)]);
var state_38223__$1 = state_38223;
var statearr_38284_38350 = state_38223__$1;
(statearr_38284_38350[(2)] = inst_38219);

(statearr_38284_38350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38224 === (8))){
var inst_38121 = (state_38223[(8)]);
var inst_38131 = inst_38121.cljs$lang$protocol_mask$partition$;
var inst_38132 = (!inst_38131);
var state_38223__$1 = state_38223;
if(cljs.core.truth_(inst_38132)){
var statearr_38285_38351 = state_38223__$1;
(statearr_38285_38351[(1)] = (10));

} else {
var statearr_38286_38352 = state_38223__$1;
(statearr_38286_38352[(1)] = (11));

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
});})(c__24326__auto__,dir,temp__4655__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__,dir,temp__4655__auto__){
return (function() {
var advenjure$verbs$state_machine__24056__auto__ = null;
var advenjure$verbs$state_machine__24056__auto____0 = (function (){
var statearr_38290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38290[(0)] = advenjure$verbs$state_machine__24056__auto__);

(statearr_38290[(1)] = (1));

return statearr_38290;
});
var advenjure$verbs$state_machine__24056__auto____1 = (function (state_38223){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_38223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e38291){if((e38291 instanceof Object)){
var ex__24059__auto__ = e38291;
var statearr_38292_38353 = state_38223;
(statearr_38292_38353[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38354 = state_38223;
state_38223 = G__38354;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24056__auto__ = function(state_38223){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24056__auto____1.call(this,state_38223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24056__auto____0;
advenjure$verbs$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24056__auto____1;
return advenjure$verbs$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,dir,temp__4655__auto__))
})();
var state__24328__auto__ = (function (){var statearr_38293 = f__24327__auto__.call(null);
(statearr_38293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_38293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,dir,temp__4655__auto__))
);

return c__24326__auto__;
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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,dir_value,dir_name,dir_room){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,dir_value,dir_name,dir_room){
return (function (state_38607){
var state_val_38608 = (state_38607[(1)]);
if((state_val_38608 === (7))){
var state_38607__$1 = state_38607;
var statearr_38609_38675 = state_38607__$1;
(statearr_38609_38675[(2)] = true);

(statearr_38609_38675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (20))){
var inst_38549 = (state_38607[(7)]);
var inst_38569 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38549);
var state_38607__$1 = state_38607;
var statearr_38610_38676 = state_38607__$1;
(statearr_38610_38676[(2)] = inst_38569);

(statearr_38610_38676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (27))){
var inst_38565 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38611_38677 = state_38607__$1;
(statearr_38611_38677[(2)] = inst_38565);

(statearr_38611_38677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (1))){
var inst_38515 = gs;
var state_38607__$1 = (function (){var statearr_38612 = state_38607;
(statearr_38612[(8)] = inst_38515);

return statearr_38612;
})();
var statearr_38613_38678 = state_38607__$1;
(statearr_38613_38678[(2)] = null);

(statearr_38613_38678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (24))){
var inst_38567 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38614_38679 = state_38607__$1;
(statearr_38614_38679[(2)] = inst_38567);

(statearr_38614_38679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (39))){
var state_38607__$1 = state_38607;
var statearr_38615_38680 = state_38607__$1;
(statearr_38615_38680[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (4))){
var inst_38515 = (state_38607[(8)]);
var inst_38521 = inst_38515.cljs$core$async$impl$protocols$ReadPort$;
var inst_38522 = (false) || (inst_38521);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38522)){
var statearr_38617_38681 = state_38607__$1;
(statearr_38617_38681[(1)] = (7));

} else {
var statearr_38618_38682 = state_38607__$1;
(statearr_38618_38682[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (15))){
var inst_38544 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38619_38683 = state_38607__$1;
(statearr_38619_38683[(2)] = inst_38544);

(statearr_38619_38683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (21))){
var inst_38571 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38571)){
var statearr_38620_38684 = state_38607__$1;
(statearr_38620_38684[(1)] = (28));

} else {
var statearr_38621_38685 = state_38607__$1;
(statearr_38621_38685[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (31))){
var inst_38574 = (state_38607[(2)]);
var inst_38549 = inst_38574;
var state_38607__$1 = (function (){var statearr_38622 = state_38607;
(statearr_38622[(7)] = inst_38549);

return statearr_38622;
})();
var statearr_38623_38686 = state_38607__$1;
(statearr_38623_38686[(2)] = null);

(statearr_38623_38686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (32))){
var inst_38583 = advenjure.gettext.core._.call(null,"blocked.");
var inst_38584 = advenjure.utils.say.call(null,inst_38583);
var state_38607__$1 = state_38607;
var statearr_38624_38687 = state_38607__$1;
(statearr_38624_38687[(2)] = inst_38584);

(statearr_38624_38687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (40))){
var inst_38603 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38625_38688 = state_38607__$1;
(statearr_38625_38688[(2)] = inst_38603);

(statearr_38625_38688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (33))){
var inst_38586 = (state_38607[(9)]);
var inst_38586__$1 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_38607__$1 = (function (){var statearr_38626 = state_38607;
(statearr_38626[(9)] = inst_38586__$1);

return statearr_38626;
})();
if(cljs.core.truth_(inst_38586__$1)){
var statearr_38627_38689 = state_38607__$1;
(statearr_38627_38689[(1)] = (35));

} else {
var statearr_38628_38690 = state_38607__$1;
(statearr_38628_38690[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (13))){
var inst_38515 = (state_38607[(8)]);
var state_38607__$1 = state_38607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38607__$1,(16),inst_38515);
} else {
if((state_val_38608 === (22))){
var state_38607__$1 = state_38607;
var statearr_38629_38691 = state_38607__$1;
(statearr_38629_38691[(2)] = true);

(statearr_38629_38691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (36))){
var inst_38589 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_38607__$1 = state_38607;
var statearr_38630_38692 = state_38607__$1;
(statearr_38630_38692[(2)] = inst_38589);

(statearr_38630_38692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (41))){
var inst_38598 = advenjure.utils.say.call(null,"???");
var state_38607__$1 = state_38607;
var statearr_38631_38693 = state_38607__$1;
(statearr_38631_38693[(2)] = inst_38598);

(statearr_38631_38693[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (43))){
var inst_38601 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38632_38694 = state_38607__$1;
(statearr_38632_38694[(2)] = inst_38601);

(statearr_38632_38694[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (29))){
var inst_38549 = (state_38607[(7)]);
var state_38607__$1 = state_38607;
var statearr_38633_38695 = state_38607__$1;
(statearr_38633_38695[(2)] = inst_38549);

(statearr_38633_38695[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (6))){
var inst_38537 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38537)){
var statearr_38634_38696 = state_38607__$1;
(statearr_38634_38696[(1)] = (13));

} else {
var statearr_38635_38697 = state_38607__$1;
(statearr_38635_38697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (28))){
var inst_38549 = (state_38607[(7)]);
var state_38607__$1 = state_38607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38607__$1,(31),inst_38549);
} else {
if((state_val_38608 === (25))){
var inst_38549 = (state_38607[(7)]);
var inst_38562 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38549);
var state_38607__$1 = state_38607;
var statearr_38636_38698 = state_38607__$1;
(statearr_38636_38698[(2)] = inst_38562);

(statearr_38636_38698[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (34))){
var inst_38546 = (state_38607[(10)]);
var inst_38605 = (state_38607[(2)]);
var state_38607__$1 = (function (){var statearr_38637 = state_38607;
(statearr_38637[(11)] = inst_38605);

return statearr_38637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38607__$1,inst_38546);
} else {
if((state_val_38608 === (17))){
var inst_38549 = (state_38607[(7)]);
var inst_38552 = (inst_38549 == null);
var inst_38553 = cljs.core.not.call(null,inst_38552);
var state_38607__$1 = state_38607;
if(inst_38553){
var statearr_38638_38699 = state_38607__$1;
(statearr_38638_38699[(1)] = (19));

} else {
var statearr_38639_38700 = state_38607__$1;
(statearr_38639_38700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (3))){
var inst_38546 = (state_38607[(2)]);
var inst_38547 = [cljs.core.str(dir_name),cljs.core.str(": ")].join('');
var inst_38548 = advenjure.utils.say_inline.call(null,inst_38547);
var inst_38549 = inst_38548;
var state_38607__$1 = (function (){var statearr_38640 = state_38607;
(statearr_38640[(10)] = inst_38546);

(statearr_38640[(7)] = inst_38549);

return statearr_38640;
})();
var statearr_38641_38701 = state_38607__$1;
(statearr_38641_38701[(2)] = null);

(statearr_38641_38701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (12))){
var inst_38531 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38642_38702 = state_38607__$1;
(statearr_38642_38702[(2)] = inst_38531);

(statearr_38642_38702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (2))){
var inst_38515 = (state_38607[(8)]);
var inst_38518 = (inst_38515 == null);
var inst_38519 = cljs.core.not.call(null,inst_38518);
var state_38607__$1 = state_38607;
if(inst_38519){
var statearr_38643_38703 = state_38607__$1;
(statearr_38643_38703[(1)] = (4));

} else {
var statearr_38644_38704 = state_38607__$1;
(statearr_38644_38704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (23))){
var inst_38549 = (state_38607[(7)]);
var inst_38559 = inst_38549.cljs$lang$protocol_mask$partition$;
var inst_38560 = (!inst_38559);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38560)){
var statearr_38645_38705 = state_38607__$1;
(statearr_38645_38705[(1)] = (25));

} else {
var statearr_38646_38706 = state_38607__$1;
(statearr_38646_38706[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (35))){
var inst_38586 = (state_38607[(9)]);
var state_38607__$1 = state_38607;
var statearr_38647_38707 = state_38607__$1;
(statearr_38647_38707[(2)] = inst_38586);

(statearr_38647_38707[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (19))){
var inst_38549 = (state_38607[(7)]);
var inst_38555 = inst_38549.cljs$core$async$impl$protocols$ReadPort$;
var inst_38556 = (false) || (inst_38555);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38556)){
var statearr_38648_38708 = state_38607__$1;
(statearr_38648_38708[(1)] = (22));

} else {
var statearr_38649_38709 = state_38607__$1;
(statearr_38649_38709[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (11))){
var state_38607__$1 = state_38607;
var statearr_38650_38710 = state_38607__$1;
(statearr_38650_38710[(2)] = false);

(statearr_38650_38710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (9))){
var inst_38533 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38651_38711 = state_38607__$1;
(statearr_38651_38711[(2)] = inst_38533);

(statearr_38651_38711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (5))){
var inst_38515 = (state_38607[(8)]);
var inst_38535 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38515);
var state_38607__$1 = state_38607;
var statearr_38652_38712 = state_38607__$1;
(statearr_38652_38712[(2)] = inst_38535);

(statearr_38652_38712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (14))){
var inst_38515 = (state_38607[(8)]);
var state_38607__$1 = state_38607;
var statearr_38653_38713 = state_38607__$1;
(statearr_38653_38713[(2)] = inst_38515);

(statearr_38653_38713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (26))){
var state_38607__$1 = state_38607;
var statearr_38654_38714 = state_38607__$1;
(statearr_38654_38714[(2)] = false);

(statearr_38654_38714[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (16))){
var inst_38540 = (state_38607[(2)]);
var inst_38515 = inst_38540;
var state_38607__$1 = (function (){var statearr_38655 = state_38607;
(statearr_38655[(8)] = inst_38515);

return statearr_38655;
})();
var statearr_38656_38715 = state_38607__$1;
(statearr_38656_38715[(2)] = null);

(statearr_38656_38715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (38))){
var inst_38593 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dir_room);
var inst_38594 = [cljs.core.str(inst_38593),cljs.core.str(".")].join('');
var inst_38595 = advenjure.utils.say.call(null,inst_38594);
var state_38607__$1 = state_38607;
var statearr_38657_38716 = state_38607__$1;
(statearr_38657_38716[(2)] = inst_38595);

(statearr_38657_38716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (30))){
var inst_38578 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38658_38717 = state_38607__$1;
(statearr_38658_38717[(2)] = inst_38578);

(statearr_38658_38717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (10))){
var inst_38515 = (state_38607[(8)]);
var inst_38528 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38515);
var state_38607__$1 = state_38607;
var statearr_38659_38718 = state_38607__$1;
(statearr_38659_38718[(2)] = inst_38528);

(statearr_38659_38718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (18))){
var inst_38580 = (state_38607[(2)]);
var inst_38581 = typeof dir_value === 'string';
var state_38607__$1 = (function (){var statearr_38660 = state_38607;
(statearr_38660[(12)] = inst_38580);

return statearr_38660;
})();
if(cljs.core.truth_(inst_38581)){
var statearr_38661_38719 = state_38607__$1;
(statearr_38661_38719[(1)] = (32));

} else {
var statearr_38662_38720 = state_38607__$1;
(statearr_38662_38720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (42))){
var state_38607__$1 = state_38607;
var statearr_38663_38721 = state_38607__$1;
(statearr_38663_38721[(2)] = null);

(statearr_38663_38721[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (37))){
var inst_38591 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38591)){
var statearr_38664_38722 = state_38607__$1;
(statearr_38664_38722[(1)] = (38));

} else {
var statearr_38665_38723 = state_38607__$1;
(statearr_38665_38723[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (8))){
var inst_38515 = (state_38607[(8)]);
var inst_38525 = inst_38515.cljs$lang$protocol_mask$partition$;
var inst_38526 = (!inst_38525);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38526)){
var statearr_38666_38724 = state_38607__$1;
(statearr_38666_38724[(1)] = (10));

} else {
var statearr_38667_38725 = state_38607__$1;
(statearr_38667_38725[(1)] = (11));

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
});})(c__24326__auto__,dir_value,dir_name,dir_room))
;
return ((function (switch__24055__auto__,c__24326__auto__,dir_value,dir_name,dir_room){
return (function() {
var advenjure$verbs$look_$_state_machine__24056__auto__ = null;
var advenjure$verbs$look_$_state_machine__24056__auto____0 = (function (){
var statearr_38671 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38671[(0)] = advenjure$verbs$look_$_state_machine__24056__auto__);

(statearr_38671[(1)] = (1));

return statearr_38671;
});
var advenjure$verbs$look_$_state_machine__24056__auto____1 = (function (state_38607){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_38607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e38672){if((e38672 instanceof Object)){
var ex__24059__auto__ = e38672;
var statearr_38673_38726 = state_38607;
(statearr_38673_38726[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38727 = state_38607;
state_38607 = G__38727;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$look_$_state_machine__24056__auto__ = function(state_38607){
switch(arguments.length){
case 0:
return advenjure$verbs$look_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$look_$_state_machine__24056__auto____1.call(this,state_38607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$look_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$look_$_state_machine__24056__auto____0;
advenjure$verbs$look_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$look_$_state_machine__24056__auto____1;
return advenjure$verbs$look_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,dir_value,dir_name,dir_room))
})();
var state__24328__auto__ = (function (){var statearr_38674 = f__24327__auto__.call(null);
(statearr_38674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_38674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,dir_value,dir_name,dir_room))
);

return c__24326__auto__;
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
}catch (e38729){if((e38729 instanceof Object)){
var e = e38729;
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"No saved game found."));
} else {
throw e38729;

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
return (function (p1__38730_SHARP_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(p1__38730_SHARP_));
});})(items,takeable))
,takeable);
if(cljs.core.empty_QMARK_.call(null,item_names)){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I saw nothing worth taking."));
} else {
return cljs.core.reduce.call(null,((function (items,takeable,item_names){
return (function (gs,iname){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,items,takeable,item_names){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,items,takeable,item_names){
return (function (state_39097){
var state_val_39098 = (state_39097[(1)]);
if((state_val_39098 === (62))){
var inst_39064 = (state_39097[(7)]);
var state_39097__$1 = state_39097;
var statearr_39099_39191 = state_39097__$1;
(statearr_39099_39191[(2)] = inst_39064);

(statearr_39099_39191[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (7))){
var state_39097__$1 = state_39097;
var statearr_39100_39192 = state_39097__$1;
(statearr_39100_39192[(2)] = true);

(statearr_39100_39192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (59))){
var state_39097__$1 = state_39097;
var statearr_39101_39193 = state_39097__$1;
(statearr_39101_39193[(2)] = false);

(statearr_39101_39193[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (20))){
var inst_38995 = (state_39097[(8)]);
var inst_39015 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38995);
var state_39097__$1 = state_39097;
var statearr_39102_39194 = state_39097__$1;
(statearr_39102_39194[(2)] = inst_39015);

(statearr_39102_39194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (58))){
var inst_39064 = (state_39097[(7)]);
var inst_39077 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39064);
var state_39097__$1 = state_39097;
var statearr_39103_39195 = state_39097__$1;
(statearr_39103_39195[(2)] = inst_39077);

(statearr_39103_39195[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (60))){
var inst_39080 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39104_39196 = state_39097__$1;
(statearr_39104_39196[(2)] = inst_39080);

(statearr_39104_39196[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (27))){
var inst_39011 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39105_39197 = state_39097__$1;
(statearr_39105_39197[(2)] = inst_39011);

(statearr_39105_39197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (1))){
var inst_38961 = gs;
var state_39097__$1 = (function (){var statearr_39106 = state_39097;
(statearr_39106[(9)] = inst_38961);

return statearr_39106;
})();
var statearr_39107_39198 = state_39097__$1;
(statearr_39107_39198[(2)] = null);

(statearr_39107_39198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (24))){
var inst_39013 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39108_39199 = state_39097__$1;
(statearr_39108_39199[(2)] = inst_39013);

(statearr_39108_39199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (55))){
var state_39097__$1 = state_39097;
var statearr_39109_39200 = state_39097__$1;
(statearr_39109_39200[(2)] = true);

(statearr_39109_39200[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (39))){
var inst_39046 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39110_39201 = state_39097__$1;
(statearr_39110_39201[(2)] = inst_39046);

(statearr_39110_39201[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (46))){
var inst_39053 = (state_39097[(2)]);
var inst_39028 = inst_39053;
var state_39097__$1 = (function (){var statearr_39111 = state_39097;
(statearr_39111[(10)] = inst_39028);

return statearr_39111;
})();
var statearr_39112_39202 = state_39097__$1;
(statearr_39112_39202[(2)] = null);

(statearr_39112_39202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (4))){
var inst_38961 = (state_39097[(9)]);
var inst_38967 = inst_38961.cljs$core$async$impl$protocols$ReadPort$;
var inst_38968 = (false) || (inst_38967);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_38968)){
var statearr_39113_39203 = state_39097__$1;
(statearr_39113_39203[(1)] = (7));

} else {
var statearr_39114_39204 = state_39097__$1;
(statearr_39114_39204[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (54))){
var inst_39086 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39086)){
var statearr_39115_39205 = state_39097__$1;
(statearr_39115_39205[(1)] = (61));

} else {
var statearr_39116_39206 = state_39097__$1;
(statearr_39116_39206[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (15))){
var inst_38990 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39117_39207 = state_39097__$1;
(statearr_39117_39207[(2)] = inst_38990);

(statearr_39117_39207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (48))){
var inst_38992 = (state_39097[(11)]);
var state_39097__$1 = state_39097;
var statearr_39118_39208 = state_39097__$1;
(statearr_39118_39208[(2)] = inst_38992);

(statearr_39118_39208[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (50))){
var inst_39064 = (state_39097[(7)]);
var inst_39067 = (inst_39064 == null);
var inst_39068 = cljs.core.not.call(null,inst_39067);
var state_39097__$1 = state_39097;
if(inst_39068){
var statearr_39119_39209 = state_39097__$1;
(statearr_39119_39209[(1)] = (52));

} else {
var statearr_39120_39210 = state_39097__$1;
(statearr_39120_39210[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (21))){
var inst_39017 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39017)){
var statearr_39121_39211 = state_39097__$1;
(statearr_39121_39211[(1)] = (28));

} else {
var statearr_39122_39212 = state_39097__$1;
(statearr_39122_39212[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (31))){
var inst_39020 = (state_39097[(2)]);
var inst_38995 = inst_39020;
var state_39097__$1 = (function (){var statearr_39123 = state_39097;
(statearr_39123[(8)] = inst_38995);

return statearr_39123;
})();
var statearr_39124_39213 = state_39097__$1;
(statearr_39124_39213[(2)] = null);

(statearr_39124_39213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (32))){
var inst_39028 = (state_39097[(10)]);
var inst_39031 = (inst_39028 == null);
var inst_39032 = cljs.core.not.call(null,inst_39031);
var state_39097__$1 = state_39097;
if(inst_39032){
var statearr_39125_39214 = state_39097__$1;
(statearr_39125_39214[(1)] = (34));

} else {
var statearr_39126_39215 = state_39097__$1;
(statearr_39126_39215[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (40))){
var inst_39028 = (state_39097[(10)]);
var inst_39041 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39028);
var state_39097__$1 = state_39097;
var statearr_39127_39216 = state_39097__$1;
(statearr_39127_39216[(2)] = inst_39041);

(statearr_39127_39216[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (56))){
var inst_39064 = (state_39097[(7)]);
var inst_39074 = inst_39064.cljs$lang$protocol_mask$partition$;
var inst_39075 = (!inst_39074);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39075)){
var statearr_39128_39217 = state_39097__$1;
(statearr_39128_39217[(1)] = (58));

} else {
var statearr_39129_39218 = state_39097__$1;
(statearr_39129_39218[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (33))){
var inst_39059 = (state_39097[(12)]);
var inst_39059__$1 = (state_39097[(2)]);
var state_39097__$1 = (function (){var statearr_39130 = state_39097;
(statearr_39130[(12)] = inst_39059__$1);

return statearr_39130;
})();
if(cljs.core.truth_(inst_39059__$1)){
var statearr_39131_39219 = state_39097__$1;
(statearr_39131_39219[(1)] = (47));

} else {
var statearr_39132_39220 = state_39097__$1;
(statearr_39132_39220[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (13))){
var inst_38961 = (state_39097[(9)]);
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39097__$1,(16),inst_38961);
} else {
if((state_val_39098 === (22))){
var state_39097__$1 = state_39097;
var statearr_39133_39221 = state_39097__$1;
(statearr_39133_39221[(2)] = true);

(statearr_39133_39221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (36))){
var inst_39050 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39050)){
var statearr_39134_39222 = state_39097__$1;
(statearr_39134_39222[(1)] = (43));

} else {
var statearr_39135_39223 = state_39097__$1;
(statearr_39135_39223[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (41))){
var state_39097__$1 = state_39097;
var statearr_39136_39224 = state_39097__$1;
(statearr_39136_39224[(2)] = false);

(statearr_39136_39224[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (43))){
var inst_39028 = (state_39097[(10)]);
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39097__$1,(46),inst_39028);
} else {
if((state_val_39098 === (61))){
var inst_39064 = (state_39097[(7)]);
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39097__$1,(64),inst_39064);
} else {
if((state_val_39098 === (29))){
var inst_38995 = (state_39097[(8)]);
var state_39097__$1 = state_39097;
var statearr_39137_39225 = state_39097__$1;
(statearr_39137_39225[(2)] = inst_38995);

(statearr_39137_39225[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (44))){
var inst_39028 = (state_39097[(10)]);
var state_39097__$1 = state_39097;
var statearr_39138_39226 = state_39097__$1;
(statearr_39138_39226[(2)] = inst_39028);

(statearr_39138_39226[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (6))){
var inst_38983 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_38983)){
var statearr_39139_39227 = state_39097__$1;
(statearr_39139_39227[(1)] = (13));

} else {
var statearr_39140_39228 = state_39097__$1;
(statearr_39140_39228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (28))){
var inst_38995 = (state_39097[(8)]);
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39097__$1,(31),inst_38995);
} else {
if((state_val_39098 === (64))){
var inst_39089 = (state_39097[(2)]);
var inst_39064 = inst_39089;
var state_39097__$1 = (function (){var statearr_39141 = state_39097;
(statearr_39141[(7)] = inst_39064);

return statearr_39141;
})();
var statearr_39142_39229 = state_39097__$1;
(statearr_39142_39229[(2)] = null);

(statearr_39142_39229[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (51))){
var inst_39095 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39097__$1,inst_39095);
} else {
if((state_val_39098 === (25))){
var inst_38995 = (state_39097[(8)]);
var inst_39008 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38995);
var state_39097__$1 = state_39097;
var statearr_39143_39230 = state_39097__$1;
(statearr_39143_39230[(2)] = inst_39008);

(statearr_39143_39230[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (34))){
var inst_39028 = (state_39097[(10)]);
var inst_39034 = inst_39028.cljs$core$async$impl$protocols$ReadPort$;
var inst_39035 = (false) || (inst_39034);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39035)){
var statearr_39144_39231 = state_39097__$1;
(statearr_39144_39231[(1)] = (37));

} else {
var statearr_39145_39232 = state_39097__$1;
(statearr_39145_39232[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (17))){
var inst_38995 = (state_39097[(8)]);
var inst_38998 = (inst_38995 == null);
var inst_38999 = cljs.core.not.call(null,inst_38998);
var state_39097__$1 = state_39097;
if(inst_38999){
var statearr_39146_39233 = state_39097__$1;
(statearr_39146_39233[(1)] = (19));

} else {
var statearr_39147_39234 = state_39097__$1;
(statearr_39147_39234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (3))){
var inst_38992 = (state_39097[(2)]);
var inst_38993 = [cljs.core.str(iname),cljs.core.str(": ")].join('');
var inst_38994 = advenjure.utils.say_inline.call(null,inst_38993);
var inst_38995 = inst_38994;
var state_39097__$1 = (function (){var statearr_39148 = state_39097;
(statearr_39148[(11)] = inst_38992);

(statearr_39148[(8)] = inst_38995);

return statearr_39148;
})();
var statearr_39149_39235 = state_39097__$1;
(statearr_39149_39235[(2)] = null);

(statearr_39149_39235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (12))){
var inst_38977 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39150_39236 = state_39097__$1;
(statearr_39150_39236[(2)] = inst_38977);

(statearr_39150_39236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (2))){
var inst_38961 = (state_39097[(9)]);
var inst_38964 = (inst_38961 == null);
var inst_38965 = cljs.core.not.call(null,inst_38964);
var state_39097__$1 = state_39097;
if(inst_38965){
var statearr_39151_39237 = state_39097__$1;
(statearr_39151_39237[(1)] = (4));

} else {
var statearr_39152_39238 = state_39097__$1;
(statearr_39152_39238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (23))){
var inst_38995 = (state_39097[(8)]);
var inst_39005 = inst_38995.cljs$lang$protocol_mask$partition$;
var inst_39006 = (!inst_39005);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39006)){
var statearr_39153_39239 = state_39097__$1;
(statearr_39153_39239[(1)] = (25));

} else {
var statearr_39154_39240 = state_39097__$1;
(statearr_39154_39240[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (47))){
var inst_39059 = (state_39097[(12)]);
var state_39097__$1 = state_39097;
var statearr_39155_39241 = state_39097__$1;
(statearr_39155_39241[(2)] = inst_39059);

(statearr_39155_39241[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (35))){
var inst_39028 = (state_39097[(10)]);
var inst_39048 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39028);
var state_39097__$1 = state_39097;
var statearr_39156_39242 = state_39097__$1;
(statearr_39156_39242[(2)] = inst_39048);

(statearr_39156_39242[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (19))){
var inst_38995 = (state_39097[(8)]);
var inst_39001 = inst_38995.cljs$core$async$impl$protocols$ReadPort$;
var inst_39002 = (false) || (inst_39001);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39002)){
var statearr_39157_39243 = state_39097__$1;
(statearr_39157_39243[(1)] = (22));

} else {
var statearr_39158_39244 = state_39097__$1;
(statearr_39158_39244[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (57))){
var inst_39082 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39159_39245 = state_39097__$1;
(statearr_39159_39245[(2)] = inst_39082);

(statearr_39159_39245[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (11))){
var state_39097__$1 = state_39097;
var statearr_39160_39246 = state_39097__$1;
(statearr_39160_39246[(2)] = false);

(statearr_39160_39246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (9))){
var inst_38979 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39161_39247 = state_39097__$1;
(statearr_39161_39247[(2)] = inst_38979);

(statearr_39161_39247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (5))){
var inst_38961 = (state_39097[(9)]);
var inst_38981 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38961);
var state_39097__$1 = state_39097;
var statearr_39162_39248 = state_39097__$1;
(statearr_39162_39248[(2)] = inst_38981);

(statearr_39162_39248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (14))){
var inst_38961 = (state_39097[(9)]);
var state_39097__$1 = state_39097;
var statearr_39163_39249 = state_39097__$1;
(statearr_39163_39249[(2)] = inst_38961);

(statearr_39163_39249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (45))){
var inst_39057 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39164_39250 = state_39097__$1;
(statearr_39164_39250[(2)] = inst_39057);

(statearr_39164_39250[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (53))){
var inst_39064 = (state_39097[(7)]);
var inst_39084 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_39064);
var state_39097__$1 = state_39097;
var statearr_39165_39251 = state_39097__$1;
(statearr_39165_39251[(2)] = inst_39084);

(statearr_39165_39251[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (26))){
var state_39097__$1 = state_39097;
var statearr_39166_39252 = state_39097__$1;
(statearr_39166_39252[(2)] = false);

(statearr_39166_39252[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (16))){
var inst_38986 = (state_39097[(2)]);
var inst_38961 = inst_38986;
var state_39097__$1 = (function (){var statearr_39167 = state_39097;
(statearr_39167[(9)] = inst_38961);

return statearr_39167;
})();
var statearr_39168_39253 = state_39097__$1;
(statearr_39168_39253[(2)] = null);

(statearr_39168_39253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (38))){
var inst_39028 = (state_39097[(10)]);
var inst_39038 = inst_39028.cljs$lang$protocol_mask$partition$;
var inst_39039 = (!inst_39038);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39039)){
var statearr_39169_39254 = state_39097__$1;
(statearr_39169_39254[(1)] = (40));

} else {
var statearr_39170_39255 = state_39097__$1;
(statearr_39170_39255[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (30))){
var inst_39024 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39171_39256 = state_39097__$1;
(statearr_39171_39256[(2)] = inst_39024);

(statearr_39171_39256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (10))){
var inst_38961 = (state_39097[(9)]);
var inst_38974 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_38961);
var state_39097__$1 = state_39097;
var statearr_39172_39257 = state_39097__$1;
(statearr_39172_39257[(2)] = inst_38974);

(statearr_39172_39257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (18))){
var inst_38992 = (state_39097[(11)]);
var inst_39026 = (state_39097[(2)]);
var inst_39027 = advenjure.verbs.take_.call(null,inst_38992,iname);
var inst_39028 = inst_39027;
var state_39097__$1 = (function (){var statearr_39173 = state_39097;
(statearr_39173[(13)] = inst_39026);

(statearr_39173[(10)] = inst_39028);

return statearr_39173;
})();
var statearr_39174_39258 = state_39097__$1;
(statearr_39174_39258[(2)] = null);

(statearr_39174_39258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (52))){
var inst_39064 = (state_39097[(7)]);
var inst_39070 = inst_39064.cljs$core$async$impl$protocols$ReadPort$;
var inst_39071 = (false) || (inst_39070);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_39071)){
var statearr_39175_39259 = state_39097__$1;
(statearr_39175_39259[(1)] = (55));

} else {
var statearr_39176_39260 = state_39097__$1;
(statearr_39176_39260[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (42))){
var inst_39044 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39177_39261 = state_39097__$1;
(statearr_39177_39261[(2)] = inst_39044);

(statearr_39177_39261[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (37))){
var state_39097__$1 = state_39097;
var statearr_39178_39262 = state_39097__$1;
(statearr_39178_39262[(2)] = true);

(statearr_39178_39262[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (63))){
var inst_39093 = (state_39097[(2)]);
var state_39097__$1 = state_39097;
var statearr_39179_39263 = state_39097__$1;
(statearr_39179_39263[(2)] = inst_39093);

(statearr_39179_39263[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (8))){
var inst_38961 = (state_39097[(9)]);
var inst_38971 = inst_38961.cljs$lang$protocol_mask$partition$;
var inst_38972 = (!inst_38971);
var state_39097__$1 = state_39097;
if(cljs.core.truth_(inst_38972)){
var statearr_39180_39264 = state_39097__$1;
(statearr_39180_39264[(1)] = (10));

} else {
var statearr_39181_39265 = state_39097__$1;
(statearr_39181_39265[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39098 === (49))){
var inst_39063 = (state_39097[(2)]);
var inst_39064 = inst_39063;
var state_39097__$1 = (function (){var statearr_39182 = state_39097;
(statearr_39182[(7)] = inst_39064);

return statearr_39182;
})();
var statearr_39183_39266 = state_39097__$1;
(statearr_39183_39266[(2)] = null);

(statearr_39183_39266[(1)] = (50));


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
});})(c__24326__auto__,items,takeable,item_names))
;
return ((function (switch__24055__auto__,c__24326__auto__,items,takeable,item_names){
return (function() {
var advenjure$verbs$take_all_$_state_machine__24056__auto__ = null;
var advenjure$verbs$take_all_$_state_machine__24056__auto____0 = (function (){
var statearr_39187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39187[(0)] = advenjure$verbs$take_all_$_state_machine__24056__auto__);

(statearr_39187[(1)] = (1));

return statearr_39187;
});
var advenjure$verbs$take_all_$_state_machine__24056__auto____1 = (function (state_39097){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_39097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e39188){if((e39188 instanceof Object)){
var ex__24059__auto__ = e39188;
var statearr_39189_39267 = state_39097;
(statearr_39189_39267[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39268 = state_39097;
state_39097 = G__39268;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$verbs$take_all_$_state_machine__24056__auto__ = function(state_39097){
switch(arguments.length){
case 0:
return advenjure$verbs$take_all_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$verbs$take_all_$_state_machine__24056__auto____1.call(this,state_39097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$take_all_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$take_all_$_state_machine__24056__auto____0;
advenjure$verbs$take_all_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$take_all_$_state_machine__24056__auto____1;
return advenjure$verbs$take_all_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,items,takeable,item_names))
})();
var state__24328__auto__ = (function (){var statearr_39190 = f__24327__auto__.call(null);
(statearr_39190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_39190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,items,takeable,item_names))
);

return c__24326__auto__;
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

//# sourceMappingURL=verbs.js.map?rel=1522121094456