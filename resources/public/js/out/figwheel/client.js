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
var args35023 = [];
var len__21530__auto___35026 = arguments.length;
var i__21531__auto___35027 = (0);
while(true){
if((i__21531__auto___35027 < len__21530__auto___35026)){
args35023.push((arguments[i__21531__auto___35027]));

var G__35028 = (i__21531__auto___35027 + (1));
i__21531__auto___35027 = G__35028;
continue;
} else {
}
break;
}

var G__35025 = args35023.length;
switch (G__35025) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35023.length)].join('')));

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
var len__21530__auto___35031 = arguments.length;
var i__21531__auto___35032 = (0);
while(true){
if((i__21531__auto___35032 < len__21530__auto___35031)){
args__21537__auto__.push((arguments[i__21531__auto___35032]));

var G__35033 = (i__21531__auto___35032 + (1));
i__21531__auto___35032 = G__35033;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35030){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35030));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___35035 = arguments.length;
var i__21531__auto___35036 = (0);
while(true){
if((i__21531__auto___35036 < len__21530__auto___35035)){
args__21537__auto__.push((arguments[i__21531__auto___35036]));

var G__35037 = (i__21531__auto___35036 + (1));
i__21531__auto___35036 = G__35037;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35034){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35034));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35038 = cljs.core._EQ_;
var expr__35039 = (function (){var or__20455__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35042){if((e35042 instanceof Error)){
var e = e35042;
return false;
} else {
throw e35042;

}
}})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35038.call(null,"true",expr__35039))){
return true;
} else {
if(cljs.core.truth_(pred__35038.call(null,"false",expr__35039))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35039)].join('')));
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
}catch (e35044){if((e35044 instanceof Error)){
var e = e35044;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35044;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35045){
var map__35048 = p__35045;
var map__35048__$1 = ((((!((map__35048 == null)))?((((map__35048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35048):map__35048);
var message = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24326__auto___35221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___35221,ch){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___35221,ch){
return (function (state_35187){
var state_val_35188 = (state_35187[(1)]);
if((state_val_35188 === (7))){
var inst_35183 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35189_35222 = state_35187__$1;
(statearr_35189_35222[(2)] = inst_35183);

(statearr_35189_35222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (1))){
var state_35187__$1 = state_35187;
var statearr_35190_35223 = state_35187__$1;
(statearr_35190_35223[(2)] = null);

(statearr_35190_35223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (4))){
var inst_35140 = (state_35187[(7)]);
var inst_35140__$1 = (state_35187[(2)]);
var state_35187__$1 = (function (){var statearr_35191 = state_35187;
(statearr_35191[(7)] = inst_35140__$1);

return statearr_35191;
})();
if(cljs.core.truth_(inst_35140__$1)){
var statearr_35192_35228 = state_35187__$1;
(statearr_35192_35228[(1)] = (5));

} else {
var statearr_35193_35229 = state_35187__$1;
(statearr_35193_35229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (15))){
var inst_35147 = (state_35187[(8)]);
var inst_35162 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35147);
var inst_35163 = cljs.core.first.call(null,inst_35162);
var inst_35164 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35163);
var inst_35165 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35164)].join('');
var inst_35166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35165);
var state_35187__$1 = state_35187;
var statearr_35194_35234 = state_35187__$1;
(statearr_35194_35234[(2)] = inst_35166);

(statearr_35194_35234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (13))){
var inst_35171 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35195_35235 = state_35187__$1;
(statearr_35195_35235[(2)] = inst_35171);

(statearr_35195_35235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (6))){
var state_35187__$1 = state_35187;
var statearr_35196_35236 = state_35187__$1;
(statearr_35196_35236[(2)] = null);

(statearr_35196_35236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (17))){
var inst_35169 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35197_35237 = state_35187__$1;
(statearr_35197_35237[(2)] = inst_35169);

(statearr_35197_35237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (3))){
var inst_35185 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35187__$1,inst_35185);
} else {
if((state_val_35188 === (12))){
var inst_35146 = (state_35187[(9)]);
var inst_35160 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35146,opts);
var state_35187__$1 = state_35187;
if(cljs.core.truth_(inst_35160)){
var statearr_35198_35242 = state_35187__$1;
(statearr_35198_35242[(1)] = (15));

} else {
var statearr_35199_35243 = state_35187__$1;
(statearr_35199_35243[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (2))){
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35187__$1,(4),ch);
} else {
if((state_val_35188 === (11))){
var inst_35147 = (state_35187[(8)]);
var inst_35152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35153 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35147);
var inst_35154 = cljs.core.async.timeout.call(null,(1000));
var inst_35155 = [inst_35153,inst_35154];
var inst_35156 = (new cljs.core.PersistentVector(null,2,(5),inst_35152,inst_35155,null));
var state_35187__$1 = state_35187;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35187__$1,(14),inst_35156);
} else {
if((state_val_35188 === (9))){
var inst_35147 = (state_35187[(8)]);
var inst_35173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35174 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35147);
var inst_35175 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35174);
var inst_35176 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35175)].join('');
var inst_35177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35176);
var state_35187__$1 = (function (){var statearr_35200 = state_35187;
(statearr_35200[(10)] = inst_35173);

return statearr_35200;
})();
var statearr_35201_35244 = state_35187__$1;
(statearr_35201_35244[(2)] = inst_35177);

(statearr_35201_35244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (5))){
var inst_35140 = (state_35187[(7)]);
var inst_35142 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35143 = (new cljs.core.PersistentArrayMap(null,2,inst_35142,null));
var inst_35144 = (new cljs.core.PersistentHashSet(null,inst_35143,null));
var inst_35145 = figwheel.client.focus_msgs.call(null,inst_35144,inst_35140);
var inst_35146 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35145);
var inst_35147 = cljs.core.first.call(null,inst_35145);
var inst_35148 = figwheel.client.autoload_QMARK_.call(null);
var state_35187__$1 = (function (){var statearr_35204 = state_35187;
(statearr_35204[(9)] = inst_35146);

(statearr_35204[(8)] = inst_35147);

return statearr_35204;
})();
if(cljs.core.truth_(inst_35148)){
var statearr_35205_35245 = state_35187__$1;
(statearr_35205_35245[(1)] = (8));

} else {
var statearr_35206_35246 = state_35187__$1;
(statearr_35206_35246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (14))){
var inst_35158 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35208_35247 = state_35187__$1;
(statearr_35208_35247[(2)] = inst_35158);

(statearr_35208_35247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (16))){
var state_35187__$1 = state_35187;
var statearr_35209_35248 = state_35187__$1;
(statearr_35209_35248[(2)] = null);

(statearr_35209_35248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (10))){
var inst_35179 = (state_35187[(2)]);
var state_35187__$1 = (function (){var statearr_35210 = state_35187;
(statearr_35210[(11)] = inst_35179);

return statearr_35210;
})();
var statearr_35211_35249 = state_35187__$1;
(statearr_35211_35249[(2)] = null);

(statearr_35211_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (8))){
var inst_35146 = (state_35187[(9)]);
var inst_35150 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35146,opts);
var state_35187__$1 = state_35187;
if(cljs.core.truth_(inst_35150)){
var statearr_35212_35250 = state_35187__$1;
(statearr_35212_35250[(1)] = (11));

} else {
var statearr_35213_35251 = state_35187__$1;
(statearr_35213_35251[(1)] = (12));

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
});})(c__24326__auto___35221,ch))
;
return ((function (switch__24055__auto__,c__24326__auto___35221,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____0 = (function (){
var statearr_35217 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35217[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__);

(statearr_35217[(1)] = (1));

return statearr_35217;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____1 = (function (state_35187){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_35187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e35218){if((e35218 instanceof Object)){
var ex__24059__auto__ = e35218;
var statearr_35219_35252 = state_35187;
(statearr_35219_35252[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35253 = state_35187;
state_35187 = G__35253;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__ = function(state_35187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____1.call(this,state_35187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24056__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___35221,ch))
})();
var state__24328__auto__ = (function (){var statearr_35220 = f__24327__auto__.call(null);
(statearr_35220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___35221);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___35221,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35254_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35254_SHARP_));
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
var base_path_35257 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35257){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35256){if((e35256 instanceof Error)){
var e = e35256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35257], null));
} else {
var e = e35256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35257))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35258){
var map__35267 = p__35258;
var map__35267__$1 = ((((!((map__35267 == null)))?((((map__35267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35267):map__35267);
var opts = map__35267__$1;
var build_id = cljs.core.get.call(null,map__35267__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35267,map__35267__$1,opts,build_id){
return (function (p__35269){
var vec__35270 = p__35269;
var seq__35271 = cljs.core.seq.call(null,vec__35270);
var first__35272 = cljs.core.first.call(null,seq__35271);
var seq__35271__$1 = cljs.core.next.call(null,seq__35271);
var map__35273 = first__35272;
var map__35273__$1 = ((((!((map__35273 == null)))?((((map__35273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35273):map__35273);
var msg = map__35273__$1;
var msg_name = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35271__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35270,seq__35271,first__35272,seq__35271__$1,map__35273,map__35273__$1,msg,msg_name,_,map__35267,map__35267__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35270,seq__35271,first__35272,seq__35271__$1,map__35273,map__35273__$1,msg,msg_name,_,map__35267,map__35267__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35267,map__35267__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35281){
var vec__35282 = p__35281;
var seq__35283 = cljs.core.seq.call(null,vec__35282);
var first__35284 = cljs.core.first.call(null,seq__35283);
var seq__35283__$1 = cljs.core.next.call(null,seq__35283);
var map__35285 = first__35284;
var map__35285__$1 = ((((!((map__35285 == null)))?((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35285):map__35285);
var msg = map__35285__$1;
var msg_name = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35283__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35287){
var map__35299 = p__35287;
var map__35299__$1 = ((((!((map__35299 == null)))?((((map__35299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35299):map__35299);
var on_compile_warning = cljs.core.get.call(null,map__35299__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35299__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35299,map__35299__$1,on_compile_warning,on_compile_fail){
return (function (p__35301){
var vec__35302 = p__35301;
var seq__35303 = cljs.core.seq.call(null,vec__35302);
var first__35304 = cljs.core.first.call(null,seq__35303);
var seq__35303__$1 = cljs.core.next.call(null,seq__35303);
var map__35305 = first__35304;
var map__35305__$1 = ((((!((map__35305 == null)))?((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var msg = map__35305__$1;
var msg_name = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35303__$1;
var pred__35307 = cljs.core._EQ_;
var expr__35308 = msg_name;
if(cljs.core.truth_(pred__35307.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35308))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35307.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35308))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35299,map__35299__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,msg_hist,msg_names,msg){
return (function (state_35519){
var state_val_35520 = (state_35519[(1)]);
if((state_val_35520 === (7))){
var inst_35447 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35447)){
var statearr_35521_35567 = state_35519__$1;
(statearr_35521_35567[(1)] = (8));

} else {
var statearr_35522_35568 = state_35519__$1;
(statearr_35522_35568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (20))){
var inst_35513 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35523_35569 = state_35519__$1;
(statearr_35523_35569[(2)] = inst_35513);

(statearr_35523_35569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (27))){
var inst_35509 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35524_35570 = state_35519__$1;
(statearr_35524_35570[(2)] = inst_35509);

(statearr_35524_35570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (1))){
var inst_35440 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35440)){
var statearr_35525_35571 = state_35519__$1;
(statearr_35525_35571[(1)] = (2));

} else {
var statearr_35526_35572 = state_35519__$1;
(statearr_35526_35572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (24))){
var inst_35511 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35527_35573 = state_35519__$1;
(statearr_35527_35573[(2)] = inst_35511);

(statearr_35527_35573[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (4))){
var inst_35517 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35519__$1,inst_35517);
} else {
if((state_val_35520 === (15))){
var inst_35515 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35528_35574 = state_35519__$1;
(statearr_35528_35574[(2)] = inst_35515);

(statearr_35528_35574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (21))){
var inst_35474 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35529_35575 = state_35519__$1;
(statearr_35529_35575[(2)] = inst_35474);

(statearr_35529_35575[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (31))){
var inst_35498 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35498)){
var statearr_35530_35576 = state_35519__$1;
(statearr_35530_35576[(1)] = (34));

} else {
var statearr_35531_35577 = state_35519__$1;
(statearr_35531_35577[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (32))){
var inst_35507 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35532_35578 = state_35519__$1;
(statearr_35532_35578[(2)] = inst_35507);

(statearr_35532_35578[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (33))){
var inst_35496 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35533_35579 = state_35519__$1;
(statearr_35533_35579[(2)] = inst_35496);

(statearr_35533_35579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (13))){
var inst_35461 = figwheel.client.heads_up.clear.call(null);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(16),inst_35461);
} else {
if((state_val_35520 === (22))){
var inst_35478 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35479 = figwheel.client.heads_up.append_warning_message.call(null,inst_35478);
var state_35519__$1 = state_35519;
var statearr_35534_35580 = state_35519__$1;
(statearr_35534_35580[(2)] = inst_35479);

(statearr_35534_35580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (36))){
var inst_35505 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35535_35581 = state_35519__$1;
(statearr_35535_35581[(2)] = inst_35505);

(statearr_35535_35581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (29))){
var inst_35489 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35536_35582 = state_35519__$1;
(statearr_35536_35582[(2)] = inst_35489);

(statearr_35536_35582[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (6))){
var inst_35442 = (state_35519[(7)]);
var state_35519__$1 = state_35519;
var statearr_35537_35583 = state_35519__$1;
(statearr_35537_35583[(2)] = inst_35442);

(statearr_35537_35583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (28))){
var inst_35485 = (state_35519[(2)]);
var inst_35486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35487 = figwheel.client.heads_up.display_warning.call(null,inst_35486);
var state_35519__$1 = (function (){var statearr_35538 = state_35519;
(statearr_35538[(8)] = inst_35485);

return statearr_35538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(29),inst_35487);
} else {
if((state_val_35520 === (25))){
var inst_35483 = figwheel.client.heads_up.clear.call(null);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(28),inst_35483);
} else {
if((state_val_35520 === (34))){
var inst_35500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(37),inst_35500);
} else {
if((state_val_35520 === (17))){
var inst_35467 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35539_35584 = state_35519__$1;
(statearr_35539_35584[(2)] = inst_35467);

(statearr_35539_35584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (3))){
var inst_35459 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35459)){
var statearr_35540_35585 = state_35519__$1;
(statearr_35540_35585[(1)] = (13));

} else {
var statearr_35541_35586 = state_35519__$1;
(statearr_35541_35586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (12))){
var inst_35455 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35542_35590 = state_35519__$1;
(statearr_35542_35590[(2)] = inst_35455);

(statearr_35542_35590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (2))){
var inst_35442 = (state_35519[(7)]);
var inst_35442__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35519__$1 = (function (){var statearr_35543 = state_35519;
(statearr_35543[(7)] = inst_35442__$1);

return statearr_35543;
})();
if(cljs.core.truth_(inst_35442__$1)){
var statearr_35544_35591 = state_35519__$1;
(statearr_35544_35591[(1)] = (5));

} else {
var statearr_35545_35592 = state_35519__$1;
(statearr_35545_35592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (23))){
var inst_35481 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35481)){
var statearr_35546_35593 = state_35519__$1;
(statearr_35546_35593[(1)] = (25));

} else {
var statearr_35547_35594 = state_35519__$1;
(statearr_35547_35594[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (35))){
var state_35519__$1 = state_35519;
var statearr_35548_35595 = state_35519__$1;
(statearr_35548_35595[(2)] = null);

(statearr_35548_35595[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (19))){
var inst_35476 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35476)){
var statearr_35549_35596 = state_35519__$1;
(statearr_35549_35596[(1)] = (22));

} else {
var statearr_35550_35597 = state_35519__$1;
(statearr_35550_35597[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (11))){
var inst_35451 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35551_35598 = state_35519__$1;
(statearr_35551_35598[(2)] = inst_35451);

(statearr_35551_35598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (9))){
var inst_35453 = figwheel.client.heads_up.clear.call(null);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(12),inst_35453);
} else {
if((state_val_35520 === (5))){
var inst_35444 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35519__$1 = state_35519;
var statearr_35552_35599 = state_35519__$1;
(statearr_35552_35599[(2)] = inst_35444);

(statearr_35552_35599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (14))){
var inst_35469 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35469)){
var statearr_35553_35600 = state_35519__$1;
(statearr_35553_35600[(1)] = (18));

} else {
var statearr_35554_35601 = state_35519__$1;
(statearr_35554_35601[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (26))){
var inst_35491 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35491)){
var statearr_35555_35602 = state_35519__$1;
(statearr_35555_35602[(1)] = (30));

} else {
var statearr_35556_35603 = state_35519__$1;
(statearr_35556_35603[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (16))){
var inst_35463 = (state_35519[(2)]);
var inst_35464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35465 = figwheel.client.heads_up.display_exception.call(null,inst_35464);
var state_35519__$1 = (function (){var statearr_35557 = state_35519;
(statearr_35557[(9)] = inst_35463);

return statearr_35557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(17),inst_35465);
} else {
if((state_val_35520 === (30))){
var inst_35493 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35494 = figwheel.client.heads_up.display_warning.call(null,inst_35493);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(33),inst_35494);
} else {
if((state_val_35520 === (10))){
var inst_35457 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35558_35604 = state_35519__$1;
(statearr_35558_35604[(2)] = inst_35457);

(statearr_35558_35604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (18))){
var inst_35471 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35472 = figwheel.client.heads_up.display_exception.call(null,inst_35471);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(21),inst_35472);
} else {
if((state_val_35520 === (37))){
var inst_35502 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35559_35605 = state_35519__$1;
(statearr_35559_35605[(2)] = inst_35502);

(statearr_35559_35605[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (8))){
var inst_35449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(11),inst_35449);
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
});})(c__24326__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24055__auto__,c__24326__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____0 = (function (){
var statearr_35563 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35563[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__);

(statearr_35563[(1)] = (1));

return statearr_35563;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____1 = (function (state_35519){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_35519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e35564){if((e35564 instanceof Object)){
var ex__24059__auto__ = e35564;
var statearr_35565_35606 = state_35519;
(statearr_35565_35606[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35607 = state_35519;
state_35519 = G__35607;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__ = function(state_35519){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____1.call(this,state_35519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,msg_hist,msg_names,msg))
})();
var state__24328__auto__ = (function (){var statearr_35566 = f__24327__auto__.call(null);
(statearr_35566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_35566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,msg_hist,msg_names,msg))
);

return c__24326__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24326__auto___35670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___35670,ch){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___35670,ch){
return (function (state_35653){
var state_val_35654 = (state_35653[(1)]);
if((state_val_35654 === (1))){
var state_35653__$1 = state_35653;
var statearr_35655_35671 = state_35653__$1;
(statearr_35655_35671[(2)] = null);

(statearr_35655_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (2))){
var state_35653__$1 = state_35653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35653__$1,(4),ch);
} else {
if((state_val_35654 === (3))){
var inst_35651 = (state_35653[(2)]);
var state_35653__$1 = state_35653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35653__$1,inst_35651);
} else {
if((state_val_35654 === (4))){
var inst_35641 = (state_35653[(7)]);
var inst_35641__$1 = (state_35653[(2)]);
var state_35653__$1 = (function (){var statearr_35656 = state_35653;
(statearr_35656[(7)] = inst_35641__$1);

return statearr_35656;
})();
if(cljs.core.truth_(inst_35641__$1)){
var statearr_35657_35672 = state_35653__$1;
(statearr_35657_35672[(1)] = (5));

} else {
var statearr_35658_35673 = state_35653__$1;
(statearr_35658_35673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (5))){
var inst_35641 = (state_35653[(7)]);
var inst_35643 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35641);
var state_35653__$1 = state_35653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35653__$1,(8),inst_35643);
} else {
if((state_val_35654 === (6))){
var state_35653__$1 = state_35653;
var statearr_35659_35674 = state_35653__$1;
(statearr_35659_35674[(2)] = null);

(statearr_35659_35674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (7))){
var inst_35649 = (state_35653[(2)]);
var state_35653__$1 = state_35653;
var statearr_35660_35675 = state_35653__$1;
(statearr_35660_35675[(2)] = inst_35649);

(statearr_35660_35675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (8))){
var inst_35645 = (state_35653[(2)]);
var state_35653__$1 = (function (){var statearr_35661 = state_35653;
(statearr_35661[(8)] = inst_35645);

return statearr_35661;
})();
var statearr_35662_35676 = state_35653__$1;
(statearr_35662_35676[(2)] = null);

(statearr_35662_35676[(1)] = (2));


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
});})(c__24326__auto___35670,ch))
;
return ((function (switch__24055__auto__,c__24326__auto___35670,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24056__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24056__auto____0 = (function (){
var statearr_35666 = [null,null,null,null,null,null,null,null,null];
(statearr_35666[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24056__auto__);

(statearr_35666[(1)] = (1));

return statearr_35666;
});
var figwheel$client$heads_up_plugin_$_state_machine__24056__auto____1 = (function (state_35653){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_35653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e35667){if((e35667 instanceof Object)){
var ex__24059__auto__ = e35667;
var statearr_35668_35677 = state_35653;
(statearr_35668_35677[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35678 = state_35653;
state_35653 = G__35678;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24056__auto__ = function(state_35653){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24056__auto____1.call(this,state_35653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24056__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24056__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___35670,ch))
})();
var state__24328__auto__ = (function (){var statearr_35669 = f__24327__auto__.call(null);
(statearr_35669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___35670);

return statearr_35669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___35670,ch))
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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_35699){
var state_val_35700 = (state_35699[(1)]);
if((state_val_35700 === (1))){
var inst_35694 = cljs.core.async.timeout.call(null,(3000));
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35699__$1,(2),inst_35694);
} else {
if((state_val_35700 === (2))){
var inst_35696 = (state_35699[(2)]);
var inst_35697 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35699__$1 = (function (){var statearr_35701 = state_35699;
(statearr_35701[(7)] = inst_35696);

return statearr_35701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35699__$1,inst_35697);
} else {
return null;
}
}
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____0 = (function (){
var statearr_35705 = [null,null,null,null,null,null,null,null];
(statearr_35705[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__);

(statearr_35705[(1)] = (1));

return statearr_35705;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____1 = (function (state_35699){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_35699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e35706){if((e35706 instanceof Object)){
var ex__24059__auto__ = e35706;
var statearr_35707_35709 = state_35699;
(statearr_35707_35709[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35699;
state_35699 = G__35710;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__ = function(state_35699){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____1.call(this,state_35699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24056__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_35708 = f__24327__auto__.call(null);
(statearr_35708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_35708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35736){
var state_val_35737 = (state_35736[(1)]);
if((state_val_35737 === (1))){
var inst_35730 = cljs.core.async.timeout.call(null,(2000));
var state_35736__$1 = state_35736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35736__$1,(2),inst_35730);
} else {
if((state_val_35737 === (2))){
var inst_35732 = (state_35736[(2)]);
var inst_35733 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_35734 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35733);
var state_35736__$1 = (function (){var statearr_35738 = state_35736;
(statearr_35738[(7)] = inst_35732);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35736__$1,inst_35734);
} else {
return null;
}
}
});})(c__24326__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____0 = (function (){
var statearr_35742 = [null,null,null,null,null,null,null,null];
(statearr_35742[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__);

(statearr_35742[(1)] = (1));

return statearr_35742;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____1 = (function (state_35736){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_35736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e35743){if((e35743 instanceof Object)){
var ex__24059__auto__ = e35743;
var statearr_35744_35746 = state_35736;
(statearr_35744_35746[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35747 = state_35736;
state_35736 = G__35747;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__ = function(state_35736){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____1.call(this,state_35736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24328__auto__ = (function (){var statearr_35745 = f__24327__auto__.call(null);
(statearr_35745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,figwheel_version,temp__4657__auto__))
);

return c__24326__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35748){
var map__35752 = p__35748;
var map__35752__$1 = ((((!((map__35752 == null)))?((((map__35752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35752):map__35752);
var file = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35754 = "";
var G__35754__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35754),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35754);
var G__35754__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35754__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35754__$1);
if(cljs.core.truth_((function (){var and__20443__auto__ = line;
if(cljs.core.truth_(and__20443__auto__)){
return column;
} else {
return and__20443__auto__;
}
})())){
return [cljs.core.str(G__35754__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35754__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35755){
var map__35762 = p__35755;
var map__35762__$1 = ((((!((map__35762 == null)))?((((map__35762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35762):map__35762);
var ed = map__35762__$1;
var formatted_exception = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35764_35768 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35765_35769 = null;
var count__35766_35770 = (0);
var i__35767_35771 = (0);
while(true){
if((i__35767_35771 < count__35766_35770)){
var msg_35772 = cljs.core._nth.call(null,chunk__35765_35769,i__35767_35771);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35772);

var G__35773 = seq__35764_35768;
var G__35774 = chunk__35765_35769;
var G__35775 = count__35766_35770;
var G__35776 = (i__35767_35771 + (1));
seq__35764_35768 = G__35773;
chunk__35765_35769 = G__35774;
count__35766_35770 = G__35775;
i__35767_35771 = G__35776;
continue;
} else {
var temp__4657__auto___35777 = cljs.core.seq.call(null,seq__35764_35768);
if(temp__4657__auto___35777){
var seq__35764_35778__$1 = temp__4657__auto___35777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35764_35778__$1)){
var c__21266__auto___35779 = cljs.core.chunk_first.call(null,seq__35764_35778__$1);
var G__35780 = cljs.core.chunk_rest.call(null,seq__35764_35778__$1);
var G__35781 = c__21266__auto___35779;
var G__35782 = cljs.core.count.call(null,c__21266__auto___35779);
var G__35783 = (0);
seq__35764_35768 = G__35780;
chunk__35765_35769 = G__35781;
count__35766_35770 = G__35782;
i__35767_35771 = G__35783;
continue;
} else {
var msg_35784 = cljs.core.first.call(null,seq__35764_35778__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35784);

var G__35785 = cljs.core.next.call(null,seq__35764_35778__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__35764_35768 = G__35785;
chunk__35765_35769 = G__35786;
count__35766_35770 = G__35787;
i__35767_35771 = G__35788;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35789){
var map__35792 = p__35789;
var map__35792__$1 = ((((!((map__35792 == null)))?((((map__35792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35792):map__35792);
var w = map__35792__$1;
var message = cljs.core.get.call(null,map__35792__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35804 = cljs.core.seq.call(null,plugins);
var chunk__35805 = null;
var count__35806 = (0);
var i__35807 = (0);
while(true){
if((i__35807 < count__35806)){
var vec__35808 = cljs.core._nth.call(null,chunk__35805,i__35807);
var k = cljs.core.nth.call(null,vec__35808,(0),null);
var plugin = cljs.core.nth.call(null,vec__35808,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35804,chunk__35805,count__35806,i__35807,pl_35814,vec__35808,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35814.call(null,msg_hist);
});})(seq__35804,chunk__35805,count__35806,i__35807,pl_35814,vec__35808,k,plugin))
);
} else {
}

var G__35815 = seq__35804;
var G__35816 = chunk__35805;
var G__35817 = count__35806;
var G__35818 = (i__35807 + (1));
seq__35804 = G__35815;
chunk__35805 = G__35816;
count__35806 = G__35817;
i__35807 = G__35818;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35804);
if(temp__4657__auto__){
var seq__35804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35804__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__35804__$1);
var G__35819 = cljs.core.chunk_rest.call(null,seq__35804__$1);
var G__35820 = c__21266__auto__;
var G__35821 = cljs.core.count.call(null,c__21266__auto__);
var G__35822 = (0);
seq__35804 = G__35819;
chunk__35805 = G__35820;
count__35806 = G__35821;
i__35807 = G__35822;
continue;
} else {
var vec__35811 = cljs.core.first.call(null,seq__35804__$1);
var k = cljs.core.nth.call(null,vec__35811,(0),null);
var plugin = cljs.core.nth.call(null,vec__35811,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35823 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35804,chunk__35805,count__35806,i__35807,pl_35823,vec__35811,k,plugin,seq__35804__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35823.call(null,msg_hist);
});})(seq__35804,chunk__35805,count__35806,i__35807,pl_35823,vec__35811,k,plugin,seq__35804__$1,temp__4657__auto__))
);
} else {
}

var G__35824 = cljs.core.next.call(null,seq__35804__$1);
var G__35825 = null;
var G__35826 = (0);
var G__35827 = (0);
seq__35804 = G__35824;
chunk__35805 = G__35825;
count__35806 = G__35826;
i__35807 = G__35827;
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
var args35828 = [];
var len__21530__auto___35835 = arguments.length;
var i__21531__auto___35836 = (0);
while(true){
if((i__21531__auto___35836 < len__21530__auto___35835)){
args35828.push((arguments[i__21531__auto___35836]));

var G__35837 = (i__21531__auto___35836 + (1));
i__21531__auto___35836 = G__35837;
continue;
} else {
}
break;
}

var G__35830 = args35828.length;
switch (G__35830) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35828.length)].join('')));

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

var seq__35831_35839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35832_35840 = null;
var count__35833_35841 = (0);
var i__35834_35842 = (0);
while(true){
if((i__35834_35842 < count__35833_35841)){
var msg_35843 = cljs.core._nth.call(null,chunk__35832_35840,i__35834_35842);
figwheel.client.socket.handle_incoming_message.call(null,msg_35843);

var G__35844 = seq__35831_35839;
var G__35845 = chunk__35832_35840;
var G__35846 = count__35833_35841;
var G__35847 = (i__35834_35842 + (1));
seq__35831_35839 = G__35844;
chunk__35832_35840 = G__35845;
count__35833_35841 = G__35846;
i__35834_35842 = G__35847;
continue;
} else {
var temp__4657__auto___35848 = cljs.core.seq.call(null,seq__35831_35839);
if(temp__4657__auto___35848){
var seq__35831_35849__$1 = temp__4657__auto___35848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35831_35849__$1)){
var c__21266__auto___35850 = cljs.core.chunk_first.call(null,seq__35831_35849__$1);
var G__35851 = cljs.core.chunk_rest.call(null,seq__35831_35849__$1);
var G__35852 = c__21266__auto___35850;
var G__35853 = cljs.core.count.call(null,c__21266__auto___35850);
var G__35854 = (0);
seq__35831_35839 = G__35851;
chunk__35832_35840 = G__35852;
count__35833_35841 = G__35853;
i__35834_35842 = G__35854;
continue;
} else {
var msg_35858 = cljs.core.first.call(null,seq__35831_35849__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35858);

var G__35859 = cljs.core.next.call(null,seq__35831_35849__$1);
var G__35860 = null;
var G__35861 = (0);
var G__35862 = (0);
seq__35831_35839 = G__35859;
chunk__35832_35840 = G__35860;
count__35833_35841 = G__35861;
i__35834_35842 = G__35862;
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
var len__21530__auto___35867 = arguments.length;
var i__21531__auto___35868 = (0);
while(true){
if((i__21531__auto___35868 < len__21530__auto___35867)){
args__21537__auto__.push((arguments[i__21531__auto___35868]));

var G__35869 = (i__21531__auto___35868 + (1));
i__21531__auto___35868 = G__35869;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35864){
var map__35865 = p__35864;
var map__35865__$1 = ((((!((map__35865 == null)))?((((map__35865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35865):map__35865);
var opts = map__35865__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35863){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35863));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35871){if((e35871 instanceof Error)){
var e = e35871;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35871;

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
return (function (p__35875){
var map__35876 = p__35875;
var map__35876__$1 = ((((!((map__35876 == null)))?((((map__35876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35876):map__35876);
var msg_name = cljs.core.get.call(null,map__35876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522121089386