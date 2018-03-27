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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28314_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28314_SHARP_));
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
var seq__28329 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28330 = null;
var count__28331 = (0);
var i__28332 = (0);
while(true){
if((i__28332 < count__28331)){
var n = cljs.core._nth.call(null,chunk__28330,i__28332);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28359 = seq__28329;
var G__28360 = chunk__28330;
var G__28361 = count__28331;
var G__28362 = (i__28332 + (1));
seq__28329 = G__28359;
chunk__28330 = G__28360;
count__28331 = G__28361;
i__28332 = G__28362;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28329);
if(temp__4657__auto__){
var seq__28329__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28329__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__28329__$1);
var G__28373 = cljs.core.chunk_rest.call(null,seq__28329__$1);
var G__28374 = c__21266__auto__;
var G__28375 = cljs.core.count.call(null,c__21266__auto__);
var G__28376 = (0);
seq__28329 = G__28373;
chunk__28330 = G__28374;
count__28331 = G__28375;
i__28332 = G__28376;
continue;
} else {
var n = cljs.core.first.call(null,seq__28329__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28378 = cljs.core.next.call(null,seq__28329__$1);
var G__28379 = null;
var G__28380 = (0);
var G__28381 = (0);
seq__28329 = G__28378;
chunk__28330 = G__28379;
count__28331 = G__28380;
i__28332 = G__28381;
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

var seq__28482_28501 = cljs.core.seq.call(null,deps);
var chunk__28483_28502 = null;
var count__28484_28503 = (0);
var i__28485_28504 = (0);
while(true){
if((i__28485_28504 < count__28484_28503)){
var dep_28505 = cljs.core._nth.call(null,chunk__28483_28502,i__28485_28504);
topo_sort_helper_STAR_.call(null,dep_28505,(depth + (1)),state);

var G__28506 = seq__28482_28501;
var G__28507 = chunk__28483_28502;
var G__28508 = count__28484_28503;
var G__28509 = (i__28485_28504 + (1));
seq__28482_28501 = G__28506;
chunk__28483_28502 = G__28507;
count__28484_28503 = G__28508;
i__28485_28504 = G__28509;
continue;
} else {
var temp__4657__auto___28511 = cljs.core.seq.call(null,seq__28482_28501);
if(temp__4657__auto___28511){
var seq__28482_28513__$1 = temp__4657__auto___28511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28482_28513__$1)){
var c__21266__auto___28517 = cljs.core.chunk_first.call(null,seq__28482_28513__$1);
var G__28518 = cljs.core.chunk_rest.call(null,seq__28482_28513__$1);
var G__28519 = c__21266__auto___28517;
var G__28520 = cljs.core.count.call(null,c__21266__auto___28517);
var G__28521 = (0);
seq__28482_28501 = G__28518;
chunk__28483_28502 = G__28519;
count__28484_28503 = G__28520;
i__28485_28504 = G__28521;
continue;
} else {
var dep_28523 = cljs.core.first.call(null,seq__28482_28513__$1);
topo_sort_helper_STAR_.call(null,dep_28523,(depth + (1)),state);

var G__28525 = cljs.core.next.call(null,seq__28482_28513__$1);
var G__28526 = null;
var G__28527 = (0);
var G__28528 = (0);
seq__28482_28501 = G__28525;
chunk__28483_28502 = G__28526;
count__28484_28503 = G__28527;
i__28485_28504 = G__28528;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28486){
var vec__28490 = p__28486;
var seq__28491 = cljs.core.seq.call(null,vec__28490);
var first__28492 = cljs.core.first.call(null,seq__28491);
var seq__28491__$1 = cljs.core.next.call(null,seq__28491);
var x = first__28492;
var xs = seq__28491__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28490,seq__28491,first__28492,seq__28491__$1,x,xs,get_deps__$1){
return (function (p1__28382_SHARP_){
return clojure.set.difference.call(null,p1__28382_SHARP_,x);
});})(vec__28490,seq__28491,first__28492,seq__28491__$1,x,xs,get_deps__$1))
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
var seq__28543 = cljs.core.seq.call(null,provides);
var chunk__28544 = null;
var count__28545 = (0);
var i__28546 = (0);
while(true){
if((i__28546 < count__28545)){
var prov = cljs.core._nth.call(null,chunk__28544,i__28546);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28547_28559 = cljs.core.seq.call(null,requires);
var chunk__28548_28560 = null;
var count__28549_28561 = (0);
var i__28550_28562 = (0);
while(true){
if((i__28550_28562 < count__28549_28561)){
var req_28563 = cljs.core._nth.call(null,chunk__28548_28560,i__28550_28562);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28563,prov);

var G__28564 = seq__28547_28559;
var G__28565 = chunk__28548_28560;
var G__28566 = count__28549_28561;
var G__28567 = (i__28550_28562 + (1));
seq__28547_28559 = G__28564;
chunk__28548_28560 = G__28565;
count__28549_28561 = G__28566;
i__28550_28562 = G__28567;
continue;
} else {
var temp__4657__auto___28569 = cljs.core.seq.call(null,seq__28547_28559);
if(temp__4657__auto___28569){
var seq__28547_28570__$1 = temp__4657__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28547_28570__$1)){
var c__21266__auto___28571 = cljs.core.chunk_first.call(null,seq__28547_28570__$1);
var G__28573 = cljs.core.chunk_rest.call(null,seq__28547_28570__$1);
var G__28574 = c__21266__auto___28571;
var G__28575 = cljs.core.count.call(null,c__21266__auto___28571);
var G__28576 = (0);
seq__28547_28559 = G__28573;
chunk__28548_28560 = G__28574;
count__28549_28561 = G__28575;
i__28550_28562 = G__28576;
continue;
} else {
var req_28585 = cljs.core.first.call(null,seq__28547_28570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28585,prov);

var G__28586 = cljs.core.next.call(null,seq__28547_28570__$1);
var G__28587 = null;
var G__28588 = (0);
var G__28589 = (0);
seq__28547_28559 = G__28586;
chunk__28548_28560 = G__28587;
count__28549_28561 = G__28588;
i__28550_28562 = G__28589;
continue;
}
} else {
}
}
break;
}

