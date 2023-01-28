goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26158 = arguments.length;
var i__5770__auto___26159 = (0);
while(true){
if((i__5770__auto___26159 < len__5769__auto___26158)){
args__5775__auto__.push((arguments[i__5770__auto___26159]));

var G__26160 = (i__5770__auto___26159 + (1));
i__5770__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq25870){
var G__25871 = cljs.core.first(seq25870);
var seq25870__$1 = cljs.core.next(seq25870);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25871,seq25870__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__25876 = cljs.core.seq(sources);
var chunk__25877 = null;
var count__25878 = (0);
var i__25879 = (0);
while(true){
if((i__25879 < count__25878)){
var map__25886 = chunk__25877.cljs$core$IIndexed$_nth$arity$2(null,i__25879);
var map__25886__$1 = cljs.core.__destructure_map(map__25886);
var src = map__25886__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25886__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25886__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25886__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25887){var e_26161 = e25887;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26161);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26161.message)].join('')));
}

var G__26162 = seq__25876;
var G__26163 = chunk__25877;
var G__26164 = count__25878;
var G__26165 = (i__25879 + (1));
seq__25876 = G__26162;
chunk__25877 = G__26163;
count__25878 = G__26164;
i__25879 = G__26165;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25876);
if(temp__5804__auto__){
var seq__25876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25876__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25876__$1);
var G__26166 = cljs.core.chunk_rest(seq__25876__$1);
var G__26167 = c__5568__auto__;
var G__26168 = cljs.core.count(c__5568__auto__);
var G__26169 = (0);
seq__25876 = G__26166;
chunk__25877 = G__26167;
count__25878 = G__26168;
i__25879 = G__26169;
continue;
} else {
var map__25888 = cljs.core.first(seq__25876__$1);
var map__25888__$1 = cljs.core.__destructure_map(map__25888);
var src = map__25888__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25889){var e_26170 = e25889;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26170);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26170.message)].join('')));
}

var G__26171 = cljs.core.next(seq__25876__$1);
var G__26172 = null;
var G__26173 = (0);
var G__26174 = (0);
seq__25876 = G__26171;
chunk__25877 = G__26172;
count__25878 = G__26173;
i__25879 = G__26174;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__25892 = cljs.core.seq(js_requires);
var chunk__25893 = null;
var count__25894 = (0);
var i__25895 = (0);
while(true){
if((i__25895 < count__25894)){
var js_ns = chunk__25893.cljs$core$IIndexed$_nth$arity$2(null,i__25895);
var require_str_26175 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26175);


var G__26176 = seq__25892;
var G__26177 = chunk__25893;
var G__26178 = count__25894;
var G__26179 = (i__25895 + (1));
seq__25892 = G__26176;
chunk__25893 = G__26177;
count__25894 = G__26178;
i__25895 = G__26179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25892);
if(temp__5804__auto__){
var seq__25892__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25892__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25892__$1);
var G__26180 = cljs.core.chunk_rest(seq__25892__$1);
var G__26181 = c__5568__auto__;
var G__26182 = cljs.core.count(c__5568__auto__);
var G__26183 = (0);
seq__25892 = G__26180;
chunk__25893 = G__26181;
count__25894 = G__26182;
i__25895 = G__26183;
continue;
} else {
var js_ns = cljs.core.first(seq__25892__$1);
var require_str_26184 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26184);


