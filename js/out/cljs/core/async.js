// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24325 = [];
var len__21530__auto___24362 = arguments.length;
var i__21531__auto___24363 = (0);
while(true){
if((i__21531__auto___24363 < len__21530__auto___24362)){
args24325.push((arguments[i__21531__auto___24363]));

var G__24364 = (i__21531__auto___24363 + (1));
i__21531__auto___24363 = G__24364;
continue;
} else {
}
break;
}

var G__24343 = args24325.length;
switch (G__24343) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24325.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24348 = (function (f,blockable,meta24349){
this.f = f;
this.blockable = blockable;
this.meta24349 = meta24349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24350,meta24349__$1){
var self__ = this;
var _24350__$1 = this;
return (new cljs.core.async.t_cljs$core$async24348(self__.f,self__.blockable,meta24349__$1));
});

cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24350){
var self__ = this;
var _24350__$1 = this;
return self__.meta24349;
});

cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24349","meta24349",1167605040,null)], null);
});

cljs.core.async.t_cljs$core$async24348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24348";

cljs.core.async.t_cljs$core$async24348.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24348");
});

cljs.core.async.__GT_t_cljs$core$async24348 = (function cljs$core$async$__GT_t_cljs$core$async24348(f__$1,blockable__$1,meta24349){
return (new cljs.core.async.t_cljs$core$async24348(f__$1,blockable__$1,meta24349));
});

}

return (new cljs.core.async.t_cljs$core$async24348(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args24390 = [];
var len__21530__auto___24393 = arguments.length;
var i__21531__auto___24394 = (0);
while(true){
if((i__21531__auto___24394 < len__21530__auto___24393)){
args24390.push((arguments[i__21531__auto___24394]));

var G__24395 = (i__21531__auto___24394 + (1));
i__21531__auto___24394 = G__24395;
continue;
} else {
}
break;
}

var G__24392 = args24390.length;
switch (G__24392) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24390.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24401 = [];
var len__21530__auto___24404 = arguments.length;
var i__21531__auto___24405 = (0);
while(true){
if((i__21531__auto___24405 < len__21530__auto___24404)){
args24401.push((arguments[i__21531__auto___24405]));

var G__24408 = (i__21531__auto___24405 + (1));
i__21531__auto___24405 = G__24408;
continue;
} else {
}
break;
}

var G__24403 = args24401.length;
switch (G__24403) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24401.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args24413 = [];
var len__21530__auto___24419 = arguments.length;
var i__21531__auto___24420 = (0);
while(true){
if((i__21531__auto___24420 < len__21530__auto___24419)){
args24413.push((arguments[i__21531__auto___24420]));

var G__24424 = (i__21531__auto___24420 + (1));
i__21531__auto___24420 = G__24424;
continue;
} else {
}
break;
}

var G__24415 = args24413.length;
switch (G__24415) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24413.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24429 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24429);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24429,ret){
return (function (){
return fn1.call(null,val_24429);
});})(val_24429,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24438 = [];
var len__21530__auto___24444 = arguments.length;
var i__21531__auto___24445 = (0);
while(true){
if((i__21531__auto___24445 < len__21530__auto___24444)){
args24438.push((arguments[i__21531__auto___24445]));

var G__24447 = (i__21531__auto___24445 + (1));
i__21531__auto___24445 = G__24447;
continue;
} else {
}
break;
}

var G__24440 = args24438.length;
switch (G__24440) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24438.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21370__auto___24454 = n;
var x_24455 = (0);
while(true){
if((x_24455 < n__21370__auto___24454)){
(a[x_24455] = (0));

var G__24456 = (x_24455 + (1));
x_24455 = G__24456;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24457 = (i + (1));
i = G__24457;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24461 = (function (alt_flag,flag,meta24462){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24462 = meta24462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24463,meta24462__$1){
var self__ = this;
var _24463__$1 = this;
return (new cljs.core.async.t_cljs$core$async24461(self__.alt_flag,self__.flag,meta24462__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24463){
var self__ = this;
var _24463__$1 = this;
return self__.meta24462;
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24462","meta24462",63517860,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24461";

cljs.core.async.t_cljs$core$async24461.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24461");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24461 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24461(alt_flag__$1,flag__$1,meta24462){
return (new cljs.core.async.t_cljs$core$async24461(alt_flag__$1,flag__$1,meta24462));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24461(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24481 = (function (alt_handler,flag,cb,meta24482){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24482 = meta24482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24483,meta24482__$1){
var self__ = this;
var _24483__$1 = this;
return (new cljs.core.async.t_cljs$core$async24481(self__.alt_handler,self__.flag,self__.cb,meta24482__$1));
});

cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24483){
var self__ = this;
var _24483__$1 = this;
return self__.meta24482;
});

cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24482","meta24482",-163603257,null)], null);
});

cljs.core.async.t_cljs$core$async24481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24481";

cljs.core.async.t_cljs$core$async24481.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24481");
});

cljs.core.async.__GT_t_cljs$core$async24481 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24481(alt_handler__$1,flag__$1,cb__$1,meta24482){
return (new cljs.core.async.t_cljs$core$async24481(alt_handler__$1,flag__$1,cb__$1,meta24482));
});

}

