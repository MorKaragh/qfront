goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21123 = (function (f,blockable,meta21124){
this.f = f;
this.blockable = blockable;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cljs.core.async.t_cljs$core$async21123(self__.f,self__.blockable,meta21124__$1));
}));

(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
}));

(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
}));

(cljs.core.async.t_cljs$core$async21123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21123");

(cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21123.
 */
cljs.core.async.__GT_t_cljs$core$async21123 = (function cljs$core$async$__GT_t_cljs$core$async21123(f,blockable,meta21124){
return (new cljs.core.async.t_cljs$core$async21123(f,blockable,meta21124));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21117 = arguments.length;
switch (G__21117) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async21123(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21146 = arguments.length;
switch (G__21146) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21148 = arguments.length;
switch (G__21148) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21150 = arguments.length;
switch (G__21150) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23168 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23168) : fn1.call(null,val_23168));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23168) : fn1.call(null,val_23168));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21156 = arguments.length;
switch (G__21156) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___23170 = n;
var x_23171 = (0);
while(true){
if((x_23171 < n__5636__auto___23170)){
(a[x_23171] = x_23171);

var G__23172 = (x_23171 + (1));
x_23171 = G__23172;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21157 = (function (flag,meta21158){
this.flag = flag;
this.meta21158 = meta21158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21159,meta21158__$1){
var self__ = this;
var _21159__$1 = this;
return (new cljs.core.async.t_cljs$core$async21157(self__.flag,meta21158__$1));
}));

(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21159){
var self__ = this;
var _21159__$1 = this;
return self__.meta21158;
}));

(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21158","meta21158",-794930343,null)], null);
}));

(cljs.core.async.t_cljs$core$async21157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21157");

(cljs.core.async.t_cljs$core$async21157.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21157.
 */
cljs.core.async.__GT_t_cljs$core$async21157 = (function cljs$core$async$__GT_t_cljs$core$async21157(flag,meta21158){
return (new cljs.core.async.t_cljs$core$async21157(flag,meta21158));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async21157(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21162 = (function (flag,cb,meta21163){
this.flag = flag;
this.cb = cb;
this.meta21163 = meta21163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21164,meta21163__$1){
var self__ = this;
var _21164__$1 = this;
return (new cljs.core.async.t_cljs$core$async21162(self__.flag,self__.cb,meta21163__$1));
}));

(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21164){
var self__ = this;
var _21164__$1 = this;
return self__.meta21163;
}));

(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21163","meta21163",1227929595,null)], null);
}));

