// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32857){
var map__32882 = p__32857;
var map__32882__$1 = ((((!((map__32882 == null)))?((((map__32882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32882):map__32882);
var m = map__32882__$1;
var n = cljs.core.get.call(null,map__32882__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32884_32906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32885_32907 = null;
var count__32886_32908 = (0);
var i__32887_32909 = (0);
while(true){
if((i__32887_32909 < count__32886_32908)){
var f_32910 = cljs.core._nth.call(null,chunk__32885_32907,i__32887_32909);
cljs.core.println.call(null,"  ",f_32910);

var G__32911 = seq__32884_32906;
var G__32912 = chunk__32885_32907;
var G__32913 = count__32886_32908;
var G__32914 = (i__32887_32909 + (1));
seq__32884_32906 = G__32911;
chunk__32885_32907 = G__32912;
count__32886_32908 = G__32913;
i__32887_32909 = G__32914;
continue;
} else {
var temp__4657__auto___32915 = cljs.core.seq.call(null,seq__32884_32906);
if(temp__4657__auto___32915){
var seq__32884_32916__$1 = temp__4657__auto___32915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32884_32916__$1)){
var c__21266__auto___32917 = cljs.core.chunk_first.call(null,seq__32884_32916__$1);
var G__32918 = cljs.core.chunk_rest.call(null,seq__32884_32916__$1);
var G__32919 = c__21266__auto___32917;
var G__32920 = cljs.core.count.call(null,c__21266__auto___32917);
var G__32921 = (0);
seq__32884_32906 = G__32918;
chunk__32885_32907 = G__32919;
count__32886_32908 = G__32920;
i__32887_32909 = G__32921;
continue;
} else {
var f_32922 = cljs.core.first.call(null,seq__32884_32916__$1);
cljs.core.println.call(null,"  ",f_32922);

var G__32923 = cljs.core.next.call(null,seq__32884_32916__$1);
var G__32924 = null;
var G__32925 = (0);
var G__32926 = (0);
seq__32884_32906 = G__32923;
chunk__32885_32907 = G__32924;
count__32886_32908 = G__32925;
i__32887_32909 = G__32926;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32927);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32927)))?cljs.core.second.call(null,arglists_32927):arglists_32927));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32888_32932 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32889_32933 = null;
var count__32890_32934 = (0);
var i__32891_32935 = (0);
while(true){
if((i__32891_32935 < count__32890_32934)){
var vec__32892_32937 = cljs.core._nth.call(null,chunk__32889_32933,i__32891_32935);
var name_32938 = cljs.core.nth.call(null,vec__32892_32937,(0),null);
var map__32895_32939 = cljs.core.nth.call(null,vec__32892_32937,(1),null);
var map__32895_32940__$1 = ((((!((map__32895_32939 == null)))?((((map__32895_32939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32895_32939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895_32939):map__32895_32939);
var doc_32941 = cljs.core.get.call(null,map__32895_32940__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32942 = cljs.core.get.call(null,map__32895_32940__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32938);

cljs.core.println.call(null," ",arglists_32942);

if(cljs.core.truth_(doc_32941)){
cljs.core.println.call(null," ",doc_32941);
} else {
}

var G__32953 = seq__32888_32932;
var G__32954 = chunk__32889_32933;
var G__32955 = count__32890_32934;
var G__32956 = (i__32891_32935 + (1));
seq__32888_32932 = G__32953;
chunk__32889_32933 = G__32954;
count__32890_32934 = G__32955;
i__32891_32935 = G__32956;
continue;
} else {
var temp__4657__auto___32957 = cljs.core.seq.call(null,seq__32888_32932);
if(temp__4657__auto___32957){
var seq__32888_32958__$1 = temp__4657__auto___32957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32888_32958__$1)){
var c__21266__auto___32959 = cljs.core.chunk_first.call(null,seq__32888_32958__$1);
var G__32960 = cljs.core.chunk_rest.call(null,seq__32888_32958__$1);
var G__32961 = c__21266__auto___32959;
var G__32962 = cljs.core.count.call(null,c__21266__auto___32959);
var G__32963 = (0);
seq__32888_32932 = G__32960;
chunk__32889_32933 = G__32961;
count__32890_32934 = G__32962;
i__32891_32935 = G__32963;
continue;
} else {
var vec__32897_32964 = cljs.core.first.call(null,seq__32888_32958__$1);
var name_32965 = cljs.core.nth.call(null,vec__32897_32964,(0),null);
var map__32900_32966 = cljs.core.nth.call(null,vec__32897_32964,(1),null);
var map__32900_32967__$1 = ((((!((map__32900_32966 == null)))?((((map__32900_32966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32900_32966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32900_32966):map__32900_32966);
var doc_32968 = cljs.core.get.call(null,map__32900_32967__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32969 = cljs.core.get.call(null,map__32900_32967__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32965);

cljs.core.println.call(null," ",arglists_32969);

if(cljs.core.truth_(doc_32968)){
cljs.core.println.call(null," ",doc_32968);
} else {
}

var G__32970 = cljs.core.next.call(null,seq__32888_32958__$1);
var G__32971 = null;
var G__32972 = (0);
var G__32973 = (0);
seq__32888_32932 = G__32970;
chunk__32889_32933 = G__32971;
count__32890_32934 = G__32972;
i__32891_32935 = G__32973;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32902 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32903 = null;
var count__32904 = (0);
var i__32905 = (0);
while(true){
if((i__32905 < count__32904)){
var role = cljs.core._nth.call(null,chunk__32903,i__32905);
var temp__4657__auto___32974__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32974__$1)){
var spec_32975 = temp__4657__auto___32974__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32975));
} else {
}

var G__32980 = seq__32902;
var G__32981 = chunk__32903;
var G__32982 = count__32904;
var G__32983 = (i__32905 + (1));
seq__32902 = G__32980;
chunk__32903 = G__32981;
count__32904 = G__32982;
i__32905 = G__32983;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32902);
if(temp__4657__auto____$1){
var seq__32902__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32902__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__32902__$1);
var G__32987 = cljs.core.chunk_rest.call(null,seq__32902__$1);
var G__32988 = c__21266__auto__;
var G__32989 = cljs.core.count.call(null,c__21266__auto__);
var G__32990 = (0);
seq__32902 = G__32987;
chunk__32903 = G__32988;
count__32904 = G__32989;
i__32905 = G__32990;
continue;
} else {
var role = cljs.core.first.call(null,seq__32902__$1);
var temp__4657__auto___32991__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32991__$2)){
var spec_32992 = temp__4657__auto___32991__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32992));
} else {
}

var G__32993 = cljs.core.next.call(null,seq__32902__$1);
var G__32994 = null;
var G__32995 = (0);
var G__32996 = (0);
seq__32902 = G__32993;
chunk__32903 = G__32994;
count__32904 = G__32995;
i__32905 = G__32996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1522181428704