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
return cljs.core.reduce.call(null,(function (m,p__21922){
var vec__21923 = p__21922;
var i = cljs.core.nth.call(null,vec__21923,(0),null);
var v = cljs.core.nth.call(null,vec__21923,(1),null);
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
var vec__21954 = seg;
var gcol = cljs.core.nth.call(null,vec__21954,(0),null);
var source = cljs.core.nth.call(null,vec__21954,(1),null);
var line = cljs.core.nth.call(null,vec__21954,(2),null);
var col = cljs.core.nth.call(null,vec__21954,(3),null);
var name = cljs.core.nth.call(null,vec__21954,(4),null);
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
var vec__21977 = seg;
var gcol = cljs.core.nth.call(null,vec__21977,(0),null);
var source = cljs.core.nth.call(null,vec__21977,(1),null);
var line = cljs.core.nth.call(null,vec__21977,(2),null);
var col = cljs.core.nth.call(null,vec__21977,(3),null);
var name = cljs.core.nth.call(null,vec__21977,(4),null);
var vec__21980 = relseg;
var rgcol = cljs.core.nth.call(null,vec__21980,(0),null);
var rsource = cljs.core.nth.call(null,vec__21980,(1),null);
var rline = cljs.core.nth.call(null,vec__21980,(2),null);
var rcol = cljs.core.nth.call(null,vec__21980,(3),null);
var rname = cljs.core.nth.call(null,vec__21980,(4),null);
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
var map__21997 = segmap;
var map__21997__$1 = ((((!((map__21997 == null)))?((((map__21997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21997):map__21997);
var gcol = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__21997,map__21997__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args22011 = [];
var len__21530__auto___22021 = arguments.length;
var i__21531__auto___22022 = (0);
while(true){
if((i__21531__auto___22022 < len__21530__auto___22021)){
args22011.push((arguments[i__21531__auto___22022]));

var G__22023 = (i__21531__auto___22022 + (1));
i__21531__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var G__22015 = args22011.length;
switch (G__22015) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22011.length)].join('')));

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
var vec__22018 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22033 = cljs.core.next.call(null,segs__$1);
var G__22034 = nrelseg;
var G__22035 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22033;
relseg__$1 = G__22034;
result__$1 = G__22035;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22018,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22018,(1),null);
var G__22038 = (gline + (1));
var G__22039 = cljs.core.next.call(null,lines__$1);
var G__22040 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22041 = result__$1;
gline = G__22038;
lines__$1 = G__22039;
relseg = G__22040;
result = G__22041;
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
var map__22047 = segmap;
var map__22047__$1 = ((((!((map__22047 == null)))?((((map__22047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22047):map__22047);
var gcol = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__22047,map__22047__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__22047,map__22047__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__22042_SHARP_){
return cljs.core.conj.call(null,p1__22042_SHARP_,d__$1);
});})(map__22047,map__22047__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22047,map__22047__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args22055 = [];
var len__21530__auto___22066 = arguments.length;
var i__21531__auto___22067 = (0);
while(true){
if((i__21531__auto___22067 < len__21530__auto___22066)){
args22055.push((arguments[i__21531__auto___22067]));

var G__22068 = (i__21531__auto___22067 + (1));
i__21531__auto___22067 = G__22068;
continue;
} else {
}
break;
}

var G__22058 = args22055.length;
switch (G__22058) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22055.length)].join('')));

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
var vec__22063 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22071 = cljs.core.next.call(null,segs__$1);
var G__22072 = nrelseg;
var G__22073 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22071;
relseg__$1 = G__22072;
result__$1 = G__22073;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22063,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22063,(1),null);
var G__22075 = (gline + (1));
var G__22076 = cljs.core.next.call(null,lines__$1);
var G__22077 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22078 = result__$1;
gline = G__22075;
lines__$1 = G__22076;
relseg = G__22077;
result = G__22078;
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
return (function (p__22091){
var vec__22092 = p__22091;
var _ = cljs.core.nth.call(null,vec__22092,(0),null);
var source = cljs.core.nth.call(null,vec__22092,(1),null);
var line = cljs.core.nth.call(null,vec__22092,(2),null);
var col = cljs.core.nth.call(null,vec__22092,(3),null);
var name = cljs.core.nth.call(null,vec__22092,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__22095){
var vec__22096 = p__22095;
var gcol = cljs.core.nth.call(null,vec__22096,(0),null);
var sidx = cljs.core.nth.call(null,vec__22096,(1),null);
var line = cljs.core.nth.call(null,vec__22096,(2),null);
var col = cljs.core.nth.call(null,vec__22096,(3),null);
var name = cljs.core.nth.call(null,vec__22096,(4),null);
var seg = vec__22096;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__22096,gcol,sidx,line,col,name,seg,relseg){
return (function (p__22099){
var vec__22100 = p__22099;
var _ = cljs.core.nth.call(null,vec__22100,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22100,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22100,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22100,(3),null);
var lname = cljs.core.nth.call(null,vec__22100,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__22096,gcol,sidx,line,col,name,seg,relseg))
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
var seq__22226 = cljs.core.seq.call(null,infos);
var chunk__22227 = null;
var count__22228 = (0);
var i__22229 = (0);
while(true){
if((i__22229 < count__22228)){
var info = cljs.core._nth.call(null,chunk__22227,i__22229);
var segv_22380 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22381 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22382 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22381 > (lc_22382 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22226,chunk__22227,count__22228,i__22229,segv_22380,gline_22381,lc_22382,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22381 - (lc_22382 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22380], null));
});})(seq__22226,chunk__22227,count__22228,i__22229,segv_22380,gline_22381,lc_22382,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22226,chunk__22227,count__22228,i__22229,segv_22380,gline_22381,lc_22382,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22381], null),cljs.core.conj,segv_22380);
});})(seq__22226,chunk__22227,count__22228,i__22229,segv_22380,gline_22381,lc_22382,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22388 = seq__22226;
var G__22389 = chunk__22227;
var G__22390 = count__22228;
var G__22391 = (i__22229 + (1));
seq__22226 = G__22388;
chunk__22227 = G__22389;
count__22228 = G__22390;
i__22229 = G__22391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22226);
if(temp__4657__auto__){
var seq__22226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22226__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__22226__$1);
var G__22393 = cljs.core.chunk_rest.call(null,seq__22226__$1);
var G__22394 = c__21266__auto__;
var G__22395 = cljs.core.count.call(null,c__21266__auto__);
var G__22396 = (0);
seq__22226 = G__22393;
chunk__22227 = G__22394;
count__22228 = G__22395;
i__22229 = G__22396;
continue;
} else {
var info = cljs.core.first.call(null,seq__22226__$1);
var segv_22402 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22403 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22404 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22403 > (lc_22404 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22226,chunk__22227,count__22228,i__22229,segv_22402,gline_22403,lc_22404,info,seq__22226__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22403 - (lc_22404 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22402], null));
});})(seq__22226,chunk__22227,count__22228,i__22229,segv_22402,gline_22403,lc_22404,info,seq__22226__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22226,chunk__22227,count__22228,i__22229,segv_22402,gline_22403,lc_22404,info,seq__22226__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22403], null),cljs.core.conj,segv_22402);
});})(seq__22226,chunk__22227,count__22228,i__22229,segv_22402,gline_22403,lc_22404,info,seq__22226__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22417 = cljs.core.next.call(null,seq__22226__$1);
var G__22418 = null;
var G__22419 = (0);
var G__22420 = (0);
seq__22226 = G__22417;
chunk__22227 = G__22418;
count__22228 = G__22419;
i__22229 = G__22420;
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
var seq__22232_22421 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22233_22422 = null;
var count__22234_22423 = (0);
var i__22235_22424 = (0);
while(true){
if((i__22235_22424 < count__22234_22423)){
var vec__22236_22426 = cljs.core._nth.call(null,chunk__22233_22422,i__22235_22424);
var source_idx_22427 = cljs.core.nth.call(null,vec__22236_22426,(0),null);
var vec__22239_22428 = cljs.core.nth.call(null,vec__22236_22426,(1),null);
var __22429 = cljs.core.nth.call(null,vec__22239_22428,(0),null);
var lines_22430__$1 = cljs.core.nth.call(null,vec__22239_22428,(1),null);
var seq__22242_22433 = cljs.core.seq.call(null,lines_22430__$1);
var chunk__22243_22434 = null;
var count__22244_22435 = (0);
var i__22245_22436 = (0);
while(true){
if((i__22245_22436 < count__22244_22435)){
var vec__22247_22441 = cljs.core._nth.call(null,chunk__22243_22434,i__22245_22436);
var line_22442 = cljs.core.nth.call(null,vec__22247_22441,(0),null);
var cols_22443 = cljs.core.nth.call(null,vec__22247_22441,(1),null);
var seq__22250_22447 = cljs.core.seq.call(null,cols_22443);
var chunk__22251_22448 = null;
var count__22252_22449 = (0);
var i__22253_22450 = (0);
while(true){
if((i__22253_22450 < count__22252_22449)){
var vec__22255_22451 = cljs.core._nth.call(null,chunk__22251_22448,i__22253_22450);
var col_22452 = cljs.core.nth.call(null,vec__22255_22451,(0),null);
var infos_22453 = cljs.core.nth.call(null,vec__22255_22451,(1),null);
encode_cols.call(null,infos_22453,source_idx_22427,line_22442,col_22452);

var G__22458 = seq__22250_22447;
var G__22459 = chunk__22251_22448;
var G__22460 = count__22252_22449;
var G__22461 = (i__22253_22450 + (1));
seq__22250_22447 = G__22458;
chunk__22251_22448 = G__22459;
count__22252_22449 = G__22460;
i__22253_22450 = G__22461;
continue;
} else {
var temp__4657__auto___22462 = cljs.core.seq.call(null,seq__22250_22447);
if(temp__4657__auto___22462){
var seq__22250_22463__$1 = temp__4657__auto___22462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22250_22463__$1)){
var c__21266__auto___22464 = cljs.core.chunk_first.call(null,seq__22250_22463__$1);
var G__22465 = cljs.core.chunk_rest.call(null,seq__22250_22463__$1);
var G__22466 = c__21266__auto___22464;
var G__22467 = cljs.core.count.call(null,c__21266__auto___22464);
var G__22468 = (0);
seq__22250_22447 = G__22465;
chunk__22251_22448 = G__22466;
count__22252_22449 = G__22467;
i__22253_22450 = G__22468;
continue;
} else {
var vec__22258_22469 = cljs.core.first.call(null,seq__22250_22463__$1);
var col_22470 = cljs.core.nth.call(null,vec__22258_22469,(0),null);
var infos_22471 = cljs.core.nth.call(null,vec__22258_22469,(1),null);
encode_cols.call(null,infos_22471,source_idx_22427,line_22442,col_22470);

var G__22472 = cljs.core.next.call(null,seq__22250_22463__$1);
var G__22473 = null;
var G__22474 = (0);
var G__22475 = (0);
seq__22250_22447 = G__22472;
chunk__22251_22448 = G__22473;
count__22252_22449 = G__22474;
i__22253_22450 = G__22475;
continue;
}
} else {
}
}
break;
}

var G__22476 = seq__22242_22433;
var G__22477 = chunk__22243_22434;
var G__22478 = count__22244_22435;
var G__22479 = (i__22245_22436 + (1));
seq__22242_22433 = G__22476;
chunk__22243_22434 = G__22477;
count__22244_22435 = G__22478;
i__22245_22436 = G__22479;
continue;
} else {
var temp__4657__auto___22480 = cljs.core.seq.call(null,seq__22242_22433);
if(temp__4657__auto___22480){
var seq__22242_22481__$1 = temp__4657__auto___22480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22242_22481__$1)){
var c__21266__auto___22482 = cljs.core.chunk_first.call(null,seq__22242_22481__$1);
var G__22483 = cljs.core.chunk_rest.call(null,seq__22242_22481__$1);
var G__22484 = c__21266__auto___22482;
var G__22485 = cljs.core.count.call(null,c__21266__auto___22482);
var G__22486 = (0);
seq__22242_22433 = G__22483;
chunk__22243_22434 = G__22484;
count__22244_22435 = G__22485;
i__22245_22436 = G__22486;
continue;
} else {
var vec__22261_22487 = cljs.core.first.call(null,seq__22242_22481__$1);
var line_22488 = cljs.core.nth.call(null,vec__22261_22487,(0),null);
var cols_22489 = cljs.core.nth.call(null,vec__22261_22487,(1),null);
var seq__22264_22490 = cljs.core.seq.call(null,cols_22489);
var chunk__22265_22491 = null;
var count__22266_22492 = (0);
var i__22267_22493 = (0);
while(true){
if((i__22267_22493 < count__22266_22492)){
var vec__22269_22494 = cljs.core._nth.call(null,chunk__22265_22491,i__22267_22493);
var col_22495 = cljs.core.nth.call(null,vec__22269_22494,(0),null);
var infos_22496 = cljs.core.nth.call(null,vec__22269_22494,(1),null);
encode_cols.call(null,infos_22496,source_idx_22427,line_22488,col_22495);

var G__22499 = seq__22264_22490;
var G__22500 = chunk__22265_22491;
var G__22501 = count__22266_22492;
var G__22502 = (i__22267_22493 + (1));
seq__22264_22490 = G__22499;
chunk__22265_22491 = G__22500;
count__22266_22492 = G__22501;
i__22267_22493 = G__22502;
continue;
} else {
var temp__4657__auto___22503__$1 = cljs.core.seq.call(null,seq__22264_22490);
if(temp__4657__auto___22503__$1){
var seq__22264_22504__$1 = temp__4657__auto___22503__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22264_22504__$1)){
var c__21266__auto___22505 = cljs.core.chunk_first.call(null,seq__22264_22504__$1);
var G__22506 = cljs.core.chunk_rest.call(null,seq__22264_22504__$1);
var G__22507 = c__21266__auto___22505;
var G__22508 = cljs.core.count.call(null,c__21266__auto___22505);
var G__22509 = (0);
seq__22264_22490 = G__22506;
chunk__22265_22491 = G__22507;
count__22266_22492 = G__22508;
i__22267_22493 = G__22509;
continue;
} else {
var vec__22272_22510 = cljs.core.first.call(null,seq__22264_22504__$1);
var col_22511 = cljs.core.nth.call(null,vec__22272_22510,(0),null);
var infos_22512 = cljs.core.nth.call(null,vec__22272_22510,(1),null);
encode_cols.call(null,infos_22512,source_idx_22427,line_22488,col_22511);

var G__22513 = cljs.core.next.call(null,seq__22264_22504__$1);
var G__22514 = null;
var G__22515 = (0);
var G__22516 = (0);
seq__22264_22490 = G__22513;
chunk__22265_22491 = G__22514;
count__22266_22492 = G__22515;
i__22267_22493 = G__22516;
continue;
}
} else {
}
}
break;
}

var G__22517 = cljs.core.next.call(null,seq__22242_22481__$1);
var G__22518 = null;
var G__22519 = (0);
var G__22520 = (0);
seq__22242_22433 = G__22517;
chunk__22243_22434 = G__22518;
count__22244_22435 = G__22519;
i__22245_22436 = G__22520;
continue;
}
} else {
}
}
break;
}

