// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20455__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20455__auto__){
return or__20455__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28293_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28293_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28316 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28317 = null;
var count__28318 = (0);
var i__28319 = (0);
while(true){
if((i__28319 < count__28318)){
var n = cljs.core._nth.call(null,chunk__28317,i__28319);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28322 = seq__28316;
var G__28323 = chunk__28317;
var G__28324 = count__28318;
var G__28325 = (i__28319 + (1));
seq__28316 = G__28322;
chunk__28317 = G__28323;
count__28318 = G__28324;
i__28319 = G__28325;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28316);
if(temp__4657__auto__){
var seq__28316__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28316__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__28316__$1);
var G__28326 = cljs.core.chunk_rest.call(null,seq__28316__$1);
var G__28327 = c__21266__auto__;
var G__28328 = cljs.core.count.call(null,c__21266__auto__);
var G__28329 = (0);
seq__28316 = G__28326;
chunk__28317 = G__28327;
count__28318 = G__28328;
i__28319 = G__28329;
continue;
} else {
var n = cljs.core.first.call(null,seq__28316__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28330 = cljs.core.next.call(null,seq__28316__$1);
var G__28331 = null;
var G__28332 = (0);
var G__28333 = (0);
seq__28316 = G__28330;
chunk__28317 = G__28331;
count__28318 = G__28332;
i__28319 = G__28333;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28423_28474 = cljs.core.seq.call(null,deps);
var chunk__28424_28475 = null;
var count__28425_28476 = (0);
var i__28426_28477 = (0);
while(true){
if((i__28426_28477 < count__28425_28476)){
var dep_28478 = cljs.core._nth.call(null,chunk__28424_28475,i__28426_28477);
topo_sort_helper_STAR_.call(null,dep_28478,(depth + (1)),state);

var G__28479 = seq__28423_28474;
var G__28480 = chunk__28424_28475;
var G__28481 = count__28425_28476;
var G__28482 = (i__28426_28477 + (1));
seq__28423_28474 = G__28479;
chunk__28424_28475 = G__28480;
count__28425_28476 = G__28481;
i__28426_28477 = G__28482;
continue;
} else {
var temp__4657__auto___28483 = cljs.core.seq.call(null,seq__28423_28474);
if(temp__4657__auto___28483){
var seq__28423_28485__$1 = temp__4657__auto___28483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28423_28485__$1)){
var c__21266__auto___28486 = cljs.core.chunk_first.call(null,seq__28423_28485__$1);
var G__28487 = cljs.core.chunk_rest.call(null,seq__28423_28485__$1);
var G__28488 = c__21266__auto___28486;
var G__28489 = cljs.core.count.call(null,c__21266__auto___28486);
var G__28490 = (0);
seq__28423_28474 = G__28487;
chunk__28424_28475 = G__28488;
count__28425_28476 = G__28489;
i__28426_28477 = G__28490;
continue;
} else {
var dep_28491 = cljs.core.first.call(null,seq__28423_28485__$1);
topo_sort_helper_STAR_.call(null,dep_28491,(depth + (1)),state);

var G__28492 = cljs.core.next.call(null,seq__28423_28485__$1);
var G__28493 = null;
var G__28494 = (0);
var G__28495 = (0);
seq__28423_28474 = G__28492;
chunk__28424_28475 = G__28493;
count__28425_28476 = G__28494;
i__28426_28477 = G__28495;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28441){
var vec__28451 = p__28441;
var seq__28452 = cljs.core.seq.call(null,vec__28451);
var first__28453 = cljs.core.first.call(null,seq__28452);
var seq__28452__$1 = cljs.core.next.call(null,seq__28452);
var x = first__28453;
var xs = seq__28452__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28451,seq__28452,first__28453,seq__28452__$1,x,xs,get_deps__$1){
return (function (p1__28336_SHARP_){
return clojure.set.difference.call(null,p1__28336_SHARP_,x);
});})(vec__28451,seq__28452,first__28453,seq__28452__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28531 = cljs.core.seq.call(null,provides);
var chunk__28532 = null;
var count__28533 = (0);
var i__28534 = (0);
while(true){
if((i__28534 < count__28533)){
var prov = cljs.core._nth.call(null,chunk__28532,i__28534);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28535_28543 = cljs.core.seq.call(null,requires);
var chunk__28536_28544 = null;
var count__28537_28545 = (0);
var i__28538_28546 = (0);
while(true){
if((i__28538_28546 < count__28537_28545)){
var req_28547 = cljs.core._nth.call(null,chunk__28536_28544,i__28538_28546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28547,prov);

var G__28548 = seq__28535_28543;
var G__28549 = chunk__28536_28544;
var G__28550 = count__28537_28545;
var G__28551 = (i__28538_28546 + (1));
seq__28535_28543 = G__28548;
chunk__28536_28544 = G__28549;
count__28537_28545 = G__28550;
i__28538_28546 = G__28551;
continue;
} else {
var temp__4657__auto___28552 = cljs.core.seq.call(null,seq__28535_28543);
if(temp__4657__auto___28552){
var seq__28535_28553__$1 = temp__4657__auto___28552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28535_28553__$1)){
var c__21266__auto___28560 = cljs.core.chunk_first.call(null,seq__28535_28553__$1);
var G__28561 = cljs.core.chunk_rest.call(null,seq__28535_28553__$1);
var G__28562 = c__21266__auto___28560;
var G__28563 = cljs.core.count.call(null,c__21266__auto___28560);
var G__28564 = (0);
seq__28535_28543 = G__28561;
chunk__28536_28544 = G__28562;
count__28537_28545 = G__28563;
i__28538_28546 = G__28564;
continue;
} else {
var req_28567 = cljs.core.first.call(null,seq__28535_28553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28567,prov);

var G__28570 = cljs.core.next.call(null,seq__28535_28553__$1);
var G__28571 = null;
var G__28572 = (0);
var G__28573 = (0);
seq__28535_28543 = G__28570;
chunk__28536_28544 = G__28571;
count__28537_28545 = G__28572;
i__28538_28546 = G__28573;
continue;
}
} else {
}
}
break;
}

var G__28574 = seq__28531;
var G__28575 = chunk__28532;
var G__28576 = count__28533;
var G__28577 = (i__28534 + (1));
seq__28531 = G__28574;
chunk__28532 = G__28575;
count__28533 = G__28576;
i__28534 = G__28577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28531);
if(temp__4657__auto__){
var seq__28531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28531__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__28531__$1);
var G__28580 = cljs.core.chunk_rest.call(null,seq__28531__$1);
var G__28581 = c__21266__auto__;
var G__28582 = cljs.core.count.call(null,c__21266__auto__);
var G__28583 = (0);
seq__28531 = G__28580;
chunk__28532 = G__28581;
count__28533 = G__28582;
i__28534 = G__28583;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28531__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28539_28593 = cljs.core.seq.call(null,requires);
var chunk__28540_28594 = null;
var count__28541_28595 = (0);
var i__28542_28596 = (0);
while(true){
if((i__28542_28596 < count__28541_28595)){
var req_28598 = cljs.core._nth.call(null,chunk__28540_28594,i__28542_28596);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28598,prov);

var G__28599 = seq__28539_28593;
var G__28600 = chunk__28540_28594;
var G__28601 = count__28541_28595;
var G__28602 = (i__28542_28596 + (1));
seq__28539_28593 = G__28599;
chunk__28540_28594 = G__28600;
count__28541_28595 = G__28601;
i__28542_28596 = G__28602;
continue;
} else {
var temp__4657__auto___28605__$1 = cljs.core.seq.call(null,seq__28539_28593);
if(temp__4657__auto___28605__$1){
var seq__28539_28607__$1 = temp__4657__auto___28605__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28539_28607__$1)){
var c__21266__auto___28608 = cljs.core.chunk_first.call(null,seq__28539_28607__$1);
var G__28610 = cljs.core.chunk_rest.call(null,seq__28539_28607__$1);
var G__28611 = c__21266__auto___28608;
var G__28612 = cljs.core.count.call(null,c__21266__auto___28608);
var G__28613 = (0);
seq__28539_28593 = G__28610;
chunk__28540_28594 = G__28611;
count__28541_28595 = G__28612;
i__28542_28596 = G__28613;
continue;
} else {
var req_28617 = cljs.core.first.call(null,seq__28539_28607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28617,prov);

var G__28627 = cljs.core.next.call(null,seq__28539_28607__$1);
var G__28628 = null;
var G__28629 = (0);
var G__28630 = (0);
seq__28539_28593 = G__28627;
chunk__28540_28594 = G__28628;
count__28541_28595 = G__28629;
i__28542_28596 = G__28630;
continue;
}
} else {
}
}
break;
}