return (new cljs.core.async.t_cljs$core$async24481(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24490_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24490_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24491_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24491_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20455__auto__ = wport;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24492 = (i + (1));
i = G__24492;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20455__auto__ = ret;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20443__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__21537__auto__ = [];
var len__21530__auto___24510 = arguments.length;
var i__21531__auto___24511 = (0);
while(true){
if((i__21531__auto___24511 < len__21530__auto___24510)){
args__21537__auto__.push((arguments[i__21531__auto___24511]));

var G__24512 = (i__21531__auto___24511 + (1));
i__21531__auto___24511 = G__24512;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24507){
var map__24508 = p__24507;
var map__24508__$1 = ((((!((map__24508 == null)))?((((map__24508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24508):map__24508);
var opts = map__24508__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24499){
var G__24500 = cljs.core.first.call(null,seq24499);
var seq24499__$1 = cljs.core.next.call(null,seq24499);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24500,seq24499__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args24515 = [];
var len__21530__auto___24575 = arguments.length;
var i__21531__auto___24576 = (0);
while(true){
if((i__21531__auto___24576 < len__21530__auto___24575)){
args24515.push((arguments[i__21531__auto___24576]));

var G__24577 = (i__21531__auto___24576 + (1));
i__21531__auto___24576 = G__24577;
continue;
} else {
}
break;
}

var G__24517 = args24515.length;
switch (G__24517) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24515.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24228__auto___24581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___24581){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___24581){
return (function (state_24545){
var state_val_24546 = (state_24545[(1)]);
if((state_val_24546 === (7))){
var inst_24539 = (state_24545[(2)]);
var state_24545__$1 = state_24545;
var statearr_24547_24582 = state_24545__$1;
(statearr_24547_24582[(2)] = inst_24539);

(statearr_24547_24582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (1))){
var state_24545__$1 = state_24545;
var statearr_24548_24583 = state_24545__$1;
(statearr_24548_24583[(2)] = null);

(statearr_24548_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (4))){
var inst_24522 = (state_24545[(7)]);
var inst_24522__$1 = (state_24545[(2)]);
var inst_24523 = (inst_24522__$1 == null);
var state_24545__$1 = (function (){var statearr_24549 = state_24545;
(statearr_24549[(7)] = inst_24522__$1);

return statearr_24549;
})();
if(cljs.core.truth_(inst_24523)){
var statearr_24550_24584 = state_24545__$1;
(statearr_24550_24584[(1)] = (5));

} else {
var statearr_24551_24585 = state_24545__$1;
(statearr_24551_24585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (13))){
var state_24545__$1 = state_24545;
var statearr_24553_24586 = state_24545__$1;
(statearr_24553_24586[(2)] = null);

(statearr_24553_24586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (6))){
var inst_24522 = (state_24545[(7)]);
var state_24545__$1 = state_24545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24545__$1,(11),to,inst_24522);
} else {
if((state_val_24546 === (3))){
var inst_24542 = (state_24545[(2)]);
var state_24545__$1 = state_24545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24545__$1,inst_24542);
} else {
if((state_val_24546 === (12))){
var state_24545__$1 = state_24545;
var statearr_24555_24587 = state_24545__$1;
(statearr_24555_24587[(2)] = null);

(statearr_24555_24587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (2))){
var state_24545__$1 = state_24545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24545__$1,(4),from);
} else {
if((state_val_24546 === (11))){
var inst_24532 = (state_24545[(2)]);
var state_24545__$1 = state_24545;
if(cljs.core.truth_(inst_24532)){
var statearr_24556_24588 = state_24545__$1;
(statearr_24556_24588[(1)] = (12));

} else {
var statearr_24557_24589 = state_24545__$1;
(statearr_24557_24589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (9))){
var state_24545__$1 = state_24545;
var statearr_24558_24590 = state_24545__$1;
(statearr_24558_24590[(2)] = null);

(statearr_24558_24590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (5))){
var state_24545__$1 = state_24545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24559_24593 = state_24545__$1;
(statearr_24559_24593[(1)] = (8));

} else {
var statearr_24560_24594 = state_24545__$1;
(statearr_24560_24594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (14))){
var inst_24537 = (state_24545[(2)]);
var state_24545__$1 = state_24545;
var statearr_24561_24596 = state_24545__$1;
(statearr_24561_24596[(2)] = inst_24537);

(statearr_24561_24596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (10))){
var inst_24529 = (state_24545[(2)]);
var state_24545__$1 = state_24545;
var statearr_24564_24598 = state_24545__$1;
(statearr_24564_24598[(2)] = inst_24529);

(statearr_24564_24598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24546 === (8))){
var inst_24526 = cljs.core.async.close_BANG_.call(null,to);
var state_24545__$1 = state_24545;
var statearr_24565_24599 = state_24545__$1;
(statearr_24565_24599[(2)] = inst_24526);

(statearr_24565_24599[(1)] = (10));


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
});})(c__24228__auto___24581))
;
return ((function (switch__24031__auto__,c__24228__auto___24581){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_24571 = [null,null,null,null,null,null,null,null];
(statearr_24571[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_24571[(1)] = (1));

return statearr_24571;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_24545){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object)){
var ex__24035__auto__ = e24572;
var statearr_24573_24600 = state_24545;
(statearr_24573_24600[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24603 = state_24545;
state_24545 = G__24603;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_24545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_24545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___24581))
})();
var state__24230__auto__ = (function (){var statearr_24574 = f__24229__auto__.call(null);
(statearr_24574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___24581);

return statearr_24574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___24581))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24801){
var vec__24802 = p__24801;
var v = cljs.core.nth.call(null,vec__24802,(0),null);
var p = cljs.core.nth.call(null,vec__24802,(1),null);
var job = vec__24802;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24228__auto___24994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results){
return (function (state_24809){
var state_val_24810 = (state_24809[(1)]);
if((state_val_24810 === (1))){
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24809__$1,(2),res,v);
} else {
if((state_val_24810 === (2))){
var inst_24806 = (state_24809[(2)]);
var inst_24807 = cljs.core.async.close_BANG_.call(null,res);
var state_24809__$1 = (function (){var statearr_24811 = state_24809;
(statearr_24811[(7)] = inst_24806);

return statearr_24811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24809__$1,inst_24807);
} else {
return null;
}
}
});})(c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results))
;
return ((function (switch__24031__auto__,c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_24815 = [null,null,null,null,null,null,null,null];
(statearr_24815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__);

(statearr_24815[(1)] = (1));

return statearr_24815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1 = (function (state_24809){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24816){if((e24816 instanceof Object)){
var ex__24035__auto__ = e24816;
var statearr_24817_24997 = state_24809;
(statearr_24817_24997[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24809;
state_24809 = G__24998;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = function(state_24809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1.call(this,state_24809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results))
})();
var state__24230__auto__ = (function (){var statearr_24818 = f__24229__auto__.call(null);
(statearr_24818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___24994);

return statearr_24818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___24994,res,vec__24802,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24819){
var vec__24820 = p__24819;
var v = cljs.core.nth.call(null,vec__24820,(0),null);
var p = cljs.core.nth.call(null,vec__24820,(1),null);
var job = vec__24820;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21370__auto___25002 = n;
var __25003 = (0);
while(true){
if((__25003 < n__21370__auto___25002)){
var G__24823_25004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24823_25004) {
case "compute":
var c__24228__auto___25006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25003,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (__25003,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function (state_24836){
var state_val_24837 = (state_24836[(1)]);
if((state_val_24837 === (1))){
var state_24836__$1 = state_24836;
var statearr_24838_25008 = state_24836__$1;
(statearr_24838_25008[(2)] = null);

(statearr_24838_25008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24837 === (2))){
var state_24836__$1 = state_24836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24836__$1,(4),jobs);
} else {
if((state_val_24837 === (3))){
var inst_24834 = (state_24836[(2)]);
var state_24836__$1 = state_24836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24836__$1,inst_24834);
} else {
if((state_val_24837 === (4))){
var inst_24826 = (state_24836[(2)]);
var inst_24827 = process.call(null,inst_24826);
var state_24836__$1 = state_24836;
if(cljs.core.truth_(inst_24827)){
var statearr_24839_25011 = state_24836__$1;
(statearr_24839_25011[(1)] = (5));

} else {
var statearr_24840_25012 = state_24836__$1;
(statearr_24840_25012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24837 === (5))){
var state_24836__$1 = state_24836;
var statearr_24841_25013 = state_24836__$1;
(statearr_24841_25013[(2)] = null);

(statearr_24841_25013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24837 === (6))){
var state_24836__$1 = state_24836;
var statearr_24842_25014 = state_24836__$1;
(statearr_24842_25014[(2)] = null);

(statearr_24842_25014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24837 === (7))){
var inst_24832 = (state_24836[(2)]);
var state_24836__$1 = state_24836;
var statearr_24843_25015 = state_24836__$1;
(statearr_24843_25015[(2)] = inst_24832);

(statearr_24843_25015[(1)] = (3));


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
});})(__25003,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
;
return ((function (__25003,switch__24031__auto__,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_24847 = [null,null,null,null,null,null,null];
(statearr_24847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__);

(statearr_24847[(1)] = (1));

return statearr_24847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1 = (function (state_24836){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24848){if((e24848 instanceof Object)){
var ex__24035__auto__ = e24848;
var statearr_24849_25016 = state_24836;
(statearr_24849_25016[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25017 = state_24836;
state_24836 = G__25017;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = function(state_24836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1.call(this,state_24836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__;
})()
;})(__25003,switch__24031__auto__,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
})();
var state__24230__auto__ = (function (){var statearr_24850 = f__24229__auto__.call(null);
(statearr_24850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___25006);

return statearr_24850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(__25003,c__24228__auto___25006,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
);


break;
case "async":
var c__24228__auto___25018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25003,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (__25003,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function (state_24863){
var state_val_24864 = (state_24863[(1)]);
if((state_val_24864 === (1))){
var state_24863__$1 = state_24863;
var statearr_24865_25019 = state_24863__$1;
(statearr_24865_25019[(2)] = null);

(statearr_24865_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (2))){
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24863__$1,(4),jobs);
} else {
if((state_val_24864 === (3))){
var inst_24861 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24863__$1,inst_24861);
} else {
if((state_val_24864 === (4))){
var inst_24853 = (state_24863[(2)]);
var inst_24854 = async.call(null,inst_24853);
var state_24863__$1 = state_24863;
if(cljs.core.truth_(inst_24854)){
var statearr_24866_25020 = state_24863__$1;
(statearr_24866_25020[(1)] = (5));

} else {
var statearr_24867_25021 = state_24863__$1;
(statearr_24867_25021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (5))){
var state_24863__$1 = state_24863;
var statearr_24868_25022 = state_24863__$1;
(statearr_24868_25022[(2)] = null);

(statearr_24868_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (6))){
var state_24863__$1 = state_24863;
var statearr_24869_25023 = state_24863__$1;
(statearr_24869_25023[(2)] = null);

(statearr_24869_25023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (7))){
var inst_24859 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24870_25024 = state_24863__$1;
(statearr_24870_25024[(2)] = inst_24859);

(statearr_24870_25024[(1)] = (3));


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
});})(__25003,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
;
return ((function (__25003,switch__24031__auto__,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_24875 = [null,null,null,null,null,null,null];
(statearr_24875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__);

(statearr_24875[(1)] = (1));

return statearr_24875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1 = (function (state_24863){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24876){if((e24876 instanceof Object)){
var ex__24035__auto__ = e24876;
var statearr_24877_25025 = state_24863;
(statearr_24877_25025[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25026 = state_24863;
state_24863 = G__25026;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = function(state_24863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1.call(this,state_24863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__;
})()
;})(__25003,switch__24031__auto__,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
})();
var state__24230__auto__ = (function (){var statearr_24878 = f__24229__auto__.call(null);
(statearr_24878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___25018);

return statearr_24878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(__25003,c__24228__auto___25018,G__24823_25004,n__21370__auto___25002,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25027 = (__25003 + (1));
__25003 = G__25027;
continue;
} else {
}
break;
}

var c__24228__auto___25028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___25028,jobs,results,process,async){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___25028,jobs,results,process,async){
return (function (state_24900){
var state_val_24901 = (state_24900[(1)]);
if((state_val_24901 === (1))){
var state_24900__$1 = state_24900;
var statearr_24902_25029 = state_24900__$1;
(statearr_24902_25029[(2)] = null);

(statearr_24902_25029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (2))){
var state_24900__$1 = state_24900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24900__$1,(4),from);
} else {
if((state_val_24901 === (3))){
var inst_24898 = (state_24900[(2)]);
var state_24900__$1 = state_24900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24900__$1,inst_24898);
} else {
if((state_val_24901 === (4))){
var inst_24881 = (state_24900[(7)]);
var inst_24881__$1 = (state_24900[(2)]);
var inst_24882 = (inst_24881__$1 == null);
var state_24900__$1 = (function (){var statearr_24904 = state_24900;
(statearr_24904[(7)] = inst_24881__$1);

return statearr_24904;
})();
if(cljs.core.truth_(inst_24882)){
var statearr_24905_25033 = state_24900__$1;
(statearr_24905_25033[(1)] = (5));

} else {
var statearr_24906_25034 = state_24900__$1;
(statearr_24906_25034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (5))){
var inst_24884 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24900__$1 = state_24900;
var statearr_24907_25035 = state_24900__$1;
(statearr_24907_25035[(2)] = inst_24884);

(statearr_24907_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (6))){
var inst_24881 = (state_24900[(7)]);
var inst_24886 = (state_24900[(8)]);
var inst_24886__$1 = cljs.core.async.chan.call(null,(1));
var inst_24887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24888 = [inst_24881,inst_24886__$1];
var inst_24889 = (new cljs.core.PersistentVector(null,2,(5),inst_24887,inst_24888,null));
var state_24900__$1 = (function (){var statearr_24908 = state_24900;
(statearr_24908[(8)] = inst_24886__$1);

return statearr_24908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24900__$1,(8),jobs,inst_24889);
} else {
if((state_val_24901 === (7))){
var inst_24896 = (state_24900[(2)]);
var state_24900__$1 = state_24900;
var statearr_24909_25039 = state_24900__$1;
(statearr_24909_25039[(2)] = inst_24896);

(statearr_24909_25039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (8))){
var inst_24886 = (state_24900[(8)]);
var inst_24891 = (state_24900[(2)]);
var state_24900__$1 = (function (){var statearr_24910 = state_24900;
(statearr_24910[(9)] = inst_24891);

return statearr_24910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24900__$1,(9),results,inst_24886);
} else {
if((state_val_24901 === (9))){
var inst_24893 = (state_24900[(2)]);
var state_24900__$1 = (function (){var statearr_24911 = state_24900;
(statearr_24911[(10)] = inst_24893);

return statearr_24911;
})();
var statearr_24912_25042 = state_24900__$1;
(statearr_24912_25042[(2)] = null);

(statearr_24912_25042[(1)] = (2));


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
});})(c__24228__auto___25028,jobs,results,process,async))
;
return ((function (switch__24031__auto__,c__24228__auto___25028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_24916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__);

(statearr_24916[(1)] = (1));

return statearr_24916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1 = (function (state_24900){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24917){if((e24917 instanceof Object)){
var ex__24035__auto__ = e24917;
var statearr_24918_25043 = state_24900;
(statearr_24918_25043[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25044 = state_24900;
state_24900 = G__25044;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = function(state_24900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1.call(this,state_24900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___25028,jobs,results,process,async))
})();
var state__24230__auto__ = (function (){var statearr_24919 = f__24229__auto__.call(null);
(statearr_24919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___25028);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___25028,jobs,results,process,async))
);


var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,jobs,results,process,async){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,jobs,results,process,async){
return (function (state_24957){
var state_val_24958 = (state_24957[(1)]);
if((state_val_24958 === (7))){
var inst_24953 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
var statearr_24959_25047 = state_24957__$1;
(statearr_24959_25047[(2)] = inst_24953);

(statearr_24959_25047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (20))){
var state_24957__$1 = state_24957;
var statearr_24960_25048 = state_24957__$1;
(statearr_24960_25048[(2)] = null);

(statearr_24960_25048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (1))){
var state_24957__$1 = state_24957;
var statearr_24961_25050 = state_24957__$1;
(statearr_24961_25050[(2)] = null);

(statearr_24961_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (4))){
var inst_24922 = (state_24957[(7)]);
var inst_24922__$1 = (state_24957[(2)]);
var inst_24923 = (inst_24922__$1 == null);
var state_24957__$1 = (function (){var statearr_24962 = state_24957;
(statearr_24962[(7)] = inst_24922__$1);

return statearr_24962;
})();
if(cljs.core.truth_(inst_24923)){
var statearr_24963_25054 = state_24957__$1;
(statearr_24963_25054[(1)] = (5));

} else {
var statearr_24964_25055 = state_24957__$1;
(statearr_24964_25055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (15))){
var inst_24935 = (state_24957[(8)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24957__$1,(18),to,inst_24935);
} else {
if((state_val_24958 === (21))){
var inst_24948 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
var statearr_24965_25060 = state_24957__$1;
(statearr_24965_25060[(2)] = inst_24948);

(statearr_24965_25060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (13))){
var inst_24950 = (state_24957[(2)]);
var state_24957__$1 = (function (){var statearr_24966 = state_24957;
(statearr_24966[(9)] = inst_24950);

return statearr_24966;
})();
var statearr_24967_25061 = state_24957__$1;
(statearr_24967_25061[(2)] = null);

(statearr_24967_25061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (6))){
var inst_24922 = (state_24957[(7)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24957__$1,(11),inst_24922);
} else {
if((state_val_24958 === (17))){
var inst_24943 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
if(cljs.core.truth_(inst_24943)){
var statearr_24968_25062 = state_24957__$1;
(statearr_24968_25062[(1)] = (19));

} else {
var statearr_24969_25063 = state_24957__$1;
(statearr_24969_25063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (3))){
var inst_24955 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24957__$1,inst_24955);
} else {
if((state_val_24958 === (12))){
var inst_24932 = (state_24957[(10)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24957__$1,(14),inst_24932);
} else {
if((state_val_24958 === (2))){
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24957__$1,(4),results);
} else {
if((state_val_24958 === (19))){
var state_24957__$1 = state_24957;
var statearr_24970_25065 = state_24957__$1;
(statearr_24970_25065[(2)] = null);

(statearr_24970_25065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (11))){
var inst_24932 = (state_24957[(2)]);
var state_24957__$1 = (function (){var statearr_24971 = state_24957;
(statearr_24971[(10)] = inst_24932);

return statearr_24971;
})();
var statearr_24972_25068 = state_24957__$1;
(statearr_24972_25068[(2)] = null);

(statearr_24972_25068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (9))){
var state_24957__$1 = state_24957;
var statearr_24973_25069 = state_24957__$1;
(statearr_24973_25069[(2)] = null);

(statearr_24973_25069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (5))){
var state_24957__$1 = state_24957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24974_25072 = state_24957__$1;
(statearr_24974_25072[(1)] = (8));

} else {
var statearr_24975_25074 = state_24957__$1;
(statearr_24975_25074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (14))){
var inst_24935 = (state_24957[(8)]);
var inst_24937 = (state_24957[(11)]);
var inst_24935__$1 = (state_24957[(2)]);
var inst_24936 = (inst_24935__$1 == null);
var inst_24937__$1 = cljs.core.not.call(null,inst_24936);
var state_24957__$1 = (function (){var statearr_24976 = state_24957;
(statearr_24976[(8)] = inst_24935__$1);

(statearr_24976[(11)] = inst_24937__$1);

return statearr_24976;
})();
if(inst_24937__$1){
var statearr_24977_25076 = state_24957__$1;
(statearr_24977_25076[(1)] = (15));

} else {
var statearr_24978_25077 = state_24957__$1;
(statearr_24978_25077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (16))){
var inst_24937 = (state_24957[(11)]);
var state_24957__$1 = state_24957;
var statearr_24979_25078 = state_24957__$1;
(statearr_24979_25078[(2)] = inst_24937);

(statearr_24979_25078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (10))){
var inst_24929 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
var statearr_24980_25079 = state_24957__$1;
(statearr_24980_25079[(2)] = inst_24929);

(statearr_24980_25079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (18))){
var inst_24940 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
var statearr_24981_25080 = state_24957__$1;
(statearr_24981_25080[(2)] = inst_24940);

(statearr_24981_25080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24958 === (8))){
var inst_24926 = cljs.core.async.close_BANG_.call(null,to);
var state_24957__$1 = state_24957;
var statearr_24982_25081 = state_24957__$1;
(statearr_24982_25081[(2)] = inst_24926);

(statearr_24982_25081[(1)] = (10));


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
});})(c__24228__auto__,jobs,results,process,async))
;
return ((function (switch__24031__auto__,c__24228__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1 = (function (state_24957){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_24957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__24035__auto__ = e24989;
var statearr_24990_25082 = state_24957;
(statearr_24990_25082[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25083 = state_24957;
state_24957 = G__25083;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__ = function(state_24957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1.call(this,state_24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,jobs,results,process,async))
})();
var state__24230__auto__ = (function (){var statearr_24991 = f__24229__auto__.call(null);
(statearr_24991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,jobs,results,process,async))
);

return c__24228__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25084 = [];
var len__21530__auto___25087 = arguments.length;
var i__21531__auto___25088 = (0);
while(true){
if((i__21531__auto___25088 < len__21530__auto___25087)){
args25084.push((arguments[i__21531__auto___25088]));

var G__25089 = (i__21531__auto___25088 + (1));
i__21531__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var G__25086 = args25084.length;
switch (G__25086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25084.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args25091 = [];
var len__21530__auto___25094 = arguments.length;
var i__21531__auto___25095 = (0);
while(true){
if((i__21531__auto___25095 < len__21530__auto___25094)){
args25091.push((arguments[i__21531__auto___25095]));

var G__25096 = (i__21531__auto___25095 + (1));
i__21531__auto___25095 = G__25096;
continue;
} else {
}
break;
}

var G__25093 = args25091.length;
switch (G__25093) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25091.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args25098 = [];
var len__21530__auto___25151 = arguments.length;
var i__21531__auto___25152 = (0);
while(true){
if((i__21531__auto___25152 < len__21530__auto___25151)){
args25098.push((arguments[i__21531__auto___25152]));

var G__25153 = (i__21531__auto___25152 + (1));
i__21531__auto___25152 = G__25153;
continue;
} else {
}
break;
}

var G__25100 = args25098.length;
switch (G__25100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25098.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24228__auto___25155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___25155,tc,fc){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___25155,tc,fc){
return (function (state_25126){
var state_val_25127 = (state_25126[(1)]);
if((state_val_25127 === (7))){
var inst_25122 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
var statearr_25128_25156 = state_25126__$1;
(statearr_25128_25156[(2)] = inst_25122);

(statearr_25128_25156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (1))){
var state_25126__$1 = state_25126;
var statearr_25129_25157 = state_25126__$1;
(statearr_25129_25157[(2)] = null);

(statearr_25129_25157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (4))){
var inst_25103 = (state_25126[(7)]);
var inst_25103__$1 = (state_25126[(2)]);
var inst_25104 = (inst_25103__$1 == null);
var state_25126__$1 = (function (){var statearr_25130 = state_25126;
(statearr_25130[(7)] = inst_25103__$1);

return statearr_25130;
})();
if(cljs.core.truth_(inst_25104)){
var statearr_25131_25158 = state_25126__$1;
(statearr_25131_25158[(1)] = (5));

} else {
var statearr_25132_25159 = state_25126__$1;
(statearr_25132_25159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (13))){
var state_25126__$1 = state_25126;
var statearr_25133_25160 = state_25126__$1;
(statearr_25133_25160[(2)] = null);

(statearr_25133_25160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (6))){
var inst_25103 = (state_25126[(7)]);
var inst_25109 = p.call(null,inst_25103);
var state_25126__$1 = state_25126;
if(cljs.core.truth_(inst_25109)){
var statearr_25134_25161 = state_25126__$1;
(statearr_25134_25161[(1)] = (9));

} else {
var statearr_25135_25162 = state_25126__$1;
(statearr_25135_25162[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (3))){
var inst_25124 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25126__$1,inst_25124);
} else {
if((state_val_25127 === (12))){
var state_25126__$1 = state_25126;
var statearr_25136_25163 = state_25126__$1;
(statearr_25136_25163[(2)] = null);

(statearr_25136_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (2))){
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25126__$1,(4),ch);
} else {
if((state_val_25127 === (11))){
var inst_25103 = (state_25126[(7)]);
var inst_25113 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25126__$1,(8),inst_25113,inst_25103);
} else {
if((state_val_25127 === (9))){
var state_25126__$1 = state_25126;
var statearr_25137_25164 = state_25126__$1;
(statearr_25137_25164[(2)] = tc);

(statearr_25137_25164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (5))){
var inst_25106 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25107 = cljs.core.async.close_BANG_.call(null,fc);
var state_25126__$1 = (function (){var statearr_25138 = state_25126;
(statearr_25138[(8)] = inst_25106);

return statearr_25138;
})();
var statearr_25139_25165 = state_25126__$1;
(statearr_25139_25165[(2)] = inst_25107);

(statearr_25139_25165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (14))){
var inst_25120 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
var statearr_25140_25168 = state_25126__$1;
(statearr_25140_25168[(2)] = inst_25120);

(statearr_25140_25168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (10))){
var state_25126__$1 = state_25126;
var statearr_25141_25172 = state_25126__$1;
(statearr_25141_25172[(2)] = fc);

(statearr_25141_25172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (8))){
var inst_25115 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
if(cljs.core.truth_(inst_25115)){
var statearr_25142_25174 = state_25126__$1;
(statearr_25142_25174[(1)] = (12));

} else {
var statearr_25143_25175 = state_25126__$1;
(statearr_25143_25175[(1)] = (13));

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
});})(c__24228__auto___25155,tc,fc))
;
return ((function (switch__24031__auto__,c__24228__auto___25155,tc,fc){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_25147 = [null,null,null,null,null,null,null,null,null];
(statearr_25147[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_25147[(1)] = (1));

return statearr_25147;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_25126){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_25126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e25148){if((e25148 instanceof Object)){
var ex__24035__auto__ = e25148;
var statearr_25149_25181 = state_25126;
(statearr_25149_25181[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25183 = state_25126;
state_25126 = G__25183;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_25126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_25126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___25155,tc,fc))
})();
var state__24230__auto__ = (function (){var statearr_25150 = f__24229__auto__.call(null);
(statearr_25150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___25155);

return statearr_25150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___25155,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_25273){
var state_val_25274 = (state_25273[(1)]);
if((state_val_25274 === (7))){
var inst_25269 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25279_25322 = state_25273__$1;
(statearr_25279_25322[(2)] = inst_25269);

(statearr_25279_25322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (1))){
var inst_25252 = init;
var state_25273__$1 = (function (){var statearr_25280 = state_25273;
(statearr_25280[(7)] = inst_25252);

return statearr_25280;
})();
var statearr_25281_25328 = state_25273__$1;
(statearr_25281_25328[(2)] = null);

(statearr_25281_25328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (4))){
var inst_25256 = (state_25273[(8)]);
var inst_25256__$1 = (state_25273[(2)]);
var inst_25257 = (inst_25256__$1 == null);
var state_25273__$1 = (function (){var statearr_25283 = state_25273;
(statearr_25283[(8)] = inst_25256__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25257)){
var statearr_25284_25330 = state_25273__$1;
(statearr_25284_25330[(1)] = (5));

} else {
var statearr_25285_25331 = state_25273__$1;
(statearr_25285_25331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (6))){
var inst_25256 = (state_25273[(8)]);
var inst_25260 = (state_25273[(9)]);
var inst_25252 = (state_25273[(7)]);
var inst_25260__$1 = f.call(null,inst_25252,inst_25256);
var inst_25261 = cljs.core.reduced_QMARK_.call(null,inst_25260__$1);
var state_25273__$1 = (function (){var statearr_25290 = state_25273;
(statearr_25290[(9)] = inst_25260__$1);

return statearr_25290;
})();
if(inst_25261){
var statearr_25291_25332 = state_25273__$1;
(statearr_25291_25332[(1)] = (8));

} else {
var statearr_25292_25333 = state_25273__$1;
(statearr_25292_25333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (3))){
var inst_25271 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25273__$1,inst_25271);
} else {
if((state_val_25274 === (2))){
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(4),ch);
} else {
if((state_val_25274 === (9))){
var inst_25260 = (state_25273[(9)]);
var inst_25252 = inst_25260;
var state_25273__$1 = (function (){var statearr_25294 = state_25273;
(statearr_25294[(7)] = inst_25252);

return statearr_25294;
})();
var statearr_25295_25334 = state_25273__$1;
(statearr_25295_25334[(2)] = null);

(statearr_25295_25334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (5))){
var inst_25252 = (state_25273[(7)]);
var state_25273__$1 = state_25273;
var statearr_25298_25335 = state_25273__$1;
(statearr_25298_25335[(2)] = inst_25252);

(statearr_25298_25335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (10))){
var inst_25267 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25301_25336 = state_25273__$1;
(statearr_25301_25336[(2)] = inst_25267);

(statearr_25301_25336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (8))){
var inst_25260 = (state_25273[(9)]);
var inst_25263 = cljs.core.deref.call(null,inst_25260);
var state_25273__$1 = state_25273;
var statearr_25303_25337 = state_25273__$1;
(statearr_25303_25337[(2)] = inst_25263);

(statearr_25303_25337[(1)] = (10));


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
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24032__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24032__auto____0 = (function (){
var statearr_25310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25310[(0)] = cljs$core$async$reduce_$_state_machine__24032__auto__);

(statearr_25310[(1)] = (1));

return statearr_25310;
});
var cljs$core$async$reduce_$_state_machine__24032__auto____1 = (function (state_25273){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_25273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e25311){if((e25311 instanceof Object)){
var ex__24035__auto__ = e25311;
var statearr_25313_25343 = state_25273;
(statearr_25313_25343[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25344 = state_25273;
state_25273 = G__25344;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24032__auto__ = function(state_25273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24032__auto____1.call(this,state_25273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24032__auto____0;
cljs$core$async$reduce_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24032__auto____1;
return cljs$core$async$reduce_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_25315 = f__24229__auto__.call(null);
(statearr_25315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25348 = [];
var len__21530__auto___25401 = arguments.length;
var i__21531__auto___25402 = (0);
while(true){
if((i__21531__auto___25402 < len__21530__auto___25401)){
args25348.push((arguments[i__21531__auto___25402]));

var G__25403 = (i__21531__auto___25402 + (1));
i__21531__auto___25402 = G__25403;
continue;
} else {
}
break;
}

var G__25351 = args25348.length;
switch (G__25351) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25348.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_25376){
var state_val_25377 = (state_25376[(1)]);
if((state_val_25377 === (7))){
var inst_25358 = (state_25376[(2)]);
var state_25376__$1 = state_25376;
var statearr_25378_25410 = state_25376__$1;
(statearr_25378_25410[(2)] = inst_25358);

(statearr_25378_25410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (1))){
var inst_25352 = cljs.core.seq.call(null,coll);
var inst_25353 = inst_25352;
var state_25376__$1 = (function (){var statearr_25379 = state_25376;
(statearr_25379[(7)] = inst_25353);

return statearr_25379;
})();
var statearr_25380_25412 = state_25376__$1;
(statearr_25380_25412[(2)] = null);

(statearr_25380_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (4))){
var inst_25353 = (state_25376[(7)]);
var inst_25356 = cljs.core.first.call(null,inst_25353);
var state_25376__$1 = state_25376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25376__$1,(7),ch,inst_25356);
} else {
if((state_val_25377 === (13))){
var inst_25370 = (state_25376[(2)]);
var state_25376__$1 = state_25376;
var statearr_25381_25415 = state_25376__$1;
(statearr_25381_25415[(2)] = inst_25370);

(statearr_25381_25415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (6))){
var inst_25361 = (state_25376[(2)]);
var state_25376__$1 = state_25376;
if(cljs.core.truth_(inst_25361)){
var statearr_25382_25416 = state_25376__$1;
(statearr_25382_25416[(1)] = (8));

} else {
var statearr_25383_25418 = state_25376__$1;
(statearr_25383_25418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (3))){
var inst_25374 = (state_25376[(2)]);
var state_25376__$1 = state_25376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25376__$1,inst_25374);
} else {
if((state_val_25377 === (12))){
var state_25376__$1 = state_25376;
var statearr_25384_25421 = state_25376__$1;
(statearr_25384_25421[(2)] = null);

(statearr_25384_25421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (2))){
var inst_25353 = (state_25376[(7)]);
var state_25376__$1 = state_25376;
if(cljs.core.truth_(inst_25353)){
var statearr_25385_25423 = state_25376__$1;
(statearr_25385_25423[(1)] = (4));

} else {
var statearr_25386_25425 = state_25376__$1;
(statearr_25386_25425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (11))){
var inst_25367 = cljs.core.async.close_BANG_.call(null,ch);
var state_25376__$1 = state_25376;
var statearr_25387_25428 = state_25376__$1;
(statearr_25387_25428[(2)] = inst_25367);

(statearr_25387_25428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (9))){
var state_25376__$1 = state_25376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25388_25429 = state_25376__$1;
(statearr_25388_25429[(1)] = (11));

} else {
var statearr_25389_25430 = state_25376__$1;
(statearr_25389_25430[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (5))){
var inst_25353 = (state_25376[(7)]);
var state_25376__$1 = state_25376;
var statearr_25390_25431 = state_25376__$1;
(statearr_25390_25431[(2)] = inst_25353);

(statearr_25390_25431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (10))){
var inst_25372 = (state_25376[(2)]);
var state_25376__$1 = state_25376;
var statearr_25391_25434 = state_25376__$1;
(statearr_25391_25434[(2)] = inst_25372);

(statearr_25391_25434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25377 === (8))){
var inst_25353 = (state_25376[(7)]);
var inst_25363 = cljs.core.next.call(null,inst_25353);
var inst_25353__$1 = inst_25363;
var state_25376__$1 = (function (){var statearr_25392 = state_25376;
(statearr_25392[(7)] = inst_25353__$1);

return statearr_25392;
})();
var statearr_25393_25436 = state_25376__$1;
(statearr_25393_25436[(2)] = null);

(statearr_25393_25436[(1)] = (2));


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
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_25376){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_25376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__24035__auto__ = e25398;
var statearr_25399_25451 = state_25376;
(statearr_25399_25451[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25454 = state_25376;
state_25376 = G__25454;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_25376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_25376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_25400 = f__24229__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21118__auto__ = (((_ == null))?null:_);
var m__21119__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,_);
} else {
var m__21119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m);
} else {
var m__21119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25737 = (function (mult,ch,cs,meta25738){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25738 = meta25738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25739,meta25738__$1){
var self__ = this;
var _25739__$1 = this;
return (new cljs.core.async.t_cljs$core$async25737(self__.mult,self__.ch,self__.cs,meta25738__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25739){
var self__ = this;
var _25739__$1 = this;
return self__.meta25738;
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25738","meta25738",-421482052,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25737";

cljs.core.async.t_cljs$core$async25737.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async25737");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25737 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25737(mult__$1,ch__$1,cs__$1,meta25738){
return (new cljs.core.async.t_cljs$core$async25737(mult__$1,ch__$1,cs__$1,meta25738));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25737(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24228__auto___25994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___25994,cs,m,dchan,dctr,done){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___25994,cs,m,dchan,dctr,done){
return (function (state_25880){
var state_val_25882 = (state_25880[(1)]);
if((state_val_25882 === (7))){
var inst_25874 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25883_25996 = state_25880__$1;
(statearr_25883_25996[(2)] = inst_25874);

(statearr_25883_25996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (20))){
var inst_25777 = (state_25880[(7)]);
var inst_25789 = cljs.core.first.call(null,inst_25777);
var inst_25790 = cljs.core.nth.call(null,inst_25789,(0),null);
var inst_25791 = cljs.core.nth.call(null,inst_25789,(1),null);
var state_25880__$1 = (function (){var statearr_25884 = state_25880;
(statearr_25884[(8)] = inst_25790);

return statearr_25884;
})();
if(cljs.core.truth_(inst_25791)){
var statearr_25885_25997 = state_25880__$1;
(statearr_25885_25997[(1)] = (22));

} else {
var statearr_25886_25998 = state_25880__$1;
(statearr_25886_25998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (27))){
var inst_25821 = (state_25880[(9)]);
var inst_25819 = (state_25880[(10)]);
var inst_25826 = (state_25880[(11)]);
var inst_25746 = (state_25880[(12)]);
var inst_25826__$1 = cljs.core._nth.call(null,inst_25819,inst_25821);
var inst_25827 = cljs.core.async.put_BANG_.call(null,inst_25826__$1,inst_25746,done);
var state_25880__$1 = (function (){var statearr_25887 = state_25880;
(statearr_25887[(11)] = inst_25826__$1);

return statearr_25887;
})();
if(cljs.core.truth_(inst_25827)){
var statearr_25888_25999 = state_25880__$1;
(statearr_25888_25999[(1)] = (30));

} else {
var statearr_25889_26000 = state_25880__$1;
(statearr_25889_26000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (1))){
var state_25880__$1 = state_25880;
var statearr_25890_26001 = state_25880__$1;
(statearr_25890_26001[(2)] = null);

(statearr_25890_26001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (24))){
var inst_25777 = (state_25880[(7)]);
var inst_25796 = (state_25880[(2)]);
var inst_25797 = cljs.core.next.call(null,inst_25777);
var inst_25755 = inst_25797;
var inst_25756 = null;
var inst_25757 = (0);
var inst_25758 = (0);
var state_25880__$1 = (function (){var statearr_25891 = state_25880;
(statearr_25891[(13)] = inst_25796);

(statearr_25891[(14)] = inst_25756);

(statearr_25891[(15)] = inst_25755);

(statearr_25891[(16)] = inst_25758);

(statearr_25891[(17)] = inst_25757);

return statearr_25891;
})();
var statearr_25892_26005 = state_25880__$1;
(statearr_25892_26005[(2)] = null);

(statearr_25892_26005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (39))){
var state_25880__$1 = state_25880;
var statearr_25899_26006 = state_25880__$1;
(statearr_25899_26006[(2)] = null);

(statearr_25899_26006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (4))){
var inst_25746 = (state_25880[(12)]);
var inst_25746__$1 = (state_25880[(2)]);
var inst_25747 = (inst_25746__$1 == null);
var state_25880__$1 = (function (){var statearr_25900 = state_25880;
(statearr_25900[(12)] = inst_25746__$1);

return statearr_25900;
})();
if(cljs.core.truth_(inst_25747)){
var statearr_25901_26007 = state_25880__$1;
(statearr_25901_26007[(1)] = (5));

} else {
var statearr_25902_26008 = state_25880__$1;
(statearr_25902_26008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (15))){
var inst_25756 = (state_25880[(14)]);
var inst_25755 = (state_25880[(15)]);
var inst_25758 = (state_25880[(16)]);
var inst_25757 = (state_25880[(17)]);
var inst_25773 = (state_25880[(2)]);
var inst_25774 = (inst_25758 + (1));
var tmp25893 = inst_25756;
var tmp25894 = inst_25755;
var tmp25895 = inst_25757;
var inst_25755__$1 = tmp25894;
var inst_25756__$1 = tmp25893;
var inst_25757__$1 = tmp25895;
var inst_25758__$1 = inst_25774;
var state_25880__$1 = (function (){var statearr_25903 = state_25880;
(statearr_25903[(14)] = inst_25756__$1);

(statearr_25903[(15)] = inst_25755__$1);

(statearr_25903[(16)] = inst_25758__$1);

(statearr_25903[(17)] = inst_25757__$1);

(statearr_25903[(18)] = inst_25773);

return statearr_25903;
})();
var statearr_25904_26014 = state_25880__$1;
(statearr_25904_26014[(2)] = null);

(statearr_25904_26014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (21))){
var inst_25800 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25908_26017 = state_25880__$1;
(statearr_25908_26017[(2)] = inst_25800);

(statearr_25908_26017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (31))){
var inst_25826 = (state_25880[(11)]);
var inst_25830 = done.call(null,null);
var inst_25831 = cljs.core.async.untap_STAR_.call(null,m,inst_25826);
var state_25880__$1 = (function (){var statearr_25909 = state_25880;
(statearr_25909[(19)] = inst_25830);

return statearr_25909;
})();
var statearr_25910_26018 = state_25880__$1;
(statearr_25910_26018[(2)] = inst_25831);

(statearr_25910_26018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (32))){
var inst_25821 = (state_25880[(9)]);
var inst_25819 = (state_25880[(10)]);
var inst_25818 = (state_25880[(20)]);
var inst_25820 = (state_25880[(21)]);
var inst_25833 = (state_25880[(2)]);
var inst_25834 = (inst_25821 + (1));
var tmp25905 = inst_25819;
var tmp25906 = inst_25818;
var tmp25907 = inst_25820;
var inst_25818__$1 = tmp25906;
var inst_25819__$1 = tmp25905;
var inst_25820__$1 = tmp25907;
var inst_25821__$1 = inst_25834;
var state_25880__$1 = (function (){var statearr_25911 = state_25880;
(statearr_25911[(9)] = inst_25821__$1);

(statearr_25911[(10)] = inst_25819__$1);

(statearr_25911[(22)] = inst_25833);

(statearr_25911[(20)] = inst_25818__$1);

(statearr_25911[(21)] = inst_25820__$1);

return statearr_25911;
})();
var statearr_25912_26019 = state_25880__$1;
(statearr_25912_26019[(2)] = null);

(statearr_25912_26019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (40))){
var inst_25846 = (state_25880[(23)]);
var inst_25850 = done.call(null,null);
var inst_25851 = cljs.core.async.untap_STAR_.call(null,m,inst_25846);
var state_25880__$1 = (function (){var statearr_25913 = state_25880;
(statearr_25913[(24)] = inst_25850);

return statearr_25913;
})();
var statearr_25914_26022 = state_25880__$1;
(statearr_25914_26022[(2)] = inst_25851);

(statearr_25914_26022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (33))){
var inst_25837 = (state_25880[(25)]);
var inst_25839 = cljs.core.chunked_seq_QMARK_.call(null,inst_25837);
var state_25880__$1 = state_25880;
if(inst_25839){
var statearr_25918_26024 = state_25880__$1;
(statearr_25918_26024[(1)] = (36));

} else {
var statearr_25919_26025 = state_25880__$1;
(statearr_25919_26025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (13))){
var inst_25767 = (state_25880[(26)]);
var inst_25770 = cljs.core.async.close_BANG_.call(null,inst_25767);
var state_25880__$1 = state_25880;
var statearr_25920_26034 = state_25880__$1;
(statearr_25920_26034[(2)] = inst_25770);

(statearr_25920_26034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (22))){
var inst_25790 = (state_25880[(8)]);
var inst_25793 = cljs.core.async.close_BANG_.call(null,inst_25790);
var state_25880__$1 = state_25880;
var statearr_25921_26037 = state_25880__$1;
(statearr_25921_26037[(2)] = inst_25793);

(statearr_25921_26037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (36))){
var inst_25837 = (state_25880[(25)]);
var inst_25841 = cljs.core.chunk_first.call(null,inst_25837);
var inst_25842 = cljs.core.chunk_rest.call(null,inst_25837);
var inst_25843 = cljs.core.count.call(null,inst_25841);
var inst_25818 = inst_25842;
var inst_25819 = inst_25841;
var inst_25820 = inst_25843;
var inst_25821 = (0);
var state_25880__$1 = (function (){var statearr_25922 = state_25880;
(statearr_25922[(9)] = inst_25821);

(statearr_25922[(10)] = inst_25819);

(statearr_25922[(20)] = inst_25818);

(statearr_25922[(21)] = inst_25820);

return statearr_25922;
})();
var statearr_25923_26040 = state_25880__$1;
(statearr_25923_26040[(2)] = null);

(statearr_25923_26040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (41))){
var inst_25837 = (state_25880[(25)]);
var inst_25853 = (state_25880[(2)]);
var inst_25854 = cljs.core.next.call(null,inst_25837);
var inst_25818 = inst_25854;
var inst_25819 = null;
var inst_25820 = (0);
var inst_25821 = (0);
var state_25880__$1 = (function (){var statearr_25924 = state_25880;
(statearr_25924[(27)] = inst_25853);

(statearr_25924[(9)] = inst_25821);

(statearr_25924[(10)] = inst_25819);

(statearr_25924[(20)] = inst_25818);

(statearr_25924[(21)] = inst_25820);

return statearr_25924;
})();
var statearr_25925_26041 = state_25880__$1;
(statearr_25925_26041[(2)] = null);

(statearr_25925_26041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (43))){
var state_25880__$1 = state_25880;
var statearr_25926_26042 = state_25880__$1;
(statearr_25926_26042[(2)] = null);

(statearr_25926_26042[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (29))){
var inst_25862 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25927_26043 = state_25880__$1;
(statearr_25927_26043[(2)] = inst_25862);

(statearr_25927_26043[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (44))){
var inst_25871 = (state_25880[(2)]);
var state_25880__$1 = (function (){var statearr_25928 = state_25880;
(statearr_25928[(28)] = inst_25871);

return statearr_25928;
})();
var statearr_25929_26045 = state_25880__$1;
(statearr_25929_26045[(2)] = null);

(statearr_25929_26045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (6))){
var inst_25810 = (state_25880[(29)]);
var inst_25809 = cljs.core.deref.call(null,cs);
var inst_25810__$1 = cljs.core.keys.call(null,inst_25809);
var inst_25811 = cljs.core.count.call(null,inst_25810__$1);
var inst_25812 = cljs.core.reset_BANG_.call(null,dctr,inst_25811);
var inst_25817 = cljs.core.seq.call(null,inst_25810__$1);
var inst_25818 = inst_25817;
var inst_25819 = null;
var inst_25820 = (0);
var inst_25821 = (0);
var state_25880__$1 = (function (){var statearr_25933 = state_25880;
(statearr_25933[(29)] = inst_25810__$1);

(statearr_25933[(30)] = inst_25812);

(statearr_25933[(9)] = inst_25821);

(statearr_25933[(10)] = inst_25819);

(statearr_25933[(20)] = inst_25818);

(statearr_25933[(21)] = inst_25820);

return statearr_25933;
})();
var statearr_25934_26046 = state_25880__$1;
(statearr_25934_26046[(2)] = null);

(statearr_25934_26046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (28))){
var inst_25818 = (state_25880[(20)]);
var inst_25837 = (state_25880[(25)]);
var inst_25837__$1 = cljs.core.seq.call(null,inst_25818);
var state_25880__$1 = (function (){var statearr_25935 = state_25880;
(statearr_25935[(25)] = inst_25837__$1);

return statearr_25935;
})();
if(inst_25837__$1){
var statearr_25936_26047 = state_25880__$1;
(statearr_25936_26047[(1)] = (33));

} else {
var statearr_25937_26048 = state_25880__$1;
(statearr_25937_26048[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (25))){
var inst_25821 = (state_25880[(9)]);
var inst_25820 = (state_25880[(21)]);
var inst_25823 = (inst_25821 < inst_25820);
var inst_25824 = inst_25823;
var state_25880__$1 = state_25880;
if(cljs.core.truth_(inst_25824)){
var statearr_25938_26051 = state_25880__$1;
(statearr_25938_26051[(1)] = (27));

} else {
var statearr_25939_26053 = state_25880__$1;
(statearr_25939_26053[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (34))){
var state_25880__$1 = state_25880;
var statearr_25940_26055 = state_25880__$1;
(statearr_25940_26055[(2)] = null);

(statearr_25940_26055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (17))){
var state_25880__$1 = state_25880;
var statearr_25941_26058 = state_25880__$1;
(statearr_25941_26058[(2)] = null);

(statearr_25941_26058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (3))){
var inst_25876 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25880__$1,inst_25876);
} else {
if((state_val_25882 === (12))){
var inst_25805 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25942_26061 = state_25880__$1;
(statearr_25942_26061[(2)] = inst_25805);

(statearr_25942_26061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (2))){
var state_25880__$1 = state_25880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25880__$1,(4),ch);
} else {
if((state_val_25882 === (23))){
var state_25880__$1 = state_25880;
var statearr_25943_26062 = state_25880__$1;
(statearr_25943_26062[(2)] = null);

(statearr_25943_26062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (35))){
var inst_25860 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25944_26063 = state_25880__$1;
(statearr_25944_26063[(2)] = inst_25860);

(statearr_25944_26063[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (19))){
var inst_25777 = (state_25880[(7)]);
var inst_25781 = cljs.core.chunk_first.call(null,inst_25777);
var inst_25782 = cljs.core.chunk_rest.call(null,inst_25777);
var inst_25783 = cljs.core.count.call(null,inst_25781);
var inst_25755 = inst_25782;
var inst_25756 = inst_25781;
var inst_25757 = inst_25783;
var inst_25758 = (0);
var state_25880__$1 = (function (){var statearr_25946 = state_25880;
(statearr_25946[(14)] = inst_25756);

(statearr_25946[(15)] = inst_25755);

(statearr_25946[(16)] = inst_25758);

(statearr_25946[(17)] = inst_25757);

return statearr_25946;
})();
var statearr_25947_26068 = state_25880__$1;
(statearr_25947_26068[(2)] = null);

(statearr_25947_26068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (11))){
var inst_25777 = (state_25880[(7)]);
var inst_25755 = (state_25880[(15)]);
var inst_25777__$1 = cljs.core.seq.call(null,inst_25755);
var state_25880__$1 = (function (){var statearr_25949 = state_25880;
(statearr_25949[(7)] = inst_25777__$1);

return statearr_25949;
})();
if(inst_25777__$1){
var statearr_25950_26073 = state_25880__$1;
(statearr_25950_26073[(1)] = (16));

} else {
var statearr_25951_26074 = state_25880__$1;
(statearr_25951_26074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (9))){
var inst_25807 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25952_26075 = state_25880__$1;
(statearr_25952_26075[(2)] = inst_25807);

(statearr_25952_26075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (5))){
var inst_25753 = cljs.core.deref.call(null,cs);
var inst_25754 = cljs.core.seq.call(null,inst_25753);
var inst_25755 = inst_25754;
var inst_25756 = null;
var inst_25757 = (0);
var inst_25758 = (0);
var state_25880__$1 = (function (){var statearr_25953 = state_25880;
(statearr_25953[(14)] = inst_25756);

(statearr_25953[(15)] = inst_25755);

(statearr_25953[(16)] = inst_25758);

(statearr_25953[(17)] = inst_25757);

return statearr_25953;
})();
var statearr_25954_26084 = state_25880__$1;
(statearr_25954_26084[(2)] = null);

(statearr_25954_26084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (14))){
var state_25880__$1 = state_25880;
var statearr_25955_26085 = state_25880__$1;
(statearr_25955_26085[(2)] = null);

(statearr_25955_26085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (45))){
var inst_25868 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25956_26091 = state_25880__$1;
(statearr_25956_26091[(2)] = inst_25868);

(statearr_25956_26091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (26))){
var inst_25810 = (state_25880[(29)]);
var inst_25864 = (state_25880[(2)]);
var inst_25865 = cljs.core.seq.call(null,inst_25810);
var state_25880__$1 = (function (){var statearr_25957 = state_25880;
(statearr_25957[(31)] = inst_25864);

return statearr_25957;
})();
if(inst_25865){
var statearr_25958_26094 = state_25880__$1;
(statearr_25958_26094[(1)] = (42));

} else {
var statearr_25959_26095 = state_25880__$1;
(statearr_25959_26095[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (16))){
var inst_25777 = (state_25880[(7)]);
var inst_25779 = cljs.core.chunked_seq_QMARK_.call(null,inst_25777);
var state_25880__$1 = state_25880;
if(inst_25779){
var statearr_25960_26098 = state_25880__$1;
(statearr_25960_26098[(1)] = (19));

} else {
var statearr_25961_26100 = state_25880__$1;
(statearr_25961_26100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (38))){
var inst_25857 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25962_26102 = state_25880__$1;
(statearr_25962_26102[(2)] = inst_25857);

(statearr_25962_26102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (30))){
var state_25880__$1 = state_25880;
var statearr_25963_26103 = state_25880__$1;
(statearr_25963_26103[(2)] = null);

(statearr_25963_26103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (10))){
var inst_25756 = (state_25880[(14)]);
var inst_25758 = (state_25880[(16)]);
var inst_25766 = cljs.core._nth.call(null,inst_25756,inst_25758);
var inst_25767 = cljs.core.nth.call(null,inst_25766,(0),null);
var inst_25768 = cljs.core.nth.call(null,inst_25766,(1),null);
var state_25880__$1 = (function (){var statearr_25964 = state_25880;
(statearr_25964[(26)] = inst_25767);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25768)){
var statearr_25965_26104 = state_25880__$1;
(statearr_25965_26104[(1)] = (13));

} else {
var statearr_25966_26106 = state_25880__$1;
(statearr_25966_26106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (18))){
var inst_25803 = (state_25880[(2)]);
var state_25880__$1 = state_25880;
var statearr_25967_26107 = state_25880__$1;
(statearr_25967_26107[(2)] = inst_25803);

(statearr_25967_26107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (42))){
var state_25880__$1 = state_25880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25880__$1,(45),dchan);
} else {
if((state_val_25882 === (37))){
var inst_25846 = (state_25880[(23)]);
var inst_25746 = (state_25880[(12)]);
var inst_25837 = (state_25880[(25)]);
var inst_25846__$1 = cljs.core.first.call(null,inst_25837);
var inst_25847 = cljs.core.async.put_BANG_.call(null,inst_25846__$1,inst_25746,done);
var state_25880__$1 = (function (){var statearr_25970 = state_25880;
(statearr_25970[(23)] = inst_25846__$1);

return statearr_25970;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_25971_26108 = state_25880__$1;
(statearr_25971_26108[(1)] = (39));

} else {
var statearr_25972_26109 = state_25880__$1;
(statearr_25972_26109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (8))){
var inst_25758 = (state_25880[(16)]);
var inst_25757 = (state_25880[(17)]);
var inst_25760 = (inst_25758 < inst_25757);
var inst_25761 = inst_25760;
var state_25880__$1 = state_25880;
if(cljs.core.truth_(inst_25761)){
var statearr_25973_26110 = state_25880__$1;
(statearr_25973_26110[(1)] = (10));

} else {
var statearr_25974_26111 = state_25880__$1;
(statearr_25974_26111[(1)] = (11));

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
});})(c__24228__auto___25994,cs,m,dchan,dctr,done))
;
return ((function (switch__24031__auto__,c__24228__auto___25994,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24032__auto__ = null;
var cljs$core$async$mult_$_state_machine__24032__auto____0 = (function (){
var statearr_25978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25978[(0)] = cljs$core$async$mult_$_state_machine__24032__auto__);

(statearr_25978[(1)] = (1));

return statearr_25978;
});
var cljs$core$async$mult_$_state_machine__24032__auto____1 = (function (state_25880){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_25880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e25979){if((e25979 instanceof Object)){
var ex__24035__auto__ = e25979;
var statearr_25980_26114 = state_25880;
(statearr_25980_26114[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26116 = state_25880;
state_25880 = G__26116;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24032__auto__ = function(state_25880){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24032__auto____1.call(this,state_25880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24032__auto____0;
cljs$core$async$mult_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24032__auto____1;
return cljs$core$async$mult_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___25994,cs,m,dchan,dctr,done))
})();
var state__24230__auto__ = (function (){var statearr_25981 = f__24229__auto__.call(null);
(statearr_25981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___25994);

return statearr_25981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___25994,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26117 = [];
var len__21530__auto___26124 = arguments.length;
var i__21531__auto___26125 = (0);
while(true){
if((i__21531__auto___26125 < len__21530__auto___26124)){
args26117.push((arguments[i__21531__auto___26125]));

var G__26126 = (i__21531__auto___26125 + (1));
i__21531__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var G__26123 = args26117.length;
switch (G__26123) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26117.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m);
} else {
var m__21119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,state_map);
} else {
var m__21119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,mode);
} else {
var m__21119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___26159 = arguments.length;
var i__21531__auto___26160 = (0);
while(true){
if((i__21531__auto___26160 < len__21530__auto___26159)){
args__21537__auto__.push((arguments[i__21531__auto___26160]));

var G__26161 = (i__21531__auto___26160 + (1));
i__21531__auto___26160 = G__26161;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26153){
var map__26154 = p__26153;
var map__26154__$1 = ((((!((map__26154 == null)))?((((map__26154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26154):map__26154);
var opts = map__26154__$1;
var statearr_26156_26162 = state;
(statearr_26156_26162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26154,map__26154__$1,opts){
return (function (val){
var statearr_26157_26163 = state;
(statearr_26157_26163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26154,map__26154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26158_26164 = state;
(statearr_26158_26164[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26149){
var G__26150 = cljs.core.first.call(null,seq26149);
var seq26149__$1 = cljs.core.next.call(null,seq26149);
var G__26151 = cljs.core.first.call(null,seq26149__$1);
var seq26149__$2 = cljs.core.next.call(null,seq26149__$1);
var G__26152 = cljs.core.first.call(null,seq26149__$2);
var seq26149__$3 = cljs.core.next.call(null,seq26149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26150,G__26151,G__26152,seq26149__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26357 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26358){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26358 = meta26358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26359,meta26358__$1){
var self__ = this;
var _26359__$1 = this;
return (new cljs.core.async.t_cljs$core$async26357(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26359){
var self__ = this;
var _26359__$1 = this;
return self__.meta26358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26358","meta26358",2074363603,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26357";

cljs.core.async.t_cljs$core$async26357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26358){
return (new cljs.core.async.t_cljs$core$async26357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26357(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24228__auto___26534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26459){
var state_val_26460 = (state_26459[(1)]);
if((state_val_26460 === (7))){
var inst_26375 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
var statearr_26461_26535 = state_26459__$1;
(statearr_26461_26535[(2)] = inst_26375);

(statearr_26461_26535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (20))){
var inst_26387 = (state_26459[(7)]);
var state_26459__$1 = state_26459;
var statearr_26462_26536 = state_26459__$1;
(statearr_26462_26536[(2)] = inst_26387);

(statearr_26462_26536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (27))){
var state_26459__$1 = state_26459;
var statearr_26463_26537 = state_26459__$1;
(statearr_26463_26537[(2)] = null);

(statearr_26463_26537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (1))){
var inst_26363 = (state_26459[(8)]);
var inst_26363__$1 = calc_state.call(null);
var inst_26365 = (inst_26363__$1 == null);
var inst_26366 = cljs.core.not.call(null,inst_26365);
var state_26459__$1 = (function (){var statearr_26464 = state_26459;
(statearr_26464[(8)] = inst_26363__$1);

return statearr_26464;
})();
if(inst_26366){
var statearr_26465_26540 = state_26459__$1;
(statearr_26465_26540[(1)] = (2));

} else {
var statearr_26466_26541 = state_26459__$1;
(statearr_26466_26541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (24))){
var inst_26433 = (state_26459[(9)]);
var inst_26419 = (state_26459[(10)]);
var inst_26410 = (state_26459[(11)]);
var inst_26433__$1 = inst_26410.call(null,inst_26419);
var state_26459__$1 = (function (){var statearr_26467 = state_26459;
(statearr_26467[(9)] = inst_26433__$1);

return statearr_26467;
})();
if(cljs.core.truth_(inst_26433__$1)){
var statearr_26468_26544 = state_26459__$1;
(statearr_26468_26544[(1)] = (29));

} else {
var statearr_26469_26545 = state_26459__$1;
(statearr_26469_26545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (4))){
var inst_26378 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26378)){
var statearr_26470_26547 = state_26459__$1;
(statearr_26470_26547[(1)] = (8));

} else {
var statearr_26471_26548 = state_26459__$1;
(statearr_26471_26548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (15))){
var inst_26404 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26404)){
var statearr_26472_26549 = state_26459__$1;
(statearr_26472_26549[(1)] = (19));

} else {
var statearr_26473_26550 = state_26459__$1;
(statearr_26473_26550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (21))){
var inst_26409 = (state_26459[(12)]);
var inst_26409__$1 = (state_26459[(2)]);
var inst_26410 = cljs.core.get.call(null,inst_26409__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26411 = cljs.core.get.call(null,inst_26409__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26412 = cljs.core.get.call(null,inst_26409__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26459__$1 = (function (){var statearr_26474 = state_26459;
(statearr_26474[(13)] = inst_26411);

(statearr_26474[(12)] = inst_26409__$1);

(statearr_26474[(11)] = inst_26410);

return statearr_26474;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26459__$1,(22),inst_26412);
} else {
if((state_val_26460 === (31))){
var inst_26441 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26441)){
var statearr_26475_26551 = state_26459__$1;
(statearr_26475_26551[(1)] = (32));

} else {
var statearr_26476_26552 = state_26459__$1;
(statearr_26476_26552[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (32))){
var inst_26418 = (state_26459[(14)]);
var state_26459__$1 = state_26459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26459__$1,(35),out,inst_26418);
} else {
if((state_val_26460 === (33))){
var inst_26409 = (state_26459[(12)]);
var inst_26387 = inst_26409;
var state_26459__$1 = (function (){var statearr_26477 = state_26459;
(statearr_26477[(7)] = inst_26387);

return statearr_26477;
})();
var statearr_26478_26553 = state_26459__$1;
(statearr_26478_26553[(2)] = null);

(statearr_26478_26553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (13))){
var inst_26387 = (state_26459[(7)]);
var inst_26394 = inst_26387.cljs$lang$protocol_mask$partition0$;
var inst_26395 = (inst_26394 & (64));
var inst_26396 = inst_26387.cljs$core$ISeq$;
var inst_26397 = (inst_26395) || (inst_26396);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26397)){
var statearr_26479_26557 = state_26459__$1;
(statearr_26479_26557[(1)] = (16));

} else {
var statearr_26480_26558 = state_26459__$1;
(statearr_26480_26558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (22))){
var inst_26418 = (state_26459[(14)]);
var inst_26419 = (state_26459[(10)]);
var inst_26417 = (state_26459[(2)]);
var inst_26418__$1 = cljs.core.nth.call(null,inst_26417,(0),null);
var inst_26419__$1 = cljs.core.nth.call(null,inst_26417,(1),null);
var inst_26420 = (inst_26418__$1 == null);
var inst_26421 = cljs.core._EQ_.call(null,inst_26419__$1,change);
var inst_26422 = (inst_26420) || (inst_26421);
var state_26459__$1 = (function (){var statearr_26481 = state_26459;
(statearr_26481[(14)] = inst_26418__$1);

(statearr_26481[(10)] = inst_26419__$1);

return statearr_26481;
})();
if(cljs.core.truth_(inst_26422)){
var statearr_26482_26561 = state_26459__$1;
(statearr_26482_26561[(1)] = (23));

} else {
var statearr_26483_26562 = state_26459__$1;
(statearr_26483_26562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (36))){
var inst_26409 = (state_26459[(12)]);
var inst_26387 = inst_26409;
var state_26459__$1 = (function (){var statearr_26484 = state_26459;
(statearr_26484[(7)] = inst_26387);

return statearr_26484;
})();
var statearr_26485_26563 = state_26459__$1;
(statearr_26485_26563[(2)] = null);

(statearr_26485_26563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (29))){
var inst_26433 = (state_26459[(9)]);
var state_26459__$1 = state_26459;
var statearr_26486_26564 = state_26459__$1;
(statearr_26486_26564[(2)] = inst_26433);

(statearr_26486_26564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (6))){
var state_26459__$1 = state_26459;
var statearr_26487_26565 = state_26459__$1;
(statearr_26487_26565[(2)] = false);

(statearr_26487_26565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (28))){
var inst_26429 = (state_26459[(2)]);
var inst_26430 = calc_state.call(null);
var inst_26387 = inst_26430;
var state_26459__$1 = (function (){var statearr_26488 = state_26459;
(statearr_26488[(7)] = inst_26387);

(statearr_26488[(15)] = inst_26429);

return statearr_26488;
})();
var statearr_26489_26566 = state_26459__$1;
(statearr_26489_26566[(2)] = null);

(statearr_26489_26566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (25))){
var inst_26455 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
var statearr_26490_26567 = state_26459__$1;
(statearr_26490_26567[(2)] = inst_26455);

(statearr_26490_26567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (34))){
var inst_26453 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
var statearr_26491_26568 = state_26459__$1;
(statearr_26491_26568[(2)] = inst_26453);

(statearr_26491_26568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (17))){
var state_26459__$1 = state_26459;
var statearr_26492_26569 = state_26459__$1;
(statearr_26492_26569[(2)] = false);

(statearr_26492_26569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (3))){
var state_26459__$1 = state_26459;
var statearr_26493_26570 = state_26459__$1;
(statearr_26493_26570[(2)] = false);

(statearr_26493_26570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (12))){
var inst_26457 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26459__$1,inst_26457);
} else {
if((state_val_26460 === (2))){
var inst_26363 = (state_26459[(8)]);
var inst_26368 = inst_26363.cljs$lang$protocol_mask$partition0$;
var inst_26369 = (inst_26368 & (64));
var inst_26370 = inst_26363.cljs$core$ISeq$;
var inst_26371 = (inst_26369) || (inst_26370);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26371)){
var statearr_26494_26571 = state_26459__$1;
(statearr_26494_26571[(1)] = (5));

} else {
var statearr_26495_26572 = state_26459__$1;
(statearr_26495_26572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (23))){
var inst_26418 = (state_26459[(14)]);
var inst_26424 = (inst_26418 == null);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26424)){
var statearr_26496_26573 = state_26459__$1;
(statearr_26496_26573[(1)] = (26));

} else {
var statearr_26497_26574 = state_26459__$1;
(statearr_26497_26574[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (35))){
var inst_26444 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
if(cljs.core.truth_(inst_26444)){
var statearr_26498_26575 = state_26459__$1;
(statearr_26498_26575[(1)] = (36));

} else {
var statearr_26499_26576 = state_26459__$1;
(statearr_26499_26576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (19))){
var inst_26387 = (state_26459[(7)]);
var inst_26406 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26387);
var state_26459__$1 = state_26459;
var statearr_26500_26577 = state_26459__$1;
(statearr_26500_26577[(2)] = inst_26406);

(statearr_26500_26577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (11))){
var inst_26387 = (state_26459[(7)]);
var inst_26391 = (inst_26387 == null);
var inst_26392 = cljs.core.not.call(null,inst_26391);
var state_26459__$1 = state_26459;
if(inst_26392){
var statearr_26501_26578 = state_26459__$1;
(statearr_26501_26578[(1)] = (13));

} else {
var statearr_26502_26579 = state_26459__$1;
(statearr_26502_26579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (9))){
var inst_26363 = (state_26459[(8)]);
var state_26459__$1 = state_26459;
var statearr_26503_26580 = state_26459__$1;
(statearr_26503_26580[(2)] = inst_26363);

(statearr_26503_26580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (5))){
var state_26459__$1 = state_26459;
var statearr_26504_26581 = state_26459__$1;
(statearr_26504_26581[(2)] = true);

(statearr_26504_26581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (14))){
var state_26459__$1 = state_26459;
var statearr_26505_26583 = state_26459__$1;
(statearr_26505_26583[(2)] = false);

(statearr_26505_26583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (26))){
var inst_26419 = (state_26459[(10)]);
var inst_26426 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26419);
var state_26459__$1 = state_26459;
var statearr_26506_26587 = state_26459__$1;
(statearr_26506_26587[(2)] = inst_26426);

(statearr_26506_26587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (16))){
var state_26459__$1 = state_26459;
var statearr_26507_26588 = state_26459__$1;
(statearr_26507_26588[(2)] = true);

(statearr_26507_26588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (38))){
var inst_26449 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
var statearr_26508_26590 = state_26459__$1;
(statearr_26508_26590[(2)] = inst_26449);

(statearr_26508_26590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (30))){
var inst_26411 = (state_26459[(13)]);
var inst_26419 = (state_26459[(10)]);
var inst_26410 = (state_26459[(11)]);
var inst_26436 = cljs.core.empty_QMARK_.call(null,inst_26410);
var inst_26437 = inst_26411.call(null,inst_26419);
var inst_26438 = cljs.core.not.call(null,inst_26437);
var inst_26439 = (inst_26436) && (inst_26438);
var state_26459__$1 = state_26459;
var statearr_26509_26597 = state_26459__$1;
(statearr_26509_26597[(2)] = inst_26439);

(statearr_26509_26597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (10))){
var inst_26363 = (state_26459[(8)]);
var inst_26383 = (state_26459[(2)]);
var inst_26384 = cljs.core.get.call(null,inst_26383,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26385 = cljs.core.get.call(null,inst_26383,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26386 = cljs.core.get.call(null,inst_26383,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26387 = inst_26363;
var state_26459__$1 = (function (){var statearr_26510 = state_26459;
(statearr_26510[(16)] = inst_26386);

(statearr_26510[(17)] = inst_26384);

(statearr_26510[(7)] = inst_26387);

(statearr_26510[(18)] = inst_26385);

return statearr_26510;
})();
var statearr_26511_26598 = state_26459__$1;
(statearr_26511_26598[(2)] = null);

(statearr_26511_26598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (18))){
var inst_26401 = (state_26459[(2)]);
var state_26459__$1 = state_26459;
var statearr_26512_26599 = state_26459__$1;
(statearr_26512_26599[(2)] = inst_26401);

(statearr_26512_26599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (37))){
var state_26459__$1 = state_26459;
var statearr_26513_26600 = state_26459__$1;
(statearr_26513_26600[(2)] = null);

(statearr_26513_26600[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26460 === (8))){
var inst_26363 = (state_26459[(8)]);
var inst_26380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26363);
var state_26459__$1 = state_26459;
var statearr_26514_26601 = state_26459__$1;
(statearr_26514_26601[(2)] = inst_26380);

(statearr_26514_26601[(1)] = (10));


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
});})(c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24031__auto__,c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24032__auto__ = null;
var cljs$core$async$mix_$_state_machine__24032__auto____0 = (function (){
var statearr_26518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26518[(0)] = cljs$core$async$mix_$_state_machine__24032__auto__);

(statearr_26518[(1)] = (1));

return statearr_26518;
});
var cljs$core$async$mix_$_state_machine__24032__auto____1 = (function (state_26459){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_26459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e26519){if((e26519 instanceof Object)){
var ex__24035__auto__ = e26519;
var statearr_26520_26609 = state_26459;
(statearr_26520_26609[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26610 = state_26459;
state_26459 = G__26610;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24032__auto__ = function(state_26459){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24032__auto____1.call(this,state_26459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24032__auto____0;
cljs$core$async$mix_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24032__auto____1;
return cljs$core$async$mix_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24230__auto__ = (function (){var statearr_26521 = f__24229__auto__.call(null);
(statearr_26521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___26534);

return statearr_26521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26611 = [];
var len__21530__auto___26628 = arguments.length;
var i__21531__auto___26629 = (0);
while(true){
if((i__21531__auto___26629 < len__21530__auto___26628)){
args26611.push((arguments[i__21531__auto___26629]));

var G__26630 = (i__21531__auto___26629 + (1));
i__21531__auto___26629 = G__26630;
continue;
} else {
}
break;
}

var G__26613 = args26611.length;
switch (G__26613) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26611.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args26645 = [];
var len__21530__auto___26778 = arguments.length;
var i__21531__auto___26779 = (0);
while(true){
if((i__21531__auto___26779 < len__21530__auto___26778)){
args26645.push((arguments[i__21531__auto___26779]));

var G__26780 = (i__21531__auto___26779 + (1));
i__21531__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var G__26647 = args26645.length;
switch (G__26647) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26645.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20455__auto__,mults){
return (function (p1__26644_SHARP_){
if(cljs.core.truth_(p1__26644_SHARP_.call(null,topic))){
return p1__26644_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26644_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26648 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26649){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26649 = meta26649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26650,meta26649__$1){
var self__ = this;
var _26650__$1 = this;
return (new cljs.core.async.t_cljs$core$async26648(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26649__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26650){
var self__ = this;
var _26650__$1 = this;
return self__.meta26649;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26649","meta26649",1624460500,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26648";

cljs.core.async.t_cljs$core$async26648.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26648");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26648 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26649){
return (new cljs.core.async.t_cljs$core$async26648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26649));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26648(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24228__auto___26782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___26782,mults,ensure_mult,p){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___26782,mults,ensure_mult,p){
return (function (state_26722){
var state_val_26723 = (state_26722[(1)]);
if((state_val_26723 === (7))){
var inst_26718 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26724_26783 = state_26722__$1;
(statearr_26724_26783[(2)] = inst_26718);

(statearr_26724_26783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (20))){
var state_26722__$1 = state_26722;
var statearr_26725_26784 = state_26722__$1;
(statearr_26725_26784[(2)] = null);

(statearr_26725_26784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (1))){
var state_26722__$1 = state_26722;
var statearr_26726_26785 = state_26722__$1;
(statearr_26726_26785[(2)] = null);

(statearr_26726_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (24))){
var inst_26701 = (state_26722[(7)]);
var inst_26710 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26701);
var state_26722__$1 = state_26722;
var statearr_26727_26786 = state_26722__$1;
(statearr_26727_26786[(2)] = inst_26710);

(statearr_26727_26786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (4))){
var inst_26653 = (state_26722[(8)]);
var inst_26653__$1 = (state_26722[(2)]);
var inst_26654 = (inst_26653__$1 == null);
var state_26722__$1 = (function (){var statearr_26728 = state_26722;
(statearr_26728[(8)] = inst_26653__$1);

return statearr_26728;
})();
if(cljs.core.truth_(inst_26654)){
var statearr_26729_26787 = state_26722__$1;
(statearr_26729_26787[(1)] = (5));

} else {
var statearr_26730_26788 = state_26722__$1;
(statearr_26730_26788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (15))){
var inst_26695 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26731_26789 = state_26722__$1;
(statearr_26731_26789[(2)] = inst_26695);

(statearr_26731_26789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (21))){
var inst_26715 = (state_26722[(2)]);
var state_26722__$1 = (function (){var statearr_26732 = state_26722;
(statearr_26732[(9)] = inst_26715);

return statearr_26732;
})();
var statearr_26733_26791 = state_26722__$1;
(statearr_26733_26791[(2)] = null);

(statearr_26733_26791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (13))){
var inst_26677 = (state_26722[(10)]);
var inst_26679 = cljs.core.chunked_seq_QMARK_.call(null,inst_26677);
var state_26722__$1 = state_26722;
if(inst_26679){
var statearr_26734_26792 = state_26722__$1;
(statearr_26734_26792[(1)] = (16));

} else {
var statearr_26735_26793 = state_26722__$1;
(statearr_26735_26793[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (22))){
var inst_26707 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
if(cljs.core.truth_(inst_26707)){
var statearr_26736_26794 = state_26722__$1;
(statearr_26736_26794[(1)] = (23));

} else {
var statearr_26737_26795 = state_26722__$1;
(statearr_26737_26795[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (6))){
var inst_26701 = (state_26722[(7)]);
var inst_26653 = (state_26722[(8)]);
var inst_26703 = (state_26722[(11)]);
var inst_26701__$1 = topic_fn.call(null,inst_26653);
var inst_26702 = cljs.core.deref.call(null,mults);
var inst_26703__$1 = cljs.core.get.call(null,inst_26702,inst_26701__$1);
var state_26722__$1 = (function (){var statearr_26738 = state_26722;
(statearr_26738[(7)] = inst_26701__$1);

(statearr_26738[(11)] = inst_26703__$1);

return statearr_26738;
})();
if(cljs.core.truth_(inst_26703__$1)){
var statearr_26739_26797 = state_26722__$1;
(statearr_26739_26797[(1)] = (19));

} else {
var statearr_26740_26798 = state_26722__$1;
(statearr_26740_26798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (25))){
var inst_26712 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26741_26799 = state_26722__$1;
(statearr_26741_26799[(2)] = inst_26712);

(statearr_26741_26799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (17))){
var inst_26677 = (state_26722[(10)]);
var inst_26686 = cljs.core.first.call(null,inst_26677);
var inst_26687 = cljs.core.async.muxch_STAR_.call(null,inst_26686);
var inst_26688 = cljs.core.async.close_BANG_.call(null,inst_26687);
var inst_26689 = cljs.core.next.call(null,inst_26677);
var inst_26663 = inst_26689;
var inst_26664 = null;
var inst_26665 = (0);
var inst_26666 = (0);
var state_26722__$1 = (function (){var statearr_26743 = state_26722;
(statearr_26743[(12)] = inst_26664);

(statearr_26743[(13)] = inst_26665);

(statearr_26743[(14)] = inst_26663);

(statearr_26743[(15)] = inst_26666);

(statearr_26743[(16)] = inst_26688);

return statearr_26743;
})();
var statearr_26745_26801 = state_26722__$1;
(statearr_26745_26801[(2)] = null);

(statearr_26745_26801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (3))){
var inst_26720 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26722__$1,inst_26720);
} else {
if((state_val_26723 === (12))){
var inst_26697 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26747_26802 = state_26722__$1;
(statearr_26747_26802[(2)] = inst_26697);

(statearr_26747_26802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (2))){
var state_26722__$1 = state_26722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26722__$1,(4),ch);
} else {
if((state_val_26723 === (23))){
var state_26722__$1 = state_26722;
var statearr_26749_26804 = state_26722__$1;
(statearr_26749_26804[(2)] = null);

(statearr_26749_26804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (19))){
var inst_26653 = (state_26722[(8)]);
var inst_26703 = (state_26722[(11)]);
var inst_26705 = cljs.core.async.muxch_STAR_.call(null,inst_26703);
var state_26722__$1 = state_26722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26722__$1,(22),inst_26705,inst_26653);
} else {
if((state_val_26723 === (11))){
var inst_26677 = (state_26722[(10)]);
var inst_26663 = (state_26722[(14)]);
var inst_26677__$1 = cljs.core.seq.call(null,inst_26663);
var state_26722__$1 = (function (){var statearr_26750 = state_26722;
(statearr_26750[(10)] = inst_26677__$1);

return statearr_26750;
})();
if(inst_26677__$1){
var statearr_26751_26805 = state_26722__$1;
(statearr_26751_26805[(1)] = (13));

} else {
var statearr_26752_26806 = state_26722__$1;
(statearr_26752_26806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (9))){
var inst_26699 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26754_26807 = state_26722__$1;
(statearr_26754_26807[(2)] = inst_26699);

(statearr_26754_26807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (5))){
var inst_26660 = cljs.core.deref.call(null,mults);
var inst_26661 = cljs.core.vals.call(null,inst_26660);
var inst_26662 = cljs.core.seq.call(null,inst_26661);
var inst_26663 = inst_26662;
var inst_26664 = null;
var inst_26665 = (0);
var inst_26666 = (0);
var state_26722__$1 = (function (){var statearr_26755 = state_26722;
(statearr_26755[(12)] = inst_26664);

(statearr_26755[(13)] = inst_26665);

(statearr_26755[(14)] = inst_26663);

(statearr_26755[(15)] = inst_26666);

return statearr_26755;
})();
var statearr_26756_26808 = state_26722__$1;
(statearr_26756_26808[(2)] = null);

(statearr_26756_26808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (14))){
var state_26722__$1 = state_26722;
var statearr_26761_26809 = state_26722__$1;
(statearr_26761_26809[(2)] = null);

(statearr_26761_26809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (16))){
var inst_26677 = (state_26722[(10)]);
var inst_26681 = cljs.core.chunk_first.call(null,inst_26677);
var inst_26682 = cljs.core.chunk_rest.call(null,inst_26677);
var inst_26683 = cljs.core.count.call(null,inst_26681);
var inst_26663 = inst_26682;
var inst_26664 = inst_26681;
var inst_26665 = inst_26683;
var inst_26666 = (0);
var state_26722__$1 = (function (){var statearr_26762 = state_26722;
(statearr_26762[(12)] = inst_26664);

(statearr_26762[(13)] = inst_26665);

(statearr_26762[(14)] = inst_26663);

(statearr_26762[(15)] = inst_26666);

return statearr_26762;
})();
var statearr_26763_26810 = state_26722__$1;
(statearr_26763_26810[(2)] = null);

(statearr_26763_26810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (10))){
var inst_26664 = (state_26722[(12)]);
var inst_26665 = (state_26722[(13)]);
var inst_26663 = (state_26722[(14)]);
var inst_26666 = (state_26722[(15)]);
var inst_26671 = cljs.core._nth.call(null,inst_26664,inst_26666);
var inst_26672 = cljs.core.async.muxch_STAR_.call(null,inst_26671);
var inst_26673 = cljs.core.async.close_BANG_.call(null,inst_26672);
var inst_26674 = (inst_26666 + (1));
var tmp26758 = inst_26664;
var tmp26759 = inst_26665;
var tmp26760 = inst_26663;
var inst_26663__$1 = tmp26760;
var inst_26664__$1 = tmp26758;
var inst_26665__$1 = tmp26759;
var inst_26666__$1 = inst_26674;
var state_26722__$1 = (function (){var statearr_26765 = state_26722;
(statearr_26765[(12)] = inst_26664__$1);

(statearr_26765[(17)] = inst_26673);

(statearr_26765[(13)] = inst_26665__$1);

(statearr_26765[(14)] = inst_26663__$1);

(statearr_26765[(15)] = inst_26666__$1);

return statearr_26765;
})();
var statearr_26766_26815 = state_26722__$1;
(statearr_26766_26815[(2)] = null);

(statearr_26766_26815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (18))){
var inst_26692 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
var statearr_26768_26816 = state_26722__$1;
(statearr_26768_26816[(2)] = inst_26692);

(statearr_26768_26816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26723 === (8))){
var inst_26665 = (state_26722[(13)]);
var inst_26666 = (state_26722[(15)]);
var inst_26668 = (inst_26666 < inst_26665);
var inst_26669 = inst_26668;
var state_26722__$1 = state_26722;
if(cljs.core.truth_(inst_26669)){
var statearr_26769_26817 = state_26722__$1;
(statearr_26769_26817[(1)] = (10));

} else {
var statearr_26770_26818 = state_26722__$1;
(statearr_26770_26818[(1)] = (11));

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
});})(c__24228__auto___26782,mults,ensure_mult,p))
;
return ((function (switch__24031__auto__,c__24228__auto___26782,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_26774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26774[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_26774[(1)] = (1));

return statearr_26774;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_26722){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_26722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e26775){if((e26775 instanceof Object)){
var ex__24035__auto__ = e26775;
var statearr_26776_26819 = state_26722;
(statearr_26776_26819[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26820 = state_26722;
state_26722 = G__26820;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_26722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_26722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___26782,mults,ensure_mult,p))
})();
var state__24230__auto__ = (function (){var statearr_26777 = f__24229__auto__.call(null);
(statearr_26777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___26782);

return statearr_26777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___26782,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26821 = [];
var len__21530__auto___26824 = arguments.length;
var i__21531__auto___26825 = (0);
while(true){
if((i__21531__auto___26825 < len__21530__auto___26824)){
args26821.push((arguments[i__21531__auto___26825]));

var G__26826 = (i__21531__auto___26825 + (1));
i__21531__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var G__26823 = args26821.length;
switch (G__26823) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26821.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26830 = [];
var len__21530__auto___26833 = arguments.length;
var i__21531__auto___26834 = (0);
while(true){
if((i__21531__auto___26834 < len__21530__auto___26833)){
args26830.push((arguments[i__21531__auto___26834]));

var G__26835 = (i__21531__auto___26834 + (1));
i__21531__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26832 = args26830.length;
switch (G__26832) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26830.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args26837 = [];
var len__21530__auto___26916 = arguments.length;
var i__21531__auto___26917 = (0);
while(true){
if((i__21531__auto___26917 < len__21530__auto___26916)){
args26837.push((arguments[i__21531__auto___26917]));

var G__26918 = (i__21531__auto___26917 + (1));
i__21531__auto___26917 = G__26918;
continue;
} else {
}
break;
}

var G__26839 = args26837.length;
switch (G__26839) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26837.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24228__auto___26922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26878){
var state_val_26879 = (state_26878[(1)]);
if((state_val_26879 === (7))){
var state_26878__$1 = state_26878;
var statearr_26880_26929 = state_26878__$1;
(statearr_26880_26929[(2)] = null);

(statearr_26880_26929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (1))){
var state_26878__$1 = state_26878;
var statearr_26881_26930 = state_26878__$1;
(statearr_26881_26930[(2)] = null);

(statearr_26881_26930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (4))){
var inst_26842 = (state_26878[(7)]);
var inst_26844 = (inst_26842 < cnt);
var state_26878__$1 = state_26878;
if(cljs.core.truth_(inst_26844)){
var statearr_26882_26931 = state_26878__$1;
(statearr_26882_26931[(1)] = (6));

} else {
var statearr_26883_26932 = state_26878__$1;
(statearr_26883_26932[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (15))){
var inst_26874 = (state_26878[(2)]);
var state_26878__$1 = state_26878;
var statearr_26884_26933 = state_26878__$1;
(statearr_26884_26933[(2)] = inst_26874);

(statearr_26884_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (13))){
var inst_26867 = cljs.core.async.close_BANG_.call(null,out);
var state_26878__$1 = state_26878;
var statearr_26885_26934 = state_26878__$1;
(statearr_26885_26934[(2)] = inst_26867);

(statearr_26885_26934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (6))){
var state_26878__$1 = state_26878;
var statearr_26886_26935 = state_26878__$1;
(statearr_26886_26935[(2)] = null);

(statearr_26886_26935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (3))){
var inst_26876 = (state_26878[(2)]);
var state_26878__$1 = state_26878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26878__$1,inst_26876);
} else {
if((state_val_26879 === (12))){
var inst_26864 = (state_26878[(8)]);
var inst_26864__$1 = (state_26878[(2)]);
var inst_26865 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26864__$1);
var state_26878__$1 = (function (){var statearr_26887 = state_26878;
(statearr_26887[(8)] = inst_26864__$1);

return statearr_26887;
})();
if(cljs.core.truth_(inst_26865)){
var statearr_26888_26936 = state_26878__$1;
(statearr_26888_26936[(1)] = (13));

} else {
var statearr_26889_26937 = state_26878__$1;
(statearr_26889_26937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (2))){
var inst_26841 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26842 = (0);
var state_26878__$1 = (function (){var statearr_26890 = state_26878;
(statearr_26890[(7)] = inst_26842);

(statearr_26890[(9)] = inst_26841);

return statearr_26890;
})();
var statearr_26891_26938 = state_26878__$1;
(statearr_26891_26938[(2)] = null);

(statearr_26891_26938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (11))){
var inst_26842 = (state_26878[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26878,(10),Object,null,(9));
var inst_26851 = chs__$1.call(null,inst_26842);
var inst_26852 = done.call(null,inst_26842);
var inst_26853 = cljs.core.async.take_BANG_.call(null,inst_26851,inst_26852);
var state_26878__$1 = state_26878;
var statearr_26896_26939 = state_26878__$1;
(statearr_26896_26939[(2)] = inst_26853);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26878__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (9))){
var inst_26842 = (state_26878[(7)]);
var inst_26855 = (state_26878[(2)]);
var inst_26856 = (inst_26842 + (1));
var inst_26842__$1 = inst_26856;
var state_26878__$1 = (function (){var statearr_26897 = state_26878;
(statearr_26897[(10)] = inst_26855);

(statearr_26897[(7)] = inst_26842__$1);

return statearr_26897;
})();
var statearr_26898_26940 = state_26878__$1;
(statearr_26898_26940[(2)] = null);

(statearr_26898_26940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (5))){
var inst_26862 = (state_26878[(2)]);
var state_26878__$1 = (function (){var statearr_26900 = state_26878;
(statearr_26900[(11)] = inst_26862);

return statearr_26900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26878__$1,(12),dchan);
} else {
if((state_val_26879 === (14))){
var inst_26864 = (state_26878[(8)]);
var inst_26869 = cljs.core.apply.call(null,f,inst_26864);
var state_26878__$1 = state_26878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26878__$1,(16),out,inst_26869);
} else {
if((state_val_26879 === (16))){
var inst_26871 = (state_26878[(2)]);
var state_26878__$1 = (function (){var statearr_26904 = state_26878;
(statearr_26904[(12)] = inst_26871);

return statearr_26904;
})();
var statearr_26905_26943 = state_26878__$1;
(statearr_26905_26943[(2)] = null);

(statearr_26905_26943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (10))){
var inst_26846 = (state_26878[(2)]);
var inst_26847 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26878__$1 = (function (){var statearr_26906 = state_26878;
(statearr_26906[(13)] = inst_26846);

return statearr_26906;
})();
var statearr_26907_26945 = state_26878__$1;
(statearr_26907_26945[(2)] = inst_26847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26878__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26879 === (8))){
var inst_26860 = (state_26878[(2)]);
var state_26878__$1 = state_26878;
var statearr_26908_26946 = state_26878__$1;
(statearr_26908_26946[(2)] = inst_26860);

(statearr_26908_26946[(1)] = (5));


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
});})(c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24031__auto__,c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_26912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26912[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_26912[(1)] = (1));

return statearr_26912;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_26878){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_26878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e26913){if((e26913 instanceof Object)){
var ex__24035__auto__ = e26913;
var statearr_26914_26955 = state_26878;
(statearr_26914_26955[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26956 = state_26878;
state_26878 = G__26956;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_26878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_26878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24230__auto__ = (function (){var statearr_26915 = f__24229__auto__.call(null);
(statearr_26915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___26922);

return statearr_26915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___26922,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26958 = [];
var len__21530__auto___27016 = arguments.length;
var i__21531__auto___27017 = (0);
while(true){
if((i__21531__auto___27017 < len__21530__auto___27016)){
args26958.push((arguments[i__21531__auto___27017]));

var G__27018 = (i__21531__auto___27017 + (1));
i__21531__auto___27017 = G__27018;
continue;
} else {
}
break;
}

var G__26960 = args26958.length;
switch (G__26960) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26958.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___27020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___27020,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___27020,out){
return (function (state_26992){
var state_val_26993 = (state_26992[(1)]);
if((state_val_26993 === (7))){
var inst_26972 = (state_26992[(7)]);
var inst_26971 = (state_26992[(8)]);
var inst_26971__$1 = (state_26992[(2)]);
var inst_26972__$1 = cljs.core.nth.call(null,inst_26971__$1,(0),null);
var inst_26973 = cljs.core.nth.call(null,inst_26971__$1,(1),null);
var inst_26974 = (inst_26972__$1 == null);
var state_26992__$1 = (function (){var statearr_26994 = state_26992;
(statearr_26994[(9)] = inst_26973);

(statearr_26994[(7)] = inst_26972__$1);

(statearr_26994[(8)] = inst_26971__$1);

return statearr_26994;
})();
if(cljs.core.truth_(inst_26974)){
var statearr_26995_27024 = state_26992__$1;
(statearr_26995_27024[(1)] = (8));

} else {
var statearr_26996_27025 = state_26992__$1;
(statearr_26996_27025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (1))){
var inst_26961 = cljs.core.vec.call(null,chs);
var inst_26962 = inst_26961;
var state_26992__$1 = (function (){var statearr_26997 = state_26992;
(statearr_26997[(10)] = inst_26962);

return statearr_26997;
})();
var statearr_26998_27026 = state_26992__$1;
(statearr_26998_27026[(2)] = null);

(statearr_26998_27026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (4))){
var inst_26962 = (state_26992[(10)]);
var state_26992__$1 = state_26992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26992__$1,(7),inst_26962);
} else {
if((state_val_26993 === (6))){
var inst_26988 = (state_26992[(2)]);
var state_26992__$1 = state_26992;
var statearr_26999_27031 = state_26992__$1;
(statearr_26999_27031[(2)] = inst_26988);

(statearr_26999_27031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (3))){
var inst_26990 = (state_26992[(2)]);
var state_26992__$1 = state_26992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26992__$1,inst_26990);
} else {
if((state_val_26993 === (2))){
var inst_26962 = (state_26992[(10)]);
var inst_26964 = cljs.core.count.call(null,inst_26962);
var inst_26965 = (inst_26964 > (0));
var state_26992__$1 = state_26992;
if(cljs.core.truth_(inst_26965)){
var statearr_27001_27045 = state_26992__$1;
(statearr_27001_27045[(1)] = (4));

} else {
var statearr_27002_27047 = state_26992__$1;
(statearr_27002_27047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (11))){
var inst_26962 = (state_26992[(10)]);
var inst_26981 = (state_26992[(2)]);
var tmp27000 = inst_26962;
var inst_26962__$1 = tmp27000;
var state_26992__$1 = (function (){var statearr_27003 = state_26992;
(statearr_27003[(10)] = inst_26962__$1);

(statearr_27003[(11)] = inst_26981);

return statearr_27003;
})();
var statearr_27004_27055 = state_26992__$1;
(statearr_27004_27055[(2)] = null);

(statearr_27004_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (9))){
var inst_26972 = (state_26992[(7)]);
var state_26992__$1 = state_26992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26992__$1,(11),out,inst_26972);
} else {
if((state_val_26993 === (5))){
var inst_26986 = cljs.core.async.close_BANG_.call(null,out);
var state_26992__$1 = state_26992;
var statearr_27005_27056 = state_26992__$1;
(statearr_27005_27056[(2)] = inst_26986);

(statearr_27005_27056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (10))){
var inst_26984 = (state_26992[(2)]);
var state_26992__$1 = state_26992;
var statearr_27006_27057 = state_26992__$1;
(statearr_27006_27057[(2)] = inst_26984);

(statearr_27006_27057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26993 === (8))){
var inst_26962 = (state_26992[(10)]);
var inst_26973 = (state_26992[(9)]);
var inst_26972 = (state_26992[(7)]);
var inst_26971 = (state_26992[(8)]);
var inst_26976 = (function (){var cs = inst_26962;
var vec__26967 = inst_26971;
var v = inst_26972;
var c = inst_26973;
return ((function (cs,vec__26967,v,c,inst_26962,inst_26973,inst_26972,inst_26971,state_val_26993,c__24228__auto___27020,out){
return (function (p1__26957_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26957_SHARP_);
});
;})(cs,vec__26967,v,c,inst_26962,inst_26973,inst_26972,inst_26971,state_val_26993,c__24228__auto___27020,out))
})();
var inst_26977 = cljs.core.filterv.call(null,inst_26976,inst_26962);
var inst_26962__$1 = inst_26977;
var state_26992__$1 = (function (){var statearr_27007 = state_26992;
(statearr_27007[(10)] = inst_26962__$1);

return statearr_27007;
})();
var statearr_27008_27058 = state_26992__$1;
(statearr_27008_27058[(2)] = null);

(statearr_27008_27058[(1)] = (2));


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
});})(c__24228__auto___27020,out))
;
return ((function (switch__24031__auto__,c__24228__auto___27020,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27012[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27012[(1)] = (1));

return statearr_27012;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_26992){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_26992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27013){if((e27013 instanceof Object)){
var ex__24035__auto__ = e27013;
var statearr_27014_27059 = state_26992;
(statearr_27014_27059[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27060 = state_26992;
state_26992 = G__27060;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_26992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_26992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___27020,out))
})();
var state__24230__auto__ = (function (){var statearr_27015 = f__24229__auto__.call(null);
(statearr_27015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___27020);

return statearr_27015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___27020,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27061 = [];
var len__21530__auto___27110 = arguments.length;
var i__21531__auto___27111 = (0);
while(true){
if((i__21531__auto___27111 < len__21530__auto___27110)){
args27061.push((arguments[i__21531__auto___27111]));

var G__27112 = (i__21531__auto___27111 + (1));
i__21531__auto___27111 = G__27112;
continue;
} else {
}
break;
}

var G__27063 = args27061.length;
switch (G__27063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27061.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___27115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___27115,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___27115,out){
return (function (state_27087){
var state_val_27088 = (state_27087[(1)]);
if((state_val_27088 === (7))){
var inst_27069 = (state_27087[(7)]);
var inst_27069__$1 = (state_27087[(2)]);
var inst_27070 = (inst_27069__$1 == null);
var inst_27071 = cljs.core.not.call(null,inst_27070);
var state_27087__$1 = (function (){var statearr_27089 = state_27087;
(statearr_27089[(7)] = inst_27069__$1);

return statearr_27089;
})();
if(inst_27071){
var statearr_27090_27118 = state_27087__$1;
(statearr_27090_27118[(1)] = (8));

} else {
var statearr_27091_27119 = state_27087__$1;
(statearr_27091_27119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (1))){
var inst_27064 = (0);
var state_27087__$1 = (function (){var statearr_27092 = state_27087;
(statearr_27092[(8)] = inst_27064);

return statearr_27092;
})();
var statearr_27093_27124 = state_27087__$1;
(statearr_27093_27124[(2)] = null);

(statearr_27093_27124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (4))){
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27087__$1,(7),ch);
} else {
if((state_val_27088 === (6))){
var inst_27082 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27094_27125 = state_27087__$1;
(statearr_27094_27125[(2)] = inst_27082);

(statearr_27094_27125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (3))){
var inst_27084 = (state_27087[(2)]);
var inst_27085 = cljs.core.async.close_BANG_.call(null,out);
var state_27087__$1 = (function (){var statearr_27095 = state_27087;
(statearr_27095[(9)] = inst_27084);

return statearr_27095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27087__$1,inst_27085);
} else {
if((state_val_27088 === (2))){
var inst_27064 = (state_27087[(8)]);
var inst_27066 = (inst_27064 < n);
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27066)){
var statearr_27096_27126 = state_27087__$1;
(statearr_27096_27126[(1)] = (4));

} else {
var statearr_27097_27127 = state_27087__$1;
(statearr_27097_27127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (11))){
var inst_27064 = (state_27087[(8)]);
var inst_27074 = (state_27087[(2)]);
var inst_27075 = (inst_27064 + (1));
var inst_27064__$1 = inst_27075;
var state_27087__$1 = (function (){var statearr_27098 = state_27087;
(statearr_27098[(10)] = inst_27074);

(statearr_27098[(8)] = inst_27064__$1);

return statearr_27098;
})();
var statearr_27099_27128 = state_27087__$1;
(statearr_27099_27128[(2)] = null);

(statearr_27099_27128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (9))){
var state_27087__$1 = state_27087;
var statearr_27100_27129 = state_27087__$1;
(statearr_27100_27129[(2)] = null);

(statearr_27100_27129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (5))){
var state_27087__$1 = state_27087;
var statearr_27101_27130 = state_27087__$1;
(statearr_27101_27130[(2)] = null);

(statearr_27101_27130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (10))){
var inst_27079 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27102_27133 = state_27087__$1;
(statearr_27102_27133[(2)] = inst_27079);

(statearr_27102_27133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (8))){
var inst_27069 = (state_27087[(7)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27087__$1,(11),out,inst_27069);
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
});})(c__24228__auto___27115,out))
;
return ((function (switch__24031__auto__,c__24228__auto___27115,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_27087){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__24035__auto__ = e27107;
var statearr_27108_27134 = state_27087;
(statearr_27108_27134[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27138 = state_27087;
state_27087 = G__27138;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_27087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_27087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___27115,out))
})();
var state__24230__auto__ = (function (){var statearr_27109 = f__24229__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___27115);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___27115,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27149 = (function (map_LT_,f,ch,meta27150){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27150 = meta27150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27151,meta27150__$1){
var self__ = this;
var _27151__$1 = this;
return (new cljs.core.async.t_cljs$core$async27149(self__.map_LT_,self__.f,self__.ch,meta27150__$1));
});

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27151){
var self__ = this;
var _27151__$1 = this;
return self__.meta27150;
});

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27155 = (function (map_LT_,f,ch,meta27150,_,fn1,meta27156){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27150 = meta27150;
this._ = _;
this.fn1 = fn1;
this.meta27156 = meta27156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27157,meta27156__$1){
var self__ = this;
var _27157__$1 = this;
return (new cljs.core.async.t_cljs$core$async27155(self__.map_LT_,self__.f,self__.ch,self__.meta27150,self__._,self__.fn1,meta27156__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27157){
var self__ = this;
var _27157__$1 = this;
return self__.meta27156;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27142_SHARP_){
return f1.call(null,(((p1__27142_SHARP_ == null))?null:self__.f.call(null,p1__27142_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27150","meta27150",454359167,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27149","cljs.core.async/t_cljs$core$async27149",-324035904,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27156","meta27156",722550367,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27155";

cljs.core.async.t_cljs$core$async27155.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27155");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27155 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27155(map_LT___$1,f__$1,ch__$1,meta27150__$1,___$2,fn1__$1,meta27156){
return (new cljs.core.async.t_cljs$core$async27155(map_LT___$1,f__$1,ch__$1,meta27150__$1,___$2,fn1__$1,meta27156));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27155(self__.map_LT_,self__.f,self__.ch,self__.meta27150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20443__auto__ = ret;
if(cljs.core.truth_(and__20443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27150","meta27150",454359167,null)], null);
});

cljs.core.async.t_cljs$core$async27149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27149";

cljs.core.async.t_cljs$core$async27149.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27149");
});

cljs.core.async.__GT_t_cljs$core$async27149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27149(map_LT___$1,f__$1,ch__$1,meta27150){
return (new cljs.core.async.t_cljs$core$async27149(map_LT___$1,f__$1,ch__$1,meta27150));
});

}

return (new cljs.core.async.t_cljs$core$async27149(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27186 = (function (map_GT_,f,ch,meta27187){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27187 = meta27187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27188,meta27187__$1){
var self__ = this;
var _27188__$1 = this;
return (new cljs.core.async.t_cljs$core$async27186(self__.map_GT_,self__.f,self__.ch,meta27187__$1));
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27188){
var self__ = this;
var _27188__$1 = this;
return self__.meta27187;
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27187","meta27187",1793675468,null)], null);
});

cljs.core.async.t_cljs$core$async27186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27186";

cljs.core.async.t_cljs$core$async27186.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27186");
});

cljs.core.async.__GT_t_cljs$core$async27186 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27186(map_GT___$1,f__$1,ch__$1,meta27187){
return (new cljs.core.async.t_cljs$core$async27186(map_GT___$1,f__$1,ch__$1,meta27187));
});

}

return (new cljs.core.async.t_cljs$core$async27186(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27202 = (function (filter_GT_,p,ch,meta27203){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27203 = meta27203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27204,meta27203__$1){
var self__ = this;
var _27204__$1 = this;
return (new cljs.core.async.t_cljs$core$async27202(self__.filter_GT_,self__.p,self__.ch,meta27203__$1));
});

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27204){
var self__ = this;
var _27204__$1 = this;
return self__.meta27203;
});

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27203","meta27203",-1519982275,null)], null);
});

cljs.core.async.t_cljs$core$async27202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27202";

cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27202");
});

cljs.core.async.__GT_t_cljs$core$async27202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27202(filter_GT___$1,p__$1,ch__$1,meta27203){
return (new cljs.core.async.t_cljs$core$async27202(filter_GT___$1,p__$1,ch__$1,meta27203));
});

}

return (new cljs.core.async.t_cljs$core$async27202(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27205 = [];
var len__21530__auto___27257 = arguments.length;
var i__21531__auto___27258 = (0);
while(true){
if((i__21531__auto___27258 < len__21530__auto___27257)){
args27205.push((arguments[i__21531__auto___27258]));

var G__27259 = (i__21531__auto___27258 + (1));
i__21531__auto___27258 = G__27259;
continue;
} else {
}
break;
}

var G__27207 = args27205.length;
switch (G__27207) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27205.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___27262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___27262,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___27262,out){
return (function (state_27236){
var state_val_27237 = (state_27236[(1)]);
if((state_val_27237 === (7))){
var inst_27231 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27238_27263 = state_27236__$1;
(statearr_27238_27263[(2)] = inst_27231);

(statearr_27238_27263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (1))){
var state_27236__$1 = state_27236;
var statearr_27239_27264 = state_27236__$1;
(statearr_27239_27264[(2)] = null);

(statearr_27239_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (4))){
var inst_27214 = (state_27236[(7)]);
var inst_27214__$1 = (state_27236[(2)]);
var inst_27215 = (inst_27214__$1 == null);
var state_27236__$1 = (function (){var statearr_27240 = state_27236;
(statearr_27240[(7)] = inst_27214__$1);

return statearr_27240;
})();
if(cljs.core.truth_(inst_27215)){
var statearr_27241_27265 = state_27236__$1;
(statearr_27241_27265[(1)] = (5));

} else {
var statearr_27242_27266 = state_27236__$1;
(statearr_27242_27266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (6))){
var inst_27214 = (state_27236[(7)]);
var inst_27219 = p.call(null,inst_27214);
var state_27236__$1 = state_27236;
if(cljs.core.truth_(inst_27219)){
var statearr_27243_27267 = state_27236__$1;
(statearr_27243_27267[(1)] = (8));

} else {
var statearr_27244_27268 = state_27236__$1;
(statearr_27244_27268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (3))){
var inst_27233 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27236__$1,inst_27233);
} else {
if((state_val_27237 === (2))){
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27236__$1,(4),ch);
} else {
if((state_val_27237 === (11))){
var inst_27225 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27245_27274 = state_27236__$1;
(statearr_27245_27274[(2)] = inst_27225);

(statearr_27245_27274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (9))){
var state_27236__$1 = state_27236;
var statearr_27246_27280 = state_27236__$1;
(statearr_27246_27280[(2)] = null);

(statearr_27246_27280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (5))){
var inst_27217 = cljs.core.async.close_BANG_.call(null,out);
var state_27236__$1 = state_27236;
var statearr_27247_27281 = state_27236__$1;
(statearr_27247_27281[(2)] = inst_27217);

(statearr_27247_27281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (10))){
var inst_27228 = (state_27236[(2)]);
var state_27236__$1 = (function (){var statearr_27248 = state_27236;
(statearr_27248[(8)] = inst_27228);

return statearr_27248;
})();
var statearr_27249_27282 = state_27236__$1;
(statearr_27249_27282[(2)] = null);

(statearr_27249_27282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (8))){
var inst_27214 = (state_27236[(7)]);
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27236__$1,(11),out,inst_27214);
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
});})(c__24228__auto___27262,out))
;
return ((function (switch__24031__auto__,c__24228__auto___27262,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27253 = [null,null,null,null,null,null,null,null,null];
(statearr_27253[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27253[(1)] = (1));

return statearr_27253;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_27236){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27254){if((e27254 instanceof Object)){
var ex__24035__auto__ = e27254;
var statearr_27255_27286 = state_27236;
(statearr_27255_27286[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27288 = state_27236;
state_27236 = G__27288;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_27236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_27236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___27262,out))
})();
var state__24230__auto__ = (function (){var statearr_27256 = f__24229__auto__.call(null);
(statearr_27256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___27262);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___27262,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27294 = [];
var len__21530__auto___27301 = arguments.length;
var i__21531__auto___27302 = (0);
while(true){
if((i__21531__auto___27302 < len__21530__auto___27301)){
args27294.push((arguments[i__21531__auto___27302]));

var G__27303 = (i__21531__auto___27302 + (1));
i__21531__auto___27302 = G__27303;
continue;
} else {
}
break;
}

var G__27296 = args27294.length;
switch (G__27296) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27294.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_27482){
var state_val_27483 = (state_27482[(1)]);
if((state_val_27483 === (7))){
var inst_27478 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27484_27549 = state_27482__$1;
(statearr_27484_27549[(2)] = inst_27478);

(statearr_27484_27549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (20))){
var inst_27448 = (state_27482[(7)]);
var inst_27459 = (state_27482[(2)]);
var inst_27460 = cljs.core.next.call(null,inst_27448);
var inst_27434 = inst_27460;
var inst_27435 = null;
var inst_27436 = (0);
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27485 = state_27482;
(statearr_27485[(8)] = inst_27437);

(statearr_27485[(9)] = inst_27436);

(statearr_27485[(10)] = inst_27459);

(statearr_27485[(11)] = inst_27434);

(statearr_27485[(12)] = inst_27435);

return statearr_27485;
})();
var statearr_27486_27550 = state_27482__$1;
(statearr_27486_27550[(2)] = null);

(statearr_27486_27550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (1))){
var state_27482__$1 = state_27482;
var statearr_27487_27559 = state_27482__$1;
(statearr_27487_27559[(2)] = null);

(statearr_27487_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (4))){
var inst_27423 = (state_27482[(13)]);
var inst_27423__$1 = (state_27482[(2)]);
var inst_27424 = (inst_27423__$1 == null);
var state_27482__$1 = (function (){var statearr_27488 = state_27482;
(statearr_27488[(13)] = inst_27423__$1);

return statearr_27488;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27489_27560 = state_27482__$1;
(statearr_27489_27560[(1)] = (5));

} else {
var statearr_27490_27561 = state_27482__$1;
(statearr_27490_27561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (15))){
var state_27482__$1 = state_27482;
var statearr_27494_27566 = state_27482__$1;
(statearr_27494_27566[(2)] = null);

(statearr_27494_27566[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (21))){
var state_27482__$1 = state_27482;
var statearr_27495_27571 = state_27482__$1;
(statearr_27495_27571[(2)] = null);

(statearr_27495_27571[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (13))){
var inst_27437 = (state_27482[(8)]);
var inst_27436 = (state_27482[(9)]);
var inst_27434 = (state_27482[(11)]);
var inst_27435 = (state_27482[(12)]);
var inst_27444 = (state_27482[(2)]);
var inst_27445 = (inst_27437 + (1));
var tmp27491 = inst_27436;
var tmp27492 = inst_27434;
var tmp27493 = inst_27435;
var inst_27434__$1 = tmp27492;
var inst_27435__$1 = tmp27493;
var inst_27436__$1 = tmp27491;
var inst_27437__$1 = inst_27445;
var state_27482__$1 = (function (){var statearr_27496 = state_27482;
(statearr_27496[(8)] = inst_27437__$1);

(statearr_27496[(9)] = inst_27436__$1);

(statearr_27496[(11)] = inst_27434__$1);

(statearr_27496[(14)] = inst_27444);

(statearr_27496[(12)] = inst_27435__$1);

return statearr_27496;
})();
var statearr_27497_27592 = state_27482__$1;
(statearr_27497_27592[(2)] = null);

(statearr_27497_27592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (22))){
var state_27482__$1 = state_27482;
var statearr_27498_27593 = state_27482__$1;
(statearr_27498_27593[(2)] = null);

(statearr_27498_27593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (6))){
var inst_27423 = (state_27482[(13)]);
var inst_27432 = f.call(null,inst_27423);
var inst_27433 = cljs.core.seq.call(null,inst_27432);
var inst_27434 = inst_27433;
var inst_27435 = null;
var inst_27436 = (0);
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27499 = state_27482;
(statearr_27499[(8)] = inst_27437);

(statearr_27499[(9)] = inst_27436);

(statearr_27499[(11)] = inst_27434);

(statearr_27499[(12)] = inst_27435);

return statearr_27499;
})();
var statearr_27500_27594 = state_27482__$1;
(statearr_27500_27594[(2)] = null);

(statearr_27500_27594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (17))){
var inst_27448 = (state_27482[(7)]);
var inst_27452 = cljs.core.chunk_first.call(null,inst_27448);
var inst_27453 = cljs.core.chunk_rest.call(null,inst_27448);
var inst_27454 = cljs.core.count.call(null,inst_27452);
var inst_27434 = inst_27453;
var inst_27435 = inst_27452;
var inst_27436 = inst_27454;
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27501 = state_27482;
(statearr_27501[(8)] = inst_27437);

(statearr_27501[(9)] = inst_27436);

(statearr_27501[(11)] = inst_27434);

(statearr_27501[(12)] = inst_27435);

return statearr_27501;
})();
var statearr_27502_27603 = state_27482__$1;
(statearr_27502_27603[(2)] = null);

(statearr_27502_27603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (3))){
var inst_27480 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27482__$1,inst_27480);
} else {
if((state_val_27483 === (12))){
var inst_27468 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27503_27604 = state_27482__$1;
(statearr_27503_27604[(2)] = inst_27468);

(statearr_27503_27604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (2))){
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27482__$1,(4),in$);
} else {
if((state_val_27483 === (23))){
var inst_27476 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27508_27610 = state_27482__$1;
(statearr_27508_27610[(2)] = inst_27476);

(statearr_27508_27610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (19))){
var inst_27463 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27513_27613 = state_27482__$1;
(statearr_27513_27613[(2)] = inst_27463);

(statearr_27513_27613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (11))){
var inst_27434 = (state_27482[(11)]);
var inst_27448 = (state_27482[(7)]);
var inst_27448__$1 = cljs.core.seq.call(null,inst_27434);
var state_27482__$1 = (function (){var statearr_27514 = state_27482;
(statearr_27514[(7)] = inst_27448__$1);

return statearr_27514;
})();
if(inst_27448__$1){
var statearr_27515_27621 = state_27482__$1;
(statearr_27515_27621[(1)] = (14));

} else {
var statearr_27516_27625 = state_27482__$1;
(statearr_27516_27625[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (9))){
var inst_27470 = (state_27482[(2)]);
var inst_27471 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27482__$1 = (function (){var statearr_27517 = state_27482;
(statearr_27517[(15)] = inst_27470);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27471)){
var statearr_27518_27627 = state_27482__$1;
(statearr_27518_27627[(1)] = (21));

} else {
var statearr_27519_27629 = state_27482__$1;
(statearr_27519_27629[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (5))){
var inst_27426 = cljs.core.async.close_BANG_.call(null,out);
var state_27482__$1 = state_27482;
var statearr_27520_27631 = state_27482__$1;
(statearr_27520_27631[(2)] = inst_27426);

(statearr_27520_27631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (14))){
var inst_27448 = (state_27482[(7)]);
var inst_27450 = cljs.core.chunked_seq_QMARK_.call(null,inst_27448);
var state_27482__$1 = state_27482;
if(inst_27450){
var statearr_27521_27633 = state_27482__$1;
(statearr_27521_27633[(1)] = (17));

} else {
var statearr_27522_27634 = state_27482__$1;
(statearr_27522_27634[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (16))){
var inst_27466 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27523_27635 = state_27482__$1;
(statearr_27523_27635[(2)] = inst_27466);

(statearr_27523_27635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (10))){
var inst_27437 = (state_27482[(8)]);
var inst_27435 = (state_27482[(12)]);
var inst_27442 = cljs.core._nth.call(null,inst_27435,inst_27437);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27482__$1,(13),out,inst_27442);
} else {
if((state_val_27483 === (18))){
var inst_27448 = (state_27482[(7)]);
var inst_27457 = cljs.core.first.call(null,inst_27448);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27482__$1,(20),out,inst_27457);
} else {
if((state_val_27483 === (8))){
var inst_27437 = (state_27482[(8)]);
var inst_27436 = (state_27482[(9)]);
var inst_27439 = (inst_27437 < inst_27436);
var inst_27440 = inst_27439;
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27440)){
var statearr_27528_27643 = state_27482__$1;
(statearr_27528_27643[(1)] = (10));

} else {
var statearr_27530_27644 = state_27482__$1;
(statearr_27530_27644[(1)] = (11));

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
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____0 = (function (){
var statearr_27537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27537[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__);

(statearr_27537[(1)] = (1));

return statearr_27537;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____1 = (function (state_27482){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27538){if((e27538 instanceof Object)){
var ex__24035__auto__ = e27538;
var statearr_27539_27652 = state_27482;
(statearr_27539_27652[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27657 = state_27482;
state_27482 = G__27657;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__ = function(state_27482){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____1.call(this,state_27482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_27540 = f__24229__auto__.call(null);
(statearr_27540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27661 = [];
var len__21530__auto___27668 = arguments.length;
var i__21531__auto___27671 = (0);
while(true){
if((i__21531__auto___27671 < len__21530__auto___27668)){
args27661.push((arguments[i__21531__auto___27671]));

var G__27675 = (i__21531__auto___27671 + (1));
i__21531__auto___27671 = G__27675;
continue;
} else {
}
break;
}

var G__27667 = args27661.length;
switch (G__27667) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27661.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27680 = [];
var len__21530__auto___27683 = arguments.length;
var i__21531__auto___27684 = (0);
while(true){
if((i__21531__auto___27684 < len__21530__auto___27683)){
args27680.push((arguments[i__21531__auto___27684]));

var G__27685 = (i__21531__auto___27684 + (1));
i__21531__auto___27684 = G__27685;
continue;
} else {
}
break;
}

var G__27682 = args27680.length;
switch (G__27682) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27680.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27687 = [];
var len__21530__auto___27746 = arguments.length;
var i__21531__auto___27747 = (0);
while(true){
if((i__21531__auto___27747 < len__21530__auto___27746)){
args27687.push((arguments[i__21531__auto___27747]));

var G__27748 = (i__21531__auto___27747 + (1));
i__21531__auto___27747 = G__27748;
continue;
} else {
}
break;
}

var G__27689 = args27687.length;
switch (G__27689) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27687.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___27750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___27750,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___27750,out){
return (function (state_27713){
var state_val_27714 = (state_27713[(1)]);
if((state_val_27714 === (7))){
var inst_27708 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27717_27751 = state_27713__$1;
(statearr_27717_27751[(2)] = inst_27708);

(statearr_27717_27751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (1))){
var inst_27690 = null;
var state_27713__$1 = (function (){var statearr_27720 = state_27713;
(statearr_27720[(7)] = inst_27690);

return statearr_27720;
})();
var statearr_27722_27752 = state_27713__$1;
(statearr_27722_27752[(2)] = null);

(statearr_27722_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (4))){
var inst_27693 = (state_27713[(8)]);
var inst_27693__$1 = (state_27713[(2)]);
var inst_27694 = (inst_27693__$1 == null);
var inst_27695 = cljs.core.not.call(null,inst_27694);
var state_27713__$1 = (function (){var statearr_27724 = state_27713;
(statearr_27724[(8)] = inst_27693__$1);

return statearr_27724;
})();
if(inst_27695){
var statearr_27725_27753 = state_27713__$1;
(statearr_27725_27753[(1)] = (5));

} else {
var statearr_27726_27754 = state_27713__$1;
(statearr_27726_27754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (6))){
var state_27713__$1 = state_27713;
var statearr_27727_27755 = state_27713__$1;
(statearr_27727_27755[(2)] = null);

(statearr_27727_27755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (3))){
var inst_27710 = (state_27713[(2)]);
var inst_27711 = cljs.core.async.close_BANG_.call(null,out);
var state_27713__$1 = (function (){var statearr_27728 = state_27713;
(statearr_27728[(9)] = inst_27710);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else {
if((state_val_27714 === (2))){
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27713__$1,(4),ch);
} else {
if((state_val_27714 === (11))){
var inst_27693 = (state_27713[(8)]);
var inst_27702 = (state_27713[(2)]);
var inst_27690 = inst_27693;
var state_27713__$1 = (function (){var statearr_27729 = state_27713;
(statearr_27729[(10)] = inst_27702);

(statearr_27729[(7)] = inst_27690);

return statearr_27729;
})();
var statearr_27731_27756 = state_27713__$1;
(statearr_27731_27756[(2)] = null);

(statearr_27731_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (9))){
var inst_27693 = (state_27713[(8)]);
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27713__$1,(11),out,inst_27693);
} else {
if((state_val_27714 === (5))){
var inst_27690 = (state_27713[(7)]);
var inst_27693 = (state_27713[(8)]);
var inst_27697 = cljs.core._EQ_.call(null,inst_27693,inst_27690);
var state_27713__$1 = state_27713;
if(inst_27697){
var statearr_27734_27757 = state_27713__$1;
(statearr_27734_27757[(1)] = (8));

} else {
var statearr_27735_27758 = state_27713__$1;
(statearr_27735_27758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (10))){
var inst_27705 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27736_27759 = state_27713__$1;
(statearr_27736_27759[(2)] = inst_27705);

(statearr_27736_27759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (8))){
var inst_27690 = (state_27713[(7)]);
var tmp27733 = inst_27690;
var inst_27690__$1 = tmp27733;
var state_27713__$1 = (function (){var statearr_27737 = state_27713;
(statearr_27737[(7)] = inst_27690__$1);

return statearr_27737;
})();
var statearr_27738_27760 = state_27713__$1;
(statearr_27738_27760[(2)] = null);

(statearr_27738_27760[(1)] = (2));


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
});})(c__24228__auto___27750,out))
;
return ((function (switch__24031__auto__,c__24228__auto___27750,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27742[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27742[(1)] = (1));

return statearr_27742;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_27713){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27743){if((e27743 instanceof Object)){
var ex__24035__auto__ = e27743;
var statearr_27744_27766 = state_27713;
(statearr_27744_27766[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27767 = state_27713;
state_27713 = G__27767;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___27750,out))
})();
var state__24230__auto__ = (function (){var statearr_27745 = f__24229__auto__.call(null);
(statearr_27745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___27750);

return statearr_27745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___27750,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27772 = [];
var len__21530__auto___27854 = arguments.length;
var i__21531__auto___27855 = (0);
while(true){
if((i__21531__auto___27855 < len__21530__auto___27854)){
args27772.push((arguments[i__21531__auto___27855]));

var G__27856 = (i__21531__auto___27855 + (1));
i__21531__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var G__27774 = args27772.length;
switch (G__27774) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27772.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___27863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___27863,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___27863,out){
return (function (state_27812){
var state_val_27813 = (state_27812[(1)]);
if((state_val_27813 === (7))){
var inst_27808 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27814_27867 = state_27812__$1;
(statearr_27814_27867[(2)] = inst_27808);

(statearr_27814_27867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (1))){
var inst_27775 = (new Array(n));
var inst_27776 = inst_27775;
var inst_27777 = (0);
var state_27812__$1 = (function (){var statearr_27815 = state_27812;
(statearr_27815[(7)] = inst_27776);

(statearr_27815[(8)] = inst_27777);

return statearr_27815;
})();
var statearr_27816_27868 = state_27812__$1;
(statearr_27816_27868[(2)] = null);

(statearr_27816_27868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (4))){
var inst_27780 = (state_27812[(9)]);
var inst_27780__$1 = (state_27812[(2)]);
var inst_27781 = (inst_27780__$1 == null);
var inst_27782 = cljs.core.not.call(null,inst_27781);
var state_27812__$1 = (function (){var statearr_27817 = state_27812;
(statearr_27817[(9)] = inst_27780__$1);

return statearr_27817;
})();
if(inst_27782){
var statearr_27818_27870 = state_27812__$1;
(statearr_27818_27870[(1)] = (5));

} else {
var statearr_27819_27871 = state_27812__$1;
(statearr_27819_27871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (15))){
var inst_27802 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27820_27872 = state_27812__$1;
(statearr_27820_27872[(2)] = inst_27802);

(statearr_27820_27872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (13))){
var state_27812__$1 = state_27812;
var statearr_27821_27873 = state_27812__$1;
(statearr_27821_27873[(2)] = null);

(statearr_27821_27873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (6))){
var inst_27777 = (state_27812[(8)]);
var inst_27798 = (inst_27777 > (0));
var state_27812__$1 = state_27812;
if(cljs.core.truth_(inst_27798)){
var statearr_27822_27874 = state_27812__$1;
(statearr_27822_27874[(1)] = (12));

} else {
var statearr_27823_27875 = state_27812__$1;
(statearr_27823_27875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (3))){
var inst_27810 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27812__$1,inst_27810);
} else {
if((state_val_27813 === (12))){
var inst_27776 = (state_27812[(7)]);
var inst_27800 = cljs.core.vec.call(null,inst_27776);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27812__$1,(15),out,inst_27800);
} else {
if((state_val_27813 === (2))){
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27812__$1,(4),ch);
} else {
if((state_val_27813 === (11))){
var inst_27792 = (state_27812[(2)]);
var inst_27793 = (new Array(n));
var inst_27776 = inst_27793;
var inst_27777 = (0);
var state_27812__$1 = (function (){var statearr_27824 = state_27812;
(statearr_27824[(10)] = inst_27792);

(statearr_27824[(7)] = inst_27776);

(statearr_27824[(8)] = inst_27777);

return statearr_27824;
})();
var statearr_27825_27885 = state_27812__$1;
(statearr_27825_27885[(2)] = null);

(statearr_27825_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (9))){
var inst_27776 = (state_27812[(7)]);
var inst_27790 = cljs.core.vec.call(null,inst_27776);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27812__$1,(11),out,inst_27790);
} else {
if((state_val_27813 === (5))){
var inst_27785 = (state_27812[(11)]);
var inst_27776 = (state_27812[(7)]);
var inst_27780 = (state_27812[(9)]);
var inst_27777 = (state_27812[(8)]);
var inst_27784 = (inst_27776[inst_27777] = inst_27780);
var inst_27785__$1 = (inst_27777 + (1));
var inst_27786 = (inst_27785__$1 < n);
var state_27812__$1 = (function (){var statearr_27826 = state_27812;
(statearr_27826[(11)] = inst_27785__$1);

(statearr_27826[(12)] = inst_27784);

return statearr_27826;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27827_27897 = state_27812__$1;
(statearr_27827_27897[(1)] = (8));

} else {
var statearr_27828_27898 = state_27812__$1;
(statearr_27828_27898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (14))){
var inst_27805 = (state_27812[(2)]);
var inst_27806 = cljs.core.async.close_BANG_.call(null,out);
var state_27812__$1 = (function (){var statearr_27830 = state_27812;
(statearr_27830[(13)] = inst_27805);

return statearr_27830;
})();
var statearr_27831_27899 = state_27812__$1;
(statearr_27831_27899[(2)] = inst_27806);

(statearr_27831_27899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (10))){
var inst_27796 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27835_27911 = state_27812__$1;
(statearr_27835_27911[(2)] = inst_27796);

(statearr_27835_27911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (8))){
var inst_27785 = (state_27812[(11)]);
var inst_27776 = (state_27812[(7)]);
var tmp27829 = inst_27776;
var inst_27776__$1 = tmp27829;
var inst_27777 = inst_27785;
var state_27812__$1 = (function (){var statearr_27836 = state_27812;
(statearr_27836[(7)] = inst_27776__$1);

(statearr_27836[(8)] = inst_27777);

return statearr_27836;
})();
var statearr_27837_27913 = state_27812__$1;
(statearr_27837_27913[(2)] = null);

(statearr_27837_27913[(1)] = (2));


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
});})(c__24228__auto___27863,out))
;
return ((function (switch__24031__auto__,c__24228__auto___27863,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27844[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27844[(1)] = (1));

return statearr_27844;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_27812){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__24035__auto__ = e27848;
var statearr_27849_27923 = state_27812;
(statearr_27849_27923[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27924 = state_27812;
state_27812 = G__27924;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_27812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_27812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___27863,out))
})();
var state__24230__auto__ = (function (){var statearr_27850 = f__24229__auto__.call(null);
(statearr_27850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___27863);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___27863,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27925 = [];
var len__21530__auto___28002 = arguments.length;
var i__21531__auto___28003 = (0);
while(true){
if((i__21531__auto___28003 < len__21530__auto___28002)){
args27925.push((arguments[i__21531__auto___28003]));

var G__28004 = (i__21531__auto___28003 + (1));
i__21531__auto___28003 = G__28004;
continue;
} else {
}
break;
}

var G__27927 = args27925.length;
switch (G__27927) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27925.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24228__auto___28016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___28016,out){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___28016,out){
return (function (state_27971){
var state_val_27972 = (state_27971[(1)]);
if((state_val_27972 === (7))){
var inst_27967 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27973_28024 = state_27971__$1;
(statearr_27973_28024[(2)] = inst_27967);

(statearr_27973_28024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (1))){
var inst_27928 = [];
var inst_27929 = inst_27928;
var inst_27930 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27971__$1 = (function (){var statearr_27974 = state_27971;
(statearr_27974[(7)] = inst_27929);

(statearr_27974[(8)] = inst_27930);

return statearr_27974;
})();
var statearr_27975_28028 = state_27971__$1;
(statearr_27975_28028[(2)] = null);

(statearr_27975_28028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (4))){
var inst_27933 = (state_27971[(9)]);
var inst_27933__$1 = (state_27971[(2)]);
var inst_27934 = (inst_27933__$1 == null);
var inst_27935 = cljs.core.not.call(null,inst_27934);
var state_27971__$1 = (function (){var statearr_27976 = state_27971;
(statearr_27976[(9)] = inst_27933__$1);

return statearr_27976;
})();
if(inst_27935){
var statearr_27977_28029 = state_27971__$1;
(statearr_27977_28029[(1)] = (5));

} else {
var statearr_27978_28034 = state_27971__$1;
(statearr_27978_28034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (15))){
var inst_27961 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27979_28038 = state_27971__$1;
(statearr_27979_28038[(2)] = inst_27961);

(statearr_27979_28038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (13))){
var state_27971__$1 = state_27971;
var statearr_27980_28039 = state_27971__$1;
(statearr_27980_28039[(2)] = null);

(statearr_27980_28039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (6))){
var inst_27929 = (state_27971[(7)]);
var inst_27956 = inst_27929.length;
var inst_27957 = (inst_27956 > (0));
var state_27971__$1 = state_27971;
if(cljs.core.truth_(inst_27957)){
var statearr_27981_28045 = state_27971__$1;
(statearr_27981_28045[(1)] = (12));

} else {
var statearr_27982_28047 = state_27971__$1;
(statearr_27982_28047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (3))){
var inst_27969 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27971__$1,inst_27969);
} else {
if((state_val_27972 === (12))){
var inst_27929 = (state_27971[(7)]);
var inst_27959 = cljs.core.vec.call(null,inst_27929);
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27971__$1,(15),out,inst_27959);
} else {
if((state_val_27972 === (2))){
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27971__$1,(4),ch);
} else {
if((state_val_27972 === (11))){
var inst_27937 = (state_27971[(10)]);
var inst_27933 = (state_27971[(9)]);
var inst_27949 = (state_27971[(2)]);
var inst_27950 = [];
var inst_27951 = inst_27950.push(inst_27933);
var inst_27929 = inst_27950;
var inst_27930 = inst_27937;
var state_27971__$1 = (function (){var statearr_27983 = state_27971;
(statearr_27983[(7)] = inst_27929);

(statearr_27983[(11)] = inst_27949);

(statearr_27983[(12)] = inst_27951);

(statearr_27983[(8)] = inst_27930);

return statearr_27983;
})();
var statearr_27984_28060 = state_27971__$1;
(statearr_27984_28060[(2)] = null);

(statearr_27984_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (9))){
var inst_27929 = (state_27971[(7)]);
var inst_27947 = cljs.core.vec.call(null,inst_27929);
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27971__$1,(11),out,inst_27947);
} else {
if((state_val_27972 === (5))){
var inst_27937 = (state_27971[(10)]);
var inst_27933 = (state_27971[(9)]);
var inst_27930 = (state_27971[(8)]);
var inst_27937__$1 = f.call(null,inst_27933);
var inst_27938 = cljs.core._EQ_.call(null,inst_27937__$1,inst_27930);
var inst_27939 = cljs.core.keyword_identical_QMARK_.call(null,inst_27930,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27940 = (inst_27938) || (inst_27939);
var state_27971__$1 = (function (){var statearr_27985 = state_27971;
(statearr_27985[(10)] = inst_27937__$1);

return statearr_27985;
})();
if(cljs.core.truth_(inst_27940)){
var statearr_27986_28065 = state_27971__$1;
(statearr_27986_28065[(1)] = (8));

} else {
var statearr_27987_28066 = state_27971__$1;
(statearr_27987_28066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (14))){
var inst_27964 = (state_27971[(2)]);
var inst_27965 = cljs.core.async.close_BANG_.call(null,out);
var state_27971__$1 = (function (){var statearr_27989 = state_27971;
(statearr_27989[(13)] = inst_27964);

return statearr_27989;
})();
var statearr_27990_28067 = state_27971__$1;
(statearr_27990_28067[(2)] = inst_27965);

(statearr_27990_28067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (10))){
var inst_27954 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27991_28068 = state_27971__$1;
(statearr_27991_28068[(2)] = inst_27954);

(statearr_27991_28068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (8))){
var inst_27929 = (state_27971[(7)]);
var inst_27937 = (state_27971[(10)]);
var inst_27933 = (state_27971[(9)]);
var inst_27942 = inst_27929.push(inst_27933);
var tmp27988 = inst_27929;
var inst_27929__$1 = tmp27988;
var inst_27930 = inst_27937;
var state_27971__$1 = (function (){var statearr_27992 = state_27971;
(statearr_27992[(7)] = inst_27929__$1);

(statearr_27992[(14)] = inst_27942);

(statearr_27992[(8)] = inst_27930);

return statearr_27992;
})();
var statearr_27993_28069 = state_27971__$1;
(statearr_27993_28069[(2)] = null);

(statearr_27993_28069[(1)] = (2));


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
});})(c__24228__auto___28016,out))
;
return ((function (switch__24031__auto__,c__24228__auto___28016,out){
return (function() {
var cljs$core$async$state_machine__24032__auto__ = null;
var cljs$core$async$state_machine__24032__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = cljs$core$async$state_machine__24032__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var cljs$core$async$state_machine__24032__auto____1 = (function (state_27971){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_27971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__24035__auto__ = e27998;
var statearr_27999_28080 = state_27971;
(statearr_27999_28080[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28081 = state_27971;
state_27971 = G__28081;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
cljs$core$async$state_machine__24032__auto__ = function(state_27971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24032__auto____1.call(this,state_27971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24032__auto____0;
cljs$core$async$state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24032__auto____1;
return cljs$core$async$state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___28016,out))
})();
var state__24230__auto__ = (function (){var statearr_28001 = f__24229__auto__.call(null);
(statearr_28001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___28016);

return statearr_28001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___28016,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1522181422744