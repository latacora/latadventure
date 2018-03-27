// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.dialogs');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('advenjure.ui.output');
goog.require('advenjure.ui.input');
goog.require('advenjure.eval');
advenjure.dialogs.print_dialog = (function advenjure$dialogs$print_dialog(game_state,character,speech){
advenjure.ui.output.print_line.call(null,[cljs.core.str(character),cljs.core.str(" &mdash;"),cljs.core.str(speech)].join(''));

advenjure.ui.input.read_key.call(null);

return game_state;
});
/**
 * If line is a literal line, return the expression to print it.
 *   If it's a callable, return an expression that calls it.
 */
advenjure.dialogs.eval_line = (function advenjure$dialogs$eval_line(line){
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core.seq_QMARK_.call(null,line);
if(and__20443__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),null,new cljs.core.Symbol(null,"random","random",1082720414,null),null,new cljs.core.Symbol(null,"optional","optional",-600484260,null),null,new cljs.core.Symbol(null,"dialog","dialog",-1239285634,null),null], null), null).call(null,cljs.core.first.call(null,line));
} else {
return and__20443__auto__;
}
})())){
return advenjure.eval.eval.call(null,line);
} else {
if((cljs.core.seq_QMARK_.call(null,line)) && (typeof advenjure.eval.eval.call(null,cljs.core.first.call(null,line)) === 'string')){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","print-dialog","advenjure.dialogs/print-dialog",696750070,null)),line)));
} else {
var x__21289__auto__ = line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);

}
}
});
/**
 * Expand a dialog definition into a function to execute it.
 */
advenjure.dialogs.dialog = (function advenjure$dialogs$dialog(var_args){
var args__21537__auto__ = [];
var len__21530__auto___24716 = arguments.length;
var i__21531__auto___24717 = (0);
while(true){
if((i__21531__auto___24717 < len__21530__auto___24716)){
args__21537__auto__.push((arguments[i__21531__auto___24717]));

var G__24718 = (i__21531__auto___24717 + (1));
i__21531__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,lines){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__24712__auto__","game-state__24712__auto__",1002701796,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__24712__auto__","game-state__24712__auto__",1002701796,null)),cljs.core.map.call(null,advenjure.dialogs.eval_line,lines))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.dialog.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.dialog.cljs$lang$applyTo = (function (seq24713){
var G__24714 = cljs.core.first.call(null,seq24713);
var seq24713__$1 = cljs.core.next.call(null,seq24713);
var G__24715 = cljs.core.first.call(null,seq24713__$1);
var seq24713__$2 = cljs.core.next.call(null,seq24713__$1);
return advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic(G__24714,G__24715,seq24713__$2);
});


advenjure.dialogs.dialog.cljs$lang$macro = true;
advenjure.dialogs.event_QMARK_ = (function advenjure$dialogs$event_QMARK_(event_kw){
return (function (game_state){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state),event_kw);
});
});
advenjure.dialogs.not_event_QMARK_ = (function advenjure$dialogs$not_event_QMARK_(event_kw){
return cljs.core.comp.call(null,cljs.core.not,advenjure.dialogs.event_QMARK_.call(null,event_kw));
});
advenjure.dialogs.set_event = (function advenjure$dialogs$set_event(event_kw){
return (function (game_state){
return cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.conj,event_kw);
});
});
advenjure.dialogs.item_QMARK_ = (function advenjure$dialogs$item_QMARK_(item_name){
return (function (game_state){
return cljs.core.first.call(null,advenjure.items.get_from.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),item_name));
});
});
advenjure.dialogs.not_item_QMARK_ = (function advenjure$dialogs$not_item_QMARK_(item_name){
return cljs.core.comp.call(null,cljs.core.not,advenjure.dialogs.item_QMARK_.call(null,item_name));
});
/**
 * Check the list of option modifiers for :show-if and return the associated
 *   function if present.
 */
advenjure.dialogs.get_show_if = (function advenjure$dialogs$get_show_if(modifiers){
var G__24733 = modifiers;
var vec__24734 = G__24733;
var seq__24735 = cljs.core.seq.call(null,vec__24734);
var first__24736 = cljs.core.first.call(null,seq__24735);
var seq__24735__$1 = cljs.core.next.call(null,seq__24735);
var mod = first__24736;
var more = seq__24735__$1;
var G__24733__$1 = G__24733;
while(true){
var vec__24737 = G__24733__$1;
var seq__24738 = cljs.core.seq.call(null,vec__24737);
var first__24739 = cljs.core.first.call(null,seq__24738);
var seq__24738__$1 = cljs.core.next.call(null,seq__24738);
var mod__$1 = first__24739;
var more__$1 = seq__24738__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-if","show-if",467186064),mod__$1)){
return cljs.core.first.call(null,more__$1);
} else {
if(cljs.core.empty_QMARK_.call(null,more__$1)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"gs__24719__auto__","gs__24719__auto__",789440467,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
} else {
var G__24740 = more__$1;
G__24733__$1 = G__24740;
continue;

}
}
break;
}
});
/**
 * Take an option expression and build a spec hash for it.
 */
advenjure.dialogs.option_spec = (function advenjure$dialogs$option_spec(option){
var vec__24744 = option;
var seq__24745 = cljs.core.seq.call(null,vec__24744);
var first__24746 = cljs.core.first.call(null,seq__24745);
var seq__24745__$1 = cljs.core.next.call(null,seq__24745);
var title = first__24746;
var first__24746__$1 = cljs.core.first.call(null,seq__24745__$1);
var seq__24745__$2 = cljs.core.next.call(null,seq__24745__$1);
var dialog = first__24746__$1;
var modifiers = seq__24745__$2;
var modset = cljs.core.set.call(null,modifiers);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(cljs.core.gensym.call(null,"opt"))].join(''),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"dialog","dialog",1415150135),dialog], null),new cljs.core.Keyword(null,"go-back","go-back",1642157803),cljs.core.contains_QMARK_.call(null,modset,new cljs.core.Keyword(null,"go-back","go-back",1642157803))),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),cljs.core.contains_QMARK_.call(null,modset,new cljs.core.Keyword(null,"sticky","sticky",-2121213869))),new cljs.core.Keyword(null,"show-if","show-if",467186064),advenjure.dialogs.get_show_if.call(null,modifiers));
});
advenjure.dialogs.is_available = (function advenjure$dialogs$is_available(game_state,option){
var and__20443__auto__ = (function (){var or__20455__auto__ = new cljs.core.Keyword(null,"sticky","sticky",-2121213869).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"executed-dialogs","executed-dialogs",795280986).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option)));
}
})();
if(cljs.core.truth_(and__20443__auto__)){
return new cljs.core.Keyword(null,"show-if","show-if",467186064).cljs$core$IFn$_invoke$arity$1(option).call(null,game_state);
} else {
return and__20443__auto__;
}
});
advenjure.dialogs.filter_available = (function advenjure$dialogs$filter_available(game_state,options){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__24747_SHARP_){
return advenjure.dialogs.is_available.call(null,game_state,p1__24747_SHARP_);
}),options));
});
advenjure.dialogs.print_options = (function advenjure$dialogs$print_options(options){
advenjure.ui.output.print_line.call(null);

cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,(function (i,opt){
return advenjure.ui.output.print_line.call(null,[cljs.core.str((i + (1))),cljs.core.str(". "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(opt))].join(''));
}),options));

