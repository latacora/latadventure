// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__21912){
var vec__21913 = p__21912;
var i = cljs.core.nth.call(null,vec__21913,(0),null);
var v = cljs.core.nth.call(null,vec__21913,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__21919 = seg;
var gcol = cljs.core.nth.call(null,vec__21919,(0),null);
var source = cljs.core.nth.call(null,vec__21919,(1),null);
var line = cljs.core.nth.call(null,vec__21919,(2),null);
var col = cljs.core.nth.call(null,vec__21919,(3),null);
var name = cljs.core.nth.call(null,vec__21919,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__21929 = seg;
var gcol = cljs.core.nth.call(null,vec__21929,(0),null);
var source = cljs.core.nth.call(null,vec__21929,(1),null);
var line = cljs.core.nth.call(null,vec__21929,(2),null);
var col = cljs.core.nth.call(null,vec__21929,(3),null);
var name = cljs.core.nth.call(null,vec__21929,(4),null);
var vec__21932 = relseg;
var rgcol = cljs.core.nth.call(null,vec__21932,(0),null);
var rsource = cljs.core.nth.call(null,vec__21932,(1),null);
var rline = cljs.core.nth.call(null,vec__21932,(2),null);
var rcol = cljs.core.nth.call(null,vec__21932,(3),null);
var rname = cljs.core.nth.call(null,vec__21932,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__20455__auto__ = source;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__20455__auto__ = line;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__20455__auto__ = col;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__21938 = segmap;
var map__21938__$1 = ((((!((map__21938 == null)))?((((map__21938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21938):map__21938);
var gcol = cljs.core.get.call(null,map__21938__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__21938__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__21938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__21938__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__21938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__21938,map__21938__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args21946 = [];
var len__21530__auto___21955 = arguments.length;
var i__21531__auto___21957 = (0);
while(true){
if((i__21531__auto___21957 < len__21530__auto___21955)){
args21946.push((arguments[i__21531__auto___21957]));

var G__21958 = (i__21531__auto___21957 + (1));
i__21531__auto___21957 = G__21958;
continue;
} else {
}
break;
}

var G__21950 = args21946.length;
switch (G__21950) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21946.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__21951 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__21967 = cljs.core.next.call(null,segs__$1);
var G__21968 = nrelseg;
var G__21969 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__21967;
relseg__$1 = G__21968;
result__$1 = G__21969;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__21951,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__21951,(1),null);
var G__21972 = (gline + (1));
var G__21973 = cljs.core.next.call(null,lines__$1);
var G__21974 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__21975 = result__$1;
gline = G__21972;
lines__$1 = G__21973;
relseg = G__21974;
result = G__21975;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__21982 = segmap;
var map__21982__$1 = ((((!((map__21982 == null)))?((((map__21982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21982):map__21982);
var gcol = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__21982,map__21982__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__21982,map__21982__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__21978_SHARP_){
return cljs.core.conj.call(null,p1__21978_SHARP_,d__$1);
});})(map__21982,map__21982__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__21982,map__21982__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args22004 = [];
var len__21530__auto___22032 = arguments.length;
var i__21531__auto___22033 = (0);
while(true){
if((i__21531__auto___22033 < len__21530__auto___22032)){
args22004.push((arguments[i__21531__auto___22033]));

var G__22037 = (i__21531__auto___22033 + (1));
i__21531__auto___22033 = G__22037;
continue;
} else {
}
break;
}

var G__22015 = args22004.length;
switch (G__22015) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22004.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__22021 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22045 = cljs.core.next.call(null,segs__$1);
var G__22046 = nrelseg;
var G__22047 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22045;
relseg__$1 = G__22046;
result__$1 = G__22047;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22021,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22021,(1),null);
var G__22049 = (gline + (1));
var G__22050 = cljs.core.next.call(null,lines__$1);
var G__22051 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22052 = result__$1;
gline = G__22049;
lines__$1 = G__22050;
relseg = G__22051;
result = G__22052;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__22070){
var vec__22071 = p__22070;
var _ = cljs.core.nth.call(null,vec__22071,(0),null);
var source = cljs.core.nth.call(null,vec__22071,(1),null);
var line = cljs.core.nth.call(null,vec__22071,(2),null);
var col = cljs.core.nth.call(null,vec__22071,(3),null);
var name = cljs.core.nth.call(null,vec__22071,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__22077){
var vec__22078 = p__22077;
var gcol = cljs.core.nth.call(null,vec__22078,(0),null);
var sidx = cljs.core.nth.call(null,vec__22078,(1),null);
var line = cljs.core.nth.call(null,vec__22078,(2),null);
var col = cljs.core.nth.call(null,vec__22078,(3),null);
var name = cljs.core.nth.call(null,vec__22078,(4),null);
var seg = vec__22078;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__22078,gcol,sidx,line,col,name,seg,relseg){
return (function (p__22081){
var vec__22082 = p__22081;
var _ = cljs.core.nth.call(null,vec__22082,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22082,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22082,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22082,(3),null);
var lname = cljs.core.nth.call(null,vec__22082,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__22078,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__20455__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__22202 = cljs.core.seq.call(null,infos);
var chunk__22203 = null;
var count__22204 = (0);
var i__22205 = (0);
while(true){
if((i__22205 < count__22204)){
var info = cljs.core._nth.call(null,chunk__22203,i__22205);
var segv_22290 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22291 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22292 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22291 > (lc_22292 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22202,chunk__22203,count__22204,i__22205,segv_22290,gline_22291,lc_22292,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22291 - (lc_22292 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22290], null));
});})(seq__22202,chunk__22203,count__22204,i__22205,segv_22290,gline_22291,lc_22292,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22202,chunk__22203,count__22204,i__22205,segv_22290,gline_22291,lc_22292,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22291], null),cljs.core.conj,segv_22290);
});})(seq__22202,chunk__22203,count__22204,i__22205,segv_22290,gline_22291,lc_22292,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22293 = seq__22202;
var G__22294 = chunk__22203;
var G__22295 = count__22204;
var G__22296 = (i__22205 + (1));
seq__22202 = G__22293;
chunk__22203 = G__22294;
count__22204 = G__22295;
i__22205 = G__22296;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22202);
if(temp__4657__auto__){
var seq__22202__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22202__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__22202__$1);
var G__22297 = cljs.core.chunk_rest.call(null,seq__22202__$1);
var G__22298 = c__21266__auto__;
var G__22299 = cljs.core.count.call(null,c__21266__auto__);
var G__22300 = (0);
seq__22202 = G__22297;
chunk__22203 = G__22298;
count__22204 = G__22299;
i__22205 = G__22300;
continue;
} else {
var info = cljs.core.first.call(null,seq__22202__$1);
var segv_22301 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22302 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22303 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22302 > (lc_22303 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22202,chunk__22203,count__22204,i__22205,segv_22301,gline_22302,lc_22303,info,seq__22202__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22302 - (lc_22303 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22301], null));
});})(seq__22202,chunk__22203,count__22204,i__22205,segv_22301,gline_22302,lc_22303,info,seq__22202__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22202,chunk__22203,count__22204,i__22205,segv_22301,gline_22302,lc_22303,info,seq__22202__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22302], null),cljs.core.conj,segv_22301);
});})(seq__22202,chunk__22203,count__22204,i__22205,segv_22301,gline_22302,lc_22303,info,seq__22202__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22307 = cljs.core.next.call(null,seq__22202__$1);
var G__22308 = null;
var G__22309 = (0);
var G__22310 = (0);
seq__22202 = G__22307;
chunk__22203 = G__22308;
count__22204 = G__22309;
i__22205 = G__22310;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__22206_22311 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22207_22312 = null;
var count__22208_22313 = (0);
var i__22209_22314 = (0);
while(true){
if((i__22209_22314 < count__22208_22313)){
var vec__22210_22318 = cljs.core._nth.call(null,chunk__22207_22312,i__22209_22314);
var source_idx_22319 = cljs.core.nth.call(null,vec__22210_22318,(0),null);
var vec__22213_22320 = cljs.core.nth.call(null,vec__22210_22318,(1),null);
var __22321 = cljs.core.nth.call(null,vec__22213_22320,(0),null);
var lines_22322__$1 = cljs.core.nth.call(null,vec__22213_22320,(1),null);
var seq__22216_22323 = cljs.core.seq.call(null,lines_22322__$1);
var chunk__22217_22324 = null;
var count__22218_22325 = (0);
var i__22219_22326 = (0);
while(true){
if((i__22219_22326 < count__22218_22325)){
var vec__22220_22327 = cljs.core._nth.call(null,chunk__22217_22324,i__22219_22326);
var line_22328 = cljs.core.nth.call(null,vec__22220_22327,(0),null);
var cols_22329 = cljs.core.nth.call(null,vec__22220_22327,(1),null);
var seq__22223_22330 = cljs.core.seq.call(null,cols_22329);
var chunk__22224_22331 = null;
var count__22225_22332 = (0);
var i__22226_22333 = (0);
while(true){
if((i__22226_22333 < count__22225_22332)){
var vec__22227_22334 = cljs.core._nth.call(null,chunk__22224_22331,i__22226_22333);
var col_22335 = cljs.core.nth.call(null,vec__22227_22334,(0),null);
var infos_22336 = cljs.core.nth.call(null,vec__22227_22334,(1),null);
encode_cols.call(null,infos_22336,source_idx_22319,line_22328,col_22335);

var G__22337 = seq__22223_22330;
var G__22338 = chunk__22224_22331;
var G__22339 = count__22225_22332;
var G__22340 = (i__22226_22333 + (1));
seq__22223_22330 = G__22337;
chunk__22224_22331 = G__22338;
count__22225_22332 = G__22339;
i__22226_22333 = G__22340;
continue;
} else {
var temp__4657__auto___22341 = cljs.core.seq.call(null,seq__22223_22330);
if(temp__4657__auto___22341){
var seq__22223_22342__$1 = temp__4657__auto___22341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22223_22342__$1)){
var c__21266__auto___22343 = cljs.core.chunk_first.call(null,seq__22223_22342__$1);
var G__22344 = cljs.core.chunk_rest.call(null,seq__22223_22342__$1);
var G__22345 = c__21266__auto___22343;
var G__22346 = cljs.core.count.call(null,c__21266__auto___22343);
var G__22347 = (0);
seq__22223_22330 = G__22344;
chunk__22224_22331 = G__22345;
count__22225_22332 = G__22346;
i__22226_22333 = G__22347;
continue;
} else {
var vec__22230_22348 = cljs.core.first.call(null,seq__22223_22342__$1);
var col_22349 = cljs.core.nth.call(null,vec__22230_22348,(0),null);
var infos_22350 = cljs.core.nth.call(null,vec__22230_22348,(1),null);
encode_cols.call(null,infos_22350,source_idx_22319,line_22328,col_22349);

var G__22351 = cljs.core.next.call(null,seq__22223_22342__$1);
var G__22352 = null;
var G__22353 = (0);
var G__22354 = (0);
seq__22223_22330 = G__22351;
chunk__22224_22331 = G__22352;
count__22225_22332 = G__22353;
i__22226_22333 = G__22354;
continue;
}
} else {
}
}
break;
}

var G__22355 = seq__22216_22323;
var G__22356 = chunk__22217_22324;
var G__22357 = count__22218_22325;
var G__22358 = (i__22219_22326 + (1));
seq__22216_22323 = G__22355;
chunk__22217_22324 = G__22356;
count__22218_22325 = G__22357;
i__22219_22326 = G__22358;
continue;
} else {
var temp__4657__auto___22359 = cljs.core.seq.call(null,seq__22216_22323);
if(temp__4657__auto___22359){
var seq__22216_22360__$1 = temp__4657__auto___22359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22216_22360__$1)){
var c__21266__auto___22361 = cljs.core.chunk_first.call(null,seq__22216_22360__$1);
var G__22362 = cljs.core.chunk_rest.call(null,seq__22216_22360__$1);
var G__22363 = c__21266__auto___22361;
var G__22364 = cljs.core.count.call(null,c__21266__auto___22361);
var G__22365 = (0);
seq__22216_22323 = G__22362;
chunk__22217_22324 = G__22363;
count__22218_22325 = G__22364;
i__22219_22326 = G__22365;
continue;
} else {
var vec__22233_22366 = cljs.core.first.call(null,seq__22216_22360__$1);
var line_22367 = cljs.core.nth.call(null,vec__22233_22366,(0),null);
var cols_22368 = cljs.core.nth.call(null,vec__22233_22366,(1),null);
var seq__22236_22369 = cljs.core.seq.call(null,cols_22368);
var chunk__22237_22370 = null;
var count__22238_22371 = (0);
var i__22239_22372 = (0);
while(true){
if((i__22239_22372 < count__22238_22371)){
var vec__22240_22373 = cljs.core._nth.call(null,chunk__22237_22370,i__22239_22372);
var col_22374 = cljs.core.nth.call(null,vec__22240_22373,(0),null);
var infos_22375 = cljs.core.nth.call(null,vec__22240_22373,(1),null);
encode_cols.call(null,infos_22375,source_idx_22319,line_22367,col_22374);

var G__22376 = seq__22236_22369;
var G__22377 = chunk__22237_22370;
var G__22378 = count__22238_22371;
var G__22379 = (i__22239_22372 + (1));
seq__22236_22369 = G__22376;
chunk__22237_22370 = G__22377;
count__22238_22371 = G__22378;
i__22239_22372 = G__22379;
continue;
} else {
var temp__4657__auto___22380__$1 = cljs.core.seq.call(null,seq__22236_22369);
if(temp__4657__auto___22380__$1){
var seq__22236_22381__$1 = temp__4657__auto___22380__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22236_22381__$1)){
var c__21266__auto___22382 = cljs.core.chunk_first.call(null,seq__22236_22381__$1);
var G__22383 = cljs.core.chunk_rest.call(null,seq__22236_22381__$1);
var G__22384 = c__21266__auto___22382;
var G__22385 = cljs.core.count.call(null,c__21266__auto___22382);
var G__22386 = (0);
seq__22236_22369 = G__22383;
chunk__22237_22370 = G__22384;
count__22238_22371 = G__22385;
i__22239_22372 = G__22386;
continue;
} else {
var vec__22243_22391 = cljs.core.first.call(null,seq__22236_22381__$1);
var col_22392 = cljs.core.nth.call(null,vec__22243_22391,(0),null);
var infos_22393 = cljs.core.nth.call(null,vec__22243_22391,(1),null);
encode_cols.call(null,infos_22393,source_idx_22319,line_22367,col_22392);

var G__22394 = cljs.core.next.call(null,seq__22236_22381__$1);
var G__22395 = null;
var G__22396 = (0);
var G__22397 = (0);
seq__22236_22369 = G__22394;
chunk__22237_22370 = G__22395;
count__22238_22371 = G__22396;
i__22239_22372 = G__22397;
continue;
}
} else {
}
}
break;
}

var G__22398 = cljs.core.next.call(null,seq__22216_22360__$1);
var G__22399 = null;
var G__22400 = (0);
var G__22401 = (0);
seq__22216_22323 = G__22398;
chunk__22217_22324 = G__22399;
count__22218_22325 = G__22400;
i__22219_22326 = G__22401;
continue;
}
} else {
}
}
break;
}

