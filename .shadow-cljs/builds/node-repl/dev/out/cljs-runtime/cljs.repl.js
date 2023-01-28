goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20246){
var map__20247 = p__20246;
var map__20247__$1 = cljs.core.__destructure_map(map__20247);
var m = map__20247__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__20250_20605 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20251_20606 = null;
var count__20252_20607 = (0);
var i__20253_20608 = (0);
while(true){
if((i__20253_20608 < count__20252_20607)){
var f_20614 = chunk__20251_20606.cljs$core$IIndexed$_nth$arity$2(null,i__20253_20608);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20614], 0));


var G__20615 = seq__20250_20605;
var G__20616 = chunk__20251_20606;
var G__20617 = count__20252_20607;
var G__20618 = (i__20253_20608 + (1));
seq__20250_20605 = G__20615;
chunk__20251_20606 = G__20616;
count__20252_20607 = G__20617;
i__20253_20608 = G__20618;
continue;
} else {
var temp__5804__auto___20621 = cljs.core.seq(seq__20250_20605);
if(temp__5804__auto___20621){
var seq__20250_20623__$1 = temp__5804__auto___20621;
if(cljs.core.chunked_seq_QMARK_(seq__20250_20623__$1)){
var c__5568__auto___20624 = cljs.core.chunk_first(seq__20250_20623__$1);
var G__20626 = cljs.core.chunk_rest(seq__20250_20623__$1);
var G__20627 = c__5568__auto___20624;
var G__20628 = cljs.core.count(c__5568__auto___20624);
var G__20629 = (0);
seq__20250_20605 = G__20626;
chunk__20251_20606 = G__20627;
count__20252_20607 = G__20628;
i__20253_20608 = G__20629;
continue;
} else {
var f_20630 = cljs.core.first(seq__20250_20623__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20630], 0));


var G__20631 = cljs.core.next(seq__20250_20623__$1);
var G__20632 = null;
var G__20633 = (0);
var G__20634 = (0);
seq__20250_20605 = G__20631;
chunk__20251_20606 = G__20632;
count__20252_20607 = G__20633;
i__20253_20608 = G__20634;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20638 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20638], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20638)))?cljs.core.second(arglists_20638):arglists_20638)], 0));
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
var seq__20277_20643 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20278_20644 = null;
var count__20279_20645 = (0);
var i__20280_20646 = (0);
while(true){
if((i__20280_20646 < count__20279_20645)){
var vec__20312_20649 = chunk__20278_20644.cljs$core$IIndexed$_nth$arity$2(null,i__20280_20646);
var name_20650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20312_20649,(0),null);
var map__20315_20651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20312_20649,(1),null);
var map__20315_20652__$1 = cljs.core.__destructure_map(map__20315_20651);
var doc_20653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20315_20652__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20315_20652__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20650], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20654], 0));

if(cljs.core.truth_(doc_20653)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20653], 0));
} else {
}


var G__20657 = seq__20277_20643;
var G__20658 = chunk__20278_20644;
var G__20659 = count__20279_20645;
var G__20660 = (i__20280_20646 + (1));
seq__20277_20643 = G__20657;
chunk__20278_20644 = G__20658;
count__20279_20645 = G__20659;
i__20280_20646 = G__20660;
continue;
} else {
var temp__5804__auto___20661 = cljs.core.seq(seq__20277_20643);
if(temp__5804__auto___20661){
var seq__20277_20666__$1 = temp__5804__auto___20661;
if(cljs.core.chunked_seq_QMARK_(seq__20277_20666__$1)){
var c__5568__auto___20667 = cljs.core.chunk_first(seq__20277_20666__$1);
var G__20672 = cljs.core.chunk_rest(seq__20277_20666__$1);
var G__20673 = c__5568__auto___20667;
var G__20674 = cljs.core.count(c__5568__auto___20667);
var G__20675 = (0);
seq__20277_20643 = G__20672;
chunk__20278_20644 = G__20673;
count__20279_20645 = G__20674;
i__20280_20646 = G__20675;
continue;
} else {
var vec__20319_20676 = cljs.core.first(seq__20277_20666__$1);
var name_20677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20319_20676,(0),null);
var map__20322_20678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20319_20676,(1),null);
var map__20322_20679__$1 = cljs.core.__destructure_map(map__20322_20678);
var doc_20680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20322_20679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20322_20679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20677], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20681], 0));

if(cljs.core.truth_(doc_20680)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20680], 0));
} else {
}


var G__20689 = cljs.core.next(seq__20277_20666__$1);
var G__20690 = null;
var G__20691 = (0);
var G__20692 = (0);
seq__20277_20643 = G__20689;
chunk__20278_20644 = G__20690;
count__20279_20645 = G__20691;
i__20280_20646 = G__20692;
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

var seq__20326 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20327 = null;
var count__20328 = (0);
var i__20329 = (0);
while(true){
if((i__20329 < count__20328)){
var role = chunk__20327.cljs$core$IIndexed$_nth$arity$2(null,i__20329);
var temp__5804__auto___20703__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20703__$1)){
var spec_20704 = temp__5804__auto___20703__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20704)], 0));
} else {
}


