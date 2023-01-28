goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21208,p__21209){
var map__21210 = p__21208;
var map__21210__$1 = cljs.core.__destructure_map(map__21210);
var svc = map__21210__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21211 = p__21209;
var map__21211__$1 = cljs.core.__destructure_map(map__21211);
var msg = map__21211__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21211__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21219,p__21220){
var map__21221 = p__21219;
var map__21221__$1 = cljs.core.__destructure_map(map__21221);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21222 = p__21220;
var map__21222__$1 = cljs.core.__destructure_map(map__21222);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21222__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21228,p__21229){
var map__21230 = p__21228;
var map__21230__$1 = cljs.core.__destructure_map(map__21230);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21231 = p__21229;
var map__21231__$1 = cljs.core.__destructure_map(map__21231);
var msg = map__21231__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21231__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21239,tid){
var map__21243 = p__21239;
var map__21243__$1 = cljs.core.__destructure_map(map__21243);
var svc = map__21243__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21271 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21272 = null;
var count__21273 = (0);
var i__21274 = (0);
while(true){
if((i__21274 < count__21273)){
var vec__21304 = chunk__21272.cljs$core$IIndexed$_nth$arity$2(null,i__21274);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21304,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21304,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21318 = seq__21271;
var G__21319 = chunk__21272;
var G__21320 = count__21273;
var G__21321 = (i__21274 + (1));
seq__21271 = G__21318;
chunk__21272 = G__21319;
count__21273 = G__21320;
i__21274 = G__21321;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21271);
if(temp__5804__auto__){
var seq__21271__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21271__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21271__$1);
var G__21323 = cljs.core.chunk_rest(seq__21271__$1);
var G__21324 = c__5568__auto__;
var G__21325 = cljs.core.count(c__5568__auto__);
var G__21326 = (0);
seq__21271 = G__21323;
chunk__21272 = G__21324;
count__21273 = G__21325;
i__21274 = G__21326;
continue;
} else {
var vec__21310 = cljs.core.first(seq__21271__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21310,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21310,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21330 = cljs.core.next(seq__21271__$1);
var G__21331 = null;
var G__21332 = (0);
var G__21333 = (0);
seq__21271 = G__21330;
chunk__21272 = G__21331;
count__21273 = G__21332;
i__21274 = G__21333;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21251_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21251_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21252_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21252_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21253_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21253_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21254_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21254_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21316){
var map__21317 = p__21316;
var map__21317__$1 = cljs.core.__destructure_map(map__21317);
var svc = map__21317__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