var G__26185 = cljs.core.next(seq__25892__$1);
var G__26186 = null;
var G__26187 = (0);
var G__26188 = (0);
seq__25892 = G__26185;
chunk__25893 = G__26186;
count__25894 = G__26187;
i__25895 = G__26188;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__25897){
var map__25898 = p__25897;
var map__25898__$1 = cljs.core.__destructure_map(map__25898);
var msg = map__25898__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25898__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25898__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25899(s__25900){
return (new cljs.core.LazySeq(null,(function (){
var s__25900__$1 = s__25900;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25900__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__25905 = cljs.core.first(xs__6360__auto__);
var map__25905__$1 = cljs.core.__destructure_map(map__25905);
var src = map__25905__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__25900__$1,map__25905,map__25905__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25898,map__25898__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25899_$_iter__25901(s__25902){
return (new cljs.core.LazySeq(null,((function (s__25900__$1,map__25905,map__25905__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25898,map__25898__$1,msg,info,reload_info){
return (function (){
var s__25902__$1 = s__25902;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__25902__$1);
if(temp__5804__auto____$1){
var s__25902__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25902__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25902__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25904 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25903 = (0);
while(true){
if((i__25903 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__25903);
cljs.core.chunk_append(b__25904,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26189 = (i__25903 + (1));
i__25903 = G__26189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25904),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25899_$_iter__25901(cljs.core.chunk_rest(s__25902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25904),null);
}
} else {
var warning = cljs.core.first(s__25902__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25899_$_iter__25901(cljs.core.rest(s__25902__$2)));
}
} else {
return null;
}
break;
}
});})(s__25900__$1,map__25905,map__25905__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25898,map__25898__$1,msg,info,reload_info))
,null,null));
});})(s__25900__$1,map__25905,map__25905__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25898,map__25898__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25899(cljs.core.rest(s__25900__$1)));
} else {
var G__26190 = cljs.core.rest(s__25900__$1);
s__25900__$1 = G__26190;
continue;
}
} else {
var G__26191 = cljs.core.rest(s__25900__$1);
s__25900__$1 = G__26191;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__25906_26192 = cljs.core.seq(warnings);
var chunk__25907_26193 = null;
var count__25908_26194 = (0);
var i__25909_26195 = (0);
while(true){
if((i__25909_26195 < count__25908_26194)){
var map__25912_26196 = chunk__25907_26193.cljs$core$IIndexed$_nth$arity$2(null,i__25909_26195);
var map__25912_26197__$1 = cljs.core.__destructure_map(map__25912_26196);
var w_26198 = map__25912_26197__$1;
var msg_26199__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_26197__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_26197__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_26197__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_26197__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26202)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26200),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26201),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26199__$1)].join(''));


var G__26203 = seq__25906_26192;
var G__26204 = chunk__25907_26193;
var G__26205 = count__25908_26194;
var G__26206 = (i__25909_26195 + (1));
seq__25906_26192 = G__26203;
chunk__25907_26193 = G__26204;
count__25908_26194 = G__26205;
i__25909_26195 = G__26206;
continue;
} else {
var temp__5804__auto___26207 = cljs.core.seq(seq__25906_26192);
if(temp__5804__auto___26207){
var seq__25906_26208__$1 = temp__5804__auto___26207;
if(cljs.core.chunked_seq_QMARK_(seq__25906_26208__$1)){
var c__5568__auto___26209 = cljs.core.chunk_first(seq__25906_26208__$1);
var G__26210 = cljs.core.chunk_rest(seq__25906_26208__$1);
var G__26211 = c__5568__auto___26209;
var G__26212 = cljs.core.count(c__5568__auto___26209);
var G__26213 = (0);
seq__25906_26192 = G__26210;
chunk__25907_26193 = G__26211;
count__25908_26194 = G__26212;
i__25909_26195 = G__26213;
continue;
} else {
var map__25913_26214 = cljs.core.first(seq__25906_26208__$1);
var map__25913_26215__$1 = cljs.core.__destructure_map(map__25913_26214);
var w_26216 = map__25913_26215__$1;
var msg_26217__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913_26215__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913_26215__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913_26215__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913_26215__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26220)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26218),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26219),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26217__$1)].join(''));