var G__28590 = seq__28543;
var G__28591 = chunk__28544;
var G__28592 = count__28545;
var G__28593 = (i__28546 + (1));
seq__28543 = G__28590;
chunk__28544 = G__28591;
count__28545 = G__28592;
i__28546 = G__28593;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28543);
if(temp__4657__auto__){
var seq__28543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28543__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__28543__$1);
var G__28595 = cljs.core.chunk_rest.call(null,seq__28543__$1);
var G__28596 = c__21266__auto__;
var G__28597 = cljs.core.count.call(null,c__21266__auto__);
var G__28598 = (0);
seq__28543 = G__28595;
chunk__28544 = G__28596;
count__28545 = G__28597;
i__28546 = G__28598;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28543__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28555_28603 = cljs.core.seq.call(null,requires);
var chunk__28556_28604 = null;
var count__28557_28605 = (0);
var i__28558_28606 = (0);
while(true){
if((i__28558_28606 < count__28557_28605)){
var req_28610 = cljs.core._nth.call(null,chunk__28556_28604,i__28558_28606);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28610,prov);

var G__28622 = seq__28555_28603;
var G__28623 = chunk__28556_28604;
var G__28624 = count__28557_28605;
var G__28625 = (i__28558_28606 + (1));
seq__28555_28603 = G__28622;
chunk__28556_28604 = G__28623;
count__28557_28605 = G__28624;
i__28558_28606 = G__28625;
continue;
} else {
var temp__4657__auto___28630__$1 = cljs.core.seq.call(null,seq__28555_28603);
if(temp__4657__auto___28630__$1){
var seq__28555_28633__$1 = temp__4657__auto___28630__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28555_28633__$1)){
var c__21266__auto___28635 = cljs.core.chunk_first.call(null,seq__28555_28633__$1);
var G__28636 = cljs.core.chunk_rest.call(null,seq__28555_28633__$1);
var G__28637 = c__21266__auto___28635;
var G__28638 = cljs.core.count.call(null,c__21266__auto___28635);
var G__28639 = (0);
seq__28555_28603 = G__28636;
chunk__28556_28604 = G__28637;
count__28557_28605 = G__28638;
i__28558_28606 = G__28639;
continue;
} else {
var req_28640 = cljs.core.first.call(null,seq__28555_28633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28640,prov);

var G__28641 = cljs.core.next.call(null,seq__28555_28633__$1);
var G__28642 = null;
var G__28643 = (0);
var G__28644 = (0);
seq__28555_28603 = G__28641;
chunk__28556_28604 = G__28642;
count__28557_28605 = G__28643;
i__28558_28606 = G__28644;
continue;
}
} else {
}
}
break;
}