var G__22521 = seq__22232_22421;
var G__22522 = chunk__22233_22422;
var G__22523 = count__22234_22423;
var G__22524 = (i__22235_22424 + (1));
seq__22232_22421 = G__22521;
chunk__22233_22422 = G__22522;
count__22234_22423 = G__22523;
i__22235_22424 = G__22524;
continue;
} else {
var temp__4657__auto___22527 = cljs.core.seq.call(null,seq__22232_22421);
if(temp__4657__auto___22527){
var seq__22232_22528__$1 = temp__4657__auto___22527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22232_22528__$1)){
var c__21266__auto___22529 = cljs.core.chunk_first.call(null,seq__22232_22528__$1);
var G__22530 = cljs.core.chunk_rest.call(null,seq__22232_22528__$1);
var G__22531 = c__21266__auto___22529;
var G__22532 = cljs.core.count.call(null,c__21266__auto___22529);
var G__22533 = (0);
seq__22232_22421 = G__22530;
chunk__22233_22422 = G__22531;
count__22234_22423 = G__22532;
i__22235_22424 = G__22533;
continue;
} else {
var vec__22279_22535 = cljs.core.first.call(null,seq__22232_22528__$1);
var source_idx_22536 = cljs.core.nth.call(null,vec__22279_22535,(0),null);
var vec__22282_22537 = cljs.core.nth.call(null,vec__22279_22535,(1),null);
var __22538 = cljs.core.nth.call(null,vec__22282_22537,(0),null);
var lines_22539__$1 = cljs.core.nth.call(null,vec__22282_22537,(1),null);
var seq__22285_22540 = cljs.core.seq.call(null,lines_22539__$1);
var chunk__22286_22541 = null;
var count__22287_22542 = (0);
var i__22288_22543 = (0);
while(true){
if((i__22288_22543 < count__22287_22542)){
var vec__22290_22544 = cljs.core._nth.call(null,chunk__22286_22541,i__22288_22543);
var line_22545 = cljs.core.nth.call(null,vec__22290_22544,(0),null);
var cols_22546 = cljs.core.nth.call(null,vec__22290_22544,(1),null);
var seq__22296_22547 = cljs.core.seq.call(null,cols_22546);
var chunk__22297_22548 = null;
var count__22298_22549 = (0);
var i__22299_22550 = (0);
while(true){
if((i__22299_22550 < count__22298_22549)){
var vec__22300_22551 = cljs.core._nth.call(null,chunk__22297_22548,i__22299_22550);
var col_22552 = cljs.core.nth.call(null,vec__22300_22551,(0),null);
var infos_22553 = cljs.core.nth.call(null,vec__22300_22551,(1),null);
encode_cols.call(null,infos_22553,source_idx_22536,line_22545,col_22552);

var G__22554 = seq__22296_22547;
var G__22555 = chunk__22297_22548;
var G__22556 = count__22298_22549;
var G__22557 = (i__22299_22550 + (1));
seq__22296_22547 = G__22554;
chunk__22297_22548 = G__22555;
count__22298_22549 = G__22556;
i__22299_22550 = G__22557;
continue;
} else {
var temp__4657__auto___22558__$1 = cljs.core.seq.call(null,seq__22296_22547);
if(temp__4657__auto___22558__$1){
var seq__22296_22559__$1 = temp__4657__auto___22558__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22296_22559__$1)){
var c__21266__auto___22560 = cljs.core.chunk_first.call(null,seq__22296_22559__$1);
var G__22561 = cljs.core.chunk_rest.call(null,seq__22296_22559__$1);
var G__22562 = c__21266__auto___22560;
var G__22563 = cljs.core.count.call(null,c__21266__auto___22560);
var G__22564 = (0);
seq__22296_22547 = G__22561;
chunk__22297_22548 = G__22562;
count__22298_22549 = G__22563;
i__22299_22550 = G__22564;
continue;
} else {
var vec__22304_22565 = cljs.core.first.call(null,seq__22296_22559__$1);
var col_22566 = cljs.core.nth.call(null,vec__22304_22565,(0),null);
var infos_22567 = cljs.core.nth.call(null,vec__22304_22565,(1),null);
encode_cols.call(null,infos_22567,source_idx_22536,line_22545,col_22566);

var G__22568 = cljs.core.next.call(null,seq__22296_22559__$1);
var G__22569 = null;
var G__22570 = (0);
var G__22571 = (0);
seq__22296_22547 = G__22568;
chunk__22297_22548 = G__22569;
count__22298_22549 = G__22570;
i__22299_22550 = G__22571;
continue;
}
} else {
}
}
break;
}

var G__22572 = seq__22285_22540;
var G__22573 = chunk__22286_22541;
var G__22574 = count__22287_22542;
var G__22575 = (i__22288_22543 + (1));
seq__22285_22540 = G__22572;
chunk__22286_22541 = G__22573;
count__22287_22542 = G__22574;
i__22288_22543 = G__22575;
continue;
} else {
var temp__4657__auto___22576__$1 = cljs.core.seq.call(null,seq__22285_22540);
if(temp__4657__auto___22576__$1){
var seq__22285_22577__$1 = temp__4657__auto___22576__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22285_22577__$1)){
var c__21266__auto___22578 = cljs.core.chunk_first.call(null,seq__22285_22577__$1);
var G__22579 = cljs.core.chunk_rest.call(null,seq__22285_22577__$1);
var G__22580 = c__21266__auto___22578;
var G__22581 = cljs.core.count.call(null,c__21266__auto___22578);
var G__22582 = (0);
seq__22285_22540 = G__22579;
chunk__22286_22541 = G__22580;
count__22287_22542 = G__22581;
i__22288_22543 = G__22582;
continue;
} else {
var vec__22308_22583 = cljs.core.first.call(null,seq__22285_22577__$1);
var line_22584 = cljs.core.nth.call(null,vec__22308_22583,(0),null);
var cols_22585 = cljs.core.nth.call(null,vec__22308_22583,(1),null);
var seq__22311_22586 = cljs.core.seq.call(null,cols_22585);
var chunk__22312_22587 = null;
var count__22313_22588 = (0);
var i__22314_22589 = (0);
while(true){
if((i__22314_22589 < count__22313_22588)){
var vec__22315_22590 = cljs.core._nth.call(null,chunk__22312_22587,i__22314_22589);
var col_22591 = cljs.core.nth.call(null,vec__22315_22590,(0),null);
var infos_22592 = cljs.core.nth.call(null,vec__22315_22590,(1),null);
encode_cols.call(null,infos_22592,source_idx_22536,line_22584,col_22591);

var G__22593 = seq__22311_22586;
var G__22594 = chunk__22312_22587;
var G__22595 = count__22313_22588;
var G__22596 = (i__22314_22589 + (1));
seq__22311_22586 = G__22593;
chunk__22312_22587 = G__22594;
count__22313_22588 = G__22595;
i__22314_22589 = G__22596;
continue;
} else {
var temp__4657__auto___22597__$2 = cljs.core.seq.call(null,seq__22311_22586);
if(temp__4657__auto___22597__$2){
var seq__22311_22598__$1 = temp__4657__auto___22597__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22311_22598__$1)){
var c__21266__auto___22599 = cljs.core.chunk_first.call(null,seq__22311_22598__$1);
var G__22600 = cljs.core.chunk_rest.call(null,seq__22311_22598__$1);
var G__22601 = c__21266__auto___22599;
var G__22602 = cljs.core.count.call(null,c__21266__auto___22599);
var G__22603 = (0);
seq__22311_22586 = G__22600;
chunk__22312_22587 = G__22601;
count__22313_22588 = G__22602;
i__22314_22589 = G__22603;
continue;
} else {
var vec__22320_22604 = cljs.core.first.call(null,seq__22311_22598__$1);
var col_22605 = cljs.core.nth.call(null,vec__22320_22604,(0),null);
var infos_22606 = cljs.core.nth.call(null,vec__22320_22604,(1),null);
encode_cols.call(null,infos_22606,source_idx_22536,line_22584,col_22605);

var G__22607 = cljs.core.next.call(null,seq__22311_22598__$1);
var G__22608 = null;
var G__22609 = (0);
var G__22610 = (0);
seq__22311_22586 = G__22607;
chunk__22312_22587 = G__22608;
count__22313_22588 = G__22609;
i__22314_22589 = G__22610;
continue;
}
} else {
}
}
break;
}