var G__26221 = cljs.core.next(seq__25906_26208__$1);
var G__26222 = null;
var G__26223 = (0);
var G__26224 = (0);
seq__25906_26192 = G__26221;
chunk__25907_26193 = G__26222;
count__25908_26194 = G__26223;
i__25909_26195 = G__26224;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__25896_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__25896_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__25914){
var map__25915 = p__25914;
var map__25915__$1 = cljs.core.__destructure_map(map__25915);
var msg = map__25915__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25915__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25915__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__25916 = cljs.core.seq(updates);
var chunk__25918 = null;
var count__25919 = (0);
var i__25920 = (0);
while(true){
if((i__25920 < count__25919)){
var path = chunk__25918.cljs$core$IIndexed$_nth$arity$2(null,i__25920);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26030_26225 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26034_26226 = null;
var count__26035_26227 = (0);
var i__26036_26228 = (0);
while(true){
if((i__26036_26228 < count__26035_26227)){
var node_26229 = chunk__26034_26226.cljs$core$IIndexed$_nth$arity$2(null,i__26036_26228);
if(cljs.core.not(node_26229.shadow$old)){
var path_match_26230 = shadow.cljs.devtools.client.browser.match_paths(node_26229.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26230)){
var new_link_26231 = (function (){var G__26062 = node_26229.cloneNode(true);
G__26062.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26230),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26062;
})();
(node_26229.shadow$old = true);

(new_link_26231.onload = ((function (seq__26030_26225,chunk__26034_26226,count__26035_26227,i__26036_26228,seq__25916,chunk__25918,count__25919,i__25920,new_link_26231,path_match_26230,node_26229,path,map__25915,map__25915__$1,msg,updates,reload_info){
return (function (e){
var seq__26063_26232 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26065_26233 = null;
var count__26066_26234 = (0);
var i__26067_26235 = (0);
while(true){
if((i__26067_26235 < count__26066_26234)){
var map__26071_26236 = chunk__26065_26233.cljs$core$IIndexed$_nth$arity$2(null,i__26067_26235);
var map__26071_26237__$1 = cljs.core.__destructure_map(map__26071_26236);
var task_26238 = map__26071_26237__$1;
var fn_str_26239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26071_26237__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26071_26237__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26241 = goog.getObjectByName(fn_str_26239,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26240)].join(''));

(fn_obj_26241.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26241.cljs$core$IFn$_invoke$arity$2(path,new_link_26231) : fn_obj_26241.call(null,path,new_link_26231));


var G__26242 = seq__26063_26232;
var G__26243 = chunk__26065_26233;
var G__26244 = count__26066_26234;
var G__26245 = (i__26067_26235 + (1));
seq__26063_26232 = G__26242;
chunk__26065_26233 = G__26243;
count__26066_26234 = G__26244;
i__26067_26235 = G__26245;
continue;
} else {
var temp__5804__auto___26246 = cljs.core.seq(seq__26063_26232);
if(temp__5804__auto___26246){
var seq__26063_26247__$1 = temp__5804__auto___26246;
if(cljs.core.chunked_seq_QMARK_(seq__26063_26247__$1)){
var c__5568__auto___26248 = cljs.core.chunk_first(seq__26063_26247__$1);
var G__26249 = cljs.core.chunk_rest(seq__26063_26247__$1);
var G__26250 = c__5568__auto___26248;
var G__26251 = cljs.core.count(c__5568__auto___26248);
var G__26252 = (0);
seq__26063_26232 = G__26249;
chunk__26065_26233 = G__26250;
count__26066_26234 = G__26251;
i__26067_26235 = G__26252;
continue;
} else {
var map__26072_26253 = cljs.core.first(seq__26063_26247__$1);
var map__26072_26254__$1 = cljs.core.__destructure_map(map__26072_26253);
var task_26255 = map__26072_26254__$1;
var fn_str_26256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072_26254__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26072_26254__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26258 = goog.getObjectByName(fn_str_26256,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26257)].join(''));

(fn_obj_26258.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26258.cljs$core$IFn$_invoke$arity$2(path,new_link_26231) : fn_obj_26258.call(null,path,new_link_26231));


var G__26259 = cljs.core.next(seq__26063_26247__$1);
var G__26260 = null;
var G__26261 = (0);
var G__26262 = (0);
seq__26063_26232 = G__26259;
chunk__26065_26233 = G__26260;
count__26066_26234 = G__26261;
i__26067_26235 = G__26262;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26229);
});})(seq__26030_26225,chunk__26034_26226,count__26035_26227,i__26036_26228,seq__25916,chunk__25918,count__25919,i__25920,new_link_26231,path_match_26230,node_26229,path,map__25915,map__25915__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26230], 0));

goog.dom.insertSiblingAfter(new_link_26231,node_26229);


var G__26263 = seq__26030_26225;
var G__26264 = chunk__26034_26226;
var G__26265 = count__26035_26227;
var G__26266 = (i__26036_26228 + (1));
seq__26030_26225 = G__26263;
chunk__26034_26226 = G__26264;
count__26035_26227 = G__26265;
i__26036_26228 = G__26266;
continue;
} else {
var G__26267 = seq__26030_26225;
var G__26268 = chunk__26034_26226;
var G__26269 = count__26035_26227;
var G__26270 = (i__26036_26228 + (1));
seq__26030_26225 = G__26267;
chunk__26034_26226 = G__26268;
count__26035_26227 = G__26269;
i__26036_26228 = G__26270;
continue;
}
} else {
var G__26271 = seq__26030_26225;
var G__26272 = chunk__26034_26226;
var G__26273 = count__26035_26227;
var G__26274 = (i__26036_26228 + (1));
seq__26030_26225 = G__26271;
chunk__26034_26226 = G__26272;
count__26035_26227 = G__26273;
i__26036_26228 = G__26274;
continue;
}
} else {
var temp__5804__auto___26275 = cljs.core.seq(seq__26030_26225);
if(temp__5804__auto___26275){
var seq__26030_26276__$1 = temp__5804__auto___26275;
if(cljs.core.chunked_seq_QMARK_(seq__26030_26276__$1)){
var c__5568__auto___26277 = cljs.core.chunk_first(seq__26030_26276__$1);
var G__26278 = cljs.core.chunk_rest(seq__26030_26276__$1);
var G__26279 = c__5568__auto___26277;
var G__26280 = cljs.core.count(c__5568__auto___26277);
var G__26281 = (0);
seq__26030_26225 = G__26278;
chunk__26034_26226 = G__26279;
count__26035_26227 = G__26280;
i__26036_26228 = G__26281;
continue;
} else {
var node_26282 = cljs.core.first(seq__26030_26276__$1);
if(cljs.core.not(node_26282.shadow$old)){
var path_match_26283 = shadow.cljs.devtools.client.browser.match_paths(node_26282.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26283)){
var new_link_26284 = (function (){var G__26073 = node_26282.cloneNode(true);
G__26073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26283),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26073;
})();
(node_26282.shadow$old = true);

(new_link_26284.onload = ((function (seq__26030_26225,chunk__26034_26226,count__26035_26227,i__26036_26228,seq__25916,chunk__25918,count__25919,i__25920,new_link_26284,path_match_26283,node_26282,seq__26030_26276__$1,temp__5804__auto___26275,path,map__25915,map__25915__$1,msg,updates,reload_info){
return (function (e){
var seq__26074_26285 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26076_26286 = null;
var count__26077_26287 = (0);
var i__26078_26288 = (0);
while(true){
if((i__26078_26288 < count__26077_26287)){
var map__26082_26289 = chunk__26076_26286.cljs$core$IIndexed$_nth$arity$2(null,i__26078_26288);
var map__26082_26290__$1 = cljs.core.__destructure_map(map__26082_26289);
var task_26291 = map__26082_26290__$1;
var fn_str_26292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082_26290__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082_26290__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26294 = goog.getObjectByName(fn_str_26292,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26293)].join(''));

(fn_obj_26294.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26294.cljs$core$IFn$_invoke$arity$2(path,new_link_26284) : fn_obj_26294.call(null,path,new_link_26284));


var G__26295 = seq__26074_26285;
var G__26296 = chunk__26076_26286;
var G__26297 = count__26077_26287;
var G__26298 = (i__26078_26288 + (1));
seq__26074_26285 = G__26295;
chunk__26076_26286 = G__26296;
count__26077_26287 = G__26297;
i__26078_26288 = G__26298;
continue;
} else {
var temp__5804__auto___26299__$1 = cljs.core.seq(seq__26074_26285);
if(temp__5804__auto___26299__$1){
var seq__26074_26300__$1 = temp__5804__auto___26299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26074_26300__$1)){
var c__5568__auto___26301 = cljs.core.chunk_first(seq__26074_26300__$1);
var G__26302 = cljs.core.chunk_rest(seq__26074_26300__$1);
var G__26303 = c__5568__auto___26301;
var G__26304 = cljs.core.count(c__5568__auto___26301);
var G__26305 = (0);
seq__26074_26285 = G__26302;
chunk__26076_26286 = G__26303;
count__26077_26287 = G__26304;
i__26078_26288 = G__26305;
continue;
} else {
var map__26083_26306 = cljs.core.first(seq__26074_26300__$1);
var map__26083_26307__$1 = cljs.core.__destructure_map(map__26083_26306);
var task_26308 = map__26083_26307__$1;
var fn_str_26309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26083_26307__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26083_26307__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26311 = goog.getObjectByName(fn_str_26309,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26310)].join(''));

(fn_obj_26311.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26311.cljs$core$IFn$_invoke$arity$2(path,new_link_26284) : fn_obj_26311.call(null,path,new_link_26284));


var G__26312 = cljs.core.next(seq__26074_26300__$1);
var G__26313 = null;
var G__26314 = (0);
var G__26315 = (0);
seq__26074_26285 = G__26312;
chunk__26076_26286 = G__26313;
count__26077_26287 = G__26314;
i__26078_26288 = G__26315;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26282);
});})(seq__26030_26225,chunk__26034_26226,count__26035_26227,i__26036_26228,seq__25916,chunk__25918,count__25919,i__25920,new_link_26284,path_match_26283,node_26282,seq__26030_26276__$1,temp__5804__auto___26275,path,map__25915,map__25915__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26283], 0));

goog.dom.insertSiblingAfter(new_link_26284,node_26282);


var G__26316 = cljs.core.next(seq__26030_26276__$1);
var G__26317 = null;
var G__26318 = (0);
var G__26319 = (0);
seq__26030_26225 = G__26316;
chunk__26034_26226 = G__26317;
count__26035_26227 = G__26318;
i__26036_26228 = G__26319;
continue;
} else {
var G__26320 = cljs.core.next(seq__26030_26276__$1);
var G__26321 = null;
var G__26322 = (0);
var G__26323 = (0);
seq__26030_26225 = G__26320;
chunk__26034_26226 = G__26321;
count__26035_26227 = G__26322;
i__26036_26228 = G__26323;
continue;
}
} else {
var G__26324 = cljs.core.next(seq__26030_26276__$1);
var G__26325 = null;
var G__26326 = (0);
var G__26327 = (0);
seq__26030_26225 = G__26324;
chunk__26034_26226 = G__26325;
count__26035_26227 = G__26326;
i__26036_26228 = G__26327;
continue;
}
}
} else {
}
}
break;
}