var G__28632 = cljs.core.next.call(null,seq__28531__$1);
var G__28633 = null;
var G__28634 = (0);
var G__28635 = (0);
seq__28531 = G__28632;
chunk__28532 = G__28633;
count__28533 = G__28634;
i__28534 = G__28635;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28646_28651 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28647_28652 = null;
var count__28648_28653 = (0);
var i__28649_28654 = (0);
while(true){
if((i__28649_28654 < count__28648_28653)){
var ns_28655 = cljs.core._nth.call(null,chunk__28647_28652,i__28649_28654);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28655);

var G__28656 = seq__28646_28651;
var G__28657 = chunk__28647_28652;
var G__28658 = count__28648_28653;
var G__28659 = (i__28649_28654 + (1));
seq__28646_28651 = G__28656;
chunk__28647_28652 = G__28657;
count__28648_28653 = G__28658;
i__28649_28654 = G__28659;
continue;
} else {
var temp__4657__auto___28660 = cljs.core.seq.call(null,seq__28646_28651);
if(temp__4657__auto___28660){
var seq__28646_28662__$1 = temp__4657__auto___28660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28646_28662__$1)){
var c__21266__auto___28664 = cljs.core.chunk_first.call(null,seq__28646_28662__$1);
var G__28665 = cljs.core.chunk_rest.call(null,seq__28646_28662__$1);
var G__28666 = c__21266__auto___28664;
var G__28667 = cljs.core.count.call(null,c__21266__auto___28664);
var G__28668 = (0);
seq__28646_28651 = G__28665;
chunk__28647_28652 = G__28666;
count__28648_28653 = G__28667;
i__28649_28654 = G__28668;
continue;
} else {
var ns_28670 = cljs.core.first.call(null,seq__28646_28662__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28670);

var G__28672 = cljs.core.next.call(null,seq__28646_28662__$1);
var G__28673 = null;
var G__28674 = (0);
var G__28675 = (0);
seq__28646_28651 = G__28672;
chunk__28647_28652 = G__28673;
count__28648_28653 = G__28674;
i__28649_28654 = G__28675;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20455__auto__ = goog.require__;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28706__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28710__i = 0, G__28710__a = new Array(arguments.length -  0);
while (G__28710__i < G__28710__a.length) {G__28710__a[G__28710__i] = arguments[G__28710__i + 0]; ++G__28710__i;}
  args = new cljs.core.IndexedSeq(G__28710__a,0);
} 
return G__28706__delegate.call(this,args);};
G__28706.cljs$lang$maxFixedArity = 0;
G__28706.cljs$lang$applyTo = (function (arglist__28713){
var args = cljs.core.seq(arglist__28713);
return G__28706__delegate(args);
});
G__28706.cljs$core$IFn$_invoke$arity$variadic = G__28706__delegate;
return G__28706;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28716 = cljs.core._EQ_;
var expr__28717 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28717))){
var path_parts = ((function (pred__28716,expr__28717){
return (function (p1__28715_SHARP_){
return clojure.string.split.call(null,p1__28715_SHARP_,/[\/\\]/);
});})(pred__28716,expr__28717))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28716,expr__28717){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28719){if((e28719 instanceof Error)){
var e = e28719;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28719;

}
}})());
});
;})(path_parts,sep,root,pred__28716,expr__28717))
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28717))){
return ((function (pred__28716,expr__28717){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28716,expr__28717){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28716,expr__28717))
);

return deferred.addErrback(((function (deferred,pred__28716,expr__28717){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28716,expr__28717))
);
});
;})(pred__28716,expr__28717))
} else {
return ((function (pred__28716,expr__28717){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28716,expr__28717))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28722,callback){
var map__28725 = p__28722;
var map__28725__$1 = ((((!((map__28725 == null)))?((((map__28725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28725):map__28725);
var file_msg = map__28725__$1;
var request_url = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28725,map__28725__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28725,map__28725__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_28751){
var state_val_28752 = (state_28751[(1)]);
if((state_val_28752 === (7))){
var inst_28747 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28753_28773 = state_28751__$1;
(statearr_28753_28773[(2)] = inst_28747);

(statearr_28753_28773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (1))){
var state_28751__$1 = state_28751;
var statearr_28754_28774 = state_28751__$1;
(statearr_28754_28774[(2)] = null);

(statearr_28754_28774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (4))){
var inst_28731 = (state_28751[(7)]);
var inst_28731__$1 = (state_28751[(2)]);
var state_28751__$1 = (function (){var statearr_28755 = state_28751;
(statearr_28755[(7)] = inst_28731__$1);

return statearr_28755;
})();
if(cljs.core.truth_(inst_28731__$1)){
var statearr_28756_28775 = state_28751__$1;
(statearr_28756_28775[(1)] = (5));

} else {
var statearr_28757_28776 = state_28751__$1;
(statearr_28757_28776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (6))){
var state_28751__$1 = state_28751;
var statearr_28758_28777 = state_28751__$1;
(statearr_28758_28777[(2)] = null);

(statearr_28758_28777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (3))){
var inst_28749 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28751__$1,inst_28749);
} else {
if((state_val_28752 === (2))){
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28752 === (11))){
var inst_28743 = (state_28751[(2)]);
var state_28751__$1 = (function (){var statearr_28759 = state_28751;
(statearr_28759[(8)] = inst_28743);

return statearr_28759;
})();
var statearr_28760_28778 = state_28751__$1;
(statearr_28760_28778[(2)] = null);

(statearr_28760_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (9))){
var inst_28735 = (state_28751[(9)]);
var inst_28737 = (state_28751[(10)]);
var inst_28739 = inst_28737.call(null,inst_28735);
var state_28751__$1 = state_28751;
var statearr_28761_28779 = state_28751__$1;
(statearr_28761_28779[(2)] = inst_28739);

(statearr_28761_28779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (5))){
var inst_28731 = (state_28751[(7)]);
var inst_28733 = figwheel.client.file_reloading.blocking_load.call(null,inst_28731);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(8),inst_28733);
} else {
if((state_val_28752 === (10))){
var inst_28735 = (state_28751[(9)]);
var inst_28741 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28735);
var state_28751__$1 = state_28751;
var statearr_28762_28783 = state_28751__$1;
(statearr_28762_28783[(2)] = inst_28741);

(statearr_28762_28783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (8))){
var inst_28731 = (state_28751[(7)]);
var inst_28737 = (state_28751[(10)]);
var inst_28735 = (state_28751[(2)]);
var inst_28736 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28737__$1 = cljs.core.get.call(null,inst_28736,inst_28731);
var state_28751__$1 = (function (){var statearr_28763 = state_28751;
(statearr_28763[(9)] = inst_28735);

(statearr_28763[(10)] = inst_28737__$1);

return statearr_28763;
})();
if(cljs.core.truth_(inst_28737__$1)){
var statearr_28764_28787 = state_28751__$1;
(statearr_28764_28787[(1)] = (9));

} else {
var statearr_28765_28788 = state_28751__$1;
(statearr_28765_28788[(1)] = (10));

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
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24032__auto__ = null;
var figwheel$client$file_reloading$state_machine__24032__auto____0 = (function (){
var statearr_28769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28769[(0)] = figwheel$client$file_reloading$state_machine__24032__auto__);

(statearr_28769[(1)] = (1));

return statearr_28769;
});
var figwheel$client$file_reloading$state_machine__24032__auto____1 = (function (state_28751){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28770){if((e28770 instanceof Object)){
var ex__24035__auto__ = e28770;
var statearr_28771_28789 = state_28751;
(statearr_28771_28789[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28790 = state_28751;
state_28751 = G__28790;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24032__auto__ = function(state_28751){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24032__auto____1.call(this,state_28751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24032__auto____0;
figwheel$client$file_reloading$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24032__auto____1;
return figwheel$client$file_reloading$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_28772 = f__24229__auto__.call(null);
(statearr_28772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28791,callback){
var map__28794 = p__28791;
var map__28794__$1 = ((((!((map__28794 == null)))?((((map__28794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28794):map__28794);
var file_msg = map__28794__$1;
var namespace = cljs.core.get.call(null,map__28794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28794,map__28794__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28794,map__28794__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28798){
var map__28801 = p__28798;
var map__28801__$1 = ((((!((map__28801 == null)))?((((map__28801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28801):map__28801);
var file_msg = map__28801__$1;
var namespace = cljs.core.get.call(null,map__28801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20443__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20443__auto__){
var or__20455__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var or__20455__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20455__auto____$1)){
return or__20455__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20443__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28805,callback){
var map__28809 = p__28805;
var map__28809__$1 = ((((!((map__28809 == null)))?((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var file_msg = map__28809__$1;
var request_url = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24228__auto___28926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___28926,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___28926,out){
return (function (state_28907){
var state_val_28908 = (state_28907[(1)]);
if((state_val_28908 === (1))){
var inst_28880 = cljs.core.seq.call(null,files);
var inst_28881 = cljs.core.first.call(null,inst_28880);
var inst_28883 = cljs.core.next.call(null,inst_28880);
var inst_28884 = files;
var state_28907__$1 = (function (){var statearr_28909 = state_28907;
(statearr_28909[(7)] = inst_28883);

(statearr_28909[(8)] = inst_28884);

(statearr_28909[(9)] = inst_28881);

return statearr_28909;
})();
var statearr_28910_28929 = state_28907__$1;
(statearr_28910_28929[(2)] = null);

(statearr_28910_28929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (2))){
var inst_28890 = (state_28907[(10)]);
var inst_28884 = (state_28907[(8)]);
var inst_28889 = cljs.core.seq.call(null,inst_28884);
var inst_28890__$1 = cljs.core.first.call(null,inst_28889);
var inst_28891 = cljs.core.next.call(null,inst_28889);
var inst_28892 = (inst_28890__$1 == null);
var inst_28893 = cljs.core.not.call(null,inst_28892);
var state_28907__$1 = (function (){var statearr_28911 = state_28907;
(statearr_28911[(10)] = inst_28890__$1);

(statearr_28911[(11)] = inst_28891);

return statearr_28911;
})();
if(inst_28893){
var statearr_28912_28932 = state_28907__$1;
(statearr_28912_28932[(1)] = (4));

} else {
var statearr_28913_28934 = state_28907__$1;
(statearr_28913_28934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (3))){
var inst_28905 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28907__$1,inst_28905);
} else {
if((state_val_28908 === (4))){
var inst_28890 = (state_28907[(10)]);
var inst_28895 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28890);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(7),inst_28895);
} else {
if((state_val_28908 === (5))){
var inst_28901 = cljs.core.async.close_BANG_.call(null,out);
var state_28907__$1 = state_28907;
var statearr_28914_28935 = state_28907__$1;
(statearr_28914_28935[(2)] = inst_28901);

(statearr_28914_28935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (6))){
var inst_28903 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28915_28936 = state_28907__$1;
(statearr_28915_28936[(2)] = inst_28903);

(statearr_28915_28936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (7))){
var inst_28891 = (state_28907[(11)]);
var inst_28897 = (state_28907[(2)]);
var inst_28898 = cljs.core.async.put_BANG_.call(null,out,inst_28897);
var inst_28884 = inst_28891;
var state_28907__$1 = (function (){var statearr_28916 = state_28907;
(statearr_28916[(8)] = inst_28884);

(statearr_28916[(12)] = inst_28898);

return statearr_28916;
})();
var statearr_28917_28940 = state_28907__$1;
(statearr_28917_28940[(2)] = null);

(statearr_28917_28940[(1)] = (2));


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
});})(c__24228__auto___28926,out))
;
return ((function (switch__24031__auto__,c__24228__auto___28926,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____0 = (function (){
var statearr_28921 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28921[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__);

(statearr_28921[(1)] = (1));

return statearr_28921;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____1 = (function (state_28907){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28922){if((e28922 instanceof Object)){
var ex__24035__auto__ = e28922;
var statearr_28923_28941 = state_28907;
(statearr_28923_28941[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28944 = state_28907;
state_28907 = G__28944;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__ = function(state_28907){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____1.call(this,state_28907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___28926,out))
})();
var state__24230__auto__ = (function (){var statearr_28924 = f__24229__auto__.call(null);
(statearr_28924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___28926);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___28926,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28948,opts){
var map__28953 = p__28948;
var map__28953__$1 = ((((!((map__28953 == null)))?((((map__28953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953):map__28953);
var eval_body__$1 = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20443__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20443__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20443__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28955){var e = e28955;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28956_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28956_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28965){
var vec__28966 = p__28965;
var k = cljs.core.nth.call(null,vec__28966,(0),null);
var v = cljs.core.nth.call(null,vec__28966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28969){
var vec__28970 = p__28969;
var k = cljs.core.nth.call(null,vec__28970,(0),null);
var v = cljs.core.nth.call(null,vec__28970,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28976,p__28977){
var map__29235 = p__28976;
var map__29235__$1 = ((((!((map__29235 == null)))?((((map__29235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29235):map__29235);
var opts = map__29235__$1;
var before_jsload = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29236 = p__28977;
var map__29236__$1 = ((((!((map__29236 == null)))?((((map__29236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29236):map__29236);
var msg = map__29236__$1;
var files = cljs.core.get.call(null,map__29236__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29236__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29236__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29389){
var state_val_29390 = (state_29389[(1)]);
if((state_val_29390 === (7))){
var inst_29250 = (state_29389[(7)]);
var inst_29251 = (state_29389[(8)]);
var inst_29252 = (state_29389[(9)]);
var inst_29253 = (state_29389[(10)]);
var inst_29258 = cljs.core._nth.call(null,inst_29251,inst_29253);
var inst_29259 = figwheel.client.file_reloading.eval_body.call(null,inst_29258,opts);
var inst_29260 = (inst_29253 + (1));
var tmp29391 = inst_29250;
var tmp29392 = inst_29251;
var tmp29393 = inst_29252;
var inst_29250__$1 = tmp29391;
var inst_29251__$1 = tmp29392;
var inst_29252__$1 = tmp29393;
var inst_29253__$1 = inst_29260;
var state_29389__$1 = (function (){var statearr_29394 = state_29389;
(statearr_29394[(7)] = inst_29250__$1);

(statearr_29394[(8)] = inst_29251__$1);

(statearr_29394[(9)] = inst_29252__$1);

(statearr_29394[(10)] = inst_29253__$1);

(statearr_29394[(11)] = inst_29259);

return statearr_29394;
})();
var statearr_29395_29481 = state_29389__$1;
(statearr_29395_29481[(2)] = null);

(statearr_29395_29481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (20))){
var inst_29293 = (state_29389[(12)]);
var inst_29301 = figwheel.client.file_reloading.sort_files.call(null,inst_29293);
var state_29389__$1 = state_29389;
var statearr_29396_29482 = state_29389__$1;
(statearr_29396_29482[(2)] = inst_29301);

(statearr_29396_29482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (27))){
var state_29389__$1 = state_29389;
var statearr_29397_29483 = state_29389__$1;
(statearr_29397_29483[(2)] = null);

(statearr_29397_29483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (1))){
var inst_29242 = (state_29389[(13)]);
var inst_29239 = before_jsload.call(null,files);
var inst_29240 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29241 = (function (){return ((function (inst_29242,inst_29239,inst_29240,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28973_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28973_SHARP_);
});
;})(inst_29242,inst_29239,inst_29240,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29242__$1 = cljs.core.filter.call(null,inst_29241,files);
var inst_29243 = cljs.core.not_empty.call(null,inst_29242__$1);
var state_29389__$1 = (function (){var statearr_29398 = state_29389;
(statearr_29398[(14)] = inst_29239);

(statearr_29398[(13)] = inst_29242__$1);

(statearr_29398[(15)] = inst_29240);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29243)){
var statearr_29399_29484 = state_29389__$1;
(statearr_29399_29484[(1)] = (2));

} else {
var statearr_29400_29485 = state_29389__$1;
(statearr_29400_29485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (24))){
var state_29389__$1 = state_29389;
var statearr_29401_29486 = state_29389__$1;
(statearr_29401_29486[(2)] = null);

(statearr_29401_29486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (39))){
var inst_29343 = (state_29389[(16)]);
var state_29389__$1 = state_29389;
var statearr_29402_29487 = state_29389__$1;
(statearr_29402_29487[(2)] = inst_29343);

(statearr_29402_29487[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (46))){
var inst_29384 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29403_29488 = state_29389__$1;
(statearr_29403_29488[(2)] = inst_29384);

(statearr_29403_29488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (4))){
var inst_29287 = (state_29389[(2)]);
var inst_29288 = cljs.core.List.EMPTY;
var inst_29289 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29288);
var inst_29290 = (function (){return ((function (inst_29287,inst_29288,inst_29289,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28974_SHARP_){
var and__20443__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28974_SHARP_);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28974_SHARP_));
} else {
return and__20443__auto__;
}
});
;})(inst_29287,inst_29288,inst_29289,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29291 = cljs.core.filter.call(null,inst_29290,files);
var inst_29292 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29293 = cljs.core.concat.call(null,inst_29291,inst_29292);
var state_29389__$1 = (function (){var statearr_29404 = state_29389;
(statearr_29404[(12)] = inst_29293);

(statearr_29404[(17)] = inst_29287);

(statearr_29404[(18)] = inst_29289);

return statearr_29404;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29405_29489 = state_29389__$1;
(statearr_29405_29489[(1)] = (16));

} else {
var statearr_29406_29490 = state_29389__$1;
(statearr_29406_29490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (15))){
var inst_29277 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29407_29491 = state_29389__$1;
(statearr_29407_29491[(2)] = inst_29277);

(statearr_29407_29491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (21))){
var inst_29303 = (state_29389[(19)]);
var inst_29303__$1 = (state_29389[(2)]);
var inst_29304 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29303__$1);
var state_29389__$1 = (function (){var statearr_29408 = state_29389;
(statearr_29408[(19)] = inst_29303__$1);

return statearr_29408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29389__$1,(22),inst_29304);
} else {
if((state_val_29390 === (31))){
var inst_29387 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else {
if((state_val_29390 === (32))){
var inst_29343 = (state_29389[(16)]);
var inst_29348 = inst_29343.cljs$lang$protocol_mask$partition0$;
var inst_29349 = (inst_29348 & (64));
var inst_29350 = inst_29343.cljs$core$ISeq$;
var inst_29351 = (inst_29349) || (inst_29350);
var state_29389__$1 = state_29389;
if(cljs.core.truth_(inst_29351)){
var statearr_29409_29492 = state_29389__$1;
(statearr_29409_29492[(1)] = (35));

} else {
var statearr_29410_29493 = state_29389__$1;
(statearr_29410_29493[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (40))){
var inst_29364 = (state_29389[(20)]);
var inst_29363 = (state_29389[(2)]);
var inst_29364__$1 = cljs.core.get.call(null,inst_29363,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29365 = cljs.core.get.call(null,inst_29363,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29366 = cljs.core.not_empty.call(null,inst_29364__$1);
var state_29389__$1 = (function (){var statearr_29411 = state_29389;
(statearr_29411[(20)] = inst_29364__$1);

(statearr_29411[(21)] = inst_29365);

return statearr_29411;
})();
if(cljs.core.truth_(inst_29366)){
var statearr_29412_29494 = state_29389__$1;
(statearr_29412_29494[(1)] = (41));

} else {
var statearr_29413_29495 = state_29389__$1;
(statearr_29413_29495[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (33))){
var state_29389__$1 = state_29389;
var statearr_29414_29496 = state_29389__$1;
(statearr_29414_29496[(2)] = false);

(statearr_29414_29496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (13))){
var inst_29263 = (state_29389[(22)]);
var inst_29267 = cljs.core.chunk_first.call(null,inst_29263);
var inst_29268 = cljs.core.chunk_rest.call(null,inst_29263);
var inst_29269 = cljs.core.count.call(null,inst_29267);
var inst_29250 = inst_29268;
var inst_29251 = inst_29267;
var inst_29252 = inst_29269;
var inst_29253 = (0);
var state_29389__$1 = (function (){var statearr_29415 = state_29389;
(statearr_29415[(7)] = inst_29250);

(statearr_29415[(8)] = inst_29251);

(statearr_29415[(9)] = inst_29252);

(statearr_29415[(10)] = inst_29253);

return statearr_29415;
})();
var statearr_29416_29497 = state_29389__$1;
(statearr_29416_29497[(2)] = null);

(statearr_29416_29497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (22))){
var inst_29311 = (state_29389[(23)]);
var inst_29303 = (state_29389[(19)]);
var inst_29306 = (state_29389[(24)]);
var inst_29307 = (state_29389[(25)]);
var inst_29306__$1 = (state_29389[(2)]);
var inst_29307__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29306__$1);
var inst_29308 = (function (){var all_files = inst_29303;
var res_SINGLEQUOTE_ = inst_29306__$1;
var res = inst_29307__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29311,inst_29303,inst_29306,inst_29307,inst_29306__$1,inst_29307__$1,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28975_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28975_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29311,inst_29303,inst_29306,inst_29307,inst_29306__$1,inst_29307__$1,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29309 = cljs.core.filter.call(null,inst_29308,inst_29306__$1);
var inst_29310 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29311__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29310);
var inst_29312 = cljs.core.not_empty.call(null,inst_29311__$1);
var state_29389__$1 = (function (){var statearr_29417 = state_29389;
(statearr_29417[(23)] = inst_29311__$1);

(statearr_29417[(24)] = inst_29306__$1);

(statearr_29417[(25)] = inst_29307__$1);

(statearr_29417[(26)] = inst_29309);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29312)){
var statearr_29418_29498 = state_29389__$1;
(statearr_29418_29498[(1)] = (23));

} else {
var statearr_29419_29499 = state_29389__$1;
(statearr_29419_29499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (36))){
var state_29389__$1 = state_29389;
var statearr_29420_29500 = state_29389__$1;
(statearr_29420_29500[(2)] = false);

(statearr_29420_29500[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (41))){
var inst_29364 = (state_29389[(20)]);
var inst_29368 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29369 = cljs.core.map.call(null,inst_29368,inst_29364);
var inst_29370 = cljs.core.pr_str.call(null,inst_29369);
var inst_29371 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29370)].join('');
var inst_29372 = figwheel.client.utils.log.call(null,inst_29371);
var state_29389__$1 = state_29389;
var statearr_29421_29501 = state_29389__$1;
(statearr_29421_29501[(2)] = inst_29372);

(statearr_29421_29501[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (43))){
var inst_29365 = (state_29389[(21)]);
var inst_29375 = (state_29389[(2)]);
var inst_29376 = cljs.core.not_empty.call(null,inst_29365);
var state_29389__$1 = (function (){var statearr_29422 = state_29389;
(statearr_29422[(27)] = inst_29375);

return statearr_29422;
})();
if(cljs.core.truth_(inst_29376)){
var statearr_29423_29502 = state_29389__$1;
(statearr_29423_29502[(1)] = (44));

} else {
var statearr_29424_29503 = state_29389__$1;
(statearr_29424_29503[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (29))){
var inst_29311 = (state_29389[(23)]);
var inst_29303 = (state_29389[(19)]);
var inst_29306 = (state_29389[(24)]);
var inst_29307 = (state_29389[(25)]);
var inst_29309 = (state_29389[(26)]);
var inst_29343 = (state_29389[(16)]);
var inst_29339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29342 = (function (){var all_files = inst_29303;
var res_SINGLEQUOTE_ = inst_29306;
var res = inst_29307;
var files_not_loaded = inst_29309;
var dependencies_that_loaded = inst_29311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29343,inst_29339,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29341){
var map__29425 = p__29341;
var map__29425__$1 = ((((!((map__29425 == null)))?((((map__29425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29425):map__29425);
var namespace = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29343,inst_29339,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29343__$1 = cljs.core.group_by.call(null,inst_29342,inst_29309);
var inst_29345 = (inst_29343__$1 == null);
var inst_29346 = cljs.core.not.call(null,inst_29345);
var state_29389__$1 = (function (){var statearr_29427 = state_29389;
(statearr_29427[(28)] = inst_29339);

(statearr_29427[(16)] = inst_29343__$1);

return statearr_29427;
})();
if(inst_29346){
var statearr_29428_29504 = state_29389__$1;
(statearr_29428_29504[(1)] = (32));

} else {
var statearr_29429_29505 = state_29389__$1;
(statearr_29429_29505[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (44))){
var inst_29365 = (state_29389[(21)]);
var inst_29378 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29365);
var inst_29379 = cljs.core.pr_str.call(null,inst_29378);
var inst_29380 = [cljs.core.str("not required: "),cljs.core.str(inst_29379)].join('');
var inst_29381 = figwheel.client.utils.log.call(null,inst_29380);
var state_29389__$1 = state_29389;
var statearr_29430_29506 = state_29389__$1;
(statearr_29430_29506[(2)] = inst_29381);

(statearr_29430_29506[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (6))){
var inst_29284 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29431_29507 = state_29389__$1;
(statearr_29431_29507[(2)] = inst_29284);

(statearr_29431_29507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (28))){
var inst_29309 = (state_29389[(26)]);
var inst_29336 = (state_29389[(2)]);
var inst_29337 = cljs.core.not_empty.call(null,inst_29309);
var state_29389__$1 = (function (){var statearr_29432 = state_29389;
(statearr_29432[(29)] = inst_29336);

return statearr_29432;
})();
if(cljs.core.truth_(inst_29337)){
var statearr_29433_29508 = state_29389__$1;
(statearr_29433_29508[(1)] = (29));

} else {
var statearr_29434_29509 = state_29389__$1;
(statearr_29434_29509[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (25))){
var inst_29307 = (state_29389[(25)]);
var inst_29323 = (state_29389[(2)]);
var inst_29324 = cljs.core.not_empty.call(null,inst_29307);
var state_29389__$1 = (function (){var statearr_29435 = state_29389;
(statearr_29435[(30)] = inst_29323);

return statearr_29435;
})();
if(cljs.core.truth_(inst_29324)){
var statearr_29436_29510 = state_29389__$1;
(statearr_29436_29510[(1)] = (26));

} else {
var statearr_29437_29511 = state_29389__$1;
(statearr_29437_29511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (34))){
var inst_29358 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
if(cljs.core.truth_(inst_29358)){
var statearr_29438_29512 = state_29389__$1;
(statearr_29438_29512[(1)] = (38));

} else {
var statearr_29439_29513 = state_29389__$1;
(statearr_29439_29513[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (17))){
var state_29389__$1 = state_29389;
var statearr_29440_29514 = state_29389__$1;
(statearr_29440_29514[(2)] = recompile_dependents);

(statearr_29440_29514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (3))){
var state_29389__$1 = state_29389;
var statearr_29441_29515 = state_29389__$1;
(statearr_29441_29515[(2)] = null);

(statearr_29441_29515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (12))){
var inst_29280 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29442_29516 = state_29389__$1;
(statearr_29442_29516[(2)] = inst_29280);

(statearr_29442_29516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (2))){
var inst_29242 = (state_29389[(13)]);
var inst_29249 = cljs.core.seq.call(null,inst_29242);
var inst_29250 = inst_29249;
var inst_29251 = null;
var inst_29252 = (0);
var inst_29253 = (0);
var state_29389__$1 = (function (){var statearr_29443 = state_29389;
(statearr_29443[(7)] = inst_29250);

(statearr_29443[(8)] = inst_29251);

(statearr_29443[(9)] = inst_29252);

(statearr_29443[(10)] = inst_29253);

return statearr_29443;
})();
var statearr_29444_29517 = state_29389__$1;
(statearr_29444_29517[(2)] = null);

(statearr_29444_29517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (23))){
var inst_29311 = (state_29389[(23)]);
var inst_29303 = (state_29389[(19)]);
var inst_29306 = (state_29389[(24)]);
var inst_29307 = (state_29389[(25)]);
var inst_29309 = (state_29389[(26)]);
var inst_29314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29316 = (function (){var all_files = inst_29303;
var res_SINGLEQUOTE_ = inst_29306;
var res = inst_29307;
var files_not_loaded = inst_29309;
var dependencies_that_loaded = inst_29311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29314,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29315){
var map__29445 = p__29315;
var map__29445__$1 = ((((!((map__29445 == null)))?((((map__29445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);
var request_url = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29314,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29317 = cljs.core.reverse.call(null,inst_29311);
var inst_29318 = cljs.core.map.call(null,inst_29316,inst_29317);
var inst_29319 = cljs.core.pr_str.call(null,inst_29318);
var inst_29320 = figwheel.client.utils.log.call(null,inst_29319);
var state_29389__$1 = (function (){var statearr_29447 = state_29389;
(statearr_29447[(31)] = inst_29314);

return statearr_29447;
})();
var statearr_29448_29518 = state_29389__$1;
(statearr_29448_29518[(2)] = inst_29320);

(statearr_29448_29518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (35))){
var state_29389__$1 = state_29389;
var statearr_29449_29519 = state_29389__$1;
(statearr_29449_29519[(2)] = true);

(statearr_29449_29519[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (19))){
var inst_29293 = (state_29389[(12)]);
var inst_29299 = figwheel.client.file_reloading.expand_files.call(null,inst_29293);
var state_29389__$1 = state_29389;
var statearr_29450_29520 = state_29389__$1;
(statearr_29450_29520[(2)] = inst_29299);

(statearr_29450_29520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (11))){
var state_29389__$1 = state_29389;
var statearr_29451_29521 = state_29389__$1;
(statearr_29451_29521[(2)] = null);

(statearr_29451_29521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (9))){
var inst_29282 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29452_29522 = state_29389__$1;
(statearr_29452_29522[(2)] = inst_29282);

(statearr_29452_29522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (5))){
var inst_29252 = (state_29389[(9)]);
var inst_29253 = (state_29389[(10)]);
var inst_29255 = (inst_29253 < inst_29252);
var inst_29256 = inst_29255;
var state_29389__$1 = state_29389;
if(cljs.core.truth_(inst_29256)){
var statearr_29453_29523 = state_29389__$1;
(statearr_29453_29523[(1)] = (7));

} else {
var statearr_29454_29524 = state_29389__$1;
(statearr_29454_29524[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (14))){
var inst_29263 = (state_29389[(22)]);
var inst_29272 = cljs.core.first.call(null,inst_29263);
var inst_29273 = figwheel.client.file_reloading.eval_body.call(null,inst_29272,opts);
var inst_29274 = cljs.core.next.call(null,inst_29263);
var inst_29250 = inst_29274;
var inst_29251 = null;
var inst_29252 = (0);
var inst_29253 = (0);
var state_29389__$1 = (function (){var statearr_29455 = state_29389;
(statearr_29455[(7)] = inst_29250);

(statearr_29455[(8)] = inst_29251);

(statearr_29455[(9)] = inst_29252);

(statearr_29455[(10)] = inst_29253);

(statearr_29455[(32)] = inst_29273);

return statearr_29455;
})();
var statearr_29456_29525 = state_29389__$1;
(statearr_29456_29525[(2)] = null);

(statearr_29456_29525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (45))){
var state_29389__$1 = state_29389;
var statearr_29457_29526 = state_29389__$1;
(statearr_29457_29526[(2)] = null);

(statearr_29457_29526[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (26))){
var inst_29311 = (state_29389[(23)]);
var inst_29303 = (state_29389[(19)]);
var inst_29306 = (state_29389[(24)]);
var inst_29307 = (state_29389[(25)]);
var inst_29309 = (state_29389[(26)]);
var inst_29326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29328 = (function (){var all_files = inst_29303;
var res_SINGLEQUOTE_ = inst_29306;
var res = inst_29307;
var files_not_loaded = inst_29309;
var dependencies_that_loaded = inst_29311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29326,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29327){
var map__29458 = p__29327;
var map__29458__$1 = ((((!((map__29458 == null)))?((((map__29458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458):map__29458);
var namespace = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29326,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29329 = cljs.core.map.call(null,inst_29328,inst_29307);
var inst_29330 = cljs.core.pr_str.call(null,inst_29329);
var inst_29331 = figwheel.client.utils.log.call(null,inst_29330);
var inst_29332 = (function (){var all_files = inst_29303;
var res_SINGLEQUOTE_ = inst_29306;
var res = inst_29307;
var files_not_loaded = inst_29309;
var dependencies_that_loaded = inst_29311;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29326,inst_29328,inst_29329,inst_29330,inst_29331,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29311,inst_29303,inst_29306,inst_29307,inst_29309,inst_29326,inst_29328,inst_29329,inst_29330,inst_29331,state_val_29390,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29333 = setTimeout(inst_29332,(10));
var state_29389__$1 = (function (){var statearr_29460 = state_29389;
(statearr_29460[(33)] = inst_29331);

(statearr_29460[(34)] = inst_29326);

return statearr_29460;
})();
var statearr_29461_29527 = state_29389__$1;
(statearr_29461_29527[(2)] = inst_29333);

(statearr_29461_29527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (16))){
var state_29389__$1 = state_29389;
var statearr_29462_29528 = state_29389__$1;
(statearr_29462_29528[(2)] = reload_dependents);

(statearr_29462_29528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (38))){
var inst_29343 = (state_29389[(16)]);
var inst_29360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29343);
var state_29389__$1 = state_29389;
var statearr_29463_29529 = state_29389__$1;
(statearr_29463_29529[(2)] = inst_29360);

(statearr_29463_29529[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (30))){
var state_29389__$1 = state_29389;
var statearr_29464_29530 = state_29389__$1;
(statearr_29464_29530[(2)] = null);

(statearr_29464_29530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (10))){
var inst_29263 = (state_29389[(22)]);
var inst_29265 = cljs.core.chunked_seq_QMARK_.call(null,inst_29263);
var state_29389__$1 = state_29389;
if(inst_29265){
var statearr_29465_29531 = state_29389__$1;
(statearr_29465_29531[(1)] = (13));

} else {
var statearr_29466_29532 = state_29389__$1;
(statearr_29466_29532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (18))){
var inst_29297 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
if(cljs.core.truth_(inst_29297)){
var statearr_29467_29533 = state_29389__$1;
(statearr_29467_29533[(1)] = (19));

} else {
var statearr_29468_29534 = state_29389__$1;
(statearr_29468_29534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (42))){
var state_29389__$1 = state_29389;
var statearr_29469_29535 = state_29389__$1;
(statearr_29469_29535[(2)] = null);

(statearr_29469_29535[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (37))){
var inst_29355 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29470_29536 = state_29389__$1;
(statearr_29470_29536[(2)] = inst_29355);

(statearr_29470_29536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (8))){
var inst_29250 = (state_29389[(7)]);
var inst_29263 = (state_29389[(22)]);
var inst_29263__$1 = cljs.core.seq.call(null,inst_29250);
var state_29389__$1 = (function (){var statearr_29471 = state_29389;
(statearr_29471[(22)] = inst_29263__$1);

return statearr_29471;
})();
if(inst_29263__$1){
var statearr_29472_29537 = state_29389__$1;
(statearr_29472_29537[(1)] = (10));

} else {
var statearr_29473_29538 = state_29389__$1;
(statearr_29473_29538[(1)] = (11));

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
});})(c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24031__auto__,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____0 = (function (){
var statearr_29477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29477[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__);

(statearr_29477[(1)] = (1));

return statearr_29477;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____1 = (function (state_29389){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_29389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e29478){if((e29478 instanceof Object)){
var ex__24035__auto__ = e29478;
var statearr_29479_29539 = state_29389;
(statearr_29479_29539[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29540 = state_29389;
state_29389 = G__29540;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24230__auto__ = (function (){var statearr_29480 = f__24229__auto__.call(null);
(statearr_29480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_29480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,map__29235,map__29235__$1,opts,before_jsload,on_jsload,reload_dependents,map__29236,map__29236__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24228__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29554,link){
var map__29562 = p__29554;
var map__29562__$1 = ((((!((map__29562 == null)))?((((map__29562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);
var file = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29562,map__29562__$1,file){
return (function (p1__29551_SHARP_,p2__29552_SHARP_){
if(cljs.core._EQ_.call(null,p1__29551_SHARP_,p2__29552_SHARP_)){
return p1__29551_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29562,map__29562__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29583){
var map__29584 = p__29583;
var map__29584__$1 = ((((!((map__29584 == null)))?((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var match_length = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29574_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29574_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29591 = [];
var len__21530__auto___29603 = arguments.length;
var i__21531__auto___29604 = (0);
while(true){
if((i__21531__auto___29604 < len__21530__auto___29603)){
args29591.push((arguments[i__21531__auto___29604]));

var G__29605 = (i__21531__auto___29604 + (1));
i__21531__auto___29604 = G__29605;
continue;
} else {
}
break;
}

var G__29598 = args29591.length;
switch (G__29598) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29591.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29607_SHARP_,p2__29608_SHARP_){
return cljs.core.assoc.call(null,p1__29607_SHARP_,cljs.core.get.call(null,p2__29608_SHARP_,key),p2__29608_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29609){
var map__29612 = p__29609;
var map__29612__$1 = ((((!((map__29612 == null)))?((((map__29612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29612):map__29612);
var f_data = map__29612__$1;
var file = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29617,files_msg){
var map__29626 = p__29617;
var map__29626__$1 = ((((!((map__29626 == null)))?((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var opts = map__29626__$1;
var on_cssload = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29629_29634 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29630_29635 = null;
var count__29631_29636 = (0);
var i__29632_29637 = (0);
while(true){
if((i__29632_29637 < count__29631_29636)){
var f_29638 = cljs.core._nth.call(null,chunk__29630_29635,i__29632_29637);
figwheel.client.file_reloading.reload_css_file.call(null,f_29638);

var G__29639 = seq__29629_29634;
var G__29640 = chunk__29630_29635;
var G__29641 = count__29631_29636;
var G__29642 = (i__29632_29637 + (1));
seq__29629_29634 = G__29639;
chunk__29630_29635 = G__29640;
count__29631_29636 = G__29641;
i__29632_29637 = G__29642;
continue;
} else {
var temp__4657__auto___29643 = cljs.core.seq.call(null,seq__29629_29634);
if(temp__4657__auto___29643){
var seq__29629_29644__$1 = temp__4657__auto___29643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29629_29644__$1)){
var c__21266__auto___29645 = cljs.core.chunk_first.call(null,seq__29629_29644__$1);
var G__29646 = cljs.core.chunk_rest.call(null,seq__29629_29644__$1);
var G__29647 = c__21266__auto___29645;
var G__29648 = cljs.core.count.call(null,c__21266__auto___29645);
var G__29649 = (0);
seq__29629_29634 = G__29646;
chunk__29630_29635 = G__29647;
count__29631_29636 = G__29648;
i__29632_29637 = G__29649;
continue;
} else {
var f_29650 = cljs.core.first.call(null,seq__29629_29644__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29650);

var G__29651 = cljs.core.next.call(null,seq__29629_29644__$1);
var G__29652 = null;
var G__29653 = (0);
var G__29654 = (0);
seq__29629_29634 = G__29651;
chunk__29630_29635 = G__29652;
count__29631_29636 = G__29653;
i__29632_29637 = G__29654;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29626,map__29626__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29626,map__29626__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522181423703