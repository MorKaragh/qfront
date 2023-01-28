goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24242 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24242(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24243 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24243(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23173 = coll;
var G__23174 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23173,G__23174) : shadow.dom.lazy_native_coll_seq.call(null,G__23173,G__23174));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23253 = arguments.length;
switch (G__23253) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23282 = arguments.length;
switch (G__23282) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23302 = arguments.length;
switch (G__23302) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23351 = arguments.length;
switch (G__23351) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23383 = arguments.length;
switch (G__23383) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23395 = arguments.length;
switch (G__23395) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e23404){if((e23404 instanceof Object)){
var e = e23404;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23404;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23416 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23417 = null;
var count__23418 = (0);
var i__23419 = (0);
while(true){
if((i__23419 < count__23418)){
var el = chunk__23417.cljs$core$IIndexed$_nth$arity$2(null,i__23419);
var handler_24253__$1 = ((function (seq__23416,chunk__23417,count__23418,i__23419,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23416,chunk__23417,count__23418,i__23419,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24253__$1);


var G__24254 = seq__23416;
var G__24255 = chunk__23417;
var G__24256 = count__23418;
var G__24257 = (i__23419 + (1));
seq__23416 = G__24254;
chunk__23417 = G__24255;
count__23418 = G__24256;
i__23419 = G__24257;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23416);
if(temp__5804__auto__){
var seq__23416__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23416__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23416__$1);
var G__24258 = cljs.core.chunk_rest(seq__23416__$1);
var G__24259 = c__5568__auto__;
var G__24260 = cljs.core.count(c__5568__auto__);
var G__24261 = (0);
seq__23416 = G__24258;
chunk__23417 = G__24259;
count__23418 = G__24260;
i__23419 = G__24261;
continue;
} else {
var el = cljs.core.first(seq__23416__$1);
var handler_24262__$1 = ((function (seq__23416,chunk__23417,count__23418,i__23419,el,seq__23416__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23416,chunk__23417,count__23418,i__23419,el,seq__23416__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24262__$1);


var G__24263 = cljs.core.next(seq__23416__$1);
var G__24264 = null;
var G__24265 = (0);
var G__24266 = (0);
seq__23416 = G__24263;
chunk__23417 = G__24264;
count__23418 = G__24265;
i__23419 = G__24266;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23442 = arguments.length;
switch (G__23442) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23454 = cljs.core.seq(events);
var chunk__23455 = null;
var count__23456 = (0);
var i__23457 = (0);
while(true){
if((i__23457 < count__23456)){
var vec__23480 = chunk__23455.cljs$core$IIndexed$_nth$arity$2(null,i__23457);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23480,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24269 = seq__23454;
var G__24270 = chunk__23455;
var G__24271 = count__23456;
var G__24272 = (i__23457 + (1));
seq__23454 = G__24269;
chunk__23455 = G__24270;
count__23456 = G__24271;
i__23457 = G__24272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23454);
if(temp__5804__auto__){
var seq__23454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23454__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23454__$1);
var G__24273 = cljs.core.chunk_rest(seq__23454__$1);
var G__24274 = c__5568__auto__;
var G__24275 = cljs.core.count(c__5568__auto__);
var G__24276 = (0);
seq__23454 = G__24273;
chunk__23455 = G__24274;
count__23456 = G__24275;
i__23457 = G__24276;
continue;
} else {
var vec__23487 = cljs.core.first(seq__23454__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24277 = cljs.core.next(seq__23454__$1);
var G__24278 = null;
var G__24279 = (0);
var G__24280 = (0);
seq__23454 = G__24277;
chunk__23455 = G__24278;
count__23456 = G__24279;
i__23457 = G__24280;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23498 = cljs.core.seq(styles);
var chunk__23499 = null;
var count__23500 = (0);
var i__23501 = (0);
while(true){
if((i__23501 < count__23500)){
var vec__23512 = chunk__23499.cljs$core$IIndexed$_nth$arity$2(null,i__23501);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23512,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24281 = seq__23498;
var G__24282 = chunk__23499;
var G__24283 = count__23500;
var G__24284 = (i__23501 + (1));
seq__23498 = G__24281;
chunk__23499 = G__24282;
count__23500 = G__24283;
i__23501 = G__24284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23498);
if(temp__5804__auto__){
var seq__23498__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23498__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23498__$1);
var G__24286 = cljs.core.chunk_rest(seq__23498__$1);
var G__24287 = c__5568__auto__;
var G__24288 = cljs.core.count(c__5568__auto__);
var G__24289 = (0);
seq__23498 = G__24286;
chunk__23499 = G__24287;
count__23500 = G__24288;
i__23501 = G__24289;
continue;
} else {
var vec__23517 = cljs.core.first(seq__23498__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23517,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24291 = cljs.core.next(seq__23498__$1);
var G__24292 = null;
var G__24293 = (0);
var G__24294 = (0);
seq__23498 = G__24291;
chunk__23499 = G__24292;
count__23500 = G__24293;
i__23501 = G__24294;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23530_24299 = key;
var G__23530_24300__$1 = (((G__23530_24299 instanceof cljs.core.Keyword))?G__23530_24299.fqn:null);
switch (G__23530_24300__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24306 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_24306,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_24306,"aria-");
}
})())){
el.setAttribute(ks_24306,value);
} else {
(el[ks_24306] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__23554){
var map__23556 = p__23554;
var map__23556__$1 = cljs.core.__destructure_map(map__23556);
var props = map__23556__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23556__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__23558 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__23561 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__23561,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__23561;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__23567 = arguments.length;
switch (G__23567) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__23582){
var vec__23583 = p__23582;
var seq__23584 = cljs.core.seq(vec__23583);
var first__23585 = cljs.core.first(seq__23584);
var seq__23584__$1 = cljs.core.next(seq__23584);
var nn = first__23585;
var first__23585__$1 = cljs.core.first(seq__23584__$1);
var seq__23584__$2 = cljs.core.next(seq__23584__$1);
var np = first__23585__$1;
var nc = seq__23584__$2;
var node = vec__23583;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23587 = nn;
var G__23588 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23587,G__23588) : create_fn.call(null,G__23587,G__23588));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23589 = nn;
var G__23590 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23589,G__23590) : create_fn.call(null,G__23589,G__23590));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__23592 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(1),null);
var seq__23596_24312 = cljs.core.seq(node_children);
var chunk__23597_24313 = null;
var count__23598_24314 = (0);
var i__23599_24315 = (0);
while(true){
if((i__23599_24315 < count__23598_24314)){
var child_struct_24316 = chunk__23597_24313.cljs$core$IIndexed$_nth$arity$2(null,i__23599_24315);
var children_24317 = shadow.dom.dom_node(child_struct_24316);
if(cljs.core.seq_QMARK_(children_24317)){
var seq__23635_24319 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24317));
var chunk__23637_24320 = null;
var count__23638_24321 = (0);
var i__23639_24322 = (0);
while(true){
if((i__23639_24322 < count__23638_24321)){
var child_24323 = chunk__23637_24320.cljs$core$IIndexed$_nth$arity$2(null,i__23639_24322);
if(cljs.core.truth_(child_24323)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24323);


var G__24324 = seq__23635_24319;
var G__24325 = chunk__23637_24320;
var G__24326 = count__23638_24321;
var G__24327 = (i__23639_24322 + (1));
seq__23635_24319 = G__24324;
chunk__23637_24320 = G__24325;
count__23638_24321 = G__24326;
i__23639_24322 = G__24327;
continue;
} else {
var G__24328 = seq__23635_24319;
var G__24329 = chunk__23637_24320;
var G__24330 = count__23638_24321;
var G__24331 = (i__23639_24322 + (1));
seq__23635_24319 = G__24328;
chunk__23637_24320 = G__24329;
count__23638_24321 = G__24330;
i__23639_24322 = G__24331;
continue;
}
} else {
var temp__5804__auto___24332 = cljs.core.seq(seq__23635_24319);
if(temp__5804__auto___24332){
var seq__23635_24333__$1 = temp__5804__auto___24332;
if(cljs.core.chunked_seq_QMARK_(seq__23635_24333__$1)){
var c__5568__auto___24334 = cljs.core.chunk_first(seq__23635_24333__$1);
var G__24335 = cljs.core.chunk_rest(seq__23635_24333__$1);
var G__24336 = c__5568__auto___24334;
var G__24337 = cljs.core.count(c__5568__auto___24334);
var G__24338 = (0);
seq__23635_24319 = G__24335;
chunk__23637_24320 = G__24336;
count__23638_24321 = G__24337;
i__23639_24322 = G__24338;
continue;
} else {
var child_24339 = cljs.core.first(seq__23635_24333__$1);
if(cljs.core.truth_(child_24339)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24339);


var G__24340 = cljs.core.next(seq__23635_24333__$1);
var G__24341 = null;
var G__24342 = (0);
var G__24343 = (0);
seq__23635_24319 = G__24340;
chunk__23637_24320 = G__24341;
count__23638_24321 = G__24342;
i__23639_24322 = G__24343;
continue;
} else {
var G__24344 = cljs.core.next(seq__23635_24333__$1);
var G__24345 = null;
var G__24346 = (0);
var G__24347 = (0);
seq__23635_24319 = G__24344;
chunk__23637_24320 = G__24345;
count__23638_24321 = G__24346;
i__23639_24322 = G__24347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24317);
}


var G__24348 = seq__23596_24312;
var G__24349 = chunk__23597_24313;
var G__24350 = count__23598_24314;
var G__24351 = (i__23599_24315 + (1));
seq__23596_24312 = G__24348;
chunk__23597_24313 = G__24349;
count__23598_24314 = G__24350;
i__23599_24315 = G__24351;
continue;
} else {
var temp__5804__auto___24352 = cljs.core.seq(seq__23596_24312);
if(temp__5804__auto___24352){
var seq__23596_24353__$1 = temp__5804__auto___24352;
if(cljs.core.chunked_seq_QMARK_(seq__23596_24353__$1)){
var c__5568__auto___24354 = cljs.core.chunk_first(seq__23596_24353__$1);
var G__24355 = cljs.core.chunk_rest(seq__23596_24353__$1);
var G__24356 = c__5568__auto___24354;
var G__24357 = cljs.core.count(c__5568__auto___24354);
var G__24358 = (0);
seq__23596_24312 = G__24355;
chunk__23597_24313 = G__24356;
count__23598_24314 = G__24357;
i__23599_24315 = G__24358;
continue;
} else {
var child_struct_24359 = cljs.core.first(seq__23596_24353__$1);
var children_24360 = shadow.dom.dom_node(child_struct_24359);
if(cljs.core.seq_QMARK_(children_24360)){
var seq__23683_24361 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24360));
var chunk__23685_24362 = null;
var count__23686_24363 = (0);
var i__23687_24364 = (0);
while(true){
if((i__23687_24364 < count__23686_24363)){
var child_24365 = chunk__23685_24362.cljs$core$IIndexed$_nth$arity$2(null,i__23687_24364);
if(cljs.core.truth_(child_24365)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24365);


var G__24366 = seq__23683_24361;
var G__24367 = chunk__23685_24362;
var G__24368 = count__23686_24363;
var G__24369 = (i__23687_24364 + (1));
seq__23683_24361 = G__24366;
chunk__23685_24362 = G__24367;
count__23686_24363 = G__24368;
i__23687_24364 = G__24369;
continue;
} else {
var G__24370 = seq__23683_24361;
var G__24371 = chunk__23685_24362;
var G__24372 = count__23686_24363;
var G__24373 = (i__23687_24364 + (1));
seq__23683_24361 = G__24370;
chunk__23685_24362 = G__24371;
count__23686_24363 = G__24372;
i__23687_24364 = G__24373;
continue;
}
} else {
var temp__5804__auto___24374__$1 = cljs.core.seq(seq__23683_24361);
if(temp__5804__auto___24374__$1){
var seq__23683_24375__$1 = temp__5804__auto___24374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23683_24375__$1)){
var c__5568__auto___24376 = cljs.core.chunk_first(seq__23683_24375__$1);
var G__24377 = cljs.core.chunk_rest(seq__23683_24375__$1);
var G__24378 = c__5568__auto___24376;
var G__24379 = cljs.core.count(c__5568__auto___24376);
var G__24380 = (0);
seq__23683_24361 = G__24377;
chunk__23685_24362 = G__24378;
count__23686_24363 = G__24379;
i__23687_24364 = G__24380;
continue;
} else {
var child_24381 = cljs.core.first(seq__23683_24375__$1);
if(cljs.core.truth_(child_24381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24381);


var G__24382 = cljs.core.next(seq__23683_24375__$1);
var G__24383 = null;
var G__24384 = (0);
var G__24385 = (0);
seq__23683_24361 = G__24382;
chunk__23685_24362 = G__24383;
count__23686_24363 = G__24384;
i__23687_24364 = G__24385;
continue;
} else {
var G__24386 = cljs.core.next(seq__23683_24375__$1);
var G__24387 = null;
var G__24388 = (0);
var G__24389 = (0);
seq__23683_24361 = G__24386;
chunk__23685_24362 = G__24387;
count__23686_24363 = G__24388;
i__23687_24364 = G__24389;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24360);
}


var G__24390 = cljs.core.next(seq__23596_24353__$1);
var G__24391 = null;
var G__24392 = (0);
var G__24393 = (0);
seq__23596_24312 = G__24390;
chunk__23597_24313 = G__24391;
count__23598_24314 = G__24392;
i__23599_24315 = G__24393;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__23743 = cljs.core.seq(node);
var chunk__23744 = null;
var count__23745 = (0);
var i__23746 = (0);
while(true){
if((i__23746 < count__23745)){
var n = chunk__23744.cljs$core$IIndexed$_nth$arity$2(null,i__23746);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24395 = seq__23743;
var G__24396 = chunk__23744;
var G__24397 = count__23745;
var G__24398 = (i__23746 + (1));
seq__23743 = G__24395;
chunk__23744 = G__24396;
count__23745 = G__24397;
i__23746 = G__24398;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23743);
if(temp__5804__auto__){
var seq__23743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23743__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23743__$1);
var G__24400 = cljs.core.chunk_rest(seq__23743__$1);
var G__24401 = c__5568__auto__;
var G__24402 = cljs.core.count(c__5568__auto__);
var G__24403 = (0);
seq__23743 = G__24400;
chunk__23744 = G__24401;
count__23745 = G__24402;
i__23746 = G__24403;
continue;
} else {
var n = cljs.core.first(seq__23743__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24409 = cljs.core.next(seq__23743__$1);
var G__24410 = null;
var G__24411 = (0);
var G__24412 = (0);
seq__23743 = G__24409;
chunk__23744 = G__24410;
count__23745 = G__24411;
i__23746 = G__24412;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__23758 = arguments.length;
switch (G__23758) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__23765 = arguments.length;
switch (G__23765) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__23788 = arguments.length;
switch (G__23788) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24422 = arguments.length;
var i__5770__auto___24423 = (0);
while(true){
if((i__5770__auto___24423 < len__5769__auto___24422)){
args__5775__auto__.push((arguments[i__5770__auto___24423]));

var G__24424 = (i__5770__auto___24423 + (1));
i__5770__auto___24423 = G__24424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__23797_24425 = cljs.core.seq(nodes);
var chunk__23798_24426 = null;
var count__23799_24427 = (0);
var i__23800_24428 = (0);
while(true){
if((i__23800_24428 < count__23799_24427)){
var node_24429 = chunk__23798_24426.cljs$core$IIndexed$_nth$arity$2(null,i__23800_24428);
fragment.appendChild(shadow.dom._to_dom(node_24429));


var G__24431 = seq__23797_24425;
var G__24432 = chunk__23798_24426;
var G__24433 = count__23799_24427;
var G__24434 = (i__23800_24428 + (1));
seq__23797_24425 = G__24431;
chunk__23798_24426 = G__24432;
count__23799_24427 = G__24433;
i__23800_24428 = G__24434;
continue;
} else {
var temp__5804__auto___24435 = cljs.core.seq(seq__23797_24425);
if(temp__5804__auto___24435){
var seq__23797_24436__$1 = temp__5804__auto___24435;
if(cljs.core.chunked_seq_QMARK_(seq__23797_24436__$1)){
var c__5568__auto___24437 = cljs.core.chunk_first(seq__23797_24436__$1);
var G__24439 = cljs.core.chunk_rest(seq__23797_24436__$1);
var G__24440 = c__5568__auto___24437;
var G__24441 = cljs.core.count(c__5568__auto___24437);
var G__24442 = (0);
seq__23797_24425 = G__24439;
chunk__23798_24426 = G__24440;
count__23799_24427 = G__24441;
i__23800_24428 = G__24442;
continue;
} else {
var node_24443 = cljs.core.first(seq__23797_24436__$1);
fragment.appendChild(shadow.dom._to_dom(node_24443));


var G__24444 = cljs.core.next(seq__23797_24436__$1);
var G__24445 = null;
var G__24446 = (0);
var G__24447 = (0);
seq__23797_24425 = G__24444;
chunk__23798_24426 = G__24445;
count__23799_24427 = G__24446;
i__23800_24428 = G__24447;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq23791){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23791));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__23814_24449 = cljs.core.seq(scripts);
var chunk__23815_24450 = null;
var count__23816_24451 = (0);
var i__23817_24452 = (0);
while(true){
if((i__23817_24452 < count__23816_24451)){
var vec__23830_24453 = chunk__23815_24450.cljs$core$IIndexed$_nth$arity$2(null,i__23817_24452);
var script_tag_24454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23830_24453,(0),null);
var script_body_24455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23830_24453,(1),null);
eval(script_body_24455);


var G__24456 = seq__23814_24449;
var G__24457 = chunk__23815_24450;
var G__24458 = count__23816_24451;
var G__24459 = (i__23817_24452 + (1));
seq__23814_24449 = G__24456;
chunk__23815_24450 = G__24457;
count__23816_24451 = G__24458;
i__23817_24452 = G__24459;
continue;
} else {
var temp__5804__auto___24460 = cljs.core.seq(seq__23814_24449);
if(temp__5804__auto___24460){
var seq__23814_24461__$1 = temp__5804__auto___24460;
if(cljs.core.chunked_seq_QMARK_(seq__23814_24461__$1)){
var c__5568__auto___24462 = cljs.core.chunk_first(seq__23814_24461__$1);
var G__24463 = cljs.core.chunk_rest(seq__23814_24461__$1);
var G__24464 = c__5568__auto___24462;
var G__24465 = cljs.core.count(c__5568__auto___24462);
var G__24466 = (0);
seq__23814_24449 = G__24463;
chunk__23815_24450 = G__24464;
count__23816_24451 = G__24465;
i__23817_24452 = G__24466;
continue;
} else {
var vec__23841_24467 = cljs.core.first(seq__23814_24461__$1);
var script_tag_24468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841_24467,(0),null);
var script_body_24469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841_24467,(1),null);
eval(script_body_24469);


var G__24470 = cljs.core.next(seq__23814_24461__$1);
var G__24471 = null;
var G__24472 = (0);
var G__24473 = (0);
seq__23814_24449 = G__24470;
chunk__23815_24450 = G__24471;
count__23816_24451 = G__24472;
i__23817_24452 = G__24473;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__23844){
var vec__23846 = p__23844;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23846,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23846,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__23871 = arguments.length;
switch (G__23871) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__23915 = cljs.core.seq(style_keys);
var chunk__23916 = null;
var count__23917 = (0);
var i__23918 = (0);
while(true){
if((i__23918 < count__23917)){
var it = chunk__23916.cljs$core$IIndexed$_nth$arity$2(null,i__23918);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24476 = seq__23915;
var G__24477 = chunk__23916;
var G__24478 = count__23917;
var G__24479 = (i__23918 + (1));
seq__23915 = G__24476;
chunk__23916 = G__24477;
count__23917 = G__24478;
i__23918 = G__24479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23915);
if(temp__5804__auto__){
var seq__23915__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23915__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23915__$1);
var G__24480 = cljs.core.chunk_rest(seq__23915__$1);
var G__24481 = c__5568__auto__;
var G__24482 = cljs.core.count(c__5568__auto__);
var G__24483 = (0);
seq__23915 = G__24480;
chunk__23916 = G__24481;
count__23917 = G__24482;
i__23918 = G__24483;
continue;
} else {
var it = cljs.core.first(seq__23915__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24487 = cljs.core.next(seq__23915__$1);
var G__24488 = null;
var G__24489 = (0);
var G__24490 = (0);
seq__23915 = G__24487;
chunk__23916 = G__24488;
count__23917 = G__24489;
i__23918 = G__24490;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k23930,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__23941 = k23930;
var G__23941__$1 = (((G__23941 instanceof cljs.core.Keyword))?G__23941.fqn:null);
switch (G__23941__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23930,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__23945){
var vec__23947 = p__23945;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23929){
var self__ = this;
var G__23929__$1 = this;
return (new cljs.core.RecordIter((0),G__23929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23931,other23932){
var self__ = this;
var this23931__$1 = this;
return (((!((other23932 == null)))) && ((((this23931__$1.constructor === other23932.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23931__$1.x,other23932.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23931__$1.y,other23932.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23931__$1.__extmap,other23932.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k23930){
var self__ = this;
var this__5350__auto____$1 = this;
var G__23989 = k23930;
var G__23989__$1 = (((G__23989 instanceof cljs.core.Keyword))?G__23989.fqn:null);
switch (G__23989__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23930);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__23929){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__23992 = cljs.core.keyword_identical_QMARK_;
var expr__23993 = k__5352__auto__;
if(cljs.core.truth_((pred__23992.cljs$core$IFn$_invoke$arity$2 ? pred__23992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__23993) : pred__23992.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__23993)))){
return (new shadow.dom.Coordinate(G__23929,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23992.cljs$core$IFn$_invoke$arity$2 ? pred__23992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__23993) : pred__23992.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__23993)))){
return (new shadow.dom.Coordinate(self__.x,G__23929,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__23929),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__23929){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__23929,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__23934){
var extmap__5385__auto__ = (function (){var G__24004 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23934,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__23934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24004);
} else {
return G__24004;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23934),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k24006,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__24012 = k24006;
var G__24012__$1 = (((G__24012 instanceof cljs.core.Keyword))?G__24012.fqn:null);
switch (G__24012__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24006,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__24014){
var vec__24015 = p__24014;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24005){
var self__ = this;
var G__24005__$1 = this;
return (new cljs.core.RecordIter((0),G__24005__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24007,other24008){
var self__ = this;
var this24007__$1 = this;
return (((!((other24008 == null)))) && ((((this24007__$1.constructor === other24008.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24007__$1.w,other24008.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24007__$1.h,other24008.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24007__$1.__extmap,other24008.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k24006){
var self__ = this;
var this__5350__auto____$1 = this;
var G__24028 = k24006;
var G__24028__$1 = (((G__24028 instanceof cljs.core.Keyword))?G__24028.fqn:null);
switch (G__24028__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24006);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__24005){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__24029 = cljs.core.keyword_identical_QMARK_;
var expr__24030 = k__5352__auto__;
if(cljs.core.truth_((pred__24029.cljs$core$IFn$_invoke$arity$2 ? pred__24029.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__24030) : pred__24029.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__24030)))){
return (new shadow.dom.Size(G__24005,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24029.cljs$core$IFn$_invoke$arity$2 ? pred__24029.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__24030) : pred__24029.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__24030)))){
return (new shadow.dom.Size(self__.w,G__24005,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__24005),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__24005){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__24005,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__24009){
var extmap__5385__auto__ = (function (){var G__24036 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24009,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__24009)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24036);
} else {
return G__24036;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__24009),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__24009),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__24512 = (i + (1));
var G__24513 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__24512;
ret = G__24513;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24070){
var vec__24071 = p__24070;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24071,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__24082 = arguments.length;
switch (G__24082) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__24518 = ps;
var G__24519 = (i + (1));
el__$1 = G__24518;
i = G__24519;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__24102 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__24106_24523 = cljs.core.seq(props);
var chunk__24107_24524 = null;
var count__24108_24525 = (0);
var i__24109_24526 = (0);
while(true){
if((i__24109_24526 < count__24108_24525)){
var vec__24116_24527 = chunk__24107_24524.cljs$core$IIndexed$_nth$arity$2(null,i__24109_24526);
var k_24528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24116_24527,(0),null);
var v_24529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24116_24527,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_24528);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24528),v_24529);


var G__24530 = seq__24106_24523;
var G__24531 = chunk__24107_24524;
var G__24532 = count__24108_24525;
var G__24533 = (i__24109_24526 + (1));
seq__24106_24523 = G__24530;
chunk__24107_24524 = G__24531;
count__24108_24525 = G__24532;
i__24109_24526 = G__24533;
continue;
} else {
var temp__5804__auto___24534 = cljs.core.seq(seq__24106_24523);
if(temp__5804__auto___24534){
var seq__24106_24535__$1 = temp__5804__auto___24534;
if(cljs.core.chunked_seq_QMARK_(seq__24106_24535__$1)){
var c__5568__auto___24536 = cljs.core.chunk_first(seq__24106_24535__$1);
var G__24537 = cljs.core.chunk_rest(seq__24106_24535__$1);
var G__24538 = c__5568__auto___24536;
var G__24539 = cljs.core.count(c__5568__auto___24536);
var G__24540 = (0);
seq__24106_24523 = G__24537;
chunk__24107_24524 = G__24538;
count__24108_24525 = G__24539;
i__24109_24526 = G__24540;
continue;
} else {
var vec__24123_24543 = cljs.core.first(seq__24106_24535__$1);
var k_24544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123_24543,(0),null);
var v_24545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123_24543,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_24544);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24544),v_24545);


var G__24548 = cljs.core.next(seq__24106_24535__$1);
var G__24549 = null;
var G__24550 = (0);
var G__24551 = (0);
seq__24106_24523 = G__24548;
chunk__24107_24524 = G__24549;
count__24108_24525 = G__24550;
i__24109_24526 = G__24551;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__24137 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(1),null);
var seq__24140_24556 = cljs.core.seq(node_children);
var chunk__24142_24557 = null;
var count__24143_24558 = (0);
var i__24144_24559 = (0);
while(true){
if((i__24144_24559 < count__24143_24558)){
var child_struct_24560 = chunk__24142_24557.cljs$core$IIndexed$_nth$arity$2(null,i__24144_24559);
if((!((child_struct_24560 == null)))){
if(typeof child_struct_24560 === 'string'){
var text_24561 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24561),child_struct_24560].join(''));
} else {
var children_24562 = shadow.dom.svg_node(child_struct_24560);
if(cljs.core.seq_QMARK_(children_24562)){
var seq__24186_24563 = cljs.core.seq(children_24562);
var chunk__24188_24564 = null;
var count__24189_24565 = (0);
var i__24190_24566 = (0);
while(true){
if((i__24190_24566 < count__24189_24565)){
var child_24567 = chunk__24188_24564.cljs$core$IIndexed$_nth$arity$2(null,i__24190_24566);
if(cljs.core.truth_(child_24567)){
node.appendChild(child_24567);


var G__24568 = seq__24186_24563;
var G__24569 = chunk__24188_24564;
var G__24570 = count__24189_24565;
var G__24571 = (i__24190_24566 + (1));
seq__24186_24563 = G__24568;
chunk__24188_24564 = G__24569;
count__24189_24565 = G__24570;
i__24190_24566 = G__24571;
continue;
} else {
var G__24572 = seq__24186_24563;
var G__24573 = chunk__24188_24564;
var G__24574 = count__24189_24565;
var G__24575 = (i__24190_24566 + (1));
seq__24186_24563 = G__24572;
chunk__24188_24564 = G__24573;
count__24189_24565 = G__24574;
i__24190_24566 = G__24575;
continue;
}
} else {
var temp__5804__auto___24576 = cljs.core.seq(seq__24186_24563);
if(temp__5804__auto___24576){
var seq__24186_24577__$1 = temp__5804__auto___24576;
if(cljs.core.chunked_seq_QMARK_(seq__24186_24577__$1)){
var c__5568__auto___24578 = cljs.core.chunk_first(seq__24186_24577__$1);
var G__24579 = cljs.core.chunk_rest(seq__24186_24577__$1);
var G__24580 = c__5568__auto___24578;
var G__24581 = cljs.core.count(c__5568__auto___24578);
var G__24582 = (0);
seq__24186_24563 = G__24579;
chunk__24188_24564 = G__24580;
count__24189_24565 = G__24581;
i__24190_24566 = G__24582;
continue;
} else {
var child_24583 = cljs.core.first(seq__24186_24577__$1);
if(cljs.core.truth_(child_24583)){
node.appendChild(child_24583);


var G__24584 = cljs.core.next(seq__24186_24577__$1);
var G__24585 = null;
var G__24586 = (0);
var G__24587 = (0);
seq__24186_24563 = G__24584;
chunk__24188_24564 = G__24585;
count__24189_24565 = G__24586;
i__24190_24566 = G__24587;
continue;
} else {
var G__24588 = cljs.core.next(seq__24186_24577__$1);
var G__24589 = null;
var G__24590 = (0);
var G__24591 = (0);
seq__24186_24563 = G__24588;
chunk__24188_24564 = G__24589;
count__24189_24565 = G__24590;
i__24190_24566 = G__24591;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24562);
}
}


var G__24592 = seq__24140_24556;
var G__24593 = chunk__24142_24557;
var G__24594 = count__24143_24558;
var G__24595 = (i__24144_24559 + (1));
seq__24140_24556 = G__24592;
chunk__24142_24557 = G__24593;
count__24143_24558 = G__24594;
i__24144_24559 = G__24595;
continue;
} else {
var G__24596 = seq__24140_24556;
var G__24597 = chunk__24142_24557;
var G__24598 = count__24143_24558;
var G__24599 = (i__24144_24559 + (1));
seq__24140_24556 = G__24596;
chunk__24142_24557 = G__24597;
count__24143_24558 = G__24598;
i__24144_24559 = G__24599;
continue;
}
} else {
var temp__5804__auto___24600 = cljs.core.seq(seq__24140_24556);
if(temp__5804__auto___24600){
var seq__24140_24601__$1 = temp__5804__auto___24600;
if(cljs.core.chunked_seq_QMARK_(seq__24140_24601__$1)){
var c__5568__auto___24602 = cljs.core.chunk_first(seq__24140_24601__$1);
var G__24603 = cljs.core.chunk_rest(seq__24140_24601__$1);
var G__24604 = c__5568__auto___24602;
var G__24605 = cljs.core.count(c__5568__auto___24602);
var G__24606 = (0);
seq__24140_24556 = G__24603;
chunk__24142_24557 = G__24604;
count__24143_24558 = G__24605;
i__24144_24559 = G__24606;
continue;
} else {
var child_struct_24607 = cljs.core.first(seq__24140_24601__$1);
if((!((child_struct_24607 == null)))){
if(typeof child_struct_24607 === 'string'){
var text_24608 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24608),child_struct_24607].join(''));
} else {
var children_24609 = shadow.dom.svg_node(child_struct_24607);
if(cljs.core.seq_QMARK_(children_24609)){
var seq__24199_24610 = cljs.core.seq(children_24609);
var chunk__24201_24611 = null;
var count__24202_24612 = (0);
var i__24203_24613 = (0);
while(true){
if((i__24203_24613 < count__24202_24612)){
var child_24614 = chunk__24201_24611.cljs$core$IIndexed$_nth$arity$2(null,i__24203_24613);
if(cljs.core.truth_(child_24614)){
node.appendChild(child_24614);


var G__24615 = seq__24199_24610;
var G__24616 = chunk__24201_24611;
var G__24617 = count__24202_24612;
var G__24618 = (i__24203_24613 + (1));
seq__24199_24610 = G__24615;
chunk__24201_24611 = G__24616;
count__24202_24612 = G__24617;
i__24203_24613 = G__24618;
continue;
} else {
var G__24619 = seq__24199_24610;
var G__24620 = chunk__24201_24611;
var G__24621 = count__24202_24612;
var G__24622 = (i__24203_24613 + (1));
seq__24199_24610 = G__24619;
chunk__24201_24611 = G__24620;
count__24202_24612 = G__24621;
i__24203_24613 = G__24622;
continue;
}
} else {
var temp__5804__auto___24623__$1 = cljs.core.seq(seq__24199_24610);
if(temp__5804__auto___24623__$1){
var seq__24199_24624__$1 = temp__5804__auto___24623__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24199_24624__$1)){
var c__5568__auto___24625 = cljs.core.chunk_first(seq__24199_24624__$1);
var G__24626 = cljs.core.chunk_rest(seq__24199_24624__$1);
var G__24627 = c__5568__auto___24625;
var G__24628 = cljs.core.count(c__5568__auto___24625);
var G__24629 = (0);
seq__24199_24610 = G__24626;
chunk__24201_24611 = G__24627;
count__24202_24612 = G__24628;
i__24203_24613 = G__24629;
continue;
} else {
var child_24630 = cljs.core.first(seq__24199_24624__$1);
if(cljs.core.truth_(child_24630)){
node.appendChild(child_24630);


var G__24631 = cljs.core.next(seq__24199_24624__$1);
var G__24632 = null;
var G__24633 = (0);
var G__24634 = (0);
seq__24199_24610 = G__24631;
chunk__24201_24611 = G__24632;
count__24202_24612 = G__24633;
i__24203_24613 = G__24634;
continue;
} else {
var G__24635 = cljs.core.next(seq__24199_24624__$1);
var G__24636 = null;
var G__24637 = (0);
var G__24638 = (0);
seq__24199_24610 = G__24635;
chunk__24201_24611 = G__24636;
count__24202_24612 = G__24637;
i__24203_24613 = G__24638;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24609);
}
}


var G__24639 = cljs.core.next(seq__24140_24601__$1);
var G__24640 = null;
var G__24641 = (0);
var G__24642 = (0);
seq__24140_24556 = G__24639;
chunk__24142_24557 = G__24640;
count__24143_24558 = G__24641;
i__24144_24559 = G__24642;
continue;
} else {
var G__24644 = cljs.core.next(seq__24140_24601__$1);
var G__24645 = null;
var G__24646 = (0);
var G__24647 = (0);
seq__24140_24556 = G__24644;
chunk__24142_24557 = G__24645;
count__24143_24558 = G__24646;
i__24144_24559 = G__24647;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24651 = arguments.length;
var i__5770__auto___24652 = (0);
while(true){
if((i__5770__auto___24652 < len__5769__auto___24651)){
args__5775__auto__.push((arguments[i__5770__auto___24652]));

var G__24653 = (i__5770__auto___24652 + (1));
i__5770__auto___24652 = G__24653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24219){
var G__24220 = cljs.core.first(seq24219);
var seq24219__$1 = cljs.core.next(seq24219);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24220,seq24219__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24225 = arguments.length;
switch (G__24225) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15221__auto___24661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_24230){
var state_val_24231 = (state_24230[(1)]);
if((state_val_24231 === (1))){
var state_24230__$1 = state_24230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24230__$1,(2),once_or_cleanup);
} else {
if((state_val_24231 === (2))){
var inst_24227 = (state_24230[(2)]);
var inst_24228 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24230__$1 = (function (){var statearr_24232 = state_24230;
(statearr_24232[(7)] = inst_24227);

return statearr_24232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24230__$1,inst_24228);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15028__auto__ = null;
var shadow$dom$state_machine__15028__auto____0 = (function (){
var statearr_24233 = [null,null,null,null,null,null,null,null];
(statearr_24233[(0)] = shadow$dom$state_machine__15028__auto__);

(statearr_24233[(1)] = (1));

return statearr_24233;
});
var shadow$dom$state_machine__15028__auto____1 = (function (state_24230){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_24230);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e24234){var ex__15031__auto__ = e24234;
var statearr_24235_24666 = state_24230;
(statearr_24235_24666[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_24230[(4)]))){
var statearr_24236_24668 = state_24230;
(statearr_24236_24668[(1)] = cljs.core.first((state_24230[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24672 = state_24230;
state_24230 = G__24672;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
shadow$dom$state_machine__15028__auto__ = function(state_24230){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15028__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15028__auto____1.call(this,state_24230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15028__auto____0;
shadow$dom$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15028__auto____1;
return shadow$dom$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_24238 = f__15222__auto__();
(statearr_24238[(6)] = c__15221__auto___24661);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