var G__26328 = seq__25916;
var G__26329 = chunk__25918;
var G__26330 = count__25919;
var G__26331 = (i__25920 + (1));
seq__25916 = G__26328;
chunk__25918 = G__26329;
count__25919 = G__26330;
i__25920 = G__26331;
continue;
} else {
var G__26332 = seq__25916;
var G__26333 = chunk__25918;
var G__26334 = count__25919;
var G__26335 = (i__25920 + (1));
seq__25916 = G__26332;
chunk__25918 = G__26333;
count__25919 = G__26334;
i__25920 = G__26335;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25916);
if(temp__5804__auto__){
var seq__25916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25916__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25916__$1);
var G__26336 = cljs.core.chunk_rest(seq__25916__$1);
var G__26337 = c__5568__auto__;
var G__26338 = cljs.core.count(c__5568__auto__);
var G__26339 = (0);
seq__25916 = G__26336;
chunk__25918 = G__26337;
count__25919 = G__26338;
i__25920 = G__26339;
continue;
} else {
var path = cljs.core.first(seq__25916__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26084_26340 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26088_26341 = null;
var count__26089_26342 = (0);
var i__26090_26343 = (0);
while(true){
if((i__26090_26343 < count__26089_26342)){
var node_26344 = chunk__26088_26341.cljs$core$IIndexed$_nth$arity$2(null,i__26090_26343);
if(cljs.core.not(node_26344.shadow$old)){
var path_match_26345 = shadow.cljs.devtools.client.browser.match_paths(node_26344.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26345)){
var new_link_26346 = (function (){var G__26116 = node_26344.cloneNode(true);
G__26116.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26345),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26116;
})();
(node_26344.shadow$old = true);

(new_link_26346.onload = ((function (seq__26084_26340,chunk__26088_26341,count__26089_26342,i__26090_26343,seq__25916,chunk__25918,count__25919,i__25920,new_link_26346,path_match_26345,node_26344,path,seq__25916__$1,temp__5804__auto__,map__25915,map__25915__$1,msg,updates,reload_info){
return (function (e){
var seq__26117_26347 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26119_26348 = null;
var count__26120_26349 = (0);
var i__26121_26350 = (0);
while(true){
if((i__26121_26350 < count__26120_26349)){
var map__26125_26351 = chunk__26119_26348.cljs$core$IIndexed$_nth$arity$2(null,i__26121_26350);
var map__26125_26352__$1 = cljs.core.__destructure_map(map__26125_26351);
var task_26353 = map__26125_26352__$1;
var fn_str_26354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26125_26352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26125_26352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26356 = goog.getObjectByName(fn_str_26354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26355)].join(''));

(fn_obj_26356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26356.cljs$core$IFn$_invoke$arity$2(path,new_link_26346) : fn_obj_26356.call(null,path,new_link_26346));


var G__26357 = seq__26117_26347;
var G__26358 = chunk__26119_26348;
var G__26359 = count__26120_26349;
var G__26360 = (i__26121_26350 + (1));
seq__26117_26347 = G__26357;
chunk__26119_26348 = G__26358;
count__26120_26349 = G__26359;
i__26121_26350 = G__26360;
continue;
} else {
var temp__5804__auto___26361__$1 = cljs.core.seq(seq__26117_26347);
if(temp__5804__auto___26361__$1){
var seq__26117_26362__$1 = temp__5804__auto___26361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26117_26362__$1)){
var c__5568__auto___26363 = cljs.core.chunk_first(seq__26117_26362__$1);
var G__26364 = cljs.core.chunk_rest(seq__26117_26362__$1);
var G__26365 = c__5568__auto___26363;
var G__26366 = cljs.core.count(c__5568__auto___26363);
var G__26367 = (0);
seq__26117_26347 = G__26364;
chunk__26119_26348 = G__26365;
count__26120_26349 = G__26366;
i__26121_26350 = G__26367;
continue;
} else {
var map__26126_26368 = cljs.core.first(seq__26117_26362__$1);
var map__26126_26369__$1 = cljs.core.__destructure_map(map__26126_26368);
var task_26370 = map__26126_26369__$1;
var fn_str_26371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26126_26369__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26126_26369__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26373 = goog.getObjectByName(fn_str_26371,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26372)].join(''));

(fn_obj_26373.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26373.cljs$core$IFn$_invoke$arity$2(path,new_link_26346) : fn_obj_26373.call(null,path,new_link_26346));


var G__26374 = cljs.core.next(seq__26117_26362__$1);
var G__26375 = null;
var G__26376 = (0);
var G__26377 = (0);
seq__26117_26347 = G__26374;
chunk__26119_26348 = G__26375;
count__26120_26349 = G__26376;
i__26121_26350 = G__26377;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26344);
});})(seq__26084_26340,chunk__26088_26341,count__26089_26342,i__26090_26343,seq__25916,chunk__25918,count__25919,i__25920,new_link_26346,path_match_26345,node_26344,path,seq__25916__$1,temp__5804__auto__,map__25915,map__25915__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26345], 0));

goog.dom.insertSiblingAfter(new_link_26346,node_26344);


var G__26378 = seq__26084_26340;
var G__26379 = chunk__26088_26341;
var G__26380 = count__26089_26342;
var G__26381 = (i__26090_26343 + (1));
seq__26084_26340 = G__26378;
chunk__26088_26341 = G__26379;
count__26089_26342 = G__26380;
i__26090_26343 = G__26381;
continue;
} else {
var G__26382 = seq__26084_26340;
var G__26383 = chunk__26088_26341;
var G__26384 = count__26089_26342;
var G__26385 = (i__26090_26343 + (1));
seq__26084_26340 = G__26382;
chunk__26088_26341 = G__26383;
count__26089_26342 = G__26384;
i__26090_26343 = G__26385;
continue;
}
} else {
var G__26386 = seq__26084_26340;
var G__26387 = chunk__26088_26341;
var G__26388 = count__26089_26342;
var G__26389 = (i__26090_26343 + (1));
seq__26084_26340 = G__26386;
chunk__26088_26341 = G__26387;
count__26089_26342 = G__26388;
i__26090_26343 = G__26389;
continue;
}
} else {
var temp__5804__auto___26390__$1 = cljs.core.seq(seq__26084_26340);
if(temp__5804__auto___26390__$1){
var seq__26084_26391__$1 = temp__5804__auto___26390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26084_26391__$1)){
var c__5568__auto___26392 = cljs.core.chunk_first(seq__26084_26391__$1);
var G__26393 = cljs.core.chunk_rest(seq__26084_26391__$1);
var G__26394 = c__5568__auto___26392;
var G__26395 = cljs.core.count(c__5568__auto___26392);
var G__26396 = (0);
seq__26084_26340 = G__26393;
chunk__26088_26341 = G__26394;
count__26089_26342 = G__26395;
i__26090_26343 = G__26396;
continue;
} else {
var node_26397 = cljs.core.first(seq__26084_26391__$1);
if(cljs.core.not(node_26397.shadow$old)){
var path_match_26398 = shadow.cljs.devtools.client.browser.match_paths(node_26397.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26398)){
var new_link_26399 = (function (){var G__26127 = node_26397.cloneNode(true);
G__26127.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26398),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26127;
})();
(node_26397.shadow$old = true);

(new_link_26399.onload = ((function (seq__26084_26340,chunk__26088_26341,count__26089_26342,i__26090_26343,seq__25916,chunk__25918,count__25919,i__25920,new_link_26399,path_match_26398,node_26397,seq__26084_26391__$1,temp__5804__auto___26390__$1,path,seq__25916__$1,temp__5804__auto__,map__25915,map__25915__$1,msg,updates,reload_info){
return (function (e){
var seq__26128_26400 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26130_26401 = null;
var count__26131_26402 = (0);
var i__26132_26403 = (0);
while(true){
if((i__26132_26403 < count__26131_26402)){
var map__26136_26404 = chunk__26130_26401.cljs$core$IIndexed$_nth$arity$2(null,i__26132_26403);
var map__26136_26405__$1 = cljs.core.__destructure_map(map__26136_26404);
var task_26406 = map__26136_26405__$1;
var fn_str_26407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136_26405__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136_26405__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26409 = goog.getObjectByName(fn_str_26407,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26408)].join(''));

(fn_obj_26409.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26409.cljs$core$IFn$_invoke$arity$2(path,new_link_26399) : fn_obj_26409.call(null,path,new_link_26399));


var G__26410 = seq__26128_26400;
var G__26411 = chunk__26130_26401;
var G__26412 = count__26131_26402;
var G__26413 = (i__26132_26403 + (1));
seq__26128_26400 = G__26410;
chunk__26130_26401 = G__26411;
count__26131_26402 = G__26412;
i__26132_26403 = G__26413;
continue;
} else {
var temp__5804__auto___26414__$2 = cljs.core.seq(seq__26128_26400);
if(temp__5804__auto___26414__$2){
var seq__26128_26415__$1 = temp__5804__auto___26414__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26128_26415__$1)){
var c__5568__auto___26416 = cljs.core.chunk_first(seq__26128_26415__$1);
var G__26417 = cljs.core.chunk_rest(seq__26128_26415__$1);
var G__26418 = c__5568__auto___26416;
var G__26419 = cljs.core.count(c__5568__auto___26416);
var G__26420 = (0);
seq__26128_26400 = G__26417;
chunk__26130_26401 = G__26418;
count__26131_26402 = G__26419;
i__26132_26403 = G__26420;
continue;
} else {
var map__26137_26421 = cljs.core.first(seq__26128_26415__$1);
var map__26137_26422__$1 = cljs.core.__destructure_map(map__26137_26421);
var task_26423 = map__26137_26422__$1;
var fn_str_26424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26137_26422__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26137_26422__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26426 = goog.getObjectByName(fn_str_26424,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26425)].join(''));

(fn_obj_26426.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26426.cljs$core$IFn$_invoke$arity$2(path,new_link_26399) : fn_obj_26426.call(null,path,new_link_26399));


var G__26427 = cljs.core.next(seq__26128_26415__$1);
var G__26428 = null;
var G__26429 = (0);
var G__26430 = (0);
seq__26128_26400 = G__26427;
chunk__26130_26401 = G__26428;
count__26131_26402 = G__26429;
i__26132_26403 = G__26430;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26397);
});})(seq__26084_26340,chunk__26088_26341,count__26089_26342,i__26090_26343,seq__25916,chunk__25918,count__25919,i__25920,new_link_26399,path_match_26398,node_26397,seq__26084_26391__$1,temp__5804__auto___26390__$1,path,seq__25916__$1,temp__5804__auto__,map__25915,map__25915__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26398], 0));

