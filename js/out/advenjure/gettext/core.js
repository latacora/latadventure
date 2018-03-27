// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.gettext.core');
goog.require('cljs.core');
goog.require('advenjure.text.en_past');
goog.require('goog.string');
goog.require('goog.string.format');
advenjure.gettext.core.format = goog.string.format;
advenjure.gettext.core._STAR_text_source_STAR_ = advenjure.text.en_past.dictionary;
/**
 * Look up the given key in the current text source dictionary.
 *   If not found return the key itself.
 */
advenjure.gettext.core.gettext = (function advenjure$gettext$core$gettext(var_args){
var args__21537__auto__ = [];
var len__21530__auto___21793 = arguments.length;
var i__21531__auto___21794 = (0);
while(true){
if((i__21531__auto___21794 < len__21530__auto___21793)){
args__21537__auto__.push((arguments[i__21531__auto___21794]));

var G__21795 = (i__21531__auto___21794 + (1));
i__21531__auto___21794 = G__21795;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return advenjure.gettext.core.gettext.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

advenjure.gettext.core.gettext.cljs$core$IFn$_invoke$arity$variadic = (function (text_key,replacements){
var text_value = cljs.core.get.call(null,advenjure.gettext.core._STAR_text_source_STAR_,text_key,text_key);
var text_value__$1 = ((cljs.core.fn_QMARK_.call(null,text_value))?text_value.call(null,null):text_value);
return cljs.core.apply.call(null,advenjure.gettext.core.format,text_value__$1,replacements);
});

advenjure.gettext.core.gettext.cljs$lang$maxFixedArity = (1);

advenjure.gettext.core.gettext.cljs$lang$applyTo = (function (seq21786){
var G__21787 = cljs.core.first.call(null,seq21786);
var seq21786__$1 = cljs.core.next.call(null,seq21786);
return advenjure.gettext.core.gettext.cljs$core$IFn$_invoke$arity$variadic(G__21787,seq21786__$1);
});

advenjure.gettext.core.pgettext = (function advenjure$gettext$core$pgettext(var_args){
var args__21537__auto__ = [];
var len__21530__auto___21808 = arguments.length;
var i__21531__auto___21809 = (0);
while(true){
if((i__21531__auto___21809 < len__21530__auto___21808)){
args__21537__auto__.push((arguments[i__21531__auto___21809]));

var G__21810 = (i__21531__auto___21809 + (1));
i__21531__auto___21809 = G__21810;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.gettext.core.pgettext.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.gettext.core.pgettext.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,text_key,replacements){
var text_value = cljs.core.get.call(null,advenjure.gettext.core._STAR_text_source_STAR_,text_key,text_key);
var text_value__$1 = ((cljs.core.fn_QMARK_.call(null,text_value))?text_value.call(null,ctx):text_value);
return cljs.core.apply.call(null,advenjure.gettext.core.format,text_value__$1,replacements);
});

advenjure.gettext.core.pgettext.cljs$lang$maxFixedArity = (2);

advenjure.gettext.core.pgettext.cljs$lang$applyTo = (function (seq21803){
var G__21805 = cljs.core.first.call(null,seq21803);
var seq21803__$1 = cljs.core.next.call(null,seq21803);
var G__21806 = cljs.core.first.call(null,seq21803__$1);
var seq21803__$2 = cljs.core.next.call(null,seq21803__$1);
return advenjure.gettext.core.pgettext.cljs$core$IFn$_invoke$arity$variadic(G__21805,G__21806,seq21803__$2);
});

advenjure.gettext.core._ = advenjure.gettext.core.gettext;
advenjure.gettext.core.p_ = advenjure.gettext.core.pgettext;

//# sourceMappingURL=core.js.map?rel=1522181418541