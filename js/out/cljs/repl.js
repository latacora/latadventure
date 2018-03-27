// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32913){
var map__32960 = p__32913;
var map__32960__$1 = ((((!((map__32960 == null)))?((((map__32960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32960):map__32960);
var m = map__32960__$1;
var n = cljs.core.get.call(null,map__32960__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32962_33000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32963_33001 = null;
var count__32964_33002 = (0);
var i__32965_33003 = (0);
while(true){
if((i__32965_33003 < count__32964_33002)){
var f_33006 = cljs.core._nth.call(null,chunk__32963_33001,i__32965_33003);
cljs.core.println.call(null,"  ",f_33006);

var G__33008 = seq__32962_33000;
var G__33009 = chunk__32963_33001;
var G__33010 = count__32964_33002;
var G__33011 = (i__32965_33003 + (1));
seq__32962_33000 = G__33008;
chunk__32963_33001 = G__33009;
count__32964_33002 = G__33010;
i__32965_33003 = G__33011;
continue;
} else {
var temp__4657__auto___33012 = cljs.core.seq.call(null,seq__32962_33000);
if(temp__4657__auto___33012){
var seq__32962_33019__$1 = temp__4657__auto___33012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32962_33019__$1)){
var c__21266__auto___33020 = cljs.core.chunk_first.call(null,seq__32962_33019__$1);
var G__33022 = cljs.core.chunk_rest.call(null,seq__32962_33019__$1);
var G__33023 = c__21266__auto___33020;
var G__33024 = cljs.core.count.call(null,c__21266__auto___33020);
var G__33025 = (0);
seq__32962_33000 = G__33022;
chunk__32963_33001 = G__33023;
count__32964_33002 = G__33024;
i__32965_33003 = G__33025;
continue;
} else {
var f_33027 = cljs.core.first.call(null,seq__32962_33019__$1);
cljs.core.println.call(null,"  ",f_33027);

var G__33028 = cljs.core.next.call(null,seq__32962_33019__$1);
var G__33029 = null;
var G__33030 = (0);
var G__33031 = (0);
seq__32962_33000 = G__33028;
chunk__32963_33001 = G__33029;
count__32964_33002 = G__33030;
i__32965_33003 = G__33031;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33032 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33032);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33032)))?cljs.core.second.call(null,arglists_33032):arglists_33032));
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
var seq__32968_33051 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32969_33052 = null;
var count__32970_33053 = (0);
var i__32971_33054 = (0);
while(true){
if((i__32971_33054 < count__32970_33053)){
var vec__32972_33055 = cljs.core._nth.call(null,chunk__32969_33052,i__32971_33054);
var name_33056 = cljs.core.nth.call(null,vec__32972_33055,(0),null);
var map__32975_33057 = cljs.core.nth.call(null,vec__32972_33055,(1),null);
var map__32975_33058__$1 = ((((!((map__32975_33057 == null)))?((((map__32975_33057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32975_33057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32975_33057):map__32975_33057);
var doc_33059 = cljs.core.get.call(null,map__32975_33058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33060 = cljs.core.get.call(null,map__32975_33058__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33056);

cljs.core.println.call(null," ",arglists_33060);

if(cljs.core.truth_(doc_33059)){
cljs.core.println.call(null," ",doc_33059);
} else {
}

var G__33066 = seq__32968_33051;
var G__33067 = chunk__32969_33052;
var G__33068 = count__32970_33053;
var G__33069 = (i__32971_33054 + (1));
seq__32968_33051 = G__33066;
chunk__32969_33052 = G__33067;
count__32970_33053 = G__33068;
i__32971_33054 = G__33069;
continue;
} else {
var temp__4657__auto___33070 = cljs.core.seq.call(null,seq__32968_33051);
if(temp__4657__auto___33070){
var seq__32968_33071__$1 = temp__4657__auto___33070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32968_33071__$1)){
var c__21266__auto___33072 = cljs.core.chunk_first.call(null,seq__32968_33071__$1);
var G__33073 = cljs.core.chunk_rest.call(null,seq__32968_33071__$1);
var G__33074 = c__21266__auto___33072;
var G__33075 = cljs.core.count.call(null,c__21266__auto___33072);
var G__33076 = (0);
seq__32968_33051 = G__33073;
chunk__32969_33052 = G__33074;
count__32970_33053 = G__33075;
i__32971_33054 = G__33076;
continue;
} else {
var vec__32979_33077 = cljs.core.first.call(null,seq__32968_33071__$1);
var name_33078 = cljs.core.nth.call(null,vec__32979_33077,(0),null);
var map__32982_33079 = cljs.core.nth.call(null,vec__32979_33077,(1),null);
var map__32982_33080__$1 = ((((!((map__32982_33079 == null)))?((((map__32982_33079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32982_33079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32982_33079):map__32982_33079);
var doc_33081 = cljs.core.get.call(null,map__32982_33080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33082 = cljs.core.get.call(null,map__32982_33080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33078);

cljs.core.println.call(null," ",arglists_33082);

if(cljs.core.truth_(doc_33081)){
cljs.core.println.call(null," ",doc_33081);
} else {
}

var G__33083 = cljs.core.next.call(null,seq__32968_33071__$1);
var G__33084 = null;
var G__33085 = (0);
var G__33086 = (0);
seq__32968_33051 = G__33083;
chunk__32969_33052 = G__33084;
count__32970_33053 = G__33085;
i__32971_33054 = G__33086;
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

var seq__32985 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32986 = null;
var count__32987 = (0);
var i__32988 = (0);
while(true){
if((i__32988 < count__32987)){
var role = cljs.core._nth.call(null,chunk__32986,i__32988);
var temp__4657__auto___33087__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33087__$1)){
var spec_33088 = temp__4657__auto___33087__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33088));
} else {
}

var G__33089 = seq__32985;
var G__33090 = chunk__32986;
var G__33091 = count__32987;
var G__33092 = (i__32988 + (1));
seq__32985 = G__33089;
chunk__32986 = G__33090;
count__32987 = G__33091;
i__32988 = G__33092;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32985);
if(temp__4657__auto____$1){
var seq__32985__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32985__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__32985__$1);
var G__33096 = cljs.core.chunk_rest.call(null,seq__32985__$1);
var G__33097 = c__21266__auto__;
var G__33098 = cljs.core.count.call(null,c__21266__auto__);
var G__33099 = (0);
seq__32985 = G__33096;
chunk__32986 = G__33097;
count__32987 = G__33098;
i__32988 = G__33099;
continue;
} else {
var role = cljs.core.first.call(null,seq__32985__$1);
var temp__4657__auto___33100__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33100__$2)){
var spec_33101 = temp__4657__auto___33100__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33101));
} else {
}

var G__33104 = cljs.core.next.call(null,seq__32985__$1);
var G__33105 = null;
var G__33106 = (0);
var G__33107 = (0);
seq__32985 = G__33104;
chunk__32986 = G__33105;
count__32987 = G__33106;
i__32988 = G__33107;
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

//# sourceMappingURL=repl.js.map?rel=1522121084552