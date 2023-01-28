goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20088,res){
var map__20093 = p__20088;
var map__20093__$1 = cljs.core.__destructure_map(map__20093);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20098 = res;
var G__20098__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20098,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20098);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20098__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20098__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20109 = arguments.length;
switch (G__20109) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20117,msg,handlers,timeout_after_ms){
var map__20118 = p__20117;
var map__20118__$1 = cljs.core.__destructure_map(map__20118);
var runtime = map__20118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20352 = arguments.length;
var i__5770__auto___20353 = (0);
while(true){
if((i__5770__auto___20353 < len__5769__auto___20352)){
args__5775__auto__.push((arguments[i__5770__auto___20353]));

var G__20354 = (i__5770__auto___20353 + (1));
i__5770__auto___20353 = G__20354;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20142,ev,args){
var map__20145 = p__20142;
var map__20145__$1 = cljs.core.__destructure_map(map__20145);
var runtime = map__20145__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20147 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20150 = null;
var count__20151 = (0);
var i__20152 = (0);
while(true){
if((i__20152 < count__20151)){
var ext = chunk__20150.cljs$core$IIndexed$_nth$arity$2(null,i__20152);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20357 = seq__20147;
var G__20358 = chunk__20150;
var G__20359 = count__20151;
var G__20360 = (i__20152 + (1));
seq__20147 = G__20357;
chunk__20150 = G__20358;
count__20151 = G__20359;
i__20152 = G__20360;
continue;
} else {
var G__20361 = seq__20147;
var G__20362 = chunk__20150;
var G__20363 = count__20151;
var G__20364 = (i__20152 + (1));
seq__20147 = G__20361;
chunk__20150 = G__20362;
count__20151 = G__20363;
i__20152 = G__20364;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20147);
if(temp__5804__auto__){
var seq__20147__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20147__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20147__$1);
var G__20365 = cljs.core.chunk_rest(seq__20147__$1);
var G__20366 = c__5568__auto__;
var G__20367 = cljs.core.count(c__5568__auto__);
var G__20368 = (0);
seq__20147 = G__20365;
chunk__20150 = G__20366;
count__20151 = G__20367;
i__20152 = G__20368;
continue;
} else {
var ext = cljs.core.first(seq__20147__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20375 = cljs.core.next(seq__20147__$1);
var G__20376 = null;
var G__20377 = (0);
var G__20378 = (0);
seq__20147 = G__20375;
chunk__20150 = G__20376;
count__20151 = G__20377;
i__20152 = G__20378;
continue;
} else {
var G__20379 = cljs.core.next(seq__20147__$1);
var G__20380 = null;
var G__20381 = (0);
var G__20382 = (0);
seq__20147 = G__20379;
chunk__20150 = G__20380;
count__20151 = G__20381;
i__20152 = G__20382;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20127){
var G__20130 = cljs.core.first(seq20127);
var seq20127__$1 = cljs.core.next(seq20127);
var G__20131 = cljs.core.first(seq20127__$1);
var seq20127__$2 = cljs.core.next(seq20127__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20130,G__20131,seq20127__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20184,p__20185){
var map__20186 = p__20184;
var map__20186__$1 = cljs.core.__destructure_map(map__20186);
var runtime = map__20186__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20187 = p__20185;
var map__20187__$1 = cljs.core.__destructure_map(map__20187);
var msg = map__20187__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__20192 = cljs.core.deref(state_ref);
var map__20192__$1 = cljs.core.__destructure_map(map__20192);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20198){
var map__20199 = p__20198;
var map__20199__$1 = cljs.core.__destructure_map(map__20199);
var runtime = map__20199__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20200,msg){
var map__20201 = p__20200;
var map__20201__$1 = cljs.core.__destructure_map(map__20201);
var runtime = map__20201__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20205,key,p__20206){
var map__20207 = p__20205;
var map__20207__$1 = cljs.core.__destructure_map(map__20207);
var state = map__20207__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20207__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20208 = p__20206;
var map__20208__$1 = cljs.core.__destructure_map(map__20208);
var spec = map__20208__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20208__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20217,key,spec){
var map__20218 = p__20217;
var map__20218__$1 = cljs.core.__destructure_map(map__20218);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20218__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20223_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20223_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20224_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20224_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20226_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20226_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20228_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20228_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20229_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20229_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20248,key){
var map__20249 = p__20248;
var map__20249__$1 = cljs.core.__destructure_map(map__20249);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20249__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20255,msg){
var map__20256 = p__20255;
var map__20256__$1 = cljs.core.__destructure_map(map__20256);
var runtime = map__20256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20272,p__20273){
var map__20275 = p__20272;
var map__20275__$1 = cljs.core.__destructure_map(map__20275);
var runtime = map__20275__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20275__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20276 = p__20273;
var map__20276__$1 = cljs.core.__destructure_map(map__20276);
var msg = map__20276__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20276__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20276__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20299 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20301 = null;
var count__20302 = (0);
var i__20303 = (0);
while(true){
if((i__20303 < count__20302)){
var map__20323 = chunk__20301.cljs$core$IIndexed$_nth$arity$2(null,i__20303);
var map__20323__$1 = cljs.core.__destructure_map(map__20323);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20323__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20511 = seq__20299;
var G__20512 = chunk__20301;
var G__20513 = count__20302;
var G__20514 = (i__20303 + (1));
seq__20299 = G__20511;
chunk__20301 = G__20512;
count__20302 = G__20513;
i__20303 = G__20514;
continue;
} else {
var G__20515 = seq__20299;
var G__20516 = chunk__20301;
var G__20517 = count__20302;
var G__20518 = (i__20303 + (1));
seq__20299 = G__20515;
chunk__20301 = G__20516;
count__20302 = G__20517;
i__20303 = G__20518;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20299);
if(temp__5804__auto__){
var seq__20299__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20299__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20299__$1);
var G__20519 = cljs.core.chunk_rest(seq__20299__$1);
var G__20520 = c__5568__auto__;
var G__20521 = cljs.core.count(c__5568__auto__);
var G__20522 = (0);
seq__20299 = G__20519;
chunk__20301 = G__20520;
count__20302 = G__20521;
i__20303 = G__20522;
continue;
} else {
var map__20330 = cljs.core.first(seq__20299__$1);
var map__20330__$1 = cljs.core.__destructure_map(map__20330);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20330__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20524 = cljs.core.next(seq__20299__$1);
var G__20525 = null;
var G__20526 = (0);
var G__20527 = (0);
seq__20299 = G__20524;
chunk__20301 = G__20525;
count__20302 = G__20526;
i__20303 = G__20527;
continue;
} else {
var G__20528 = cljs.core.next(seq__20299__$1);
var G__20529 = null;
var G__20530 = (0);
var G__20531 = (0);
seq__20299 = G__20528;
chunk__20301 = G__20529;
count__20302 = G__20530;
i__20303 = G__20531;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