goog.dom.insertSiblingAfter(new_link_26399,node_26397);


var G__26431 = cljs.core.next(seq__26084_26391__$1);
var G__26432 = null;
var G__26433 = (0);
var G__26434 = (0);
seq__26084_26340 = G__26431;
chunk__26088_26341 = G__26432;
count__26089_26342 = G__26433;
i__26090_26343 = G__26434;
continue;
} else {
var G__26435 = cljs.core.next(seq__26084_26391__$1);
var G__26436 = null;
var G__26437 = (0);
var G__26438 = (0);
seq__26084_26340 = G__26435;
chunk__26088_26341 = G__26436;
count__26089_26342 = G__26437;
i__26090_26343 = G__26438;
continue;
}
} else {
var G__26439 = cljs.core.next(seq__26084_26391__$1);
var G__26440 = null;
var G__26441 = (0);
var G__26442 = (0);
seq__26084_26340 = G__26439;
chunk__26088_26341 = G__26440;
count__26089_26342 = G__26441;
i__26090_26343 = G__26442;
continue;
}
}
} else {
}
}
break;
}


var G__26443 = cljs.core.next(seq__25916__$1);
var G__26444 = null;
var G__26445 = (0);
var G__26446 = (0);
seq__25916 = G__26443;
chunk__25918 = G__26444;
count__25919 = G__26445;
i__25920 = G__26446;
continue;
} else {
var G__26447 = cljs.core.next(seq__25916__$1);
var G__26448 = null;
var G__26449 = (0);
var G__26450 = (0);
seq__25916 = G__26447;
chunk__25918 = G__26448;
count__25919 = G__26449;
i__25920 = G__26450;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__26138){
var map__26139 = p__26138;
var map__26139__$1 = cljs.core.__destructure_map(map__26139);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26139__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__26140){
var map__26141 = p__26140;
var map__26141__$1 = cljs.core.__destructure_map(map__26141);
var _ = map__26141__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26142,done,error){
var map__26143 = p__26142;
var map__26143__$1 = cljs.core.__destructure_map(map__26143);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26143__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26144,done,error){
var map__26145 = p__26144;
var map__26145__$1 = cljs.core.__destructure_map(map__26145);
var msg = map__26145__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26146){
var map__26147 = p__26146;
var map__26147__$1 = cljs.core.__destructure_map(map__26147);
var src = map__26147__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26147__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26148 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26148) : done.call(null,G__26148));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26149){
var map__26150 = p__26149;
var map__26150__$1 = cljs.core.__destructure_map(map__26150);
var msg__$1 = map__26150__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26150__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26151){var ex = e26151;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26152){
var map__26153 = p__26152;
var map__26153__$1 = cljs.core.__destructure_map(map__26153);
var env = map__26153__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26154){
var map__26155 = p__26154;
var map__26155__$1 = cljs.core.__destructure_map(map__26155);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__26156){
var map__26157 = p__26156;
var map__26157__$1 = cljs.core.__destructure_map(map__26157);
var svc = map__26157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