var G__20705 = seq__20326;
var G__20706 = chunk__20327;
var G__20707 = count__20328;
var G__20708 = (i__20329 + (1));
seq__20326 = G__20705;
chunk__20327 = G__20706;
count__20328 = G__20707;
i__20329 = G__20708;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20326);
if(temp__5804__auto____$1){
var seq__20326__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20326__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20326__$1);
var G__20709 = cljs.core.chunk_rest(seq__20326__$1);
var G__20710 = c__5568__auto__;
var G__20711 = cljs.core.count(c__5568__auto__);
var G__20712 = (0);
seq__20326 = G__20709;
chunk__20327 = G__20710;
count__20328 = G__20711;
i__20329 = G__20712;
continue;
} else {
var role = cljs.core.first(seq__20326__$1);
var temp__5804__auto___20713__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20713__$2)){
var spec_20714 = temp__5804__auto___20713__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20714)], 0));
} else {
}


var G__20715 = cljs.core.next(seq__20326__$1);
var G__20716 = null;
var G__20717 = (0);
var G__20718 = (0);
seq__20326 = G__20715;
chunk__20327 = G__20716;
count__20328 = G__20717;
i__20329 = G__20718;
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
var G__20721 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20722 = cljs.core.ex_cause(t);
via = G__20721;
t = G__20722;
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
var map__20464 = datafied_throwable;
var map__20464__$1 = cljs.core.__destructure_map(map__20464);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20464__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20464__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20464__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20465 = cljs.core.last(via);
var map__20465__$1 = cljs.core.__destructure_map(map__20465);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20466 = data;
var map__20466__$1 = cljs.core.__destructure_map(map__20466);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20466__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20466__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20466__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20467 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20467__$1 = cljs.core.__destructure_map(map__20467);
var top_data = map__20467__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20486 = phase;
var G__20486__$1 = (((G__20486 instanceof cljs.core.Keyword))?G__20486.fqn:null);
switch (G__20486__$1) {
case "read-source":
var map__20491 = data;
var map__20491__$1 = cljs.core.__destructure_map(map__20491);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20491__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20491__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20498 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20498__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20498,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20498);
var G__20498__$2 = (cljs.core.truth_((function (){var fexpr__20500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20500.cljs$core$IFn$_invoke$arity$1 ? fexpr__20500.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20500.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20498__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20498__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20498__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20498__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20502 = top_data;
var G__20502__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20502,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20502);
var G__20502__$2 = (cljs.core.truth_((function (){var fexpr__20503 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20503.cljs$core$IFn$_invoke$arity$1 ? fexpr__20503.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20503.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20502__$1);
var G__20502__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20502__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20502__$2);
var G__20502__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20502__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20502__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20502__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20502__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20506 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20506,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20506,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20506,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20506,(3),null);
var G__20510 = top_data;
var G__20510__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20510,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20510);
var G__20510__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20510__$1);
var G__20510__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20510__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20510__$2);
var G__20510__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20510__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20510__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20510__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20510__$4;
}

break;
case "execution":
var vec__20534 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20453_SHARP_){
var or__5045__auto__ = (p1__20453_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20538.cljs$core$IFn$_invoke$arity$1 ? fexpr__20538.cljs$core$IFn$_invoke$arity$1(p1__20453_SHARP_) : fexpr__20538.call(null,p1__20453_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20540 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20540__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20540,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20540);
var G__20540__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20540__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20540__$1);
var G__20540__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20540__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20540__$2);
var G__20540__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20540__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20540__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20540__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20540__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20486__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20546){
var map__20547 = p__20546;
var map__20547__$1 = cljs.core.__destructure_map(map__20547);
var triage_data = map__20547__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20557 = phase;
var G__20557__$1 = (((G__20557 instanceof cljs.core.Keyword))?G__20557.fqn:null);
switch (G__20557__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20559 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20560 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20561 = loc;
var G__20562 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20564_20781 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20565_20782 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20566_20783 = true;
var _STAR_print_fn_STAR__temp_val__20567_20784 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20566_20783);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20567_20784);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20544_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20544_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20565_20782);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20564_20781);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20559,G__20560,G__20561,G__20562) : format.call(null,G__20559,G__20560,G__20561,G__20562));

break;
case "macroexpansion":
var G__20568 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20569 = cause_type;
var G__20570 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20571 = loc;
var G__20572 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20568,G__20569,G__20570,G__20571,G__20572) : format.call(null,G__20568,G__20569,G__20570,G__20571,G__20572));

break;
case "compile-syntax-check":
var G__20573 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20574 = cause_type;
var G__20575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20576 = loc;
var G__20577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20573,G__20574,G__20575,G__20576,G__20577) : format.call(null,G__20573,G__20574,G__20575,G__20576,G__20577));

break;
case "compilation":
var G__20578 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20579 = cause_type;
var G__20580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20581 = loc;
var G__20582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20578,G__20579,G__20580,G__20581,G__20582) : format.call(null,G__20578,G__20579,G__20580,G__20581,G__20582));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20583 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20584 = symbol;
var G__20585 = loc;
var G__20586 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20587_20797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20588_20798 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20589_20799 = true;
var _STAR_print_fn_STAR__temp_val__20590_20800 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20589_20799);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20590_20800);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20545_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20588_20798);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20587_20797);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20583,G__20584,G__20585,G__20586) : format.call(null,G__20583,G__20584,G__20585,G__20586));
} else {
var G__20594 = "Execution error%s at %s(%s).\n%s\n";
var G__20595 = cause_type;
var G__20596 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20597 = loc;
var G__20598 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20594,G__20595,G__20596,G__20597,G__20598) : format.call(null,G__20594,G__20595,G__20596,G__20597,G__20598));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20557__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
