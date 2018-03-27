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
var len__21530__auto___36441 = arguments.length;
var i__21531__auto___36442 = (0);
while(true){
if((i__21531__auto___36442 < len__21530__auto___36441)){
args__21537__auto__.push((arguments[i__21531__auto___36442]));

var G__36443 = (i__21531__auto___36442 + (1));
i__21531__auto___36442 = G__36443;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,lines){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__36435__auto__","game-state__36435__auto__",747289047,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__36435__auto__","game-state__36435__auto__",747289047,null)),cljs.core.map.call(null,advenjure.dialogs.eval_line,lines))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.dialog.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.dialog.cljs$lang$applyTo = (function (seq36436){
var G__36437 = cljs.core.first.call(null,seq36436);
var seq36436__$1 = cljs.core.next.call(null,seq36436);
var G__36438 = cljs.core.first.call(null,seq36436__$1);
var seq36436__$2 = cljs.core.next.call(null,seq36436__$1);
return advenjure.dialogs.dialog.cljs$core$IFn$_invoke$arity$variadic(G__36437,G__36438,seq36436__$2);
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
var G__36458 = modifiers;
var vec__36459 = G__36458;
var seq__36460 = cljs.core.seq.call(null,vec__36459);
var first__36461 = cljs.core.first.call(null,seq__36460);
var seq__36460__$1 = cljs.core.next.call(null,seq__36460);
var mod = first__36461;
var more = seq__36460__$1;
var G__36458__$1 = G__36458;
while(true){
var vec__36462 = G__36458__$1;
var seq__36463 = cljs.core.seq.call(null,vec__36462);
var first__36464 = cljs.core.first.call(null,seq__36463);
var seq__36463__$1 = cljs.core.next.call(null,seq__36463);
var mod__$1 = first__36464;
var more__$1 = seq__36463__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-if","show-if",467186064),mod__$1)){
return cljs.core.first.call(null,more__$1);
} else {
if(cljs.core.empty_QMARK_.call(null,more__$1)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"gs__36444__auto__","gs__36444__auto__",1526660141,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
} else {
var G__36468 = more__$1;
G__36458__$1 = G__36468;
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
var vec__36472 = option;
var seq__36473 = cljs.core.seq.call(null,vec__36472);
var first__36474 = cljs.core.first.call(null,seq__36473);
var seq__36473__$1 = cljs.core.next.call(null,seq__36473);
var title = first__36474;
var first__36474__$1 = cljs.core.first.call(null,seq__36473__$1);
var seq__36473__$2 = cljs.core.next.call(null,seq__36473__$1);
var dialog = first__36474__$1;
var modifiers = seq__36473__$2;
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
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__36489_SHARP_){
return advenjure.dialogs.is_available.call(null,game_state,p1__36489_SHARP_);
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

var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,amount,choices){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,amount,choices){
return (function (state_37053){
var state_val_37054 = (state_37053[(1)]);
if((state_val_37054 === (7))){
var state_37053__$1 = state_37053;
var statearr_37057_37186 = state_37053__$1;
(statearr_37057_37186[(2)] = true);

(statearr_37057_37186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (20))){
var inst_37003 = (state_37053[(7)]);
var inst_37044 = (inst_37003 - (1));
var inst_37045 = cljs.core.get.call(null,options,inst_37044);
var state_37053__$1 = state_37053;
var statearr_37058_37195 = state_37053__$1;
(statearr_37058_37195[(2)] = inst_37045);

(statearr_37058_37195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (27))){
var state_37053__$1 = state_37053;
var statearr_37059_37198 = state_37053__$1;
(statearr_37059_37198[(2)] = true);

(statearr_37059_37198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (1))){
var inst_36968 = advenjure.ui.input.read_value.call(null);
var inst_36969 = inst_36968;
var state_37053__$1 = (function (){var statearr_37062 = state_37053;
(statearr_37062[(8)] = inst_36969);

return statearr_37062;
})();
var statearr_37063_37204 = state_37053__$1;
(statearr_37063_37204[(2)] = null);

(statearr_37063_37204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (24))){
var inst_37009 = (state_37053[(9)]);
var inst_37016 = inst_37009.cljs$core$async$impl$protocols$ReadPort$;
var inst_37017 = (false) || (inst_37016);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37017)){
var statearr_37066_37205 = state_37053__$1;
(statearr_37066_37205[(1)] = (27));

} else {
var statearr_37067_37206 = state_37053__$1;
(statearr_37067_37206[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (4))){
var inst_36969 = (state_37053[(8)]);
var inst_36975 = inst_36969.cljs$core$async$impl$protocols$ReadPort$;
var inst_36976 = (false) || (inst_36975);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_36976)){
var statearr_37069_37207 = state_37053__$1;
(statearr_37069_37207[(1)] = (7));

} else {
var statearr_37071_37208 = state_37053__$1;
(statearr_37071_37208[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (15))){
var inst_36999 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37074_37209 = state_37053__$1;
(statearr_37074_37209[(2)] = inst_36999);

(statearr_37074_37209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (21))){
var inst_37047 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37078_37213 = state_37053__$1;
(statearr_37078_37213[(2)] = inst_37047);

(statearr_37078_37213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (31))){
var state_37053__$1 = state_37053;
var statearr_37080_37218 = state_37053__$1;
(statearr_37080_37218[(2)] = false);

(statearr_37080_37218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (32))){
var inst_37026 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37082_37223 = state_37053__$1;
(statearr_37082_37223[(2)] = inst_37026);

(statearr_37082_37223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (33))){
var inst_37009 = (state_37053[(9)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37053__$1,(36),inst_37009);
} else {
if((state_val_37054 === (13))){
var inst_36969 = (state_37053[(8)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37053__$1,(16),inst_36969);
} else {
if((state_val_37054 === (22))){
var inst_37009 = (state_37053[(9)]);
var inst_37012 = (inst_37009 == null);
var inst_37013 = cljs.core.not.call(null,inst_37012);
var state_37053__$1 = state_37053;
if(inst_37013){
var statearr_37085_37230 = state_37053__$1;
(statearr_37085_37230[(1)] = (24));

} else {
var statearr_37087_37231 = state_37053__$1;
(statearr_37087_37231[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (36))){
var inst_37035 = (state_37053[(2)]);
var inst_37009 = inst_37035;
var state_37053__$1 = (function (){var statearr_37094 = state_37053;
(statearr_37094[(9)] = inst_37009);

return statearr_37094;
})();
var statearr_37095_37235 = state_37053__$1;
(statearr_37095_37235[(2)] = null);

(statearr_37095_37235[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (29))){
var inst_37028 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37096_37238 = state_37053__$1;
(statearr_37096_37238[(2)] = inst_37028);

(statearr_37096_37238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (6))){
var inst_36992 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_36992)){
var statearr_37097_37241 = state_37053__$1;
(statearr_37097_37241[(1)] = (13));

} else {
var statearr_37100_37242 = state_37053__$1;
(statearr_37100_37242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (28))){
var inst_37009 = (state_37053[(9)]);
var inst_37020 = inst_37009.cljs$lang$protocol_mask$partition$;
var inst_37021 = (!inst_37020);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37021)){
var statearr_37102_37243 = state_37053__$1;
(statearr_37102_37243[(1)] = (30));

} else {
var statearr_37103_37244 = state_37053__$1;
(statearr_37103_37244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (25))){
var inst_37009 = (state_37053[(9)]);
var inst_37030 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37009);
var state_37053__$1 = state_37053;
var statearr_37104_37245 = state_37053__$1;
(statearr_37104_37245[(2)] = inst_37030);

(statearr_37104_37245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (34))){
var inst_37009 = (state_37053[(9)]);
var state_37053__$1 = state_37053;
var statearr_37105_37246 = state_37053__$1;
(statearr_37105_37246[(2)] = inst_37009);

(statearr_37105_37246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (17))){
var inst_37003 = (state_37053[(7)]);
var inst_37005 = cljs.core.contains_QMARK_.call(null,choices,inst_37003);
var inst_37006 = !(inst_37005);
var state_37053__$1 = state_37053;
if(inst_37006){
var statearr_37106_37250 = state_37053__$1;
(statearr_37106_37250[(1)] = (19));

} else {
var statearr_37107_37251 = state_37053__$1;
(statearr_37107_37251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (3))){
var inst_37002 = (state_37053[(2)]);
var inst_37003 = inst_37002;
var state_37053__$1 = (function (){var statearr_37108 = state_37053;
(statearr_37108[(7)] = inst_37003);

return statearr_37108;
})();
var statearr_37109_37252 = state_37053__$1;
(statearr_37109_37252[(2)] = null);

(statearr_37109_37252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (12))){
var inst_36986 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37111_37254 = state_37053__$1;
(statearr_37111_37254[(2)] = inst_36986);

(statearr_37111_37254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (2))){
var inst_36969 = (state_37053[(8)]);
var inst_36972 = (inst_36969 == null);
var inst_36973 = cljs.core.not.call(null,inst_36972);
var state_37053__$1 = state_37053;
if(inst_36973){
var statearr_37115_37258 = state_37053__$1;
(statearr_37115_37258[(1)] = (4));

} else {
var statearr_37116_37259 = state_37053__$1;
(statearr_37116_37259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (23))){
var inst_37041 = (state_37053[(2)]);
var inst_37003 = inst_37041;
var state_37053__$1 = (function (){var statearr_37118 = state_37053;
(statearr_37118[(7)] = inst_37003);

return statearr_37118;
})();
var statearr_37119_37262 = state_37053__$1;
(statearr_37119_37262[(2)] = null);

(statearr_37119_37262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (35))){
var inst_37039 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37121_37264 = state_37053__$1;
(statearr_37121_37264[(2)] = inst_37039);

(statearr_37121_37264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (19))){
var inst_37008 = advenjure.ui.input.read_value.call(null);
var inst_37009 = inst_37008;
var state_37053__$1 = (function (){var statearr_37123 = state_37053;
(statearr_37123[(9)] = inst_37009);

return statearr_37123;
})();
var statearr_37125_37266 = state_37053__$1;
(statearr_37125_37266[(2)] = null);

(statearr_37125_37266[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (11))){
var state_37053__$1 = state_37053;
var statearr_37127_37267 = state_37053__$1;
(statearr_37127_37267[(2)] = false);

(statearr_37127_37267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (9))){
var inst_36988 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37129_37268 = state_37053__$1;
(statearr_37129_37268[(2)] = inst_36988);

(statearr_37129_37268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (5))){
var inst_36969 = (state_37053[(8)]);
var inst_36990 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36969);
var state_37053__$1 = state_37053;
var statearr_37132_37270 = state_37053__$1;
(statearr_37132_37270[(2)] = inst_36990);

(statearr_37132_37270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (14))){
var inst_36969 = (state_37053[(8)]);
var state_37053__$1 = state_37053;
var statearr_37134_37271 = state_37053__$1;
(statearr_37134_37271[(2)] = inst_36969);

(statearr_37134_37271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (26))){
var inst_37032 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37032)){
var statearr_37136_37272 = state_37053__$1;
(statearr_37136_37272[(1)] = (33));

} else {
var statearr_37138_37274 = state_37053__$1;
(statearr_37138_37274[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (16))){
var inst_36995 = (state_37053[(2)]);
var inst_36969 = inst_36995;
var state_37053__$1 = (function (){var statearr_37140 = state_37053;
(statearr_37140[(8)] = inst_36969);

return statearr_37140;
})();
var statearr_37142_37275 = state_37053__$1;
(statearr_37142_37275[(2)] = null);

(statearr_37142_37275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (30))){
var inst_37009 = (state_37053[(9)]);
var inst_37023 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37009);
var state_37053__$1 = state_37053;
var statearr_37144_37277 = state_37053__$1;
(statearr_37144_37277[(2)] = inst_37023);

(statearr_37144_37277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (10))){
var inst_36969 = (state_37053[(8)]);
var inst_36983 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36969);
var state_37053__$1 = state_37053;
var statearr_37146_37278 = state_37053__$1;
(statearr_37146_37278[(2)] = inst_36983);

(statearr_37146_37278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (18))){
var inst_37049 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37053__$1,inst_37049);
} else {
if((state_val_37054 === (8))){
var inst_36969 = (state_37053[(8)]);
var inst_36979 = inst_36969.cljs$lang$protocol_mask$partition$;
var inst_36981 = (!inst_36979);
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_36981)){
var statearr_37149_37280 = state_37053__$1;
(statearr_37149_37280[(1)] = (10));

} else {
var statearr_37150_37281 = state_37053__$1;
(statearr_37150_37281[(1)] = (11));

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
});})(c__24228__auto__,amount,choices))
;
return ((function (switch__24031__auto__,c__24228__auto__,amount,choices){
return (function() {
var advenjure$dialogs$select_option_$_state_machine__24032__auto__ = null;
var advenjure$dialogs$select_option_$_state_machine__24032__auto____0 = (function (){
var statearr_37159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37159[(0)] = advenjure$dialogs$select_option_$_state_machine__24032__auto__);

(statearr_37159[(1)] = (1));

return statearr_37159;
});
var advenjure$dialogs$select_option_$_state_machine__24032__auto____1 = (function (state_37053){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_37053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e37162){if((e37162 instanceof Object)){
var ex__24035__auto__ = e37162;
var statearr_37163_37282 = state_37053;
(statearr_37163_37282[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37284 = state_37053;
state_37053 = G__37284;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$dialogs$select_option_$_state_machine__24032__auto__ = function(state_37053){
switch(arguments.length){
case 0:
return advenjure$dialogs$select_option_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$dialogs$select_option_$_state_machine__24032__auto____1.call(this,state_37053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$dialogs$select_option_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$dialogs$select_option_$_state_machine__24032__auto____0;
advenjure$dialogs$select_option_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$dialogs$select_option_$_state_machine__24032__auto____1;
return advenjure$dialogs$select_option_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,amount,choices))
})();
var state__24230__auto__ = (function (){var statearr_37167 = f__24229__auto__.call(null);
(statearr_37167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,amount,choices))
);

return c__24228__auto__;
}
});
advenjure.dialogs.execute_optional = (function advenjure$dialogs$execute_optional(game_state,options){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_37809){
var state_val_37810 = (state_37809[(1)]);
if((state_val_37810 === (65))){
var inst_37795 = (state_37809[(7)]);
var inst_37655 = (state_37809[(8)]);
var inst_37794 = (state_37809[(2)]);
var inst_37795__$1 = new cljs.core.Keyword(null,"go-back","go-back",1642157803).cljs$core$IFn$_invoke$arity$1(inst_37655);
var state_37809__$1 = (function (){var statearr_37812 = state_37809;
(statearr_37812[(7)] = inst_37795__$1);

(statearr_37812[(9)] = inst_37794);

return statearr_37812;
})();
if(cljs.core.truth_(inst_37795__$1)){
var statearr_37813_37965 = state_37809__$1;
(statearr_37813_37965[(1)] = (79));

} else {
var statearr_37814_37967 = state_37809__$1;
(statearr_37814_37967[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (70))){
var inst_37763 = (state_37809[(10)]);
var inst_37773 = inst_37763.cljs$lang$protocol_mask$partition$;
var inst_37774 = (!inst_37773);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37774)){
var statearr_37815_37969 = state_37809__$1;
(statearr_37815_37969[(1)] = (72));

} else {
var statearr_37816_37970 = state_37809__$1;
(statearr_37816_37970[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (62))){
var inst_37759 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37817_37971 = state_37809__$1;
(statearr_37817_37971[(2)] = inst_37759);

(statearr_37817_37971[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (74))){
var inst_37779 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37819_37973 = state_37809__$1;
(statearr_37819_37973[(2)] = inst_37779);

(statearr_37819_37973[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (7))){
var inst_37623 = (state_37809[(11)]);
var inst_37644 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37623);
var state_37809__$1 = state_37809;
var statearr_37820_37976 = state_37809__$1;
(statearr_37820_37976[(2)] = inst_37644);

(statearr_37820_37976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (59))){
var inst_37745 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37821_37978 = state_37809__$1;
(statearr_37821_37978[(2)] = inst_37745);

(statearr_37821_37978[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (20))){
var inst_37620 = (state_37809[(12)]);
var inst_37688 = (state_37809[(2)]);
var inst_37689 = inst_37688.call(null,inst_37620);
var inst_37690 = inst_37689;
var state_37809__$1 = (function (){var statearr_37822 = state_37809;
(statearr_37822[(13)] = inst_37690);

return statearr_37822;
})();
var statearr_37823_37981 = state_37809__$1;
(statearr_37823_37981[(2)] = null);

(statearr_37823_37981[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (72))){
var inst_37763 = (state_37809[(10)]);
var inst_37776 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37763);
var state_37809__$1 = state_37809;
var statearr_37824_37984 = state_37809__$1;
(statearr_37824_37984[(2)] = inst_37776);

(statearr_37824_37984[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (58))){
var state_37809__$1 = state_37809;
var statearr_37825_37987 = state_37809__$1;
(statearr_37825_37987[(2)] = false);

(statearr_37825_37987[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (60))){
var inst_37729 = (state_37809[(14)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(63),inst_37729);
} else {
if((state_val_37810 === (27))){
var inst_37657 = (state_37809[(15)]);
var inst_37670 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37657);
var state_37809__$1 = state_37809;
var statearr_37827_37990 = state_37809__$1;
(statearr_37827_37990[(2)] = inst_37670);

(statearr_37827_37990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (1))){
var inst_37618 = advenjure.dialogs.filter_available.call(null,game_state,options);
var inst_37619 = inst_37618;
var inst_37620 = game_state;
var state_37809__$1 = (function (){var statearr_37828 = state_37809;
(statearr_37828[(12)] = inst_37620);

(statearr_37828[(16)] = inst_37619);

return statearr_37828;
})();
var statearr_37829_37993 = state_37809__$1;
(statearr_37829_37993[(2)] = null);

(statearr_37829_37993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (69))){
var state_37809__$1 = state_37809;
var statearr_37830_37995 = state_37809__$1;
(statearr_37830_37995[(2)] = true);

(statearr_37830_37995[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (24))){
var state_37809__$1 = state_37809;
var statearr_37831_37997 = state_37809__$1;
(statearr_37831_37997[(2)] = true);

(statearr_37831_37997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (55))){
var inst_37729 = (state_37809[(14)]);
var inst_37739 = inst_37729.cljs$lang$protocol_mask$partition$;
var inst_37740 = (!inst_37739);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37740)){
var statearr_37832_37999 = state_37809__$1;
(statearr_37832_37999[(1)] = (57));

} else {
var statearr_37833_38001 = state_37809__$1;
(statearr_37833_38001[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (39))){
var state_37809__$1 = state_37809;
var statearr_37834_38002 = state_37809__$1;
(statearr_37834_38002[(2)] = true);

(statearr_37834_38002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (46))){
var inst_37690 = (state_37809[(13)]);
var state_37809__$1 = state_37809;
var statearr_37835_38003 = state_37809__$1;
(statearr_37835_38003[(2)] = inst_37690);

(statearr_37835_38003[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (4))){
var inst_37623 = (state_37809[(11)]);
var inst_37627 = (inst_37623 == null);
var inst_37628 = cljs.core.not.call(null,inst_37627);
var state_37809__$1 = state_37809;
if(inst_37628){
var statearr_37836_38005 = state_37809__$1;
(statearr_37836_38005[(1)] = (6));

} else {
var statearr_37837_38007 = state_37809__$1;
(statearr_37837_38007[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (77))){
var inst_37792 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37838_38009 = state_37809__$1;
(statearr_37838_38009[(2)] = inst_37792);

(statearr_37838_38009[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (54))){
var state_37809__$1 = state_37809;
var statearr_37840_38012 = state_37809__$1;
(statearr_37840_38012[(2)] = true);

(statearr_37840_38012[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (15))){
var inst_37623 = (state_37809[(11)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(18),inst_37623);
} else {
if((state_val_37810 === (48))){
var inst_37716 = (state_37809[(2)]);
var inst_37690 = inst_37716;
var state_37809__$1 = (function (){var statearr_37841 = state_37809;
(statearr_37841[(13)] = inst_37690);

return statearr_37841;
})();
var statearr_37842_38013 = state_37809__$1;
(statearr_37842_38013[(2)] = null);

(statearr_37842_38013[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (50))){
var inst_37761 = (state_37809[(17)]);
var inst_37761__$1 = (state_37809[(2)]);
var inst_37762 = advenjure.dialogs.filter_available.call(null,inst_37761__$1,options);
var inst_37763 = inst_37762;
var state_37809__$1 = (function (){var statearr_37843 = state_37809;
(statearr_37843[(10)] = inst_37763);

(statearr_37843[(17)] = inst_37761__$1);

return statearr_37843;
})();
var statearr_37844_38016 = state_37809__$1;
(statearr_37844_38016[(2)] = null);

(statearr_37844_38016[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (75))){
var inst_37763 = (state_37809[(10)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(78),inst_37763);
} else {
if((state_val_37810 === (21))){
var inst_37657 = (state_37809[(15)]);
var inst_37663 = inst_37657.cljs$core$async$impl$protocols$ReadPort$;
var inst_37664 = (false) || (inst_37663);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37664)){
var statearr_37847_38019 = state_37809__$1;
(statearr_37847_38019[(1)] = (24));

} else {
var statearr_37848_38021 = state_37809__$1;
(statearr_37848_38021[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (31))){
var inst_37657 = (state_37809[(15)]);
var state_37809__$1 = state_37809;
var statearr_37849_38023 = state_37809__$1;
(statearr_37849_38023[(2)] = inst_37657);

(statearr_37849_38023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (32))){
var inst_37686 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37856_38025 = state_37809__$1;
(statearr_37856_38025[(2)] = inst_37686);

(statearr_37856_38025[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (40))){
var inst_37690 = (state_37809[(13)]);
var inst_37701 = inst_37690.cljs$lang$protocol_mask$partition$;
var inst_37702 = (!inst_37701);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37702)){
var statearr_37857_38028 = state_37809__$1;
(statearr_37857_38028[(1)] = (42));

} else {
var statearr_37858_38029 = state_37809__$1;
(statearr_37858_38029[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (56))){
var inst_37747 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37861_38031 = state_37809__$1;
(statearr_37861_38031[(2)] = inst_37747);

(statearr_37861_38031[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (33))){
var inst_37682 = (state_37809[(2)]);
var inst_37657 = inst_37682;
var state_37809__$1 = (function (){var statearr_37862 = state_37809;
(statearr_37862[(15)] = inst_37657);

return statearr_37862;
})();
var statearr_37863_38034 = state_37809__$1;
(statearr_37863_38034[(2)] = null);

(statearr_37863_38034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (13))){
var state_37809__$1 = state_37809;
var statearr_37864_38036 = state_37809__$1;
(statearr_37864_38036[(2)] = false);

(statearr_37864_38036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (22))){
var inst_37657 = (state_37809[(15)]);
var inst_37677 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37657);
var state_37809__$1 = state_37809;
var statearr_37865_38039 = state_37809__$1;
(statearr_37865_38039[(2)] = inst_37677);

(statearr_37865_38039[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (36))){
var inst_37690 = (state_37809[(13)]);
var inst_37697 = inst_37690.cljs$core$async$impl$protocols$ReadPort$;
var inst_37698 = (false) || (inst_37697);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37698)){
var statearr_37866_38041 = state_37809__$1;
(statearr_37866_38041[(1)] = (39));

} else {
var statearr_37867_38042 = state_37809__$1;
(statearr_37867_38042[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (41))){
var inst_37709 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37868_38044 = state_37809__$1;
(statearr_37868_38044[(2)] = inst_37709);

(statearr_37868_38044[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (43))){
var state_37809__$1 = state_37809;
var statearr_37869_38047 = state_37809__$1;
(statearr_37869_38047[(2)] = false);

(statearr_37869_38047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (61))){
var inst_37729 = (state_37809[(14)]);
var state_37809__$1 = state_37809;
var statearr_37871_38049 = state_37809__$1;
(statearr_37871_38049[(2)] = inst_37729);

(statearr_37871_38049[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (29))){
var inst_37673 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37872_38050 = state_37809__$1;
(statearr_37872_38050[(2)] = inst_37673);

(statearr_37872_38050[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (44))){
var inst_37707 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37873_38052 = state_37809__$1;
(statearr_37873_38052[(2)] = inst_37707);

(statearr_37873_38052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (6))){
var inst_37623 = (state_37809[(11)]);
var inst_37630 = inst_37623.cljs$core$async$impl$protocols$ReadPort$;
var inst_37631 = (false) || (inst_37630);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37631)){
var statearr_37875_38054 = state_37809__$1;
(statearr_37875_38054[(1)] = (9));

} else {
var statearr_37876_38055 = state_37809__$1;
(statearr_37876_38055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (28))){
var state_37809__$1 = state_37809;
var statearr_37877_38057 = state_37809__$1;
(statearr_37877_38057[(2)] = false);

(statearr_37877_38057[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (64))){
var inst_37763 = (state_37809[(10)]);
var inst_37766 = (inst_37763 == null);
var inst_37767 = cljs.core.not.call(null,inst_37766);
var state_37809__$1 = state_37809;
if(inst_37767){
var statearr_37878_38059 = state_37809__$1;
(statearr_37878_38059[(1)] = (66));

} else {
var statearr_37880_38060 = state_37809__$1;
(statearr_37880_38060[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (51))){
var inst_37729 = (state_37809[(14)]);
var inst_37735 = inst_37729.cljs$core$async$impl$protocols$ReadPort$;
var inst_37736 = (false) || (inst_37735);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37736)){
var statearr_37881_38061 = state_37809__$1;
(statearr_37881_38061[(1)] = (54));

} else {
var statearr_37882_38062 = state_37809__$1;
(statearr_37882_38062[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (25))){
var inst_37657 = (state_37809[(15)]);
var inst_37667 = inst_37657.cljs$lang$protocol_mask$partition$;
var inst_37668 = (!inst_37667);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37668)){
var statearr_37883_38064 = state_37809__$1;
(statearr_37883_38064[(1)] = (27));

} else {
var statearr_37884_38065 = state_37809__$1;
(statearr_37884_38065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (34))){
var inst_37690 = (state_37809[(13)]);
var inst_37693 = (inst_37690 == null);
var inst_37694 = cljs.core.not.call(null,inst_37693);
var state_37809__$1 = state_37809;
if(inst_37694){
var statearr_37885_38068 = state_37809__$1;
(statearr_37885_38068[(1)] = (36));

} else {
var statearr_37886_38070 = state_37809__$1;
(statearr_37886_38070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (17))){
var inst_37653 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37887_38072 = state_37809__$1;
(statearr_37887_38072[(2)] = inst_37653);

(statearr_37887_38072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (3))){
var inst_37807 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37809__$1,inst_37807);
} else {
if((state_val_37810 === (12))){
var inst_37623 = (state_37809[(11)]);
var inst_37637 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37623);
var state_37809__$1 = state_37809;
var statearr_37889_38074 = state_37809__$1;
(statearr_37889_38074[(2)] = inst_37637);

(statearr_37889_38074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (2))){
var inst_37619 = (state_37809[(16)]);
var inst_37622 = advenjure.dialogs.select_option.call(null,inst_37619);
var inst_37623 = inst_37622;
var state_37809__$1 = (function (){var statearr_37891 = state_37809;
(statearr_37891[(11)] = inst_37623);

return statearr_37891;
})();
var statearr_37892_38077 = state_37809__$1;
(statearr_37892_38077[(2)] = null);

(statearr_37892_38077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (66))){
var inst_37763 = (state_37809[(10)]);
var inst_37769 = inst_37763.cljs$core$async$impl$protocols$ReadPort$;
var inst_37770 = (false) || (inst_37769);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37770)){
var statearr_37893_38079 = state_37809__$1;
(statearr_37893_38079[(1)] = (69));

} else {
var statearr_37894_38081 = state_37809__$1;
(statearr_37894_38081[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (23))){
var inst_37679 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37679)){
var statearr_37895_38083 = state_37809__$1;
(statearr_37895_38083[(1)] = (30));

} else {
var statearr_37896_38085 = state_37809__$1;
(statearr_37896_38085[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (47))){
var inst_37720 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37899_38086 = state_37809__$1;
(statearr_37899_38086[(2)] = inst_37720);

(statearr_37899_38086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (35))){
var inst_37655 = (state_37809[(8)]);
var inst_37722 = (state_37809[(2)]);
var inst_37724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37725 = [new cljs.core.Keyword(null,"executed-dialogs","executed-dialogs",795280986)];
var inst_37726 = (new cljs.core.PersistentVector(null,1,(5),inst_37724,inst_37725,null));
var inst_37727 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_37655);
var inst_37728 = cljs.core.update_in.call(null,inst_37722,inst_37726,cljs.core.conj,inst_37727);
var inst_37729 = inst_37728;
var state_37809__$1 = (function (){var statearr_37900 = state_37809;
(statearr_37900[(14)] = inst_37729);

return statearr_37900;
})();
var statearr_37901_38092 = state_37809__$1;
(statearr_37901_38092[(2)] = null);

(statearr_37901_38092[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (82))){
var inst_37761 = (state_37809[(17)]);
var state_37809__$1 = state_37809;
var statearr_37902_38093 = state_37809__$1;
(statearr_37902_38093[(2)] = inst_37761);

(statearr_37902_38093[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (76))){
var inst_37763 = (state_37809[(10)]);
var state_37809__$1 = state_37809;
var statearr_37903_38095 = state_37809__$1;
(statearr_37903_38095[(2)] = inst_37763);

(statearr_37903_38095[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (19))){
var inst_37657 = (state_37809[(15)]);
var inst_37660 = (inst_37657 == null);
var inst_37661 = cljs.core.not.call(null,inst_37660);
var state_37809__$1 = state_37809;
if(inst_37661){
var statearr_37904_38097 = state_37809__$1;
(statearr_37904_38097[(1)] = (21));

} else {
var statearr_37905_38098 = state_37809__$1;
(statearr_37905_38098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (57))){
var inst_37729 = (state_37809[(14)]);
var inst_37742 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37729);
var state_37809__$1 = state_37809;
var statearr_37906_38100 = state_37809__$1;
(statearr_37906_38100[(2)] = inst_37742);

(statearr_37906_38100[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (68))){
var inst_37785 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37785)){
var statearr_37907_38102 = state_37809__$1;
(statearr_37907_38102[(1)] = (75));

} else {
var statearr_37908_38103 = state_37809__$1;
(statearr_37908_38103[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (11))){
var inst_37642 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37912_38106 = state_37809__$1;
(statearr_37912_38106[(2)] = inst_37642);

(statearr_37912_38106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (9))){
var state_37809__$1 = state_37809;
var statearr_37914_38108 = state_37809__$1;
(statearr_37914_38108[(2)] = true);

(statearr_37914_38108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (5))){
var inst_37655 = (state_37809[(8)]);
var inst_37655__$1 = (state_37809[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(inst_37655__$1);
var inst_37657 = inst_37656;
var state_37809__$1 = (function (){var statearr_37915 = state_37809;
(statearr_37915[(15)] = inst_37657);

(statearr_37915[(8)] = inst_37655__$1);

return statearr_37915;
})();
var statearr_37916_38109 = state_37809__$1;
(statearr_37916_38109[(2)] = null);

(statearr_37916_38109[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (83))){
var inst_37761 = (state_37809[(17)]);
var inst_37794 = (state_37809[(9)]);
var inst_37619 = inst_37794;
var inst_37620 = inst_37761;
var state_37809__$1 = (function (){var statearr_37917 = state_37809;
(statearr_37917[(12)] = inst_37620);

(statearr_37917[(16)] = inst_37619);

return statearr_37917;
})();
var statearr_37918_38111 = state_37809__$1;
(statearr_37918_38111[(2)] = null);

(statearr_37918_38111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (14))){
var inst_37640 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37919_38113 = state_37809__$1;
(statearr_37919_38113[(2)] = inst_37640);

(statearr_37919_38113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (45))){
var inst_37690 = (state_37809[(13)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(48),inst_37690);
} else {
if((state_val_37810 === (53))){
var inst_37751 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37751)){
var statearr_37922_38116 = state_37809__$1;
(statearr_37922_38116[(1)] = (60));

} else {
var statearr_37923_38117 = state_37809__$1;
(statearr_37923_38117[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (78))){
var inst_37788 = (state_37809[(2)]);
var inst_37763 = inst_37788;
var state_37809__$1 = (function (){var statearr_37924 = state_37809;
(statearr_37924[(10)] = inst_37763);

return statearr_37924;
})();
var statearr_37925_38119 = state_37809__$1;
(statearr_37925_38119[(2)] = null);

(statearr_37925_38119[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (26))){
var inst_37675 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37926_38121 = state_37809__$1;
(statearr_37926_38121[(2)] = inst_37675);

(statearr_37926_38121[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (16))){
var inst_37623 = (state_37809[(11)]);
var state_37809__$1 = state_37809;
var statearr_37927_38122 = state_37809__$1;
(statearr_37927_38122[(2)] = inst_37623);

(statearr_37927_38122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (81))){
var inst_37800 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37800)){
var statearr_37928_38123 = state_37809__$1;
(statearr_37928_38123[(1)] = (82));

} else {
var statearr_37929_38124 = state_37809__$1;
(statearr_37929_38124[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (79))){
var inst_37795 = (state_37809[(7)]);
var state_37809__$1 = state_37809;
var statearr_37930_38125 = state_37809__$1;
(statearr_37930_38125[(2)] = inst_37795);

(statearr_37930_38125[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (38))){
var inst_37713 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37713)){
var statearr_37931_38126 = state_37809__$1;
(statearr_37931_38126[(1)] = (45));

} else {
var statearr_37932_38127 = state_37809__$1;
(statearr_37932_38127[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (30))){
var inst_37657 = (state_37809[(15)]);
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(33),inst_37657);
} else {
if((state_val_37810 === (73))){
var state_37809__$1 = state_37809;
var statearr_37933_38130 = state_37809__$1;
(statearr_37933_38130[(2)] = false);

(statearr_37933_38130[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (10))){
var inst_37623 = (state_37809[(11)]);
var inst_37634 = inst_37623.cljs$lang$protocol_mask$partition$;
var inst_37635 = (!inst_37634);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37635)){
var statearr_37934_38131 = state_37809__$1;
(statearr_37934_38131[(1)] = (12));

} else {
var statearr_37935_38132 = state_37809__$1;
(statearr_37935_38132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (18))){
var inst_37649 = (state_37809[(2)]);
var inst_37623 = inst_37649;
var state_37809__$1 = (function (){var statearr_37936 = state_37809;
(statearr_37936[(11)] = inst_37623);

return statearr_37936;
})();
var statearr_37937_38134 = state_37809__$1;
(statearr_37937_38134[(2)] = null);

(statearr_37937_38134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (52))){
var inst_37729 = (state_37809[(14)]);
var inst_37749 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37729);
var state_37809__$1 = state_37809;
var statearr_37938_38136 = state_37809__$1;
(statearr_37938_38136[(2)] = inst_37749);

(statearr_37938_38136[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (67))){
var inst_37763 = (state_37809[(10)]);
var inst_37783 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37763);
var state_37809__$1 = state_37809;
var statearr_37939_38138 = state_37809__$1;
(statearr_37939_38138[(2)] = inst_37783);

(statearr_37939_38138[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (71))){
var inst_37781 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37940_38140 = state_37809__$1;
(statearr_37940_38140[(2)] = inst_37781);

(statearr_37940_38140[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (42))){
var inst_37690 = (state_37809[(13)]);
var inst_37704 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37690);
var state_37809__$1 = state_37809;
var statearr_37941_38143 = state_37809__$1;
(statearr_37941_38143[(2)] = inst_37704);

(statearr_37941_38143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (80))){
var inst_37794 = (state_37809[(9)]);
var inst_37798 = cljs.core.empty_QMARK_.call(null,inst_37794);
var state_37809__$1 = state_37809;
var statearr_37942_38146 = state_37809__$1;
(statearr_37942_38146[(2)] = inst_37798);

(statearr_37942_38146[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (37))){
var inst_37690 = (state_37809[(13)]);
var inst_37711 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37690);
var state_37809__$1 = state_37809;
var statearr_37944_38147 = state_37809__$1;
(statearr_37944_38147[(2)] = inst_37711);

(statearr_37944_38147[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (63))){
var inst_37755 = (state_37809[(2)]);
var inst_37729 = inst_37755;
var state_37809__$1 = (function (){var statearr_37946 = state_37809;
(statearr_37946[(14)] = inst_37729);

return statearr_37946;
})();
var statearr_37947_38148 = state_37809__$1;
(statearr_37947_38148[(2)] = null);

(statearr_37947_38148[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (8))){
var inst_37646 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
if(cljs.core.truth_(inst_37646)){
var statearr_37948_38150 = state_37809__$1;
(statearr_37948_38150[(1)] = (15));

} else {
var statearr_37949_38151 = state_37809__$1;
(statearr_37949_38151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (49))){
var inst_37729 = (state_37809[(14)]);
var inst_37732 = (inst_37729 == null);
var inst_37733 = cljs.core.not.call(null,inst_37732);
var state_37809__$1 = state_37809;
if(inst_37733){
var statearr_37950_38152 = state_37809__$1;
(statearr_37950_38152[(1)] = (51));

} else {
var statearr_37951_38153 = state_37809__$1;
(statearr_37951_38153[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37810 === (84))){
var inst_37805 = (state_37809[(2)]);
var state_37809__$1 = state_37809;
var statearr_37953_38154 = state_37809__$1;
(statearr_37953_38154[(2)] = inst_37805);

(statearr_37953_38154[(1)] = (3));


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
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var advenjure$dialogs$execute_optional_$_state_machine__24032__auto__ = null;
var advenjure$dialogs$execute_optional_$_state_machine__24032__auto____0 = (function (){
var statearr_37957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37957[(0)] = advenjure$dialogs$execute_optional_$_state_machine__24032__auto__);

(statearr_37957[(1)] = (1));

return statearr_37957;
});
var advenjure$dialogs$execute_optional_$_state_machine__24032__auto____1 = (function (state_37809){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_37809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e37958){if((e37958 instanceof Object)){
var ex__24035__auto__ = e37958;
var statearr_37959_38156 = state_37809;
(statearr_37959_38156[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38162 = state_37809;
state_37809 = G__38162;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$dialogs$execute_optional_$_state_machine__24032__auto__ = function(state_37809){
switch(arguments.length){
case 0:
return advenjure$dialogs$execute_optional_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$dialogs$execute_optional_$_state_machine__24032__auto____1.call(this,state_37809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$dialogs$execute_optional_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$dialogs$execute_optional_$_state_machine__24032__auto____0;
advenjure$dialogs$execute_optional_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$dialogs$execute_optional_$_state_machine__24032__auto____1;
return advenjure$dialogs$execute_optional_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_37960 = f__24229__auto__.call(null);
(statearr_37960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_37960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});
/**
 * Present dialog options to the user and execute the one selected.
 */
advenjure.dialogs.optional = (function advenjure$dialogs$optional(var_args){
var args__21537__auto__ = [];
var len__21530__auto___38338 = arguments.length;
var i__21531__auto___38342 = (0);
while(true){
if((i__21531__auto___38342 < len__21530__auto___38338)){
args__21537__auto__.push((arguments[i__21531__auto___38342]));

var G__38400 = (i__21531__auto___38342 + (1));
i__21531__auto___38342 = G__38400;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38165__auto__","game-state__38165__auto__",1699094717,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","execute-optional","advenjure.dialogs/execute-optional",564346458,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38165__auto__","game-state__38165__auto__",1699094717,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),specs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.optional.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.optional.cljs$lang$applyTo = (function (seq38166){
var G__38167 = cljs.core.first.call(null,seq38166);
var seq38166__$1 = cljs.core.next.call(null,seq38166);
var G__38168 = cljs.core.first.call(null,seq38166__$1);
var seq38166__$2 = cljs.core.next.call(null,seq38166__$1);
return advenjure.dialogs.optional.cljs$core$IFn$_invoke$arity$variadic(G__38167,G__38168,seq38166__$2);
});


advenjure.dialogs.optional.cljs$lang$macro = true;
/**
 * Given a list of dialog forms, return a function that would execute any of
 *   them randomly each time it's called.
 */
advenjure.dialogs.random = (function advenjure$dialogs$random(var_args){
var args__21537__auto__ = [];
var len__21530__auto___38597 = arguments.length;
var i__21531__auto___38598 = (0);
while(true){
if((i__21531__auto___38598 < len__21530__auto___38597)){
args__21537__auto__.push((arguments[i__21531__auto___38598]));

var G__38601 = (i__21531__auto___38598 + (1));
i__21531__auto___38598 = G__38601;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38551__auto__","game-state__38551__auto__",-1330692583,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"selected__38552__auto__","selected__38552__auto__",707673935,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__21289__auto__ = lines__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__21289__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"selected__38552__auto__","selected__38552__auto__",707673935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38551__auto__","game-state__38551__auto__",-1330692583,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.random.cljs$lang$maxFixedArity = (2);

advenjure.dialogs.random.cljs$lang$applyTo = (function (seq38553){
var G__38554 = cljs.core.first.call(null,seq38553);
var seq38553__$1 = cljs.core.next.call(null,seq38553);
var G__38555 = cljs.core.first.call(null,seq38553__$1);
var seq38553__$2 = cljs.core.next.call(null,seq38553__$1);
return advenjure.dialogs.random.cljs$core$IFn$_invoke$arity$variadic(G__38554,G__38555,seq38553__$2);
});


advenjure.dialogs.random.cljs$lang$macro = true;
/**
 * Return a function that will test the condition function using the game-state
 *   and execute the dialog line if true. If false and a second line is given,
 *   that will be executed instead.
 */
advenjure.dialogs.conditional = (function advenjure$dialogs$conditional(var_args){
var args38664 = [];
var len__21530__auto___38751 = arguments.length;
var i__21531__auto___38752 = (0);
while(true){
if((i__21531__auto___38752 < len__21530__auto___38751)){
args38664.push((arguments[i__21531__auto___38752]));

var G__38757 = (i__21531__auto___38752 + (1));
i__21531__auto___38752 = G__38757;
continue;
} else {
}
break;
}

var G__38671 = args38664.length;
switch (G__38671) {
case 4:
return advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args38664.length - (2)))].join('')));

}
});

advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,condition,true_line){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38660__auto__","game-state__38660__auto__",1432275406,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38660__auto__","game-state__38660__auto__",1432275406,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = true_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38660__auto__","game-state__38660__auto__",1432275406,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38660__auto__","game-state__38660__auto__",1432275406,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.conditional.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,condition,true_line,false_line){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38661__auto__","game-state__38661__auto__",1402102133,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38661__auto__","game-state__38661__auto__",1402102133,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = true_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38661__auto__","game-state__38661__auto__",1402102133,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("advenjure.dialogs","dialog","advenjure.dialogs/dialog",1954009833,null)),(function (){var x__21289__auto__ = false_line;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"game-state__38661__auto__","game-state__38661__auto__",1402102133,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

advenjure.dialogs.conditional.cljs$lang$maxFixedArity = 5;


advenjure.dialogs.conditional.cljs$lang$macro = true;

//# sourceMappingURL=dialogs.js.map?rel=1522181437572