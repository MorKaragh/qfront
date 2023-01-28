goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__21618){
var map__21619 = p__21618;
var map__21619__$1 = cljs.core.__destructure_map(map__21619);
var msg = map__21619__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21619__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21619__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__21660){
var map__21663 = p__21660;
var map__21663__$1 = cljs.core.__destructure_map(map__21663);
var msg = map__21663__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21663__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21663__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__21665 = info;
var map__21665__$1 = cljs.core.__destructure_map(map__21665);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21668){
var map__21669 = p__21668;
var map__21669__$1 = cljs.core.__destructure_map(map__21669);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21669__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21669__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21677){
var map__21680 = p__21677;
var map__21680__$1 = cljs.core.__destructure_map(map__21680);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__21685 = cljs.core.seq(files_to_require);
var chunk__21686 = null;
var count__21687 = (0);
var i__21688 = (0);
while(true){
if((i__21688 < count__21687)){
var src = chunk__21686.cljs$core$IIndexed$_nth$arity$2(null,i__21688);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__21770 = seq__21685;
var G__21771 = chunk__21686;
var G__21772 = count__21687;
var G__21773 = (i__21688 + (1));
seq__21685 = G__21770;
chunk__21686 = G__21771;
count__21687 = G__21772;
i__21688 = G__21773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21685);
if(temp__5804__auto__){
var seq__21685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21685__$1);
var G__21774 = cljs.core.chunk_rest(seq__21685__$1);
var G__21775 = c__5568__auto__;
var G__21776 = cljs.core.count(c__5568__auto__);
var G__21777 = (0);
seq__21685 = G__21774;
chunk__21686 = G__21775;
count__21687 = G__21776;
i__21688 = G__21777;
continue;
} else {
var src = cljs.core.first(seq__21685__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__21778 = cljs.core.next(seq__21685__$1);
var G__21779 = null;
var G__21780 = (0);
var G__21781 = (0);
seq__21685 = G__21778;
chunk__21686 = G__21779;
count__21687 = G__21780;
i__21688 = G__21781;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__21720,msg){
var map__21721 = p__21720;
var map__21721__$1 = cljs.core.__destructure_map(map__21721);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21721__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__21722){
var map__21723 = p__21722;
var map__21723__$1 = cljs.core.__destructure_map(map__21723);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21723__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21723__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21732,done,error){
var map__21733 = p__21732;
var map__21733__$1 = cljs.core.__destructure_map(map__21733);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__21735_21782 = cljs.core.seq(repl_sources);
var chunk__21737_21783 = null;
var count__21738_21784 = (0);
var i__21739_21785 = (0);
while(true){
if((i__21739_21785 < count__21738_21784)){
var map__21751_21786 = chunk__21737_21783.cljs$core$IIndexed$_nth$arity$2(null,i__21739_21785);
var map__21751_21787__$1 = cljs.core.__destructure_map(map__21751_21786);
var src_21788 = map__21751_21787__$1;
var output_name_21789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21751_21787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_21789)))){
shadow.cljs.devtools.client.node.closure_import(output_name_21789);


var G__21790 = seq__21735_21782;
var G__21791 = chunk__21737_21783;
var G__21792 = count__21738_21784;
var G__21793 = (i__21739_21785 + (1));
seq__21735_21782 = G__21790;
chunk__21737_21783 = G__21791;
count__21738_21784 = G__21792;
i__21739_21785 = G__21793;
continue;
} else {
var G__21794 = seq__21735_21782;
var G__21795 = chunk__21737_21783;
var G__21796 = count__21738_21784;
var G__21797 = (i__21739_21785 + (1));
seq__21735_21782 = G__21794;
chunk__21737_21783 = G__21795;
count__21738_21784 = G__21796;
i__21739_21785 = G__21797;
continue;
}
} else {
var temp__5804__auto___21798 = cljs.core.seq(seq__21735_21782);
if(temp__5804__auto___21798){
var seq__21735_21799__$1 = temp__5804__auto___21798;
if(cljs.core.chunked_seq_QMARK_(seq__21735_21799__$1)){
var c__5568__auto___21800 = cljs.core.chunk_first(seq__21735_21799__$1);
var G__21801 = cljs.core.chunk_rest(seq__21735_21799__$1);
var G__21802 = c__5568__auto___21800;
var G__21803 = cljs.core.count(c__5568__auto___21800);
var G__21804 = (0);
seq__21735_21782 = G__21801;
chunk__21737_21783 = G__21802;
count__21738_21784 = G__21803;
i__21739_21785 = G__21804;
continue;
} else {
var map__21752_21805 = cljs.core.first(seq__21735_21799__$1);
var map__21752_21806__$1 = cljs.core.__destructure_map(map__21752_21805);
var src_21807 = map__21752_21806__$1;
var output_name_21808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752_21806__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_21808)))){
shadow.cljs.devtools.client.node.closure_import(output_name_21808);


var G__21809 = cljs.core.next(seq__21735_21799__$1);
var G__21810 = null;
var G__21811 = (0);
var G__21812 = (0);
seq__21735_21782 = G__21809;
chunk__21737_21783 = G__21810;
count__21738_21784 = G__21811;
i__21739_21785 = G__21812;
continue;
} else {
var G__21813 = cljs.core.next(seq__21735_21799__$1);
var G__21814 = null;
var G__21815 = (0);
var G__21816 = (0);
seq__21735_21782 = G__21813;
chunk__21737_21783 = G__21814;
count__21738_21784 = G__21815;
i__21739_21785 = G__21816;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e21734){var e = e21734;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__21753,done,error){
var map__21754 = p__21753;
var map__21754__$1 = cljs.core.__destructure_map(map__21754);
var msg = map__21754__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__21756_21817 = cljs.core.seq(sources);
var chunk__21757_21818 = null;
var count__21758_21819 = (0);
var i__21759_21820 = (0);
while(true){
if((i__21759_21820 < count__21758_21819)){
var map__21762_21821 = chunk__21757_21818.cljs$core$IIndexed$_nth$arity$2(null,i__21759_21820);
var map__21762_21822__$1 = cljs.core.__destructure_map(map__21762_21821);
var src_21823 = map__21762_21822__$1;
var provides_21824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21762_21822__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_21825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21762_21822__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_21825)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_21824);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_21825);
} else {
}


