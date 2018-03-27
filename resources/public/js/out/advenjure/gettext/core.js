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
var len__21530__auto___21784 = arguments.length;
var i__21531__auto___21785 = (0);
while(true){
if((i__21531__auto___21785 < len__21530__auto___21784)){
args__21537__auto__.push((arguments[i__21531__auto___21785]));

var G__21786 = (i__21531__auto___21785 + (1));
i__21531__auto___21785 = G__21786;
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

advenjure.gettext.core.gettext.cljs$lang$applyTo = (function (seq21778){
var G__21779 = cljs.core.first.call(null,seq21778);
var seq21778__$1 = cljs.core.next.call(null,seq21778);
return advenjure.gettext.core.gettext.cljs$core$IFn$_invoke$arity$variadic(G__21779,seq21778__$1);
});

advenjure.gettext.core.pgettext = (function advenjure$gettext$core$pgettext(var_args){
var args__21537__auto__ = [];
var len__21530__auto___21802 = arguments.length;
var i__21531__auto___21803 = (0);
while(true){
if((i__21531__auto___21803 < len__21530__auto___21802)){
args__21537__auto__.push((arguments[i__21531__auto___21803]));

var G__21804 = (i__21531__auto___21803 + (1));
i__21531__auto___21803 = G__21804;
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

advenjure.gettext.core.pgettext.cljs$lang$applyTo = (function (seq21789){
var G__21790 = cljs.core.first.call(null,seq21789);
var seq21789__$1 = cljs.core.next.call(null,seq21789);
var G__21791 = cljs.core.first.call(null,seq21789__$1);
var seq21789__$2 = cljs.core.next.call(null,seq21789__$1);
return advenjure.gettext.core.pgettext.cljs$core$IFn$_invoke$arity$variadic(G__21790,G__21791,seq21789__$2);
});

advenjure.gettext.core._ = advenjure.gettext.core.gettext;
advenjure.gettext.core.p_ = advenjure.gettext.core.pgettext;

//# sourceMappingURL=core.js.map?rel=1522121074002