var G__22408 = seq__22206_22311;
var G__22409 = chunk__22207_22312;
var G__22410 = count__22208_22313;
var G__22411 = (i__22209_22314 + (1));
seq__22206_22311 = G__22408;
chunk__22207_22312 = G__22409;
count__22208_22313 = G__22410;
i__22209_22314 = G__22411;
continue;
} else {
var temp__4657__auto___22412 = cljs.core.seq.call(null,seq__22206_22311);
if(temp__4657__auto___22412){
var seq__22206_22413__$1 = temp__4657__auto___22412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22206_22413__$1)){
var c__21266__auto___22417 = cljs.core.chunk_first.call(null,seq__22206_22413__$1);
var G__22418 = cljs.core.chunk_rest.call(null,seq__22206_22413__$1);
var G__22419 = c__21266__auto___22417;
var G__22420 = cljs.core.count.call(null,c__21266__auto___22417);
var G__22421 = (0);
seq__22206_22311 = G__22418;
chunk__22207_22312 = G__22419;
count__22208_22313 = G__22420;
i__22209_22314 = G__22421;
continue;
} else {
var vec__22249_22426 = cljs.core.first.call(null,seq__22206_22413__$1);
var source_idx_22427 = cljs.core.nth.call(null,vec__22249_22426,(0),null);
var vec__22252_22428 = cljs.core.nth.call(null,vec__22249_22426,(1),null);
var __22429 = cljs.core.nth.call(null,vec__22252_22428,(0),null);
var lines_22430__$1 = cljs.core.nth.call(null,vec__22252_22428,(1),null);
var seq__22255_22436 = cljs.core.seq.call(null,lines_22430__$1);
var chunk__22256_22437 = null;
var count__22257_22438 = (0);
var i__22258_22439 = (0);
while(true){
if((i__22258_22439 < count__22257_22438)){
var vec__22259_22446 = cljs.core._nth.call(null,chunk__22256_22437,i__22258_22439);
var line_22447 = cljs.core.nth.call(null,vec__22259_22446,(0),null);
var cols_22448 = cljs.core.nth.call(null,vec__22259_22446,(1),null);
var seq__22262_22453 = cljs.core.seq.call(null,cols_22448);
var chunk__22263_22454 = null;
var count__22264_22455 = (0);
var i__22265_22456 = (0);
while(true){
if((i__22265_22456 < count__22264_22455)){
var vec__22266_22457 = cljs.core._nth.call(null,chunk__22263_22454,i__22265_22456);
var col_22458 = cljs.core.nth.call(null,vec__22266_22457,(0),null);
var infos_22459 = cljs.core.nth.call(null,vec__22266_22457,(1),null);
encode_cols.call(null,infos_22459,source_idx_22427,line_22447,col_22458);

var G__22478 = seq__22262_22453;
var G__22479 = chunk__22263_22454;
var G__22480 = count__22264_22455;
var G__22481 = (i__22265_22456 + (1));
seq__22262_22453 = G__22478;
chunk__22263_22454 = G__22479;
count__22264_22455 = G__22480;
i__22265_22456 = G__22481;
continue;
} else {
var temp__4657__auto___22487__$1 = cljs.core.seq.call(null,seq__22262_22453);
if(temp__4657__auto___22487__$1){
var seq__22262_22488__$1 = temp__4657__auto___22487__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22262_22488__$1)){
var c__21266__auto___22490 = cljs.core.chunk_first.call(null,seq__22262_22488__$1);
var G__22495 = cljs.core.chunk_rest.call(null,seq__22262_22488__$1);
var G__22496 = c__21266__auto___22490;
var G__22497 = cljs.core.count.call(null,c__21266__auto___22490);
var G__22498 = (0);
seq__22262_22453 = G__22495;
chunk__22263_22454 = G__22496;
count__22264_22455 = G__22497;
i__22265_22456 = G__22498;
continue;
} else {
var vec__22269_22503 = cljs.core.first.call(null,seq__22262_22488__$1);
var col_22504 = cljs.core.nth.call(null,vec__22269_22503,(0),null);
var infos_22505 = cljs.core.nth.call(null,vec__22269_22503,(1),null);
encode_cols.call(null,infos_22505,source_idx_22427,line_22447,col_22504);

var G__22509 = cljs.core.next.call(null,seq__22262_22488__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22262_22453 = G__22509;
chunk__22263_22454 = G__22510;
count__22264_22455 = G__22511;
i__22265_22456 = G__22512;
continue;
}
} else {
}
}
break;
}

var G__22517 = seq__22255_22436;
var G__22518 = chunk__22256_22437;
var G__22519 = count__22257_22438;
var G__22520 = (i__22258_22439 + (1));
seq__22255_22436 = G__22517;
chunk__22256_22437 = G__22518;
count__22257_22438 = G__22519;
i__22258_22439 = G__22520;
continue;
} else {
var temp__4657__auto___22522__$1 = cljs.core.seq.call(null,seq__22255_22436);
if(temp__4657__auto___22522__$1){
var seq__22255_22524__$1 = temp__4657__auto___22522__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22255_22524__$1)){
var c__21266__auto___22530 = cljs.core.chunk_first.call(null,seq__22255_22524__$1);
var G__22531 = cljs.core.chunk_rest.call(null,seq__22255_22524__$1);
var G__22532 = c__21266__auto___22530;
var G__22533 = cljs.core.count.call(null,c__21266__auto___22530);
var G__22534 = (0);
seq__22255_22436 = G__22531;
chunk__22256_22437 = G__22532;
count__22257_22438 = G__22533;
i__22258_22439 = G__22534;
continue;
} else {
var vec__22272_22538 = cljs.core.first.call(null,seq__22255_22524__$1);
var line_22539 = cljs.core.nth.call(null,vec__22272_22538,(0),null);
var cols_22540 = cljs.core.nth.call(null,vec__22272_22538,(1),null);
var seq__22275_22545 = cljs.core.seq.call(null,cols_22540);
var chunk__22276_22546 = null;
var count__22277_22547 = (0);
var i__22278_22548 = (0);
while(true){
if((i__22278_22548 < count__22277_22547)){
var vec__22279_22549 = cljs.core._nth.call(null,chunk__22276_22546,i__22278_22548);
var col_22550 = cljs.core.nth.call(null,vec__22279_22549,(0),null);
var infos_22551 = cljs.core.nth.call(null,vec__22279_22549,(1),null);
encode_cols.call(null,infos_22551,source_idx_22427,line_22539,col_22550);

var G__22552 = seq__22275_22545;
var G__22553 = chunk__22276_22546;
var G__22554 = count__22277_22547;
var G__22555 = (i__22278_22548 + (1));
seq__22275_22545 = G__22552;
chunk__22276_22546 = G__22553;
count__22277_22547 = G__22554;
i__22278_22548 = G__22555;
continue;
} else {
var temp__4657__auto___22556__$2 = cljs.core.seq.call(null,seq__22275_22545);
if(temp__4657__auto___22556__$2){
var seq__22275_22557__$1 = temp__4657__auto___22556__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22275_22557__$1)){
var c__21266__auto___22558 = cljs.core.chunk_first.call(null,seq__22275_22557__$1);
var G__22559 = cljs.core.chunk_rest.call(null,seq__22275_22557__$1);
var G__22560 = c__21266__auto___22558;
var G__22561 = cljs.core.count.call(null,c__21266__auto___22558);
var G__22562 = (0);
seq__22275_22545 = G__22559;
chunk__22276_22546 = G__22560;
count__22277_22547 = G__22561;
i__22278_22548 = G__22562;
continue;
} else {
var vec__22285_22563 = cljs.core.first.call(null,seq__22275_22557__$1);
var col_22564 = cljs.core.nth.call(null,vec__22285_22563,(0),null);
var infos_22565 = cljs.core.nth.call(null,vec__22285_22563,(1),null);
encode_cols.call(null,infos_22565,source_idx_22427,line_22539,col_22564);

var G__22572 = cljs.core.next.call(null,seq__22275_22557__$1);
var G__22573 = null;
var G__22574 = (0);
var G__22575 = (0);
seq__22275_22545 = G__22572;
chunk__22276_22546 = G__22573;
count__22277_22547 = G__22574;
i__22278_22548 = G__22575;
continue;
}
} else {
}
}
break;
}