var G__21826 = seq__21756_21817;
var G__21827 = chunk__21757_21818;
var G__21828 = count__21758_21819;
var G__21829 = (i__21759_21820 + (1));
seq__21756_21817 = G__21826;
chunk__21757_21818 = G__21827;
count__21758_21819 = G__21828;
i__21759_21820 = G__21829;
continue;
} else {
var temp__5804__auto___21830 = cljs.core.seq(seq__21756_21817);
if(temp__5804__auto___21830){
var seq__21756_21831__$1 = temp__5804__auto___21830;
if(cljs.core.chunked_seq_QMARK_(seq__21756_21831__$1)){
var c__5568__auto___21832 = cljs.core.chunk_first(seq__21756_21831__$1);
var G__21833 = cljs.core.chunk_rest(seq__21756_21831__$1);
var G__21834 = c__5568__auto___21832;
var G__21835 = cljs.core.count(c__5568__auto___21832);
var G__21836 = (0);
seq__21756_21817 = G__21833;
chunk__21757_21818 = G__21834;
count__21758_21819 = G__21835;
i__21759_21820 = G__21836;
continue;
} else {
var map__21763_21837 = cljs.core.first(seq__21756_21831__$1);
var map__21763_21838__$1 = cljs.core.__destructure_map(map__21763_21837);
var src_21839 = map__21763_21838__$1;
var provides_21840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763_21838__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_21841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763_21838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_21841)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_21840);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_21841);
} else {
}


var G__21842 = cljs.core.next(seq__21756_21831__$1);
var G__21843 = null;
var G__21844 = (0);
var G__21845 = (0);
seq__21756_21817 = G__21842;
chunk__21757_21818 = G__21843;
count__21758_21819 = G__21844;
i__21759_21820 = G__21845;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e21755){var e = e21755;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__21764){
var map__21765 = p__21764;
var map__21765__$1 = cljs.core.__destructure_map(map__21765);
var env = map__21765__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21766){
var map__21767 = p__21766;
var map__21767__$1 = cljs.core.__destructure_map(map__21767);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21767__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21767__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__21768){
var map__21769 = p__21768;
var map__21769__$1 = cljs.core.__destructure_map(map__21769);
var svc = map__21769__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21769__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