return advenjure.ui.output.print_line.call(null);
});
/**
 * Present the player with a list of options, read input and return the
 *   selected one. If only one option is available return that right away.
 */
advenjure.dialogs.select_option = (function advenjure$dialogs$select_option(options){
var amount = cljs.core.count.call(null,options);
var choices = cljs.core.set.call(null,cljs.core.range.call(null,(1),(amount + (1))));
if(cljs.core._EQ_.call(null,amount,(1))){
return cljs.core.first.call(null,options);
} else {
advenjure.dialogs.print_options.call(null,options);

var c__22619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22619__auto__,amount,choices){
return (function (){
var f__22620__auto__ = (function (){var switch__22598__auto__ = ((function (c__22619__auto__,amount,choices){
return (function (state_24965){
var state_val_24966 = (state_24965[(1)]);
if((state_val_24966 === (7))){
var state_24965__$1 = state_24965;
var statearr_24967_25022 = state_24965__$1;
(statearr_24967_25022[(2)] = true);

(statearr_24967_25022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (20))){
var inst_24918 = (state_24965[(7)]);
var inst_24958 = (inst_24918 - (1));
var inst_24959 = cljs.core.get.call(null,options,inst_24958);
var state_24965__$1 = state_24965;
var statearr_24968_25023 = state_24965__$1;
(statearr_24968_25023[(2)] = inst_24959);

(statearr_24968_25023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (27))){
var state_24965__$1 = state_24965;
var statearr_24969_25024 = state_24965__$1;
(statearr_24969_25024[(2)] = true);

(statearr_24969_25024[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (1))){
var inst_24885 = advenjure.ui.input.read_value.call(null);
var inst_24886 = inst_24885;
var state_24965__$1 = (function (){var statearr_24970 = state_24965;
(statearr_24970[(8)] = inst_24886);

return statearr_24970;
})();
var statearr_24971_25025 = state_24965__$1;
(statearr_24971_25025[(2)] = null);

(statearr_24971_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (24))){
var inst_24924 = (state_24965[(9)]);
var inst_24930 = inst_24924.cljs$core$async$impl$protocols$ReadPort$;
var inst_24931 = (false) || (inst_24930);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24931)){
var statearr_24972_25026 = state_24965__$1;
(statearr_24972_25026[(1)] = (27));

} else {
var statearr_24973_25027 = state_24965__$1;
(statearr_24973_25027[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (4))){
var inst_24886 = (state_24965[(8)]);
var inst_24892 = inst_24886.cljs$core$async$impl$protocols$ReadPort$;
var inst_24893 = (false) || (inst_24892);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24893)){
var statearr_24974_25028 = state_24965__$1;
(statearr_24974_25028[(1)] = (7));

} else {
var statearr_24975_25029 = state_24965__$1;
(statearr_24975_25029[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (15))){
var inst_24915 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24976_25030 = state_24965__$1;
(statearr_24976_25030[(2)] = inst_24915);

(statearr_24976_25030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (21))){
var inst_24961 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24977_25031 = state_24965__$1;
(statearr_24977_25031[(2)] = inst_24961);

(statearr_24977_25031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (31))){
var state_24965__$1 = state_24965;
var statearr_24978_25032 = state_24965__$1;
(statearr_24978_25032[(2)] = false);

(statearr_24978_25032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (32))){
var inst_24940 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24979_25033 = state_24965__$1;
(statearr_24979_25033[(2)] = inst_24940);

(statearr_24979_25033[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (33))){
var inst_24924 = (state_24965[(9)]);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24965__$1,(36),inst_24924);
} else {
if((state_val_24966 === (13))){
var inst_24886 = (state_24965[(8)]);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24965__$1,(16),inst_24886);
} else {
if((state_val_24966 === (22))){
var inst_24924 = (state_24965[(9)]);
var inst_24927 = (inst_24924 == null);
var inst_24928 = cljs.core.not.call(null,inst_24927);
var state_24965__$1 = state_24965;
if(inst_24928){
var statearr_24980_25034 = state_24965__$1;
(statearr_24980_25034[(1)] = (24));

} else {
var statearr_24981_25035 = state_24965__$1;
(statearr_24981_25035[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (36))){
var inst_24949 = (state_24965[(2)]);
var inst_24924 = inst_24949;
var state_24965__$1 = (function (){var statearr_24982 = state_24965;
(statearr_24982[(9)] = inst_24924);

return statearr_24982;
})();
var statearr_24983_25036 = state_24965__$1;
(statearr_24983_25036[(2)] = null);

(statearr_24983_25036[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (29))){
var inst_24942 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24984_25037 = state_24965__$1;
(statearr_24984_25037[(2)] = inst_24942);

(statearr_24984_25037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (6))){
var inst_24908 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24908)){
var statearr_24985_25038 = state_24965__$1;
(statearr_24985_25038[(1)] = (13));

} else {
var statearr_24986_25039 = state_24965__$1;
(statearr_24986_25039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (28))){
var inst_24924 = (state_24965[(9)]);
var inst_24934 = inst_24924.cljs$lang$protocol_mask$partition$;
var inst_24935 = (!inst_24934);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24935)){
var statearr_24987_25040 = state_24965__$1;
(statearr_24987_25040[(1)] = (30));

} else {
var statearr_24988_25041 = state_24965__$1;
(statearr_24988_25041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (25))){
var inst_24924 = (state_24965[(9)]);
var inst_24944 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_24924);
var state_24965__$1 = state_24965;
var statearr_24989_25042 = state_24965__$1;
(statearr_24989_25042[(2)] = inst_24944);

(statearr_24989_25042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (34))){
var inst_24924 = (state_24965[(9)]);
var state_24965__$1 = state_24965;
var statearr_24990_25043 = state_24965__$1;
(statearr_24990_25043[(2)] = inst_24924);

(statearr_24990_25043[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (17))){
var inst_24918 = (state_24965[(7)]);
var inst_24920 = cljs.core.contains_QMARK_.call(null,choices,inst_24918);
var inst_24921 = !(inst_24920);
var state_24965__$1 = state_24965;
if(inst_24921){
var statearr_24991_25044 = state_24965__$1;
(statearr_24991_25044[(1)] = (19));

} else {
var statearr_24992_25045 = state_24965__$1;
(statearr_24992_25045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (3))){
var inst_24917 = (state_24965[(2)]);
var inst_24918 = inst_24917;
var state_24965__$1 = (function (){var statearr_24993 = state_24965;
(statearr_24993[(7)] = inst_24918);

return statearr_24993;
})();
var statearr_24994_25046 = state_24965__$1;
(statearr_24994_25046[(2)] = null);

(statearr_24994_25046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (12))){
var inst_24902 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24995_25047 = state_24965__$1;
(statearr_24995_25047[(2)] = inst_24902);

(statearr_24995_25047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (2))){
var inst_24886 = (state_24965[(8)]);
var inst_24889 = (inst_24886 == null);
var inst_24890 = cljs.core.not.call(null,inst_24889);
var state_24965__$1 = state_24965;
if(inst_24890){
var statearr_24996_25048 = state_24965__$1;
(statearr_24996_25048[(1)] = (4));

} else {
var statearr_24997_25049 = state_24965__$1;
(statearr_24997_25049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (23))){
var inst_24955 = (state_24965[(2)]);
var inst_24918 = inst_24955;
var state_24965__$1 = (function (){var statearr_24998 = state_24965;
(statearr_24998[(7)] = inst_24918);

return statearr_24998;
})();
var statearr_24999_25050 = state_24965__$1;
(statearr_24999_25050[(2)] = null);

(statearr_24999_25050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (35))){
var inst_24953 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_25000_25051 = state_24965__$1;
(statearr_25000_25051[(2)] = inst_24953);

(statearr_25000_25051[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (19))){
var inst_24923 = advenjure.ui.input.read_value.call(null);
var inst_24924 = inst_24923;
var state_24965__$1 = (function (){var statearr_25001 = state_24965;
(statearr_25001[(9)] = inst_24924);

return statearr_25001;
})();
var statearr_25002_25052 = state_24965__$1;
(statearr_25002_25052[(2)] = null);

(statearr_25002_25052[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (11))){
var state_24965__$1 = state_24965;
var statearr_25003_25053 = state_24965__$1;
(statearr_25003_25053[(2)] = false);

(statearr_25003_25053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (9))){
var inst_24904 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_25004_25054 = state_24965__$1;
(statearr_25004_25054[(2)] = inst_24904);

(statearr_25004_25054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (5))){
var inst_24886 = (state_24965[(8)]);
var inst_24906 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_24886);
var state_24965__$1 = state_24965;
var statearr_25005_25055 = state_24965__$1;
(statearr_25005_25055[(2)] = inst_24906);

(statearr_25005_25055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (14))){
var inst_24886 = (state_24965[(8)]);
var state_24965__$1 = state_24965;
var statearr_25006_25056 = state_24965__$1;
(statearr_25006_25056[(2)] = inst_24886);

(statearr_25006_25056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (26))){
var inst_24946 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24946)){
var statearr_25007_25057 = state_24965__$1;
(statearr_25007_25057[(1)] = (33));

} else {
var statearr_25008_25058 = state_24965__$1;
(statearr_25008_25058[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (16))){
var inst_24911 = (state_24965[(2)]);
var inst_24886 = inst_24911;
var state_24965__$1 = (function (){var statearr_25009 = state_24965;
(statearr_25009[(8)] = inst_24886);

return statearr_25009;
})();
var statearr_25010_25059 = state_24965__$1;
(statearr_25010_25059[(2)] = null);

(statearr_25010_25059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (30))){
var inst_24924 = (state_24965[(9)]);
var inst_24937 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_24924);
var state_24965__$1 = state_24965;
var statearr_25011_25060 = state_24965__$1;
(statearr_25011_25060[(2)] = inst_24937);

(statearr_25011_25060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (10))){
var inst_24886 = (state_24965[(8)]);
var inst_24899 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_24886);
var state_24965__$1 = state_24965;
var statearr_25012_25061 = state_24965__$1;
(statearr_25012_25061[(2)] = inst_24899);

(statearr_25012_25061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (18))){
var inst_24963 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24965__$1,inst_24963);
} else {
if((state_val_24966 === (8))){
var inst_24886 = (state_24965[(8)]);
var inst_24896 = inst_24886.cljs$lang$protocol_mask$partition$;
var inst_24897 = (!inst_24896);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24897)){
var statearr_25013_25062 = state_24965__$1;
(statearr_25013_25062[(1)] = (10));

} else {
var statearr_25014_25063 = state_24965__$1;
(statearr_25014_25063[(1)] = (11));

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
});})(c__22619__auto__,amount,choices))
;
return ((function (switch__22598__auto__,c__22619__auto__,amount,choices){
return (function() {
var advenjure$dialogs$select_option_$_state_machine__22599__auto__ = null;
var advenjure$dialogs$select_option_$_state_machine__22599__auto____0 = (function (){
var statearr_25018 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25018[(0)] = advenjure$dialogs$select_option_$_state_machine__22599__auto__);

(statearr_25018[(1)] = (1));

return statearr_25018;
});
var advenjure$dialogs$select_option_$_state_machine__22599__auto____1 = (function (state_24965){
while(true){
var ret_value__22600__auto__ = (function (){try{while(true){
var result__22601__auto__ = switch__22598__auto__.call(null,state_24965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22601__auto__;
}
break;
}
}catch (e25019){if((e25019 instanceof Object)){
var ex__22602__auto__ = e25019;
var statearr_25020_25064 = state_24965;
(statearr_25020_25064[(5)] = ex__22602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25065 = state_24965;
state_24965 = G__25065;
continue;
} else {
return ret_value__22600__auto__;
}
break;
}
});
advenjure$dialogs$select_option_$_state_machine__22599__auto__ = function(state_24965){
switch(arguments.length){
case 0:
return advenjure$dialogs$select_option_$_state_machine__22599__auto____0.call(this);
case 1:
return advenjure$dialogs$select_option_$_state_machine__22599__auto____1.call(this,state_24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$dialogs$select_option_$_state_machine__22599__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$dialogs$select_option_$_state_machine__22599__auto____0;
advenjure$dialogs$select_option_$_state_machine__22599__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$dialogs$select_option_$_state_machine__22599__auto____1;
return advenjure$dialogs$select_option_$_state_machine__22599__auto__;
})()
;})(switch__22598__auto__,c__22619__auto__,amount,choices))
})();
var state__22621__auto__ = (function (){var statearr_25021 = f__22620__auto__.call(null);
(statearr_25021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22619__auto__);

return statearr_25021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22621__auto__);
});})(c__22619__auto__,amount,choices))
);

return c__22619__auto__;
}
});
advenjure.dialogs.execute_optional = (function advenjure$dialogs$execute_optional(game_state,options){
var c__22619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22619__auto__){
return (function (){
var f__22620__auto__ = (function (){var switch__22598__auto__ = ((function (c__22619__auto__){
return (function (state_25562){
var state_val_25563 = (state_25562[(1)]);
if((state_val_25563 === (65))){
var inst_25411 = (state_25562[(7)]);
var inst_25548 = (state_25562[(8)]);
var inst_25547 = (state_25562[(2)]);
var inst_25548__$1 = new cljs.core.Keyword(null,"go-back","go-back",1642157803).cljs$core$IFn$_invoke$arity$1(inst_25411);
var state_25562__$1 = (function (){var statearr_25564 = state_25562;
(statearr_25564[(8)] = inst_25548__$1);

(statearr_25564[(9)] = inst_25547);

return statearr_25564;
})();
if(cljs.core.truth_(inst_25548__$1)){
var statearr_25565_25684 = state_25562__$1;
(statearr_25565_25684[(1)] = (79));

} else {
var statearr_25566_25685 = state_25562__$1;
(statearr_25566_25685[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (70))){
var inst_25516 = (state_25562[(10)]);
var inst_25526 = inst_25516.cljs$lang$protocol_mask$partition$;
var inst_25527 = (!inst_25526);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25527)){
var statearr_25567_25686 = state_25562__$1;
(statearr_25567_25686[(1)] = (72));

} else {
var statearr_25568_25687 = state_25562__$1;
(statearr_25568_25687[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (62))){
var inst_25512 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25569_25688 = state_25562__$1;
(statearr_25569_25688[(2)] = inst_25512);

(statearr_25569_25688[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (74))){
var inst_25532 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25570_25689 = state_25562__$1;
(statearr_25570_25689[(2)] = inst_25532);

(statearr_25570_25689[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (7))){
var inst_25380 = (state_25562[(11)]);
var inst_25400 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25380);
var state_25562__$1 = state_25562;
var statearr_25571_25690 = state_25562__$1;
(statearr_25571_25690[(2)] = inst_25400);

(statearr_25571_25690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (59))){
var inst_25499 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25572_25691 = state_25562__$1;
(statearr_25572_25691[(2)] = inst_25499);

(statearr_25572_25691[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (20))){
var inst_25377 = (state_25562[(12)]);
var inst_25444 = (state_25562[(2)]);
var inst_25445 = inst_25444.call(null,inst_25377);
var inst_25446 = inst_25445;
var state_25562__$1 = (function (){var statearr_25573 = state_25562;
(statearr_25573[(13)] = inst_25446);

return statearr_25573;
})();
var statearr_25574_25692 = state_25562__$1;
(statearr_25574_25692[(2)] = null);

(statearr_25574_25692[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (72))){
var inst_25516 = (state_25562[(10)]);
var inst_25529 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25516);
var state_25562__$1 = state_25562;
var statearr_25575_25693 = state_25562__$1;
(statearr_25575_25693[(2)] = inst_25529);

(statearr_25575_25693[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (58))){
var state_25562__$1 = state_25562;
var statearr_25576_25694 = state_25562__$1;
(statearr_25576_25694[(2)] = false);

(statearr_25576_25694[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (60))){
var inst_25483 = (state_25562[(14)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(63),inst_25483);
} else {
if((state_val_25563 === (27))){
var inst_25413 = (state_25562[(15)]);
var inst_25426 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25413);
var state_25562__$1 = state_25562;
var statearr_25577_25695 = state_25562__$1;
(statearr_25577_25695[(2)] = inst_25426);

(statearr_25577_25695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (1))){
var inst_25375 = advenjure.dialogs.filter_available.call(null,game_state,options);
var inst_25376 = inst_25375;
var inst_25377 = game_state;
var state_25562__$1 = (function (){var statearr_25578 = state_25562;
(statearr_25578[(16)] = inst_25376);

(statearr_25578[(12)] = inst_25377);

return statearr_25578;
})();
var statearr_25579_25696 = state_25562__$1;
(statearr_25579_25696[(2)] = null);

(statearr_25579_25696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (69))){
var state_25562__$1 = state_25562;
var statearr_25580_25697 = state_25562__$1;
(statearr_25580_25697[(2)] = true);

(statearr_25580_25697[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (24))){
var state_25562__$1 = state_25562;
var statearr_25581_25698 = state_25562__$1;
(statearr_25581_25698[(2)] = true);

(statearr_25581_25698[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (55))){
var inst_25483 = (state_25562[(14)]);
var inst_25493 = inst_25483.cljs$lang$protocol_mask$partition$;
var inst_25494 = (!inst_25493);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25494)){
var statearr_25582_25699 = state_25562__$1;
(statearr_25582_25699[(1)] = (57));

} else {
var statearr_25583_25700 = state_25562__$1;
(statearr_25583_25700[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (39))){
var state_25562__$1 = state_25562;
var statearr_25584_25701 = state_25562__$1;
(statearr_25584_25701[(2)] = true);

(statearr_25584_25701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (46))){
var inst_25446 = (state_25562[(13)]);
var state_25562__$1 = state_25562;
var statearr_25585_25702 = state_25562__$1;
(statearr_25585_25702[(2)] = inst_25446);

(statearr_25585_25702[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (4))){
var inst_25380 = (state_25562[(11)]);
var inst_25383 = (inst_25380 == null);
var inst_25384 = cljs.core.not.call(null,inst_25383);
var state_25562__$1 = state_25562;
if(inst_25384){
var statearr_25586_25703 = state_25562__$1;
(statearr_25586_25703[(1)] = (6));

} else {
var statearr_25587_25704 = state_25562__$1;
(statearr_25587_25704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (77))){
var inst_25545 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25588_25705 = state_25562__$1;
(statearr_25588_25705[(2)] = inst_25545);

(statearr_25588_25705[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (54))){
var state_25562__$1 = state_25562;
var statearr_25589_25706 = state_25562__$1;
(statearr_25589_25706[(2)] = true);

(statearr_25589_25706[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (15))){
var inst_25380 = (state_25562[(11)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(18),inst_25380);
} else {
if((state_val_25563 === (48))){
var inst_25471 = (state_25562[(2)]);
var inst_25446 = inst_25471;
var state_25562__$1 = (function (){var statearr_25590 = state_25562;
(statearr_25590[(13)] = inst_25446);

return statearr_25590;
})();
var statearr_25591_25707 = state_25562__$1;
(statearr_25591_25707[(2)] = null);

(statearr_25591_25707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (50))){
var inst_25514 = (state_25562[(17)]);
var inst_25514__$1 = (state_25562[(2)]);
var inst_25515 = advenjure.dialogs.filter_available.call(null,inst_25514__$1,options);
var inst_25516 = inst_25515;
var state_25562__$1 = (function (){var statearr_25592 = state_25562;
(statearr_25592[(10)] = inst_25516);

(statearr_25592[(17)] = inst_25514__$1);

return statearr_25592;
})();
var statearr_25593_25708 = state_25562__$1;
(statearr_25593_25708[(2)] = null);

(statearr_25593_25708[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (75))){
var inst_25516 = (state_25562[(10)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(78),inst_25516);
} else {
if((state_val_25563 === (21))){
var inst_25413 = (state_25562[(15)]);
var inst_25419 = inst_25413.cljs$core$async$impl$protocols$ReadPort$;
var inst_25420 = (false) || (inst_25419);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25420)){
var statearr_25594_25709 = state_25562__$1;
(statearr_25594_25709[(1)] = (24));

} else {
var statearr_25595_25710 = state_25562__$1;
(statearr_25595_25710[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (31))){
var inst_25413 = (state_25562[(15)]);
var state_25562__$1 = state_25562;
var statearr_25596_25711 = state_25562__$1;
(statearr_25596_25711[(2)] = inst_25413);

(statearr_25596_25711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (32))){
var inst_25442 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25597_25712 = state_25562__$1;
(statearr_25597_25712[(2)] = inst_25442);

(statearr_25597_25712[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (40))){
var inst_25446 = (state_25562[(13)]);
var inst_25456 = inst_25446.cljs$lang$protocol_mask$partition$;
var inst_25457 = (!inst_25456);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25457)){
var statearr_25598_25713 = state_25562__$1;
(statearr_25598_25713[(1)] = (42));

} else {
var statearr_25599_25714 = state_25562__$1;
(statearr_25599_25714[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (56))){
var inst_25501 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25600_25715 = state_25562__$1;
(statearr_25600_25715[(2)] = inst_25501);

(statearr_25600_25715[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (33))){
var inst_25438 = (state_25562[(2)]);
var inst_25413 = inst_25438;
var state_25562__$1 = (function (){var statearr_25601 = state_25562;
(statearr_25601[(15)] = inst_25413);

return statearr_25601;
})();
var statearr_25602_25716 = state_25562__$1;
(statearr_25602_25716[(2)] = null);

(statearr_25602_25716[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (13))){
var state_25562__$1 = state_25562;
var statearr_25603_25717 = state_25562__$1;
(statearr_25603_25717[(2)] = false);

(statearr_25603_25717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (22))){
var inst_25413 = (state_25562[(15)]);
var inst_25433 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25413);
var state_25562__$1 = state_25562;
var statearr_25604_25718 = state_25562__$1;
(statearr_25604_25718[(2)] = inst_25433);

(statearr_25604_25718[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (36))){
var inst_25446 = (state_25562[(13)]);
var inst_25452 = inst_25446.cljs$core$async$impl$protocols$ReadPort$;
var inst_25453 = (false) || (inst_25452);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25453)){
var statearr_25605_25719 = state_25562__$1;
(statearr_25605_25719[(1)] = (39));

} else {
var statearr_25606_25720 = state_25562__$1;
(statearr_25606_25720[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (41))){
var inst_25464 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25607_25721 = state_25562__$1;
(statearr_25607_25721[(2)] = inst_25464);

(statearr_25607_25721[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (43))){
var state_25562__$1 = state_25562;
var statearr_25608_25722 = state_25562__$1;
(statearr_25608_25722[(2)] = false);

(statearr_25608_25722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (61))){
var inst_25483 = (state_25562[(14)]);
var state_25562__$1 = state_25562;
var statearr_25609_25723 = state_25562__$1;
(statearr_25609_25723[(2)] = inst_25483);

(statearr_25609_25723[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (29))){
var inst_25429 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25610_25724 = state_25562__$1;
(statearr_25610_25724[(2)] = inst_25429);

(statearr_25610_25724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (44))){
var inst_25462 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25611_25725 = state_25562__$1;
(statearr_25611_25725[(2)] = inst_25462);

(statearr_25611_25725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (6))){
var inst_25380 = (state_25562[(11)]);
var inst_25386 = inst_25380.cljs$core$async$impl$protocols$ReadPort$;
var inst_25387 = (false) || (inst_25386);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25387)){
var statearr_25612_25726 = state_25562__$1;
(statearr_25612_25726[(1)] = (9));

} else {
var statearr_25613_25727 = state_25562__$1;
(statearr_25613_25727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (28))){
var state_25562__$1 = state_25562;
var statearr_25614_25728 = state_25562__$1;
(statearr_25614_25728[(2)] = false);

(statearr_25614_25728[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (64))){
var inst_25516 = (state_25562[(10)]);
var inst_25519 = (inst_25516 == null);
var inst_25520 = cljs.core.not.call(null,inst_25519);
var state_25562__$1 = state_25562;
if(inst_25520){
var statearr_25615_25729 = state_25562__$1;
(statearr_25615_25729[(1)] = (66));

} else {
var statearr_25616_25730 = state_25562__$1;
(statearr_25616_25730[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (51))){
var inst_25483 = (state_25562[(14)]);
var inst_25489 = inst_25483.cljs$core$async$impl$protocols$ReadPort$;
var inst_25490 = (false) || (inst_25489);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25490)){
var statearr_25617_25731 = state_25562__$1;
(statearr_25617_25731[(1)] = (54));

} else {
var statearr_25618_25732 = state_25562__$1;
(statearr_25618_25732[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (25))){
var inst_25413 = (state_25562[(15)]);
var inst_25423 = inst_25413.cljs$lang$protocol_mask$partition$;
var inst_25424 = (!inst_25423);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25424)){
var statearr_25619_25733 = state_25562__$1;
(statearr_25619_25733[(1)] = (27));

} else {
var statearr_25620_25734 = state_25562__$1;
(statearr_25620_25734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (34))){
var inst_25446 = (state_25562[(13)]);
var inst_25449 = (inst_25446 == null);
var inst_25450 = cljs.core.not.call(null,inst_25449);
var state_25562__$1 = state_25562;
if(inst_25450){
var statearr_25621_25735 = state_25562__$1;
(statearr_25621_25735[(1)] = (36));

} else {
var statearr_25622_25736 = state_25562__$1;
(statearr_25622_25736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (17))){
var inst_25409 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25623_25737 = state_25562__$1;
(statearr_25623_25737[(2)] = inst_25409);

(statearr_25623_25737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (3))){
var inst_25560 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25562__$1,inst_25560);
} else {
if((state_val_25563 === (12))){
var inst_25380 = (state_25562[(11)]);
var inst_25393 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25380);
var state_25562__$1 = state_25562;
var statearr_25624_25738 = state_25562__$1;
(statearr_25624_25738[(2)] = inst_25393);

(statearr_25624_25738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (2))){
var inst_25376 = (state_25562[(16)]);
var inst_25379 = advenjure.dialogs.select_option.call(null,inst_25376);
var inst_25380 = inst_25379;
var state_25562__$1 = (function (){var statearr_25625 = state_25562;
(statearr_25625[(11)] = inst_25380);

return statearr_25625;
})();
var statearr_25626_25739 = state_25562__$1;
(statearr_25626_25739[(2)] = null);

(statearr_25626_25739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (66))){
var inst_25516 = (state_25562[(10)]);
var inst_25522 = inst_25516.cljs$core$async$impl$protocols$ReadPort$;
var inst_25523 = (false) || (inst_25522);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25523)){
var statearr_25627_25740 = state_25562__$1;
(statearr_25627_25740[(1)] = (69));

} else {
var statearr_25628_25741 = state_25562__$1;
(statearr_25628_25741[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (23))){
var inst_25435 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25435)){
var statearr_25629_25742 = state_25562__$1;
(statearr_25629_25742[(1)] = (30));

} else {
var statearr_25630_25743 = state_25562__$1;
(statearr_25630_25743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (47))){
var inst_25475 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25631_25744 = state_25562__$1;
(statearr_25631_25744[(2)] = inst_25475);

(statearr_25631_25744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (35))){
var inst_25411 = (state_25562[(7)]);
var inst_25477 = (state_25562[(2)]);
var inst_25478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25479 = [new cljs.core.Keyword(null,"executed-dialogs","executed-dialogs",795280986)];
var inst_25480 = (new cljs.core.PersistentVector(null,1,(5),inst_25478,inst_25479,null));
var inst_25481 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_25411);
var inst_25482 = cljs.core.update_in.call(null,inst_25477,inst_25480,cljs.core.conj,inst_25481);
var inst_25483 = inst_25482;
var state_25562__$1 = (function (){var statearr_25632 = state_25562;
(statearr_25632[(14)] = inst_25483);

return statearr_25632;
})();
var statearr_25633_25745 = state_25562__$1;
(statearr_25633_25745[(2)] = null);

(statearr_25633_25745[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (82))){
var inst_25514 = (state_25562[(17)]);
var state_25562__$1 = state_25562;
var statearr_25634_25746 = state_25562__$1;
(statearr_25634_25746[(2)] = inst_25514);

(statearr_25634_25746[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (76))){
var inst_25516 = (state_25562[(10)]);
var state_25562__$1 = state_25562;
var statearr_25635_25747 = state_25562__$1;
(statearr_25635_25747[(2)] = inst_25516);

(statearr_25635_25747[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (19))){
var inst_25413 = (state_25562[(15)]);
var inst_25416 = (inst_25413 == null);
var inst_25417 = cljs.core.not.call(null,inst_25416);
var state_25562__$1 = state_25562;
if(inst_25417){
var statearr_25636_25748 = state_25562__$1;
(statearr_25636_25748[(1)] = (21));

} else {
var statearr_25637_25749 = state_25562__$1;
(statearr_25637_25749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (57))){
var inst_25483 = (state_25562[(14)]);
var inst_25496 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25483);
var state_25562__$1 = state_25562;
var statearr_25638_25750 = state_25562__$1;
(statearr_25638_25750[(2)] = inst_25496);

(statearr_25638_25750[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (68))){
var inst_25538 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25538)){
var statearr_25639_25751 = state_25562__$1;
(statearr_25639_25751[(1)] = (75));

} else {
var statearr_25640_25752 = state_25562__$1;
(statearr_25640_25752[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (11))){
var inst_25398 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25641_25753 = state_25562__$1;
(statearr_25641_25753[(2)] = inst_25398);

(statearr_25641_25753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (9))){
var state_25562__$1 = state_25562;
var statearr_25642_25754 = state_25562__$1;
(statearr_25642_25754[(2)] = true);

(statearr_25642_25754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (5))){
var inst_25411 = (state_25562[(7)]);
var inst_25411__$1 = (state_25562[(2)]);
var inst_25412 = new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(inst_25411__$1);
var inst_25413 = inst_25412;
var state_25562__$1 = (function (){var statearr_25643 = state_25562;
(statearr_25643[(7)] = inst_25411__$1);

(statearr_25643[(15)] = inst_25413);

return statearr_25643;
})();
var statearr_25644_25755 = state_25562__$1;
(statearr_25644_25755[(2)] = null);

(statearr_25644_25755[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (83))){
var inst_25514 = (state_25562[(17)]);
var inst_25547 = (state_25562[(9)]);
var inst_25376 = inst_25547;
var inst_25377 = inst_25514;
var state_25562__$1 = (function (){var statearr_25645 = state_25562;
(statearr_25645[(16)] = inst_25376);

(statearr_25645[(12)] = inst_25377);

return statearr_25645;
})();
var statearr_25646_25756 = state_25562__$1;
(statearr_25646_25756[(2)] = null);

(statearr_25646_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (14))){
var inst_25396 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25647_25757 = state_25562__$1;
(statearr_25647_25757[(2)] = inst_25396);

(statearr_25647_25757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (45))){
var inst_25446 = (state_25562[(13)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(48),inst_25446);
} else {
if((state_val_25563 === (53))){
var inst_25505 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25505)){
var statearr_25648_25758 = state_25562__$1;
(statearr_25648_25758[(1)] = (60));

} else {
var statearr_25649_25759 = state_25562__$1;
(statearr_25649_25759[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (78))){
var inst_25541 = (state_25562[(2)]);
var inst_25516 = inst_25541;
var state_25562__$1 = (function (){var statearr_25650 = state_25562;
(statearr_25650[(10)] = inst_25516);

return statearr_25650;
})();
var statearr_25651_25760 = state_25562__$1;
(statearr_25651_25760[(2)] = null);

(statearr_25651_25760[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (26))){
var inst_25431 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25652_25761 = state_25562__$1;
(statearr_25652_25761[(2)] = inst_25431);

(statearr_25652_25761[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (16))){
var inst_25380 = (state_25562[(11)]);
var state_25562__$1 = state_25562;
var statearr_25653_25762 = state_25562__$1;
(statearr_25653_25762[(2)] = inst_25380);

(statearr_25653_25762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (81))){
var inst_25553 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25553)){
var statearr_25654_25763 = state_25562__$1;
(statearr_25654_25763[(1)] = (82));

} else {
var statearr_25655_25764 = state_25562__$1;
(statearr_25655_25764[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (79))){
var inst_25548 = (state_25562[(8)]);
var state_25562__$1 = state_25562;
var statearr_25656_25765 = state_25562__$1;
(statearr_25656_25765[(2)] = inst_25548);

(statearr_25656_25765[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (38))){
var inst_25468 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25468)){
var statearr_25657_25766 = state_25562__$1;
(statearr_25657_25766[(1)] = (45));

} else {
var statearr_25658_25767 = state_25562__$1;
(statearr_25658_25767[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (30))){
var inst_25413 = (state_25562[(15)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(33),inst_25413);
} else {
if((state_val_25563 === (73))){
var state_25562__$1 = state_25562;
var statearr_25659_25768 = state_25562__$1;
(statearr_25659_25768[(2)] = false);

(statearr_25659_25768[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (10))){
var inst_25380 = (state_25562[(11)]);
var inst_25390 = inst_25380.cljs$lang$protocol_mask$partition$;
var inst_25391 = (!inst_25390);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25391)){
var statearr_25660_25769 = state_25562__$1;
(statearr_25660_25769[(1)] = (12));

} else {
var statearr_25661_25770 = state_25562__$1;
(statearr_25661_25770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (18))){
var inst_25405 = (state_25562[(2)]);
var inst_25380 = inst_25405;
var state_25562__$1 = (function (){var statearr_25662 = state_25562;
(statearr_25662[(11)] = inst_25380);

return statearr_25662;
})();
var statearr_25663_25771 = state_25562__$1;
(statearr_25663_25771[(2)] = null);

(statearr_25663_25771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (52))){
var inst_25483 = (state_25562[(14)]);
var inst_25503 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25483);
var state_25562__$1 = state_25562;
var statearr_25664_25772 = state_25562__$1;
(statearr_25664_25772[(2)] = inst_25503);

(statearr_25664_25772[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (67))){
var inst_25516 = (state_25562[(10)]);
var inst_25536 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25516);
var state_25562__$1 = state_25562;
var statearr_25665_25773 = state_25562__$1;
(statearr_25665_25773[(2)] = inst_25536);

(statearr_25665_25773[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (71))){
var inst_25534 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25666_25774 = state_25562__$1;
(statearr_25666_25774[(2)] = inst_25534);

(statearr_25666_25774[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (42))){
var inst_25446 = (state_25562[(13)]);
var inst_25459 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25446);
var state_25562__$1 = state_25562;
var statearr_25667_25775 = state_25562__$1;
(statearr_25667_25775[(2)] = inst_25459);

(statearr_25667_25775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (80))){
var inst_25547 = (state_25562[(9)]);
var inst_25551 = cljs.core.empty_QMARK_.call(null,inst_25547);
var state_25562__$1 = state_25562;
var statearr_25668_25776 = state_25562__$1;
(statearr_25668_25776[(2)] = inst_25551);

(statearr_25668_25776[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (37))){
var inst_25446 = (state_25562[(13)]);
var inst_25466 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_25446);
var state_25562__$1 = state_25562;
var statearr_25669_25777 = state_25562__$1;
(statearr_25669_25777[(2)] = inst_25466);

(statearr_25669_25777[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (63))){
var inst_25508 = (state_25562[(2)]);
var inst_25483 = inst_25508;
var state_25562__$1 = (function (){var statearr_25670 = state_25562;
(statearr_25670[(14)] = inst_25483);

return statearr_25670;
})();
var statearr_25671_25778 = state_25562__$1;
(statearr_25671_25778[(2)] = null);

(statearr_25671_25778[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (8))){
var inst_25402 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25402)){
var statearr_25672_25779 = state_25562__$1;
(statearr_25672_25779[(1)] = (15));

} else {
var statearr_25673_25780 = state_25562__$1;
(statearr_25673_25780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (49))){
var inst_25483 = (state_25562[(14)]);
var inst_25486 = (inst_25483 == null);
var inst_25487 = cljs.core.not.call(null,inst_25486);
var state_25562__$1 = state_25562;
if(inst_25487){
var statearr_25674_25781 = state_25562__$1;
(statearr_25674_25781[(1)] = (51));

} else {
var statearr_25675_25782 = state_25562__$1;
(statearr_25675_25782[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (84))){
var inst_25558 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25676_25783 = state_25562__$1;
(statearr_25676_25783[(2)] = inst_25558);

(statearr_25676_25783[(1)] = (3));


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
});})(c__22619__auto__))
;
return ((function (switch__22598__auto__,c__22619__auto__){
return (function() {
var advenjure$dialogs$execute_optional_$_state_machine__22599__auto__ = null;
var advenjure$dialogs$execute_optional_$_state_machine__22599__auto____0 = (function (){
var statearr_25680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25680[(0)] = advenjure$dialogs$execute_optional_$_state_machine__22599__auto__);

(statearr_25680[(1)] = (1));

return statearr_25680;
});
var advenjure$dialogs$execute_optional_$_state_machine__22599__auto____1 = (function (state_25562){
while(true){
var ret_value__22600__auto__ = (function (){try{while(true){
var result__22601__auto__ = switch__22598__auto__.call(null,state_25562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22601__auto__;
}
break;
}
}catch (e25681){if((e25681 instanceof Object)){
var ex__22602__auto__ = e25681;
var statearr_25682_25784 = state_25562;
(statearr_25682_25784[(5)] = ex__22602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25562;
state_25562 = G__25785;
continue;
} else {
return ret_value__22600__auto__;
}
break;
}
});
advenjure$dialogs$execute_optional_$_state_machine__22599__auto__ = function(state_25562){
switch(arguments.length){
case 0:
return advenjure$dialogs$execute_optional_$_state_machine__22599__auto____0.call(this);
case 1:
return advenjure$dialogs$execute_optional_$_state_machine__22599__auto____1.call(this,state_25562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$dialogs$execute_optional_$_state_machine__22599__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$dialogs$execute_optional_$_state_machine__22599__auto____0;
advenjure$dialogs$execute_optional_$_state_machine__22599__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$dialogs$execute_optional_$_state_machine__22599__auto____1;
return advenjure$dialogs$execute_optional_$_state_machine__22599__auto__;
})()
;})(switch__22598__auto__,c__22619__auto__))
})();
var state__22621__auto__ = (function (){var statearr_25683 = f__22620__auto__.call(null);
(statearr_25683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22619__auto__);

return statearr_25683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22621__auto__);
});})(c__22619__auto__))
);

return c__22619__auto__;
});
/**
 * Present dialog options to the user and execute the one selected.
 */
advenjure.dialogs.optional = (function advenjure$dialogs$optional(var_args){
var args__21537__auto__ = [];
var len__21530__auto___25790 = arguments.length;
var i__21531__auto___25791 = (0);
while(true){
if((i__21531__auto___25791 < len__21530__auto___25790)){
args__21537__auto__.push((arguments[i__21531__auto___25791]));

var G__25792 = (i__21531__auto___25791 + (1));
i__21531__auto___25791 = G__25792;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.dialogs.optional.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.dialogs.optional.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options){
var specs = cljs.core.map.call(null,advenjure.dialogs.option_spec,options);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25786__auto__","game-state__25786__auto__",1765865380,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","execute-optional","advenjure.dialogs/execute-optional",564346458,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25786__auto__","game-state__25786__auto__",1765865380,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),specs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.optional.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.optional.cljs$lang$applyTo = (function (seq25787){
var G__25788 = cljs.core.first.call(null,seq25787);
var seq25787__$1 = cljs.core.next.call(null,seq25787);
var G__25789 = cljs.core.first.call(null,seq25787__$1);
var seq25787__$2 = cljs.core.next.call(null,seq25787__$1);
return advenjure.dialogs.optional.cljs$core$IFn$_invoke$arity$variadic(G__25788,G__25789,seq25787__$2);
});


advenjure.dialogs.optional.cljs$lang$macro = true;
/**
 * Given a list of dialog forms, return a function that would execute any of
 *   them randomly each time it's called.
 */
advenjure.dialogs.random = (function advenjure$dialogs$random(var_args){
var args__21537__auto__ = [];
var len__21530__auto___25798 = arguments.length;
var i__21531__auto___25799 = (0);
while(true){
if((i__21531__auto___25799 < len__21530__auto___25798)){
args__21537__auto__.push((arguments[i__21531__auto___25799]));

var G__25800 = (i__21531__auto___25799 + (1));
i__21531__auto___25799 = G__25800;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.dialogs.random.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.dialogs.random.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,lines){
var lines__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (l){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}),lines));
var size = cljs.core.count.call(null,lines__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25793__auto__","game-state__25793__auto__",-351219495,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"selected__25794__auto__","selected__25794__auto__",-1395439024,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__21289__auto__ = lines__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__21289__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"selected__25794__auto__","selected__25794__auto__",-1395439024,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25793__auto__","game-state__25793__auto__",-351219495,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.random.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.random.cljs$lang$applyTo = (function (seq25795){
var G__25796 = cljs.core.first.call(null,seq25795);
var seq25795__$1 = cljs.core.next.call(null,seq25795);
var G__25797 = cljs.core.first.call(null,seq25795__$1);
var seq25795__$2 = cljs.core.next.call(null,seq25795__$1);
return advenjure.dialogs.random.cljs$core$IFn$_invoke$arity$variadic(G__25796,G__25797,seq25795__$2);
});


advenjure.dialogs.random.cljs$lang$macro = true;
/**
 * Return a function that will test the condition function using the game-state
 *   and execute the dialog line if true. If false and a second line is given,
 *   that will be executed instead.
 */
advenjure.dialogs.conditional = (function advenjure$dialogs$conditional(var_args){
var args25803 = [];
var len__21530__auto___25806 = arguments.length;
var i__21531__auto___25807 = (0);
while(true){
if((i__21531__auto___25807 < len__21530__auto___25806)){
args25803.push((arguments[i__21531__auto___25807]));

var G__25808 = (i__21531__auto___25807 + (1));
i__21531__auto___25807 = G__25808;
continue;
} else {
}
break;
}

var G__25805 = args25803.length;
switch (G__25805) {
case 4:
return advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args25803.length - (2)))].join('')));

}
});

advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,condition,true_line){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25801__auto__","game-state__25801__auto__",-321587371,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25801__auto__","game-state__25801__auto__",-321587371,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = true_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25801__auto__","game-state__25801__auto__",-321587371,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25801__auto__","game-state__25801__auto__",-321587371,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,condition,true_line,false_line){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25802__auto__","game-state__25802__auto__",1765018441,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25802__auto__","game-state__25802__auto__",1765018441,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = true_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25802__auto__","game-state__25802__auto__",1765018441,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = false_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__25802__auto__","game-state__25802__auto__",1765018441,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.conditional.cljs$lang$maxFixedArity = 5;


advenjure.dialogs.conditional.cljs$lang$macro = true;

//# sourceMappingURL=dialogs.js.map?rel=1522168350374