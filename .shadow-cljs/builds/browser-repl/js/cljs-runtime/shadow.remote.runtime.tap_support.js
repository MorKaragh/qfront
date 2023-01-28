goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__25335,p__25336){
var map__25337 = p__25335;
var map__25337__$1 = cljs.core.__destructure_map(map__25337);
var svc = map__25337__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25337__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25337__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25337__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25338 = p__25336;
var map__25338__$1 = cljs.core.__destructure_map(map__25338);
var msg = map__25338__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25338__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25338__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25338__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25338__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__25350,p__25351){
var map__25352 = p__25350;
var map__25352__$1 = cljs.core.__destructure_map(map__25352);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25352__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__25353 = p__25351;
var map__25353__$1 = cljs.core.__destructure_map(map__25353);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25353__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__25362,p__25363){
var map__25364 = p__25362;
var map__25364__$1 = cljs.core.__destructure_map(map__25364);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25365 = p__25363;
var map__25365__$1 = cljs.core.__destructure_map(map__25365);
var msg = map__25365__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25365__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__25367,tid){
var map__25368 = p__25367;
var map__25368__$1 = cljs.core.__destructure_map(map__25368);
var svc = map__25368__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25368__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__25424 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__25425 = null;
var count__25426 = (0);
var i__25427 = (0);
while(true){
if((i__25427 < count__25426)){
var vec__25447 = chunk__25425.cljs$core$IIndexed$_nth$arity$2(null,i__25427);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25532 = seq__25424;
var G__25533 = chunk__25425;
var G__25534 = count__25426;
var G__25535 = (i__25427 + (1));
seq__25424 = G__25532;
chunk__25425 = G__25533;
count__25426 = G__25534;
i__25427 = G__25535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25424);
if(temp__5804__auto__){
var seq__25424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25424__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25424__$1);
var G__25536 = cljs.core.chunk_rest(seq__25424__$1);
var G__25537 = c__5568__auto__;
var G__25538 = cljs.core.count(c__5568__auto__);
var G__25539 = (0);
seq__25424 = G__25536;
chunk__25425 = G__25537;
count__25426 = G__25538;
i__25427 = G__25539;
continue;
} else {
var vec__25453 = cljs.core.first(seq__25424__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25453,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25453,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25544 = cljs.core.next(seq__25424__$1);
var G__25545 = null;
var G__25546 = (0);
var G__25547 = (0);
seq__25424 = G__25544;
chunk__25425 = G__25545;
count__25426 = G__25546;
i__25427 = G__25547;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__25370_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__25370_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__25371_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__25371_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__25372_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__25372_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__25373_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__25373_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__25482){
var map__25483 = p__25482;
var map__25483__$1 = cljs.core.__destructure_map(map__25483);
var svc = map__25483__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25483__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25483__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