(cljs.core.async.t_cljs$core$async21162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21162");

(cljs.core.async.t_cljs$core$async21162.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21162.
 */
cljs.core.async.__GT_t_cljs$core$async21162 = (function cljs$core$async$__GT_t_cljs$core$async21162(flag,cb,meta21163){
return (new cljs.core.async.t_cljs$core$async21162(flag,cb,meta21163));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async21162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21165_SHARP_){
var G__21167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21165_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21167) : fret.call(null,G__21167));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21166_SHARP_){
var G__21168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21166_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21168) : fret.call(null,G__21168));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23175 = (i + (1));
i = G__23175;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23176 = arguments.length;
var i__5770__auto___23177 = (0);
while(true){
if((i__5770__auto___23177 < len__5769__auto___23176)){
args__5775__auto__.push((arguments[i__5770__auto___23177]));

var G__23178 = (i__5770__auto___23177 + (1));
i__5770__auto___23177 = G__23178;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21175){
var map__21176 = p__21175;
var map__21176__$1 = cljs.core.__destructure_map(map__21176);
var opts = map__21176__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21169){
var G__21170 = cljs.core.first(seq21169);
var seq21169__$1 = cljs.core.next(seq21169);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21170,seq21169__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21180 = arguments.length;
switch (G__21180) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15221__auto___23180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21214){
var state_val_21215 = (state_21214[(1)]);
if((state_val_21215 === (7))){
var inst_21210 = (state_21214[(2)]);
var state_21214__$1 = state_21214;
var statearr_21220_23181 = state_21214__$1;
(statearr_21220_23181[(2)] = inst_21210);

(statearr_21220_23181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (1))){
var state_21214__$1 = state_21214;
var statearr_21221_23182 = state_21214__$1;
(statearr_21221_23182[(2)] = null);

(statearr_21221_23182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (4))){
var inst_21192 = (state_21214[(7)]);
var inst_21192__$1 = (state_21214[(2)]);
var inst_21194 = (inst_21192__$1 == null);
var state_21214__$1 = (function (){var statearr_21222 = state_21214;
(statearr_21222[(7)] = inst_21192__$1);

return statearr_21222;
})();
if(cljs.core.truth_(inst_21194)){
var statearr_21223_23183 = state_21214__$1;
(statearr_21223_23183[(1)] = (5));

} else {
var statearr_21224_23184 = state_21214__$1;
(statearr_21224_23184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (13))){
var state_21214__$1 = state_21214;
var statearr_21225_23185 = state_21214__$1;
(statearr_21225_23185[(2)] = null);

(statearr_21225_23185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (6))){
var inst_21192 = (state_21214[(7)]);
var state_21214__$1 = state_21214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21214__$1,(11),to,inst_21192);
} else {
if((state_val_21215 === (3))){
var inst_21212 = (state_21214[(2)]);
var state_21214__$1 = state_21214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21214__$1,inst_21212);
} else {
if((state_val_21215 === (12))){
var state_21214__$1 = state_21214;
var statearr_21226_23186 = state_21214__$1;
(statearr_21226_23186[(2)] = null);

(statearr_21226_23186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (2))){
var state_21214__$1 = state_21214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21214__$1,(4),from);
} else {
if((state_val_21215 === (11))){
var inst_21203 = (state_21214[(2)]);
var state_21214__$1 = state_21214;
if(cljs.core.truth_(inst_21203)){
var statearr_21227_23188 = state_21214__$1;
(statearr_21227_23188[(1)] = (12));

} else {
var statearr_21228_23189 = state_21214__$1;
(statearr_21228_23189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (9))){
var state_21214__$1 = state_21214;
var statearr_21229_23190 = state_21214__$1;
(statearr_21229_23190[(2)] = null);

(statearr_21229_23190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (5))){
var state_21214__$1 = state_21214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21230_23192 = state_21214__$1;
(statearr_21230_23192[(1)] = (8));

} else {
var statearr_21231_23193 = state_21214__$1;
(statearr_21231_23193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (14))){
var inst_21208 = (state_21214[(2)]);
var state_21214__$1 = state_21214;
var statearr_21232_23194 = state_21214__$1;
(statearr_21232_23194[(2)] = inst_21208);

(statearr_21232_23194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (10))){
var inst_21200 = (state_21214[(2)]);
var state_21214__$1 = state_21214;
var statearr_21233_23195 = state_21214__$1;
(statearr_21233_23195[(2)] = inst_21200);

(statearr_21233_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21215 === (8))){
var inst_21197 = cljs.core.async.close_BANG_(to);
var state_21214__$1 = state_21214;
var statearr_21234_23196 = state_21214__$1;
(statearr_21234_23196[(2)] = inst_21197);

(statearr_21234_23196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_21235 = [null,null,null,null,null,null,null,null];
(statearr_21235[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_21235[(1)] = (1));

return statearr_21235;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_21214){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21214);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21236){var ex__15031__auto__ = e21236;
var statearr_21237_23197 = state_21214;
(statearr_21237_23197[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21214[(4)]))){
var statearr_21238_23198 = state_21214;
(statearr_21238_23198[(1)] = cljs.core.first((state_21214[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23199 = state_21214;
state_21214 = G__23199;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_21214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_21214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21241 = f__15222__auto__();
(statearr_21241[(6)] = c__15221__auto___23180);

return statearr_21241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__21242){
var vec__21243 = p__21242;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(1),null);
var job = vec__21243;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15221__auto___23200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21252){
var state_val_21253 = (state_21252[(1)]);
if((state_val_21253 === (1))){
var state_21252__$1 = state_21252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21252__$1,(2),res,v);
} else {
if((state_val_21253 === (2))){
var inst_21249 = (state_21252[(2)]);
var inst_21250 = cljs.core.async.close_BANG_(res);
var state_21252__$1 = (function (){var statearr_21261 = state_21252;
(statearr_21261[(7)] = inst_21249);

return statearr_21261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21252__$1,inst_21250);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_21265 = [null,null,null,null,null,null,null,null];
(statearr_21265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__);

(statearr_21265[(1)] = (1));

return statearr_21265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1 = (function (state_21252){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21252);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21266){var ex__15031__auto__ = e21266;
var statearr_21267_23201 = state_21252;
(statearr_21267_23201[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21252[(4)]))){
var statearr_21268_23202 = state_21252;
(statearr_21268_23202[(1)] = cljs.core.first((state_21252[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23203 = state_21252;
state_21252 = G__23203;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = function(state_21252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1.call(this,state_21252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21272 = f__15222__auto__();
(statearr_21272[(6)] = c__15221__auto___23200);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21277){
var vec__21278 = p__21277;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21278,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21278,(1),null);
var job = vec__21278;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___23206 = n;
var __23207 = (0);
while(true){
if((__23207 < n__5636__auto___23206)){
var G__21282_23208 = type;
var G__21282_23209__$1 = (((G__21282_23208 instanceof cljs.core.Keyword))?G__21282_23208.fqn:null);
switch (G__21282_23209__$1) {
case "compute":
var c__15221__auto___23211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23207,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = ((function (__23207,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function (state_21295){
var state_val_21296 = (state_21295[(1)]);
if((state_val_21296 === (1))){
var state_21295__$1 = state_21295;
var statearr_21297_23212 = state_21295__$1;
(statearr_21297_23212[(2)] = null);

(statearr_21297_23212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (2))){
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21295__$1,(4),jobs);
} else {
if((state_val_21296 === (3))){
var inst_21293 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21295__$1,inst_21293);
} else {
if((state_val_21296 === (4))){
var inst_21285 = (state_21295[(2)]);
var inst_21286 = process__$1(inst_21285);
var state_21295__$1 = state_21295;
if(cljs.core.truth_(inst_21286)){
var statearr_21300_23213 = state_21295__$1;
(statearr_21300_23213[(1)] = (5));

} else {
var statearr_21301_23214 = state_21295__$1;
(statearr_21301_23214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (5))){
var state_21295__$1 = state_21295;
var statearr_21302_23215 = state_21295__$1;
(statearr_21302_23215[(2)] = null);

(statearr_21302_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (6))){
var state_21295__$1 = state_21295;
var statearr_21303_23216 = state_21295__$1;
(statearr_21303_23216[(2)] = null);

(statearr_21303_23216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (7))){
var inst_21291 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
var statearr_21304_23217 = state_21295__$1;
(statearr_21304_23217[(2)] = inst_21291);

(statearr_21304_23217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23207,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
;
return ((function (__23207,switch__15027__auto__,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_21305 = [null,null,null,null,null,null,null];
(statearr_21305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__);

(statearr_21305[(1)] = (1));

return statearr_21305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1 = (function (state_21295){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21295);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21309){var ex__15031__auto__ = e21309;
var statearr_21310_23218 = state_21295;
(statearr_21310_23218[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21295[(4)]))){
var statearr_21311_23219 = state_21295;
(statearr_21311_23219[(1)] = cljs.core.first((state_21295[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23220 = state_21295;
state_21295 = G__23220;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = function(state_21295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1.call(this,state_21295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__;
})()
;})(__23207,switch__15027__auto__,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
})();
var state__15223__auto__ = (function (){var statearr_21312 = f__15222__auto__();
(statearr_21312[(6)] = c__15221__auto___23211);

return statearr_21312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
});})(__23207,c__15221__auto___23211,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
);


break;
case "async":
var c__15221__auto___23221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23207,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = ((function (__23207,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function (state_21325){
var state_val_21326 = (state_21325[(1)]);
if((state_val_21326 === (1))){
var state_21325__$1 = state_21325;
var statearr_21327_23222 = state_21325__$1;
(statearr_21327_23222[(2)] = null);

(statearr_21327_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (2))){
var state_21325__$1 = state_21325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21325__$1,(4),jobs);
} else {
if((state_val_21326 === (3))){
var inst_21323 = (state_21325[(2)]);
var state_21325__$1 = state_21325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21325__$1,inst_21323);
} else {
if((state_val_21326 === (4))){
var inst_21315 = (state_21325[(2)]);
var inst_21316 = async(inst_21315);
var state_21325__$1 = state_21325;
if(cljs.core.truth_(inst_21316)){
var statearr_21328_23224 = state_21325__$1;
(statearr_21328_23224[(1)] = (5));

} else {
var statearr_21329_23226 = state_21325__$1;
(statearr_21329_23226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (5))){
var state_21325__$1 = state_21325;
var statearr_21330_23227 = state_21325__$1;
(statearr_21330_23227[(2)] = null);

(statearr_21330_23227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (6))){
var state_21325__$1 = state_21325;
var statearr_21331_23228 = state_21325__$1;
(statearr_21331_23228[(2)] = null);

(statearr_21331_23228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (7))){
var inst_21321 = (state_21325[(2)]);
var state_21325__$1 = state_21325;
var statearr_21332_23229 = state_21325__$1;
(statearr_21332_23229[(2)] = inst_21321);

(statearr_21332_23229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23207,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
;
return ((function (__23207,switch__15027__auto__,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_21333 = [null,null,null,null,null,null,null];
(statearr_21333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__);

(statearr_21333[(1)] = (1));

return statearr_21333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1 = (function (state_21325){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21325);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21334){var ex__15031__auto__ = e21334;
var statearr_21335_23230 = state_21325;
(statearr_21335_23230[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21325[(4)]))){
var statearr_21337_23231 = state_21325;
(statearr_21337_23231[(1)] = cljs.core.first((state_21325[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23232 = state_21325;
state_21325 = G__23232;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = function(state_21325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1.call(this,state_21325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__;
})()
;})(__23207,switch__15027__auto__,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
})();
var state__15223__auto__ = (function (){var statearr_21338 = f__15222__auto__();
(statearr_21338[(6)] = c__15221__auto___23221);

return statearr_21338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
});})(__23207,c__15221__auto___23221,G__21282_23208,G__21282_23209__$1,n__5636__auto___23206,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21282_23209__$1)].join('')));

}

var G__23233 = (__23207 + (1));
__23207 = G__23233;
continue;
} else {
}
break;
}

var c__15221__auto___23234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21360){
var state_val_21361 = (state_21360[(1)]);
if((state_val_21361 === (7))){
var inst_21356 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
var statearr_21363_23235 = state_21360__$1;
(statearr_21363_23235[(2)] = inst_21356);

(statearr_21363_23235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (1))){
var state_21360__$1 = state_21360;
var statearr_21364_23236 = state_21360__$1;
(statearr_21364_23236[(2)] = null);

(statearr_21364_23236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (4))){
var inst_21341 = (state_21360[(7)]);
var inst_21341__$1 = (state_21360[(2)]);
var inst_21342 = (inst_21341__$1 == null);
var state_21360__$1 = (function (){var statearr_21365 = state_21360;
(statearr_21365[(7)] = inst_21341__$1);

return statearr_21365;
})();
if(cljs.core.truth_(inst_21342)){
var statearr_21366_23238 = state_21360__$1;
(statearr_21366_23238[(1)] = (5));

} else {
var statearr_21367_23239 = state_21360__$1;
(statearr_21367_23239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (6))){
var inst_21346 = (state_21360[(8)]);
var inst_21341 = (state_21360[(7)]);
var inst_21346__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21348 = [inst_21341,inst_21346__$1];
var inst_21349 = (new cljs.core.PersistentVector(null,2,(5),inst_21347,inst_21348,null));
var state_21360__$1 = (function (){var statearr_21368 = state_21360;
(statearr_21368[(8)] = inst_21346__$1);

return statearr_21368;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21360__$1,(8),jobs,inst_21349);
} else {
if((state_val_21361 === (3))){
var inst_21358 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21360__$1,inst_21358);
} else {
if((state_val_21361 === (2))){
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21360__$1,(4),from);
} else {
if((state_val_21361 === (9))){
var inst_21353 = (state_21360[(2)]);
var state_21360__$1 = (function (){var statearr_21369 = state_21360;
(statearr_21369[(9)] = inst_21353);

return statearr_21369;
})();
var statearr_21370_23240 = state_21360__$1;
(statearr_21370_23240[(2)] = null);

(statearr_21370_23240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (5))){
var inst_21344 = cljs.core.async.close_BANG_(jobs);
var state_21360__$1 = state_21360;
var statearr_21371_23241 = state_21360__$1;
(statearr_21371_23241[(2)] = inst_21344);

(statearr_21371_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (8))){
var inst_21346 = (state_21360[(8)]);
var inst_21351 = (state_21360[(2)]);
var state_21360__$1 = (function (){var statearr_21372 = state_21360;
(statearr_21372[(10)] = inst_21351);

return statearr_21372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21360__$1,(9),results,inst_21346);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_21373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__);

(statearr_21373[(1)] = (1));

return statearr_21373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1 = (function (state_21360){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21360);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21379){var ex__15031__auto__ = e21379;
var statearr_21381_23242 = state_21360;
(statearr_21381_23242[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21360[(4)]))){
var statearr_21388_23243 = state_21360;
(statearr_21388_23243[(1)] = cljs.core.first((state_21360[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23244 = state_21360;
state_21360 = G__23244;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = function(state_21360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1.call(this,state_21360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21400 = f__15222__auto__();
(statearr_21400[(6)] = c__15221__auto___23234);

return statearr_21400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


var c__15221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21438){
var state_val_21440 = (state_21438[(1)]);
if((state_val_21440 === (7))){
var inst_21434 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
var statearr_21441_23245 = state_21438__$1;
(statearr_21441_23245[(2)] = inst_21434);

(statearr_21441_23245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (20))){
var state_21438__$1 = state_21438;
var statearr_21444_23246 = state_21438__$1;
(statearr_21444_23246[(2)] = null);

(statearr_21444_23246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (1))){
var state_21438__$1 = state_21438;
var statearr_21445_23247 = state_21438__$1;
(statearr_21445_23247[(2)] = null);

(statearr_21445_23247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (4))){
var inst_21403 = (state_21438[(7)]);
var inst_21403__$1 = (state_21438[(2)]);
var inst_21404 = (inst_21403__$1 == null);
var state_21438__$1 = (function (){var statearr_21446 = state_21438;
(statearr_21446[(7)] = inst_21403__$1);

return statearr_21446;
})();
if(cljs.core.truth_(inst_21404)){
var statearr_21447_23250 = state_21438__$1;
(statearr_21447_23250[(1)] = (5));

} else {
var statearr_21448_23251 = state_21438__$1;
(statearr_21448_23251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (15))){
var inst_21416 = (state_21438[(8)]);
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21438__$1,(18),to,inst_21416);
} else {
if((state_val_21440 === (21))){
var inst_21429 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
var statearr_21449_23254 = state_21438__$1;
(statearr_21449_23254[(2)] = inst_21429);

(statearr_21449_23254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (13))){
var inst_21431 = (state_21438[(2)]);
var state_21438__$1 = (function (){var statearr_21453 = state_21438;
(statearr_21453[(9)] = inst_21431);

return statearr_21453;
})();
var statearr_21455_23255 = state_21438__$1;
(statearr_21455_23255[(2)] = null);

(statearr_21455_23255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (6))){
var inst_21403 = (state_21438[(7)]);
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21438__$1,(11),inst_21403);
} else {
if((state_val_21440 === (17))){
var inst_21424 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
if(cljs.core.truth_(inst_21424)){
var statearr_21473_23256 = state_21438__$1;
(statearr_21473_23256[(1)] = (19));

} else {
var statearr_21474_23257 = state_21438__$1;
(statearr_21474_23257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (3))){
var inst_21436 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21438__$1,inst_21436);
} else {
if((state_val_21440 === (12))){
var inst_21413 = (state_21438[(10)]);
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21438__$1,(14),inst_21413);
} else {
if((state_val_21440 === (2))){
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21438__$1,(4),results);
} else {
if((state_val_21440 === (19))){
var state_21438__$1 = state_21438;
var statearr_21475_23258 = state_21438__$1;
(statearr_21475_23258[(2)] = null);

(statearr_21475_23258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (11))){
var inst_21413 = (state_21438[(2)]);
var state_21438__$1 = (function (){var statearr_21481 = state_21438;
(statearr_21481[(10)] = inst_21413);

return statearr_21481;
})();
var statearr_21489_23259 = state_21438__$1;
(statearr_21489_23259[(2)] = null);

(statearr_21489_23259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (9))){
var state_21438__$1 = state_21438;
var statearr_21499_23260 = state_21438__$1;
(statearr_21499_23260[(2)] = null);

(statearr_21499_23260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (5))){
var state_21438__$1 = state_21438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21500_23261 = state_21438__$1;
(statearr_21500_23261[(1)] = (8));

} else {
var statearr_21501_23262 = state_21438__$1;
(statearr_21501_23262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (14))){
var inst_21418 = (state_21438[(11)]);
var inst_21416 = (state_21438[(8)]);
var inst_21416__$1 = (state_21438[(2)]);
var inst_21417 = (inst_21416__$1 == null);
var inst_21418__$1 = cljs.core.not(inst_21417);
var state_21438__$1 = (function (){var statearr_21513 = state_21438;
(statearr_21513[(11)] = inst_21418__$1);

(statearr_21513[(8)] = inst_21416__$1);

return statearr_21513;
})();
if(inst_21418__$1){
var statearr_21519_23264 = state_21438__$1;
(statearr_21519_23264[(1)] = (15));

} else {
var statearr_21525_23268 = state_21438__$1;
(statearr_21525_23268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (16))){
var inst_21418 = (state_21438[(11)]);
var state_21438__$1 = state_21438;
var statearr_21526_23269 = state_21438__$1;
(statearr_21526_23269[(2)] = inst_21418);

(statearr_21526_23269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (10))){
var inst_21410 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
var statearr_21527_23270 = state_21438__$1;
(statearr_21527_23270[(2)] = inst_21410);

(statearr_21527_23270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (18))){
var inst_21421 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
var statearr_21528_23271 = state_21438__$1;
(statearr_21528_23271[(2)] = inst_21421);

(statearr_21528_23271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (8))){
var inst_21407 = cljs.core.async.close_BANG_(to);
var state_21438__$1 = state_21438;
var statearr_21529_23272 = state_21438__$1;
(statearr_21529_23272[(2)] = inst_21407);

(statearr_21529_23272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_21530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__);

(statearr_21530[(1)] = (1));

return statearr_21530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1 = (function (state_21438){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21438);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21533){var ex__15031__auto__ = e21533;
var statearr_21534_23273 = state_21438;
(statearr_21534_23273[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21438[(4)]))){
var statearr_21535_23274 = state_21438;
(statearr_21535_23274[(1)] = cljs.core.first((state_21438[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23275 = state_21438;
state_21438 = G__23275;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__ = function(state_21438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1.call(this,state_21438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21536 = f__15222__auto__();
(statearr_21536[(6)] = c__15221__auto__);

return statearr_21536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

return c__15221__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21538 = arguments.length;
switch (G__21538) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21540 = arguments.length;
switch (G__21540) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21550 = arguments.length;
switch (G__21550) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15221__auto___23286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21581){
var state_val_21582 = (state_21581[(1)]);
if((state_val_21582 === (7))){
var inst_21576 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
var statearr_21583_23287 = state_21581__$1;
(statearr_21583_23287[(2)] = inst_21576);

(statearr_21583_23287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (1))){
var state_21581__$1 = state_21581;
var statearr_21584_23288 = state_21581__$1;
(statearr_21584_23288[(2)] = null);

(statearr_21584_23288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (4))){
var inst_21557 = (state_21581[(7)]);
var inst_21557__$1 = (state_21581[(2)]);
var inst_21558 = (inst_21557__$1 == null);
var state_21581__$1 = (function (){var statearr_21585 = state_21581;
(statearr_21585[(7)] = inst_21557__$1);

return statearr_21585;
})();
if(cljs.core.truth_(inst_21558)){
var statearr_21586_23289 = state_21581__$1;
(statearr_21586_23289[(1)] = (5));

} else {
var statearr_21587_23290 = state_21581__$1;
(statearr_21587_23290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (13))){
var state_21581__$1 = state_21581;
var statearr_21588_23291 = state_21581__$1;
(statearr_21588_23291[(2)] = null);

(statearr_21588_23291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (6))){
var inst_21557 = (state_21581[(7)]);
var inst_21563 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21557) : p.call(null,inst_21557));
var state_21581__$1 = state_21581;
if(cljs.core.truth_(inst_21563)){
var statearr_21589_23292 = state_21581__$1;
(statearr_21589_23292[(1)] = (9));

} else {
var statearr_21590_23293 = state_21581__$1;
(statearr_21590_23293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (3))){
var inst_21579 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21581__$1,inst_21579);
} else {
if((state_val_21582 === (12))){
var state_21581__$1 = state_21581;
var statearr_21591_23297 = state_21581__$1;
(statearr_21591_23297[(2)] = null);

(statearr_21591_23297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (2))){
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21581__$1,(4),ch);
} else {
if((state_val_21582 === (11))){
var inst_21557 = (state_21581[(7)]);
var inst_21567 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21581__$1,(8),inst_21567,inst_21557);
} else {
if((state_val_21582 === (9))){
var state_21581__$1 = state_21581;
var statearr_21592_23298 = state_21581__$1;
(statearr_21592_23298[(2)] = tc);

(statearr_21592_23298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (5))){
var inst_21560 = cljs.core.async.close_BANG_(tc);
var inst_21561 = cljs.core.async.close_BANG_(fc);
var state_21581__$1 = (function (){var statearr_21593 = state_21581;
(statearr_21593[(8)] = inst_21560);

return statearr_21593;
})();
var statearr_21594_23300 = state_21581__$1;
(statearr_21594_23300[(2)] = inst_21561);

(statearr_21594_23300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (14))){
var inst_21574 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
var statearr_21595_23301 = state_21581__$1;
(statearr_21595_23301[(2)] = inst_21574);

(statearr_21595_23301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (10))){
var state_21581__$1 = state_21581;
var statearr_21596_23303 = state_21581__$1;
(statearr_21596_23303[(2)] = fc);

(statearr_21596_23303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (8))){
var inst_21569 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
if(cljs.core.truth_(inst_21569)){
var statearr_21597_23304 = state_21581__$1;
(statearr_21597_23304[(1)] = (12));

} else {
var statearr_21598_23305 = state_21581__$1;
(statearr_21598_23305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_21599 = [null,null,null,null,null,null,null,null,null];
(statearr_21599[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_21599[(1)] = (1));

return statearr_21599;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_21581){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21581);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21600){var ex__15031__auto__ = e21600;
var statearr_21601_23306 = state_21581;
(statearr_21601_23306[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21581[(4)]))){
var statearr_21602_23307 = state_21581;
(statearr_21602_23307[(1)] = cljs.core.first((state_21581[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23308 = state_21581;
state_21581 = G__23308;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_21581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_21581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21606 = f__15222__auto__();
(statearr_21606[(6)] = c__15221__auto___23286);

return statearr_21606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21630){
var state_val_21631 = (state_21630[(1)]);
if((state_val_21631 === (7))){
var inst_21626 = (state_21630[(2)]);
var state_21630__$1 = state_21630;
var statearr_21634_23309 = state_21630__$1;
(statearr_21634_23309[(2)] = inst_21626);

(statearr_21634_23309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (1))){
var inst_21608 = init;
var inst_21610 = inst_21608;
var state_21630__$1 = (function (){var statearr_21635 = state_21630;
(statearr_21635[(7)] = inst_21610);

return statearr_21635;
})();
var statearr_21636_23310 = state_21630__$1;
(statearr_21636_23310[(2)] = null);

(statearr_21636_23310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (4))){
var inst_21613 = (state_21630[(8)]);
var inst_21613__$1 = (state_21630[(2)]);
var inst_21614 = (inst_21613__$1 == null);
var state_21630__$1 = (function (){var statearr_21640 = state_21630;
(statearr_21640[(8)] = inst_21613__$1);

return statearr_21640;
})();
if(cljs.core.truth_(inst_21614)){
var statearr_21641_23318 = state_21630__$1;
(statearr_21641_23318[(1)] = (5));

} else {
var statearr_21642_23319 = state_21630__$1;
(statearr_21642_23319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (6))){
var inst_21613 = (state_21630[(8)]);
var inst_21617 = (state_21630[(9)]);
var inst_21610 = (state_21630[(7)]);
var inst_21617__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21610,inst_21613) : f.call(null,inst_21610,inst_21613));
var inst_21618 = cljs.core.reduced_QMARK_(inst_21617__$1);
var state_21630__$1 = (function (){var statearr_21645 = state_21630;
(statearr_21645[(9)] = inst_21617__$1);

return statearr_21645;
})();
if(inst_21618){
var statearr_21654_23326 = state_21630__$1;
(statearr_21654_23326[(1)] = (8));

} else {
var statearr_21655_23327 = state_21630__$1;
(statearr_21655_23327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (3))){
var inst_21628 = (state_21630[(2)]);
var state_21630__$1 = state_21630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21630__$1,inst_21628);
} else {
if((state_val_21631 === (2))){
var state_21630__$1 = state_21630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21630__$1,(4),ch);
} else {
if((state_val_21631 === (9))){
var inst_21617 = (state_21630[(9)]);
var inst_21610 = inst_21617;
var state_21630__$1 = (function (){var statearr_21656 = state_21630;
(statearr_21656[(7)] = inst_21610);

return statearr_21656;
})();
var statearr_21657_23328 = state_21630__$1;
(statearr_21657_23328[(2)] = null);

(statearr_21657_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (5))){
var inst_21610 = (state_21630[(7)]);
var state_21630__$1 = state_21630;
var statearr_21658_23335 = state_21630__$1;
(statearr_21658_23335[(2)] = inst_21610);

(statearr_21658_23335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (10))){
var inst_21624 = (state_21630[(2)]);
var state_21630__$1 = state_21630;
var statearr_21659_23336 = state_21630__$1;
(statearr_21659_23336[(2)] = inst_21624);

(statearr_21659_23336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21631 === (8))){
var inst_21617 = (state_21630[(9)]);
var inst_21620 = cljs.core.deref(inst_21617);
var state_21630__$1 = state_21630;
var statearr_21660_23337 = state_21630__$1;
(statearr_21660_23337[(2)] = inst_21620);

(statearr_21660_23337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15028__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15028__auto____0 = (function (){
var statearr_21661 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21661[(0)] = cljs$core$async$reduce_$_state_machine__15028__auto__);

(statearr_21661[(1)] = (1));

return statearr_21661;
});
var cljs$core$async$reduce_$_state_machine__15028__auto____1 = (function (state_21630){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21630);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21662){var ex__15031__auto__ = e21662;
var statearr_21663_23338 = state_21630;
(statearr_21663_23338[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21630[(4)]))){
var statearr_21664_23339 = state_21630;
(statearr_21664_23339[(1)] = cljs.core.first((state_21630[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23340 = state_21630;
state_21630 = G__23340;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15028__auto__ = function(state_21630){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15028__auto____1.call(this,state_21630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15028__auto____0;
cljs$core$async$reduce_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15028__auto____1;
return cljs$core$async$reduce_$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21665 = f__15222__auto__();
(statearr_21665[(6)] = c__15221__auto__);

return statearr_21665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

return c__15221__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21675){
var state_val_21676 = (state_21675[(1)]);
if((state_val_21676 === (1))){
var inst_21670 = cljs.core.async.reduce(f__$1,init,ch);
var state_21675__$1 = state_21675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21675__$1,(2),inst_21670);
} else {
if((state_val_21676 === (2))){
var inst_21672 = (state_21675[(2)]);
var inst_21673 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21672) : f__$1.call(null,inst_21672));
var state_21675__$1 = state_21675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21675__$1,inst_21673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15028__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15028__auto____0 = (function (){
var statearr_21678 = [null,null,null,null,null,null,null];
(statearr_21678[(0)] = cljs$core$async$transduce_$_state_machine__15028__auto__);

(statearr_21678[(1)] = (1));

return statearr_21678;
});
var cljs$core$async$transduce_$_state_machine__15028__auto____1 = (function (state_21675){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21675);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21680){var ex__15031__auto__ = e21680;
var statearr_21681_23349 = state_21675;
(statearr_21681_23349[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21675[(4)]))){
var statearr_21683_23350 = state_21675;
(statearr_21683_23350[(1)] = cljs.core.first((state_21675[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23355 = state_21675;
state_21675 = G__23355;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15028__auto__ = function(state_21675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15028__auto____1.call(this,state_21675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15028__auto____0;
cljs$core$async$transduce_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15028__auto____1;
return cljs$core$async$transduce_$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21684 = f__15222__auto__();
(statearr_21684[(6)] = c__15221__auto__);

return statearr_21684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

return c__15221__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__21689 = arguments.length;
switch (G__21689) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21718){
var state_val_21719 = (state_21718[(1)]);
if((state_val_21719 === (7))){
var inst_21696 = (state_21718[(2)]);
var state_21718__$1 = state_21718;
var statearr_21720_23357 = state_21718__$1;
(statearr_21720_23357[(2)] = inst_21696);

(statearr_21720_23357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (1))){
var inst_21690 = cljs.core.seq(coll);
var inst_21691 = inst_21690;
var state_21718__$1 = (function (){var statearr_21721 = state_21718;
(statearr_21721[(7)] = inst_21691);

return statearr_21721;
})();
var statearr_21722_23361 = state_21718__$1;
(statearr_21722_23361[(2)] = null);

(statearr_21722_23361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (4))){
var inst_21691 = (state_21718[(7)]);
var inst_21694 = cljs.core.first(inst_21691);
var state_21718__$1 = state_21718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21718__$1,(7),ch,inst_21694);
} else {
if((state_val_21719 === (13))){
var inst_21710 = (state_21718[(2)]);
var state_21718__$1 = state_21718;
var statearr_21723_23362 = state_21718__$1;
(statearr_21723_23362[(2)] = inst_21710);

(statearr_21723_23362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (6))){
var inst_21699 = (state_21718[(2)]);
var state_21718__$1 = state_21718;
if(cljs.core.truth_(inst_21699)){
var statearr_21724_23363 = state_21718__$1;
(statearr_21724_23363[(1)] = (8));

} else {
var statearr_21725_23364 = state_21718__$1;
(statearr_21725_23364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (3))){
var inst_21714 = (state_21718[(2)]);
var state_21718__$1 = state_21718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21718__$1,inst_21714);
} else {
if((state_val_21719 === (12))){
var state_21718__$1 = state_21718;
var statearr_21726_23365 = state_21718__$1;
(statearr_21726_23365[(2)] = null);

(statearr_21726_23365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (2))){
var inst_21691 = (state_21718[(7)]);
var state_21718__$1 = state_21718;
if(cljs.core.truth_(inst_21691)){
var statearr_21727_23366 = state_21718__$1;
(statearr_21727_23366[(1)] = (4));

} else {
var statearr_21728_23367 = state_21718__$1;
(statearr_21728_23367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (11))){
var inst_21707 = cljs.core.async.close_BANG_(ch);
var state_21718__$1 = state_21718;
var statearr_21729_23368 = state_21718__$1;
(statearr_21729_23368[(2)] = inst_21707);

(statearr_21729_23368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (9))){
var state_21718__$1 = state_21718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21730_23369 = state_21718__$1;
(statearr_21730_23369[(1)] = (11));

} else {
var statearr_21731_23370 = state_21718__$1;
(statearr_21731_23370[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (5))){
var inst_21691 = (state_21718[(7)]);
var state_21718__$1 = state_21718;
var statearr_21732_23371 = state_21718__$1;
(statearr_21732_23371[(2)] = inst_21691);

(statearr_21732_23371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (10))){
var inst_21712 = (state_21718[(2)]);
var state_21718__$1 = state_21718;
var statearr_21733_23372 = state_21718__$1;
(statearr_21733_23372[(2)] = inst_21712);

(statearr_21733_23372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21719 === (8))){
var inst_21691 = (state_21718[(7)]);
var inst_21701 = cljs.core.next(inst_21691);
var inst_21691__$1 = inst_21701;
var state_21718__$1 = (function (){var statearr_21735 = state_21718;
(statearr_21735[(7)] = inst_21691__$1);

return statearr_21735;
})();
var statearr_21737_23373 = state_21718__$1;
(statearr_21737_23373[(2)] = null);

(statearr_21737_23373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_21743 = [null,null,null,null,null,null,null,null];
(statearr_21743[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_21743[(1)] = (1));

return statearr_21743;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_21718){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21718);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e21744){var ex__15031__auto__ = e21744;
var statearr_21745_23374 = state_21718;
(statearr_21745_23374[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21718[(4)]))){
var statearr_21746_23375 = state_21718;
(statearr_21746_23375[(1)] = cljs.core.first((state_21718[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23377 = state_21718;
state_21718 = G__23377;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_21718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_21718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_21747 = f__15222__auto__();
(statearr_21747[(6)] = c__15221__auto__);

return statearr_21747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

return c__15221__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21749 = arguments.length;
switch (G__21749) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23384 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23384(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23385 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23385(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23386 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23386(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23391 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23391(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21758 = (function (ch,cs,meta21759){
this.ch = ch;
this.cs = cs;
this.meta21759 = meta21759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21760,meta21759__$1){
var self__ = this;
var _21760__$1 = this;
return (new cljs.core.async.t_cljs$core$async21758(self__.ch,self__.cs,meta21759__$1));
}));

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21760){
var self__ = this;
var _21760__$1 = this;
return self__.meta21759;
}));

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21759","meta21759",1253994804,null)], null);
}));

(cljs.core.async.t_cljs$core$async21758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21758");

(cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21758.
 */
cljs.core.async.__GT_t_cljs$core$async21758 = (function cljs$core$async$__GT_t_cljs$core$async21758(ch,cs,meta21759){
return (new cljs.core.async.t_cljs$core$async21758(ch,cs,meta21759));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async21758(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15221__auto___23398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_21905){
var state_val_21906 = (state_21905[(1)]);
if((state_val_21906 === (7))){
var inst_21900 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_21907_23399 = state_21905__$1;
(statearr_21907_23399[(2)] = inst_21900);

(statearr_21907_23399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (20))){
var inst_21802 = (state_21905[(7)]);
var inst_21814 = cljs.core.first(inst_21802);
var inst_21815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21814,(0),null);
var inst_21816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21814,(1),null);
var state_21905__$1 = (function (){var statearr_21908 = state_21905;
(statearr_21908[(8)] = inst_21815);

return statearr_21908;
})();
if(cljs.core.truth_(inst_21816)){
var statearr_21910_23400 = state_21905__$1;
(statearr_21910_23400[(1)] = (22));

} else {
var statearr_21911_23401 = state_21905__$1;
(statearr_21911_23401[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (27))){
var inst_21845 = (state_21905[(9)]);
var inst_21847 = (state_21905[(10)]);
var inst_21770 = (state_21905[(11)]);
var inst_21852 = (state_21905[(12)]);
var inst_21852__$1 = cljs.core._nth(inst_21845,inst_21847);
var inst_21853 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21852__$1,inst_21770,done);
var state_21905__$1 = (function (){var statearr_21912 = state_21905;
(statearr_21912[(12)] = inst_21852__$1);

return statearr_21912;
})();
if(cljs.core.truth_(inst_21853)){
var statearr_21915_23402 = state_21905__$1;
(statearr_21915_23402[(1)] = (30));

} else {
var statearr_21917_23403 = state_21905__$1;
(statearr_21917_23403[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (1))){
var state_21905__$1 = state_21905;
var statearr_21918_23405 = state_21905__$1;
(statearr_21918_23405[(2)] = null);

(statearr_21918_23405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (24))){
var inst_21802 = (state_21905[(7)]);
var inst_21821 = (state_21905[(2)]);
var inst_21822 = cljs.core.next(inst_21802);
var inst_21780 = inst_21822;
var inst_21781 = null;
var inst_21782 = (0);
var inst_21783 = (0);
var state_21905__$1 = (function (){var statearr_21928 = state_21905;
(statearr_21928[(13)] = inst_21780);

(statearr_21928[(14)] = inst_21781);

(statearr_21928[(15)] = inst_21782);

(statearr_21928[(16)] = inst_21821);

(statearr_21928[(17)] = inst_21783);

return statearr_21928;
})();
var statearr_21938_23406 = state_21905__$1;
(statearr_21938_23406[(2)] = null);

(statearr_21938_23406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (39))){
var state_21905__$1 = state_21905;
var statearr_21947_23407 = state_21905__$1;
(statearr_21947_23407[(2)] = null);

(statearr_21947_23407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (4))){
var inst_21770 = (state_21905[(11)]);
var inst_21770__$1 = (state_21905[(2)]);
var inst_21771 = (inst_21770__$1 == null);
var state_21905__$1 = (function (){var statearr_21949 = state_21905;
(statearr_21949[(11)] = inst_21770__$1);

return statearr_21949;
})();
if(cljs.core.truth_(inst_21771)){
var statearr_21950_23408 = state_21905__$1;
(statearr_21950_23408[(1)] = (5));

} else {
var statearr_21951_23409 = state_21905__$1;
(statearr_21951_23409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (15))){
var inst_21780 = (state_21905[(13)]);
var inst_21781 = (state_21905[(14)]);
var inst_21782 = (state_21905[(15)]);
var inst_21783 = (state_21905[(17)]);
var inst_21798 = (state_21905[(2)]);
var inst_21799 = (inst_21783 + (1));
var tmp21943 = inst_21780;
var tmp21944 = inst_21781;
var tmp21945 = inst_21782;
var inst_21780__$1 = tmp21943;
var inst_21781__$1 = tmp21944;
var inst_21782__$1 = tmp21945;
var inst_21783__$1 = inst_21799;
var state_21905__$1 = (function (){var statearr_21952 = state_21905;
(statearr_21952[(13)] = inst_21780__$1);

(statearr_21952[(18)] = inst_21798);

(statearr_21952[(14)] = inst_21781__$1);

(statearr_21952[(15)] = inst_21782__$1);

(statearr_21952[(17)] = inst_21783__$1);

return statearr_21952;
})();
var statearr_21954_23412 = state_21905__$1;
(statearr_21954_23412[(2)] = null);

(statearr_21954_23412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (21))){
var inst_21825 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_21958_23413 = state_21905__$1;
(statearr_21958_23413[(2)] = inst_21825);

(statearr_21958_23413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (31))){
var inst_21852 = (state_21905[(12)]);
var inst_21856 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21852);
var state_21905__$1 = state_21905;
var statearr_21959_23414 = state_21905__$1;
(statearr_21959_23414[(2)] = inst_21856);

(statearr_21959_23414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (32))){
var inst_21845 = (state_21905[(9)]);
var inst_21846 = (state_21905[(19)]);
var inst_21847 = (state_21905[(10)]);
var inst_21844 = (state_21905[(20)]);
var inst_21858 = (state_21905[(2)]);
var inst_21859 = (inst_21847 + (1));
var tmp21955 = inst_21845;
var tmp21956 = inst_21846;
var tmp21957 = inst_21844;
var inst_21844__$1 = tmp21957;
var inst_21845__$1 = tmp21955;
var inst_21846__$1 = tmp21956;
var inst_21847__$1 = inst_21859;
var state_21905__$1 = (function (){var statearr_21960 = state_21905;
(statearr_21960[(9)] = inst_21845__$1);

(statearr_21960[(19)] = inst_21846__$1);

(statearr_21960[(10)] = inst_21847__$1);

(statearr_21960[(20)] = inst_21844__$1);

(statearr_21960[(21)] = inst_21858);

return statearr_21960;
})();
var statearr_21961_23415 = state_21905__$1;
(statearr_21961_23415[(2)] = null);

(statearr_21961_23415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (40))){
var inst_21873 = (state_21905[(22)]);
var inst_21877 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21873);
var state_21905__$1 = state_21905;
var statearr_21962_23421 = state_21905__$1;
(statearr_21962_23421[(2)] = inst_21877);

(statearr_21962_23421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (33))){
var inst_21863 = (state_21905[(23)]);
var inst_21865 = cljs.core.chunked_seq_QMARK_(inst_21863);
var state_21905__$1 = state_21905;
if(inst_21865){
var statearr_21964_23422 = state_21905__$1;
(statearr_21964_23422[(1)] = (36));

} else {
var statearr_21965_23423 = state_21905__$1;
(statearr_21965_23423[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (13))){
var inst_21792 = (state_21905[(24)]);
var inst_21795 = cljs.core.async.close_BANG_(inst_21792);
var state_21905__$1 = state_21905;
var statearr_21966_23425 = state_21905__$1;
(statearr_21966_23425[(2)] = inst_21795);

(statearr_21966_23425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (22))){
var inst_21815 = (state_21905[(8)]);
var inst_21818 = cljs.core.async.close_BANG_(inst_21815);
var state_21905__$1 = state_21905;
var statearr_21975_23429 = state_21905__$1;
(statearr_21975_23429[(2)] = inst_21818);

(statearr_21975_23429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (36))){
var inst_21863 = (state_21905[(23)]);
var inst_21867 = cljs.core.chunk_first(inst_21863);
var inst_21868 = cljs.core.chunk_rest(inst_21863);
var inst_21869 = cljs.core.count(inst_21867);
var inst_21844 = inst_21868;
var inst_21845 = inst_21867;
var inst_21846 = inst_21869;
var inst_21847 = (0);
var state_21905__$1 = (function (){var statearr_21988 = state_21905;
(statearr_21988[(9)] = inst_21845);

(statearr_21988[(19)] = inst_21846);

(statearr_21988[(10)] = inst_21847);

(statearr_21988[(20)] = inst_21844);

return statearr_21988;
})();
var statearr_21989_23430 = state_21905__$1;
(statearr_21989_23430[(2)] = null);

(statearr_21989_23430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (41))){
var inst_21863 = (state_21905[(23)]);
var inst_21879 = (state_21905[(2)]);
var inst_21880 = cljs.core.next(inst_21863);
var inst_21844 = inst_21880;
var inst_21845 = null;
var inst_21846 = (0);
var inst_21847 = (0);
var state_21905__$1 = (function (){var statearr_21990 = state_21905;
(statearr_21990[(9)] = inst_21845);

(statearr_21990[(19)] = inst_21846);

(statearr_21990[(10)] = inst_21847);

(statearr_21990[(25)] = inst_21879);

(statearr_21990[(20)] = inst_21844);

return statearr_21990;
})();
var statearr_21992_23431 = state_21905__$1;
(statearr_21992_23431[(2)] = null);

(statearr_21992_23431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (43))){
var state_21905__$1 = state_21905;
var statearr_21993_23432 = state_21905__$1;
(statearr_21993_23432[(2)] = null);

(statearr_21993_23432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (29))){
var inst_21888 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_21994_23433 = state_21905__$1;
(statearr_21994_23433[(2)] = inst_21888);

(statearr_21994_23433[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (44))){
var inst_21897 = (state_21905[(2)]);
var state_21905__$1 = (function (){var statearr_21995 = state_21905;
(statearr_21995[(26)] = inst_21897);

return statearr_21995;
})();
var statearr_21996_23434 = state_21905__$1;
(statearr_21996_23434[(2)] = null);

(statearr_21996_23434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (6))){
var inst_21836 = (state_21905[(27)]);
var inst_21835 = cljs.core.deref(cs);
var inst_21836__$1 = cljs.core.keys(inst_21835);
var inst_21837 = cljs.core.count(inst_21836__$1);
var inst_21838 = cljs.core.reset_BANG_(dctr,inst_21837);
var inst_21843 = cljs.core.seq(inst_21836__$1);
var inst_21844 = inst_21843;
var inst_21845 = null;
var inst_21846 = (0);
var inst_21847 = (0);
var state_21905__$1 = (function (){var statearr_21997 = state_21905;
(statearr_21997[(9)] = inst_21845);

(statearr_21997[(19)] = inst_21846);

(statearr_21997[(10)] = inst_21847);

(statearr_21997[(28)] = inst_21838);

(statearr_21997[(27)] = inst_21836__$1);

(statearr_21997[(20)] = inst_21844);

return statearr_21997;
})();
var statearr_21998_23435 = state_21905__$1;
(statearr_21998_23435[(2)] = null);

(statearr_21998_23435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (28))){
var inst_21863 = (state_21905[(23)]);
var inst_21844 = (state_21905[(20)]);
var inst_21863__$1 = cljs.core.seq(inst_21844);
var state_21905__$1 = (function (){var statearr_22000 = state_21905;
(statearr_22000[(23)] = inst_21863__$1);

return statearr_22000;
})();
if(inst_21863__$1){
var statearr_22001_23436 = state_21905__$1;
(statearr_22001_23436[(1)] = (33));

} else {
var statearr_22002_23437 = state_21905__$1;
(statearr_22002_23437[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (25))){
var inst_21846 = (state_21905[(19)]);
var inst_21847 = (state_21905[(10)]);
var inst_21849 = (inst_21847 < inst_21846);
var inst_21850 = inst_21849;
var state_21905__$1 = state_21905;
if(cljs.core.truth_(inst_21850)){
var statearr_22003_23438 = state_21905__$1;
(statearr_22003_23438[(1)] = (27));

} else {
var statearr_22004_23439 = state_21905__$1;
(statearr_22004_23439[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (34))){
var state_21905__$1 = state_21905;
var statearr_22005_23441 = state_21905__$1;
(statearr_22005_23441[(2)] = null);

(statearr_22005_23441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (17))){
var state_21905__$1 = state_21905;
var statearr_22006_23443 = state_21905__$1;
(statearr_22006_23443[(2)] = null);

(statearr_22006_23443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (3))){
var inst_21902 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21905__$1,inst_21902);
} else {
if((state_val_21906 === (12))){
var inst_21830 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22007_23444 = state_21905__$1;
(statearr_22007_23444[(2)] = inst_21830);

(statearr_22007_23444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (2))){
var state_21905__$1 = state_21905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21905__$1,(4),ch);
} else {
if((state_val_21906 === (23))){
var state_21905__$1 = state_21905;
var statearr_22009_23445 = state_21905__$1;
(statearr_22009_23445[(2)] = null);

(statearr_22009_23445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (35))){
var inst_21886 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22010_23446 = state_21905__$1;
(statearr_22010_23446[(2)] = inst_21886);

(statearr_22010_23446[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (19))){
var inst_21802 = (state_21905[(7)]);
var inst_21806 = cljs.core.chunk_first(inst_21802);
var inst_21807 = cljs.core.chunk_rest(inst_21802);
var inst_21808 = cljs.core.count(inst_21806);
var inst_21780 = inst_21807;
var inst_21781 = inst_21806;
var inst_21782 = inst_21808;
var inst_21783 = (0);
var state_21905__$1 = (function (){var statearr_22011 = state_21905;
(statearr_22011[(13)] = inst_21780);

(statearr_22011[(14)] = inst_21781);

(statearr_22011[(15)] = inst_21782);

(statearr_22011[(17)] = inst_21783);

return statearr_22011;
})();
var statearr_22012_23447 = state_21905__$1;
(statearr_22012_23447[(2)] = null);

(statearr_22012_23447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (11))){
var inst_21780 = (state_21905[(13)]);
var inst_21802 = (state_21905[(7)]);
var inst_21802__$1 = cljs.core.seq(inst_21780);
var state_21905__$1 = (function (){var statearr_22013 = state_21905;
(statearr_22013[(7)] = inst_21802__$1);

return statearr_22013;
})();
if(inst_21802__$1){
var statearr_22014_23448 = state_21905__$1;
(statearr_22014_23448[(1)] = (16));

} else {
var statearr_22015_23449 = state_21905__$1;
(statearr_22015_23449[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (9))){
var inst_21832 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22017_23450 = state_21905__$1;
(statearr_22017_23450[(2)] = inst_21832);

(statearr_22017_23450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (5))){
var inst_21778 = cljs.core.deref(cs);
var inst_21779 = cljs.core.seq(inst_21778);
var inst_21780 = inst_21779;
var inst_21781 = null;
var inst_21782 = (0);
var inst_21783 = (0);
var state_21905__$1 = (function (){var statearr_22018 = state_21905;
(statearr_22018[(13)] = inst_21780);

(statearr_22018[(14)] = inst_21781);

(statearr_22018[(15)] = inst_21782);

(statearr_22018[(17)] = inst_21783);

return statearr_22018;
})();
var statearr_22019_23451 = state_21905__$1;
(statearr_22019_23451[(2)] = null);

(statearr_22019_23451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (14))){
var state_21905__$1 = state_21905;
var statearr_22020_23452 = state_21905__$1;
(statearr_22020_23452[(2)] = null);

(statearr_22020_23452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (45))){
var inst_21894 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22021_23453 = state_21905__$1;
(statearr_22021_23453[(2)] = inst_21894);

(statearr_22021_23453[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (26))){
var inst_21836 = (state_21905[(27)]);
var inst_21890 = (state_21905[(2)]);
var inst_21891 = cljs.core.seq(inst_21836);
var state_21905__$1 = (function (){var statearr_22022 = state_21905;
(statearr_22022[(29)] = inst_21890);

return statearr_22022;
})();
if(inst_21891){
var statearr_22023_23458 = state_21905__$1;
(statearr_22023_23458[(1)] = (42));

} else {
var statearr_22024_23462 = state_21905__$1;
(statearr_22024_23462[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (16))){
var inst_21802 = (state_21905[(7)]);
var inst_21804 = cljs.core.chunked_seq_QMARK_(inst_21802);
var state_21905__$1 = state_21905;
if(inst_21804){
var statearr_22025_23463 = state_21905__$1;
(statearr_22025_23463[(1)] = (19));

} else {
var statearr_22027_23464 = state_21905__$1;
(statearr_22027_23464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (38))){
var inst_21883 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22028_23469 = state_21905__$1;
(statearr_22028_23469[(2)] = inst_21883);

(statearr_22028_23469[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (30))){
var state_21905__$1 = state_21905;
var statearr_22029_23470 = state_21905__$1;
(statearr_22029_23470[(2)] = null);

(statearr_22029_23470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (10))){
var inst_21781 = (state_21905[(14)]);
var inst_21783 = (state_21905[(17)]);
var inst_21791 = cljs.core._nth(inst_21781,inst_21783);
var inst_21792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21791,(0),null);
var inst_21793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21791,(1),null);
var state_21905__$1 = (function (){var statearr_22030 = state_21905;
(statearr_22030[(24)] = inst_21792);

return statearr_22030;
})();
if(cljs.core.truth_(inst_21793)){
var statearr_22031_23475 = state_21905__$1;
(statearr_22031_23475[(1)] = (13));

} else {
var statearr_22032_23476 = state_21905__$1;
(statearr_22032_23476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (18))){
var inst_21828 = (state_21905[(2)]);
var state_21905__$1 = state_21905;
var statearr_22033_23478 = state_21905__$1;
(statearr_22033_23478[(2)] = inst_21828);

(statearr_22033_23478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (42))){
var state_21905__$1 = state_21905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21905__$1,(45),dchan);
} else {
if((state_val_21906 === (37))){
var inst_21873 = (state_21905[(22)]);
var inst_21863 = (state_21905[(23)]);
var inst_21770 = (state_21905[(11)]);
var inst_21873__$1 = cljs.core.first(inst_21863);
var inst_21874 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21873__$1,inst_21770,done);
var state_21905__$1 = (function (){var statearr_22035 = state_21905;
(statearr_22035[(22)] = inst_21873__$1);

return statearr_22035;
})();
if(cljs.core.truth_(inst_21874)){
var statearr_22036_23483 = state_21905__$1;
(statearr_22036_23483[(1)] = (39));

} else {
var statearr_22037_23484 = state_21905__$1;
(statearr_22037_23484[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21906 === (8))){
var inst_21782 = (state_21905[(15)]);
var inst_21783 = (state_21905[(17)]);
var inst_21785 = (inst_21783 < inst_21782);
var inst_21786 = inst_21785;
var state_21905__$1 = state_21905;
if(cljs.core.truth_(inst_21786)){
var statearr_22038_23485 = state_21905__$1;
(statearr_22038_23485[(1)] = (10));

} else {
var statearr_22039_23486 = state_21905__$1;
(statearr_22039_23486[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15028__auto__ = null;
var cljs$core$async$mult_$_state_machine__15028__auto____0 = (function (){
var statearr_22040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22040[(0)] = cljs$core$async$mult_$_state_machine__15028__auto__);

(statearr_22040[(1)] = (1));

return statearr_22040;
});
var cljs$core$async$mult_$_state_machine__15028__auto____1 = (function (state_21905){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_21905);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22041){var ex__15031__auto__ = e22041;
var statearr_22042_23491 = state_21905;
(statearr_22042_23491[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_21905[(4)]))){
var statearr_22043_23493 = state_21905;
(statearr_22043_23493[(1)] = cljs.core.first((state_21905[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23494 = state_21905;
state_21905 = G__23494;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15028__auto__ = function(state_21905){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15028__auto____1.call(this,state_21905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15028__auto____0;
cljs$core$async$mult_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15028__auto____1;
return cljs$core$async$mult_$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22045 = f__15222__auto__();
(statearr_22045[(6)] = c__15221__auto___23398);

return statearr_22045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22047 = arguments.length;
switch (G__22047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23506 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23506(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23510 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23510(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23511 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23511(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23515 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23515(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23516 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23516(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23520 = arguments.length;
var i__5770__auto___23521 = (0);
while(true){
if((i__5770__auto___23521 < len__5769__auto___23520)){
args__5775__auto__.push((arguments[i__5770__auto___23521]));

var G__23522 = (i__5770__auto___23521 + (1));
i__5770__auto___23521 = G__23522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22056){
var map__22057 = p__22056;
var map__22057__$1 = cljs.core.__destructure_map(map__22057);
var opts = map__22057__$1;
var statearr_22058_23523 = state;
(statearr_22058_23523[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_22059_23528 = state;
(statearr_22059_23528[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_22061_23529 = state;
(statearr_22061_23529[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22052){
var G__22053 = cljs.core.first(seq22052);
var seq22052__$1 = cljs.core.next(seq22052);
var G__22054 = cljs.core.first(seq22052__$1);
var seq22052__$2 = cljs.core.next(seq22052__$1);
var G__22055 = cljs.core.first(seq22052__$2);
var seq22052__$3 = cljs.core.next(seq22052__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22053,G__22054,G__22055,seq22052__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22063 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22064){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22064 = meta22064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22065,meta22064__$1){
var self__ = this;
var _22065__$1 = this;
return (new cljs.core.async.t_cljs$core$async22063(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22064__$1));
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22065){
var self__ = this;
var _22065__$1 = this;
return self__.meta22064;
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22064","meta22064",1591476797,null)], null);
}));

(cljs.core.async.t_cljs$core$async22063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22063");

(cljs.core.async.t_cljs$core$async22063.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22063.
 */
cljs.core.async.__GT_t_cljs$core$async22063 = (function cljs$core$async$__GT_t_cljs$core$async22063(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22064){
return (new cljs.core.async.t_cljs$core$async22063(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22064));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async22063(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15221__auto___23535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22137){
var state_val_22138 = (state_22137[(1)]);
if((state_val_22138 === (7))){
var inst_22096 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
if(cljs.core.truth_(inst_22096)){
var statearr_22139_23536 = state_22137__$1;
(statearr_22139_23536[(1)] = (8));

} else {
var statearr_22140_23537 = state_22137__$1;
(statearr_22140_23537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (20))){
var inst_22089 = (state_22137[(7)]);
var state_22137__$1 = state_22137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22137__$1,(23),out,inst_22089);
} else {
if((state_val_22138 === (1))){
var inst_22072 = calc_state();
var inst_22073 = cljs.core.__destructure_map(inst_22072);
var inst_22074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22073,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22073,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22073,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22077 = inst_22072;
var state_22137__$1 = (function (){var statearr_22141 = state_22137;
(statearr_22141[(8)] = inst_22076);

(statearr_22141[(9)] = inst_22077);

(statearr_22141[(10)] = inst_22074);

(statearr_22141[(11)] = inst_22075);

return statearr_22141;
})();
var statearr_22143_23539 = state_22137__$1;
(statearr_22143_23539[(2)] = null);

(statearr_22143_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (24))){
var inst_22080 = (state_22137[(12)]);
var inst_22077 = inst_22080;
var state_22137__$1 = (function (){var statearr_22144 = state_22137;
(statearr_22144[(9)] = inst_22077);

return statearr_22144;
})();
var statearr_22145_23541 = state_22137__$1;
(statearr_22145_23541[(2)] = null);

(statearr_22145_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (4))){
var inst_22089 = (state_22137[(7)]);
var inst_22091 = (state_22137[(13)]);
var inst_22088 = (state_22137[(2)]);
var inst_22089__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22088,(0),null);
var inst_22090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22088,(1),null);
var inst_22091__$1 = (inst_22089__$1 == null);
var state_22137__$1 = (function (){var statearr_22146 = state_22137;
(statearr_22146[(7)] = inst_22089__$1);

(statearr_22146[(13)] = inst_22091__$1);

(statearr_22146[(14)] = inst_22090);

return statearr_22146;
})();
if(cljs.core.truth_(inst_22091__$1)){
var statearr_22147_23542 = state_22137__$1;
(statearr_22147_23542[(1)] = (5));

} else {
var statearr_22148_23543 = state_22137__$1;
(statearr_22148_23543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (15))){
var inst_22081 = (state_22137[(15)]);
var inst_22110 = (state_22137[(16)]);
var inst_22110__$1 = cljs.core.empty_QMARK_(inst_22081);
var state_22137__$1 = (function (){var statearr_22149 = state_22137;
(statearr_22149[(16)] = inst_22110__$1);

return statearr_22149;
})();
if(inst_22110__$1){
var statearr_22150_23544 = state_22137__$1;
(statearr_22150_23544[(1)] = (17));

} else {
var statearr_22151_23545 = state_22137__$1;
(statearr_22151_23545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (21))){
var inst_22080 = (state_22137[(12)]);
var inst_22077 = inst_22080;
var state_22137__$1 = (function (){var statearr_22152 = state_22137;
(statearr_22152[(9)] = inst_22077);

return statearr_22152;
})();
var statearr_22153_23546 = state_22137__$1;
(statearr_22153_23546[(2)] = null);

(statearr_22153_23546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (13))){
var inst_22103 = (state_22137[(2)]);
var inst_22104 = calc_state();
var inst_22077 = inst_22104;
var state_22137__$1 = (function (){var statearr_22155 = state_22137;
(statearr_22155[(17)] = inst_22103);

(statearr_22155[(9)] = inst_22077);

return statearr_22155;
})();
var statearr_22156_23550 = state_22137__$1;
(statearr_22156_23550[(2)] = null);

(statearr_22156_23550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (22))){
var inst_22130 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
var statearr_22157_23551 = state_22137__$1;
(statearr_22157_23551[(2)] = inst_22130);

(statearr_22157_23551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (6))){
var inst_22090 = (state_22137[(14)]);
var inst_22094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22090,change);
var state_22137__$1 = state_22137;
var statearr_22158_23552 = state_22137__$1;
(statearr_22158_23552[(2)] = inst_22094);

(statearr_22158_23552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (25))){
var state_22137__$1 = state_22137;
var statearr_22159_23553 = state_22137__$1;
(statearr_22159_23553[(2)] = null);

(statearr_22159_23553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (17))){
var inst_22082 = (state_22137[(18)]);
var inst_22090 = (state_22137[(14)]);
var inst_22112 = (inst_22082.cljs$core$IFn$_invoke$arity$1 ? inst_22082.cljs$core$IFn$_invoke$arity$1(inst_22090) : inst_22082.call(null,inst_22090));
var inst_22113 = cljs.core.not(inst_22112);
var state_22137__$1 = state_22137;
var statearr_22160_23555 = state_22137__$1;
(statearr_22160_23555[(2)] = inst_22113);

(statearr_22160_23555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (3))){
var inst_22134 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22137__$1,inst_22134);
} else {
if((state_val_22138 === (12))){
var state_22137__$1 = state_22137;
var statearr_22162_23557 = state_22137__$1;
(statearr_22162_23557[(2)] = null);

(statearr_22162_23557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (2))){
var inst_22080 = (state_22137[(12)]);
var inst_22077 = (state_22137[(9)]);
var inst_22080__$1 = cljs.core.__destructure_map(inst_22077);
var inst_22081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22080__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22080__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22080__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22137__$1 = (function (){var statearr_22163 = state_22137;
(statearr_22163[(15)] = inst_22081);

(statearr_22163[(12)] = inst_22080__$1);

(statearr_22163[(18)] = inst_22082);

return statearr_22163;
})();
return cljs.core.async.ioc_alts_BANG_(state_22137__$1,(4),inst_22083);
} else {
if((state_val_22138 === (23))){
var inst_22121 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
if(cljs.core.truth_(inst_22121)){
var statearr_22164_23562 = state_22137__$1;
(statearr_22164_23562[(1)] = (24));

} else {
var statearr_22165_23563 = state_22137__$1;
(statearr_22165_23563[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (19))){
var inst_22116 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
var statearr_22166_23564 = state_22137__$1;
(statearr_22166_23564[(2)] = inst_22116);

(statearr_22166_23564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (11))){
var inst_22090 = (state_22137[(14)]);
var inst_22100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22090);
var state_22137__$1 = state_22137;
var statearr_22168_23565 = state_22137__$1;
(statearr_22168_23565[(2)] = inst_22100);

(statearr_22168_23565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (9))){
var inst_22081 = (state_22137[(15)]);
var inst_22107 = (state_22137[(19)]);
var inst_22090 = (state_22137[(14)]);
var inst_22107__$1 = (inst_22081.cljs$core$IFn$_invoke$arity$1 ? inst_22081.cljs$core$IFn$_invoke$arity$1(inst_22090) : inst_22081.call(null,inst_22090));
var state_22137__$1 = (function (){var statearr_22169 = state_22137;
(statearr_22169[(19)] = inst_22107__$1);

return statearr_22169;
})();
if(cljs.core.truth_(inst_22107__$1)){
var statearr_22170_23568 = state_22137__$1;
(statearr_22170_23568[(1)] = (14));

} else {
var statearr_22171_23569 = state_22137__$1;
(statearr_22171_23569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (5))){
var inst_22091 = (state_22137[(13)]);
var state_22137__$1 = state_22137;
var statearr_22172_23570 = state_22137__$1;
(statearr_22172_23570[(2)] = inst_22091);

(statearr_22172_23570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (14))){
var inst_22107 = (state_22137[(19)]);
var state_22137__$1 = state_22137;
var statearr_22173_23571 = state_22137__$1;
(statearr_22173_23571[(2)] = inst_22107);

(statearr_22173_23571[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (26))){
var inst_22126 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
var statearr_22174_23572 = state_22137__$1;
(statearr_22174_23572[(2)] = inst_22126);

(statearr_22174_23572[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (16))){
var inst_22118 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
if(cljs.core.truth_(inst_22118)){
var statearr_22175_23573 = state_22137__$1;
(statearr_22175_23573[(1)] = (20));

} else {
var statearr_22176_23574 = state_22137__$1;
(statearr_22176_23574[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (10))){
var inst_22132 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
var statearr_22178_23575 = state_22137__$1;
(statearr_22178_23575[(2)] = inst_22132);

(statearr_22178_23575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (18))){
var inst_22110 = (state_22137[(16)]);
var state_22137__$1 = state_22137;
var statearr_22179_23576 = state_22137__$1;
(statearr_22179_23576[(2)] = inst_22110);

(statearr_22179_23576[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (8))){
var inst_22089 = (state_22137[(7)]);
var inst_22098 = (inst_22089 == null);
var state_22137__$1 = state_22137;
if(cljs.core.truth_(inst_22098)){
var statearr_22180_23577 = state_22137__$1;
(statearr_22180_23577[(1)] = (11));

} else {
var statearr_22181_23578 = state_22137__$1;
(statearr_22181_23578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15028__auto__ = null;
var cljs$core$async$mix_$_state_machine__15028__auto____0 = (function (){
var statearr_22182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22182[(0)] = cljs$core$async$mix_$_state_machine__15028__auto__);

(statearr_22182[(1)] = (1));

return statearr_22182;
});
var cljs$core$async$mix_$_state_machine__15028__auto____1 = (function (state_22137){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22137);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22183){var ex__15031__auto__ = e22183;
var statearr_22184_23579 = state_22137;
(statearr_22184_23579[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22137[(4)]))){
var statearr_22185_23580 = state_22137;
(statearr_22185_23580[(1)] = cljs.core.first((state_22137[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_22137;
state_22137 = G__23581;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15028__auto__ = function(state_22137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15028__auto____1.call(this,state_22137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15028__auto____0;
cljs$core$async$mix_$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15028__auto____1;
return cljs$core$async$mix_$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22187 = f__15222__auto__();
(statearr_22187[(6)] = c__15221__auto___23535);

return statearr_22187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23586 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23586(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23591 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23591(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23595 = (function() {
var G__23600 = null;
var G__23600__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23600__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23600 = function(p,v){
switch(arguments.length){
case 1:
return G__23600__1.call(this,p);
case 2:
return G__23600__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23600.cljs$core$IFn$_invoke$arity$1 = G__23600__1;
G__23600.cljs$core$IFn$_invoke$arity$2 = G__23600__2;
return G__23600;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22192 = arguments.length;
switch (G__22192) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23595(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23595(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22198 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22199){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22199 = meta22199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22200,meta22199__$1){
var self__ = this;
var _22200__$1 = this;
return (new cljs.core.async.t_cljs$core$async22198(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22199__$1));
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22200){
var self__ = this;
var _22200__$1 = this;
return self__.meta22199;
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22199","meta22199",950032918,null)], null);
}));

(cljs.core.async.t_cljs$core$async22198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22198");

(cljs.core.async.t_cljs$core$async22198.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22198.
 */
cljs.core.async.__GT_t_cljs$core$async22198 = (function cljs$core$async$__GT_t_cljs$core$async22198(ch,topic_fn,buf_fn,mults,ensure_mult,meta22199){
return (new cljs.core.async.t_cljs$core$async22198(ch,topic_fn,buf_fn,mults,ensure_mult,meta22199));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22196 = arguments.length;
switch (G__22196) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__22194_SHARP_){
if(cljs.core.truth_((p1__22194_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22194_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22194_SHARP_.call(null,topic)))){
return p1__22194_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22194_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async22198(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15221__auto___23616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22275){
var state_val_22276 = (state_22275[(1)]);
if((state_val_22276 === (7))){
var inst_22271 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22278_23617 = state_22275__$1;
(statearr_22278_23617[(2)] = inst_22271);

(statearr_22278_23617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (20))){
var state_22275__$1 = state_22275;
var statearr_22279_23618 = state_22275__$1;
(statearr_22279_23618[(2)] = null);

(statearr_22279_23618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (1))){
var state_22275__$1 = state_22275;
var statearr_22280_23619 = state_22275__$1;
(statearr_22280_23619[(2)] = null);

(statearr_22280_23619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (24))){
var inst_22254 = (state_22275[(7)]);
var inst_22263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22254);
var state_22275__$1 = state_22275;
var statearr_22281_23620 = state_22275__$1;
(statearr_22281_23620[(2)] = inst_22263);

(statearr_22281_23620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (4))){
var inst_22205 = (state_22275[(8)]);
var inst_22205__$1 = (state_22275[(2)]);
var inst_22206 = (inst_22205__$1 == null);
var state_22275__$1 = (function (){var statearr_22282 = state_22275;
(statearr_22282[(8)] = inst_22205__$1);

return statearr_22282;
})();
if(cljs.core.truth_(inst_22206)){
var statearr_22284_23621 = state_22275__$1;
(statearr_22284_23621[(1)] = (5));

} else {
var statearr_22285_23622 = state_22275__$1;
(statearr_22285_23622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (15))){
var inst_22248 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22286_23626 = state_22275__$1;
(statearr_22286_23626[(2)] = inst_22248);

(statearr_22286_23626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (21))){
var inst_22268 = (state_22275[(2)]);
var state_22275__$1 = (function (){var statearr_22287 = state_22275;
(statearr_22287[(9)] = inst_22268);

return statearr_22287;
})();
var statearr_22288_23627 = state_22275__$1;
(statearr_22288_23627[(2)] = null);

(statearr_22288_23627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (13))){
var inst_22230 = (state_22275[(10)]);
var inst_22232 = cljs.core.chunked_seq_QMARK_(inst_22230);
var state_22275__$1 = state_22275;
if(inst_22232){
var statearr_22289_23628 = state_22275__$1;
(statearr_22289_23628[(1)] = (16));

} else {
var statearr_22290_23629 = state_22275__$1;
(statearr_22290_23629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (22))){
var inst_22260 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
if(cljs.core.truth_(inst_22260)){
var statearr_22291_23630 = state_22275__$1;
(statearr_22291_23630[(1)] = (23));

} else {
var statearr_22292_23631 = state_22275__$1;
(statearr_22292_23631[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (6))){
var inst_22256 = (state_22275[(11)]);
var inst_22254 = (state_22275[(7)]);
var inst_22205 = (state_22275[(8)]);
var inst_22254__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22205) : topic_fn.call(null,inst_22205));
var inst_22255 = cljs.core.deref(mults);
var inst_22256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22255,inst_22254__$1);
var state_22275__$1 = (function (){var statearr_22294 = state_22275;
(statearr_22294[(11)] = inst_22256__$1);

(statearr_22294[(7)] = inst_22254__$1);

return statearr_22294;
})();
if(cljs.core.truth_(inst_22256__$1)){
var statearr_22295_23632 = state_22275__$1;
(statearr_22295_23632[(1)] = (19));

} else {
var statearr_22296_23633 = state_22275__$1;
(statearr_22296_23633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (25))){
var inst_22265 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22297_23634 = state_22275__$1;
(statearr_22297_23634[(2)] = inst_22265);

(statearr_22297_23634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (17))){
var inst_22230 = (state_22275[(10)]);
var inst_22239 = cljs.core.first(inst_22230);
var inst_22240 = cljs.core.async.muxch_STAR_(inst_22239);
var inst_22241 = cljs.core.async.close_BANG_(inst_22240);
var inst_22242 = cljs.core.next(inst_22230);
var inst_22216 = inst_22242;
var inst_22217 = null;
var inst_22218 = (0);
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22298 = state_22275;
(statearr_22298[(12)] = inst_22219);

(statearr_22298[(13)] = inst_22216);

(statearr_22298[(14)] = inst_22218);

(statearr_22298[(15)] = inst_22217);

(statearr_22298[(16)] = inst_22241);

return statearr_22298;
})();
var statearr_22299_23641 = state_22275__$1;
(statearr_22299_23641[(2)] = null);

(statearr_22299_23641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (3))){
var inst_22273 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22275__$1,inst_22273);
} else {
if((state_val_22276 === (12))){
var inst_22250 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22300_23646 = state_22275__$1;
(statearr_22300_23646[(2)] = inst_22250);

(statearr_22300_23646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (2))){
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22275__$1,(4),ch);
} else {
if((state_val_22276 === (23))){
var state_22275__$1 = state_22275;
var statearr_22302_23647 = state_22275__$1;
(statearr_22302_23647[(2)] = null);

(statearr_22302_23647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (19))){
var inst_22256 = (state_22275[(11)]);
var inst_22205 = (state_22275[(8)]);
var inst_22258 = cljs.core.async.muxch_STAR_(inst_22256);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22275__$1,(22),inst_22258,inst_22205);
} else {
if((state_val_22276 === (11))){
var inst_22230 = (state_22275[(10)]);
var inst_22216 = (state_22275[(13)]);
var inst_22230__$1 = cljs.core.seq(inst_22216);
var state_22275__$1 = (function (){var statearr_22303 = state_22275;
(statearr_22303[(10)] = inst_22230__$1);

return statearr_22303;
})();
if(inst_22230__$1){
var statearr_22304_23648 = state_22275__$1;
(statearr_22304_23648[(1)] = (13));

} else {
var statearr_22305_23649 = state_22275__$1;
(statearr_22305_23649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (9))){
var inst_22252 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22306_23650 = state_22275__$1;
(statearr_22306_23650[(2)] = inst_22252);

(statearr_22306_23650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (5))){
var inst_22213 = cljs.core.deref(mults);
var inst_22214 = cljs.core.vals(inst_22213);
var inst_22215 = cljs.core.seq(inst_22214);
var inst_22216 = inst_22215;
var inst_22217 = null;
var inst_22218 = (0);
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22307 = state_22275;
(statearr_22307[(12)] = inst_22219);

(statearr_22307[(13)] = inst_22216);

(statearr_22307[(14)] = inst_22218);

(statearr_22307[(15)] = inst_22217);

return statearr_22307;
})();
var statearr_22308_23651 = state_22275__$1;
(statearr_22308_23651[(2)] = null);

(statearr_22308_23651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (14))){
var state_22275__$1 = state_22275;
var statearr_22313_23652 = state_22275__$1;
(statearr_22313_23652[(2)] = null);

(statearr_22313_23652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (16))){
var inst_22230 = (state_22275[(10)]);
var inst_22234 = cljs.core.chunk_first(inst_22230);
var inst_22235 = cljs.core.chunk_rest(inst_22230);
var inst_22236 = cljs.core.count(inst_22234);
var inst_22216 = inst_22235;
var inst_22217 = inst_22234;
var inst_22218 = inst_22236;
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22314 = state_22275;
(statearr_22314[(12)] = inst_22219);

(statearr_22314[(13)] = inst_22216);

(statearr_22314[(14)] = inst_22218);

(statearr_22314[(15)] = inst_22217);

return statearr_22314;
})();
var statearr_22315_23653 = state_22275__$1;
(statearr_22315_23653[(2)] = null);

(statearr_22315_23653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (10))){
var inst_22219 = (state_22275[(12)]);
var inst_22216 = (state_22275[(13)]);
var inst_22218 = (state_22275[(14)]);
var inst_22217 = (state_22275[(15)]);
var inst_22224 = cljs.core._nth(inst_22217,inst_22219);
var inst_22225 = cljs.core.async.muxch_STAR_(inst_22224);
var inst_22226 = cljs.core.async.close_BANG_(inst_22225);
var inst_22227 = (inst_22219 + (1));
var tmp22310 = inst_22216;
var tmp22311 = inst_22218;
var tmp22312 = inst_22217;
var inst_22216__$1 = tmp22310;
var inst_22217__$1 = tmp22312;
var inst_22218__$1 = tmp22311;
var inst_22219__$1 = inst_22227;
var state_22275__$1 = (function (){var statearr_22316 = state_22275;
(statearr_22316[(12)] = inst_22219__$1);

(statearr_22316[(13)] = inst_22216__$1);

(statearr_22316[(17)] = inst_22226);

(statearr_22316[(14)] = inst_22218__$1);

(statearr_22316[(15)] = inst_22217__$1);

return statearr_22316;
})();
var statearr_22317_23654 = state_22275__$1;
(statearr_22317_23654[(2)] = null);

(statearr_22317_23654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (18))){
var inst_22245 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22318_23655 = state_22275__$1;
(statearr_22318_23655[(2)] = inst_22245);

(statearr_22318_23655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (8))){
var inst_22219 = (state_22275[(12)]);
var inst_22218 = (state_22275[(14)]);
var inst_22221 = (inst_22219 < inst_22218);
var inst_22222 = inst_22221;
var state_22275__$1 = state_22275;
if(cljs.core.truth_(inst_22222)){
var statearr_22320_23656 = state_22275__$1;
(statearr_22320_23656[(1)] = (10));

} else {
var statearr_22321_23657 = state_22275__$1;
(statearr_22321_23657[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22322[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22322[(1)] = (1));

return statearr_22322;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22275){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22275);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22323){var ex__15031__auto__ = e22323;
var statearr_22324_23672 = state_22275;
(statearr_22324_23672[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22275[(4)]))){
var statearr_22325_23673 = state_22275;
(statearr_22325_23673[(1)] = cljs.core.first((state_22275[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23674 = state_22275;
state_22275 = G__23674;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22326 = f__15222__auto__();
(statearr_22326[(6)] = c__15221__auto___23616);

return statearr_22326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22329 = arguments.length;
switch (G__22329) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22332 = arguments.length;
switch (G__22332) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22336 = arguments.length;
switch (G__22336) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15221__auto___23710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22381){
var state_val_22382 = (state_22381[(1)]);
if((state_val_22382 === (7))){
var state_22381__$1 = state_22381;
var statearr_22383_23711 = state_22381__$1;
(statearr_22383_23711[(2)] = null);

(statearr_22383_23711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (1))){
var state_22381__$1 = state_22381;
var statearr_22384_23712 = state_22381__$1;
(statearr_22384_23712[(2)] = null);

(statearr_22384_23712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (4))){
var inst_22339 = (state_22381[(7)]);
var inst_22341 = (state_22381[(8)]);
var inst_22344 = (inst_22341 < inst_22339);
var state_22381__$1 = state_22381;
if(cljs.core.truth_(inst_22344)){
var statearr_22385_23713 = state_22381__$1;
(statearr_22385_23713[(1)] = (6));

} else {
var statearr_22386_23714 = state_22381__$1;
(statearr_22386_23714[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (15))){
var inst_22367 = (state_22381[(9)]);
var inst_22372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22367);
var state_22381__$1 = state_22381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22381__$1,(17),out,inst_22372);
} else {
if((state_val_22382 === (13))){
var inst_22367 = (state_22381[(9)]);
var inst_22367__$1 = (state_22381[(2)]);
var inst_22368 = cljs.core.some(cljs.core.nil_QMARK_,inst_22367__$1);
var state_22381__$1 = (function (){var statearr_22387 = state_22381;
(statearr_22387[(9)] = inst_22367__$1);

return statearr_22387;
})();
if(cljs.core.truth_(inst_22368)){
var statearr_22388_23717 = state_22381__$1;
(statearr_22388_23717[(1)] = (14));

} else {
var statearr_22390_23718 = state_22381__$1;
(statearr_22390_23718[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (6))){
var state_22381__$1 = state_22381;
var statearr_22391_23720 = state_22381__$1;
(statearr_22391_23720[(2)] = null);

(statearr_22391_23720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (17))){
var inst_22374 = (state_22381[(2)]);
var state_22381__$1 = (function (){var statearr_22394 = state_22381;
(statearr_22394[(10)] = inst_22374);

return statearr_22394;
})();
var statearr_22395_23721 = state_22381__$1;
(statearr_22395_23721[(2)] = null);

(statearr_22395_23721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (3))){
var inst_22379 = (state_22381[(2)]);
var state_22381__$1 = state_22381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22381__$1,inst_22379);
} else {
if((state_val_22382 === (12))){
var _ = (function (){var statearr_22396 = state_22381;
(statearr_22396[(4)] = cljs.core.rest((state_22381[(4)])));

return statearr_22396;
})();
var state_22381__$1 = state_22381;
var ex22393 = (state_22381__$1[(2)]);
var statearr_22397_23722 = state_22381__$1;
(statearr_22397_23722[(5)] = ex22393);


if((ex22393 instanceof Object)){
var statearr_22398_23723 = state_22381__$1;
(statearr_22398_23723[(1)] = (11));

(statearr_22398_23723[(5)] = null);

} else {
throw ex22393;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (2))){
var inst_22338 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22339 = cnt;
var inst_22341 = (0);
var state_22381__$1 = (function (){var statearr_22399 = state_22381;
(statearr_22399[(7)] = inst_22339);

(statearr_22399[(11)] = inst_22338);

(statearr_22399[(8)] = inst_22341);

return statearr_22399;
})();
var statearr_22403_23724 = state_22381__$1;
(statearr_22403_23724[(2)] = null);

(statearr_22403_23724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (11))){
var inst_22346 = (state_22381[(2)]);
var inst_22347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22381__$1 = (function (){var statearr_22404 = state_22381;
(statearr_22404[(12)] = inst_22346);

return statearr_22404;
})();
var statearr_22405_23725 = state_22381__$1;
(statearr_22405_23725[(2)] = inst_22347);

(statearr_22405_23725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (9))){
var inst_22341 = (state_22381[(8)]);
var _ = (function (){var statearr_22409 = state_22381;
(statearr_22409[(4)] = cljs.core.cons((12),(state_22381[(4)])));

return statearr_22409;
})();
var inst_22353 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22341) : chs__$1.call(null,inst_22341));
var inst_22354 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22341) : done.call(null,inst_22341));
var inst_22355 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22353,inst_22354);
var ___$1 = (function (){var statearr_22410 = state_22381;
(statearr_22410[(4)] = cljs.core.rest((state_22381[(4)])));

return statearr_22410;
})();
var state_22381__$1 = state_22381;
var statearr_22414_23729 = state_22381__$1;
(statearr_22414_23729[(2)] = inst_22355);

(statearr_22414_23729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (5))){
var inst_22365 = (state_22381[(2)]);
var state_22381__$1 = (function (){var statearr_22415 = state_22381;
(statearr_22415[(13)] = inst_22365);

return statearr_22415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22381__$1,(13),dchan);
} else {
if((state_val_22382 === (14))){
var inst_22370 = cljs.core.async.close_BANG_(out);
var state_22381__$1 = state_22381;
var statearr_22416_23730 = state_22381__$1;
(statearr_22416_23730[(2)] = inst_22370);

(statearr_22416_23730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (16))){
var inst_22377 = (state_22381[(2)]);
var state_22381__$1 = state_22381;
var statearr_22417_23731 = state_22381__$1;
(statearr_22417_23731[(2)] = inst_22377);

(statearr_22417_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (10))){
var inst_22341 = (state_22381[(8)]);
var inst_22358 = (state_22381[(2)]);
var inst_22359 = (inst_22341 + (1));
var inst_22341__$1 = inst_22359;
var state_22381__$1 = (function (){var statearr_22418 = state_22381;
(statearr_22418[(14)] = inst_22358);

(statearr_22418[(8)] = inst_22341__$1);

return statearr_22418;
})();
var statearr_22420_23732 = state_22381__$1;
(statearr_22420_23732[(2)] = null);

(statearr_22420_23732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22382 === (8))){
var inst_22363 = (state_22381[(2)]);
var state_22381__$1 = state_22381;
var statearr_22422_23733 = state_22381__$1;
(statearr_22422_23733[(2)] = inst_22363);

(statearr_22422_23733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22426[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22426[(1)] = (1));

return statearr_22426;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22381){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22381);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22427){var ex__15031__auto__ = e22427;
var statearr_22430_23734 = state_22381;
(statearr_22430_23734[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22381[(4)]))){
var statearr_22432_23735 = state_22381;
(statearr_22432_23735[(1)] = cljs.core.first((state_22381[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23736 = state_22381;
state_22381 = G__23736;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22434 = f__15222__auto__();
(statearr_22434[(6)] = c__15221__auto___23710);

return statearr_22434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22441 = arguments.length;
switch (G__22441) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22485){
var state_val_22486 = (state_22485[(1)]);
if((state_val_22486 === (7))){
var inst_22460 = (state_22485[(7)]);
var inst_22461 = (state_22485[(8)]);
var inst_22460__$1 = (state_22485[(2)]);
var inst_22461__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22460__$1,(0),null);
var inst_22462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22460__$1,(1),null);
var inst_22463 = (inst_22461__$1 == null);
var state_22485__$1 = (function (){var statearr_22493 = state_22485;
(statearr_22493[(9)] = inst_22462);

(statearr_22493[(7)] = inst_22460__$1);

(statearr_22493[(8)] = inst_22461__$1);

return statearr_22493;
})();
if(cljs.core.truth_(inst_22463)){
var statearr_22495_23739 = state_22485__$1;
(statearr_22495_23739[(1)] = (8));

} else {
var statearr_22496_23740 = state_22485__$1;
(statearr_22496_23740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (1))){
var inst_22449 = cljs.core.vec(chs);
var inst_22450 = inst_22449;
var state_22485__$1 = (function (){var statearr_22498 = state_22485;
(statearr_22498[(10)] = inst_22450);

return statearr_22498;
})();
var statearr_22499_23742 = state_22485__$1;
(statearr_22499_23742[(2)] = null);

(statearr_22499_23742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (4))){
var inst_22450 = (state_22485[(10)]);
var state_22485__$1 = state_22485;
return cljs.core.async.ioc_alts_BANG_(state_22485__$1,(7),inst_22450);
} else {
if((state_val_22486 === (6))){
var inst_22480 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22504_23747 = state_22485__$1;
(statearr_22504_23747[(2)] = inst_22480);

(statearr_22504_23747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (3))){
var inst_22482 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22485__$1,inst_22482);
} else {
if((state_val_22486 === (2))){
var inst_22450 = (state_22485[(10)]);
var inst_22452 = cljs.core.count(inst_22450);
var inst_22453 = (inst_22452 > (0));
var state_22485__$1 = state_22485;
if(cljs.core.truth_(inst_22453)){
var statearr_22509_23748 = state_22485__$1;
(statearr_22509_23748[(1)] = (4));

} else {
var statearr_22511_23749 = state_22485__$1;
(statearr_22511_23749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (11))){
var inst_22450 = (state_22485[(10)]);
var inst_22473 = (state_22485[(2)]);
var tmp22505 = inst_22450;
var inst_22450__$1 = tmp22505;
var state_22485__$1 = (function (){var statearr_22514 = state_22485;
(statearr_22514[(10)] = inst_22450__$1);

(statearr_22514[(11)] = inst_22473);

return statearr_22514;
})();
var statearr_22516_23750 = state_22485__$1;
(statearr_22516_23750[(2)] = null);

(statearr_22516_23750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (9))){
var inst_22461 = (state_22485[(8)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22485__$1,(11),out,inst_22461);
} else {
if((state_val_22486 === (5))){
var inst_22478 = cljs.core.async.close_BANG_(out);
var state_22485__$1 = state_22485;
var statearr_22522_23751 = state_22485__$1;
(statearr_22522_23751[(2)] = inst_22478);

(statearr_22522_23751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (10))){
var inst_22476 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22526_23752 = state_22485__$1;
(statearr_22526_23752[(2)] = inst_22476);

(statearr_22526_23752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (8))){
var inst_22450 = (state_22485[(10)]);
var inst_22462 = (state_22485[(9)]);
var inst_22460 = (state_22485[(7)]);
var inst_22461 = (state_22485[(8)]);
var inst_22468 = (function (){var cs = inst_22450;
var vec__22456 = inst_22460;
var v = inst_22461;
var c = inst_22462;
return (function (p1__22438_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22438_SHARP_);
});
})();
var inst_22469 = cljs.core.filterv(inst_22468,inst_22450);
var inst_22450__$1 = inst_22469;
var state_22485__$1 = (function (){var statearr_22528 = state_22485;
(statearr_22528[(10)] = inst_22450__$1);

return statearr_22528;
})();
var statearr_22531_23753 = state_22485__$1;
(statearr_22531_23753[(2)] = null);

(statearr_22531_23753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22534[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22534[(1)] = (1));

return statearr_22534;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22485){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22485);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22535){var ex__15031__auto__ = e22535;
var statearr_22537_23754 = state_22485;
(statearr_22537_23754[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22485[(4)]))){
var statearr_22540_23755 = state_22485;
(statearr_22540_23755[(1)] = cljs.core.first((state_22485[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23757 = state_22485;
state_22485 = G__23757;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22542 = f__15222__auto__();
(statearr_22542[(6)] = c__15221__auto___23738);

return statearr_22542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22548 = arguments.length;
switch (G__22548) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (7))){
var inst_22560 = (state_22579[(7)]);
var inst_22560__$1 = (state_22579[(2)]);
var inst_22562 = (inst_22560__$1 == null);
var inst_22563 = cljs.core.not(inst_22562);
var state_22579__$1 = (function (){var statearr_22585 = state_22579;
(statearr_22585[(7)] = inst_22560__$1);

return statearr_22585;
})();
if(inst_22563){
var statearr_22586_23761 = state_22579__$1;
(statearr_22586_23761[(1)] = (8));

} else {
var statearr_22587_23762 = state_22579__$1;
(statearr_22587_23762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (1))){
var inst_22553 = (0);
var state_22579__$1 = (function (){var statearr_22588 = state_22579;
(statearr_22588[(8)] = inst_22553);

return statearr_22588;
})();
var statearr_22589_23764 = state_22579__$1;
(statearr_22589_23764[(2)] = null);

(statearr_22589_23764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (4))){
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22579__$1,(7),ch);
} else {
if((state_val_22580 === (6))){
var inst_22574 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22593_23768 = state_22579__$1;
(statearr_22593_23768[(2)] = inst_22574);

(statearr_22593_23768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (3))){
var inst_22576 = (state_22579[(2)]);
var inst_22577 = cljs.core.async.close_BANG_(out);
var state_22579__$1 = (function (){var statearr_22595 = state_22579;
(statearr_22595[(9)] = inst_22576);

return statearr_22595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (2))){
var inst_22553 = (state_22579[(8)]);
var inst_22556 = (inst_22553 < n);
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22556)){
var statearr_22597_23775 = state_22579__$1;
(statearr_22597_23775[(1)] = (4));

} else {
var statearr_22600_23776 = state_22579__$1;
(statearr_22600_23776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (11))){
var inst_22553 = (state_22579[(8)]);
var inst_22566 = (state_22579[(2)]);
var inst_22567 = (inst_22553 + (1));
var inst_22553__$1 = inst_22567;
var state_22579__$1 = (function (){var statearr_22602 = state_22579;
(statearr_22602[(8)] = inst_22553__$1);

(statearr_22602[(10)] = inst_22566);

return statearr_22602;
})();
var statearr_22603_23780 = state_22579__$1;
(statearr_22603_23780[(2)] = null);

(statearr_22603_23780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (9))){
var state_22579__$1 = state_22579;
var statearr_22605_23781 = state_22579__$1;
(statearr_22605_23781[(2)] = null);

(statearr_22605_23781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (5))){
var state_22579__$1 = state_22579;
var statearr_22606_23782 = state_22579__$1;
(statearr_22606_23782[(2)] = null);

(statearr_22606_23782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (10))){
var inst_22571 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22609_23783 = state_22579__$1;
(statearr_22609_23783[(2)] = inst_22571);

(statearr_22609_23783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (8))){
var inst_22560 = (state_22579[(7)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22579__$1,(11),out,inst_22560);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22611[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22611[(1)] = (1));

return statearr_22611;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22579){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22579);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22613){var ex__15031__auto__ = e22613;
var statearr_22614_23784 = state_22579;
(statearr_22614_23784[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22579[(4)]))){
var statearr_22615_23785 = state_22579;
(statearr_22615_23785[(1)] = cljs.core.first((state_22579[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23786 = state_22579;
state_22579 = G__23786;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22619 = f__15222__auto__();
(statearr_22619[(6)] = c__15221__auto___23760);

return statearr_22619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22634 = (function (f,ch,meta22626,_,fn1,meta22635){
this.f = f;
this.ch = ch;
this.meta22626 = meta22626;
this._ = _;
this.fn1 = fn1;
this.meta22635 = meta22635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22636,meta22635__$1){
var self__ = this;
var _22636__$1 = this;
return (new cljs.core.async.t_cljs$core$async22634(self__.f,self__.ch,self__.meta22626,self__._,self__.fn1,meta22635__$1));
}));

(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22636){
var self__ = this;
var _22636__$1 = this;
return self__.meta22635;
}));

(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22621_SHARP_){
var G__22645 = (((p1__22621_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22621_SHARP_) : self__.f.call(null,p1__22621_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22645) : f1.call(null,G__22645));
});
}));

(cljs.core.async.t_cljs$core$async22634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22626","meta22626",-1807811573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22625","cljs.core.async/t_cljs$core$async22625",983905872,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22635","meta22635",-1147545310,null)], null);
}));

(cljs.core.async.t_cljs$core$async22634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22634");

(cljs.core.async.t_cljs$core$async22634.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22634.
 */
cljs.core.async.__GT_t_cljs$core$async22634 = (function cljs$core$async$__GT_t_cljs$core$async22634(f,ch,meta22626,_,fn1,meta22635){
return (new cljs.core.async.t_cljs$core$async22634(f,ch,meta22626,_,fn1,meta22635));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22625 = (function (f,ch,meta22626){
this.f = f;
this.ch = ch;
this.meta22626 = meta22626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22627,meta22626__$1){
var self__ = this;
var _22627__$1 = this;
return (new cljs.core.async.t_cljs$core$async22625(self__.f,self__.ch,meta22626__$1));
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22627){
var self__ = this;
var _22627__$1 = this;
return self__.meta22626;
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async22634(self__.f,self__.ch,self__.meta22626,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22654 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22654) : self__.f.call(null,G__22654));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22626","meta22626",-1807811573,null)], null);
}));

(cljs.core.async.t_cljs$core$async22625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22625");

(cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22625.
 */
cljs.core.async.__GT_t_cljs$core$async22625 = (function cljs$core$async$__GT_t_cljs$core$async22625(f,ch,meta22626){
return (new cljs.core.async.t_cljs$core$async22625(f,ch,meta22626));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22625(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22665 = (function (f,ch,meta22666){
this.f = f;
this.ch = ch;
this.meta22666 = meta22666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22667,meta22666__$1){
var self__ = this;
var _22667__$1 = this;
return (new cljs.core.async.t_cljs$core$async22665(self__.f,self__.ch,meta22666__$1));
}));

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22667){
var self__ = this;
var _22667__$1 = this;
return self__.meta22666;
}));

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22666","meta22666",-1094681433,null)], null);
}));

(cljs.core.async.t_cljs$core$async22665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22665");

(cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22665.
 */
cljs.core.async.__GT_t_cljs$core$async22665 = (function cljs$core$async$__GT_t_cljs$core$async22665(f,ch,meta22666){
return (new cljs.core.async.t_cljs$core$async22665(f,ch,meta22666));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22665(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22687 = (function (p,ch,meta22688){
this.p = p;
this.ch = ch;
this.meta22688 = meta22688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22689,meta22688__$1){
var self__ = this;
var _22689__$1 = this;
return (new cljs.core.async.t_cljs$core$async22687(self__.p,self__.ch,meta22688__$1));
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22689){
var self__ = this;
var _22689__$1 = this;
return self__.meta22688;
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22688","meta22688",-1061931682,null)], null);
}));

(cljs.core.async.t_cljs$core$async22687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22687");

(cljs.core.async.t_cljs$core$async22687.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22687.
 */
cljs.core.async.__GT_t_cljs$core$async22687 = (function cljs$core$async$__GT_t_cljs$core$async22687(p,ch,meta22688){
return (new cljs.core.async.t_cljs$core$async22687(p,ch,meta22688));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async22687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22718 = arguments.length;
switch (G__22718) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22739){
var state_val_22740 = (state_22739[(1)]);
if((state_val_22740 === (7))){
var inst_22735 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22743_23803 = state_22739__$1;
(statearr_22743_23803[(2)] = inst_22735);

(statearr_22743_23803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (1))){
var state_22739__$1 = state_22739;
var statearr_22744_23805 = state_22739__$1;
(statearr_22744_23805[(2)] = null);

(statearr_22744_23805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (4))){
var inst_22721 = (state_22739[(7)]);
var inst_22721__$1 = (state_22739[(2)]);
var inst_22722 = (inst_22721__$1 == null);
var state_22739__$1 = (function (){var statearr_22745 = state_22739;
(statearr_22745[(7)] = inst_22721__$1);

return statearr_22745;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22746_23806 = state_22739__$1;
(statearr_22746_23806[(1)] = (5));

} else {
var statearr_22747_23807 = state_22739__$1;
(statearr_22747_23807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (6))){
var inst_22721 = (state_22739[(7)]);
var inst_22726 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22721) : p.call(null,inst_22721));
var state_22739__$1 = state_22739;
if(cljs.core.truth_(inst_22726)){
var statearr_22748_23808 = state_22739__$1;
(statearr_22748_23808[(1)] = (8));

} else {
var statearr_22749_23809 = state_22739__$1;
(statearr_22749_23809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (3))){
var inst_22737 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22739__$1,inst_22737);
} else {
if((state_val_22740 === (2))){
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22739__$1,(4),ch);
} else {
if((state_val_22740 === (11))){
var inst_22729 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22750_23810 = state_22739__$1;
(statearr_22750_23810[(2)] = inst_22729);

(statearr_22750_23810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (9))){
var state_22739__$1 = state_22739;
var statearr_22751_23811 = state_22739__$1;
(statearr_22751_23811[(2)] = null);

(statearr_22751_23811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (5))){
var inst_22724 = cljs.core.async.close_BANG_(out);
var state_22739__$1 = state_22739;
var statearr_22752_23812 = state_22739__$1;
(statearr_22752_23812[(2)] = inst_22724);

(statearr_22752_23812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (10))){
var inst_22732 = (state_22739[(2)]);
var state_22739__$1 = (function (){var statearr_22753 = state_22739;
(statearr_22753[(8)] = inst_22732);

return statearr_22753;
})();
var statearr_22754_23813 = state_22739__$1;
(statearr_22754_23813[(2)] = null);

(statearr_22754_23813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (8))){
var inst_22721 = (state_22739[(7)]);
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22739__$1,(11),out,inst_22721);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22755 = [null,null,null,null,null,null,null,null,null];
(statearr_22755[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22755[(1)] = (1));

return statearr_22755;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22739){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22739);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22756){var ex__15031__auto__ = e22756;
var statearr_22757_23821 = state_22739;
(statearr_22757_23821[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22739[(4)]))){
var statearr_22758_23822 = state_22739;
(statearr_22758_23822[(1)] = cljs.core.first((state_22739[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23823 = state_22739;
state_22739 = G__23823;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22759 = f__15222__auto__();
(statearr_22759[(6)] = c__15221__auto___23801);

return statearr_22759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22761 = arguments.length;
switch (G__22761) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22823){
var state_val_22824 = (state_22823[(1)]);
if((state_val_22824 === (7))){
var inst_22819 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22827_23828 = state_22823__$1;
(statearr_22827_23828[(2)] = inst_22819);

(statearr_22827_23828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (20))){
var inst_22789 = (state_22823[(7)]);
var inst_22800 = (state_22823[(2)]);
var inst_22801 = cljs.core.next(inst_22789);
var inst_22775 = inst_22801;
var inst_22776 = null;
var inst_22777 = (0);
var inst_22778 = (0);
var state_22823__$1 = (function (){var statearr_22828 = state_22823;
(statearr_22828[(8)] = inst_22775);

(statearr_22828[(9)] = inst_22777);

(statearr_22828[(10)] = inst_22800);

(statearr_22828[(11)] = inst_22778);

(statearr_22828[(12)] = inst_22776);

return statearr_22828;
})();
var statearr_22829_23829 = state_22823__$1;
(statearr_22829_23829[(2)] = null);

(statearr_22829_23829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (1))){
var state_22823__$1 = state_22823;
var statearr_22830_23833 = state_22823__$1;
(statearr_22830_23833[(2)] = null);

(statearr_22830_23833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (4))){
var inst_22764 = (state_22823[(13)]);
var inst_22764__$1 = (state_22823[(2)]);
var inst_22765 = (inst_22764__$1 == null);
var state_22823__$1 = (function (){var statearr_22831 = state_22823;
(statearr_22831[(13)] = inst_22764__$1);

return statearr_22831;
})();
if(cljs.core.truth_(inst_22765)){
var statearr_22832_23834 = state_22823__$1;
(statearr_22832_23834[(1)] = (5));

} else {
var statearr_22833_23835 = state_22823__$1;
(statearr_22833_23835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (15))){
var state_22823__$1 = state_22823;
var statearr_22837_23839 = state_22823__$1;
(statearr_22837_23839[(2)] = null);

(statearr_22837_23839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (21))){
var state_22823__$1 = state_22823;
var statearr_22838_23840 = state_22823__$1;
(statearr_22838_23840[(2)] = null);

(statearr_22838_23840[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (13))){
var inst_22775 = (state_22823[(8)]);
var inst_22777 = (state_22823[(9)]);
var inst_22778 = (state_22823[(11)]);
var inst_22776 = (state_22823[(12)]);
var inst_22785 = (state_22823[(2)]);
var inst_22786 = (inst_22778 + (1));
var tmp22834 = inst_22775;
var tmp22835 = inst_22777;
var tmp22836 = inst_22776;
var inst_22775__$1 = tmp22834;
var inst_22776__$1 = tmp22836;
var inst_22777__$1 = tmp22835;
var inst_22778__$1 = inst_22786;
var state_22823__$1 = (function (){var statearr_22839 = state_22823;
(statearr_22839[(8)] = inst_22775__$1);

(statearr_22839[(9)] = inst_22777__$1);

(statearr_22839[(11)] = inst_22778__$1);

(statearr_22839[(12)] = inst_22776__$1);

(statearr_22839[(14)] = inst_22785);

return statearr_22839;
})();
var statearr_22840_23845 = state_22823__$1;
(statearr_22840_23845[(2)] = null);

(statearr_22840_23845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (22))){
var state_22823__$1 = state_22823;
var statearr_22841_23849 = state_22823__$1;
(statearr_22841_23849[(2)] = null);

(statearr_22841_23849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (6))){
var inst_22764 = (state_22823[(13)]);
var inst_22773 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22764) : f.call(null,inst_22764));
var inst_22774 = cljs.core.seq(inst_22773);
var inst_22775 = inst_22774;
var inst_22776 = null;
var inst_22777 = (0);
var inst_22778 = (0);
var state_22823__$1 = (function (){var statearr_22842 = state_22823;
(statearr_22842[(8)] = inst_22775);

(statearr_22842[(9)] = inst_22777);

(statearr_22842[(11)] = inst_22778);

(statearr_22842[(12)] = inst_22776);

return statearr_22842;
})();
var statearr_22843_23850 = state_22823__$1;
(statearr_22843_23850[(2)] = null);

(statearr_22843_23850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (17))){
var inst_22789 = (state_22823[(7)]);
var inst_22793 = cljs.core.chunk_first(inst_22789);
var inst_22794 = cljs.core.chunk_rest(inst_22789);
var inst_22795 = cljs.core.count(inst_22793);
var inst_22775 = inst_22794;
var inst_22776 = inst_22793;
var inst_22777 = inst_22795;
var inst_22778 = (0);
var state_22823__$1 = (function (){var statearr_22844 = state_22823;
(statearr_22844[(8)] = inst_22775);

(statearr_22844[(9)] = inst_22777);

(statearr_22844[(11)] = inst_22778);

(statearr_22844[(12)] = inst_22776);

return statearr_22844;
})();
var statearr_22845_23851 = state_22823__$1;
(statearr_22845_23851[(2)] = null);

(statearr_22845_23851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (3))){
var inst_22821 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22823__$1,inst_22821);
} else {
if((state_val_22824 === (12))){
var inst_22809 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22846_23852 = state_22823__$1;
(statearr_22846_23852[(2)] = inst_22809);

(statearr_22846_23852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (2))){
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22823__$1,(4),in$);
} else {
if((state_val_22824 === (23))){
var inst_22817 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22847_23860 = state_22823__$1;
(statearr_22847_23860[(2)] = inst_22817);

(statearr_22847_23860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (19))){
var inst_22804 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22848_23864 = state_22823__$1;
(statearr_22848_23864[(2)] = inst_22804);

(statearr_22848_23864[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (11))){
var inst_22775 = (state_22823[(8)]);
var inst_22789 = (state_22823[(7)]);
var inst_22789__$1 = cljs.core.seq(inst_22775);
var state_22823__$1 = (function (){var statearr_22849 = state_22823;
(statearr_22849[(7)] = inst_22789__$1);

return statearr_22849;
})();
if(inst_22789__$1){
var statearr_22850_23866 = state_22823__$1;
(statearr_22850_23866[(1)] = (14));

} else {
var statearr_22851_23870 = state_22823__$1;
(statearr_22851_23870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (9))){
var inst_22811 = (state_22823[(2)]);
var inst_22812 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22823__$1 = (function (){var statearr_22852 = state_22823;
(statearr_22852[(15)] = inst_22811);

return statearr_22852;
})();
if(cljs.core.truth_(inst_22812)){
var statearr_22853_23872 = state_22823__$1;
(statearr_22853_23872[(1)] = (21));

} else {
var statearr_22854_23873 = state_22823__$1;
(statearr_22854_23873[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (5))){
var inst_22767 = cljs.core.async.close_BANG_(out);
var state_22823__$1 = state_22823;
var statearr_22855_23874 = state_22823__$1;
(statearr_22855_23874[(2)] = inst_22767);

(statearr_22855_23874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (14))){
var inst_22789 = (state_22823[(7)]);
var inst_22791 = cljs.core.chunked_seq_QMARK_(inst_22789);
var state_22823__$1 = state_22823;
if(inst_22791){
var statearr_22856_23875 = state_22823__$1;
(statearr_22856_23875[(1)] = (17));

} else {
var statearr_22857_23876 = state_22823__$1;
(statearr_22857_23876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (16))){
var inst_22807 = (state_22823[(2)]);
var state_22823__$1 = state_22823;
var statearr_22859_23877 = state_22823__$1;
(statearr_22859_23877[(2)] = inst_22807);

(statearr_22859_23877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22824 === (10))){
var inst_22778 = (state_22823[(11)]);
var inst_22776 = (state_22823[(12)]);
var inst_22783 = cljs.core._nth(inst_22776,inst_22778);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22823__$1,(13),out,inst_22783);
} else {
if((state_val_22824 === (18))){
var inst_22789 = (state_22823[(7)]);
var inst_22798 = cljs.core.first(inst_22789);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22823__$1,(20),out,inst_22798);
} else {
if((state_val_22824 === (8))){
var inst_22777 = (state_22823[(9)]);
var inst_22778 = (state_22823[(11)]);
var inst_22780 = (inst_22778 < inst_22777);
var inst_22781 = inst_22780;
var state_22823__$1 = state_22823;
if(cljs.core.truth_(inst_22781)){
var statearr_22861_23885 = state_22823__$1;
(statearr_22861_23885[(1)] = (10));

} else {
var statearr_22862_23886 = state_22823__$1;
(statearr_22862_23886[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____0 = (function (){
var statearr_22867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22867[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__);

(statearr_22867[(1)] = (1));

return statearr_22867;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____1 = (function (state_22823){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22823);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22868){var ex__15031__auto__ = e22868;
var statearr_22869_23890 = state_22823;
(statearr_22869_23890[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22823[(4)]))){
var statearr_22874_23891 = state_22823;
(statearr_22874_23891[(1)] = cljs.core.first((state_22823[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23892 = state_22823;
state_22823 = G__23892;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__ = function(state_22823){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____1.call(this,state_22823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15028__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22876 = f__15222__auto__();
(statearr_22876[(6)] = c__15221__auto__);

return statearr_22876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));

return c__15221__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22878 = arguments.length;
switch (G__22878) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22880 = arguments.length;
switch (G__22880) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22882 = arguments.length;
switch (G__22882) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22914){
var state_val_22915 = (state_22914[(1)]);
if((state_val_22915 === (7))){
var inst_22908 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22916_23914 = state_22914__$1;
(statearr_22916_23914[(2)] = inst_22908);

(statearr_22916_23914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (1))){
var inst_22887 = null;
var state_22914__$1 = (function (){var statearr_22920 = state_22914;
(statearr_22920[(7)] = inst_22887);

return statearr_22920;
})();
var statearr_22922_23919 = state_22914__$1;
(statearr_22922_23919[(2)] = null);

(statearr_22922_23919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (4))){
var inst_22890 = (state_22914[(8)]);
var inst_22890__$1 = (state_22914[(2)]);
var inst_22894 = (inst_22890__$1 == null);
var inst_22895 = cljs.core.not(inst_22894);
var state_22914__$1 = (function (){var statearr_22923 = state_22914;
(statearr_22923[(8)] = inst_22890__$1);

return statearr_22923;
})();
if(inst_22895){
var statearr_22924_23922 = state_22914__$1;
(statearr_22924_23922[(1)] = (5));

} else {
var statearr_22928_23923 = state_22914__$1;
(statearr_22928_23923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (6))){
var state_22914__$1 = state_22914;
var statearr_22930_23924 = state_22914__$1;
(statearr_22930_23924[(2)] = null);

(statearr_22930_23924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (3))){
var inst_22911 = (state_22914[(2)]);
var inst_22912 = cljs.core.async.close_BANG_(out);
var state_22914__$1 = (function (){var statearr_22931 = state_22914;
(statearr_22931[(9)] = inst_22911);

return statearr_22931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22914__$1,inst_22912);
} else {
if((state_val_22915 === (2))){
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22914__$1,(4),ch);
} else {
if((state_val_22915 === (11))){
var inst_22890 = (state_22914[(8)]);
var inst_22902 = (state_22914[(2)]);
var inst_22887 = inst_22890;
var state_22914__$1 = (function (){var statearr_22932 = state_22914;
(statearr_22932[(10)] = inst_22902);

(statearr_22932[(7)] = inst_22887);

return statearr_22932;
})();
var statearr_22933_23925 = state_22914__$1;
(statearr_22933_23925[(2)] = null);

(statearr_22933_23925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (9))){
var inst_22890 = (state_22914[(8)]);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22914__$1,(11),out,inst_22890);
} else {
if((state_val_22915 === (5))){
var inst_22887 = (state_22914[(7)]);
var inst_22890 = (state_22914[(8)]);
var inst_22897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22890,inst_22887);
var state_22914__$1 = state_22914;
if(inst_22897){
var statearr_22935_23926 = state_22914__$1;
(statearr_22935_23926[(1)] = (8));

} else {
var statearr_22936_23927 = state_22914__$1;
(statearr_22936_23927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (10))){
var inst_22905 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22937_23928 = state_22914__$1;
(statearr_22937_23928[(2)] = inst_22905);

(statearr_22937_23928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (8))){
var inst_22887 = (state_22914[(7)]);
var tmp22934 = inst_22887;
var inst_22887__$1 = tmp22934;
var state_22914__$1 = (function (){var statearr_22938 = state_22914;
(statearr_22938[(7)] = inst_22887__$1);

return statearr_22938;
})();
var statearr_22939_23933 = state_22914__$1;
(statearr_22939_23933[(2)] = null);

(statearr_22939_23933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_22940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22940[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_22940[(1)] = (1));

return statearr_22940;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22914){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22914);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e22941){var ex__15031__auto__ = e22941;
var statearr_22942_23935 = state_22914;
(statearr_22942_23935[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22914[(4)]))){
var statearr_22943_23936 = state_22914;
(statearr_22943_23936[(1)] = cljs.core.first((state_22914[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23937 = state_22914;
state_22914 = G__23937;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_22944 = f__15222__auto__();
(statearr_22944[(6)] = c__15221__auto___23913);

return statearr_22944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22946 = arguments.length;
switch (G__22946) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22991_23940 = state_22988__$1;
(statearr_22991_23940[(2)] = inst_22984);

(statearr_22991_23940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var inst_22947 = (new Array(n));
var inst_22948 = inst_22947;
var inst_22949 = (0);
var state_22988__$1 = (function (){var statearr_22992 = state_22988;
(statearr_22992[(7)] = inst_22948);

(statearr_22992[(8)] = inst_22949);

return statearr_22992;
})();
var statearr_22993_23942 = state_22988__$1;
(statearr_22993_23942[(2)] = null);

(statearr_22993_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22955 = (state_22988[(9)]);
var inst_22955__$1 = (state_22988[(2)]);
var inst_22956 = (inst_22955__$1 == null);
var inst_22957 = cljs.core.not(inst_22956);
var state_22988__$1 = (function (){var statearr_22994 = state_22988;
(statearr_22994[(9)] = inst_22955__$1);

return statearr_22994;
})();
if(inst_22957){
var statearr_22995_23943 = state_22988__$1;
(statearr_22995_23943[(1)] = (5));

} else {
var statearr_22996_23944 = state_22988__$1;
(statearr_22996_23944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (15))){
var inst_22978 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23001_23946 = state_22988__$1;
(statearr_23001_23946[(2)] = inst_22978);

(statearr_23001_23946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (13))){
var state_22988__$1 = state_22988;
var statearr_23002_23950 = state_22988__$1;
(statearr_23002_23950[(2)] = null);

(statearr_23002_23950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var inst_22949 = (state_22988[(8)]);
var inst_22974 = (inst_22949 > (0));
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22974)){
var statearr_23006_23951 = state_22988__$1;
(statearr_23006_23951[(1)] = (12));

} else {
var statearr_23008_23952 = state_22988__$1;
(statearr_23008_23952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (12))){
var inst_22948 = (state_22988[(7)]);
var inst_22976 = cljs.core.vec(inst_22948);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22988__$1,(15),out,inst_22976);
} else {
if((state_val_22989 === (2))){
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22988__$1,(4),ch);
} else {
if((state_val_22989 === (11))){
var inst_22968 = (state_22988[(2)]);
var inst_22969 = (new Array(n));
var inst_22948 = inst_22969;
var inst_22949 = (0);
var state_22988__$1 = (function (){var statearr_23012 = state_22988;
(statearr_23012[(7)] = inst_22948);

(statearr_23012[(8)] = inst_22949);

(statearr_23012[(10)] = inst_22968);

return statearr_23012;
})();
var statearr_23014_23953 = state_22988__$1;
(statearr_23014_23953[(2)] = null);

(statearr_23014_23953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (9))){
var inst_22948 = (state_22988[(7)]);
var inst_22966 = cljs.core.vec(inst_22948);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22988__$1,(11),out,inst_22966);
} else {
if((state_val_22989 === (5))){
var inst_22961 = (state_22988[(11)]);
var inst_22948 = (state_22988[(7)]);
var inst_22955 = (state_22988[(9)]);
var inst_22949 = (state_22988[(8)]);
var inst_22959 = (inst_22948[inst_22949] = inst_22955);
var inst_22961__$1 = (inst_22949 + (1));
var inst_22962 = (inst_22961__$1 < n);
var state_22988__$1 = (function (){var statearr_23019 = state_22988;
(statearr_23019[(11)] = inst_22961__$1);

(statearr_23019[(12)] = inst_22959);

return statearr_23019;
})();
if(cljs.core.truth_(inst_22962)){
var statearr_23020_23954 = state_22988__$1;
(statearr_23020_23954[(1)] = (8));

} else {
var statearr_23021_23955 = state_22988__$1;
(statearr_23021_23955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (14))){
var inst_22981 = (state_22988[(2)]);
var inst_22982 = cljs.core.async.close_BANG_(out);
var state_22988__$1 = (function (){var statearr_23023 = state_22988;
(statearr_23023[(13)] = inst_22981);

return statearr_23023;
})();
var statearr_23025_23956 = state_22988__$1;
(statearr_23025_23956[(2)] = inst_22982);

(statearr_23025_23956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var inst_22972 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23029_23957 = state_22988__$1;
(statearr_23029_23957[(2)] = inst_22972);

(statearr_23029_23957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22961 = (state_22988[(11)]);
var inst_22948 = (state_22988[(7)]);
var tmp23022 = inst_22948;
var inst_22948__$1 = tmp23022;
var inst_22949 = inst_22961;
var state_22988__$1 = (function (){var statearr_23030 = state_22988;
(statearr_23030[(7)] = inst_22948__$1);

(statearr_23030[(8)] = inst_22949);

return statearr_23030;
})();
var statearr_23031_23958 = state_22988__$1;
(statearr_23031_23958[(2)] = null);

(statearr_23031_23958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_23033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23033[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_23033[(1)] = (1));

return statearr_23033;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_22988){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_22988);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e23034){var ex__15031__auto__ = e23034;
var statearr_23035_23959 = state_22988;
(statearr_23035_23959[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_22988[(4)]))){
var statearr_23036_23960 = state_22988;
(statearr_23036_23960[(1)] = cljs.core.first((state_22988[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23961 = state_22988;
state_22988 = G__23961;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_23037 = f__15222__auto__();
(statearr_23037[(6)] = c__15221__auto___23939);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23047 = arguments.length;
switch (G__23047) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15221__auto___23963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15222__auto__ = (function (){var switch__15027__auto__ = (function (state_23100){
var state_val_23101 = (state_23100[(1)]);
if((state_val_23101 === (7))){
var inst_23096 = (state_23100[(2)]);
var state_23100__$1 = state_23100;
var statearr_23106_23964 = state_23100__$1;
(statearr_23106_23964[(2)] = inst_23096);

(statearr_23106_23964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (1))){
var inst_23052 = [];
var inst_23053 = inst_23052;
var inst_23054 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23100__$1 = (function (){var statearr_23107 = state_23100;
(statearr_23107[(7)] = inst_23053);

(statearr_23107[(8)] = inst_23054);

return statearr_23107;
})();
var statearr_23108_23966 = state_23100__$1;
(statearr_23108_23966[(2)] = null);

(statearr_23108_23966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (4))){
var inst_23057 = (state_23100[(9)]);
var inst_23057__$1 = (state_23100[(2)]);
var inst_23058 = (inst_23057__$1 == null);
var inst_23059 = cljs.core.not(inst_23058);
var state_23100__$1 = (function (){var statearr_23110 = state_23100;
(statearr_23110[(9)] = inst_23057__$1);

return statearr_23110;
})();
if(inst_23059){
var statearr_23111_23968 = state_23100__$1;
(statearr_23111_23968[(1)] = (5));

} else {
var statearr_23112_23969 = state_23100__$1;
(statearr_23112_23969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (15))){
var inst_23053 = (state_23100[(7)]);
var inst_23088 = cljs.core.vec(inst_23053);
var state_23100__$1 = state_23100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23100__$1,(18),out,inst_23088);
} else {
if((state_val_23101 === (13))){
var inst_23083 = (state_23100[(2)]);
var state_23100__$1 = state_23100;
var statearr_23113_23970 = state_23100__$1;
(statearr_23113_23970[(2)] = inst_23083);

(statearr_23113_23970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (6))){
var inst_23053 = (state_23100[(7)]);
var inst_23085 = inst_23053.length;
var inst_23086 = (inst_23085 > (0));
var state_23100__$1 = state_23100;
if(cljs.core.truth_(inst_23086)){
var statearr_23114_23971 = state_23100__$1;
(statearr_23114_23971[(1)] = (15));

} else {
var statearr_23119_23972 = state_23100__$1;
(statearr_23119_23972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (17))){
var inst_23093 = (state_23100[(2)]);
var inst_23094 = cljs.core.async.close_BANG_(out);
var state_23100__$1 = (function (){var statearr_23123 = state_23100;
(statearr_23123[(10)] = inst_23093);

return statearr_23123;
})();
var statearr_23124_23973 = state_23100__$1;
(statearr_23124_23973[(2)] = inst_23094);

(statearr_23124_23973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (3))){
var inst_23098 = (state_23100[(2)]);
var state_23100__$1 = state_23100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23100__$1,inst_23098);
} else {
if((state_val_23101 === (12))){
var inst_23053 = (state_23100[(7)]);
var inst_23076 = cljs.core.vec(inst_23053);
var state_23100__$1 = state_23100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23100__$1,(14),out,inst_23076);
} else {
if((state_val_23101 === (2))){
var state_23100__$1 = state_23100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23100__$1,(4),ch);
} else {
if((state_val_23101 === (11))){
var inst_23057 = (state_23100[(9)]);
var inst_23053 = (state_23100[(7)]);
var inst_23064 = (state_23100[(11)]);
var inst_23073 = inst_23053.push(inst_23057);
var tmp23126 = inst_23053;
var inst_23053__$1 = tmp23126;
var inst_23054 = inst_23064;
var state_23100__$1 = (function (){var statearr_23131 = state_23100;
(statearr_23131[(7)] = inst_23053__$1);

(statearr_23131[(8)] = inst_23054);

(statearr_23131[(12)] = inst_23073);

return statearr_23131;
})();
var statearr_23132_23974 = state_23100__$1;
(statearr_23132_23974[(2)] = null);

(statearr_23132_23974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (9))){
var inst_23054 = (state_23100[(8)]);
var inst_23068 = cljs.core.keyword_identical_QMARK_(inst_23054,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23100__$1 = state_23100;
var statearr_23136_23975 = state_23100__$1;
(statearr_23136_23975[(2)] = inst_23068);

(statearr_23136_23975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (5))){
var inst_23057 = (state_23100[(9)]);
var inst_23054 = (state_23100[(8)]);
var inst_23064 = (state_23100[(11)]);
var inst_23065 = (state_23100[(13)]);
var inst_23064__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23057) : f.call(null,inst_23057));
var inst_23065__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23064__$1,inst_23054);
var state_23100__$1 = (function (){var statearr_23138 = state_23100;
(statearr_23138[(11)] = inst_23064__$1);

(statearr_23138[(13)] = inst_23065__$1);

return statearr_23138;
})();
if(inst_23065__$1){
var statearr_23139_23977 = state_23100__$1;
(statearr_23139_23977[(1)] = (8));

} else {
var statearr_23140_23978 = state_23100__$1;
(statearr_23140_23978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (14))){
var inst_23057 = (state_23100[(9)]);
var inst_23064 = (state_23100[(11)]);
var inst_23078 = (state_23100[(2)]);
var inst_23079 = [];
var inst_23080 = inst_23079.push(inst_23057);
var inst_23053 = inst_23079;
var inst_23054 = inst_23064;
var state_23100__$1 = (function (){var statearr_23144 = state_23100;
(statearr_23144[(7)] = inst_23053);

(statearr_23144[(14)] = inst_23078);

(statearr_23144[(8)] = inst_23054);

(statearr_23144[(15)] = inst_23080);

return statearr_23144;
})();
var statearr_23145_23990 = state_23100__$1;
(statearr_23145_23990[(2)] = null);

(statearr_23145_23990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (16))){
var state_23100__$1 = state_23100;
var statearr_23146_23991 = state_23100__$1;
(statearr_23146_23991[(2)] = null);

(statearr_23146_23991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (10))){
var inst_23070 = (state_23100[(2)]);
var state_23100__$1 = state_23100;
if(cljs.core.truth_(inst_23070)){
var statearr_23148_23995 = state_23100__$1;
(statearr_23148_23995[(1)] = (11));

} else {
var statearr_23149_23996 = state_23100__$1;
(statearr_23149_23996[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (18))){
var inst_23090 = (state_23100[(2)]);
var state_23100__$1 = state_23100;
var statearr_23150_23997 = state_23100__$1;
(statearr_23150_23997[(2)] = inst_23090);

(statearr_23150_23997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23101 === (8))){
var inst_23065 = (state_23100[(13)]);
var state_23100__$1 = state_23100;
var statearr_23151_23998 = state_23100__$1;
(statearr_23151_23998[(2)] = inst_23065);

(statearr_23151_23998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15028__auto__ = null;
var cljs$core$async$state_machine__15028__auto____0 = (function (){
var statearr_23152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23152[(0)] = cljs$core$async$state_machine__15028__auto__);

(statearr_23152[(1)] = (1));

return statearr_23152;
});
var cljs$core$async$state_machine__15028__auto____1 = (function (state_23100){
while(true){
var ret_value__15029__auto__ = (function (){try{while(true){
var result__15030__auto__ = switch__15027__auto__(state_23100);
if(cljs.core.keyword_identical_QMARK_(result__15030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15030__auto__;
}
break;
}
}catch (e23153){var ex__15031__auto__ = e23153;
var statearr_23154_24000 = state_23100;
(statearr_23154_24000[(2)] = ex__15031__auto__);


if(cljs.core.seq((state_23100[(4)]))){
var statearr_23155_24001 = state_23100;
(statearr_23155_24001[(1)] = cljs.core.first((state_23100[(4)])));

} else {
throw ex__15031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24003 = state_23100;
state_23100 = G__24003;
continue;
} else {
return ret_value__15029__auto__;
}
break;
}
});
cljs$core$async$state_machine__15028__auto__ = function(state_23100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15028__auto____1.call(this,state_23100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15028__auto____0;
cljs$core$async$state_machine__15028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15028__auto____1;
return cljs$core$async$state_machine__15028__auto__;
})()
})();
var state__15223__auto__ = (function (){var statearr_23156 = f__15222__auto__();
(statearr_23156[(6)] = c__15221__auto___23963);

return statearr_23156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15223__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
