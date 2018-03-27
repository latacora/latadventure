// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35460 = [];
var len__21530__auto___35467 = arguments.length;
var i__21531__auto___35468 = (0);
while(true){
if((i__21531__auto___35468 < len__21530__auto___35467)){
args35460.push((arguments[i__21531__auto___35468]));

var G__35469 = (i__21531__auto___35468 + (1));
i__21531__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var G__35464 = args35460.length;
switch (G__35464) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35460.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___35488 = arguments.length;
var i__21531__auto___35489 = (0);
while(true){
if((i__21531__auto___35489 < len__21530__auto___35488)){
args__21537__auto__.push((arguments[i__21531__auto___35489]));

var G__35491 = (i__21531__auto___35489 + (1));
i__21531__auto___35489 = G__35491;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35473){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35473));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___35509 = arguments.length;
var i__21531__auto___35510 = (0);
while(true){
if((i__21531__auto___35510 < len__21530__auto___35509)){
args__21537__auto__.push((arguments[i__21531__auto___35510]));

var G__35512 = (i__21531__auto___35510 + (1));
i__21531__auto___35510 = G__35512;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35496){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35523 = cljs.core._EQ_;
var expr__35524 = (function (){var or__20455__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35537){if((e35537 instanceof Error)){
var e = e35537;
return false;
} else {
throw e35537;

}
}})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35523.call(null,"true",expr__35524))){
return true;
} else {
if(cljs.core.truth_(pred__35523.call(null,"false",expr__35524))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35524)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35557){if((e35557 instanceof Error)){
var e = e35557;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35557;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35566){
var map__35569 = p__35566;
var map__35569__$1 = ((((!((map__35569 == null)))?((((map__35569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35569):map__35569);
var message = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20455__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20443__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20443__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20443__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24228__auto___35743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___35743,ch){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___35743,ch){
return (function (state_35705){
var state_val_35706 = (state_35705[(1)]);
if((state_val_35706 === (7))){
var inst_35701 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
var statearr_35707_35744 = state_35705__$1;
(statearr_35707_35744[(2)] = inst_35701);

(statearr_35707_35744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (1))){
var state_35705__$1 = state_35705;
var statearr_35708_35745 = state_35705__$1;
(statearr_35708_35745[(2)] = null);

(statearr_35708_35745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (4))){
var inst_35658 = (state_35705[(7)]);
var inst_35658__$1 = (state_35705[(2)]);
var state_35705__$1 = (function (){var statearr_35709 = state_35705;
(statearr_35709[(7)] = inst_35658__$1);

return statearr_35709;
})();
if(cljs.core.truth_(inst_35658__$1)){
var statearr_35710_35746 = state_35705__$1;
(statearr_35710_35746[(1)] = (5));

} else {
var statearr_35711_35747 = state_35705__$1;
(statearr_35711_35747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (15))){
var inst_35665 = (state_35705[(8)]);
var inst_35680 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35665);
var inst_35681 = cljs.core.first.call(null,inst_35680);
var inst_35682 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35681);
var inst_35683 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35682)].join('');
var inst_35684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35683);
var state_35705__$1 = state_35705;
var statearr_35715_35748 = state_35705__$1;
(statearr_35715_35748[(2)] = inst_35684);

(statearr_35715_35748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (13))){
var inst_35689 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
var statearr_35716_35749 = state_35705__$1;
(statearr_35716_35749[(2)] = inst_35689);

(statearr_35716_35749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (6))){
var state_35705__$1 = state_35705;
var statearr_35717_35750 = state_35705__$1;
(statearr_35717_35750[(2)] = null);

(statearr_35717_35750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (17))){
var inst_35687 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
var statearr_35718_35751 = state_35705__$1;
(statearr_35718_35751[(2)] = inst_35687);

(statearr_35718_35751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (3))){
var inst_35703 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35705__$1,inst_35703);
} else {
if((state_val_35706 === (12))){
var inst_35664 = (state_35705[(9)]);
var inst_35678 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35664,opts);
var state_35705__$1 = state_35705;
if(cljs.core.truth_(inst_35678)){
var statearr_35719_35752 = state_35705__$1;
(statearr_35719_35752[(1)] = (15));

} else {
var statearr_35720_35753 = state_35705__$1;
(statearr_35720_35753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (2))){
var state_35705__$1 = state_35705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35705__$1,(4),ch);
} else {
if((state_val_35706 === (11))){
var inst_35665 = (state_35705[(8)]);
var inst_35670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35671 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35665);
var inst_35672 = cljs.core.async.timeout.call(null,(1000));
var inst_35673 = [inst_35671,inst_35672];
var inst_35674 = (new cljs.core.PersistentVector(null,2,(5),inst_35670,inst_35673,null));
var state_35705__$1 = state_35705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35705__$1,(14),inst_35674);
} else {
if((state_val_35706 === (9))){
var inst_35665 = (state_35705[(8)]);
var inst_35691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35692 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35665);
var inst_35693 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35692);
var inst_35694 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35693)].join('');
var inst_35695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35694);
var state_35705__$1 = (function (){var statearr_35721 = state_35705;
(statearr_35721[(10)] = inst_35691);

return statearr_35721;
})();
var statearr_35723_35754 = state_35705__$1;
(statearr_35723_35754[(2)] = inst_35695);

(statearr_35723_35754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (5))){
var inst_35658 = (state_35705[(7)]);
var inst_35660 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35661 = (new cljs.core.PersistentArrayMap(null,2,inst_35660,null));
var inst_35662 = (new cljs.core.PersistentHashSet(null,inst_35661,null));
var inst_35663 = figwheel.client.focus_msgs.call(null,inst_35662,inst_35658);
var inst_35664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35663);
var inst_35665 = cljs.core.first.call(null,inst_35663);
var inst_35666 = figwheel.client.autoload_QMARK_.call(null);
var state_35705__$1 = (function (){var statearr_35725 = state_35705;
(statearr_35725[(8)] = inst_35665);

(statearr_35725[(9)] = inst_35664);

return statearr_35725;
})();
if(cljs.core.truth_(inst_35666)){
var statearr_35727_35755 = state_35705__$1;
(statearr_35727_35755[(1)] = (8));

} else {
var statearr_35728_35756 = state_35705__$1;
(statearr_35728_35756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (14))){
var inst_35676 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
var statearr_35730_35757 = state_35705__$1;
(statearr_35730_35757[(2)] = inst_35676);

(statearr_35730_35757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (16))){
var state_35705__$1 = state_35705;
var statearr_35731_35758 = state_35705__$1;
(statearr_35731_35758[(2)] = null);

(statearr_35731_35758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (10))){
var inst_35697 = (state_35705[(2)]);
var state_35705__$1 = (function (){var statearr_35732 = state_35705;
(statearr_35732[(11)] = inst_35697);

return statearr_35732;
})();
var statearr_35733_35759 = state_35705__$1;
(statearr_35733_35759[(2)] = null);

(statearr_35733_35759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (8))){
var inst_35664 = (state_35705[(9)]);
var inst_35668 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35664,opts);
var state_35705__$1 = state_35705;
if(cljs.core.truth_(inst_35668)){
var statearr_35734_35760 = state_35705__$1;
(statearr_35734_35760[(1)] = (11));

} else {
var statearr_35735_35761 = state_35705__$1;
(statearr_35735_35761[(1)] = (12));

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
});})(c__24228__auto___35743,ch))
;
return ((function (switch__24031__auto__,c__24228__auto___35743,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____1 = (function (state_35705){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_35705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__24035__auto__ = e35740;
var statearr_35741_35762 = state_35705;
(statearr_35741_35762[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35763 = state_35705;
state_35705 = G__35763;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__ = function(state_35705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____1.call(this,state_35705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24032__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___35743,ch))
})();
var state__24230__auto__ = (function (){var statearr_35742 = f__24229__auto__.call(null);
(statearr_35742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___35743);

return statearr_35742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___35743,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35764_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35764_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35767 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35767){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35766){if((e35766 instanceof Error)){
var e = e35766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35767], null));
} else {
var e = e35766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35767))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35768){
var map__35777 = p__35768;
var map__35777__$1 = ((((!((map__35777 == null)))?((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35777):map__35777);
var opts = map__35777__$1;
var build_id = cljs.core.get.call(null,map__35777__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35777,map__35777__$1,opts,build_id){
return (function (p__35779){
var vec__35780 = p__35779;
var seq__35781 = cljs.core.seq.call(null,vec__35780);
var first__35782 = cljs.core.first.call(null,seq__35781);
var seq__35781__$1 = cljs.core.next.call(null,seq__35781);
var map__35783 = first__35782;
var map__35783__$1 = ((((!((map__35783 == null)))?((((map__35783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35783):map__35783);
var msg = map__35783__$1;
var msg_name = cljs.core.get.call(null,map__35783__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35781__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35780,seq__35781,first__35782,seq__35781__$1,map__35783,map__35783__$1,msg,msg_name,_,map__35777,map__35777__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35780,seq__35781,first__35782,seq__35781__$1,map__35783,map__35783__$1,msg,msg_name,_,map__35777,map__35777__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35777,map__35777__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35791){
var vec__35792 = p__35791;
var seq__35793 = cljs.core.seq.call(null,vec__35792);
var first__35794 = cljs.core.first.call(null,seq__35793);
var seq__35793__$1 = cljs.core.next.call(null,seq__35793);
var map__35795 = first__35794;
var map__35795__$1 = ((((!((map__35795 == null)))?((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35795):map__35795);
var msg = map__35795__$1;
var msg_name = cljs.core.get.call(null,map__35795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35793__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35797){
var map__35809 = p__35797;
var map__35809__$1 = ((((!((map__35809 == null)))?((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35809):map__35809);
var on_compile_warning = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35809,map__35809__$1,on_compile_warning,on_compile_fail){
return (function (p__35811){
var vec__35812 = p__35811;
var seq__35813 = cljs.core.seq.call(null,vec__35812);
var first__35814 = cljs.core.first.call(null,seq__35813);
var seq__35813__$1 = cljs.core.next.call(null,seq__35813);
var map__35815 = first__35814;
var map__35815__$1 = ((((!((map__35815 == null)))?((((map__35815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35815):map__35815);
var msg = map__35815__$1;
var msg_name = cljs.core.get.call(null,map__35815__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35813__$1;
var pred__35817 = cljs.core._EQ_;
var expr__35818 = msg_name;
if(cljs.core.truth_(pred__35817.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35818))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35817.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35818))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35809,map__35809__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,msg_hist,msg_names,msg){
return (function (state_36026){
var state_val_36027 = (state_36026[(1)]);
if((state_val_36027 === (7))){
var inst_35954 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35954)){
var statearr_36028_36074 = state_36026__$1;
(statearr_36028_36074[(1)] = (8));

} else {
var statearr_36029_36075 = state_36026__$1;
(statearr_36029_36075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (20))){
var inst_36020 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36030_36076 = state_36026__$1;
(statearr_36030_36076[(2)] = inst_36020);

(statearr_36030_36076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (27))){
var inst_36016 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36031_36077 = state_36026__$1;
(statearr_36031_36077[(2)] = inst_36016);

(statearr_36031_36077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (1))){
var inst_35947 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35947)){
var statearr_36032_36078 = state_36026__$1;
(statearr_36032_36078[(1)] = (2));

} else {
var statearr_36033_36079 = state_36026__$1;
(statearr_36033_36079[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (24))){
var inst_36018 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36034_36080 = state_36026__$1;
(statearr_36034_36080[(2)] = inst_36018);

(statearr_36034_36080[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (4))){
var inst_36024 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36026__$1,inst_36024);
} else {
if((state_val_36027 === (15))){
var inst_36022 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36035_36081 = state_36026__$1;
(statearr_36035_36081[(2)] = inst_36022);

(statearr_36035_36081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (21))){
var inst_35981 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36036_36082 = state_36026__$1;
(statearr_36036_36082[(2)] = inst_35981);

(statearr_36036_36082[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (31))){
var inst_36005 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_36005)){
var statearr_36037_36083 = state_36026__$1;
(statearr_36037_36083[(1)] = (34));

} else {
var statearr_36038_36084 = state_36026__$1;
(statearr_36038_36084[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (32))){
var inst_36014 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36039_36085 = state_36026__$1;
(statearr_36039_36085[(2)] = inst_36014);

(statearr_36039_36085[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (33))){
var inst_36003 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36040_36086 = state_36026__$1;
(statearr_36040_36086[(2)] = inst_36003);

(statearr_36040_36086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (13))){
var inst_35968 = figwheel.client.heads_up.clear.call(null);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(16),inst_35968);
} else {
if((state_val_36027 === (22))){
var inst_35985 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35986 = figwheel.client.heads_up.append_warning_message.call(null,inst_35985);
var state_36026__$1 = state_36026;
var statearr_36041_36087 = state_36026__$1;
(statearr_36041_36087[(2)] = inst_35986);

(statearr_36041_36087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (36))){
var inst_36012 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36042_36088 = state_36026__$1;
(statearr_36042_36088[(2)] = inst_36012);

(statearr_36042_36088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (29))){
var inst_35996 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36043_36089 = state_36026__$1;
(statearr_36043_36089[(2)] = inst_35996);

(statearr_36043_36089[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (6))){
var inst_35949 = (state_36026[(7)]);
var state_36026__$1 = state_36026;
var statearr_36044_36090 = state_36026__$1;
(statearr_36044_36090[(2)] = inst_35949);

(statearr_36044_36090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (28))){
var inst_35992 = (state_36026[(2)]);
var inst_35993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35994 = figwheel.client.heads_up.display_warning.call(null,inst_35993);
var state_36026__$1 = (function (){var statearr_36045 = state_36026;
(statearr_36045[(8)] = inst_35992);

return statearr_36045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(29),inst_35994);
} else {
if((state_val_36027 === (25))){
var inst_35990 = figwheel.client.heads_up.clear.call(null);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(28),inst_35990);
} else {
if((state_val_36027 === (34))){
var inst_36007 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(37),inst_36007);
} else {
if((state_val_36027 === (17))){
var inst_35974 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36046_36091 = state_36026__$1;
(statearr_36046_36091[(2)] = inst_35974);

(statearr_36046_36091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (3))){
var inst_35966 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35966)){
var statearr_36047_36092 = state_36026__$1;
(statearr_36047_36092[(1)] = (13));

} else {
var statearr_36048_36093 = state_36026__$1;
(statearr_36048_36093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (12))){
var inst_35962 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36049_36094 = state_36026__$1;
(statearr_36049_36094[(2)] = inst_35962);

(statearr_36049_36094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (2))){
var inst_35949 = (state_36026[(7)]);
var inst_35949__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36026__$1 = (function (){var statearr_36050 = state_36026;
(statearr_36050[(7)] = inst_35949__$1);

return statearr_36050;
})();
if(cljs.core.truth_(inst_35949__$1)){
var statearr_36051_36095 = state_36026__$1;
(statearr_36051_36095[(1)] = (5));

} else {
var statearr_36052_36096 = state_36026__$1;
(statearr_36052_36096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (23))){
var inst_35988 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35988)){
var statearr_36053_36097 = state_36026__$1;
(statearr_36053_36097[(1)] = (25));

} else {
var statearr_36054_36098 = state_36026__$1;
(statearr_36054_36098[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (35))){
var state_36026__$1 = state_36026;
var statearr_36055_36099 = state_36026__$1;
(statearr_36055_36099[(2)] = null);

(statearr_36055_36099[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (19))){
var inst_35983 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35983)){
var statearr_36056_36100 = state_36026__$1;
(statearr_36056_36100[(1)] = (22));

} else {
var statearr_36057_36101 = state_36026__$1;
(statearr_36057_36101[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (11))){
var inst_35958 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36058_36102 = state_36026__$1;
(statearr_36058_36102[(2)] = inst_35958);

(statearr_36058_36102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (9))){
var inst_35960 = figwheel.client.heads_up.clear.call(null);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(12),inst_35960);
} else {
if((state_val_36027 === (5))){
var inst_35951 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36026__$1 = state_36026;
var statearr_36059_36103 = state_36026__$1;
(statearr_36059_36103[(2)] = inst_35951);

(statearr_36059_36103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (14))){
var inst_35976 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35976)){
var statearr_36060_36104 = state_36026__$1;
(statearr_36060_36104[(1)] = (18));

} else {
var statearr_36061_36105 = state_36026__$1;
(statearr_36061_36105[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (26))){
var inst_35998 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35998)){
var statearr_36062_36106 = state_36026__$1;
(statearr_36062_36106[(1)] = (30));

} else {
var statearr_36063_36107 = state_36026__$1;
(statearr_36063_36107[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (16))){
var inst_35970 = (state_36026[(2)]);
var inst_35971 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35972 = figwheel.client.heads_up.display_exception.call(null,inst_35971);
var state_36026__$1 = (function (){var statearr_36064 = state_36026;
(statearr_36064[(9)] = inst_35970);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(17),inst_35972);
} else {
if((state_val_36027 === (30))){
var inst_36000 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36001 = figwheel.client.heads_up.display_warning.call(null,inst_36000);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(33),inst_36001);
} else {
if((state_val_36027 === (10))){
var inst_35964 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36065_36108 = state_36026__$1;
(statearr_36065_36108[(2)] = inst_35964);

(statearr_36065_36108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (18))){
var inst_35978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35979 = figwheel.client.heads_up.display_exception.call(null,inst_35978);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(21),inst_35979);
} else {
if((state_val_36027 === (37))){
var inst_36009 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36066_36109 = state_36026__$1;
(statearr_36066_36109[(2)] = inst_36009);

(statearr_36066_36109[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (8))){
var inst_35956 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(11),inst_35956);
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
});})(c__24228__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24031__auto__,c__24228__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____0 = (function (){
var statearr_36070 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36070[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__);

(statearr_36070[(1)] = (1));

return statearr_36070;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____1 = (function (state_36026){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e36071){if((e36071 instanceof Object)){
var ex__24035__auto__ = e36071;
var statearr_36072_36110 = state_36026;
(statearr_36072_36110[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_36026;
state_36026 = G__36111;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__ = function(state_36026){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____1.call(this,state_36026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,msg_hist,msg_names,msg))
})();
var state__24230__auto__ = (function (){var statearr_36073 = f__24229__auto__.call(null);
(statearr_36073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_36073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,msg_hist,msg_names,msg))
);

return c__24228__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24228__auto___36174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___36174,ch){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___36174,ch){
return (function (state_36157){
var state_val_36158 = (state_36157[(1)]);
if((state_val_36158 === (1))){
var state_36157__$1 = state_36157;
var statearr_36159_36175 = state_36157__$1;
(statearr_36159_36175[(2)] = null);

(statearr_36159_36175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (2))){
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36157__$1,(4),ch);
} else {
if((state_val_36158 === (3))){
var inst_36155 = (state_36157[(2)]);
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36157__$1,inst_36155);
} else {
if((state_val_36158 === (4))){
var inst_36145 = (state_36157[(7)]);
var inst_36145__$1 = (state_36157[(2)]);
var state_36157__$1 = (function (){var statearr_36160 = state_36157;
(statearr_36160[(7)] = inst_36145__$1);

return statearr_36160;
})();
if(cljs.core.truth_(inst_36145__$1)){
var statearr_36161_36176 = state_36157__$1;
(statearr_36161_36176[(1)] = (5));

} else {
var statearr_36162_36177 = state_36157__$1;
(statearr_36162_36177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (5))){
var inst_36145 = (state_36157[(7)]);
var inst_36147 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36145);
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36157__$1,(8),inst_36147);
} else {
if((state_val_36158 === (6))){
var state_36157__$1 = state_36157;
var statearr_36163_36178 = state_36157__$1;
(statearr_36163_36178[(2)] = null);

(statearr_36163_36178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (7))){
var inst_36153 = (state_36157[(2)]);
var state_36157__$1 = state_36157;
var statearr_36164_36179 = state_36157__$1;
(statearr_36164_36179[(2)] = inst_36153);

(statearr_36164_36179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (8))){
var inst_36149 = (state_36157[(2)]);
var state_36157__$1 = (function (){var statearr_36165 = state_36157;
(statearr_36165[(8)] = inst_36149);

return statearr_36165;
})();
var statearr_36166_36180 = state_36157__$1;
(statearr_36166_36180[(2)] = null);

(statearr_36166_36180[(1)] = (2));


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
});})(c__24228__auto___36174,ch))
;
return ((function (switch__24031__auto__,c__24228__auto___36174,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24032__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24032__auto____0 = (function (){
var statearr_36170 = [null,null,null,null,null,null,null,null,null];
(statearr_36170[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24032__auto__);

(statearr_36170[(1)] = (1));

return statearr_36170;
});
var figwheel$client$heads_up_plugin_$_state_machine__24032__auto____1 = (function (state_36157){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e36171){if((e36171 instanceof Object)){
var ex__24035__auto__ = e36171;
var statearr_36172_36181 = state_36157;
(statearr_36172_36181[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36182 = state_36157;
state_36157 = G__36182;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24032__auto__ = function(state_36157){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24032__auto____1.call(this,state_36157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24032__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24032__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___36174,ch))
})();
var state__24230__auto__ = (function (){var statearr_36173 = f__24229__auto__.call(null);
(statearr_36173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___36174);

return statearr_36173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___36174,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_36203){
var state_val_36204 = (state_36203[(1)]);
if((state_val_36204 === (1))){
var inst_36198 = cljs.core.async.timeout.call(null,(3000));
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36203__$1,(2),inst_36198);
} else {
if((state_val_36204 === (2))){
var inst_36200 = (state_36203[(2)]);
var inst_36201 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36203__$1 = (function (){var statearr_36205 = state_36203;
(statearr_36205[(7)] = inst_36200);

return statearr_36205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36203__$1,inst_36201);
} else {
return null;
}
}
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____0 = (function (){
var statearr_36209 = [null,null,null,null,null,null,null,null];
(statearr_36209[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__);

(statearr_36209[(1)] = (1));

return statearr_36209;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____1 = (function (state_36203){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e36210){if((e36210 instanceof Object)){
var ex__24035__auto__ = e36210;
var statearr_36211_36213 = state_36203;
(statearr_36211_36213[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_36203;
state_36203 = G__36214;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__ = function(state_36203){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____1.call(this,state_36203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24032__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_36212 = f__24229__auto__.call(null);
(statearr_36212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_36212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (1))){
var inst_36231 = cljs.core.async.timeout.call(null,(2000));
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(2),inst_36231);
} else {
if((state_val_36238 === (2))){
var inst_36233 = (state_36237[(2)]);
var inst_36234 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_36235 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36234);
var state_36237__$1 = (function (){var statearr_36239 = state_36237;
(statearr_36239[(7)] = inst_36233);

return statearr_36239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
return null;
}
}
});})(c__24228__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____0 = (function (){
var statearr_36243 = [null,null,null,null,null,null,null,null];
(statearr_36243[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__);

(statearr_36243[(1)] = (1));

return statearr_36243;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____1 = (function (state_36237){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e36244){if((e36244 instanceof Object)){
var ex__24035__auto__ = e36244;
var statearr_36245_36247 = state_36237;
(statearr_36245_36247[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36248 = state_36237;
state_36237 = G__36248;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24230__auto__ = (function (){var statearr_36246 = f__24229__auto__.call(null);
(statearr_36246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_36246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,figwheel_version,temp__4657__auto__))
);

return c__24228__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36249){
var map__36253 = p__36249;
var map__36253__$1 = ((((!((map__36253 == null)))?((((map__36253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36253):map__36253);
var file = cljs.core.get.call(null,map__36253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36253__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36253__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36255 = "";
var G__36255__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36255),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36255);
var G__36255__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36255__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36255__$1);
if(cljs.core.truth_((function (){var and__20443__auto__ = line;
if(cljs.core.truth_(and__20443__auto__)){
return column;
} else {
return and__20443__auto__;
}
})())){
return [cljs.core.str(G__36255__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36255__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36256){
var map__36263 = p__36256;
var map__36263__$1 = ((((!((map__36263 == null)))?((((map__36263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36263):map__36263);
var ed = map__36263__$1;
var formatted_exception = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36265_36269 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36266_36270 = null;
var count__36267_36271 = (0);
var i__36268_36272 = (0);
while(true){
if((i__36268_36272 < count__36267_36271)){
var msg_36273 = cljs.core._nth.call(null,chunk__36266_36270,i__36268_36272);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36273);

var G__36274 = seq__36265_36269;
var G__36275 = chunk__36266_36270;
var G__36276 = count__36267_36271;
var G__36277 = (i__36268_36272 + (1));
seq__36265_36269 = G__36274;
chunk__36266_36270 = G__36275;
count__36267_36271 = G__36276;
i__36268_36272 = G__36277;
continue;
} else {
var temp__4657__auto___36278 = cljs.core.seq.call(null,seq__36265_36269);
if(temp__4657__auto___36278){
var seq__36265_36279__$1 = temp__4657__auto___36278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36265_36279__$1)){
var c__21266__auto___36280 = cljs.core.chunk_first.call(null,seq__36265_36279__$1);
var G__36281 = cljs.core.chunk_rest.call(null,seq__36265_36279__$1);
var G__36282 = c__21266__auto___36280;
var G__36283 = cljs.core.count.call(null,c__21266__auto___36280);
var G__36284 = (0);
seq__36265_36269 = G__36281;
chunk__36266_36270 = G__36282;
count__36267_36271 = G__36283;
i__36268_36272 = G__36284;
continue;
} else {
var msg_36285 = cljs.core.first.call(null,seq__36265_36279__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36285);

var G__36286 = cljs.core.next.call(null,seq__36265_36279__$1);
var G__36287 = null;
var G__36288 = (0);
var G__36289 = (0);
seq__36265_36269 = G__36286;
chunk__36266_36270 = G__36287;
count__36267_36271 = G__36288;
i__36268_36272 = G__36289;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36290){
var map__36293 = p__36290;
var map__36293__$1 = ((((!((map__36293 == null)))?((((map__36293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36293):map__36293);
var w = map__36293__$1;
var message = cljs.core.get.call(null,map__36293__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20443__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20443__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20443__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36305 = cljs.core.seq.call(null,plugins);
var chunk__36306 = null;
var count__36307 = (0);
var i__36308 = (0);
while(true){
if((i__36308 < count__36307)){
var vec__36309 = cljs.core._nth.call(null,chunk__36306,i__36308);
var k = cljs.core.nth.call(null,vec__36309,(0),null);
var plugin = cljs.core.nth.call(null,vec__36309,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36315 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36305,chunk__36306,count__36307,i__36308,pl_36315,vec__36309,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36315.call(null,msg_hist);
});})(seq__36305,chunk__36306,count__36307,i__36308,pl_36315,vec__36309,k,plugin))
);
} else {
}

var G__36316 = seq__36305;
var G__36317 = chunk__36306;
var G__36318 = count__36307;
var G__36319 = (i__36308 + (1));
seq__36305 = G__36316;
chunk__36306 = G__36317;
count__36307 = G__36318;
i__36308 = G__36319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36305);
if(temp__4657__auto__){
var seq__36305__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36305__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__36305__$1);
var G__36320 = cljs.core.chunk_rest.call(null,seq__36305__$1);
var G__36321 = c__21266__auto__;
var G__36322 = cljs.core.count.call(null,c__21266__auto__);
var G__36323 = (0);
seq__36305 = G__36320;
chunk__36306 = G__36321;
count__36307 = G__36322;
i__36308 = G__36323;
continue;
} else {
var vec__36312 = cljs.core.first.call(null,seq__36305__$1);
var k = cljs.core.nth.call(null,vec__36312,(0),null);
var plugin = cljs.core.nth.call(null,vec__36312,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36324 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36305,chunk__36306,count__36307,i__36308,pl_36324,vec__36312,k,plugin,seq__36305__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36324.call(null,msg_hist);
});})(seq__36305,chunk__36306,count__36307,i__36308,pl_36324,vec__36312,k,plugin,seq__36305__$1,temp__4657__auto__))
);
} else {
}

var G__36325 = cljs.core.next.call(null,seq__36305__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36305 = G__36325;
chunk__36306 = G__36326;
count__36307 = G__36327;
i__36308 = G__36328;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36329 = [];
var len__21530__auto___36336 = arguments.length;
var i__21531__auto___36337 = (0);
while(true){
if((i__21531__auto___36337 < len__21530__auto___36336)){
args36329.push((arguments[i__21531__auto___36337]));

var G__36338 = (i__21531__auto___36337 + (1));
i__21531__auto___36337 = G__36338;
continue;
} else {
}
break;
}

var G__36331 = args36329.length;
switch (G__36331) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36329.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36332_36340 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36333_36341 = null;
var count__36334_36342 = (0);
var i__36335_36343 = (0);
while(true){
if((i__36335_36343 < count__36334_36342)){
var msg_36344 = cljs.core._nth.call(null,chunk__36333_36341,i__36335_36343);
figwheel.client.socket.handle_incoming_message.call(null,msg_36344);

var G__36345 = seq__36332_36340;
var G__36346 = chunk__36333_36341;
var G__36347 = count__36334_36342;
var G__36348 = (i__36335_36343 + (1));
seq__36332_36340 = G__36345;
chunk__36333_36341 = G__36346;
count__36334_36342 = G__36347;
i__36335_36343 = G__36348;
continue;
} else {
var temp__4657__auto___36349 = cljs.core.seq.call(null,seq__36332_36340);
if(temp__4657__auto___36349){
var seq__36332_36350__$1 = temp__4657__auto___36349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36332_36350__$1)){
var c__21266__auto___36351 = cljs.core.chunk_first.call(null,seq__36332_36350__$1);
var G__36352 = cljs.core.chunk_rest.call(null,seq__36332_36350__$1);
var G__36353 = c__21266__auto___36351;
var G__36354 = cljs.core.count.call(null,c__21266__auto___36351);
var G__36355 = (0);
seq__36332_36340 = G__36352;
chunk__36333_36341 = G__36353;
count__36334_36342 = G__36354;
i__36335_36343 = G__36355;
continue;
} else {
var msg_36356 = cljs.core.first.call(null,seq__36332_36350__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36356);

var G__36357 = cljs.core.next.call(null,seq__36332_36350__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36332_36340 = G__36357;
chunk__36333_36341 = G__36358;
count__36334_36342 = G__36359;
i__36335_36343 = G__36360;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21537__auto__ = [];
var len__21530__auto___36365 = arguments.length;
var i__21531__auto___36366 = (0);
while(true){
if((i__21531__auto___36366 < len__21530__auto___36365)){
args__21537__auto__.push((arguments[i__21531__auto___36366]));

var G__36367 = (i__21531__auto___36366 + (1));
i__21531__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36362){
var map__36363 = p__36362;
var map__36363__$1 = ((((!((map__36363 == null)))?((((map__36363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36363):map__36363);
var opts = map__36363__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36361){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36361));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36369){if((e36369 instanceof Error)){
var e = e36369;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36369;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36373){
var map__36374 = p__36373;
var map__36374__$1 = ((((!((map__36374 == null)))?((((map__36374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36374):map__36374);
var msg_name = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522181435795