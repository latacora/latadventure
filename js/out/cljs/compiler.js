// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__29578 = s;
var map__29578__$1 = ((((!((map__29578 == null)))?((((map__29578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var name = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29581 = info;
var map__29582 = G__29581;
var map__29582__$1 = ((((!((map__29582 == null)))?((((map__29582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582):map__29582);
var shadow = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29581__$1 = G__29581;
while(true){
var d__$2 = d__$1;
var map__29587 = G__29581__$1;
var map__29587__$1 = ((((!((map__29587 == null)))?((((map__29587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29587):map__29587);
var shadow__$1 = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29589 = (d__$2 + (1));
var G__29590 = shadow__$1;
d__$1 = G__29589;
G__29581__$1 = G__29590;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29592){
var map__29599 = p__29592;
var map__29599__$1 = ((((!((map__29599 == null)))?((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29599):map__29599);
var name_var = map__29599__$1;
var name = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__29601 = info;
var map__29601__$1 = ((((!((map__29601 == null)))?((((map__29601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29601):map__29601);
var ns = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args29614 = [];
var len__21530__auto___29624 = arguments.length;
var i__21531__auto___29625 = (0);
while(true){
if((i__21531__auto___29625 < len__21530__auto___29624)){
args29614.push((arguments[i__21531__auto___29625]));

var G__29628 = (i__21531__auto___29625 + (1));
i__21531__auto___29625 = G__29628;
continue;
} else {
}
break;
}

var G__29616 = args29614.length;
switch (G__29616) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29614.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__29656 = cp;
switch (G__29656) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__29662_29666 = cljs.core.seq.call(null,s);
var chunk__29663_29667 = null;
var count__29664_29668 = (0);
var i__29665_29669 = (0);
while(true){
if((i__29665_29669 < count__29664_29668)){
var c_29670 = cljs.core._nth.call(null,chunk__29663_29667,i__29665_29669);
sb.append(cljs.compiler.escape_char.call(null,c_29670));

var G__29671 = seq__29662_29666;
var G__29672 = chunk__29663_29667;
var G__29673 = count__29664_29668;
var G__29674 = (i__29665_29669 + (1));
seq__29662_29666 = G__29671;
chunk__29663_29667 = G__29672;
count__29664_29668 = G__29673;
i__29665_29669 = G__29674;
continue;
} else {
var temp__4657__auto___29675 = cljs.core.seq.call(null,seq__29662_29666);
if(temp__4657__auto___29675){
var seq__29662_29676__$1 = temp__4657__auto___29675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29662_29676__$1)){
var c__21266__auto___29677 = cljs.core.chunk_first.call(null,seq__29662_29676__$1);
var G__29678 = cljs.core.chunk_rest.call(null,seq__29662_29676__$1);
var G__29679 = c__21266__auto___29677;
var G__29680 = cljs.core.count.call(null,c__21266__auto___29677);
var G__29681 = (0);
seq__29662_29666 = G__29678;
chunk__29663_29667 = G__29679;
count__29664_29668 = G__29680;
i__29665_29669 = G__29681;
continue;
} else {
var c_29682 = cljs.core.first.call(null,seq__29662_29676__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29682));

var G__29683 = cljs.core.next.call(null,seq__29662_29676__$1);
var G__29684 = null;
var G__29685 = (0);
var G__29686 = (0);
seq__29662_29666 = G__29683;
chunk__29663_29667 = G__29684;
count__29664_29668 = G__29685;
i__29665_29669 = G__29686;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__21380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21384__auto__,method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__25188__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__25188__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29692_29697 = ast;
var map__29692_29698__$1 = ((((!((map__29692_29697 == null)))?((((map__29692_29697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29692_29697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692_29697):map__29692_29697);
var env_29699 = cljs.core.get.call(null,map__29692_29698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29699))){
var map__29694_29700 = env_29699;
var map__29694_29701__$1 = ((((!((map__29694_29700 == null)))?((((map__29694_29700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29694_29700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694_29700):map__29694_29700);
var line_29702 = cljs.core.get.call(null,map__29694_29701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29703 = cljs.core.get.call(null,map__29694_29701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__){
return (function (m){
var minfo = (function (){var G__29696 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__29696,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__29696;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29702 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29703)?(column_29703 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__29694_29700,map__29694_29701__$1,line_29702,column_29703,map__29692_29697,map__29692_29698__$1,env_29699,val__25188__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__25188__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29710 = arguments.length;
var i__21531__auto___29711 = (0);
while(true){
if((i__21531__auto___29711 < len__21530__auto___29710)){
args__21537__auto__.push((arguments[i__21531__auto___29711]));

var G__29712 = (i__21531__auto___29711 + (1));
i__21531__auto___29711 = G__29712;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__29706_29713 = cljs.core.seq.call(null,xs);
var chunk__29707_29714 = null;
var count__29708_29715 = (0);
var i__29709_29716 = (0);
while(true){
if((i__29709_29716 < count__29708_29715)){
var x_29717 = cljs.core._nth.call(null,chunk__29707_29714,i__29709_29716);
if((x_29717 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29717)){
cljs.compiler.emit.call(null,x_29717);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29717)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29717);
} else {
if(goog.isFunction(x_29717)){
x_29717.call(null);
} else {
var s_29718 = cljs.core.print_str.call(null,x_29717);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29706_29713,chunk__29707_29714,count__29708_29715,i__29709_29716,s_29718,x_29717){
return (function (p1__29704_SHARP_){
return (p1__29704_SHARP_ + cljs.core.count.call(null,s_29718));
});})(seq__29706_29713,chunk__29707_29714,count__29708_29715,i__29709_29716,s_29718,x_29717))
);
}

cljs.core.print.call(null,s_29718);

}
}
}
}

var G__29719 = seq__29706_29713;
var G__29720 = chunk__29707_29714;
var G__29721 = count__29708_29715;
var G__29722 = (i__29709_29716 + (1));
seq__29706_29713 = G__29719;
chunk__29707_29714 = G__29720;
count__29708_29715 = G__29721;
i__29709_29716 = G__29722;
continue;
} else {
var temp__4657__auto___29723 = cljs.core.seq.call(null,seq__29706_29713);
if(temp__4657__auto___29723){
var seq__29706_29724__$1 = temp__4657__auto___29723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706_29724__$1)){
var c__21266__auto___29725 = cljs.core.chunk_first.call(null,seq__29706_29724__$1);
var G__29726 = cljs.core.chunk_rest.call(null,seq__29706_29724__$1);
var G__29727 = c__21266__auto___29725;
var G__29728 = cljs.core.count.call(null,c__21266__auto___29725);
var G__29729 = (0);
seq__29706_29713 = G__29726;
chunk__29707_29714 = G__29727;
count__29708_29715 = G__29728;
i__29709_29716 = G__29729;
continue;
} else {
var x_29730 = cljs.core.first.call(null,seq__29706_29724__$1);
if((x_29730 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29730)){
cljs.compiler.emit.call(null,x_29730);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29730)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29730);
} else {
if(goog.isFunction(x_29730)){
x_29730.call(null);
} else {
var s_29731 = cljs.core.print_str.call(null,x_29730);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29706_29713,chunk__29707_29714,count__29708_29715,i__29709_29716,s_29731,x_29730,seq__29706_29724__$1,temp__4657__auto___29723){
return (function (p1__29704_SHARP_){
return (p1__29704_SHARP_ + cljs.core.count.call(null,s_29731));
});})(seq__29706_29713,chunk__29707_29714,count__29708_29715,i__29709_29716,s_29731,x_29730,seq__29706_29724__$1,temp__4657__auto___29723))
);
}

cljs.core.print.call(null,s_29731);

}
}
}
}

var G__29732 = cljs.core.next.call(null,seq__29706_29724__$1);
var G__29733 = null;
var G__29734 = (0);
var G__29735 = (0);
seq__29706_29713 = G__29732;
chunk__29707_29714 = G__29733;
count__29708_29715 = G__29734;
i__29709_29716 = G__29735;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq29705){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29705));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29740 = arguments.length;
var i__21531__auto___29741 = (0);
while(true){
if((i__21531__auto___29741 < len__21530__auto___29740)){
args__21537__auto__.push((arguments[i__21531__auto___29741]));

var G__29742 = (i__21531__auto___29741 + (1));
i__21531__auto___29741 = G__29742;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29737){
var map__29738 = p__29737;
var map__29738__$1 = ((((!((map__29738 == null)))?((((map__29738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29738):map__29738);
var m = map__29738__$1;
var gen_line = cljs.core.get.call(null,map__29738__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29736){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29736));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__21441__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29745_29747 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29746_29748 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29745_29747,_STAR_print_fn_STAR_29746_29748,sb__21441__auto__){
return (function (x__21442__auto__){
return sb__21441__auto__.append(x__21442__auto__);
});})(_STAR_print_newline_STAR_29745_29747,_STAR_print_fn_STAR_29746_29748,sb__21441__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29746_29748;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29745_29747;
}
return [cljs.core.str(sb__21441__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__21380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21384__auto__,method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__29749 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__29749,(0),null);
var flags = cljs.core.nth.call(null,vec__29749,(1),null);
var pattern = cljs.core.nth.call(null,vec__29749,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__29753){
var map__29754 = p__29753;
var map__29754__$1 = ((((!((map__29754 == null)))?((((map__29754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29754):map__29754);
var arg = map__29754__$1;
var info = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__20455__auto__ = js_module_name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__29756 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29756);
} else {
return G__29756;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__29757){
var map__29758 = p__29757;
var map__29758__$1 = ((((!((map__29758 == null)))?((((map__29758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29758):map__29758);
var arg = map__29758__$1;
var env = cljs.core.get.call(null,map__29758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29758__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29758__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29758__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29760 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29760__$1 = ((((!((map__29760 == null)))?((((map__29760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29760):map__29760);
var name = cljs.core.get.call(null,map__29760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__29762){
var map__29763 = p__29762;
var map__29763__$1 = ((((!((map__29763 == null)))?((((map__29763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29763):map__29763);
var expr = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__29765_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29765_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29766){
var map__29767 = p__29766;
var map__29767__$1 = ((((!((map__29767 == null)))?((((map__29767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767):map__29767);
var env = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__29769){
var map__29770 = p__29769;
var map__29770__$1 = ((((!((map__29770 == null)))?((((map__29770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);
var items = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29772){
var map__29773 = p__29772;
var map__29773__$1 = ((((!((map__29773 == null)))?((((map__29773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29773):map__29773);
var items = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_29775 = cljs.core.count.call(null,items);
if((cnt_29775 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_29775,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__29776_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29776_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29777){
var map__29778 = p__29777;
var map__29778__$1 = ((((!((map__29778 == null)))?((((map__29778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29778):map__29778);
var items = cljs.core.get.call(null,map__29778__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__29780){
var map__29781 = p__29780;
var map__29781__$1 = ((((!((map__29781 == null)))?((((map__29781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);
var items = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___29799 = cljs.core.seq.call(null,items);
if(temp__4657__auto___29799){
var items_29800__$1 = temp__4657__auto___29799;
var vec__29783_29801 = items_29800__$1;
var seq__29784_29802 = cljs.core.seq.call(null,vec__29783_29801);
var first__29785_29803 = cljs.core.first.call(null,seq__29784_29802);
var seq__29784_29804__$1 = cljs.core.next.call(null,seq__29784_29802);
var vec__29786_29805 = first__29785_29803;
var k_29806 = cljs.core.nth.call(null,vec__29786_29805,(0),null);
var v_29807 = cljs.core.nth.call(null,vec__29786_29805,(1),null);
var r_29808 = seq__29784_29804__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29806),"\": ",v_29807);

var seq__29789_29809 = cljs.core.seq.call(null,r_29808);
var chunk__29790_29810 = null;
var count__29791_29811 = (0);
var i__29792_29812 = (0);
while(true){
if((i__29792_29812 < count__29791_29811)){
var vec__29793_29813 = cljs.core._nth.call(null,chunk__29790_29810,i__29792_29812);
var k_29814__$1 = cljs.core.nth.call(null,vec__29793_29813,(0),null);
var v_29815__$1 = cljs.core.nth.call(null,vec__29793_29813,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29814__$1),"\": ",v_29815__$1);

var G__29816 = seq__29789_29809;
var G__29817 = chunk__29790_29810;
var G__29818 = count__29791_29811;
var G__29819 = (i__29792_29812 + (1));
seq__29789_29809 = G__29816;
chunk__29790_29810 = G__29817;
count__29791_29811 = G__29818;
i__29792_29812 = G__29819;
continue;
} else {
var temp__4657__auto___29820__$1 = cljs.core.seq.call(null,seq__29789_29809);
if(temp__4657__auto___29820__$1){
var seq__29789_29821__$1 = temp__4657__auto___29820__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29789_29821__$1)){
var c__21266__auto___29822 = cljs.core.chunk_first.call(null,seq__29789_29821__$1);
var G__29823 = cljs.core.chunk_rest.call(null,seq__29789_29821__$1);
var G__29824 = c__21266__auto___29822;
var G__29825 = cljs.core.count.call(null,c__21266__auto___29822);
var G__29826 = (0);
seq__29789_29809 = G__29823;
chunk__29790_29810 = G__29824;
count__29791_29811 = G__29825;
i__29792_29812 = G__29826;
continue;
} else {
var vec__29796_29827 = cljs.core.first.call(null,seq__29789_29821__$1);
var k_29828__$1 = cljs.core.nth.call(null,vec__29796_29827,(0),null);
var v_29829__$1 = cljs.core.nth.call(null,vec__29796_29827,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29828__$1),"\": ",v_29829__$1);

var G__29830 = cljs.core.next.call(null,seq__29789_29821__$1);
var G__29831 = null;
var G__29832 = (0);
var G__29833 = (0);
seq__29789_29809 = G__29830;
chunk__29790_29810 = G__29831;
count__29791_29811 = G__29832;
i__29792_29812 = G__29833;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__29834){
var map__29835 = p__29834;
var map__29835__$1 = ((((!((map__29835 == null)))?((((map__29835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29835):map__29835);
var form = cljs.core.get.call(null,map__29835__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__29837){
var map__29840 = p__29837;
var map__29840__$1 = ((((!((map__29840 == null)))?((((map__29840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29840):map__29840);
var op = cljs.core.get.call(null,map__29840__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29840__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__20443__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__20443__auto__){
var and__20443__auto____$1 = form;
if(cljs.core.truth_(and__20443__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__29842){
var map__29845 = p__29842;
var map__29845__$1 = ((((!((map__29845 == null)))?((((map__29845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29845):map__29845);
var op = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__20455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29847){
var map__29848 = p__29847;
var map__29848__$1 = ((((!((map__29848 == null)))?((((map__29848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29848):map__29848);
var test = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__20455__auto__ = unchecked;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__29850){
var map__29851 = p__29850;
var map__29851__$1 = ((((!((map__29851 == null)))?((((map__29851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29851):map__29851);
var v = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__29853_29871 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__29854_29872 = null;
var count__29855_29873 = (0);
var i__29856_29874 = (0);
while(true){
if((i__29856_29874 < count__29855_29873)){
var vec__29857_29875 = cljs.core._nth.call(null,chunk__29854_29872,i__29856_29874);
var ts_29876 = cljs.core.nth.call(null,vec__29857_29875,(0),null);
var then_29877 = cljs.core.nth.call(null,vec__29857_29875,(1),null);
var seq__29860_29878 = cljs.core.seq.call(null,ts_29876);
var chunk__29861_29879 = null;
var count__29862_29880 = (0);
var i__29863_29881 = (0);
while(true){
if((i__29863_29881 < count__29862_29880)){
var test_29882 = cljs.core._nth.call(null,chunk__29861_29879,i__29863_29881);
cljs.compiler.emitln.call(null,"case ",test_29882,":");

var G__29883 = seq__29860_29878;
var G__29884 = chunk__29861_29879;
var G__29885 = count__29862_29880;
var G__29886 = (i__29863_29881 + (1));
seq__29860_29878 = G__29883;
chunk__29861_29879 = G__29884;
count__29862_29880 = G__29885;
i__29863_29881 = G__29886;
continue;
} else {
var temp__4657__auto___29887 = cljs.core.seq.call(null,seq__29860_29878);
if(temp__4657__auto___29887){
var seq__29860_29888__$1 = temp__4657__auto___29887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860_29888__$1)){
var c__21266__auto___29889 = cljs.core.chunk_first.call(null,seq__29860_29888__$1);
var G__29890 = cljs.core.chunk_rest.call(null,seq__29860_29888__$1);
var G__29891 = c__21266__auto___29889;
var G__29892 = cljs.core.count.call(null,c__21266__auto___29889);
var G__29893 = (0);
seq__29860_29878 = G__29890;
chunk__29861_29879 = G__29891;
count__29862_29880 = G__29892;
i__29863_29881 = G__29893;
continue;
} else {
var test_29894 = cljs.core.first.call(null,seq__29860_29888__$1);
cljs.compiler.emitln.call(null,"case ",test_29894,":");

var G__29895 = cljs.core.next.call(null,seq__29860_29888__$1);
var G__29896 = null;
var G__29897 = (0);
var G__29898 = (0);
seq__29860_29878 = G__29895;
chunk__29861_29879 = G__29896;
count__29862_29880 = G__29897;
i__29863_29881 = G__29898;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29877);
} else {
cljs.compiler.emitln.call(null,then_29877);
}

cljs.compiler.emitln.call(null,"break;");

var G__29899 = seq__29853_29871;
var G__29900 = chunk__29854_29872;
var G__29901 = count__29855_29873;
var G__29902 = (i__29856_29874 + (1));
seq__29853_29871 = G__29899;
chunk__29854_29872 = G__29900;
count__29855_29873 = G__29901;
i__29856_29874 = G__29902;
continue;
} else {
var temp__4657__auto___29903 = cljs.core.seq.call(null,seq__29853_29871);
if(temp__4657__auto___29903){
var seq__29853_29904__$1 = temp__4657__auto___29903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29853_29904__$1)){
var c__21266__auto___29905 = cljs.core.chunk_first.call(null,seq__29853_29904__$1);
var G__29906 = cljs.core.chunk_rest.call(null,seq__29853_29904__$1);
var G__29907 = c__21266__auto___29905;
var G__29908 = cljs.core.count.call(null,c__21266__auto___29905);
var G__29909 = (0);
seq__29853_29871 = G__29906;
chunk__29854_29872 = G__29907;
count__29855_29873 = G__29908;
i__29856_29874 = G__29909;
continue;
} else {
var vec__29864_29910 = cljs.core.first.call(null,seq__29853_29904__$1);
var ts_29911 = cljs.core.nth.call(null,vec__29864_29910,(0),null);
var then_29912 = cljs.core.nth.call(null,vec__29864_29910,(1),null);
var seq__29867_29913 = cljs.core.seq.call(null,ts_29911);
var chunk__29868_29914 = null;
var count__29869_29915 = (0);
var i__29870_29916 = (0);
while(true){
if((i__29870_29916 < count__29869_29915)){
var test_29917 = cljs.core._nth.call(null,chunk__29868_29914,i__29870_29916);
cljs.compiler.emitln.call(null,"case ",test_29917,":");

var G__29918 = seq__29867_29913;
var G__29919 = chunk__29868_29914;
var G__29920 = count__29869_29915;
var G__29921 = (i__29870_29916 + (1));
seq__29867_29913 = G__29918;
chunk__29868_29914 = G__29919;
count__29869_29915 = G__29920;
i__29870_29916 = G__29921;
continue;
} else {
var temp__4657__auto___29922__$1 = cljs.core.seq.call(null,seq__29867_29913);
if(temp__4657__auto___29922__$1){
var seq__29867_29923__$1 = temp__4657__auto___29922__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29867_29923__$1)){
var c__21266__auto___29924 = cljs.core.chunk_first.call(null,seq__29867_29923__$1);
var G__29925 = cljs.core.chunk_rest.call(null,seq__29867_29923__$1);
var G__29926 = c__21266__auto___29924;
var G__29927 = cljs.core.count.call(null,c__21266__auto___29924);
var G__29928 = (0);
seq__29867_29913 = G__29925;
chunk__29868_29914 = G__29926;
count__29869_29915 = G__29927;
i__29870_29916 = G__29928;
continue;
} else {
var test_29929 = cljs.core.first.call(null,seq__29867_29923__$1);
cljs.compiler.emitln.call(null,"case ",test_29929,":");

var G__29930 = cljs.core.next.call(null,seq__29867_29923__$1);
var G__29931 = null;
var G__29932 = (0);
var G__29933 = (0);
seq__29867_29913 = G__29930;
chunk__29868_29914 = G__29931;
count__29869_29915 = G__29932;
i__29870_29916 = G__29933;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29912);
} else {
cljs.compiler.emitln.call(null,then_29912);
}

cljs.compiler.emitln.call(null,"break;");

var G__29934 = cljs.core.next.call(null,seq__29853_29904__$1);
var G__29935 = null;
var G__29936 = (0);
var G__29937 = (0);
seq__29853_29871 = G__29934;
chunk__29854_29872 = G__29935;
count__29855_29873 = G__29936;
i__29856_29874 = G__29937;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29938){
var map__29939 = p__29938;
var map__29939__$1 = ((((!((map__29939 == null)))?((((map__29939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29939):map__29939);
var throw$ = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__29946 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29946,(0),null);
var rstr = cljs.core.nth.call(null,vec__29946,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29946,fstr,rstr,ret_t,axstr){
return (function (p1__29941_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__29941_SHARP_);
});})(idx,vec__29946,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29949 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__29949),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__29949;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__29950_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29950_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29957 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29958 = cljs.core.seq.call(null,vec__29957);
var first__29959 = cljs.core.first.call(null,seq__29958);
var seq__29958__$1 = cljs.core.next.call(null,seq__29958);
var p = first__29959;
var first__29959__$1 = cljs.core.first.call(null,seq__29958__$1);
var seq__29958__$2 = cljs.core.next.call(null,seq__29958__$1);
var ts = first__29959__$1;
var first__29959__$2 = cljs.core.first.call(null,seq__29958__$2);
var seq__29958__$3 = cljs.core.next.call(null,seq__29958__$2);
var n = first__29959__$2;
var xs = seq__29958__$3;
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__20443__auto__){
var and__20443__auto____$1 = ts;
if(cljs.core.truth_(and__20443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__29960 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29961 = cljs.core.seq.call(null,vec__29960);
var first__29962 = cljs.core.first.call(null,seq__29961);
var seq__29961__$1 = cljs.core.next.call(null,seq__29961);
var p = first__29962;
var first__29962__$1 = cljs.core.first.call(null,seq__29961__$1);
var seq__29961__$2 = cljs.core.next.call(null,seq__29961__$1);
var ts = first__29962__$1;
var xs = seq__29961__$2;
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__20443__auto__){
var and__20443__auto____$1 = ts;
if(cljs.core.truth_(and__20443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args29964 = [];
var len__21530__auto___29999 = arguments.length;
var i__21531__auto___30000 = (0);
while(true){
if((i__21531__auto___30000 < len__21530__auto___29999)){
args29964.push((arguments[i__21531__auto___30000]));

var G__30001 = (i__21531__auto___30000 + (1));
i__21531__auto___30000 = G__30001;
continue;
} else {
}
break;
}

var G__29966 = args29964.length;
switch (G__29966) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29964.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__29988 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29963_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29963_SHARP_);
} else {
return p1__29963_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29989 = cljs.core.seq.call(null,vec__29988);
var first__29990 = cljs.core.first.call(null,seq__29989);
var seq__29989__$1 = cljs.core.next.call(null,seq__29989);
var x = first__29990;
var ys = seq__29989__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29991 = cljs.core.seq.call(null,ys);
var chunk__29992 = null;
var count__29993 = (0);
var i__29994 = (0);
while(true){
if((i__29994 < count__29993)){
var next_line = cljs.core._nth.call(null,chunk__29992,i__29994);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30003 = seq__29991;
var G__30004 = chunk__29992;
var G__30005 = count__29993;
var G__30006 = (i__29994 + (1));
seq__29991 = G__30003;
chunk__29992 = G__30004;
count__29993 = G__30005;
i__29994 = G__30006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29991);
if(temp__4657__auto__){
var seq__29991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29991__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__29991__$1);
var G__30007 = cljs.core.chunk_rest.call(null,seq__29991__$1);
var G__30008 = c__21266__auto__;
var G__30009 = cljs.core.count.call(null,c__21266__auto__);
var G__30010 = (0);
seq__29991 = G__30007;
chunk__29992 = G__30008;
count__29993 = G__30009;
i__29994 = G__30010;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29991__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30011 = cljs.core.next.call(null,seq__29991__$1);
var G__30012 = null;
var G__30013 = (0);
var G__30014 = (0);
seq__29991 = G__30011;
chunk__29992 = G__30012;
count__29993 = G__30013;
i__29994 = G__30014;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__29995_30015 = cljs.core.seq.call(null,docs__$2);
var chunk__29996_30016 = null;
var count__29997_30017 = (0);
var i__29998_30018 = (0);
while(true){
if((i__29998_30018 < count__29997_30017)){
var e_30019 = cljs.core._nth.call(null,chunk__29996_30016,i__29998_30018);
if(cljs.core.truth_(e_30019)){
print_comment_lines.call(null,e_30019);
} else {
}

var G__30020 = seq__29995_30015;
var G__30021 = chunk__29996_30016;
var G__30022 = count__29997_30017;
var G__30023 = (i__29998_30018 + (1));
seq__29995_30015 = G__30020;
chunk__29996_30016 = G__30021;
count__29997_30017 = G__30022;
i__29998_30018 = G__30023;
continue;
} else {
var temp__4657__auto___30024 = cljs.core.seq.call(null,seq__29995_30015);
if(temp__4657__auto___30024){
var seq__29995_30025__$1 = temp__4657__auto___30024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29995_30025__$1)){
var c__21266__auto___30026 = cljs.core.chunk_first.call(null,seq__29995_30025__$1);
var G__30027 = cljs.core.chunk_rest.call(null,seq__29995_30025__$1);
var G__30028 = c__21266__auto___30026;
var G__30029 = cljs.core.count.call(null,c__21266__auto___30026);
var G__30030 = (0);
seq__29995_30015 = G__30027;
chunk__29996_30016 = G__30028;
count__29997_30017 = G__30029;
i__29998_30018 = G__30030;
continue;
} else {
var e_30031 = cljs.core.first.call(null,seq__29995_30025__$1);
if(cljs.core.truth_(e_30031)){
print_comment_lines.call(null,e_30031);
} else {
}

var G__30032 = cljs.core.next.call(null,seq__29995_30025__$1);
var G__30033 = null;
var G__30034 = (0);
var G__30035 = (0);
seq__29995_30015 = G__30032;
chunk__29996_30016 = G__30033;
count__29997_30017 = G__30034;
i__29998_30018 = G__30035;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__20443__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__30037_SHARP_){
return goog.string.startsWith(p1__30037_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = opts;
if(cljs.core.truth_(and__20443__auto____$1)){
var and__20443__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__20443__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__20443__auto____$2;
}
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30038){
var map__30039 = p__30038;
var map__30039__$1 = ((((!((map__30039 == null)))?((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var name = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__20455__auto__ = init;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
return test;
} else {
return and__20443__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30041){
var map__30062 = p__30041;
var map__30062__$1 = ((((!((map__30062 == null)))?((((map__30062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var name = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__30064_30082 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__30065_30083 = null;
var count__30066_30084 = (0);
var i__30067_30085 = (0);
while(true){
if((i__30067_30085 < count__30066_30084)){
var vec__30068_30086 = cljs.core._nth.call(null,chunk__30065_30083,i__30067_30085);
var i_30087 = cljs.core.nth.call(null,vec__30068_30086,(0),null);
var param_30088 = cljs.core.nth.call(null,vec__30068_30086,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30088);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30089 = seq__30064_30082;
var G__30090 = chunk__30065_30083;
var G__30091 = count__30066_30084;
var G__30092 = (i__30067_30085 + (1));
seq__30064_30082 = G__30089;
chunk__30065_30083 = G__30090;
count__30066_30084 = G__30091;
i__30067_30085 = G__30092;
continue;
} else {
var temp__4657__auto___30093 = cljs.core.seq.call(null,seq__30064_30082);
if(temp__4657__auto___30093){
var seq__30064_30094__$1 = temp__4657__auto___30093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30064_30094__$1)){
var c__21266__auto___30095 = cljs.core.chunk_first.call(null,seq__30064_30094__$1);
var G__30096 = cljs.core.chunk_rest.call(null,seq__30064_30094__$1);
var G__30097 = c__21266__auto___30095;
var G__30098 = cljs.core.count.call(null,c__21266__auto___30095);
var G__30099 = (0);
seq__30064_30082 = G__30096;
chunk__30065_30083 = G__30097;
count__30066_30084 = G__30098;
i__30067_30085 = G__30099;
continue;
} else {
var vec__30071_30100 = cljs.core.first.call(null,seq__30064_30094__$1);
var i_30101 = cljs.core.nth.call(null,vec__30071_30100,(0),null);
var param_30102 = cljs.core.nth.call(null,vec__30071_30100,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30102);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30103 = cljs.core.next.call(null,seq__30064_30094__$1);
var G__30104 = null;
var G__30105 = (0);
var G__30106 = (0);
seq__30064_30082 = G__30103;
chunk__30065_30083 = G__30104;
count__30066_30084 = G__30105;
i__30067_30085 = G__30106;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__30074_30107 = cljs.core.seq.call(null,params);
var chunk__30075_30108 = null;
var count__30076_30109 = (0);
var i__30077_30110 = (0);
while(true){
if((i__30077_30110 < count__30076_30109)){
var param_30111 = cljs.core._nth.call(null,chunk__30075_30108,i__30077_30110);
cljs.compiler.emit.call(null,param_30111);

if(cljs.core._EQ_.call(null,param_30111,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30112 = seq__30074_30107;
var G__30113 = chunk__30075_30108;
var G__30114 = count__30076_30109;
var G__30115 = (i__30077_30110 + (1));
seq__30074_30107 = G__30112;
chunk__30075_30108 = G__30113;
count__30076_30109 = G__30114;
i__30077_30110 = G__30115;
continue;
} else {
var temp__4657__auto___30116 = cljs.core.seq.call(null,seq__30074_30107);
if(temp__4657__auto___30116){
var seq__30074_30117__$1 = temp__4657__auto___30116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30074_30117__$1)){
var c__21266__auto___30118 = cljs.core.chunk_first.call(null,seq__30074_30117__$1);
var G__30119 = cljs.core.chunk_rest.call(null,seq__30074_30117__$1);
var G__30120 = c__21266__auto___30118;
var G__30121 = cljs.core.count.call(null,c__21266__auto___30118);
var G__30122 = (0);
seq__30074_30107 = G__30119;
chunk__30075_30108 = G__30120;
count__30076_30109 = G__30121;
i__30077_30110 = G__30122;
continue;
} else {
var param_30123 = cljs.core.first.call(null,seq__30074_30117__$1);
cljs.compiler.emit.call(null,param_30123);

if(cljs.core._EQ_.call(null,param_30123,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30124 = cljs.core.next.call(null,seq__30074_30117__$1);
var G__30125 = null;
var G__30126 = (0);
var G__30127 = (0);
seq__30074_30107 = G__30124;
chunk__30075_30108 = G__30125;
count__30076_30109 = G__30126;
i__30077_30110 = G__30127;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__30078_30128 = cljs.core.seq.call(null,params);
var chunk__30079_30129 = null;
var count__30080_30130 = (0);
var i__30081_30131 = (0);
while(true){
if((i__30081_30131 < count__30080_30130)){
var param_30132 = cljs.core._nth.call(null,chunk__30079_30129,i__30081_30131);
cljs.compiler.emit.call(null,param_30132);

if(cljs.core._EQ_.call(null,param_30132,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30133 = seq__30078_30128;
var G__30134 = chunk__30079_30129;
var G__30135 = count__30080_30130;
var G__30136 = (i__30081_30131 + (1));
seq__30078_30128 = G__30133;
chunk__30079_30129 = G__30134;
count__30080_30130 = G__30135;
i__30081_30131 = G__30136;
continue;
} else {
var temp__4657__auto___30137 = cljs.core.seq.call(null,seq__30078_30128);
if(temp__4657__auto___30137){
var seq__30078_30138__$1 = temp__4657__auto___30137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30078_30138__$1)){
var c__21266__auto___30139 = cljs.core.chunk_first.call(null,seq__30078_30138__$1);
var G__30140 = cljs.core.chunk_rest.call(null,seq__30078_30138__$1);
var G__30141 = c__21266__auto___30139;
var G__30142 = cljs.core.count.call(null,c__21266__auto___30139);
var G__30143 = (0);
seq__30078_30128 = G__30140;
chunk__30079_30129 = G__30141;
count__30080_30130 = G__30142;
i__30081_30131 = G__30143;
continue;
} else {
var param_30144 = cljs.core.first.call(null,seq__30078_30138__$1);
cljs.compiler.emit.call(null,param_30144);

if(cljs.core._EQ_.call(null,param_30144,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30145 = cljs.core.next.call(null,seq__30078_30138__$1);
var G__30146 = null;
var G__30147 = (0);
var G__30148 = (0);
seq__30078_30128 = G__30145;
chunk__30079_30129 = G__30146;
count__30080_30130 = G__30147;
i__30081_30131 = G__30148;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__30153 = cljs.core.seq.call(null,params);
var chunk__30154 = null;
var count__30155 = (0);
var i__30156 = (0);
while(true){
if((i__30156 < count__30155)){
var param = cljs.core._nth.call(null,chunk__30154,i__30156);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30157 = seq__30153;
var G__30158 = chunk__30154;
var G__30159 = count__30155;
var G__30160 = (i__30156 + (1));
seq__30153 = G__30157;
chunk__30154 = G__30158;
count__30155 = G__30159;
i__30156 = G__30160;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30153);
if(temp__4657__auto__){
var seq__30153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30153__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__30153__$1);
var G__30161 = cljs.core.chunk_rest.call(null,seq__30153__$1);
var G__30162 = c__21266__auto__;
var G__30163 = cljs.core.count.call(null,c__21266__auto__);
var G__30164 = (0);
seq__30153 = G__30161;
chunk__30154 = G__30162;
count__30155 = G__30163;
i__30156 = G__30164;
continue;
} else {
var param = cljs.core.first.call(null,seq__30153__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30165 = cljs.core.next.call(null,seq__30153__$1);
var G__30166 = null;
var G__30167 = (0);
var G__30168 = (0);
seq__30153 = G__30165;
chunk__30154 = G__30166;
count__30155 = G__30167;
i__30156 = G__30168;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30169){
var map__30172 = p__30169;
var map__30172__$1 = ((((!((map__30172 == null)))?((((map__30172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172):map__30172);
var type = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30174){
var map__30185 = p__30174;
var map__30185__$1 = ((((!((map__30185 == null)))?((((map__30185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30185):map__30185);
var f = map__30185__$1;
var type = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30195__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30196 = cljs.compiler.munge.call(null,name_30195__$1);
var delegate_name_30197 = [cljs.core.str(mname_30196),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30197," = function (");

var seq__30187_30198 = cljs.core.seq.call(null,params);
var chunk__30188_30199 = null;
var count__30189_30200 = (0);
var i__30190_30201 = (0);
while(true){
if((i__30190_30201 < count__30189_30200)){
var param_30202 = cljs.core._nth.call(null,chunk__30188_30199,i__30190_30201);
cljs.compiler.emit.call(null,param_30202);

if(cljs.core._EQ_.call(null,param_30202,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30203 = seq__30187_30198;
var G__30204 = chunk__30188_30199;
var G__30205 = count__30189_30200;
var G__30206 = (i__30190_30201 + (1));
seq__30187_30198 = G__30203;
chunk__30188_30199 = G__30204;
count__30189_30200 = G__30205;
i__30190_30201 = G__30206;
continue;
} else {
var temp__4657__auto___30207 = cljs.core.seq.call(null,seq__30187_30198);
if(temp__4657__auto___30207){
var seq__30187_30208__$1 = temp__4657__auto___30207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30187_30208__$1)){
var c__21266__auto___30209 = cljs.core.chunk_first.call(null,seq__30187_30208__$1);
var G__30210 = cljs.core.chunk_rest.call(null,seq__30187_30208__$1);
var G__30211 = c__21266__auto___30209;
var G__30212 = cljs.core.count.call(null,c__21266__auto___30209);
var G__30213 = (0);
seq__30187_30198 = G__30210;
chunk__30188_30199 = G__30211;
count__30189_30200 = G__30212;
i__30190_30201 = G__30213;
continue;
} else {
var param_30214 = cljs.core.first.call(null,seq__30187_30208__$1);
cljs.compiler.emit.call(null,param_30214);

if(cljs.core._EQ_.call(null,param_30214,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30215 = cljs.core.next.call(null,seq__30187_30208__$1);
var G__30216 = null;
var G__30217 = (0);
var G__30218 = (0);
seq__30187_30198 = G__30215;
chunk__30188_30199 = G__30216;
count__30189_30200 = G__30217;
i__30190_30201 = G__30218;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_30196," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30219 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30219,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30197,".call(this,");

var seq__30191_30220 = cljs.core.seq.call(null,params);
var chunk__30192_30221 = null;
var count__30193_30222 = (0);
var i__30194_30223 = (0);
while(true){
if((i__30194_30223 < count__30193_30222)){
var param_30224 = cljs.core._nth.call(null,chunk__30192_30221,i__30194_30223);
cljs.compiler.emit.call(null,param_30224);

if(cljs.core._EQ_.call(null,param_30224,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30225 = seq__30191_30220;
var G__30226 = chunk__30192_30221;
var G__30227 = count__30193_30222;
var G__30228 = (i__30194_30223 + (1));
seq__30191_30220 = G__30225;
chunk__30192_30221 = G__30226;
count__30193_30222 = G__30227;
i__30194_30223 = G__30228;
continue;
} else {
var temp__4657__auto___30229 = cljs.core.seq.call(null,seq__30191_30220);
if(temp__4657__auto___30229){
var seq__30191_30230__$1 = temp__4657__auto___30229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30191_30230__$1)){
var c__21266__auto___30231 = cljs.core.chunk_first.call(null,seq__30191_30230__$1);
var G__30232 = cljs.core.chunk_rest.call(null,seq__30191_30230__$1);
var G__30233 = c__21266__auto___30231;
var G__30234 = cljs.core.count.call(null,c__21266__auto___30231);
var G__30235 = (0);
seq__30191_30220 = G__30232;
chunk__30192_30221 = G__30233;
count__30193_30222 = G__30234;
i__30194_30223 = G__30235;
continue;
} else {
var param_30236 = cljs.core.first.call(null,seq__30191_30230__$1);
cljs.compiler.emit.call(null,param_30236);

if(cljs.core._EQ_.call(null,param_30236,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30237 = cljs.core.next.call(null,seq__30191_30230__$1);
var G__30238 = null;
var G__30239 = (0);
var G__30240 = (0);
seq__30191_30220 = G__30237;
chunk__30192_30221 = G__30238;
count__30193_30222 = G__30239;
i__30194_30223 = G__30240;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30196,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30196,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30195__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30196,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30197,";");

cljs.compiler.emitln.call(null,"return ",mname_30196,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30244){
var map__30245 = p__30244;
var map__30245__$1 = ((((!((map__30245 == null)))?((((map__30245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var name = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30241_SHARP_){
var and__20443__auto__ = p1__30241_SHARP_;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30241_SHARP_));
} else {
return and__20443__auto__;
}
});})(map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_30280__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30281 = cljs.compiler.munge.call(null,name_30280__$1);
var maxparams_30282 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30283 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30280__$1,mname_30281,maxparams_30282,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_30281),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30280__$1,mname_30281,maxparams_30282,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_30284 = cljs.core.sort_by.call(null,((function (name_30280__$1,mname_30281,maxparams_30282,mmap_30283,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30242_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30242_SHARP_)));
});})(name_30280__$1,mname_30281,maxparams_30282,mmap_30283,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30283));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30281," = null;");

var seq__30247_30285 = cljs.core.seq.call(null,ms_30284);
var chunk__30248_30286 = null;
var count__30249_30287 = (0);
var i__30250_30288 = (0);
while(true){
if((i__30250_30288 < count__30249_30287)){
var vec__30251_30289 = cljs.core._nth.call(null,chunk__30248_30286,i__30250_30288);
var n_30290 = cljs.core.nth.call(null,vec__30251_30289,(0),null);
var meth_30291 = cljs.core.nth.call(null,vec__30251_30289,(1),null);
cljs.compiler.emits.call(null,"var ",n_30290," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30291))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30291);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30291);
}

cljs.compiler.emitln.call(null,";");

var G__30292 = seq__30247_30285;
var G__30293 = chunk__30248_30286;
var G__30294 = count__30249_30287;
var G__30295 = (i__30250_30288 + (1));
seq__30247_30285 = G__30292;
chunk__30248_30286 = G__30293;
count__30249_30287 = G__30294;
i__30250_30288 = G__30295;
continue;
} else {
var temp__4657__auto___30296 = cljs.core.seq.call(null,seq__30247_30285);
if(temp__4657__auto___30296){
var seq__30247_30297__$1 = temp__4657__auto___30296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30247_30297__$1)){
var c__21266__auto___30298 = cljs.core.chunk_first.call(null,seq__30247_30297__$1);
var G__30299 = cljs.core.chunk_rest.call(null,seq__30247_30297__$1);
var G__30300 = c__21266__auto___30298;
var G__30301 = cljs.core.count.call(null,c__21266__auto___30298);
var G__30302 = (0);
seq__30247_30285 = G__30299;
chunk__30248_30286 = G__30300;
count__30249_30287 = G__30301;
i__30250_30288 = G__30302;
continue;
} else {
var vec__30254_30303 = cljs.core.first.call(null,seq__30247_30297__$1);
var n_30304 = cljs.core.nth.call(null,vec__30254_30303,(0),null);
var meth_30305 = cljs.core.nth.call(null,vec__30254_30303,(1),null);
cljs.compiler.emits.call(null,"var ",n_30304," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30305))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30305);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30305);
}

cljs.compiler.emitln.call(null,";");

var G__30306 = cljs.core.next.call(null,seq__30247_30297__$1);
var G__30307 = null;
var G__30308 = (0);
var G__30309 = (0);
seq__30247_30285 = G__30306;
chunk__30248_30286 = G__30307;
count__30249_30287 = G__30308;
i__30250_30288 = G__30309;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30281," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30282)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30282));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30257_30310 = cljs.core.seq.call(null,ms_30284);
var chunk__30258_30311 = null;
var count__30259_30312 = (0);
var i__30260_30313 = (0);
while(true){
if((i__30260_30313 < count__30259_30312)){
var vec__30261_30314 = cljs.core._nth.call(null,chunk__30258_30311,i__30260_30313);
var n_30315 = cljs.core.nth.call(null,vec__30261_30314,(0),null);
var meth_30316 = cljs.core.nth.call(null,vec__30261_30314,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30316))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30317 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30317," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30318 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30317," = new cljs.core.IndexedSeq(",a_30318,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30315,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30282)),(((cljs.core.count.call(null,maxparams_30282) > (1)))?", ":null),restarg_30317,");");
} else {
var pcnt_30319 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30316));
cljs.compiler.emitln.call(null,"case ",pcnt_30319,":");

cljs.compiler.emitln.call(null,"return ",n_30315,".call(this",(((pcnt_30319 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30319,maxparams_30282));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__30320 = seq__30257_30310;
var G__30321 = chunk__30258_30311;
var G__30322 = count__30259_30312;
var G__30323 = (i__30260_30313 + (1));
seq__30257_30310 = G__30320;
chunk__30258_30311 = G__30321;
count__30259_30312 = G__30322;
i__30260_30313 = G__30323;
continue;
} else {
var temp__4657__auto___30324 = cljs.core.seq.call(null,seq__30257_30310);
if(temp__4657__auto___30324){
var seq__30257_30325__$1 = temp__4657__auto___30324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30257_30325__$1)){
var c__21266__auto___30326 = cljs.core.chunk_first.call(null,seq__30257_30325__$1);
var G__30327 = cljs.core.chunk_rest.call(null,seq__30257_30325__$1);
var G__30328 = c__21266__auto___30326;
var G__30329 = cljs.core.count.call(null,c__21266__auto___30326);
var G__30330 = (0);
seq__30257_30310 = G__30327;
chunk__30258_30311 = G__30328;
count__30259_30312 = G__30329;
i__30260_30313 = G__30330;
continue;
} else {
var vec__30264_30331 = cljs.core.first.call(null,seq__30257_30325__$1);
var n_30332 = cljs.core.nth.call(null,vec__30264_30331,(0),null);
var meth_30333 = cljs.core.nth.call(null,vec__30264_30331,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30333))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30334 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30334," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30335 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30334," = new cljs.core.IndexedSeq(",a_30335,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30332,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30282)),(((cljs.core.count.call(null,maxparams_30282) > (1)))?", ":null),restarg_30334,");");
} else {
var pcnt_30336 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30333));
cljs.compiler.emitln.call(null,"case ",pcnt_30336,":");

cljs.compiler.emitln.call(null,"return ",n_30332,".call(this",(((pcnt_30336 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30336,maxparams_30282));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__30337 = cljs.core.next.call(null,seq__30257_30325__$1);
var G__30338 = null;
var G__30339 = (0);
var G__30340 = (0);
seq__30257_30310 = G__30337;
chunk__30258_30311 = G__30338;
count__30259_30312 = G__30339;
i__30260_30313 = G__30340;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30281,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30281,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30280__$1,mname_30281,maxparams_30282,mmap_30283,ms_30284,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30243_SHARP_){
var vec__30267 = p1__30243_SHARP_;
var n = cljs.core.nth.call(null,vec__30267,(0),null);
var m = cljs.core.nth.call(null,vec__30267,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30280__$1,mname_30281,maxparams_30282,mmap_30283,ms_30284,loop_locals,map__30245,map__30245__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_30284),".cljs$lang$applyTo;");
} else {
}

var seq__30270_30341 = cljs.core.seq.call(null,ms_30284);
var chunk__30271_30342 = null;
var count__30272_30343 = (0);
var i__30273_30344 = (0);
while(true){
if((i__30273_30344 < count__30272_30343)){
var vec__30274_30345 = cljs.core._nth.call(null,chunk__30271_30342,i__30273_30344);
var n_30346 = cljs.core.nth.call(null,vec__30274_30345,(0),null);
var meth_30347 = cljs.core.nth.call(null,vec__30274_30345,(1),null);
var c_30348 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30347));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30347))){
cljs.compiler.emitln.call(null,mname_30281,".cljs$core$IFn$_invoke$arity$variadic = ",n_30346,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30281,".cljs$core$IFn$_invoke$arity$",c_30348," = ",n_30346,";");
}

var G__30349 = seq__30270_30341;
var G__30350 = chunk__30271_30342;
var G__30351 = count__30272_30343;
var G__30352 = (i__30273_30344 + (1));
seq__30270_30341 = G__30349;
chunk__30271_30342 = G__30350;
count__30272_30343 = G__30351;
i__30273_30344 = G__30352;
continue;
} else {
var temp__4657__auto___30353 = cljs.core.seq.call(null,seq__30270_30341);
if(temp__4657__auto___30353){
var seq__30270_30354__$1 = temp__4657__auto___30353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30270_30354__$1)){
var c__21266__auto___30355 = cljs.core.chunk_first.call(null,seq__30270_30354__$1);
var G__30356 = cljs.core.chunk_rest.call(null,seq__30270_30354__$1);
var G__30357 = c__21266__auto___30355;
var G__30358 = cljs.core.count.call(null,c__21266__auto___30355);
var G__30359 = (0);
seq__30270_30341 = G__30356;
chunk__30271_30342 = G__30357;
count__30272_30343 = G__30358;
i__30273_30344 = G__30359;
continue;
} else {
var vec__30277_30360 = cljs.core.first.call(null,seq__30270_30354__$1);
var n_30361 = cljs.core.nth.call(null,vec__30277_30360,(0),null);
var meth_30362 = cljs.core.nth.call(null,vec__30277_30360,(1),null);
var c_30363 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30362));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30362))){
cljs.compiler.emitln.call(null,mname_30281,".cljs$core$IFn$_invoke$arity$variadic = ",n_30361,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30281,".cljs$core$IFn$_invoke$arity$",c_30363," = ",n_30361,";");
}

var G__30364 = cljs.core.next.call(null,seq__30270_30354__$1);
var G__30365 = null;
var G__30366 = (0);
var G__30367 = (0);
seq__30270_30341 = G__30364;
chunk__30271_30342 = G__30365;
count__30272_30343 = G__30366;
i__30273_30344 = G__30367;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30281,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30368){
var map__30369 = p__30368;
var map__30369__$1 = ((((!((map__30369 == null)))?((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var statements = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__20443__auto__ = statements;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__20443__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30371_30375 = cljs.core.seq.call(null,statements);
var chunk__30372_30376 = null;
var count__30373_30377 = (0);
var i__30374_30378 = (0);
while(true){
if((i__30374_30378 < count__30373_30377)){
var s_30379 = cljs.core._nth.call(null,chunk__30372_30376,i__30374_30378);
cljs.compiler.emitln.call(null,s_30379);

var G__30380 = seq__30371_30375;
var G__30381 = chunk__30372_30376;
var G__30382 = count__30373_30377;
var G__30383 = (i__30374_30378 + (1));
seq__30371_30375 = G__30380;
chunk__30372_30376 = G__30381;
count__30373_30377 = G__30382;
i__30374_30378 = G__30383;
continue;
} else {
var temp__4657__auto___30384 = cljs.core.seq.call(null,seq__30371_30375);
if(temp__4657__auto___30384){
var seq__30371_30385__$1 = temp__4657__auto___30384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30371_30385__$1)){
var c__21266__auto___30386 = cljs.core.chunk_first.call(null,seq__30371_30385__$1);
var G__30387 = cljs.core.chunk_rest.call(null,seq__30371_30385__$1);
var G__30388 = c__21266__auto___30386;
var G__30389 = cljs.core.count.call(null,c__21266__auto___30386);
var G__30390 = (0);
seq__30371_30375 = G__30387;
chunk__30372_30376 = G__30388;
count__30373_30377 = G__30389;
i__30374_30378 = G__30390;
continue;
} else {
var s_30391 = cljs.core.first.call(null,seq__30371_30385__$1);
cljs.compiler.emitln.call(null,s_30391);

var G__30392 = cljs.core.next.call(null,seq__30371_30385__$1);
var G__30393 = null;
var G__30394 = (0);
var G__30395 = (0);
seq__30371_30375 = G__30392;
chunk__30372_30376 = G__30393;
count__30373_30377 = G__30394;
i__30374_30378 = G__30395;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__20443__auto__ = statements;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__20443__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30396){
var map__30397 = p__30396;
var map__30397__$1 = ((((!((map__30397 == null)))?((((map__30397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);
var env = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30399,is_loop){
var map__30411 = p__30399;
var map__30411__$1 = ((((!((map__30411 == null)))?((((map__30411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30411):map__30411);
var bindings = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_30413_30422 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_30413_30422,context,map__30411,map__30411__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_30413_30422,context,map__30411,map__30411__$1,bindings,expr,env))
,bindings):null));

try{var seq__30414_30423 = cljs.core.seq.call(null,bindings);
var chunk__30415_30424 = null;
var count__30416_30425 = (0);
var i__30417_30426 = (0);
while(true){
if((i__30417_30426 < count__30416_30425)){
var map__30418_30427 = cljs.core._nth.call(null,chunk__30415_30424,i__30417_30426);
var map__30418_30428__$1 = ((((!((map__30418_30427 == null)))?((((map__30418_30427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30418_30427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418_30427):map__30418_30427);
var binding_30429 = map__30418_30428__$1;
var init_30430 = cljs.core.get.call(null,map__30418_30428__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30429);

cljs.compiler.emitln.call(null," = ",init_30430,";");

var G__30431 = seq__30414_30423;
var G__30432 = chunk__30415_30424;
var G__30433 = count__30416_30425;
var G__30434 = (i__30417_30426 + (1));
seq__30414_30423 = G__30431;
chunk__30415_30424 = G__30432;
count__30416_30425 = G__30433;
i__30417_30426 = G__30434;
continue;
} else {
var temp__4657__auto___30435 = cljs.core.seq.call(null,seq__30414_30423);
if(temp__4657__auto___30435){
var seq__30414_30436__$1 = temp__4657__auto___30435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30414_30436__$1)){
var c__21266__auto___30437 = cljs.core.chunk_first.call(null,seq__30414_30436__$1);
var G__30438 = cljs.core.chunk_rest.call(null,seq__30414_30436__$1);
var G__30439 = c__21266__auto___30437;
var G__30440 = cljs.core.count.call(null,c__21266__auto___30437);
var G__30441 = (0);
seq__30414_30423 = G__30438;
chunk__30415_30424 = G__30439;
count__30416_30425 = G__30440;
i__30417_30426 = G__30441;
continue;
} else {
var map__30420_30442 = cljs.core.first.call(null,seq__30414_30436__$1);
var map__30420_30443__$1 = ((((!((map__30420_30442 == null)))?((((map__30420_30442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30420_30442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30420_30442):map__30420_30442);
var binding_30444 = map__30420_30443__$1;
var init_30445 = cljs.core.get.call(null,map__30420_30443__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30444);

cljs.compiler.emitln.call(null," = ",init_30445,";");

var G__30446 = cljs.core.next.call(null,seq__30414_30436__$1);
var G__30447 = null;
var G__30448 = (0);
var G__30449 = (0);
seq__30414_30423 = G__30446;
chunk__30415_30424 = G__30447;
count__30416_30425 = G__30448;
i__30417_30426 = G__30449;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_30413_30422;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30450){
var map__30451 = p__30450;
var map__30451__$1 = ((((!((map__30451 == null)))?((((map__30451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);
var frame = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__21370__auto___30453 = cljs.core.count.call(null,exprs);
var i_30454 = (0);
while(true){
if((i_30454 < n__21370__auto___30453)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30454)," = ",exprs.call(null,i_30454),";");

var G__30455 = (i_30454 + (1));
i_30454 = G__30455;
continue;
} else {
}
break;
}

var n__21370__auto___30456 = cljs.core.count.call(null,exprs);
var i_30457 = (0);
while(true){
if((i_30457 < n__21370__auto___30456)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30457))," = ",temps.call(null,i_30457),";");

var G__30458 = (i_30457 + (1));
i_30457 = G__30458;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30459){
var map__30460 = p__30459;
var map__30460__$1 = ((((!((map__30460 == null)))?((((map__30460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30460):map__30460);
var bindings = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30462_30470 = cljs.core.seq.call(null,bindings);
var chunk__30463_30471 = null;
var count__30464_30472 = (0);
var i__30465_30473 = (0);
while(true){
if((i__30465_30473 < count__30464_30472)){
var map__30466_30474 = cljs.core._nth.call(null,chunk__30463_30471,i__30465_30473);
var map__30466_30475__$1 = ((((!((map__30466_30474 == null)))?((((map__30466_30474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30466_30474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466_30474):map__30466_30474);
var binding_30476 = map__30466_30475__$1;
var init_30477 = cljs.core.get.call(null,map__30466_30475__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30476)," = ",init_30477,";");

var G__30478 = seq__30462_30470;
var G__30479 = chunk__30463_30471;
var G__30480 = count__30464_30472;
var G__30481 = (i__30465_30473 + (1));
seq__30462_30470 = G__30478;
chunk__30463_30471 = G__30479;
count__30464_30472 = G__30480;
i__30465_30473 = G__30481;
continue;
} else {
var temp__4657__auto___30482 = cljs.core.seq.call(null,seq__30462_30470);
if(temp__4657__auto___30482){
var seq__30462_30483__$1 = temp__4657__auto___30482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30462_30483__$1)){
var c__21266__auto___30484 = cljs.core.chunk_first.call(null,seq__30462_30483__$1);
var G__30485 = cljs.core.chunk_rest.call(null,seq__30462_30483__$1);
var G__30486 = c__21266__auto___30484;
var G__30487 = cljs.core.count.call(null,c__21266__auto___30484);
var G__30488 = (0);
seq__30462_30470 = G__30485;
chunk__30463_30471 = G__30486;
count__30464_30472 = G__30487;
i__30465_30473 = G__30488;
continue;
} else {
var map__30468_30489 = cljs.core.first.call(null,seq__30462_30483__$1);
var map__30468_30490__$1 = ((((!((map__30468_30489 == null)))?((((map__30468_30489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30468_30489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30468_30489):map__30468_30489);
var binding_30491 = map__30468_30490__$1;
var init_30492 = cljs.core.get.call(null,map__30468_30490__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30491)," = ",init_30492,";");

var G__30493 = cljs.core.next.call(null,seq__30462_30483__$1);
var G__30494 = null;
var G__30495 = (0);
var G__30496 = (0);
seq__30462_30470 = G__30493;
chunk__30463_30471 = G__30494;
count__30464_30472 = G__30495;
i__30465_30473 = G__30496;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30499){
var map__30500 = p__30499;
var map__30500__$1 = ((((!((map__30500 == null)))?((((map__30500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30500):map__30500);
var expr = map__30500__$1;
var f = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__20443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__20443__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__20443__auto__ = protocol;
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = tag;
if(cljs.core.truth_(and__20443__auto____$1)){
var or__20455__auto__ = (function (){var and__20443__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto____$2)){
var and__20443__auto____$3 = protocol;
if(cljs.core.truth_(and__20443__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__20443__auto____$3;
}
} else {
return and__20443__auto____$2;
}
})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var and__20443__auto____$2 = (function (){var or__20455__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__20455__auto____$1)){
return or__20455__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__20443__auto____$2)){
var or__20455__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__20455__auto____$1){
return or__20455__auto____$1;
} else {
var and__20443__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__20443__auto____$3){
var and__20443__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__20443__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__20443__auto____$4;
}
} else {
return and__20443__auto____$3;
}
}
} else {
return and__20443__auto____$2;
}
}
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__20455__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__20455__auto__){
return or__20455__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__30502 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__20443__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__20443__auto__)){
return (arity > mfa);
} else {
return and__20443__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env){
return (function (p1__30497_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30497_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env){
return (function (p1__30498_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30498_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30500,map__30500__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30502,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30502,(1),null);
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30505 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30505,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30506 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30506,args)),(((mfa_30506 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30506,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var or__20455__auto____$1 = js_QMARK_;
if(or__20455__auto____$1){
return or__20455__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__20443__auto__;
}
})())){
var fprop_30507 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_30507," ? ",f__$1,fprop_30507,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30508){
var map__30509 = p__30508;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var ctor = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30511){
var map__30512 = p__30511;
var map__30512__$1 = ((((!((map__30512 == null)))?((((map__30512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);
var target = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__30518_30522 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__30519_30523 = null;
var count__30520_30524 = (0);
var i__30521_30525 = (0);
while(true){
if((i__30521_30525 < count__30520_30524)){
var lib_30526 = cljs.core._nth.call(null,chunk__30519_30523,i__30521_30525);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30526),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30526),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30526),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30526),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30526),"');");

}
}

var G__30527 = seq__30518_30522;
var G__30528 = chunk__30519_30523;
var G__30529 = count__30520_30524;
var G__30530 = (i__30521_30525 + (1));
seq__30518_30522 = G__30527;
chunk__30519_30523 = G__30528;
count__30520_30524 = G__30529;
i__30521_30525 = G__30530;
continue;
} else {
var temp__4657__auto___30531 = cljs.core.seq.call(null,seq__30518_30522);
if(temp__4657__auto___30531){
var seq__30518_30532__$1 = temp__4657__auto___30531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30518_30532__$1)){
var c__21266__auto___30533 = cljs.core.chunk_first.call(null,seq__30518_30532__$1);
var G__30534 = cljs.core.chunk_rest.call(null,seq__30518_30532__$1);
var G__30535 = c__21266__auto___30533;
var G__30536 = cljs.core.count.call(null,c__21266__auto___30533);
var G__30537 = (0);
seq__30518_30522 = G__30534;
chunk__30519_30523 = G__30535;
count__30520_30524 = G__30536;
i__30521_30525 = G__30537;
continue;
} else {
var lib_30538 = cljs.core.first.call(null,seq__30518_30532__$1);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30538),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30538),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30538),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30538),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30538),"');");

}
}

var G__30539 = cljs.core.next.call(null,seq__30518_30532__$1);
var G__30540 = null;
var G__30541 = (0);
var G__30542 = (0);
seq__30518_30522 = G__30539;
chunk__30519_30523 = G__30540;
count__30520_30524 = G__30541;
i__30521_30525 = G__30542;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30543){
var map__30544 = p__30543;
var map__30544__$1 = ((((!((map__30544 == null)))?((((map__30544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30544):map__30544);
var name = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__30546){
var map__30547 = p__30546;
var map__30547__$1 = ((((!((map__30547 == null)))?((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var t = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30549_30567 = cljs.core.seq.call(null,protocols);
var chunk__30550_30568 = null;
var count__30551_30569 = (0);
var i__30552_30570 = (0);
while(true){
if((i__30552_30570 < count__30551_30569)){
var protocol_30571 = cljs.core._nth.call(null,chunk__30550_30568,i__30552_30570);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30571)].join('')),"}");

var G__30572 = seq__30549_30567;
var G__30573 = chunk__30550_30568;
var G__30574 = count__30551_30569;
var G__30575 = (i__30552_30570 + (1));
seq__30549_30567 = G__30572;
chunk__30550_30568 = G__30573;
count__30551_30569 = G__30574;
i__30552_30570 = G__30575;
continue;
} else {
var temp__4657__auto___30576 = cljs.core.seq.call(null,seq__30549_30567);
if(temp__4657__auto___30576){
var seq__30549_30577__$1 = temp__4657__auto___30576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30549_30577__$1)){
var c__21266__auto___30578 = cljs.core.chunk_first.call(null,seq__30549_30577__$1);
var G__30579 = cljs.core.chunk_rest.call(null,seq__30549_30577__$1);
var G__30580 = c__21266__auto___30578;
var G__30581 = cljs.core.count.call(null,c__21266__auto___30578);
var G__30582 = (0);
seq__30549_30567 = G__30579;
chunk__30550_30568 = G__30580;
count__30551_30569 = G__30581;
i__30552_30570 = G__30582;
continue;
} else {
var protocol_30583 = cljs.core.first.call(null,seq__30549_30577__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30583)].join('')),"}");

var G__30584 = cljs.core.next.call(null,seq__30549_30577__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__30549_30567 = G__30584;
chunk__30550_30568 = G__30585;
count__30551_30569 = G__30586;
i__30552_30570 = G__30587;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30553_30588 = cljs.core.seq.call(null,fields__$1);
var chunk__30554_30589 = null;
var count__30555_30590 = (0);
var i__30556_30591 = (0);
while(true){
if((i__30556_30591 < count__30555_30590)){
var fld_30592 = cljs.core._nth.call(null,chunk__30554_30589,i__30556_30591);
cljs.compiler.emitln.call(null,"this.",fld_30592," = ",fld_30592,";");

var G__30593 = seq__30553_30588;
var G__30594 = chunk__30554_30589;
var G__30595 = count__30555_30590;
var G__30596 = (i__30556_30591 + (1));
seq__30553_30588 = G__30593;
chunk__30554_30589 = G__30594;
count__30555_30590 = G__30595;
i__30556_30591 = G__30596;
continue;
} else {
var temp__4657__auto___30597 = cljs.core.seq.call(null,seq__30553_30588);
if(temp__4657__auto___30597){
var seq__30553_30598__$1 = temp__4657__auto___30597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30553_30598__$1)){
var c__21266__auto___30599 = cljs.core.chunk_first.call(null,seq__30553_30598__$1);
var G__30600 = cljs.core.chunk_rest.call(null,seq__30553_30598__$1);
var G__30601 = c__21266__auto___30599;
var G__30602 = cljs.core.count.call(null,c__21266__auto___30599);
var G__30603 = (0);
seq__30553_30588 = G__30600;
chunk__30554_30589 = G__30601;
count__30555_30590 = G__30602;
i__30556_30591 = G__30603;
continue;
} else {
var fld_30604 = cljs.core.first.call(null,seq__30553_30598__$1);
cljs.compiler.emitln.call(null,"this.",fld_30604," = ",fld_30604,";");

var G__30605 = cljs.core.next.call(null,seq__30553_30598__$1);
var G__30606 = null;
var G__30607 = (0);
var G__30608 = (0);
seq__30553_30588 = G__30605;
chunk__30554_30589 = G__30606;
count__30555_30590 = G__30607;
i__30556_30591 = G__30608;
continue;
}
} else {
}
}
break;
}

var seq__30557_30609 = cljs.core.seq.call(null,pmasks);
var chunk__30558_30610 = null;
var count__30559_30611 = (0);
var i__30560_30612 = (0);
while(true){
if((i__30560_30612 < count__30559_30611)){
var vec__30561_30613 = cljs.core._nth.call(null,chunk__30558_30610,i__30560_30612);
var pno_30614 = cljs.core.nth.call(null,vec__30561_30613,(0),null);
var pmask_30615 = cljs.core.nth.call(null,vec__30561_30613,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30614,"$ = ",pmask_30615,";");

var G__30616 = seq__30557_30609;
var G__30617 = chunk__30558_30610;
var G__30618 = count__30559_30611;
var G__30619 = (i__30560_30612 + (1));
seq__30557_30609 = G__30616;
chunk__30558_30610 = G__30617;
count__30559_30611 = G__30618;
i__30560_30612 = G__30619;
continue;
} else {
var temp__4657__auto___30620 = cljs.core.seq.call(null,seq__30557_30609);
if(temp__4657__auto___30620){
var seq__30557_30621__$1 = temp__4657__auto___30620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30557_30621__$1)){
var c__21266__auto___30622 = cljs.core.chunk_first.call(null,seq__30557_30621__$1);
var G__30623 = cljs.core.chunk_rest.call(null,seq__30557_30621__$1);
var G__30624 = c__21266__auto___30622;
var G__30625 = cljs.core.count.call(null,c__21266__auto___30622);
var G__30626 = (0);
seq__30557_30609 = G__30623;
chunk__30558_30610 = G__30624;
count__30559_30611 = G__30625;
i__30560_30612 = G__30626;
continue;
} else {
var vec__30564_30627 = cljs.core.first.call(null,seq__30557_30621__$1);
var pno_30628 = cljs.core.nth.call(null,vec__30564_30627,(0),null);
var pmask_30629 = cljs.core.nth.call(null,vec__30564_30627,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30628,"$ = ",pmask_30629,";");

var G__30630 = cljs.core.next.call(null,seq__30557_30621__$1);
var G__30631 = null;
var G__30632 = (0);
var G__30633 = (0);
seq__30557_30609 = G__30630;
chunk__30558_30610 = G__30631;
count__30559_30611 = G__30632;
i__30560_30612 = G__30633;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__30634){
var map__30635 = p__30634;
var map__30635__$1 = ((((!((map__30635 == null)))?((((map__30635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var t = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30637_30655 = cljs.core.seq.call(null,protocols);
var chunk__30638_30656 = null;
var count__30639_30657 = (0);
var i__30640_30658 = (0);
while(true){
if((i__30640_30658 < count__30639_30657)){
var protocol_30659 = cljs.core._nth.call(null,chunk__30638_30656,i__30640_30658);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30659)].join('')),"}");

var G__30660 = seq__30637_30655;
var G__30661 = chunk__30638_30656;
var G__30662 = count__30639_30657;
var G__30663 = (i__30640_30658 + (1));
seq__30637_30655 = G__30660;
chunk__30638_30656 = G__30661;
count__30639_30657 = G__30662;
i__30640_30658 = G__30663;
continue;
} else {
var temp__4657__auto___30664 = cljs.core.seq.call(null,seq__30637_30655);
if(temp__4657__auto___30664){
var seq__30637_30665__$1 = temp__4657__auto___30664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30637_30665__$1)){
var c__21266__auto___30666 = cljs.core.chunk_first.call(null,seq__30637_30665__$1);
var G__30667 = cljs.core.chunk_rest.call(null,seq__30637_30665__$1);
var G__30668 = c__21266__auto___30666;
var G__30669 = cljs.core.count.call(null,c__21266__auto___30666);
var G__30670 = (0);
seq__30637_30655 = G__30667;
chunk__30638_30656 = G__30668;
count__30639_30657 = G__30669;
i__30640_30658 = G__30670;
continue;
} else {
var protocol_30671 = cljs.core.first.call(null,seq__30637_30665__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30671)].join('')),"}");

var G__30672 = cljs.core.next.call(null,seq__30637_30665__$1);
var G__30673 = null;
var G__30674 = (0);
var G__30675 = (0);
seq__30637_30655 = G__30672;
chunk__30638_30656 = G__30673;
count__30639_30657 = G__30674;
i__30640_30658 = G__30675;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30641_30676 = cljs.core.seq.call(null,fields__$1);
var chunk__30642_30677 = null;
var count__30643_30678 = (0);
var i__30644_30679 = (0);
while(true){
if((i__30644_30679 < count__30643_30678)){
var fld_30680 = cljs.core._nth.call(null,chunk__30642_30677,i__30644_30679);
cljs.compiler.emitln.call(null,"this.",fld_30680," = ",fld_30680,";");

var G__30681 = seq__30641_30676;
var G__30682 = chunk__30642_30677;
var G__30683 = count__30643_30678;
var G__30684 = (i__30644_30679 + (1));
seq__30641_30676 = G__30681;
chunk__30642_30677 = G__30682;
count__30643_30678 = G__30683;
i__30644_30679 = G__30684;
continue;
} else {
var temp__4657__auto___30685 = cljs.core.seq.call(null,seq__30641_30676);
if(temp__4657__auto___30685){
var seq__30641_30686__$1 = temp__4657__auto___30685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30641_30686__$1)){
var c__21266__auto___30687 = cljs.core.chunk_first.call(null,seq__30641_30686__$1);
var G__30688 = cljs.core.chunk_rest.call(null,seq__30641_30686__$1);
var G__30689 = c__21266__auto___30687;
var G__30690 = cljs.core.count.call(null,c__21266__auto___30687);
var G__30691 = (0);
seq__30641_30676 = G__30688;
chunk__30642_30677 = G__30689;
count__30643_30678 = G__30690;
i__30644_30679 = G__30691;
continue;
} else {
var fld_30692 = cljs.core.first.call(null,seq__30641_30686__$1);
cljs.compiler.emitln.call(null,"this.",fld_30692," = ",fld_30692,";");

var G__30693 = cljs.core.next.call(null,seq__30641_30686__$1);
var G__30694 = null;
var G__30695 = (0);
var G__30696 = (0);
seq__30641_30676 = G__30693;
chunk__30642_30677 = G__30694;
count__30643_30678 = G__30695;
i__30644_30679 = G__30696;
continue;
}
} else {
}
}
break;
}

var seq__30645_30697 = cljs.core.seq.call(null,pmasks);
var chunk__30646_30698 = null;
var count__30647_30699 = (0);
var i__30648_30700 = (0);
while(true){
if((i__30648_30700 < count__30647_30699)){
var vec__30649_30701 = cljs.core._nth.call(null,chunk__30646_30698,i__30648_30700);
var pno_30702 = cljs.core.nth.call(null,vec__30649_30701,(0),null);
var pmask_30703 = cljs.core.nth.call(null,vec__30649_30701,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30702,"$ = ",pmask_30703,";");

var G__30704 = seq__30645_30697;
var G__30705 = chunk__30646_30698;
var G__30706 = count__30647_30699;
var G__30707 = (i__30648_30700 + (1));
seq__30645_30697 = G__30704;
chunk__30646_30698 = G__30705;
count__30647_30699 = G__30706;
i__30648_30700 = G__30707;
continue;
} else {
var temp__4657__auto___30708 = cljs.core.seq.call(null,seq__30645_30697);
if(temp__4657__auto___30708){
var seq__30645_30709__$1 = temp__4657__auto___30708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30645_30709__$1)){
var c__21266__auto___30710 = cljs.core.chunk_first.call(null,seq__30645_30709__$1);
var G__30711 = cljs.core.chunk_rest.call(null,seq__30645_30709__$1);
var G__30712 = c__21266__auto___30710;
var G__30713 = cljs.core.count.call(null,c__21266__auto___30710);
var G__30714 = (0);
seq__30645_30697 = G__30711;
chunk__30646_30698 = G__30712;
count__30647_30699 = G__30713;
i__30648_30700 = G__30714;
continue;
} else {
var vec__30652_30715 = cljs.core.first.call(null,seq__30645_30709__$1);
var pno_30716 = cljs.core.nth.call(null,vec__30652_30715,(0),null);
var pmask_30717 = cljs.core.nth.call(null,vec__30652_30715,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30716,"$ = ",pmask_30717,";");

var G__30718 = cljs.core.next.call(null,seq__30645_30709__$1);
var G__30719 = null;
var G__30720 = (0);
var G__30721 = (0);
seq__30645_30697 = G__30718;
chunk__30646_30698 = G__30719;
count__30647_30699 = G__30720;
i__30648_30700 = G__30721;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__30722){
var map__30723 = p__30722;
var map__30723__$1 = ((((!((map__30723 == null)))?((((map__30723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30723):map__30723);
var target = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30725){
var map__30726 = p__30725;
var map__30726__$1 = ((((!((map__30726 == null)))?((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var op = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__20443__auto__ = code;
if(cljs.core.truth_(and__20443__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__20443__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29553__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29553__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__30740 = cljs.core.seq.call(null,table);
var chunk__30741 = null;
var count__30742 = (0);
var i__30743 = (0);
while(true){
if((i__30743 < count__30742)){
var vec__30744 = cljs.core._nth.call(null,chunk__30741,i__30743);
var sym = cljs.core.nth.call(null,vec__30744,(0),null);
var value = cljs.core.nth.call(null,vec__30744,(1),null);
var ns_30750 = cljs.core.namespace.call(null,sym);
var name_30751 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__30752 = seq__30740;
var G__30753 = chunk__30741;
var G__30754 = count__30742;
var G__30755 = (i__30743 + (1));
seq__30740 = G__30752;
chunk__30741 = G__30753;
count__30742 = G__30754;
i__30743 = G__30755;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30740);
if(temp__4657__auto__){
var seq__30740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30740__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__30740__$1);
var G__30756 = cljs.core.chunk_rest.call(null,seq__30740__$1);
var G__30757 = c__21266__auto__;
var G__30758 = cljs.core.count.call(null,c__21266__auto__);
var G__30759 = (0);
seq__30740 = G__30756;
chunk__30741 = G__30757;
count__30742 = G__30758;
i__30743 = G__30759;
continue;
} else {
var vec__30747 = cljs.core.first.call(null,seq__30740__$1);
var sym = cljs.core.nth.call(null,vec__30747,(0),null);
var value = cljs.core.nth.call(null,vec__30747,(1),null);
var ns_30760 = cljs.core.namespace.call(null,sym);
var name_30761 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__30762 = cljs.core.next.call(null,seq__30740__$1);
var G__30763 = null;
var G__30764 = (0);
var G__30765 = (0);
seq__30740 = G__30762;
chunk__30741 = G__30763;
count__30742 = G__30764;
i__30743 = G__30765;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1522181424817