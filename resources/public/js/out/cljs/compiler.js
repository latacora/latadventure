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
var map__29530 = s;
var map__29530__$1 = ((((!((map__29530 == null)))?((((map__29530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29530):map__29530);
var name = cljs.core.get.call(null,map__29530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29530__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29533 = info;
var map__29534 = G__29533;
var map__29534__$1 = ((((!((map__29534 == null)))?((((map__29534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29534):map__29534);
var shadow = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29533__$1 = G__29533;
while(true){
var d__$2 = d__$1;
var map__29536 = G__29533__$1;
var map__29536__$1 = ((((!((map__29536 == null)))?((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536):map__29536);
var shadow__$1 = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29550 = (d__$2 + (1));
var G__29551 = shadow__$1;
d__$1 = G__29550;
G__29533__$1 = G__29551;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29565){
var map__29572 = p__29565;
var map__29572__$1 = ((((!((map__29572 == null)))?((((map__29572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29572):map__29572);
var name_var = map__29572__$1;
var name = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__29579 = info;
var map__29579__$1 = ((((!((map__29579 == null)))?((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var ns = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args29603 = [];
var len__21530__auto___29614 = arguments.length;
var i__21531__auto___29615 = (0);
while(true){
if((i__21531__auto___29615 < len__21530__auto___29614)){
args29603.push((arguments[i__21531__auto___29615]));

var G__29616 = (i__21531__auto___29615 + (1));
i__21531__auto___29615 = G__29616;
continue;
} else {
}
break;
}

var G__29605 = args29603.length;
switch (G__29605) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29603.length)].join('')));

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
var G__29635 = cp;
switch (G__29635) {
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
var seq__29646_29651 = cljs.core.seq.call(null,s);
var chunk__29647_29652 = null;
var count__29648_29653 = (0);
var i__29649_29654 = (0);
while(true){
if((i__29649_29654 < count__29648_29653)){
var c_29658 = cljs.core._nth.call(null,chunk__29647_29652,i__29649_29654);
sb.append(cljs.compiler.escape_char.call(null,c_29658));

var G__29659 = seq__29646_29651;
var G__29660 = chunk__29647_29652;
var G__29661 = count__29648_29653;
var G__29662 = (i__29649_29654 + (1));
seq__29646_29651 = G__29659;
chunk__29647_29652 = G__29660;
count__29648_29653 = G__29661;
i__29649_29654 = G__29662;
continue;
} else {
var temp__4657__auto___29663 = cljs.core.seq.call(null,seq__29646_29651);
if(temp__4657__auto___29663){
var seq__29646_29664__$1 = temp__4657__auto___29663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29646_29664__$1)){
var c__21266__auto___29665 = cljs.core.chunk_first.call(null,seq__29646_29664__$1);
var G__29666 = cljs.core.chunk_rest.call(null,seq__29646_29664__$1);
var G__29667 = c__21266__auto___29665;
var G__29668 = cljs.core.count.call(null,c__21266__auto___29665);
var G__29669 = (0);
seq__29646_29651 = G__29666;
chunk__29647_29652 = G__29667;
count__29648_29653 = G__29668;
i__29649_29654 = G__29669;
continue;
} else {
var c_29671 = cljs.core.first.call(null,seq__29646_29664__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29671));

var G__29672 = cljs.core.next.call(null,seq__29646_29664__$1);
var G__29673 = null;
var G__29674 = (0);
var G__29675 = (0);
seq__29646_29651 = G__29672;
chunk__29647_29652 = G__29673;
count__29648_29653 = G__29674;
i__29649_29654 = G__29675;
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
var val__25106__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__25106__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29684_29689 = ast;
var map__29684_29690__$1 = ((((!((map__29684_29689 == null)))?((((map__29684_29689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29684_29689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29684_29689):map__29684_29689);
var env_29691 = cljs.core.get.call(null,map__29684_29690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29691))){
var map__29686_29693 = env_29691;
var map__29686_29694__$1 = ((((!((map__29686_29693 == null)))?((((map__29686_29693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29686_29693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686_29693):map__29686_29693);
var line_29695 = cljs.core.get.call(null,map__29686_29694__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29696 = cljs.core.get.call(null,map__29686_29694__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__){
return (function (m){
var minfo = (function (){var G__29688 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__29688,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__29688;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29695 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29696)?(column_29696 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__29686_29693,map__29686_29694__$1,line_29695,column_29696,map__29684_29689,map__29684_29690__$1,env_29691,val__25106__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__25106__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29719 = arguments.length;
var i__21531__auto___29720 = (0);
while(true){
if((i__21531__auto___29720 < len__21530__auto___29719)){
args__21537__auto__.push((arguments[i__21531__auto___29720]));

var G__29721 = (i__21531__auto___29720 + (1));
i__21531__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__29712_29722 = cljs.core.seq.call(null,xs);
var chunk__29713_29723 = null;
var count__29714_29724 = (0);
var i__29715_29725 = (0);
while(true){
if((i__29715_29725 < count__29714_29724)){
var x_29727 = cljs.core._nth.call(null,chunk__29713_29723,i__29715_29725);
if((x_29727 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29727)){
cljs.compiler.emit.call(null,x_29727);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29727)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29727);
} else {
if(goog.isFunction(x_29727)){
x_29727.call(null);
} else {
var s_29730 = cljs.core.print_str.call(null,x_29727);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29712_29722,chunk__29713_29723,count__29714_29724,i__29715_29725,s_29730,x_29727){
return (function (p1__29708_SHARP_){
return (p1__29708_SHARP_ + cljs.core.count.call(null,s_29730));
});})(seq__29712_29722,chunk__29713_29723,count__29714_29724,i__29715_29725,s_29730,x_29727))
);
}

cljs.core.print.call(null,s_29730);

}
}
}
}

var G__29732 = seq__29712_29722;
var G__29733 = chunk__29713_29723;
var G__29734 = count__29714_29724;
var G__29735 = (i__29715_29725 + (1));
seq__29712_29722 = G__29732;
chunk__29713_29723 = G__29733;
count__29714_29724 = G__29734;
i__29715_29725 = G__29735;
continue;
} else {
var temp__4657__auto___29743 = cljs.core.seq.call(null,seq__29712_29722);
if(temp__4657__auto___29743){
var seq__29712_29744__$1 = temp__4657__auto___29743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29712_29744__$1)){
var c__21266__auto___29746 = cljs.core.chunk_first.call(null,seq__29712_29744__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29712_29744__$1);
var G__29760 = c__21266__auto___29746;
var G__29761 = cljs.core.count.call(null,c__21266__auto___29746);
var G__29762 = (0);
seq__29712_29722 = G__29759;
chunk__29713_29723 = G__29760;
count__29714_29724 = G__29761;
i__29715_29725 = G__29762;
continue;
} else {
var x_29763 = cljs.core.first.call(null,seq__29712_29744__$1);
if((x_29763 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29763)){
cljs.compiler.emit.call(null,x_29763);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29763)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29763);
} else {
if(goog.isFunction(x_29763)){
x_29763.call(null);
} else {
var s_29769 = cljs.core.print_str.call(null,x_29763);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29712_29722,chunk__29713_29723,count__29714_29724,i__29715_29725,s_29769,x_29763,seq__29712_29744__$1,temp__4657__auto___29743){
return (function (p1__29708_SHARP_){
return (p1__29708_SHARP_ + cljs.core.count.call(null,s_29769));
});})(seq__29712_29722,chunk__29713_29723,count__29714_29724,i__29715_29725,s_29769,x_29763,seq__29712_29744__$1,temp__4657__auto___29743))
);
}

cljs.core.print.call(null,s_29769);

}
}
}
}

var G__29778 = cljs.core.next.call(null,seq__29712_29744__$1);
var G__29779 = null;
var G__29780 = (0);
var G__29781 = (0);
seq__29712_29722 = G__29778;
chunk__29713_29723 = G__29779;
count__29714_29724 = G__29780;
i__29715_29725 = G__29781;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq29709){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29709));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29817 = arguments.length;
var i__21531__auto___29819 = (0);
while(true){
if((i__21531__auto___29819 < len__21530__auto___29817)){
args__21537__auto__.push((arguments[i__21531__auto___29819]));

var G__29822 = (i__21531__auto___29819 + (1));
i__21531__auto___29819 = G__29822;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29809){
var map__29810 = p__29809;
var map__29810__$1 = ((((!((map__29810 == null)))?((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var m = map__29810__$1;
var gen_line = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29788){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29788));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__21441__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29849_29852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29850_29853 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29849_29852,_STAR_print_fn_STAR_29850_29853,sb__21441__auto__){
return (function (x__21442__auto__){
return sb__21441__auto__.append(x__21442__auto__);
});})(_STAR_print_newline_STAR_29849_29852,_STAR_print_fn_STAR_29850_29853,sb__21441__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29850_29853;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29849_29852;
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
var vec__29859 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__29859,(0),null);
var flags = cljs.core.nth.call(null,vec__29859,(1),null);
var pattern = cljs.core.nth.call(null,vec__29859,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__29875){
var map__29876 = p__29875;
var map__29876__$1 = ((((!((map__29876 == null)))?((((map__29876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29876):map__29876);
var arg = map__29876__$1;
var info = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__29881 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29881);
} else {
return G__29881;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__29886){
var map__29887 = p__29886;
var map__29887__$1 = ((((!((map__29887 == null)))?((((map__29887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29887):map__29887);
var arg = map__29887__$1;
var env = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29889 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29889__$1 = ((((!((map__29889 == null)))?((((map__29889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);
var name = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__29896){
var map__29898 = p__29896;
var map__29898__$1 = ((((!((map__29898 == null)))?((((map__29898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);
var expr = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__29906_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29906_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29910){
var map__29911 = p__29910;
var map__29911__$1 = ((((!((map__29911 == null)))?((((map__29911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29911):map__29911);
var env = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__29922){
var map__29923 = p__29922;
var map__29923__$1 = ((((!((map__29923 == null)))?((((map__29923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29923):map__29923);
var items = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29927){
var map__29928 = p__29927;
var map__29928__$1 = ((((!((map__29928 == null)))?((((map__29928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var items = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_29933 = cljs.core.count.call(null,items);
if((cnt_29933 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_29933,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__29935_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29935_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29938){
var map__29939 = p__29938;
var map__29939__$1 = ((((!((map__29939 == null)))?((((map__29939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29939):map__29939);
var items = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__29945){
var map__29946 = p__29945;
var map__29946__$1 = ((((!((map__29946 == null)))?((((map__29946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29946):map__29946);
var items = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___29966 = cljs.core.seq.call(null,items);
if(temp__4657__auto___29966){
var items_29968__$1 = temp__4657__auto___29966;
var vec__29948_29969 = items_29968__$1;
var seq__29949_29970 = cljs.core.seq.call(null,vec__29948_29969);
var first__29950_29971 = cljs.core.first.call(null,seq__29949_29970);
var seq__29949_29972__$1 = cljs.core.next.call(null,seq__29949_29970);
var vec__29951_29973 = first__29950_29971;
var k_29974 = cljs.core.nth.call(null,vec__29951_29973,(0),null);
var v_29975 = cljs.core.nth.call(null,vec__29951_29973,(1),null);
var r_29976 = seq__29949_29972__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29974),"\": ",v_29975);

var seq__29954_29978 = cljs.core.seq.call(null,r_29976);
var chunk__29955_29979 = null;
var count__29956_29980 = (0);
var i__29957_29981 = (0);
while(true){
if((i__29957_29981 < count__29956_29980)){
var vec__29959_29982 = cljs.core._nth.call(null,chunk__29955_29979,i__29957_29981);
var k_29983__$1 = cljs.core.nth.call(null,vec__29959_29982,(0),null);
var v_29984__$1 = cljs.core.nth.call(null,vec__29959_29982,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29983__$1),"\": ",v_29984__$1);

var G__29985 = seq__29954_29978;
var G__29986 = chunk__29955_29979;
var G__29987 = count__29956_29980;
var G__29988 = (i__29957_29981 + (1));
seq__29954_29978 = G__29985;
chunk__29955_29979 = G__29986;
count__29956_29980 = G__29987;
i__29957_29981 = G__29988;
continue;
} else {
var temp__4657__auto___29990__$1 = cljs.core.seq.call(null,seq__29954_29978);
if(temp__4657__auto___29990__$1){
var seq__29954_29991__$1 = temp__4657__auto___29990__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29954_29991__$1)){
var c__21266__auto___29992 = cljs.core.chunk_first.call(null,seq__29954_29991__$1);
var G__29993 = cljs.core.chunk_rest.call(null,seq__29954_29991__$1);
var G__29994 = c__21266__auto___29992;
var G__29995 = cljs.core.count.call(null,c__21266__auto___29992);
var G__29996 = (0);
seq__29954_29978 = G__29993;
chunk__29955_29979 = G__29994;
count__29956_29980 = G__29995;
i__29957_29981 = G__29996;
continue;
} else {
var vec__29962_29997 = cljs.core.first.call(null,seq__29954_29991__$1);
var k_29998__$1 = cljs.core.nth.call(null,vec__29962_29997,(0),null);
var v_29999__$1 = cljs.core.nth.call(null,vec__29962_29997,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29998__$1),"\": ",v_29999__$1);

var G__30001 = cljs.core.next.call(null,seq__29954_29991__$1);
var G__30002 = null;
var G__30003 = (0);
var G__30004 = (0);
seq__29954_29978 = G__30001;
chunk__29955_29979 = G__30002;
count__29956_29980 = G__30003;
i__29957_29981 = G__30004;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__30006){
var map__30007 = p__30006;
var map__30007__$1 = ((((!((map__30007 == null)))?((((map__30007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);
var form = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__30011){
var map__30015 = p__30011;
var map__30015__$1 = ((((!((map__30015 == null)))?((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var op = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__30021){
var map__30024 = p__30021;
var map__30024__$1 = ((((!((map__30024 == null)))?((((map__30024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30024):map__30024);
var op = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30030){
var map__30031 = p__30030;
var map__30031__$1 = ((((!((map__30031 == null)))?((((map__30031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031):map__30031);
var test = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__30040){
var map__30041 = p__30040;
var map__30041__$1 = ((((!((map__30041 == null)))?((((map__30041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var v = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__30043_30066 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__30044_30067 = null;
var count__30045_30068 = (0);
var i__30046_30069 = (0);
while(true){
if((i__30046_30069 < count__30045_30068)){
var vec__30047_30070 = cljs.core._nth.call(null,chunk__30044_30067,i__30046_30069);
var ts_30071 = cljs.core.nth.call(null,vec__30047_30070,(0),null);
var then_30072 = cljs.core.nth.call(null,vec__30047_30070,(1),null);
var seq__30050_30075 = cljs.core.seq.call(null,ts_30071);
var chunk__30051_30076 = null;
var count__30052_30077 = (0);
var i__30053_30078 = (0);
while(true){
if((i__30053_30078 < count__30052_30077)){
var test_30079 = cljs.core._nth.call(null,chunk__30051_30076,i__30053_30078);
cljs.compiler.emitln.call(null,"case ",test_30079,":");

var G__30081 = seq__30050_30075;
var G__30082 = chunk__30051_30076;
var G__30083 = count__30052_30077;
var G__30084 = (i__30053_30078 + (1));
seq__30050_30075 = G__30081;
chunk__30051_30076 = G__30082;
count__30052_30077 = G__30083;
i__30053_30078 = G__30084;
continue;
} else {
var temp__4657__auto___30085 = cljs.core.seq.call(null,seq__30050_30075);
if(temp__4657__auto___30085){
var seq__30050_30086__$1 = temp__4657__auto___30085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30050_30086__$1)){
var c__21266__auto___30088 = cljs.core.chunk_first.call(null,seq__30050_30086__$1);
var G__30089 = cljs.core.chunk_rest.call(null,seq__30050_30086__$1);
var G__30090 = c__21266__auto___30088;
var G__30091 = cljs.core.count.call(null,c__21266__auto___30088);
var G__30092 = (0);
seq__30050_30075 = G__30089;
chunk__30051_30076 = G__30090;
count__30052_30077 = G__30091;
i__30053_30078 = G__30092;
continue;
} else {
var test_30096 = cljs.core.first.call(null,seq__30050_30086__$1);
cljs.compiler.emitln.call(null,"case ",test_30096,":");

var G__30097 = cljs.core.next.call(null,seq__30050_30086__$1);
var G__30098 = null;
var G__30099 = (0);
var G__30100 = (0);
seq__30050_30075 = G__30097;
chunk__30051_30076 = G__30098;
count__30052_30077 = G__30099;
i__30053_30078 = G__30100;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30072);
} else {
cljs.compiler.emitln.call(null,then_30072);
}

cljs.compiler.emitln.call(null,"break;");

var G__30102 = seq__30043_30066;
var G__30103 = chunk__30044_30067;
var G__30104 = count__30045_30068;
var G__30105 = (i__30046_30069 + (1));
seq__30043_30066 = G__30102;
chunk__30044_30067 = G__30103;
count__30045_30068 = G__30104;
i__30046_30069 = G__30105;
continue;
} else {
var temp__4657__auto___30106 = cljs.core.seq.call(null,seq__30043_30066);
if(temp__4657__auto___30106){
var seq__30043_30107__$1 = temp__4657__auto___30106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30043_30107__$1)){
var c__21266__auto___30108 = cljs.core.chunk_first.call(null,seq__30043_30107__$1);
var G__30111 = cljs.core.chunk_rest.call(null,seq__30043_30107__$1);
var G__30112 = c__21266__auto___30108;
var G__30113 = cljs.core.count.call(null,c__21266__auto___30108);
var G__30114 = (0);
seq__30043_30066 = G__30111;
chunk__30044_30067 = G__30112;
count__30045_30068 = G__30113;
i__30046_30069 = G__30114;
continue;
} else {
var vec__30054_30116 = cljs.core.first.call(null,seq__30043_30107__$1);
var ts_30117 = cljs.core.nth.call(null,vec__30054_30116,(0),null);
var then_30118 = cljs.core.nth.call(null,vec__30054_30116,(1),null);
var seq__30057_30119 = cljs.core.seq.call(null,ts_30117);
var chunk__30058_30120 = null;
var count__30059_30121 = (0);
var i__30060_30122 = (0);
while(true){
if((i__30060_30122 < count__30059_30121)){
var test_30123 = cljs.core._nth.call(null,chunk__30058_30120,i__30060_30122);
cljs.compiler.emitln.call(null,"case ",test_30123,":");

var G__30125 = seq__30057_30119;
var G__30126 = chunk__30058_30120;
var G__30127 = count__30059_30121;
var G__30128 = (i__30060_30122 + (1));
seq__30057_30119 = G__30125;
chunk__30058_30120 = G__30126;
count__30059_30121 = G__30127;
i__30060_30122 = G__30128;
continue;
} else {
var temp__4657__auto___30129__$1 = cljs.core.seq.call(null,seq__30057_30119);
if(temp__4657__auto___30129__$1){
var seq__30057_30130__$1 = temp__4657__auto___30129__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30057_30130__$1)){
var c__21266__auto___30133 = cljs.core.chunk_first.call(null,seq__30057_30130__$1);
var G__30134 = cljs.core.chunk_rest.call(null,seq__30057_30130__$1);
var G__30135 = c__21266__auto___30133;
var G__30136 = cljs.core.count.call(null,c__21266__auto___30133);
var G__30137 = (0);
seq__30057_30119 = G__30134;
chunk__30058_30120 = G__30135;
count__30059_30121 = G__30136;
i__30060_30122 = G__30137;
continue;
} else {
var test_30139 = cljs.core.first.call(null,seq__30057_30130__$1);
cljs.compiler.emitln.call(null,"case ",test_30139,":");

var G__30140 = cljs.core.next.call(null,seq__30057_30130__$1);
var G__30141 = null;
var G__30142 = (0);
var G__30143 = (0);
seq__30057_30119 = G__30140;
chunk__30058_30120 = G__30141;
count__30059_30121 = G__30142;
i__30060_30122 = G__30143;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30118);
} else {
cljs.compiler.emitln.call(null,then_30118);
}

cljs.compiler.emitln.call(null,"break;");

var G__30145 = cljs.core.next.call(null,seq__30043_30107__$1);
var G__30146 = null;
var G__30147 = (0);
var G__30148 = (0);
seq__30043_30066 = G__30145;
chunk__30044_30067 = G__30146;
count__30045_30068 = G__30147;
i__30046_30069 = G__30148;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__30152){
var map__30153 = p__30152;
var map__30153__$1 = ((((!((map__30153 == null)))?((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var throw$ = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30169 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__30169,(0),null);
var rstr = cljs.core.nth.call(null,vec__30169,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__30169,fstr,rstr,ret_t,axstr){
return (function (p1__30160_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__30160_SHARP_);
});})(idx,vec__30169,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__30172 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__30172),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__30172;
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
return (function (p1__30181_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__30181_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__30194 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30195 = cljs.core.seq.call(null,vec__30194);
var first__30196 = cljs.core.first.call(null,seq__30195);
var seq__30195__$1 = cljs.core.next.call(null,seq__30195);
var p = first__30196;
var first__30196__$1 = cljs.core.first.call(null,seq__30195__$1);
var seq__30195__$2 = cljs.core.next.call(null,seq__30195__$1);
var ts = first__30196__$1;
var first__30196__$2 = cljs.core.first.call(null,seq__30195__$2);
var seq__30195__$3 = cljs.core.next.call(null,seq__30195__$2);
var n = first__30196__$2;
var xs = seq__30195__$3;
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
var vec__30198 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30199 = cljs.core.seq.call(null,vec__30198);
var first__30200 = cljs.core.first.call(null,seq__30199);
var seq__30199__$1 = cljs.core.next.call(null,seq__30199);
var p = first__30200;
var first__30200__$1 = cljs.core.first.call(null,seq__30199__$1);
var seq__30199__$2 = cljs.core.next.call(null,seq__30199__$1);
var ts = first__30200__$1;
var xs = seq__30199__$2;
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
var args30212 = [];
var len__21530__auto___30254 = arguments.length;
var i__21531__auto___30255 = (0);
while(true){
if((i__21531__auto___30255 < len__21530__auto___30254)){
args30212.push((arguments[i__21531__auto___30255]));

var G__30256 = (i__21531__auto___30255 + (1));
i__21531__auto___30255 = G__30256;
continue;
} else {
}
break;
}

var G__30216 = args30212.length;
switch (G__30216) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30212.length)].join('')));

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
var vec__30242 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__30210_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__30210_SHARP_);
} else {
return p1__30210_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__30243 = cljs.core.seq.call(null,vec__30242);
var first__30244 = cljs.core.first.call(null,seq__30243);
var seq__30243__$1 = cljs.core.next.call(null,seq__30243);
var x = first__30244;
var ys = seq__30243__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__30245 = cljs.core.seq.call(null,ys);
var chunk__30246 = null;
var count__30247 = (0);
var i__30248 = (0);
while(true){
if((i__30248 < count__30247)){
var next_line = cljs.core._nth.call(null,chunk__30246,i__30248);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30266 = seq__30245;
var G__30267 = chunk__30246;
var G__30268 = count__30247;
var G__30269 = (i__30248 + (1));
seq__30245 = G__30266;
chunk__30246 = G__30267;
count__30247 = G__30268;
i__30248 = G__30269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30245);
if(temp__4657__auto__){
var seq__30245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30245__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__30245__$1);
var G__30270 = cljs.core.chunk_rest.call(null,seq__30245__$1);
var G__30271 = c__21266__auto__;
var G__30272 = cljs.core.count.call(null,c__21266__auto__);
var G__30273 = (0);
seq__30245 = G__30270;
chunk__30246 = G__30271;
count__30247 = G__30272;
i__30248 = G__30273;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__30245__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30274 = cljs.core.next.call(null,seq__30245__$1);
var G__30275 = null;
var G__30276 = (0);
var G__30277 = (0);
seq__30245 = G__30274;
chunk__30246 = G__30275;
count__30247 = G__30276;
i__30248 = G__30277;
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

var seq__30249_30279 = cljs.core.seq.call(null,docs__$2);
var chunk__30250_30280 = null;
var count__30251_30281 = (0);
var i__30252_30282 = (0);
while(true){
if((i__30252_30282 < count__30251_30281)){
var e_30283 = cljs.core._nth.call(null,chunk__30250_30280,i__30252_30282);
if(cljs.core.truth_(e_30283)){
print_comment_lines.call(null,e_30283);
} else {
}

var G__30284 = seq__30249_30279;
var G__30285 = chunk__30250_30280;
var G__30286 = count__30251_30281;
var G__30287 = (i__30252_30282 + (1));
seq__30249_30279 = G__30284;
chunk__30250_30280 = G__30285;
count__30251_30281 = G__30286;
i__30252_30282 = G__30287;
continue;
} else {
var temp__4657__auto___30288 = cljs.core.seq.call(null,seq__30249_30279);
if(temp__4657__auto___30288){
var seq__30249_30289__$1 = temp__4657__auto___30288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30249_30289__$1)){
var c__21266__auto___30290 = cljs.core.chunk_first.call(null,seq__30249_30289__$1);
var G__30291 = cljs.core.chunk_rest.call(null,seq__30249_30289__$1);
var G__30292 = c__21266__auto___30290;
var G__30293 = cljs.core.count.call(null,c__21266__auto___30290);
var G__30294 = (0);
seq__30249_30279 = G__30291;
chunk__30250_30280 = G__30292;
count__30251_30281 = G__30293;
i__30252_30282 = G__30294;
continue;
} else {
var e_30295 = cljs.core.first.call(null,seq__30249_30289__$1);
if(cljs.core.truth_(e_30295)){
print_comment_lines.call(null,e_30295);
} else {
}

var G__30296 = cljs.core.next.call(null,seq__30249_30289__$1);
var G__30297 = null;
var G__30298 = (0);
var G__30299 = (0);
seq__30249_30279 = G__30296;
chunk__30250_30280 = G__30297;
count__30251_30281 = G__30298;
i__30252_30282 = G__30299;
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
return (function (p1__30301_SHARP_){
return goog.string.startsWith(p1__30301_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30302){
var map__30303 = p__30302;
var map__30303__$1 = ((((!((map__30303 == null)))?((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);
var name = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30307){
var map__30328 = p__30307;
var map__30328__$1 = ((((!((map__30328 == null)))?((((map__30328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30328):map__30328);
var name = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__30330_30348 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__30331_30349 = null;
var count__30332_30350 = (0);
var i__30333_30351 = (0);
while(true){
if((i__30333_30351 < count__30332_30350)){
var vec__30334_30352 = cljs.core._nth.call(null,chunk__30331_30349,i__30333_30351);
var i_30353 = cljs.core.nth.call(null,vec__30334_30352,(0),null);
var param_30354 = cljs.core.nth.call(null,vec__30334_30352,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30354);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30355 = seq__30330_30348;
var G__30356 = chunk__30331_30349;
var G__30357 = count__30332_30350;
var G__30358 = (i__30333_30351 + (1));
seq__30330_30348 = G__30355;
chunk__30331_30349 = G__30356;
count__30332_30350 = G__30357;
i__30333_30351 = G__30358;
continue;
} else {
var temp__4657__auto___30359 = cljs.core.seq.call(null,seq__30330_30348);
if(temp__4657__auto___30359){
var seq__30330_30360__$1 = temp__4657__auto___30359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30330_30360__$1)){
var c__21266__auto___30361 = cljs.core.chunk_first.call(null,seq__30330_30360__$1);
var G__30362 = cljs.core.chunk_rest.call(null,seq__30330_30360__$1);
var G__30363 = c__21266__auto___30361;
var G__30364 = cljs.core.count.call(null,c__21266__auto___30361);
var G__30365 = (0);
seq__30330_30348 = G__30362;
chunk__30331_30349 = G__30363;
count__30332_30350 = G__30364;
i__30333_30351 = G__30365;
continue;
} else {
var vec__30337_30366 = cljs.core.first.call(null,seq__30330_30360__$1);
var i_30367 = cljs.core.nth.call(null,vec__30337_30366,(0),null);
var param_30368 = cljs.core.nth.call(null,vec__30337_30366,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30368);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30369 = cljs.core.next.call(null,seq__30330_30360__$1);
var G__30370 = null;
var G__30371 = (0);
var G__30372 = (0);
seq__30330_30348 = G__30369;
chunk__30331_30349 = G__30370;
count__30332_30350 = G__30371;
i__30333_30351 = G__30372;
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

var seq__30340_30373 = cljs.core.seq.call(null,params);
var chunk__30341_30374 = null;
var count__30342_30375 = (0);
var i__30343_30376 = (0);
while(true){
if((i__30343_30376 < count__30342_30375)){
var param_30377 = cljs.core._nth.call(null,chunk__30341_30374,i__30343_30376);
cljs.compiler.emit.call(null,param_30377);

if(cljs.core._EQ_.call(null,param_30377,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30378 = seq__30340_30373;
var G__30379 = chunk__30341_30374;
var G__30380 = count__30342_30375;
var G__30381 = (i__30343_30376 + (1));
seq__30340_30373 = G__30378;
chunk__30341_30374 = G__30379;
count__30342_30375 = G__30380;
i__30343_30376 = G__30381;
continue;
} else {
var temp__4657__auto___30382 = cljs.core.seq.call(null,seq__30340_30373);
if(temp__4657__auto___30382){
var seq__30340_30383__$1 = temp__4657__auto___30382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30340_30383__$1)){
var c__21266__auto___30384 = cljs.core.chunk_first.call(null,seq__30340_30383__$1);
var G__30385 = cljs.core.chunk_rest.call(null,seq__30340_30383__$1);
var G__30386 = c__21266__auto___30384;
var G__30387 = cljs.core.count.call(null,c__21266__auto___30384);
var G__30388 = (0);
seq__30340_30373 = G__30385;
chunk__30341_30374 = G__30386;
count__30342_30375 = G__30387;
i__30343_30376 = G__30388;
continue;
} else {
var param_30389 = cljs.core.first.call(null,seq__30340_30383__$1);
cljs.compiler.emit.call(null,param_30389);

if(cljs.core._EQ_.call(null,param_30389,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30390 = cljs.core.next.call(null,seq__30340_30383__$1);
var G__30391 = null;
var G__30392 = (0);
var G__30393 = (0);
seq__30340_30373 = G__30390;
chunk__30341_30374 = G__30391;
count__30342_30375 = G__30392;
i__30343_30376 = G__30393;
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

var seq__30344_30398 = cljs.core.seq.call(null,params);
var chunk__30345_30399 = null;
var count__30346_30400 = (0);
var i__30347_30401 = (0);
while(true){
if((i__30347_30401 < count__30346_30400)){
var param_30404 = cljs.core._nth.call(null,chunk__30345_30399,i__30347_30401);
cljs.compiler.emit.call(null,param_30404);

if(cljs.core._EQ_.call(null,param_30404,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30405 = seq__30344_30398;
var G__30406 = chunk__30345_30399;
var G__30407 = count__30346_30400;
var G__30408 = (i__30347_30401 + (1));
seq__30344_30398 = G__30405;
chunk__30345_30399 = G__30406;
count__30346_30400 = G__30407;
i__30347_30401 = G__30408;
continue;
} else {
var temp__4657__auto___30412 = cljs.core.seq.call(null,seq__30344_30398);
if(temp__4657__auto___30412){
var seq__30344_30414__$1 = temp__4657__auto___30412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30344_30414__$1)){
var c__21266__auto___30415 = cljs.core.chunk_first.call(null,seq__30344_30414__$1);
var G__30417 = cljs.core.chunk_rest.call(null,seq__30344_30414__$1);
var G__30418 = c__21266__auto___30415;
var G__30419 = cljs.core.count.call(null,c__21266__auto___30415);
var G__30420 = (0);
seq__30344_30398 = G__30417;
chunk__30345_30399 = G__30418;
count__30346_30400 = G__30419;
i__30347_30401 = G__30420;
continue;
} else {
var param_30422 = cljs.core.first.call(null,seq__30344_30414__$1);
cljs.compiler.emit.call(null,param_30422);

if(cljs.core._EQ_.call(null,param_30422,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30424 = cljs.core.next.call(null,seq__30344_30414__$1);
var G__30425 = null;
var G__30426 = (0);
var G__30427 = (0);
seq__30344_30398 = G__30424;
chunk__30345_30399 = G__30425;
count__30346_30400 = G__30426;
i__30347_30401 = G__30427;
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
var seq__30438 = cljs.core.seq.call(null,params);
var chunk__30439 = null;
var count__30440 = (0);
var i__30441 = (0);
while(true){
if((i__30441 < count__30440)){
var param = cljs.core._nth.call(null,chunk__30439,i__30441);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30449 = seq__30438;
var G__30450 = chunk__30439;
var G__30451 = count__30440;
var G__30452 = (i__30441 + (1));
seq__30438 = G__30449;
chunk__30439 = G__30450;
count__30440 = G__30451;
i__30441 = G__30452;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30438);
if(temp__4657__auto__){
var seq__30438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30438__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__30438__$1);
var G__30464 = cljs.core.chunk_rest.call(null,seq__30438__$1);
var G__30465 = c__21266__auto__;
var G__30466 = cljs.core.count.call(null,c__21266__auto__);
var G__30467 = (0);
seq__30438 = G__30464;
chunk__30439 = G__30465;
count__30440 = G__30466;
i__30441 = G__30467;
continue;
} else {
var param = cljs.core.first.call(null,seq__30438__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30480 = cljs.core.next.call(null,seq__30438__$1);
var G__30481 = null;
var G__30482 = (0);
var G__30483 = (0);
seq__30438 = G__30480;
chunk__30439 = G__30481;
count__30440 = G__30482;
i__30441 = G__30483;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30489){
var map__30500 = p__30489;
var map__30500__$1 = ((((!((map__30500 == null)))?((((map__30500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30500):map__30500);
var type = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30544){
var map__30574 = p__30544;
var map__30574__$1 = ((((!((map__30574 == null)))?((((map__30574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);
var f = map__30574__$1;
var type = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30618__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30619 = cljs.compiler.munge.call(null,name_30618__$1);
var delegate_name_30620 = [cljs.core.str(mname_30619),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30620," = function (");

var seq__30581_30625 = cljs.core.seq.call(null,params);
var chunk__30582_30626 = null;
var count__30583_30627 = (0);
var i__30584_30628 = (0);
while(true){
if((i__30584_30628 < count__30583_30627)){
var param_30633 = cljs.core._nth.call(null,chunk__30582_30626,i__30584_30628);
cljs.compiler.emit.call(null,param_30633);

if(cljs.core._EQ_.call(null,param_30633,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30639 = seq__30581_30625;
var G__30640 = chunk__30582_30626;
var G__30641 = count__30583_30627;
var G__30642 = (i__30584_30628 + (1));
seq__30581_30625 = G__30639;
chunk__30582_30626 = G__30640;
count__30583_30627 = G__30641;
i__30584_30628 = G__30642;
continue;
} else {
var temp__4657__auto___30644 = cljs.core.seq.call(null,seq__30581_30625);
if(temp__4657__auto___30644){
var seq__30581_30647__$1 = temp__4657__auto___30644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30581_30647__$1)){
var c__21266__auto___30650 = cljs.core.chunk_first.call(null,seq__30581_30647__$1);
var G__30651 = cljs.core.chunk_rest.call(null,seq__30581_30647__$1);
var G__30652 = c__21266__auto___30650;
var G__30653 = cljs.core.count.call(null,c__21266__auto___30650);
var G__30654 = (0);
seq__30581_30625 = G__30651;
chunk__30582_30626 = G__30652;
count__30583_30627 = G__30653;
i__30584_30628 = G__30654;
continue;
} else {
var param_30657 = cljs.core.first.call(null,seq__30581_30647__$1);
cljs.compiler.emit.call(null,param_30657);

if(cljs.core._EQ_.call(null,param_30657,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30659 = cljs.core.next.call(null,seq__30581_30647__$1);
var G__30660 = null;
var G__30661 = (0);
var G__30662 = (0);
seq__30581_30625 = G__30659;
chunk__30582_30626 = G__30660;
count__30583_30627 = G__30661;
i__30584_30628 = G__30662;
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

cljs.compiler.emitln.call(null,"var ",mname_30619," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30679 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30679,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30620,".call(this,");

var seq__30594_30684 = cljs.core.seq.call(null,params);
var chunk__30595_30685 = null;
var count__30596_30686 = (0);
var i__30597_30687 = (0);
while(true){
if((i__30597_30687 < count__30596_30686)){
var param_30690 = cljs.core._nth.call(null,chunk__30595_30685,i__30597_30687);
cljs.compiler.emit.call(null,param_30690);

if(cljs.core._EQ_.call(null,param_30690,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30694 = seq__30594_30684;
var G__30695 = chunk__30595_30685;
var G__30696 = count__30596_30686;
var G__30697 = (i__30597_30687 + (1));
seq__30594_30684 = G__30694;
chunk__30595_30685 = G__30695;
count__30596_30686 = G__30696;
i__30597_30687 = G__30697;
continue;
} else {
var temp__4657__auto___30701 = cljs.core.seq.call(null,seq__30594_30684);
if(temp__4657__auto___30701){
var seq__30594_30705__$1 = temp__4657__auto___30701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30594_30705__$1)){
var c__21266__auto___30706 = cljs.core.chunk_first.call(null,seq__30594_30705__$1);
var G__30709 = cljs.core.chunk_rest.call(null,seq__30594_30705__$1);
var G__30710 = c__21266__auto___30706;
var G__30711 = cljs.core.count.call(null,c__21266__auto___30706);
var G__30712 = (0);
seq__30594_30684 = G__30709;
chunk__30595_30685 = G__30710;
count__30596_30686 = G__30711;
i__30597_30687 = G__30712;
continue;
} else {
var param_30718 = cljs.core.first.call(null,seq__30594_30705__$1);
cljs.compiler.emit.call(null,param_30718);

if(cljs.core._EQ_.call(null,param_30718,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30722 = cljs.core.next.call(null,seq__30594_30705__$1);
var G__30723 = null;
var G__30724 = (0);
var G__30725 = (0);
seq__30594_30684 = G__30722;
chunk__30595_30685 = G__30723;
count__30596_30686 = G__30724;
i__30597_30687 = G__30725;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30619,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30619,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30618__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30619,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30620,";");

cljs.compiler.emitln.call(null,"return ",mname_30619,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30743){
var map__30744 = p__30743;
var map__30744__$1 = ((((!((map__30744 == null)))?((((map__30744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30744):map__30744);
var name = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30736_SHARP_){
var and__20443__auto__ = p1__30736_SHARP_;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30736_SHARP_));
} else {
return and__20443__auto__;
}
});})(map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_30781__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30782 = cljs.compiler.munge.call(null,name_30781__$1);
var maxparams_30783 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30784 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30781__$1,mname_30782,maxparams_30783,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_30782),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30781__$1,mname_30782,maxparams_30783,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_30785 = cljs.core.sort_by.call(null,((function (name_30781__$1,mname_30782,maxparams_30783,mmap_30784,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30738_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30738_SHARP_)));
});})(name_30781__$1,mname_30782,maxparams_30783,mmap_30784,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30784));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30782," = null;");

var seq__30748_30786 = cljs.core.seq.call(null,ms_30785);
var chunk__30749_30787 = null;
var count__30750_30788 = (0);
var i__30751_30789 = (0);
while(true){
if((i__30751_30789 < count__30750_30788)){
var vec__30752_30790 = cljs.core._nth.call(null,chunk__30749_30787,i__30751_30789);
var n_30791 = cljs.core.nth.call(null,vec__30752_30790,(0),null);
var meth_30792 = cljs.core.nth.call(null,vec__30752_30790,(1),null);
cljs.compiler.emits.call(null,"var ",n_30791," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30792))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30792);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30792);
}

cljs.compiler.emitln.call(null,";");

var G__30793 = seq__30748_30786;
var G__30794 = chunk__30749_30787;
var G__30795 = count__30750_30788;
var G__30796 = (i__30751_30789 + (1));
seq__30748_30786 = G__30793;
chunk__30749_30787 = G__30794;
count__30750_30788 = G__30795;
i__30751_30789 = G__30796;
continue;
} else {
var temp__4657__auto___30797 = cljs.core.seq.call(null,seq__30748_30786);
if(temp__4657__auto___30797){
var seq__30748_30798__$1 = temp__4657__auto___30797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30748_30798__$1)){
var c__21266__auto___30799 = cljs.core.chunk_first.call(null,seq__30748_30798__$1);
var G__30800 = cljs.core.chunk_rest.call(null,seq__30748_30798__$1);
var G__30801 = c__21266__auto___30799;
var G__30802 = cljs.core.count.call(null,c__21266__auto___30799);
var G__30803 = (0);
seq__30748_30786 = G__30800;
chunk__30749_30787 = G__30801;
count__30750_30788 = G__30802;
i__30751_30789 = G__30803;
continue;
} else {
var vec__30755_30804 = cljs.core.first.call(null,seq__30748_30798__$1);
var n_30805 = cljs.core.nth.call(null,vec__30755_30804,(0),null);
var meth_30806 = cljs.core.nth.call(null,vec__30755_30804,(1),null);
cljs.compiler.emits.call(null,"var ",n_30805," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30806))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30806);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30806);
}

cljs.compiler.emitln.call(null,";");

var G__30809 = cljs.core.next.call(null,seq__30748_30798__$1);
var G__30810 = null;
var G__30811 = (0);
var G__30812 = (0);
seq__30748_30786 = G__30809;
chunk__30749_30787 = G__30810;
count__30750_30788 = G__30811;
i__30751_30789 = G__30812;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30782," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30783)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30783));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30758_30814 = cljs.core.seq.call(null,ms_30785);
var chunk__30759_30815 = null;
var count__30760_30816 = (0);
var i__30761_30817 = (0);
while(true){
if((i__30761_30817 < count__30760_30816)){
var vec__30762_30819 = cljs.core._nth.call(null,chunk__30759_30815,i__30761_30817);
var n_30820 = cljs.core.nth.call(null,vec__30762_30819,(0),null);
var meth_30821 = cljs.core.nth.call(null,vec__30762_30819,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30821))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30822 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30822," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30823 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30822," = new cljs.core.IndexedSeq(",a_30823,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30820,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30783)),(((cljs.core.count.call(null,maxparams_30783) > (1)))?", ":null),restarg_30822,");");
} else {
var pcnt_30825 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30821));
cljs.compiler.emitln.call(null,"case ",pcnt_30825,":");

cljs.compiler.emitln.call(null,"return ",n_30820,".call(this",(((pcnt_30825 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30825,maxparams_30783));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__30826 = seq__30758_30814;
var G__30827 = chunk__30759_30815;
var G__30828 = count__30760_30816;
var G__30829 = (i__30761_30817 + (1));
seq__30758_30814 = G__30826;
chunk__30759_30815 = G__30827;
count__30760_30816 = G__30828;
i__30761_30817 = G__30829;
continue;
} else {
var temp__4657__auto___30830 = cljs.core.seq.call(null,seq__30758_30814);
if(temp__4657__auto___30830){
var seq__30758_30831__$1 = temp__4657__auto___30830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30758_30831__$1)){
var c__21266__auto___30832 = cljs.core.chunk_first.call(null,seq__30758_30831__$1);
var G__30833 = cljs.core.chunk_rest.call(null,seq__30758_30831__$1);
var G__30834 = c__21266__auto___30832;
var G__30835 = cljs.core.count.call(null,c__21266__auto___30832);
var G__30836 = (0);
seq__30758_30814 = G__30833;
chunk__30759_30815 = G__30834;
count__30760_30816 = G__30835;
i__30761_30817 = G__30836;
continue;
} else {
var vec__30765_30839 = cljs.core.first.call(null,seq__30758_30831__$1);
var n_30840 = cljs.core.nth.call(null,vec__30765_30839,(0),null);
var meth_30841 = cljs.core.nth.call(null,vec__30765_30839,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30841))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30844 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30844," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30845 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30844," = new cljs.core.IndexedSeq(",a_30845,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30840,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30783)),(((cljs.core.count.call(null,maxparams_30783) > (1)))?", ":null),restarg_30844,");");
} else {
var pcnt_30846 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30841));
cljs.compiler.emitln.call(null,"case ",pcnt_30846,":");

cljs.compiler.emitln.call(null,"return ",n_30840,".call(this",(((pcnt_30846 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30846,maxparams_30783));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__30847 = cljs.core.next.call(null,seq__30758_30831__$1);
var G__30848 = null;
var G__30849 = (0);
var G__30850 = (0);
seq__30758_30814 = G__30847;
chunk__30759_30815 = G__30848;
count__30760_30816 = G__30849;
i__30761_30817 = G__30850;
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
cljs.compiler.emitln.call(null,mname_30782,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30782,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30781__$1,mname_30782,maxparams_30783,mmap_30784,ms_30785,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30742_SHARP_){
var vec__30768 = p1__30742_SHARP_;
var n = cljs.core.nth.call(null,vec__30768,(0),null);
var m = cljs.core.nth.call(null,vec__30768,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30781__$1,mname_30782,maxparams_30783,mmap_30784,ms_30785,loop_locals,map__30744,map__30744__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_30785),".cljs$lang$applyTo;");
} else {
}

var seq__30771_30851 = cljs.core.seq.call(null,ms_30785);
var chunk__30772_30852 = null;
var count__30773_30853 = (0);
var i__30774_30854 = (0);
while(true){
if((i__30774_30854 < count__30773_30853)){
var vec__30775_30855 = cljs.core._nth.call(null,chunk__30772_30852,i__30774_30854);
var n_30856 = cljs.core.nth.call(null,vec__30775_30855,(0),null);
var meth_30857 = cljs.core.nth.call(null,vec__30775_30855,(1),null);
var c_30858 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30857));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30857))){
cljs.compiler.emitln.call(null,mname_30782,".cljs$core$IFn$_invoke$arity$variadic = ",n_30856,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30782,".cljs$core$IFn$_invoke$arity$",c_30858," = ",n_30856,";");
}

var G__30859 = seq__30771_30851;
var G__30860 = chunk__30772_30852;
var G__30861 = count__30773_30853;
var G__30862 = (i__30774_30854 + (1));
seq__30771_30851 = G__30859;
chunk__30772_30852 = G__30860;
count__30773_30853 = G__30861;
i__30774_30854 = G__30862;
continue;
} else {
var temp__4657__auto___30863 = cljs.core.seq.call(null,seq__30771_30851);
if(temp__4657__auto___30863){
var seq__30771_30864__$1 = temp__4657__auto___30863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30771_30864__$1)){
var c__21266__auto___30865 = cljs.core.chunk_first.call(null,seq__30771_30864__$1);
var G__30866 = cljs.core.chunk_rest.call(null,seq__30771_30864__$1);
var G__30867 = c__21266__auto___30865;
var G__30868 = cljs.core.count.call(null,c__21266__auto___30865);
var G__30869 = (0);
seq__30771_30851 = G__30866;
chunk__30772_30852 = G__30867;
count__30773_30853 = G__30868;
i__30774_30854 = G__30869;
continue;
} else {
var vec__30778_30870 = cljs.core.first.call(null,seq__30771_30864__$1);
var n_30871 = cljs.core.nth.call(null,vec__30778_30870,(0),null);
var meth_30872 = cljs.core.nth.call(null,vec__30778_30870,(1),null);
var c_30873 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30872));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30872))){
cljs.compiler.emitln.call(null,mname_30782,".cljs$core$IFn$_invoke$arity$variadic = ",n_30871,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30782,".cljs$core$IFn$_invoke$arity$",c_30873," = ",n_30871,";");
}

var G__30874 = cljs.core.next.call(null,seq__30771_30864__$1);
var G__30875 = null;
var G__30876 = (0);
var G__30877 = (0);
seq__30771_30851 = G__30874;
chunk__30772_30852 = G__30875;
count__30773_30853 = G__30876;
i__30774_30854 = G__30877;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30782,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30878){
var map__30879 = p__30878;
var map__30879__$1 = ((((!((map__30879 == null)))?((((map__30879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30879):map__30879);
var statements = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__30881_30885 = cljs.core.seq.call(null,statements);
var chunk__30882_30886 = null;
var count__30883_30887 = (0);
var i__30884_30888 = (0);
while(true){
if((i__30884_30888 < count__30883_30887)){
var s_30889 = cljs.core._nth.call(null,chunk__30882_30886,i__30884_30888);
cljs.compiler.emitln.call(null,s_30889);

var G__30890 = seq__30881_30885;
var G__30891 = chunk__30882_30886;
var G__30892 = count__30883_30887;
var G__30893 = (i__30884_30888 + (1));
seq__30881_30885 = G__30890;
chunk__30882_30886 = G__30891;
count__30883_30887 = G__30892;
i__30884_30888 = G__30893;
continue;
} else {
var temp__4657__auto___30894 = cljs.core.seq.call(null,seq__30881_30885);
if(temp__4657__auto___30894){
var seq__30881_30895__$1 = temp__4657__auto___30894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30881_30895__$1)){
var c__21266__auto___30896 = cljs.core.chunk_first.call(null,seq__30881_30895__$1);
var G__30897 = cljs.core.chunk_rest.call(null,seq__30881_30895__$1);
var G__30898 = c__21266__auto___30896;
var G__30899 = cljs.core.count.call(null,c__21266__auto___30896);
var G__30900 = (0);
seq__30881_30885 = G__30897;
chunk__30882_30886 = G__30898;
count__30883_30887 = G__30899;
i__30884_30888 = G__30900;
continue;
} else {
var s_30901 = cljs.core.first.call(null,seq__30881_30895__$1);
cljs.compiler.emitln.call(null,s_30901);

var G__30902 = cljs.core.next.call(null,seq__30881_30895__$1);
var G__30903 = null;
var G__30904 = (0);
var G__30905 = (0);
seq__30881_30885 = G__30902;
chunk__30882_30886 = G__30903;
count__30883_30887 = G__30904;
i__30884_30888 = G__30905;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30906){
var map__30907 = p__30906;
var map__30907__$1 = ((((!((map__30907 == null)))?((((map__30907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30907):map__30907);
var env = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30929,is_loop){
var map__30964 = p__30929;
var map__30964__$1 = ((((!((map__30964 == null)))?((((map__30964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30964):map__30964);
var bindings = cljs.core.get.call(null,map__30964__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__30964__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30964__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_30971_31009 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_30971_31009,context,map__30964,map__30964__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_30971_31009,context,map__30964,map__30964__$1,bindings,expr,env))
,bindings):null));

try{var seq__30972_31015 = cljs.core.seq.call(null,bindings);
var chunk__30973_31016 = null;
var count__30974_31017 = (0);
var i__30975_31018 = (0);
while(true){
if((i__30975_31018 < count__30974_31017)){
var map__30980_31019 = cljs.core._nth.call(null,chunk__30973_31016,i__30975_31018);
var map__30980_31020__$1 = ((((!((map__30980_31019 == null)))?((((map__30980_31019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30980_31019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30980_31019):map__30980_31019);
var binding_31021 = map__30980_31020__$1;
var init_31022 = cljs.core.get.call(null,map__30980_31020__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31021);

cljs.compiler.emitln.call(null," = ",init_31022,";");

var G__31036 = seq__30972_31015;
var G__31037 = chunk__30973_31016;
var G__31038 = count__30974_31017;
var G__31039 = (i__30975_31018 + (1));
seq__30972_31015 = G__31036;
chunk__30973_31016 = G__31037;
count__30974_31017 = G__31038;
i__30975_31018 = G__31039;
continue;
} else {
var temp__4657__auto___31040 = cljs.core.seq.call(null,seq__30972_31015);
if(temp__4657__auto___31040){
var seq__30972_31041__$1 = temp__4657__auto___31040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30972_31041__$1)){
var c__21266__auto___31042 = cljs.core.chunk_first.call(null,seq__30972_31041__$1);
var G__31043 = cljs.core.chunk_rest.call(null,seq__30972_31041__$1);
var G__31044 = c__21266__auto___31042;
var G__31045 = cljs.core.count.call(null,c__21266__auto___31042);
var G__31046 = (0);
seq__30972_31015 = G__31043;
chunk__30973_31016 = G__31044;
count__30974_31017 = G__31045;
i__30975_31018 = G__31046;
continue;
} else {
var map__30988_31047 = cljs.core.first.call(null,seq__30972_31041__$1);
var map__30988_31048__$1 = ((((!((map__30988_31047 == null)))?((((map__30988_31047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30988_31047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988_31047):map__30988_31047);
var binding_31049 = map__30988_31048__$1;
var init_31050 = cljs.core.get.call(null,map__30988_31048__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31049);

cljs.compiler.emitln.call(null," = ",init_31050,";");

var G__31051 = cljs.core.next.call(null,seq__30972_31041__$1);
var G__31052 = null;
var G__31053 = (0);
var G__31054 = (0);
seq__30972_31015 = G__31051;
chunk__30973_31016 = G__31052;
count__30974_31017 = G__31053;
i__30975_31018 = G__31054;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_30971_31009;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__31066){
var map__31067 = p__31066;
var map__31067__$1 = ((((!((map__31067 == null)))?((((map__31067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31067):map__31067);
var frame = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__21370__auto___31083 = cljs.core.count.call(null,exprs);
var i_31084 = (0);
while(true){
if((i_31084 < n__21370__auto___31083)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_31084)," = ",exprs.call(null,i_31084),";");

var G__31089 = (i_31084 + (1));
i_31084 = G__31089;
continue;
} else {
}
break;
}

var n__21370__auto___31090 = cljs.core.count.call(null,exprs);
var i_31092 = (0);
while(true){
if((i_31092 < n__21370__auto___31090)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_31092))," = ",temps.call(null,i_31092),";");

var G__31099 = (i_31092 + (1));
i_31092 = G__31099;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__31109){
var map__31110 = p__31109;
var map__31110__$1 = ((((!((map__31110 == null)))?((((map__31110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31110):map__31110);
var bindings = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__31112_31127 = cljs.core.seq.call(null,bindings);
var chunk__31113_31128 = null;
var count__31114_31129 = (0);
var i__31115_31130 = (0);
while(true){
if((i__31115_31130 < count__31114_31129)){
var map__31116_31131 = cljs.core._nth.call(null,chunk__31113_31128,i__31115_31130);
var map__31116_31132__$1 = ((((!((map__31116_31131 == null)))?((((map__31116_31131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31116_31131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116_31131):map__31116_31131);
var binding_31133 = map__31116_31132__$1;
var init_31134 = cljs.core.get.call(null,map__31116_31132__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31133)," = ",init_31134,";");

var G__31140 = seq__31112_31127;
var G__31141 = chunk__31113_31128;
var G__31142 = count__31114_31129;
var G__31143 = (i__31115_31130 + (1));
seq__31112_31127 = G__31140;
chunk__31113_31128 = G__31141;
count__31114_31129 = G__31142;
i__31115_31130 = G__31143;
continue;
} else {
var temp__4657__auto___31146 = cljs.core.seq.call(null,seq__31112_31127);
if(temp__4657__auto___31146){
var seq__31112_31151__$1 = temp__4657__auto___31146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31112_31151__$1)){
var c__21266__auto___31152 = cljs.core.chunk_first.call(null,seq__31112_31151__$1);
var G__31156 = cljs.core.chunk_rest.call(null,seq__31112_31151__$1);
var G__31157 = c__21266__auto___31152;
var G__31158 = cljs.core.count.call(null,c__21266__auto___31152);
var G__31159 = (0);
seq__31112_31127 = G__31156;
chunk__31113_31128 = G__31157;
count__31114_31129 = G__31158;
i__31115_31130 = G__31159;
continue;
} else {
var map__31118_31160 = cljs.core.first.call(null,seq__31112_31151__$1);
var map__31118_31161__$1 = ((((!((map__31118_31160 == null)))?((((map__31118_31160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31118_31160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31118_31160):map__31118_31160);
var binding_31162 = map__31118_31161__$1;
var init_31163 = cljs.core.get.call(null,map__31118_31161__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31162)," = ",init_31163,";");

var G__31172 = cljs.core.next.call(null,seq__31112_31151__$1);
var G__31173 = null;
var G__31174 = (0);
var G__31175 = (0);
seq__31112_31127 = G__31172;
chunk__31113_31128 = G__31173;
count__31114_31129 = G__31174;
i__31115_31130 = G__31175;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__31199){
var map__31200 = p__31199;
var map__31200__$1 = ((((!((map__31200 == null)))?((((map__31200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31200):map__31200);
var expr = map__31200__$1;
var f = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__31202 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env){
return (function (p1__31194_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31194_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env){
return (function (p1__31195_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31195_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31200,map__31200__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__31202,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__31202,(1),null);
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_31229 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_31229,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_31230 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_31230,args)),(((mfa_31230 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_31230,args)),"], 0))");
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
var fprop_31233 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_31233," ? ",f__$1,fprop_31233,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__31238){
var map__31239 = p__31238;
var map__31239__$1 = ((((!((map__31239 == null)))?((((map__31239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31239):map__31239);
var ctor = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__31244){
var map__31245 = p__31244;
var map__31245__$1 = ((((!((map__31245 == null)))?((((map__31245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);
var target = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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

var seq__31256_31266 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__31257_31267 = null;
var count__31258_31268 = (0);
var i__31259_31269 = (0);
while(true){
if((i__31259_31269 < count__31258_31268)){
var lib_31273 = cljs.core._nth.call(null,chunk__31257_31267,i__31259_31269);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31273),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31273),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31273),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31273),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31273),"');");

}
}

var G__31291 = seq__31256_31266;
var G__31292 = chunk__31257_31267;
var G__31293 = count__31258_31268;
var G__31294 = (i__31259_31269 + (1));
seq__31256_31266 = G__31291;
chunk__31257_31267 = G__31292;
count__31258_31268 = G__31293;
i__31259_31269 = G__31294;
continue;
} else {
var temp__4657__auto___31298 = cljs.core.seq.call(null,seq__31256_31266);
if(temp__4657__auto___31298){
var seq__31256_31299__$1 = temp__4657__auto___31298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31256_31299__$1)){
var c__21266__auto___31300 = cljs.core.chunk_first.call(null,seq__31256_31299__$1);
var G__31301 = cljs.core.chunk_rest.call(null,seq__31256_31299__$1);
var G__31302 = c__21266__auto___31300;
var G__31303 = cljs.core.count.call(null,c__21266__auto___31300);
var G__31304 = (0);
seq__31256_31266 = G__31301;
chunk__31257_31267 = G__31302;
count__31258_31268 = G__31303;
i__31259_31269 = G__31304;
continue;
} else {
var lib_31309 = cljs.core.first.call(null,seq__31256_31299__$1);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31309),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31309),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31309),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31309),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31309),"');");

}
}

var G__31311 = cljs.core.next.call(null,seq__31256_31299__$1);
var G__31312 = null;
var G__31313 = (0);
var G__31314 = (0);
seq__31256_31266 = G__31311;
chunk__31257_31267 = G__31312;
count__31258_31268 = G__31313;
i__31259_31269 = G__31314;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31317){
var map__31318 = p__31317;
var map__31318__$1 = ((((!((map__31318 == null)))?((((map__31318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31318):map__31318);
var name = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__31347){
var map__31348 = p__31347;
var map__31348__$1 = ((((!((map__31348 == null)))?((((map__31348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31348):map__31348);
var t = cljs.core.get.call(null,map__31348__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31348__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31348__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31348__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31348__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31351_31369 = cljs.core.seq.call(null,protocols);
var chunk__31352_31370 = null;
var count__31353_31371 = (0);
var i__31354_31372 = (0);
while(true){
if((i__31354_31372 < count__31353_31371)){
var protocol_31373 = cljs.core._nth.call(null,chunk__31352_31370,i__31354_31372);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31373)].join('')),"}");

var G__31374 = seq__31351_31369;
var G__31375 = chunk__31352_31370;
var G__31376 = count__31353_31371;
var G__31377 = (i__31354_31372 + (1));
seq__31351_31369 = G__31374;
chunk__31352_31370 = G__31375;
count__31353_31371 = G__31376;
i__31354_31372 = G__31377;
continue;
} else {
var temp__4657__auto___31378 = cljs.core.seq.call(null,seq__31351_31369);
if(temp__4657__auto___31378){
var seq__31351_31379__$1 = temp__4657__auto___31378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31351_31379__$1)){
var c__21266__auto___31380 = cljs.core.chunk_first.call(null,seq__31351_31379__$1);
var G__31381 = cljs.core.chunk_rest.call(null,seq__31351_31379__$1);
var G__31382 = c__21266__auto___31380;
var G__31383 = cljs.core.count.call(null,c__21266__auto___31380);
var G__31384 = (0);
seq__31351_31369 = G__31381;
chunk__31352_31370 = G__31382;
count__31353_31371 = G__31383;
i__31354_31372 = G__31384;
continue;
} else {
var protocol_31385 = cljs.core.first.call(null,seq__31351_31379__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31385)].join('')),"}");

var G__31386 = cljs.core.next.call(null,seq__31351_31379__$1);
var G__31387 = null;
var G__31388 = (0);
var G__31389 = (0);
seq__31351_31369 = G__31386;
chunk__31352_31370 = G__31387;
count__31353_31371 = G__31388;
i__31354_31372 = G__31389;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31355_31390 = cljs.core.seq.call(null,fields__$1);
var chunk__31356_31391 = null;
var count__31357_31392 = (0);
var i__31358_31393 = (0);
while(true){
if((i__31358_31393 < count__31357_31392)){
var fld_31394 = cljs.core._nth.call(null,chunk__31356_31391,i__31358_31393);
cljs.compiler.emitln.call(null,"this.",fld_31394," = ",fld_31394,";");

var G__31395 = seq__31355_31390;
var G__31396 = chunk__31356_31391;
var G__31397 = count__31357_31392;
var G__31398 = (i__31358_31393 + (1));
seq__31355_31390 = G__31395;
chunk__31356_31391 = G__31396;
count__31357_31392 = G__31397;
i__31358_31393 = G__31398;
continue;
} else {
var temp__4657__auto___31399 = cljs.core.seq.call(null,seq__31355_31390);
if(temp__4657__auto___31399){
var seq__31355_31400__$1 = temp__4657__auto___31399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31355_31400__$1)){
var c__21266__auto___31401 = cljs.core.chunk_first.call(null,seq__31355_31400__$1);
var G__31402 = cljs.core.chunk_rest.call(null,seq__31355_31400__$1);
var G__31403 = c__21266__auto___31401;
var G__31404 = cljs.core.count.call(null,c__21266__auto___31401);
var G__31405 = (0);
seq__31355_31390 = G__31402;
chunk__31356_31391 = G__31403;
count__31357_31392 = G__31404;
i__31358_31393 = G__31405;
continue;
} else {
var fld_31406 = cljs.core.first.call(null,seq__31355_31400__$1);
cljs.compiler.emitln.call(null,"this.",fld_31406," = ",fld_31406,";");

var G__31407 = cljs.core.next.call(null,seq__31355_31400__$1);
var G__31408 = null;
var G__31409 = (0);
var G__31410 = (0);
seq__31355_31390 = G__31407;
chunk__31356_31391 = G__31408;
count__31357_31392 = G__31409;
i__31358_31393 = G__31410;
continue;
}
} else {
}
}
break;
}

var seq__31359_31411 = cljs.core.seq.call(null,pmasks);
var chunk__31360_31412 = null;
var count__31361_31413 = (0);
var i__31362_31414 = (0);
while(true){
if((i__31362_31414 < count__31361_31413)){
var vec__31363_31415 = cljs.core._nth.call(null,chunk__31360_31412,i__31362_31414);
var pno_31416 = cljs.core.nth.call(null,vec__31363_31415,(0),null);
var pmask_31417 = cljs.core.nth.call(null,vec__31363_31415,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31416,"$ = ",pmask_31417,";");

var G__31418 = seq__31359_31411;
var G__31419 = chunk__31360_31412;
var G__31420 = count__31361_31413;
var G__31421 = (i__31362_31414 + (1));
seq__31359_31411 = G__31418;
chunk__31360_31412 = G__31419;
count__31361_31413 = G__31420;
i__31362_31414 = G__31421;
continue;
} else {
var temp__4657__auto___31422 = cljs.core.seq.call(null,seq__31359_31411);
if(temp__4657__auto___31422){
var seq__31359_31423__$1 = temp__4657__auto___31422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31359_31423__$1)){
var c__21266__auto___31424 = cljs.core.chunk_first.call(null,seq__31359_31423__$1);
var G__31425 = cljs.core.chunk_rest.call(null,seq__31359_31423__$1);
var G__31426 = c__21266__auto___31424;
var G__31427 = cljs.core.count.call(null,c__21266__auto___31424);
var G__31428 = (0);
seq__31359_31411 = G__31425;
chunk__31360_31412 = G__31426;
count__31361_31413 = G__31427;
i__31362_31414 = G__31428;
continue;
} else {
var vec__31366_31431 = cljs.core.first.call(null,seq__31359_31423__$1);
var pno_31432 = cljs.core.nth.call(null,vec__31366_31431,(0),null);
var pmask_31433 = cljs.core.nth.call(null,vec__31366_31431,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31432,"$ = ",pmask_31433,";");

var G__31436 = cljs.core.next.call(null,seq__31359_31423__$1);
var G__31437 = null;
var G__31438 = (0);
var G__31439 = (0);
seq__31359_31411 = G__31436;
chunk__31360_31412 = G__31437;
count__31361_31413 = G__31438;
i__31362_31414 = G__31439;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__31440){
var map__31441 = p__31440;
var map__31441__$1 = ((((!((map__31441 == null)))?((((map__31441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31441):map__31441);
var t = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31443_31465 = cljs.core.seq.call(null,protocols);
var chunk__31444_31466 = null;
var count__31445_31467 = (0);
var i__31446_31468 = (0);
while(true){
if((i__31446_31468 < count__31445_31467)){
var protocol_31469 = cljs.core._nth.call(null,chunk__31444_31466,i__31446_31468);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31469)].join('')),"}");

var G__31470 = seq__31443_31465;
var G__31471 = chunk__31444_31466;
var G__31472 = count__31445_31467;
var G__31473 = (i__31446_31468 + (1));
seq__31443_31465 = G__31470;
chunk__31444_31466 = G__31471;
count__31445_31467 = G__31472;
i__31446_31468 = G__31473;
continue;
} else {
var temp__4657__auto___31474 = cljs.core.seq.call(null,seq__31443_31465);
if(temp__4657__auto___31474){
var seq__31443_31475__$1 = temp__4657__auto___31474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31443_31475__$1)){
var c__21266__auto___31476 = cljs.core.chunk_first.call(null,seq__31443_31475__$1);
var G__31477 = cljs.core.chunk_rest.call(null,seq__31443_31475__$1);
var G__31478 = c__21266__auto___31476;
var G__31479 = cljs.core.count.call(null,c__21266__auto___31476);
var G__31480 = (0);
seq__31443_31465 = G__31477;
chunk__31444_31466 = G__31478;
count__31445_31467 = G__31479;
i__31446_31468 = G__31480;
continue;
} else {
var protocol_31481 = cljs.core.first.call(null,seq__31443_31475__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_31481)].join('')),"}");

var G__31482 = cljs.core.next.call(null,seq__31443_31475__$1);
var G__31483 = null;
var G__31484 = (0);
var G__31485 = (0);
seq__31443_31465 = G__31482;
chunk__31444_31466 = G__31483;
count__31445_31467 = G__31484;
i__31446_31468 = G__31485;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31447_31486 = cljs.core.seq.call(null,fields__$1);
var chunk__31448_31487 = null;
var count__31449_31488 = (0);
var i__31450_31489 = (0);
while(true){
if((i__31450_31489 < count__31449_31488)){
var fld_31490 = cljs.core._nth.call(null,chunk__31448_31487,i__31450_31489);
cljs.compiler.emitln.call(null,"this.",fld_31490," = ",fld_31490,";");

var G__31491 = seq__31447_31486;
var G__31492 = chunk__31448_31487;
var G__31493 = count__31449_31488;
var G__31494 = (i__31450_31489 + (1));
seq__31447_31486 = G__31491;
chunk__31448_31487 = G__31492;
count__31449_31488 = G__31493;
i__31450_31489 = G__31494;
continue;
} else {
var temp__4657__auto___31495 = cljs.core.seq.call(null,seq__31447_31486);
if(temp__4657__auto___31495){
var seq__31447_31496__$1 = temp__4657__auto___31495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31447_31496__$1)){
var c__21266__auto___31497 = cljs.core.chunk_first.call(null,seq__31447_31496__$1);
var G__31498 = cljs.core.chunk_rest.call(null,seq__31447_31496__$1);
var G__31499 = c__21266__auto___31497;
var G__31500 = cljs.core.count.call(null,c__21266__auto___31497);
var G__31501 = (0);
seq__31447_31486 = G__31498;
chunk__31448_31487 = G__31499;
count__31449_31488 = G__31500;
i__31450_31489 = G__31501;
continue;
} else {
var fld_31502 = cljs.core.first.call(null,seq__31447_31496__$1);
cljs.compiler.emitln.call(null,"this.",fld_31502," = ",fld_31502,";");

var G__31503 = cljs.core.next.call(null,seq__31447_31496__$1);
var G__31504 = null;
var G__31505 = (0);
var G__31506 = (0);
seq__31447_31486 = G__31503;
chunk__31448_31487 = G__31504;
count__31449_31488 = G__31505;
i__31450_31489 = G__31506;
continue;
}
} else {
}
}
break;
}

var seq__31451_31507 = cljs.core.seq.call(null,pmasks);
var chunk__31452_31508 = null;
var count__31453_31509 = (0);
var i__31454_31510 = (0);
while(true){
if((i__31454_31510 < count__31453_31509)){
var vec__31455_31511 = cljs.core._nth.call(null,chunk__31452_31508,i__31454_31510);
var pno_31512 = cljs.core.nth.call(null,vec__31455_31511,(0),null);
var pmask_31513 = cljs.core.nth.call(null,vec__31455_31511,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31512,"$ = ",pmask_31513,";");

var G__31514 = seq__31451_31507;
var G__31515 = chunk__31452_31508;
var G__31516 = count__31453_31509;
var G__31517 = (i__31454_31510 + (1));
seq__31451_31507 = G__31514;
chunk__31452_31508 = G__31515;
count__31453_31509 = G__31516;
i__31454_31510 = G__31517;
continue;
} else {
var temp__4657__auto___31518 = cljs.core.seq.call(null,seq__31451_31507);
if(temp__4657__auto___31518){
var seq__31451_31519__$1 = temp__4657__auto___31518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31451_31519__$1)){
var c__21266__auto___31520 = cljs.core.chunk_first.call(null,seq__31451_31519__$1);
var G__31521 = cljs.core.chunk_rest.call(null,seq__31451_31519__$1);
var G__31522 = c__21266__auto___31520;
var G__31523 = cljs.core.count.call(null,c__21266__auto___31520);
var G__31524 = (0);
seq__31451_31507 = G__31521;
chunk__31452_31508 = G__31522;
count__31453_31509 = G__31523;
i__31454_31510 = G__31524;
continue;
} else {
var vec__31458_31525 = cljs.core.first.call(null,seq__31451_31519__$1);
var pno_31526 = cljs.core.nth.call(null,vec__31458_31525,(0),null);
var pmask_31527 = cljs.core.nth.call(null,vec__31458_31525,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31526,"$ = ",pmask_31527,";");

var G__31528 = cljs.core.next.call(null,seq__31451_31519__$1);
var G__31529 = null;
var G__31530 = (0);
var G__31531 = (0);
seq__31451_31507 = G__31528;
chunk__31452_31508 = G__31529;
count__31453_31509 = G__31530;
i__31454_31510 = G__31531;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__31532){
var map__31533 = p__31532;
var map__31533__$1 = ((((!((map__31533 == null)))?((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var target = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__31535){
var map__31536 = p__31535;
var map__31536__$1 = ((((!((map__31536 == null)))?((((map__31536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31536):map__31536);
var op = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__20443__auto__ = code;
if(cljs.core.truth_(and__20443__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__20443__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29507__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29507__auto__))){
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
var seq__31550 = cljs.core.seq.call(null,table);
var chunk__31551 = null;
var count__31552 = (0);
var i__31553 = (0);
while(true){
if((i__31553 < count__31552)){
var vec__31554 = cljs.core._nth.call(null,chunk__31551,i__31553);
var sym = cljs.core.nth.call(null,vec__31554,(0),null);
var value = cljs.core.nth.call(null,vec__31554,(1),null);
var ns_31560 = cljs.core.namespace.call(null,sym);
var name_31561 = cljs.core.name.call(null,sym);
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

var G__31565 = seq__31550;
var G__31566 = chunk__31551;
var G__31567 = count__31552;
var G__31568 = (i__31553 + (1));
seq__31550 = G__31565;
chunk__31551 = G__31566;
count__31552 = G__31567;
i__31553 = G__31568;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31550);
if(temp__4657__auto__){
var seq__31550__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31550__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__31550__$1);
var G__31574 = cljs.core.chunk_rest.call(null,seq__31550__$1);
var G__31575 = c__21266__auto__;
var G__31576 = cljs.core.count.call(null,c__21266__auto__);
var G__31577 = (0);
seq__31550 = G__31574;
chunk__31551 = G__31575;
count__31552 = G__31576;
i__31553 = G__31577;
continue;
} else {
var vec__31557 = cljs.core.first.call(null,seq__31550__$1);
var sym = cljs.core.nth.call(null,vec__31557,(0),null);
var value = cljs.core.nth.call(null,vec__31557,(1),null);
var ns_31578 = cljs.core.namespace.call(null,sym);
var name_31579 = cljs.core.name.call(null,sym);
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

var G__31580 = cljs.core.next.call(null,seq__31550__$1);
var G__31581 = null;
var G__31582 = (0);
var G__31583 = (0);
seq__31550 = G__31580;
chunk__31551 = G__31581;
count__31552 = G__31582;
i__31553 = G__31583;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1522121081933