// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('advenjure.ui.input');
goog.require('figwheel.client');
goog.require('latadventure.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),true,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__23747__delegate = function (x){
if(cljs.core.truth_(advenjure.ui.input.figwheel_cleanup)){
return cljs.core.apply.call(null,advenjure.ui.input.figwheel_cleanup,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'advenjure.ui.input/figwheel-cleanup' is missing");
}
};
var G__23747 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23748__i = 0, G__23748__a = new Array(arguments.length -  0);
while (G__23748__i < G__23748__a.length) {G__23748__a[G__23748__i] = arguments[G__23748__i + 0]; ++G__23748__i;}
  x = new cljs.core.IndexedSeq(G__23748__a,0);
} 
return G__23747__delegate.call(this,x);};
G__23747.cljs$lang$maxFixedArity = 0;
G__23747.cljs$lang$applyTo = (function (arglist__23749){
var x = cljs.core.seq(arglist__23749);
return G__23747__delegate(x);
});
G__23747.cljs$core$IFn$_invoke$arity$variadic = G__23747__delegate;
return G__23747;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1522181797588