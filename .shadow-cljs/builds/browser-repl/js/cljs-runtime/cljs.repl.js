goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24643){
var map__24648 = p__24643;
var map__24648__$1 = cljs.core.__destructure_map(map__24648);
var m = map__24648__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24648__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24648__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24655_24914 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24656_24915 = null;
var count__24657_24916 = (0);
var i__24658_24917 = (0);
while(true){
if((i__24658_24917 < count__24657_24916)){
var f_24918 = chunk__24656_24915.cljs$core$IIndexed$_nth$arity$2(null,i__24658_24917);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24918], 0));


var G__24919 = seq__24655_24914;
var G__24920 = chunk__24656_24915;
var G__24921 = count__24657_24916;
var G__24922 = (i__24658_24917 + (1));
seq__24655_24914 = G__24919;
chunk__24656_24915 = G__24920;
count__24657_24916 = G__24921;
i__24658_24917 = G__24922;
continue;
} else {
var temp__5804__auto___24923 = cljs.core.seq(seq__24655_24914);
if(temp__5804__auto___24923){
var seq__24655_24924__$1 = temp__5804__auto___24923;
if(cljs.core.chunked_seq_QMARK_(seq__24655_24924__$1)){
var c__5568__auto___24925 = cljs.core.chunk_first(seq__24655_24924__$1);
var G__24926 = cljs.core.chunk_rest(seq__24655_24924__$1);
var G__24927 = c__5568__auto___24925;
var G__24928 = cljs.core.count(c__5568__auto___24925);
var G__24929 = (0);
seq__24655_24914 = G__24926;
chunk__24656_24915 = G__24927;
count__24657_24916 = G__24928;
i__24658_24917 = G__24929;
continue;
} else {
var f_24930 = cljs.core.first(seq__24655_24924__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24930], 0));


var G__24931 = cljs.core.next(seq__24655_24924__$1);
var G__24932 = null;
var G__24933 = (0);
var G__24934 = (0);
seq__24655_24914 = G__24931;
chunk__24656_24915 = G__24932;
count__24657_24916 = G__24933;
i__24658_24917 = G__24934;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24935 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24935], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24935)))?cljs.core.second(arglists_24935):arglists_24935)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24682_24940 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24683_24941 = null;
var count__24684_24942 = (0);
var i__24685_24943 = (0);
while(true){
if((i__24685_24943 < count__24684_24942)){
var vec__24709_24945 = chunk__24683_24941.cljs$core$IIndexed$_nth$arity$2(null,i__24685_24943);
var name_24946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709_24945,(0),null);
var map__24712_24947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709_24945,(1),null);
var map__24712_24948__$1 = cljs.core.__destructure_map(map__24712_24947);
var doc_24949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24712_24948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24712_24948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24946], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24950], 0));

if(cljs.core.truth_(doc_24949)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24949], 0));
} else {
}


var G__24951 = seq__24682_24940;
var G__24952 = chunk__24683_24941;
var G__24953 = count__24684_24942;
var G__24954 = (i__24685_24943 + (1));
seq__24682_24940 = G__24951;
chunk__24683_24941 = G__24952;
count__24684_24942 = G__24953;
i__24685_24943 = G__24954;
continue;
} else {
var temp__5804__auto___24956 = cljs.core.seq(seq__24682_24940);
if(temp__5804__auto___24956){
var seq__24682_24957__$1 = temp__5804__auto___24956;
if(cljs.core.chunked_seq_QMARK_(seq__24682_24957__$1)){
var c__5568__auto___24958 = cljs.core.chunk_first(seq__24682_24957__$1);
var G__24959 = cljs.core.chunk_rest(seq__24682_24957__$1);
var G__24960 = c__5568__auto___24958;
var G__24961 = cljs.core.count(c__5568__auto___24958);
var G__24962 = (0);
seq__24682_24940 = G__24959;
chunk__24683_24941 = G__24960;
count__24684_24942 = G__24961;
i__24685_24943 = G__24962;
continue;
} else {
var vec__24713_24963 = cljs.core.first(seq__24682_24957__$1);
var name_24964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713_24963,(0),null);
var map__24716_24965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713_24963,(1),null);
var map__24716_24966__$1 = cljs.core.__destructure_map(map__24716_24965);
var doc_24967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24716_24966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24716_24966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24964], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24968], 0));

if(cljs.core.truth_(doc_24967)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24967], 0));
} else {
}


var G__24969 = cljs.core.next(seq__24682_24957__$1);
var G__24970 = null;
var G__24971 = (0);
var G__24972 = (0);
seq__24682_24940 = G__24969;
chunk__24683_24941 = G__24970;
count__24684_24942 = G__24971;
i__24685_24943 = G__24972;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24734 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24735 = null;
var count__24736 = (0);
var i__24737 = (0);
while(true){
if((i__24737 < count__24736)){
var role = chunk__24735.cljs$core$IIndexed$_nth$arity$2(null,i__24737);
var temp__5804__auto___24974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24974__$1)){
var spec_24975 = temp__5804__auto___24974__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24975)], 0));
} else {
}