var G__22611 = cljs.core.next.call(null,seq__22285_22577__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22285_22540 = G__22611;
chunk__22286_22541 = G__22612;
count__22287_22542 = G__22613;
i__22288_22543 = G__22614;
continue;
}
} else {
}
}
break;
}

var G__22615 = cljs.core.next.call(null,seq__22232_22528__$1);
var G__22616 = null;
var G__22617 = (0);
var G__22618 = (0);
seq__22232_22421 = G__22615;
chunk__22233_22422 = G__22616;
count__22234_22423 = G__22617;
i__22235_22424 = G__22618;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22324 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22123_SHARP_){
return [cljs.core.str(p1__22123_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22124_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22124_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22125_SHARP_){
return clojure.string.join.call(null,",",p1__22125_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22329 = G__22324;
goog.object.set(G__22329,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22329;
} else {
return G__22324;
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
var vec__22630 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__22630,(0),null);
var col_map = cljs.core.nth.call(null,vec__22630,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__22633 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__22633,(0),null);
var infos = cljs.core.nth.call(null,vec__22633,(1),null);
var G__22647 = cljs.core.next.call(null,col_map_seq);
var G__22648 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22633,col,infos,vec__22630,line,col_map){
return (function (v,p__22636){
var map__22637 = p__22636;
var map__22637__$1 = ((((!((map__22637 == null)))?((((map__22637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22637):map__22637);
var gline = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22633,col,infos,vec__22630,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__22647;
new_cols = G__22648;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__22657 = cljs.core.next.call(null,line_map_seq);
var G__22658 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__22657;
new_lines = G__22658;
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
var seq__22746_22846 = cljs.core.seq.call(null,reverse_map);
var chunk__22747_22847 = null;
var count__22748_22848 = (0);
var i__22749_22849 = (0);
while(true){
if((i__22749_22849 < count__22748_22848)){
var vec__22750_22850 = cljs.core._nth.call(null,chunk__22747_22847,i__22749_22849);
var line_22851 = cljs.core.nth.call(null,vec__22750_22850,(0),null);
var columns_22852 = cljs.core.nth.call(null,vec__22750_22850,(1),null);
var seq__22753_22853 = cljs.core.seq.call(null,columns_22852);
var chunk__22754_22854 = null;
var count__22755_22855 = (0);
var i__22756_22856 = (0);
while(true){
if((i__22756_22856 < count__22755_22855)){
var vec__22757_22859 = cljs.core._nth.call(null,chunk__22754_22854,i__22756_22856);
var column_22860 = cljs.core.nth.call(null,vec__22757_22859,(0),null);
var column_info_22861 = cljs.core.nth.call(null,vec__22757_22859,(1),null);
var seq__22760_22866 = cljs.core.seq.call(null,column_info_22861);
var chunk__22761_22869 = null;
var count__22762_22870 = (0);
var i__22763_22871 = (0);
while(true){
if((i__22763_22871 < count__22762_22870)){
var map__22764_22880 = cljs.core._nth.call(null,chunk__22761_22869,i__22763_22871);
var map__22764_22881__$1 = ((((!((map__22764_22880 == null)))?((((map__22764_22880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22764_22880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22764_22880):map__22764_22880);
var gline_22882 = cljs.core.get.call(null,map__22764_22881__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22883 = cljs.core.get.call(null,map__22764_22881__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22884 = cljs.core.get.call(null,map__22764_22881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22882], null),cljs.core.fnil.call(null,((function (seq__22760_22866,chunk__22761_22869,count__22762_22870,i__22763_22871,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22764_22880,map__22764_22881__$1,gline_22882,gcol_22883,name_22884,vec__22757_22859,column_22860,column_info_22861,vec__22750_22850,line_22851,columns_22852,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22883], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22851,new cljs.core.Keyword(null,"col","col",-1959363084),column_22860,new cljs.core.Keyword(null,"name","name",1843675177),name_22884], null));
});})(seq__22760_22866,chunk__22761_22869,count__22762_22870,i__22763_22871,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22764_22880,map__22764_22881__$1,gline_22882,gcol_22883,name_22884,vec__22757_22859,column_22860,column_info_22861,vec__22750_22850,line_22851,columns_22852,inverted))
,cljs.core.sorted_map.call(null)));

var G__22935 = seq__22760_22866;
var G__22936 = chunk__22761_22869;
var G__22937 = count__22762_22870;
var G__22938 = (i__22763_22871 + (1));
seq__22760_22866 = G__22935;
chunk__22761_22869 = G__22936;
count__22762_22870 = G__22937;
i__22763_22871 = G__22938;
continue;
} else {
var temp__4657__auto___22942 = cljs.core.seq.call(null,seq__22760_22866);
if(temp__4657__auto___22942){
var seq__22760_22946__$1 = temp__4657__auto___22942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22760_22946__$1)){
var c__21266__auto___22956 = cljs.core.chunk_first.call(null,seq__22760_22946__$1);
var G__22957 = cljs.core.chunk_rest.call(null,seq__22760_22946__$1);
var G__22958 = c__21266__auto___22956;
var G__22959 = cljs.core.count.call(null,c__21266__auto___22956);
var G__22960 = (0);
seq__22760_22866 = G__22957;
chunk__22761_22869 = G__22958;
count__22762_22870 = G__22959;
i__22763_22871 = G__22960;
continue;
} else {
var map__22766_22962 = cljs.core.first.call(null,seq__22760_22946__$1);
var map__22766_22963__$1 = ((((!((map__22766_22962 == null)))?((((map__22766_22962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22766_22962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766_22962):map__22766_22962);
var gline_22964 = cljs.core.get.call(null,map__22766_22963__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22965 = cljs.core.get.call(null,map__22766_22963__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22966 = cljs.core.get.call(null,map__22766_22963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22964], null),cljs.core.fnil.call(null,((function (seq__22760_22866,chunk__22761_22869,count__22762_22870,i__22763_22871,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22766_22962,map__22766_22963__$1,gline_22964,gcol_22965,name_22966,seq__22760_22946__$1,temp__4657__auto___22942,vec__22757_22859,column_22860,column_info_22861,vec__22750_22850,line_22851,columns_22852,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22965], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22851,new cljs.core.Keyword(null,"col","col",-1959363084),column_22860,new cljs.core.Keyword(null,"name","name",1843675177),name_22966], null));
});})(seq__22760_22866,chunk__22761_22869,count__22762_22870,i__22763_22871,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22766_22962,map__22766_22963__$1,gline_22964,gcol_22965,name_22966,seq__22760_22946__$1,temp__4657__auto___22942,vec__22757_22859,column_22860,column_info_22861,vec__22750_22850,line_22851,columns_22852,inverted))
,cljs.core.sorted_map.call(null)));

var G__22992 = cljs.core.next.call(null,seq__22760_22946__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22760_22866 = G__22992;
chunk__22761_22869 = G__22993;
count__22762_22870 = G__22994;
i__22763_22871 = G__22995;
continue;
}
} else {
}
}
break;
}

var G__23000 = seq__22753_22853;
var G__23001 = chunk__22754_22854;
var G__23002 = count__22755_22855;
var G__23003 = (i__22756_22856 + (1));
seq__22753_22853 = G__23000;
chunk__22754_22854 = G__23001;
count__22755_22855 = G__23002;
i__22756_22856 = G__23003;
continue;
} else {
var temp__4657__auto___23007 = cljs.core.seq.call(null,seq__22753_22853);
if(temp__4657__auto___23007){
var seq__22753_23012__$1 = temp__4657__auto___23007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22753_23012__$1)){
var c__21266__auto___23013 = cljs.core.chunk_first.call(null,seq__22753_23012__$1);
var G__23016 = cljs.core.chunk_rest.call(null,seq__22753_23012__$1);
var G__23017 = c__21266__auto___23013;
var G__23018 = cljs.core.count.call(null,c__21266__auto___23013);
var G__23019 = (0);
seq__22753_22853 = G__23016;
chunk__22754_22854 = G__23017;
count__22755_22855 = G__23018;
i__22756_22856 = G__23019;
continue;
} else {
var vec__22768_23030 = cljs.core.first.call(null,seq__22753_23012__$1);
var column_23031 = cljs.core.nth.call(null,vec__22768_23030,(0),null);
var column_info_23032 = cljs.core.nth.call(null,vec__22768_23030,(1),null);
var seq__22771_23052 = cljs.core.seq.call(null,column_info_23032);
var chunk__22772_23054 = null;
var count__22773_23055 = (0);
var i__22774_23056 = (0);
while(true){
if((i__22774_23056 < count__22773_23055)){
var map__22775_23062 = cljs.core._nth.call(null,chunk__22772_23054,i__22774_23056);
var map__22775_23063__$1 = ((((!((map__22775_23062 == null)))?((((map__22775_23062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22775_23062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775_23062):map__22775_23062);
var gline_23064 = cljs.core.get.call(null,map__22775_23063__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23065 = cljs.core.get.call(null,map__22775_23063__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23066 = cljs.core.get.call(null,map__22775_23063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23064], null),cljs.core.fnil.call(null,((function (seq__22771_23052,chunk__22772_23054,count__22773_23055,i__22774_23056,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22775_23062,map__22775_23063__$1,gline_23064,gcol_23065,name_23066,vec__22768_23030,column_23031,column_info_23032,seq__22753_23012__$1,temp__4657__auto___23007,vec__22750_22850,line_22851,columns_22852,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23065], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22851,new cljs.core.Keyword(null,"col","col",-1959363084),column_23031,new cljs.core.Keyword(null,"name","name",1843675177),name_23066], null));
});})(seq__22771_23052,chunk__22772_23054,count__22773_23055,i__22774_23056,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22775_23062,map__22775_23063__$1,gline_23064,gcol_23065,name_23066,vec__22768_23030,column_23031,column_info_23032,seq__22753_23012__$1,temp__4657__auto___23007,vec__22750_22850,line_22851,columns_22852,inverted))
,cljs.core.sorted_map.call(null)));

var G__23072 = seq__22771_23052;
var G__23073 = chunk__22772_23054;
var G__23074 = count__22773_23055;
var G__23075 = (i__22774_23056 + (1));
seq__22771_23052 = G__23072;
chunk__22772_23054 = G__23073;
count__22773_23055 = G__23074;
i__22774_23056 = G__23075;
continue;
} else {
var temp__4657__auto___23078__$1 = cljs.core.seq.call(null,seq__22771_23052);
if(temp__4657__auto___23078__$1){
var seq__22771_23084__$1 = temp__4657__auto___23078__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22771_23084__$1)){
var c__21266__auto___23085 = cljs.core.chunk_first.call(null,seq__22771_23084__$1);
var G__23087 = cljs.core.chunk_rest.call(null,seq__22771_23084__$1);
var G__23088 = c__21266__auto___23085;
var G__23089 = cljs.core.count.call(null,c__21266__auto___23085);
var G__23090 = (0);
seq__22771_23052 = G__23087;
chunk__22772_23054 = G__23088;
count__22773_23055 = G__23089;
i__22774_23056 = G__23090;
continue;
} else {
var map__22777_23094 = cljs.core.first.call(null,seq__22771_23084__$1);
var map__22777_23095__$1 = ((((!((map__22777_23094 == null)))?((((map__22777_23094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22777_23094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22777_23094):map__22777_23094);
var gline_23096 = cljs.core.get.call(null,map__22777_23095__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23097 = cljs.core.get.call(null,map__22777_23095__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23098 = cljs.core.get.call(null,map__22777_23095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23096], null),cljs.core.fnil.call(null,((function (seq__22771_23052,chunk__22772_23054,count__22773_23055,i__22774_23056,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22777_23094,map__22777_23095__$1,gline_23096,gcol_23097,name_23098,seq__22771_23084__$1,temp__4657__auto___23078__$1,vec__22768_23030,column_23031,column_info_23032,seq__22753_23012__$1,temp__4657__auto___23007,vec__22750_22850,line_22851,columns_22852,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23097], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22851,new cljs.core.Keyword(null,"col","col",-1959363084),column_23031,new cljs.core.Keyword(null,"name","name",1843675177),name_23098], null));
});})(seq__22771_23052,chunk__22772_23054,count__22773_23055,i__22774_23056,seq__22753_22853,chunk__22754_22854,count__22755_22855,i__22756_22856,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22777_23094,map__22777_23095__$1,gline_23096,gcol_23097,name_23098,seq__22771_23084__$1,temp__4657__auto___23078__$1,vec__22768_23030,column_23031,column_info_23032,seq__22753_23012__$1,temp__4657__auto___23007,vec__22750_22850,line_22851,columns_22852,inverted))
,cljs.core.sorted_map.call(null)));

var G__23127 = cljs.core.next.call(null,seq__22771_23084__$1);
var G__23128 = null;
var G__23129 = (0);
var G__23130 = (0);
seq__22771_23052 = G__23127;
chunk__22772_23054 = G__23128;
count__22773_23055 = G__23129;
i__22774_23056 = G__23130;
continue;
}
} else {
}
}
break;
}

var G__23133 = cljs.core.next.call(null,seq__22753_23012__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__22753_22853 = G__23133;
chunk__22754_22854 = G__23134;
count__22755_22855 = G__23135;
i__22756_22856 = G__23136;
continue;
}
} else {
}
}
break;
}

var G__23137 = seq__22746_22846;
var G__23138 = chunk__22747_22847;
var G__23139 = count__22748_22848;
var G__23140 = (i__22749_22849 + (1));
seq__22746_22846 = G__23137;
chunk__22747_22847 = G__23138;
count__22748_22848 = G__23139;
i__22749_22849 = G__23140;
continue;
} else {
var temp__4657__auto___23148 = cljs.core.seq.call(null,seq__22746_22846);
if(temp__4657__auto___23148){
var seq__22746_23149__$1 = temp__4657__auto___23148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22746_23149__$1)){
var c__21266__auto___23150 = cljs.core.chunk_first.call(null,seq__22746_23149__$1);
var G__23155 = cljs.core.chunk_rest.call(null,seq__22746_23149__$1);
var G__23156 = c__21266__auto___23150;
var G__23157 = cljs.core.count.call(null,c__21266__auto___23150);
var G__23158 = (0);
seq__22746_22846 = G__23155;
chunk__22747_22847 = G__23156;
count__22748_22848 = G__23157;
i__22749_22849 = G__23158;
continue;
} else {
var vec__22779_23170 = cljs.core.first.call(null,seq__22746_23149__$1);
var line_23171 = cljs.core.nth.call(null,vec__22779_23170,(0),null);
var columns_23172 = cljs.core.nth.call(null,vec__22779_23170,(1),null);
var seq__22782_23179 = cljs.core.seq.call(null,columns_23172);
var chunk__22783_23180 = null;
var count__22784_23181 = (0);
var i__22785_23182 = (0);
while(true){
if((i__22785_23182 < count__22784_23181)){
var vec__22786_23183 = cljs.core._nth.call(null,chunk__22783_23180,i__22785_23182);
var column_23184 = cljs.core.nth.call(null,vec__22786_23183,(0),null);
var column_info_23185 = cljs.core.nth.call(null,vec__22786_23183,(1),null);
var seq__22789_23188 = cljs.core.seq.call(null,column_info_23185);
var chunk__22790_23189 = null;
var count__22791_23190 = (0);
var i__22792_23191 = (0);
while(true){
if((i__22792_23191 < count__22791_23190)){
var map__22797_23192 = cljs.core._nth.call(null,chunk__22790_23189,i__22792_23191);
var map__22797_23193__$1 = ((((!((map__22797_23192 == null)))?((((map__22797_23192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22797_23192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22797_23192):map__22797_23192);
var gline_23194 = cljs.core.get.call(null,map__22797_23193__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23195 = cljs.core.get.call(null,map__22797_23193__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23196 = cljs.core.get.call(null,map__22797_23193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23194], null),cljs.core.fnil.call(null,((function (seq__22789_23188,chunk__22790_23189,count__22791_23190,i__22792_23191,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22797_23192,map__22797_23193__$1,gline_23194,gcol_23195,name_23196,vec__22786_23183,column_23184,column_info_23185,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23195], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23171,new cljs.core.Keyword(null,"col","col",-1959363084),column_23184,new cljs.core.Keyword(null,"name","name",1843675177),name_23196], null));
});})(seq__22789_23188,chunk__22790_23189,count__22791_23190,i__22792_23191,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22797_23192,map__22797_23193__$1,gline_23194,gcol_23195,name_23196,vec__22786_23183,column_23184,column_info_23185,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted))
,cljs.core.sorted_map.call(null)));

var G__23215 = seq__22789_23188;
var G__23216 = chunk__22790_23189;
var G__23217 = count__22791_23190;
var G__23218 = (i__22792_23191 + (1));
seq__22789_23188 = G__23215;
chunk__22790_23189 = G__23216;
count__22791_23190 = G__23217;
i__22792_23191 = G__23218;
continue;
} else {
var temp__4657__auto___23224__$1 = cljs.core.seq.call(null,seq__22789_23188);
if(temp__4657__auto___23224__$1){
var seq__22789_23226__$1 = temp__4657__auto___23224__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22789_23226__$1)){
var c__21266__auto___23228 = cljs.core.chunk_first.call(null,seq__22789_23226__$1);
var G__23229 = cljs.core.chunk_rest.call(null,seq__22789_23226__$1);
var G__23230 = c__21266__auto___23228;
var G__23231 = cljs.core.count.call(null,c__21266__auto___23228);
var G__23232 = (0);
seq__22789_23188 = G__23229;
chunk__22790_23189 = G__23230;
count__22791_23190 = G__23231;
i__22792_23191 = G__23232;
continue;
} else {
var map__22807_23234 = cljs.core.first.call(null,seq__22789_23226__$1);
var map__22807_23235__$1 = ((((!((map__22807_23234 == null)))?((((map__22807_23234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22807_23234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22807_23234):map__22807_23234);
var gline_23236 = cljs.core.get.call(null,map__22807_23235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23237 = cljs.core.get.call(null,map__22807_23235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23238 = cljs.core.get.call(null,map__22807_23235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23236], null),cljs.core.fnil.call(null,((function (seq__22789_23188,chunk__22790_23189,count__22791_23190,i__22792_23191,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22807_23234,map__22807_23235__$1,gline_23236,gcol_23237,name_23238,seq__22789_23226__$1,temp__4657__auto___23224__$1,vec__22786_23183,column_23184,column_info_23185,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23237], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23171,new cljs.core.Keyword(null,"col","col",-1959363084),column_23184,new cljs.core.Keyword(null,"name","name",1843675177),name_23238], null));
});})(seq__22789_23188,chunk__22790_23189,count__22791_23190,i__22792_23191,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22807_23234,map__22807_23235__$1,gline_23236,gcol_23237,name_23238,seq__22789_23226__$1,temp__4657__auto___23224__$1,vec__22786_23183,column_23184,column_info_23185,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted))
,cljs.core.sorted_map.call(null)));

var G__23252 = cljs.core.next.call(null,seq__22789_23226__$1);
var G__23253 = null;
var G__23254 = (0);
var G__23255 = (0);
seq__22789_23188 = G__23252;
chunk__22790_23189 = G__23253;
count__22791_23190 = G__23254;
i__22792_23191 = G__23255;
continue;
}
} else {
}
}
break;
}

var G__23257 = seq__22782_23179;
var G__23258 = chunk__22783_23180;
var G__23259 = count__22784_23181;
var G__23260 = (i__22785_23182 + (1));
seq__22782_23179 = G__23257;
chunk__22783_23180 = G__23258;
count__22784_23181 = G__23259;
i__22785_23182 = G__23260;
continue;
} else {
var temp__4657__auto___23262__$1 = cljs.core.seq.call(null,seq__22782_23179);
if(temp__4657__auto___23262__$1){
var seq__22782_23268__$1 = temp__4657__auto___23262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22782_23268__$1)){
var c__21266__auto___23269 = cljs.core.chunk_first.call(null,seq__22782_23268__$1);
var G__23270 = cljs.core.chunk_rest.call(null,seq__22782_23268__$1);
var G__23271 = c__21266__auto___23269;
var G__23272 = cljs.core.count.call(null,c__21266__auto___23269);
var G__23273 = (0);
seq__22782_23179 = G__23270;
chunk__22783_23180 = G__23271;
count__22784_23181 = G__23272;
i__22785_23182 = G__23273;
continue;
} else {
var vec__22819_23278 = cljs.core.first.call(null,seq__22782_23268__$1);
var column_23279 = cljs.core.nth.call(null,vec__22819_23278,(0),null);
var column_info_23280 = cljs.core.nth.call(null,vec__22819_23278,(1),null);
var seq__22829_23283 = cljs.core.seq.call(null,column_info_23280);
var chunk__22830_23284 = null;
var count__22831_23285 = (0);
var i__22832_23286 = (0);
while(true){
if((i__22832_23286 < count__22831_23285)){
var map__22833_23292 = cljs.core._nth.call(null,chunk__22830_23284,i__22832_23286);
var map__22833_23293__$1 = ((((!((map__22833_23292 == null)))?((((map__22833_23292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22833_23292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22833_23292):map__22833_23292);
var gline_23294 = cljs.core.get.call(null,map__22833_23293__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23295 = cljs.core.get.call(null,map__22833_23293__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23296 = cljs.core.get.call(null,map__22833_23293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23294], null),cljs.core.fnil.call(null,((function (seq__22829_23283,chunk__22830_23284,count__22831_23285,i__22832_23286,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22833_23292,map__22833_23293__$1,gline_23294,gcol_23295,name_23296,vec__22819_23278,column_23279,column_info_23280,seq__22782_23268__$1,temp__4657__auto___23262__$1,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23295], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23171,new cljs.core.Keyword(null,"col","col",-1959363084),column_23279,new cljs.core.Keyword(null,"name","name",1843675177),name_23296], null));
});})(seq__22829_23283,chunk__22830_23284,count__22831_23285,i__22832_23286,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22833_23292,map__22833_23293__$1,gline_23294,gcol_23295,name_23296,vec__22819_23278,column_23279,column_info_23280,seq__22782_23268__$1,temp__4657__auto___23262__$1,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted))
,cljs.core.sorted_map.call(null)));

var G__23330 = seq__22829_23283;
var G__23331 = chunk__22830_23284;
var G__23332 = count__22831_23285;
var G__23333 = (i__22832_23286 + (1));
seq__22829_23283 = G__23330;
chunk__22830_23284 = G__23331;
count__22831_23285 = G__23332;
i__22832_23286 = G__23333;
continue;
} else {
var temp__4657__auto___23337__$2 = cljs.core.seq.call(null,seq__22829_23283);
if(temp__4657__auto___23337__$2){
var seq__22829_23339__$1 = temp__4657__auto___23337__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22829_23339__$1)){
var c__21266__auto___23342 = cljs.core.chunk_first.call(null,seq__22829_23339__$1);
var G__23343 = cljs.core.chunk_rest.call(null,seq__22829_23339__$1);
var G__23344 = c__21266__auto___23342;
var G__23345 = cljs.core.count.call(null,c__21266__auto___23342);
var G__23346 = (0);
seq__22829_23283 = G__23343;
chunk__22830_23284 = G__23344;
count__22831_23285 = G__23345;
i__22832_23286 = G__23346;
continue;
} else {
var map__22835_23351 = cljs.core.first.call(null,seq__22829_23339__$1);
var map__22835_23352__$1 = ((((!((map__22835_23351 == null)))?((((map__22835_23351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22835_23351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22835_23351):map__22835_23351);
var gline_23353 = cljs.core.get.call(null,map__22835_23352__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23354 = cljs.core.get.call(null,map__22835_23352__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23355 = cljs.core.get.call(null,map__22835_23352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23353], null),cljs.core.fnil.call(null,((function (seq__22829_23283,chunk__22830_23284,count__22831_23285,i__22832_23286,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22835_23351,map__22835_23352__$1,gline_23353,gcol_23354,name_23355,seq__22829_23339__$1,temp__4657__auto___23337__$2,vec__22819_23278,column_23279,column_info_23280,seq__22782_23268__$1,temp__4657__auto___23262__$1,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23354], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23171,new cljs.core.Keyword(null,"col","col",-1959363084),column_23279,new cljs.core.Keyword(null,"name","name",1843675177),name_23355], null));
});})(seq__22829_23283,chunk__22830_23284,count__22831_23285,i__22832_23286,seq__22782_23179,chunk__22783_23180,count__22784_23181,i__22785_23182,seq__22746_22846,chunk__22747_22847,count__22748_22848,i__22749_22849,map__22835_23351,map__22835_23352__$1,gline_23353,gcol_23354,name_23355,seq__22829_23339__$1,temp__4657__auto___23337__$2,vec__22819_23278,column_23279,column_info_23280,seq__22782_23268__$1,temp__4657__auto___23262__$1,vec__22779_23170,line_23171,columns_23172,seq__22746_23149__$1,temp__4657__auto___23148,inverted))
,cljs.core.sorted_map.call(null)));

var G__23379 = cljs.core.next.call(null,seq__22829_23339__$1);
var G__23380 = null;
var G__23381 = (0);
var G__23382 = (0);
seq__22829_23283 = G__23379;
chunk__22830_23284 = G__23380;
count__22831_23285 = G__23381;
i__22832_23286 = G__23382;
continue;
}
} else {
}
}
break;
}

var G__23383 = cljs.core.next.call(null,seq__22782_23268__$1);
var G__23384 = null;
var G__23385 = (0);
var G__23386 = (0);
seq__22782_23179 = G__23383;
chunk__22783_23180 = G__23384;
count__22784_23181 = G__23385;
i__22785_23182 = G__23386;
continue;
}
} else {
}
}
break;
}

var G__23388 = cljs.core.next.call(null,seq__22746_23149__$1);
var G__23389 = null;
var G__23390 = (0);
var G__23391 = (0);
seq__22746_22846 = G__23388;
chunk__22747_22847 = G__23389;
count__22748_22848 = G__23390;
i__22749_22849 = G__23391;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1522121075496