var G__28645 = cljs.core.next.call(null,seq__28543__$1);
var G__28646 = null;
var G__28647 = (0);
var G__28648 = (0);
seq__28543 = G__28645;
chunk__28544 = G__28646;
count__28545 = G__28647;
i__28546 = G__28648;
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
var seq__28653_28658 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28654_28659 = null;
var count__28655_28660 = (0);
var i__28656_28661 = (0);
while(true){
if((i__28656_28661 < count__28655_28660)){
var ns_28663 = cljs.core._nth.call(null,chunk__28654_28659,i__28656_28661);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28663);

var G__28664 = seq__28653_28658;
var G__28665 = chunk__28654_28659;
var G__28666 = count__28655_28660;
var G__28667 = (i__28656_28661 + (1));
seq__28653_28658 = G__28664;
chunk__28654_28659 = G__28665;
count__28655_28660 = G__28666;
i__28656_28661 = G__28667;
continue;
} else {
var temp__4657__auto___28668 = cljs.core.seq.call(null,seq__28653_28658);
if(temp__4657__auto___28668){
var seq__28653_28669__$1 = temp__4657__auto___28668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28653_28669__$1)){
var c__21266__auto___28678 = cljs.core.chunk_first.call(null,seq__28653_28669__$1);
var G__28679 = cljs.core.chunk_rest.call(null,seq__28653_28669__$1);
var G__28680 = c__21266__auto___28678;
var G__28681 = cljs.core.count.call(null,c__21266__auto___28678);
var G__28682 = (0);
seq__28653_28658 = G__28679;
chunk__28654_28659 = G__28680;
count__28655_28660 = G__28681;
i__28656_28661 = G__28682;
continue;
} else {
var ns_28684 = cljs.core.first.call(null,seq__28653_28669__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28684);

var G__28688 = cljs.core.next.call(null,seq__28653_28669__$1);
var G__28689 = null;
var G__28690 = (0);
var G__28691 = (0);
seq__28653_28658 = G__28688;
chunk__28654_28659 = G__28689;
count__28655_28660 = G__28690;
i__28656_28661 = G__28691;
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
var G__28712__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28713__i = 0, G__28713__a = new Array(arguments.length -  0);
while (G__28713__i < G__28713__a.length) {G__28713__a[G__28713__i] = arguments[G__28713__i + 0]; ++G__28713__i;}
  args = new cljs.core.IndexedSeq(G__28713__a,0);
} 
return G__28712__delegate.call(this,args);};
G__28712.cljs$lang$maxFixedArity = 0;
G__28712.cljs$lang$applyTo = (function (arglist__28714){
var args = cljs.core.seq(arglist__28714);
return G__28712__delegate(args);
});
G__28712.cljs$core$IFn$_invoke$arity$variadic = G__28712__delegate;
return G__28712;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28723 = cljs.core._EQ_;
var expr__28724 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28723.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28724))){
var path_parts = ((function (pred__28723,expr__28724){
return (function (p1__28721_SHARP_){
return clojure.string.split.call(null,p1__28721_SHARP_,/[\/\\]/);
});})(pred__28723,expr__28724))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28723,expr__28724){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28727){if((e28727 instanceof Error)){
var e = e28727;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28727;

}
}})());
});
;})(path_parts,sep,root,pred__28723,expr__28724))
} else {
if(cljs.core.truth_(pred__28723.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28724))){
return ((function (pred__28723,expr__28724){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28723,expr__28724){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28723,expr__28724))
);

return deferred.addErrback(((function (deferred,pred__28723,expr__28724){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28723,expr__28724))
);
});
;})(pred__28723,expr__28724))
} else {
return ((function (pred__28723,expr__28724){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28723,expr__28724))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28730,callback){
var map__28733 = p__28730;
var map__28733__$1 = ((((!((map__28733 == null)))?((((map__28733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28733):map__28733);
var file_msg = map__28733__$1;
var request_url = cljs.core.get.call(null,map__28733__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28733,map__28733__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28733,map__28733__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_28770){
var state_val_28771 = (state_28770[(1)]);
if((state_val_28771 === (7))){
var inst_28766 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28773_28797 = state_28770__$1;
(statearr_28773_28797[(2)] = inst_28766);

(statearr_28773_28797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (1))){
var state_28770__$1 = state_28770;
var statearr_28774_28799 = state_28770__$1;
(statearr_28774_28799[(2)] = null);

(statearr_28774_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (4))){
var inst_28748 = (state_28770[(7)]);
var inst_28748__$1 = (state_28770[(2)]);
var state_28770__$1 = (function (){var statearr_28776 = state_28770;
(statearr_28776[(7)] = inst_28748__$1);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28748__$1)){
var statearr_28777_28804 = state_28770__$1;
(statearr_28777_28804[(1)] = (5));

} else {
var statearr_28778_28805 = state_28770__$1;
(statearr_28778_28805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (6))){
var state_28770__$1 = state_28770;
var statearr_28779_28807 = state_28770__$1;
(statearr_28779_28807[(2)] = null);

(statearr_28779_28807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (3))){
var inst_28768 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28770__$1,inst_28768);
} else {
if((state_val_28771 === (2))){
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28770__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28771 === (11))){
var inst_28762 = (state_28770[(2)]);
var state_28770__$1 = (function (){var statearr_28780 = state_28770;
(statearr_28780[(8)] = inst_28762);

return statearr_28780;
})();
var statearr_28781_28808 = state_28770__$1;
(statearr_28781_28808[(2)] = null);

(statearr_28781_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (9))){
var inst_28753 = (state_28770[(9)]);
var inst_28755 = (state_28770[(10)]);
var inst_28757 = inst_28755.call(null,inst_28753);
var state_28770__$1 = state_28770;
var statearr_28782_28809 = state_28770__$1;
(statearr_28782_28809[(2)] = inst_28757);

(statearr_28782_28809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (5))){
var inst_28748 = (state_28770[(7)]);
var inst_28751 = figwheel.client.file_reloading.blocking_load.call(null,inst_28748);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28770__$1,(8),inst_28751);
} else {
if((state_val_28771 === (10))){
var inst_28753 = (state_28770[(9)]);
var inst_28760 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28753);
var state_28770__$1 = state_28770;
var statearr_28783_28814 = state_28770__$1;
(statearr_28783_28814[(2)] = inst_28760);

(statearr_28783_28814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (8))){
var inst_28748 = (state_28770[(7)]);
var inst_28755 = (state_28770[(10)]);
var inst_28753 = (state_28770[(2)]);
var inst_28754 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28755__$1 = cljs.core.get.call(null,inst_28754,inst_28748);
var state_28770__$1 = (function (){var statearr_28784 = state_28770;
(statearr_28784[(9)] = inst_28753);

(statearr_28784[(10)] = inst_28755__$1);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28755__$1)){
var statearr_28785_28817 = state_28770__$1;
(statearr_28785_28817[(1)] = (9));

} else {
var statearr_28786_28818 = state_28770__$1;
(statearr_28786_28818[(1)] = (10));

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
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24056__auto__ = null;
var figwheel$client$file_reloading$state_machine__24056__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = figwheel$client$file_reloading$state_machine__24056__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var figwheel$client$file_reloading$state_machine__24056__auto____1 = (function (state_28770){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28793){if((e28793 instanceof Object)){
var ex__24059__auto__ = e28793;
var statearr_28794_28819 = state_28770;
(statearr_28794_28819[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28770;
state_28770 = G__28820;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24056__auto__ = function(state_28770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24056__auto____1.call(this,state_28770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24056__auto____0;
figwheel$client$file_reloading$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24056__auto____1;
return figwheel$client$file_reloading$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_28796 = f__24327__auto__.call(null);
(statearr_28796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_28796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28821,callback){
var map__28824 = p__28821;
var map__28824__$1 = ((((!((map__28824 == null)))?((((map__28824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);
var file_msg = map__28824__$1;
var namespace = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28824,map__28824__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28824,map__28824__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28826){
var map__28829 = p__28826;
var map__28829__$1 = ((((!((map__28829 == null)))?((((map__28829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28829):map__28829);
var file_msg = map__28829__$1;
var namespace = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28833,callback){
var map__28836 = p__28833;
var map__28836__$1 = ((((!((map__28836 == null)))?((((map__28836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28836):map__28836);
var file_msg = map__28836__$1;
var request_url = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24326__auto___28949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___28949,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___28949,out){
return (function (state_28931){
var state_val_28932 = (state_28931[(1)]);
if((state_val_28932 === (1))){
var inst_28905 = cljs.core.seq.call(null,files);
var inst_28906 = cljs.core.first.call(null,inst_28905);
var inst_28907 = cljs.core.next.call(null,inst_28905);
var inst_28908 = files;
var state_28931__$1 = (function (){var statearr_28933 = state_28931;
(statearr_28933[(7)] = inst_28908);

(statearr_28933[(8)] = inst_28907);

(statearr_28933[(9)] = inst_28906);

return statearr_28933;
})();
var statearr_28934_28950 = state_28931__$1;
(statearr_28934_28950[(2)] = null);

(statearr_28934_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (2))){
var inst_28908 = (state_28931[(7)]);
var inst_28914 = (state_28931[(10)]);
var inst_28913 = cljs.core.seq.call(null,inst_28908);
var inst_28914__$1 = cljs.core.first.call(null,inst_28913);
var inst_28915 = cljs.core.next.call(null,inst_28913);
var inst_28916 = (inst_28914__$1 == null);
var inst_28917 = cljs.core.not.call(null,inst_28916);
var state_28931__$1 = (function (){var statearr_28935 = state_28931;
(statearr_28935[(10)] = inst_28914__$1);

(statearr_28935[(11)] = inst_28915);

return statearr_28935;
})();
if(inst_28917){
var statearr_28936_28951 = state_28931__$1;
(statearr_28936_28951[(1)] = (4));

} else {
var statearr_28937_28952 = state_28931__$1;
(statearr_28937_28952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (3))){
var inst_28929 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28931__$1,inst_28929);
} else {
if((state_val_28932 === (4))){
var inst_28914 = (state_28931[(10)]);
var inst_28919 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28914);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(7),inst_28919);
} else {
if((state_val_28932 === (5))){
var inst_28925 = cljs.core.async.close_BANG_.call(null,out);
var state_28931__$1 = state_28931;
var statearr_28938_28953 = state_28931__$1;
(statearr_28938_28953[(2)] = inst_28925);

(statearr_28938_28953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (6))){
var inst_28927 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28939_28954 = state_28931__$1;
(statearr_28939_28954[(2)] = inst_28927);

(statearr_28939_28954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (7))){
var inst_28915 = (state_28931[(11)]);
var inst_28921 = (state_28931[(2)]);
var inst_28922 = cljs.core.async.put_BANG_.call(null,out,inst_28921);
var inst_28908 = inst_28915;
var state_28931__$1 = (function (){var statearr_28940 = state_28931;
(statearr_28940[(7)] = inst_28908);

(statearr_28940[(12)] = inst_28922);

return statearr_28940;
})();
var statearr_28941_28955 = state_28931__$1;
(statearr_28941_28955[(2)] = null);

(statearr_28941_28955[(1)] = (2));


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
});})(c__24326__auto___28949,out))
;
return ((function (switch__24055__auto__,c__24326__auto___28949,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____0 = (function (){
var statearr_28945 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28945[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__);

(statearr_28945[(1)] = (1));

return statearr_28945;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____1 = (function (state_28931){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28946){if((e28946 instanceof Object)){
var ex__24059__auto__ = e28946;
var statearr_28947_28956 = state_28931;
(statearr_28947_28956[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28957 = state_28931;
state_28931 = G__28957;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__ = function(state_28931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____1.call(this,state_28931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___28949,out))
})();
var state__24328__auto__ = (function (){var statearr_28948 = f__24327__auto__.call(null);
(statearr_28948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___28949);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___28949,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28958,opts){
var map__28962 = p__28958;
var map__28962__$1 = ((((!((map__28962 == null)))?((((map__28962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28962):map__28962);
var eval_body__$1 = cljs.core.get.call(null,map__28962__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28964){var e = e28964;
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
return (function (p1__28965_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28965_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28974){
var vec__28975 = p__28974;
var k = cljs.core.nth.call(null,vec__28975,(0),null);
var v = cljs.core.nth.call(null,vec__28975,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28978){
var vec__28979 = p__28978;
var k = cljs.core.nth.call(null,vec__28979,(0),null);
var v = cljs.core.nth.call(null,vec__28979,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28985,p__28986){
var map__29233 = p__28985;
var map__29233__$1 = ((((!((map__29233 == null)))?((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233):map__29233);
var opts = map__29233__$1;
var before_jsload = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29234 = p__28986;
var map__29234__$1 = ((((!((map__29234 == null)))?((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);
var msg = map__29234__$1;
var files = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29387){
var state_val_29388 = (state_29387[(1)]);
if((state_val_29388 === (7))){
var inst_29250 = (state_29387[(7)]);
var inst_29248 = (state_29387[(8)]);
var inst_29249 = (state_29387[(9)]);
var inst_29251 = (state_29387[(10)]);
var inst_29256 = cljs.core._nth.call(null,inst_29249,inst_29251);
var inst_29257 = figwheel.client.file_reloading.eval_body.call(null,inst_29256,opts);
var inst_29258 = (inst_29251 + (1));
var tmp29389 = inst_29250;
var tmp29390 = inst_29248;
var tmp29391 = inst_29249;
var inst_29248__$1 = tmp29390;
var inst_29249__$1 = tmp29391;
var inst_29250__$1 = tmp29389;
var inst_29251__$1 = inst_29258;
var state_29387__$1 = (function (){var statearr_29392 = state_29387;
(statearr_29392[(7)] = inst_29250__$1);

(statearr_29392[(11)] = inst_29257);

(statearr_29392[(8)] = inst_29248__$1);

(statearr_29392[(9)] = inst_29249__$1);

(statearr_29392[(10)] = inst_29251__$1);

return statearr_29392;
})();
var statearr_29393_29479 = state_29387__$1;
(statearr_29393_29479[(2)] = null);

(statearr_29393_29479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (20))){
var inst_29291 = (state_29387[(12)]);
var inst_29299 = figwheel.client.file_reloading.sort_files.call(null,inst_29291);
var state_29387__$1 = state_29387;
var statearr_29394_29480 = state_29387__$1;
(statearr_29394_29480[(2)] = inst_29299);

(statearr_29394_29480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (27))){
var state_29387__$1 = state_29387;
var statearr_29395_29481 = state_29387__$1;
(statearr_29395_29481[(2)] = null);

(statearr_29395_29481[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (1))){
var inst_29240 = (state_29387[(13)]);
var inst_29237 = before_jsload.call(null,files);
var inst_29238 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29239 = (function (){return ((function (inst_29240,inst_29237,inst_29238,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28982_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28982_SHARP_);
});
;})(inst_29240,inst_29237,inst_29238,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29240__$1 = cljs.core.filter.call(null,inst_29239,files);
var inst_29241 = cljs.core.not_empty.call(null,inst_29240__$1);
var state_29387__$1 = (function (){var statearr_29396 = state_29387;
(statearr_29396[(13)] = inst_29240__$1);

(statearr_29396[(14)] = inst_29237);

(statearr_29396[(15)] = inst_29238);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29241)){
var statearr_29397_29482 = state_29387__$1;
(statearr_29397_29482[(1)] = (2));

} else {
var statearr_29398_29483 = state_29387__$1;
(statearr_29398_29483[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (24))){
var state_29387__$1 = state_29387;
var statearr_29399_29484 = state_29387__$1;
(statearr_29399_29484[(2)] = null);

(statearr_29399_29484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (39))){
var inst_29341 = (state_29387[(16)]);
var state_29387__$1 = state_29387;
var statearr_29400_29485 = state_29387__$1;
(statearr_29400_29485[(2)] = inst_29341);

(statearr_29400_29485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (46))){
var inst_29382 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29401_29486 = state_29387__$1;
(statearr_29401_29486[(2)] = inst_29382);

(statearr_29401_29486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (4))){
var inst_29285 = (state_29387[(2)]);
var inst_29286 = cljs.core.List.EMPTY;
var inst_29287 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29286);
var inst_29288 = (function (){return ((function (inst_29285,inst_29286,inst_29287,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28983_SHARP_){
var and__20443__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28983_SHARP_);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28983_SHARP_));
} else {
return and__20443__auto__;
}
});
;})(inst_29285,inst_29286,inst_29287,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29289 = cljs.core.filter.call(null,inst_29288,files);
var inst_29290 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29291 = cljs.core.concat.call(null,inst_29289,inst_29290);
var state_29387__$1 = (function (){var statearr_29402 = state_29387;
(statearr_29402[(17)] = inst_29287);

(statearr_29402[(18)] = inst_29285);

(statearr_29402[(12)] = inst_29291);

return statearr_29402;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29403_29487 = state_29387__$1;
(statearr_29403_29487[(1)] = (16));

} else {
var statearr_29404_29488 = state_29387__$1;
(statearr_29404_29488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (15))){
var inst_29275 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29405_29489 = state_29387__$1;
(statearr_29405_29489[(2)] = inst_29275);

(statearr_29405_29489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (21))){
var inst_29301 = (state_29387[(19)]);
var inst_29301__$1 = (state_29387[(2)]);
var inst_29302 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29301__$1);
var state_29387__$1 = (function (){var statearr_29406 = state_29387;
(statearr_29406[(19)] = inst_29301__$1);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29387__$1,(22),inst_29302);
} else {
if((state_val_29388 === (31))){
var inst_29385 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29387__$1,inst_29385);
} else {
if((state_val_29388 === (32))){
var inst_29341 = (state_29387[(16)]);
var inst_29346 = inst_29341.cljs$lang$protocol_mask$partition0$;
var inst_29347 = (inst_29346 & (64));
var inst_29348 = inst_29341.cljs$core$ISeq$;
var inst_29349 = (inst_29347) || (inst_29348);
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29349)){
var statearr_29407_29490 = state_29387__$1;
(statearr_29407_29490[(1)] = (35));

} else {
var statearr_29408_29493 = state_29387__$1;
(statearr_29408_29493[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (40))){
var inst_29362 = (state_29387[(20)]);
var inst_29361 = (state_29387[(2)]);
var inst_29362__$1 = cljs.core.get.call(null,inst_29361,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29363 = cljs.core.get.call(null,inst_29361,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29364 = cljs.core.not_empty.call(null,inst_29362__$1);
var state_29387__$1 = (function (){var statearr_29409 = state_29387;
(statearr_29409[(20)] = inst_29362__$1);

(statearr_29409[(21)] = inst_29363);

return statearr_29409;
})();
if(cljs.core.truth_(inst_29364)){
var statearr_29410_29494 = state_29387__$1;
(statearr_29410_29494[(1)] = (41));

} else {
var statearr_29411_29495 = state_29387__$1;
(statearr_29411_29495[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (33))){
var state_29387__$1 = state_29387;
var statearr_29412_29496 = state_29387__$1;
(statearr_29412_29496[(2)] = false);

(statearr_29412_29496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (13))){
var inst_29261 = (state_29387[(22)]);
var inst_29265 = cljs.core.chunk_first.call(null,inst_29261);
var inst_29266 = cljs.core.chunk_rest.call(null,inst_29261);
var inst_29267 = cljs.core.count.call(null,inst_29265);
var inst_29248 = inst_29266;
var inst_29249 = inst_29265;
var inst_29250 = inst_29267;
var inst_29251 = (0);
var state_29387__$1 = (function (){var statearr_29413 = state_29387;
(statearr_29413[(7)] = inst_29250);

(statearr_29413[(8)] = inst_29248);

(statearr_29413[(9)] = inst_29249);

(statearr_29413[(10)] = inst_29251);

return statearr_29413;
})();
var statearr_29414_29515 = state_29387__$1;
(statearr_29414_29515[(2)] = null);

(statearr_29414_29515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (22))){
var inst_29301 = (state_29387[(19)]);
var inst_29304 = (state_29387[(23)]);
var inst_29305 = (state_29387[(24)]);
var inst_29309 = (state_29387[(25)]);
var inst_29304__$1 = (state_29387[(2)]);
var inst_29305__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29304__$1);
var inst_29306 = (function (){var all_files = inst_29301;
var res_SINGLEQUOTE_ = inst_29304__$1;
var res = inst_29305__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29301,inst_29304,inst_29305,inst_29309,inst_29304__$1,inst_29305__$1,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28984_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28984_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29301,inst_29304,inst_29305,inst_29309,inst_29304__$1,inst_29305__$1,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29307 = cljs.core.filter.call(null,inst_29306,inst_29304__$1);
var inst_29308 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29309__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29308);
var inst_29310 = cljs.core.not_empty.call(null,inst_29309__$1);
var state_29387__$1 = (function (){var statearr_29415 = state_29387;
(statearr_29415[(26)] = inst_29307);

(statearr_29415[(23)] = inst_29304__$1);

(statearr_29415[(24)] = inst_29305__$1);

(statearr_29415[(25)] = inst_29309__$1);

return statearr_29415;
})();
if(cljs.core.truth_(inst_29310)){
var statearr_29416_29538 = state_29387__$1;
(statearr_29416_29538[(1)] = (23));

} else {
var statearr_29417_29539 = state_29387__$1;
(statearr_29417_29539[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (36))){
var state_29387__$1 = state_29387;
var statearr_29418_29540 = state_29387__$1;
(statearr_29418_29540[(2)] = false);

(statearr_29418_29540[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (41))){
var inst_29362 = (state_29387[(20)]);
var inst_29366 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29367 = cljs.core.map.call(null,inst_29366,inst_29362);
var inst_29368 = cljs.core.pr_str.call(null,inst_29367);
var inst_29369 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29368)].join('');
var inst_29370 = figwheel.client.utils.log.call(null,inst_29369);
var state_29387__$1 = state_29387;
var statearr_29419_29545 = state_29387__$1;
(statearr_29419_29545[(2)] = inst_29370);

(statearr_29419_29545[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (43))){
var inst_29363 = (state_29387[(21)]);
var inst_29373 = (state_29387[(2)]);
var inst_29374 = cljs.core.not_empty.call(null,inst_29363);
var state_29387__$1 = (function (){var statearr_29420 = state_29387;
(statearr_29420[(27)] = inst_29373);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29374)){
var statearr_29421_29553 = state_29387__$1;
(statearr_29421_29553[(1)] = (44));

} else {
var statearr_29422_29556 = state_29387__$1;
(statearr_29422_29556[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (29))){
var inst_29301 = (state_29387[(19)]);
var inst_29341 = (state_29387[(16)]);
var inst_29307 = (state_29387[(26)]);
var inst_29304 = (state_29387[(23)]);
var inst_29305 = (state_29387[(24)]);
var inst_29309 = (state_29387[(25)]);
var inst_29337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29340 = (function (){var all_files = inst_29301;
var res_SINGLEQUOTE_ = inst_29304;
var res = inst_29305;
var files_not_loaded = inst_29307;
var dependencies_that_loaded = inst_29309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29341,inst_29307,inst_29304,inst_29305,inst_29309,inst_29337,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29339){
var map__29423 = p__29339;
var map__29423__$1 = ((((!((map__29423 == null)))?((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var namespace = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29341,inst_29307,inst_29304,inst_29305,inst_29309,inst_29337,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29341__$1 = cljs.core.group_by.call(null,inst_29340,inst_29307);
var inst_29343 = (inst_29341__$1 == null);
var inst_29344 = cljs.core.not.call(null,inst_29343);
var state_29387__$1 = (function (){var statearr_29425 = state_29387;
(statearr_29425[(16)] = inst_29341__$1);

(statearr_29425[(28)] = inst_29337);

return statearr_29425;
})();
if(inst_29344){
var statearr_29426_29601 = state_29387__$1;
(statearr_29426_29601[(1)] = (32));

} else {
var statearr_29427_29602 = state_29387__$1;
(statearr_29427_29602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (44))){
var inst_29363 = (state_29387[(21)]);
var inst_29376 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29363);
var inst_29377 = cljs.core.pr_str.call(null,inst_29376);
var inst_29378 = [cljs.core.str("not required: "),cljs.core.str(inst_29377)].join('');
var inst_29379 = figwheel.client.utils.log.call(null,inst_29378);
var state_29387__$1 = state_29387;
var statearr_29428_29606 = state_29387__$1;
(statearr_29428_29606[(2)] = inst_29379);

(statearr_29428_29606[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (6))){
var inst_29282 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29429_29608 = state_29387__$1;
(statearr_29429_29608[(2)] = inst_29282);

(statearr_29429_29608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (28))){
var inst_29307 = (state_29387[(26)]);
var inst_29334 = (state_29387[(2)]);
var inst_29335 = cljs.core.not_empty.call(null,inst_29307);
var state_29387__$1 = (function (){var statearr_29430 = state_29387;
(statearr_29430[(29)] = inst_29334);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29335)){
var statearr_29431_29612 = state_29387__$1;
(statearr_29431_29612[(1)] = (29));

} else {
var statearr_29432_29613 = state_29387__$1;
(statearr_29432_29613[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (25))){
var inst_29305 = (state_29387[(24)]);
var inst_29321 = (state_29387[(2)]);
var inst_29322 = cljs.core.not_empty.call(null,inst_29305);
var state_29387__$1 = (function (){var statearr_29433 = state_29387;
(statearr_29433[(30)] = inst_29321);

return statearr_29433;
})();
if(cljs.core.truth_(inst_29322)){
var statearr_29434_29618 = state_29387__$1;
(statearr_29434_29618[(1)] = (26));

} else {
var statearr_29435_29620 = state_29387__$1;
(statearr_29435_29620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (34))){
var inst_29356 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29356)){
var statearr_29436_29621 = state_29387__$1;
(statearr_29436_29621[(1)] = (38));

} else {
var statearr_29437_29622 = state_29387__$1;
(statearr_29437_29622[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (17))){
var state_29387__$1 = state_29387;
var statearr_29438_29623 = state_29387__$1;
(statearr_29438_29623[(2)] = recompile_dependents);

(statearr_29438_29623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (3))){
var state_29387__$1 = state_29387;
var statearr_29439_29624 = state_29387__$1;
(statearr_29439_29624[(2)] = null);

(statearr_29439_29624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (12))){
var inst_29278 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29440_29627 = state_29387__$1;
(statearr_29440_29627[(2)] = inst_29278);

(statearr_29440_29627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (2))){
var inst_29240 = (state_29387[(13)]);
var inst_29247 = cljs.core.seq.call(null,inst_29240);
var inst_29248 = inst_29247;
var inst_29249 = null;
var inst_29250 = (0);
var inst_29251 = (0);
var state_29387__$1 = (function (){var statearr_29441 = state_29387;
(statearr_29441[(7)] = inst_29250);

(statearr_29441[(8)] = inst_29248);

(statearr_29441[(9)] = inst_29249);

(statearr_29441[(10)] = inst_29251);

return statearr_29441;
})();
var statearr_29442_29629 = state_29387__$1;
(statearr_29442_29629[(2)] = null);

(statearr_29442_29629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (23))){
var inst_29301 = (state_29387[(19)]);
var inst_29307 = (state_29387[(26)]);
var inst_29304 = (state_29387[(23)]);
var inst_29305 = (state_29387[(24)]);
var inst_29309 = (state_29387[(25)]);
var inst_29312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29314 = (function (){var all_files = inst_29301;
var res_SINGLEQUOTE_ = inst_29304;
var res = inst_29305;
var files_not_loaded = inst_29307;
var dependencies_that_loaded = inst_29309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29312,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29313){
var map__29443 = p__29313;
var map__29443__$1 = ((((!((map__29443 == null)))?((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443):map__29443);
var request_url = cljs.core.get.call(null,map__29443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29312,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29315 = cljs.core.reverse.call(null,inst_29309);
var inst_29316 = cljs.core.map.call(null,inst_29314,inst_29315);
var inst_29317 = cljs.core.pr_str.call(null,inst_29316);
var inst_29318 = figwheel.client.utils.log.call(null,inst_29317);
var state_29387__$1 = (function (){var statearr_29445 = state_29387;
(statearr_29445[(31)] = inst_29312);

return statearr_29445;
})();
var statearr_29446_29634 = state_29387__$1;
(statearr_29446_29634[(2)] = inst_29318);

(statearr_29446_29634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (35))){
var state_29387__$1 = state_29387;
var statearr_29447_29636 = state_29387__$1;
(statearr_29447_29636[(2)] = true);

(statearr_29447_29636[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (19))){
var inst_29291 = (state_29387[(12)]);
var inst_29297 = figwheel.client.file_reloading.expand_files.call(null,inst_29291);
var state_29387__$1 = state_29387;
var statearr_29448_29638 = state_29387__$1;
(statearr_29448_29638[(2)] = inst_29297);

(statearr_29448_29638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (11))){
var state_29387__$1 = state_29387;
var statearr_29449_29644 = state_29387__$1;
(statearr_29449_29644[(2)] = null);

(statearr_29449_29644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (9))){
var inst_29280 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29450_29650 = state_29387__$1;
(statearr_29450_29650[(2)] = inst_29280);

(statearr_29450_29650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (5))){
var inst_29250 = (state_29387[(7)]);
var inst_29251 = (state_29387[(10)]);
var inst_29253 = (inst_29251 < inst_29250);
var inst_29254 = inst_29253;
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29254)){
var statearr_29451_29655 = state_29387__$1;
(statearr_29451_29655[(1)] = (7));

} else {
var statearr_29452_29656 = state_29387__$1;
(statearr_29452_29656[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (14))){
var inst_29261 = (state_29387[(22)]);
var inst_29270 = cljs.core.first.call(null,inst_29261);
var inst_29271 = figwheel.client.file_reloading.eval_body.call(null,inst_29270,opts);
var inst_29272 = cljs.core.next.call(null,inst_29261);
var inst_29248 = inst_29272;
var inst_29249 = null;
var inst_29250 = (0);
var inst_29251 = (0);
var state_29387__$1 = (function (){var statearr_29453 = state_29387;
(statearr_29453[(7)] = inst_29250);

(statearr_29453[(8)] = inst_29248);

(statearr_29453[(9)] = inst_29249);

(statearr_29453[(32)] = inst_29271);

(statearr_29453[(10)] = inst_29251);

return statearr_29453;
})();
var statearr_29454_29670 = state_29387__$1;
(statearr_29454_29670[(2)] = null);

(statearr_29454_29670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (45))){
var state_29387__$1 = state_29387;
var statearr_29455_29676 = state_29387__$1;
(statearr_29455_29676[(2)] = null);

(statearr_29455_29676[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (26))){
var inst_29301 = (state_29387[(19)]);
var inst_29307 = (state_29387[(26)]);
var inst_29304 = (state_29387[(23)]);
var inst_29305 = (state_29387[(24)]);
var inst_29309 = (state_29387[(25)]);
var inst_29324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29326 = (function (){var all_files = inst_29301;
var res_SINGLEQUOTE_ = inst_29304;
var res = inst_29305;
var files_not_loaded = inst_29307;
var dependencies_that_loaded = inst_29309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29324,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29325){
var map__29456 = p__29325;
var map__29456__$1 = ((((!((map__29456 == null)))?((((map__29456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29456):map__29456);
var namespace = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29324,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29327 = cljs.core.map.call(null,inst_29326,inst_29305);
var inst_29328 = cljs.core.pr_str.call(null,inst_29327);
var inst_29329 = figwheel.client.utils.log.call(null,inst_29328);
var inst_29330 = (function (){var all_files = inst_29301;
var res_SINGLEQUOTE_ = inst_29304;
var res = inst_29305;
var files_not_loaded = inst_29307;
var dependencies_that_loaded = inst_29309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29324,inst_29326,inst_29327,inst_29328,inst_29329,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29301,inst_29307,inst_29304,inst_29305,inst_29309,inst_29324,inst_29326,inst_29327,inst_29328,inst_29329,state_val_29388,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29331 = setTimeout(inst_29330,(10));
var state_29387__$1 = (function (){var statearr_29458 = state_29387;
(statearr_29458[(33)] = inst_29324);

(statearr_29458[(34)] = inst_29329);

return statearr_29458;
})();
var statearr_29459_29697 = state_29387__$1;
(statearr_29459_29697[(2)] = inst_29331);

(statearr_29459_29697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (16))){
var state_29387__$1 = state_29387;
var statearr_29460_29698 = state_29387__$1;
(statearr_29460_29698[(2)] = reload_dependents);

(statearr_29460_29698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (38))){
var inst_29341 = (state_29387[(16)]);
var inst_29358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29341);
var state_29387__$1 = state_29387;
var statearr_29461_29699 = state_29387__$1;
(statearr_29461_29699[(2)] = inst_29358);

(statearr_29461_29699[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (30))){
var state_29387__$1 = state_29387;
var statearr_29462_29701 = state_29387__$1;
(statearr_29462_29701[(2)] = null);

(statearr_29462_29701[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (10))){
var inst_29261 = (state_29387[(22)]);
var inst_29263 = cljs.core.chunked_seq_QMARK_.call(null,inst_29261);
var state_29387__$1 = state_29387;
if(inst_29263){
var statearr_29463_29702 = state_29387__$1;
(statearr_29463_29702[(1)] = (13));

} else {
var statearr_29464_29703 = state_29387__$1;
(statearr_29464_29703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (18))){
var inst_29295 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29295)){
var statearr_29465_29704 = state_29387__$1;
(statearr_29465_29704[(1)] = (19));

} else {
var statearr_29466_29706 = state_29387__$1;
(statearr_29466_29706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (42))){
var state_29387__$1 = state_29387;
var statearr_29467_29707 = state_29387__$1;
(statearr_29467_29707[(2)] = null);

(statearr_29467_29707[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (37))){
var inst_29353 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29468_29710 = state_29387__$1;
(statearr_29468_29710[(2)] = inst_29353);

(statearr_29468_29710[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (8))){
var inst_29248 = (state_29387[(8)]);
var inst_29261 = (state_29387[(22)]);
var inst_29261__$1 = cljs.core.seq.call(null,inst_29248);
var state_29387__$1 = (function (){var statearr_29469 = state_29387;
(statearr_29469[(22)] = inst_29261__$1);

return statearr_29469;
})();
if(inst_29261__$1){
var statearr_29470_29716 = state_29387__$1;
(statearr_29470_29716[(1)] = (10));

} else {
var statearr_29471_29717 = state_29387__$1;
(statearr_29471_29717[(1)] = (11));

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
});})(c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24055__auto__,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____0 = (function (){
var statearr_29475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29475[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__);

(statearr_29475[(1)] = (1));

return statearr_29475;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____1 = (function (state_29387){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_29387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e29476){if((e29476 instanceof Object)){
var ex__24059__auto__ = e29476;
var statearr_29477_29726 = state_29387;
(statearr_29477_29726[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29728 = state_29387;
state_29387 = G__29728;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__ = function(state_29387){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____1.call(this,state_29387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24328__auto__ = (function (){var statearr_29478 = f__24327__auto__.call(null);
(statearr_29478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_29478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,map__29233,map__29233__$1,opts,before_jsload,on_jsload,reload_dependents,map__29234,map__29234__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24326__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29738,link){
var map__29741 = p__29738;
var map__29741__$1 = ((((!((map__29741 == null)))?((((map__29741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29741):map__29741);
var file = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29741,map__29741__$1,file){
return (function (p1__29736_SHARP_,p2__29737_SHARP_){
if(cljs.core._EQ_.call(null,p1__29736_SHARP_,p2__29737_SHARP_)){
return p1__29736_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29741,map__29741__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29753){
var map__29754 = p__29753;
var map__29754__$1 = ((((!((map__29754 == null)))?((((map__29754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29754):map__29754);
var match_length = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29749_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29749_SHARP_);
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
var args29764 = [];
var len__21530__auto___29767 = arguments.length;
var i__21531__auto___29768 = (0);
while(true){
if((i__21531__auto___29768 < len__21530__auto___29767)){
args29764.push((arguments[i__21531__auto___29768]));

var G__29770 = (i__21531__auto___29768 + (1));
i__21531__auto___29768 = G__29770;
continue;
} else {
}
break;
}

var G__29766 = args29764.length;
switch (G__29766) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29764.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29775_SHARP_,p2__29776_SHARP_){
return cljs.core.assoc.call(null,p1__29775_SHARP_,cljs.core.get.call(null,p2__29776_SHARP_,key),p2__29776_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29782){
var map__29785 = p__29782;
var map__29785__$1 = ((((!((map__29785 == null)))?((((map__29785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);
var f_data = map__29785__$1;
var file = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29790,files_msg){
var map__29799 = p__29790;
var map__29799__$1 = ((((!((map__29799 == null)))?((((map__29799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29799):map__29799);
var opts = map__29799__$1;
var on_cssload = cljs.core.get.call(null,map__29799__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29801_29805 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29802_29806 = null;
var count__29803_29807 = (0);
var i__29804_29808 = (0);
while(true){
if((i__29804_29808 < count__29803_29807)){
var f_29812 = cljs.core._nth.call(null,chunk__29802_29806,i__29804_29808);
figwheel.client.file_reloading.reload_css_file.call(null,f_29812);

var G__29813 = seq__29801_29805;
var G__29814 = chunk__29802_29806;
var G__29815 = count__29803_29807;
var G__29816 = (i__29804_29808 + (1));
seq__29801_29805 = G__29813;
chunk__29802_29806 = G__29814;
count__29803_29807 = G__29815;
i__29804_29808 = G__29816;
continue;
} else {
var temp__4657__auto___29820 = cljs.core.seq.call(null,seq__29801_29805);
if(temp__4657__auto___29820){
var seq__29801_29821__$1 = temp__4657__auto___29820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29801_29821__$1)){
var c__21266__auto___29823 = cljs.core.chunk_first.call(null,seq__29801_29821__$1);
var G__29824 = cljs.core.chunk_rest.call(null,seq__29801_29821__$1);
var G__29825 = c__21266__auto___29823;
var G__29826 = cljs.core.count.call(null,c__21266__auto___29823);
var G__29827 = (0);
seq__29801_29805 = G__29824;
chunk__29802_29806 = G__29825;
count__29803_29807 = G__29826;
i__29804_29808 = G__29827;
continue;
} else {
var f_29828 = cljs.core.first.call(null,seq__29801_29821__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29828);

var G__29829 = cljs.core.next.call(null,seq__29801_29821__$1);
var G__29830 = null;
var G__29831 = (0);
var G__29832 = (0);
seq__29801_29805 = G__29829;
chunk__29802_29806 = G__29830;
count__29803_29807 = G__29831;
i__29804_29808 = G__29832;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29799,map__29799__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29799,map__29799__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522121080607