var G__24976 = seq__24734;
var G__24977 = chunk__24735;
var G__24978 = count__24736;
var G__24979 = (i__24737 + (1));
seq__24734 = G__24976;
chunk__24735 = G__24977;
count__24736 = G__24978;
i__24737 = G__24979;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24734);
if(temp__5804__auto____$1){
var seq__24734__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24734__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24734__$1);
var G__24980 = cljs.core.chunk_rest(seq__24734__$1);
var G__24981 = c__5568__auto__;
var G__24982 = cljs.core.count(c__5568__auto__);
var G__24983 = (0);
seq__24734 = G__24980;
chunk__24735 = G__24981;
count__24736 = G__24982;
i__24737 = G__24983;
continue;
} else {
var role = cljs.core.first(seq__24734__$1);
var temp__5804__auto___24984__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24984__$2)){
var spec_24985 = temp__5804__auto___24984__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24985)], 0));
} else {
}


var G__24986 = cljs.core.next(seq__24734__$1);
var G__24987 = null;
var G__24988 = (0);
var G__24989 = (0);
seq__24734 = G__24986;
chunk__24735 = G__24987;
count__24736 = G__24988;
i__24737 = G__24989;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24995 = cljs.core.ex_cause(t);
via = G__24994;
t = G__24995;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24831 = datafied_throwable;
var map__24831__$1 = cljs.core.__destructure_map(map__24831);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24831__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24831__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24831__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24832 = cljs.core.last(via);
var map__24832__$1 = cljs.core.__destructure_map(map__24832);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24832__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24832__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24832__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24833 = data;
var map__24833__$1 = cljs.core.__destructure_map(map__24833);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24833__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24833__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24833__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24834 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24834__$1 = cljs.core.__destructure_map(map__24834);
var top_data = map__24834__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24837 = phase;
var G__24837__$1 = (((G__24837 instanceof cljs.core.Keyword))?G__24837.fqn:null);
switch (G__24837__$1) {
case "read-source":
var map__24838 = data;
var map__24838__$1 = cljs.core.__destructure_map(map__24838);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24841 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24841__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24841,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24841);
var G__24841__$2 = (cljs.core.truth_((function (){var fexpr__24845 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24845.cljs$core$IFn$_invoke$arity$1 ? fexpr__24845.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24845.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24841__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24841__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24841__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24847 = top_data;
var G__24847__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24847,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24847);
var G__24847__$2 = (cljs.core.truth_((function (){var fexpr__24848 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24848.cljs$core$IFn$_invoke$arity$1 ? fexpr__24848.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24848.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24847__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24847__$1);
var G__24847__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24847__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24847__$2);
var G__24847__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24847__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24847__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24847__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24847__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24849 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(3),null);
var G__24852 = top_data;
var G__24852__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24852,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24852);
var G__24852__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24852__$1);
var G__24852__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24852__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24852__$2);
var G__24852__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24852__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24852__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24852__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24852__$4;
}

break;
case "execution":
var vec__24854 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24830_SHARP_){
var or__5045__auto__ = (p1__24830_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__24857 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24857.cljs$core$IFn$_invoke$arity$1 ? fexpr__24857.cljs$core$IFn$_invoke$arity$1(p1__24830_SHARP_) : fexpr__24857.call(null,p1__24830_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__24858 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24858__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24858,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24858);
var G__24858__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24858__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24858__$1);
var G__24858__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24858__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24858__$2);
var G__24858__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24858__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24858__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24858__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24858__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24837__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24868){
var map__24869 = p__24868;
var map__24869__$1 = cljs.core.__destructure_map(map__24869);
var triage_data = map__24869__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24875 = phase;
var G__24875__$1 = (((G__24875 instanceof cljs.core.Keyword))?G__24875.fqn:null);
switch (G__24875__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24876 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24877 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24878 = loc;
var G__24879 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24880_25004 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24881_25005 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24882_25006 = true;
var _STAR_print_fn_STAR__temp_val__24883_25007 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24882_25006);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24883_25007);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24863_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24863_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24881_25005);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24880_25004);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24876,G__24877,G__24878,G__24879) : format.call(null,G__24876,G__24877,G__24878,G__24879));

break;
case "macroexpansion":
var G__24884 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24885 = cause_type;
var G__24886 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24887 = loc;
var G__24888 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24884,G__24885,G__24886,G__24887,G__24888) : format.call(null,G__24884,G__24885,G__24886,G__24887,G__24888));

break;
case "compile-syntax-check":
var G__24889 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24890 = cause_type;
var G__24891 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24892 = loc;
var G__24893 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24889,G__24890,G__24891,G__24892,G__24893) : format.call(null,G__24889,G__24890,G__24891,G__24892,G__24893));

break;
case "compilation":
var G__24894 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24895 = cause_type;
var G__24896 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24897 = loc;
var G__24898 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24894,G__24895,G__24896,G__24897,G__24898) : format.call(null,G__24894,G__24895,G__24896,G__24897,G__24898));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24900 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24901 = symbol;
var G__24902 = loc;
var G__24903 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24904_25009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24905_25010 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24906_25011 = true;
var _STAR_print_fn_STAR__temp_val__24907_25012 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24906_25011);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24907_25012);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24866_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24866_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24905_25010);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24904_25009);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24900,G__24901,G__24902,G__24903) : format.call(null,G__24900,G__24901,G__24902,G__24903));
} else {
var G__24909 = "Execution error%s at %s(%s).\n%s\n";
var G__24910 = cause_type;
var G__24911 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24912 = loc;
var G__24913 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24909,G__24910,G__24911,G__24912,G__24913) : format.call(null,G__24909,G__24910,G__24911,G__24912,G__24913));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24875__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