var G__22576 = cljs.core.next.call(null,seq__22255_22524__$1);
var G__22577 = null;
var G__22578 = (0);
var G__22579 = (0);
seq__22255_22436 = G__22576;
chunk__22256_22437 = G__22577;
count__22257_22438 = G__22578;
i__22258_22439 = G__22579;
continue;
}
} else {
}
}
break;
}

var G__22582 = cljs.core.next.call(null,seq__22206_22413__$1);
var G__22583 = null;
var G__22584 = (0);
var G__22585 = (0);
seq__22206_22311 = G__22582;
chunk__22207_22312 = G__22583;
count__22208_22313 = G__22584;
i__22209_22314 = G__22585;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22288 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22089_SHARP_){
return [cljs.core.str(p1__22089_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22090_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22090_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22091_SHARP_){
return clojure.string.join.call(null,",",p1__22091_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22289 = G__22288;
goog.object.set(G__22289,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22289;
} else {
return G__22288;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__22602 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__22602,(0),null);
var col_map = cljs.core.nth.call(null,vec__22602,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__22605 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__22605,(0),null);
var infos = cljs.core.nth.call(null,vec__22605,(1),null);
var G__22617 = cljs.core.next.call(null,col_map_seq);
var G__22618 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22605,col,infos,vec__22602,line,col_map){
return (function (v,p__22608){
var map__22609 = p__22608;
var map__22609__$1 = ((((!((map__22609 == null)))?((((map__22609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22609):map__22609);
var gline = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22605,col,infos,vec__22602,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__22617;
new_cols = G__22618;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__22619 = cljs.core.next.call(null,line_map_seq);
var G__22620 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__22619;
new_lines = G__22620;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__22699_22767 = cljs.core.seq.call(null,reverse_map);
var chunk__22700_22768 = null;
var count__22701_22769 = (0);
var i__22702_22770 = (0);
while(true){
if((i__22702_22770 < count__22701_22769)){
var vec__22703_22771 = cljs.core._nth.call(null,chunk__22700_22768,i__22702_22770);
var line_22772 = cljs.core.nth.call(null,vec__22703_22771,(0),null);
var columns_22773 = cljs.core.nth.call(null,vec__22703_22771,(1),null);
var seq__22706_22774 = cljs.core.seq.call(null,columns_22773);
var chunk__22707_22775 = null;
var count__22708_22776 = (0);
var i__22709_22777 = (0);
while(true){
if((i__22709_22777 < count__22708_22776)){
var vec__22710_22778 = cljs.core._nth.call(null,chunk__22707_22775,i__22709_22777);
var column_22779 = cljs.core.nth.call(null,vec__22710_22778,(0),null);
var column_info_22780 = cljs.core.nth.call(null,vec__22710_22778,(1),null);
var seq__22713_22781 = cljs.core.seq.call(null,column_info_22780);
var chunk__22714_22782 = null;
var count__22715_22783 = (0);
var i__22716_22784 = (0);
while(true){
if((i__22716_22784 < count__22715_22783)){
var map__22717_22785 = cljs.core._nth.call(null,chunk__22714_22782,i__22716_22784);
var map__22717_22786__$1 = ((((!((map__22717_22785 == null)))?((((map__22717_22785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22717_22785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22717_22785):map__22717_22785);
var gline_22787 = cljs.core.get.call(null,map__22717_22786__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22788 = cljs.core.get.call(null,map__22717_22786__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22789 = cljs.core.get.call(null,map__22717_22786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22787], null),cljs.core.fnil.call(null,((function (seq__22713_22781,chunk__22714_22782,count__22715_22783,i__22716_22784,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22717_22785,map__22717_22786__$1,gline_22787,gcol_22788,name_22789,vec__22710_22778,column_22779,column_info_22780,vec__22703_22771,line_22772,columns_22773,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22788], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22772,new cljs.core.Keyword(null,"col","col",-1959363084),column_22779,new cljs.core.Keyword(null,"name","name",1843675177),name_22789], null));
});})(seq__22713_22781,chunk__22714_22782,count__22715_22783,i__22716_22784,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22717_22785,map__22717_22786__$1,gline_22787,gcol_22788,name_22789,vec__22710_22778,column_22779,column_info_22780,vec__22703_22771,line_22772,columns_22773,inverted))
,cljs.core.sorted_map.call(null)));

var G__22790 = seq__22713_22781;
var G__22791 = chunk__22714_22782;
var G__22792 = count__22715_22783;
var G__22793 = (i__22716_22784 + (1));
seq__22713_22781 = G__22790;
chunk__22714_22782 = G__22791;
count__22715_22783 = G__22792;
i__22716_22784 = G__22793;
continue;
} else {
var temp__4657__auto___22794 = cljs.core.seq.call(null,seq__22713_22781);
if(temp__4657__auto___22794){
var seq__22713_22795__$1 = temp__4657__auto___22794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22713_22795__$1)){
var c__21266__auto___22796 = cljs.core.chunk_first.call(null,seq__22713_22795__$1);
var G__22797 = cljs.core.chunk_rest.call(null,seq__22713_22795__$1);
var G__22798 = c__21266__auto___22796;
var G__22799 = cljs.core.count.call(null,c__21266__auto___22796);
var G__22800 = (0);
seq__22713_22781 = G__22797;
chunk__22714_22782 = G__22798;
count__22715_22783 = G__22799;
i__22716_22784 = G__22800;
continue;
} else {
var map__22719_22803 = cljs.core.first.call(null,seq__22713_22795__$1);
var map__22719_22804__$1 = ((((!((map__22719_22803 == null)))?((((map__22719_22803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22719_22803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22719_22803):map__22719_22803);
var gline_22805 = cljs.core.get.call(null,map__22719_22804__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22806 = cljs.core.get.call(null,map__22719_22804__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22807 = cljs.core.get.call(null,map__22719_22804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22805], null),cljs.core.fnil.call(null,((function (seq__22713_22781,chunk__22714_22782,count__22715_22783,i__22716_22784,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22719_22803,map__22719_22804__$1,gline_22805,gcol_22806,name_22807,seq__22713_22795__$1,temp__4657__auto___22794,vec__22710_22778,column_22779,column_info_22780,vec__22703_22771,line_22772,columns_22773,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22806], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22772,new cljs.core.Keyword(null,"col","col",-1959363084),column_22779,new cljs.core.Keyword(null,"name","name",1843675177),name_22807], null));
});})(seq__22713_22781,chunk__22714_22782,count__22715_22783,i__22716_22784,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22719_22803,map__22719_22804__$1,gline_22805,gcol_22806,name_22807,seq__22713_22795__$1,temp__4657__auto___22794,vec__22710_22778,column_22779,column_info_22780,vec__22703_22771,line_22772,columns_22773,inverted))
,cljs.core.sorted_map.call(null)));

var G__22812 = cljs.core.next.call(null,seq__22713_22795__$1);
var G__22813 = null;
var G__22814 = (0);
var G__22815 = (0);
seq__22713_22781 = G__22812;
chunk__22714_22782 = G__22813;
count__22715_22783 = G__22814;
i__22716_22784 = G__22815;
continue;
}
} else {
}
}
break;
}

var G__22818 = seq__22706_22774;
var G__22819 = chunk__22707_22775;
var G__22820 = count__22708_22776;
var G__22821 = (i__22709_22777 + (1));
seq__22706_22774 = G__22818;
chunk__22707_22775 = G__22819;
count__22708_22776 = G__22820;
i__22709_22777 = G__22821;
continue;
} else {
var temp__4657__auto___22824 = cljs.core.seq.call(null,seq__22706_22774);
if(temp__4657__auto___22824){
var seq__22706_22825__$1 = temp__4657__auto___22824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22706_22825__$1)){
var c__21266__auto___22826 = cljs.core.chunk_first.call(null,seq__22706_22825__$1);
var G__22827 = cljs.core.chunk_rest.call(null,seq__22706_22825__$1);
var G__22828 = c__21266__auto___22826;
var G__22829 = cljs.core.count.call(null,c__21266__auto___22826);
var G__22830 = (0);
seq__22706_22774 = G__22827;
chunk__22707_22775 = G__22828;
count__22708_22776 = G__22829;
i__22709_22777 = G__22830;
continue;
} else {
var vec__22721_22834 = cljs.core.first.call(null,seq__22706_22825__$1);
var column_22835 = cljs.core.nth.call(null,vec__22721_22834,(0),null);
var column_info_22836 = cljs.core.nth.call(null,vec__22721_22834,(1),null);
var seq__22724_22841 = cljs.core.seq.call(null,column_info_22836);
var chunk__22725_22842 = null;
var count__22726_22843 = (0);
var i__22727_22844 = (0);
while(true){
if((i__22727_22844 < count__22726_22843)){
var map__22728_22849 = cljs.core._nth.call(null,chunk__22725_22842,i__22727_22844);
var map__22728_22850__$1 = ((((!((map__22728_22849 == null)))?((((map__22728_22849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22728_22849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22728_22849):map__22728_22849);
var gline_22851 = cljs.core.get.call(null,map__22728_22850__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22852 = cljs.core.get.call(null,map__22728_22850__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22853 = cljs.core.get.call(null,map__22728_22850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22851], null),cljs.core.fnil.call(null,((function (seq__22724_22841,chunk__22725_22842,count__22726_22843,i__22727_22844,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22728_22849,map__22728_22850__$1,gline_22851,gcol_22852,name_22853,vec__22721_22834,column_22835,column_info_22836,seq__22706_22825__$1,temp__4657__auto___22824,vec__22703_22771,line_22772,columns_22773,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22852], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22772,new cljs.core.Keyword(null,"col","col",-1959363084),column_22835,new cljs.core.Keyword(null,"name","name",1843675177),name_22853], null));
});})(seq__22724_22841,chunk__22725_22842,count__22726_22843,i__22727_22844,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22728_22849,map__22728_22850__$1,gline_22851,gcol_22852,name_22853,vec__22721_22834,column_22835,column_info_22836,seq__22706_22825__$1,temp__4657__auto___22824,vec__22703_22771,line_22772,columns_22773,inverted))
,cljs.core.sorted_map.call(null)));

var G__22869 = seq__22724_22841;
var G__22870 = chunk__22725_22842;
var G__22871 = count__22726_22843;
var G__22872 = (i__22727_22844 + (1));
seq__22724_22841 = G__22869;
chunk__22725_22842 = G__22870;
count__22726_22843 = G__22871;
i__22727_22844 = G__22872;
continue;
} else {
var temp__4657__auto___22876__$1 = cljs.core.seq.call(null,seq__22724_22841);
if(temp__4657__auto___22876__$1){
var seq__22724_22877__$1 = temp__4657__auto___22876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22724_22877__$1)){
var c__21266__auto___22878 = cljs.core.chunk_first.call(null,seq__22724_22877__$1);
var G__22879 = cljs.core.chunk_rest.call(null,seq__22724_22877__$1);
var G__22880 = c__21266__auto___22878;
var G__22881 = cljs.core.count.call(null,c__21266__auto___22878);
var G__22882 = (0);
seq__22724_22841 = G__22879;
chunk__22725_22842 = G__22880;
count__22726_22843 = G__22881;
i__22727_22844 = G__22882;
continue;
} else {
var map__22730_22887 = cljs.core.first.call(null,seq__22724_22877__$1);
var map__22730_22888__$1 = ((((!((map__22730_22887 == null)))?((((map__22730_22887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22730_22887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22730_22887):map__22730_22887);
var gline_22889 = cljs.core.get.call(null,map__22730_22888__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22890 = cljs.core.get.call(null,map__22730_22888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22891 = cljs.core.get.call(null,map__22730_22888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22889], null),cljs.core.fnil.call(null,((function (seq__22724_22841,chunk__22725_22842,count__22726_22843,i__22727_22844,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22730_22887,map__22730_22888__$1,gline_22889,gcol_22890,name_22891,seq__22724_22877__$1,temp__4657__auto___22876__$1,vec__22721_22834,column_22835,column_info_22836,seq__22706_22825__$1,temp__4657__auto___22824,vec__22703_22771,line_22772,columns_22773,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22890], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22772,new cljs.core.Keyword(null,"col","col",-1959363084),column_22835,new cljs.core.Keyword(null,"name","name",1843675177),name_22891], null));
});})(seq__22724_22841,chunk__22725_22842,count__22726_22843,i__22727_22844,seq__22706_22774,chunk__22707_22775,count__22708_22776,i__22709_22777,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22730_22887,map__22730_22888__$1,gline_22889,gcol_22890,name_22891,seq__22724_22877__$1,temp__4657__auto___22876__$1,vec__22721_22834,column_22835,column_info_22836,seq__22706_22825__$1,temp__4657__auto___22824,vec__22703_22771,line_22772,columns_22773,inverted))
,cljs.core.sorted_map.call(null)));

var G__22899 = cljs.core.next.call(null,seq__22724_22877__$1);
var G__22900 = null;
var G__22901 = (0);
var G__22902 = (0);
seq__22724_22841 = G__22899;
chunk__22725_22842 = G__22900;
count__22726_22843 = G__22901;
i__22727_22844 = G__22902;
continue;
}
} else {
}
}
break;
}

var G__22913 = cljs.core.next.call(null,seq__22706_22825__$1);
var G__22914 = null;
var G__22915 = (0);
var G__22916 = (0);
seq__22706_22774 = G__22913;
chunk__22707_22775 = G__22914;
count__22708_22776 = G__22915;
i__22709_22777 = G__22916;
continue;
}
} else {
}
}
break;
}

var G__22918 = seq__22699_22767;
var G__22919 = chunk__22700_22768;
var G__22920 = count__22701_22769;
var G__22921 = (i__22702_22770 + (1));
seq__22699_22767 = G__22918;
chunk__22700_22768 = G__22919;
count__22701_22769 = G__22920;
i__22702_22770 = G__22921;
continue;
} else {
var temp__4657__auto___22925 = cljs.core.seq.call(null,seq__22699_22767);
if(temp__4657__auto___22925){
var seq__22699_22927__$1 = temp__4657__auto___22925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22699_22927__$1)){
var c__21266__auto___22929 = cljs.core.chunk_first.call(null,seq__22699_22927__$1);
var G__22930 = cljs.core.chunk_rest.call(null,seq__22699_22927__$1);
var G__22931 = c__21266__auto___22929;
var G__22932 = cljs.core.count.call(null,c__21266__auto___22929);
var G__22933 = (0);
seq__22699_22767 = G__22930;
chunk__22700_22768 = G__22931;
count__22701_22769 = G__22932;
i__22702_22770 = G__22933;
continue;
} else {
var vec__22735_22936 = cljs.core.first.call(null,seq__22699_22927__$1);
var line_22937 = cljs.core.nth.call(null,vec__22735_22936,(0),null);
var columns_22938 = cljs.core.nth.call(null,vec__22735_22936,(1),null);
var seq__22739_22945 = cljs.core.seq.call(null,columns_22938);
var chunk__22740_22946 = null;
var count__22741_22947 = (0);
var i__22742_22948 = (0);
while(true){
if((i__22742_22948 < count__22741_22947)){
var vec__22743_22950 = cljs.core._nth.call(null,chunk__22740_22946,i__22742_22948);
var column_22951 = cljs.core.nth.call(null,vec__22743_22950,(0),null);
var column_info_22952 = cljs.core.nth.call(null,vec__22743_22950,(1),null);
var seq__22746_22957 = cljs.core.seq.call(null,column_info_22952);
var chunk__22747_22958 = null;
var count__22748_22959 = (0);
var i__22749_22960 = (0);
while(true){
if((i__22749_22960 < count__22748_22959)){
var map__22750_22961 = cljs.core._nth.call(null,chunk__22747_22958,i__22749_22960);
var map__22750_22962__$1 = ((((!((map__22750_22961 == null)))?((((map__22750_22961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22750_22961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22750_22961):map__22750_22961);
var gline_22963 = cljs.core.get.call(null,map__22750_22962__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22964 = cljs.core.get.call(null,map__22750_22962__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22965 = cljs.core.get.call(null,map__22750_22962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22963], null),cljs.core.fnil.call(null,((function (seq__22746_22957,chunk__22747_22958,count__22748_22959,i__22749_22960,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22750_22961,map__22750_22962__$1,gline_22963,gcol_22964,name_22965,vec__22743_22950,column_22951,column_info_22952,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22964], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22937,new cljs.core.Keyword(null,"col","col",-1959363084),column_22951,new cljs.core.Keyword(null,"name","name",1843675177),name_22965], null));
});})(seq__22746_22957,chunk__22747_22958,count__22748_22959,i__22749_22960,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22750_22961,map__22750_22962__$1,gline_22963,gcol_22964,name_22965,vec__22743_22950,column_22951,column_info_22952,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted))
,cljs.core.sorted_map.call(null)));

var G__22991 = seq__22746_22957;
var G__22992 = chunk__22747_22958;
var G__22993 = count__22748_22959;
var G__22994 = (i__22749_22960 + (1));
seq__22746_22957 = G__22991;
chunk__22747_22958 = G__22992;
count__22748_22959 = G__22993;
i__22749_22960 = G__22994;
continue;
} else {
var temp__4657__auto___22997__$1 = cljs.core.seq.call(null,seq__22746_22957);
if(temp__4657__auto___22997__$1){
var seq__22746_23001__$1 = temp__4657__auto___22997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22746_23001__$1)){
var c__21266__auto___23004 = cljs.core.chunk_first.call(null,seq__22746_23001__$1);
var G__23005 = cljs.core.chunk_rest.call(null,seq__22746_23001__$1);
var G__23006 = c__21266__auto___23004;
var G__23007 = cljs.core.count.call(null,c__21266__auto___23004);
var G__23008 = (0);
seq__22746_22957 = G__23005;
chunk__22747_22958 = G__23006;
count__22748_22959 = G__23007;
i__22749_22960 = G__23008;
continue;
} else {
var map__22754_23010 = cljs.core.first.call(null,seq__22746_23001__$1);
var map__22754_23011__$1 = ((((!((map__22754_23010 == null)))?((((map__22754_23010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22754_23010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754_23010):map__22754_23010);
var gline_23012 = cljs.core.get.call(null,map__22754_23011__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23013 = cljs.core.get.call(null,map__22754_23011__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23014 = cljs.core.get.call(null,map__22754_23011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23012], null),cljs.core.fnil.call(null,((function (seq__22746_22957,chunk__22747_22958,count__22748_22959,i__22749_22960,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22754_23010,map__22754_23011__$1,gline_23012,gcol_23013,name_23014,seq__22746_23001__$1,temp__4657__auto___22997__$1,vec__22743_22950,column_22951,column_info_22952,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23013], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22937,new cljs.core.Keyword(null,"col","col",-1959363084),column_22951,new cljs.core.Keyword(null,"name","name",1843675177),name_23014], null));
});})(seq__22746_22957,chunk__22747_22958,count__22748_22959,i__22749_22960,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22754_23010,map__22754_23011__$1,gline_23012,gcol_23013,name_23014,seq__22746_23001__$1,temp__4657__auto___22997__$1,vec__22743_22950,column_22951,column_info_22952,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted))
,cljs.core.sorted_map.call(null)));

var G__23033 = cljs.core.next.call(null,seq__22746_23001__$1);
var G__23034 = null;
var G__23035 = (0);
var G__23036 = (0);
seq__22746_22957 = G__23033;
chunk__22747_22958 = G__23034;
count__22748_22959 = G__23035;
i__22749_22960 = G__23036;
continue;
}
} else {
}
}
break;
}

var G__23037 = seq__22739_22945;
var G__23038 = chunk__22740_22946;
var G__23039 = count__22741_22947;
var G__23040 = (i__22742_22948 + (1));
seq__22739_22945 = G__23037;
chunk__22740_22946 = G__23038;
count__22741_22947 = G__23039;
i__22742_22948 = G__23040;
continue;
} else {
var temp__4657__auto___23050__$1 = cljs.core.seq.call(null,seq__22739_22945);
if(temp__4657__auto___23050__$1){
var seq__22739_23051__$1 = temp__4657__auto___23050__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739_23051__$1)){
var c__21266__auto___23052 = cljs.core.chunk_first.call(null,seq__22739_23051__$1);
var G__23053 = cljs.core.chunk_rest.call(null,seq__22739_23051__$1);
var G__23054 = c__21266__auto___23052;
var G__23055 = cljs.core.count.call(null,c__21266__auto___23052);
var G__23056 = (0);
seq__22739_22945 = G__23053;
chunk__22740_22946 = G__23054;
count__22741_22947 = G__23055;
i__22742_22948 = G__23056;
continue;
} else {
var vec__22756_23058 = cljs.core.first.call(null,seq__22739_23051__$1);
var column_23059 = cljs.core.nth.call(null,vec__22756_23058,(0),null);
var column_info_23060 = cljs.core.nth.call(null,vec__22756_23058,(1),null);
var seq__22759_23063 = cljs.core.seq.call(null,column_info_23060);
var chunk__22760_23064 = null;
var count__22761_23065 = (0);
var i__22762_23066 = (0);
while(true){
if((i__22762_23066 < count__22761_23065)){
var map__22763_23067 = cljs.core._nth.call(null,chunk__22760_23064,i__22762_23066);
var map__22763_23068__$1 = ((((!((map__22763_23067 == null)))?((((map__22763_23067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22763_23067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22763_23067):map__22763_23067);
var gline_23069 = cljs.core.get.call(null,map__22763_23068__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23070 = cljs.core.get.call(null,map__22763_23068__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23071 = cljs.core.get.call(null,map__22763_23068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23069], null),cljs.core.fnil.call(null,((function (seq__22759_23063,chunk__22760_23064,count__22761_23065,i__22762_23066,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22763_23067,map__22763_23068__$1,gline_23069,gcol_23070,name_23071,vec__22756_23058,column_23059,column_info_23060,seq__22739_23051__$1,temp__4657__auto___23050__$1,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23070], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22937,new cljs.core.Keyword(null,"col","col",-1959363084),column_23059,new cljs.core.Keyword(null,"name","name",1843675177),name_23071], null));
});})(seq__22759_23063,chunk__22760_23064,count__22761_23065,i__22762_23066,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22763_23067,map__22763_23068__$1,gline_23069,gcol_23070,name_23071,vec__22756_23058,column_23059,column_info_23060,seq__22739_23051__$1,temp__4657__auto___23050__$1,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted))
,cljs.core.sorted_map.call(null)));

var G__23117 = seq__22759_23063;
var G__23118 = chunk__22760_23064;
var G__23119 = count__22761_23065;
var G__23120 = (i__22762_23066 + (1));
seq__22759_23063 = G__23117;
chunk__22760_23064 = G__23118;
count__22761_23065 = G__23119;
i__22762_23066 = G__23120;
continue;
} else {
var temp__4657__auto___23130__$2 = cljs.core.seq.call(null,seq__22759_23063);
if(temp__4657__auto___23130__$2){
var seq__22759_23136__$1 = temp__4657__auto___23130__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22759_23136__$1)){
var c__21266__auto___23138 = cljs.core.chunk_first.call(null,seq__22759_23136__$1);
var G__23139 = cljs.core.chunk_rest.call(null,seq__22759_23136__$1);
var G__23140 = c__21266__auto___23138;
var G__23141 = cljs.core.count.call(null,c__21266__auto___23138);
var G__23142 = (0);
seq__22759_23063 = G__23139;
chunk__22760_23064 = G__23140;
count__22761_23065 = G__23141;
i__22762_23066 = G__23142;
continue;
} else {
var map__22765_23143 = cljs.core.first.call(null,seq__22759_23136__$1);
var map__22765_23144__$1 = ((((!((map__22765_23143 == null)))?((((map__22765_23143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22765_23143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765_23143):map__22765_23143);
var gline_23145 = cljs.core.get.call(null,map__22765_23144__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23146 = cljs.core.get.call(null,map__22765_23144__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23147 = cljs.core.get.call(null,map__22765_23144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23145], null),cljs.core.fnil.call(null,((function (seq__22759_23063,chunk__22760_23064,count__22761_23065,i__22762_23066,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22765_23143,map__22765_23144__$1,gline_23145,gcol_23146,name_23147,seq__22759_23136__$1,temp__4657__auto___23130__$2,vec__22756_23058,column_23059,column_info_23060,seq__22739_23051__$1,temp__4657__auto___23050__$1,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22937,new cljs.core.Keyword(null,"col","col",-1959363084),column_23059,new cljs.core.Keyword(null,"name","name",1843675177),name_23147], null));
});})(seq__22759_23063,chunk__22760_23064,count__22761_23065,i__22762_23066,seq__22739_22945,chunk__22740_22946,count__22741_22947,i__22742_22948,seq__22699_22767,chunk__22700_22768,count__22701_22769,i__22702_22770,map__22765_23143,map__22765_23144__$1,gline_23145,gcol_23146,name_23147,seq__22759_23136__$1,temp__4657__auto___23130__$2,vec__22756_23058,column_23059,column_info_23060,seq__22739_23051__$1,temp__4657__auto___23050__$1,vec__22735_22936,line_22937,columns_22938,seq__22699_22927__$1,temp__4657__auto___22925,inverted))
,cljs.core.sorted_map.call(null)));

var G__23178 = cljs.core.next.call(null,seq__22759_23136__$1);
var G__23179 = null;
var G__23180 = (0);
var G__23181 = (0);
seq__22759_23063 = G__23178;
chunk__22760_23064 = G__23179;
count__22761_23065 = G__23180;
i__22762_23066 = G__23181;
continue;
}
} else {
}
}
break;
}

var G__23188 = cljs.core.next.call(null,seq__22739_23051__$1);
var G__23189 = null;
var G__23190 = (0);
var G__23191 = (0);
seq__22739_22945 = G__23188;
chunk__22740_22946 = G__23189;
count__22741_22947 = G__23190;
i__22742_22948 = G__23191;
continue;
}
} else {
}
}
break;
}

var G__23193 = cljs.core.next.call(null,seq__22699_22927__$1);
var G__23194 = null;
var G__23195 = (0);
var G__23196 = (0);
seq__22699_22767 = G__23193;
chunk__22700_22768 = G__23194;
count__22701_22769 = G__23195;
i__22702_22770 = G__23196;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1522181419691