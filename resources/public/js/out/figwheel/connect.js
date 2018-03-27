// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('advenjure.ui.input');
goog.require('figwheel.client');
goog.require('latadventure.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),true,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__23852__delegate = function (x){
if(cljs.core.truth_(advenjure.ui.input.figwheel_cleanup)){
return cljs.core.apply.call(null,advenjure.ui.input.figwheel_cleanup,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'advenjure.ui.input/figwheel-cleanup' is missing");
}
};
var G__23852 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23853__i = 0, G__23853__a = new Array(arguments.length -  0);
while (G__23853__i < G__23853__a.length) {G__23853__a[G__23853__i] = arguments[G__23853__i + 0]; ++G__23853__i;}
  x = new cljs.core.IndexedSeq(G__23853__a,0);
} 
return G__23852__delegate.call(this,x);};
G__23852.cljs$lang$maxFixedArity = 0;
G__23852.cljs$lang$applyTo = (function (arglist__23854){
var x = cljs.core.seq(arglist__23854);
return G__23852__delegate(x);
});
G__23852.cljs$core$IFn$_invoke$arity$variadic = G__23852__delegate;
return G__23852;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1522180235120