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
var args24381 = [];
var len__21530__auto___24390 = arguments.length;
var i__21531__auto___24391 = (0);
while(true){
if((i__21531__auto___24391 < len__21530__auto___24390)){
args24381.push((arguments[i__21531__auto___24391]));

var G__24393 = (i__21531__auto___24391 + (1));
i__21531__auto___24391 = G__24393;
continue;
} else {
}
break;
}

var G__24383 = args24381.length;
switch (G__24383) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24381.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24384 = (function (f,blockable,meta24385){
this.f = f;
this.blockable = blockable;
this.meta24385 = meta24385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24386,meta24385__$1){
var self__ = this;
var _24386__$1 = this;
return (new cljs.core.async.t_cljs$core$async24384(self__.f,self__.blockable,meta24385__$1));
});

cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24386){
var self__ = this;
var _24386__$1 = this;
return self__.meta24385;
});

cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24385","meta24385",1500626684,null)], null);
});

cljs.core.async.t_cljs$core$async24384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24384";

cljs.core.async.t_cljs$core$async24384.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24384");
});

cljs.core.async.__GT_t_cljs$core$async24384 = (function cljs$core$async$__GT_t_cljs$core$async24384(f__$1,blockable__$1,meta24385){
return (new cljs.core.async.t_cljs$core$async24384(f__$1,blockable__$1,meta24385));
});

}

return (new cljs.core.async.t_cljs$core$async24384(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24415 = [];
var len__21530__auto___24426 = arguments.length;
var i__21531__auto___24427 = (0);
while(true){
if((i__21531__auto___24427 < len__21530__auto___24426)){
args24415.push((arguments[i__21531__auto___24427]));

var G__24428 = (i__21531__auto___24427 + (1));
i__21531__auto___24427 = G__24428;
continue;
} else {
}
break;
}

var G__24417 = args24415.length;
switch (G__24417) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24415.length)].join('')));

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
var args24431 = [];
var len__21530__auto___24434 = arguments.length;
var i__21531__auto___24435 = (0);
while(true){
if((i__21531__auto___24435 < len__21530__auto___24434)){
args24431.push((arguments[i__21531__auto___24435]));

var G__24436 = (i__21531__auto___24435 + (1));
i__21531__auto___24435 = G__24436;
continue;
} else {
}
break;
}

var G__24433 = args24431.length;
switch (G__24433) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24431.length)].join('')));

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
var args24438 = [];
var len__21530__auto___24441 = arguments.length;
var i__21531__auto___24442 = (0);
while(true){
if((i__21531__auto___24442 < len__21530__auto___24441)){
args24438.push((arguments[i__21531__auto___24442]));

var G__24443 = (i__21531__auto___24442 + (1));
i__21531__auto___24442 = G__24443;
continue;
} else {
}
break;
}

var G__24440 = args24438.length;
switch (G__24440) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24438.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24448 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24448);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24448,ret){
return (function (){
return fn1.call(null,val_24448);
});})(val_24448,ret))
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
var args24459 = [];
var len__21530__auto___24469 = arguments.length;
var i__21531__auto___24470 = (0);
while(true){
if((i__21531__auto___24470 < len__21530__auto___24469)){
args24459.push((arguments[i__21531__auto___24470]));

var G__24471 = (i__21531__auto___24470 + (1));
i__21531__auto___24470 = G__24471;
continue;
} else {
}
break;
}

var G__24466 = args24459.length;
switch (G__24466) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24459.length)].join('')));

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
var n__21370__auto___24473 = n;
var x_24474 = (0);
while(true){
if((x_24474 < n__21370__auto___24473)){
(a[x_24474] = (0));

var G__24475 = (x_24474 + (1));
x_24474 = G__24475;
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

var G__24482 = (i + (1));
i = G__24482;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24492 = (function (alt_flag,flag,meta24493){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24493 = meta24493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24494,meta24493__$1){
var self__ = this;
var _24494__$1 = this;
return (new cljs.core.async.t_cljs$core$async24492(self__.alt_flag,self__.flag,meta24493__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24494){
var self__ = this;
var _24494__$1 = this;
return self__.meta24493;
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24493","meta24493",1026377388,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24492";

cljs.core.async.t_cljs$core$async24492.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24492");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24492 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24492(alt_flag__$1,flag__$1,meta24493){
return (new cljs.core.async.t_cljs$core$async24492(alt_flag__$1,flag__$1,meta24493));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24492(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24500 = (function (alt_handler,flag,cb,meta24501){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24501 = meta24501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24502,meta24501__$1){
var self__ = this;
var _24502__$1 = this;
return (new cljs.core.async.t_cljs$core$async24500(self__.alt_handler,self__.flag,self__.cb,meta24501__$1));
});

cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24502){
var self__ = this;
var _24502__$1 = this;
return self__.meta24501;
});

cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24501","meta24501",1049853269,null)], null);
});

cljs.core.async.t_cljs$core$async24500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24500";

cljs.core.async.t_cljs$core$async24500.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24500");
});

cljs.core.async.__GT_t_cljs$core$async24500 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24500(alt_handler__$1,flag__$1,cb__$1,meta24501){
return (new cljs.core.async.t_cljs$core$async24500(alt_handler__$1,flag__$1,cb__$1,meta24501));
});

}

return (new cljs.core.async.t_cljs$core$async24500(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24507_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24507_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24508_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24508_SHARP_,port], null));
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
var G__24513 = (i + (1));
i = G__24513;
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
var len__21530__auto___24523 = arguments.length;
var i__21531__auto___24524 = (0);
while(true){
if((i__21531__auto___24524 < len__21530__auto___24523)){
args__21537__auto__.push((arguments[i__21531__auto___24524]));

var G__24525 = (i__21531__auto___24524 + (1));
i__21531__auto___24524 = G__24525;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24519){
var map__24520 = p__24519;
var map__24520__$1 = ((((!((map__24520 == null)))?((((map__24520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24520):map__24520);
var opts = map__24520__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24516){
var G__24517 = cljs.core.first.call(null,seq24516);
var seq24516__$1 = cljs.core.next.call(null,seq24516);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24517,seq24516__$1);
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
var args24526 = [];
var len__21530__auto___24584 = arguments.length;
var i__21531__auto___24585 = (0);
while(true){
if((i__21531__auto___24585 < len__21530__auto___24584)){
args24526.push((arguments[i__21531__auto___24585]));

var G__24586 = (i__21531__auto___24585 + (1));
i__21531__auto___24585 = G__24586;
continue;
} else {
}
break;
}

var G__24530 = args24526.length;
switch (G__24530) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24526.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24326__auto___24588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___24588){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___24588){
return (function (state_24558){
var state_val_24559 = (state_24558[(1)]);
if((state_val_24559 === (7))){
var inst_24554 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24560_24589 = state_24558__$1;
(statearr_24560_24589[(2)] = inst_24554);

(statearr_24560_24589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (1))){
var state_24558__$1 = state_24558;
var statearr_24561_24590 = state_24558__$1;
(statearr_24561_24590[(2)] = null);

(statearr_24561_24590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (4))){
var inst_24537 = (state_24558[(7)]);
var inst_24537__$1 = (state_24558[(2)]);
var inst_24538 = (inst_24537__$1 == null);
var state_24558__$1 = (function (){var statearr_24562 = state_24558;
(statearr_24562[(7)] = inst_24537__$1);

return statearr_24562;
})();
if(cljs.core.truth_(inst_24538)){
var statearr_24563_24591 = state_24558__$1;
(statearr_24563_24591[(1)] = (5));

} else {
var statearr_24564_24592 = state_24558__$1;
(statearr_24564_24592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (13))){
var state_24558__$1 = state_24558;
var statearr_24565_24593 = state_24558__$1;
(statearr_24565_24593[(2)] = null);

(statearr_24565_24593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (6))){
var inst_24537 = (state_24558[(7)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24558__$1,(11),to,inst_24537);
} else {
if((state_val_24559 === (3))){
var inst_24556 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24558__$1,inst_24556);
} else {
if((state_val_24559 === (12))){
var state_24558__$1 = state_24558;
var statearr_24566_24596 = state_24558__$1;
(statearr_24566_24596[(2)] = null);

(statearr_24566_24596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (2))){
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24558__$1,(4),from);
} else {
if((state_val_24559 === (11))){
var inst_24547 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
if(cljs.core.truth_(inst_24547)){
var statearr_24567_24599 = state_24558__$1;
(statearr_24567_24599[(1)] = (12));

} else {
var statearr_24568_24600 = state_24558__$1;
(statearr_24568_24600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (9))){
var state_24558__$1 = state_24558;
var statearr_24569_24601 = state_24558__$1;
(statearr_24569_24601[(2)] = null);

(statearr_24569_24601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (5))){
var state_24558__$1 = state_24558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24571_24602 = state_24558__$1;
(statearr_24571_24602[(1)] = (8));

} else {
var statearr_24572_24603 = state_24558__$1;
(statearr_24572_24603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (14))){
var inst_24552 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24573_24604 = state_24558__$1;
(statearr_24573_24604[(2)] = inst_24552);

(statearr_24573_24604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (10))){
var inst_24544 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24575_24605 = state_24558__$1;
(statearr_24575_24605[(2)] = inst_24544);

(statearr_24575_24605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (8))){
var inst_24541 = cljs.core.async.close_BANG_.call(null,to);
var state_24558__$1 = state_24558;
var statearr_24576_24607 = state_24558__$1;
(statearr_24576_24607[(2)] = inst_24541);

(statearr_24576_24607[(1)] = (10));


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
});})(c__24326__auto___24588))
;
return ((function (switch__24055__auto__,c__24326__auto___24588){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_24580 = [null,null,null,null,null,null,null,null];
(statearr_24580[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_24580[(1)] = (1));

return statearr_24580;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_24558){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24581){if((e24581 instanceof Object)){
var ex__24059__auto__ = e24581;
var statearr_24582_24611 = state_24558;
(statearr_24582_24611[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24612 = state_24558;
state_24558 = G__24612;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_24558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_24558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___24588))
})();
var state__24328__auto__ = (function (){var statearr_24583 = f__24327__auto__.call(null);
(statearr_24583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___24588);

return statearr_24583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___24588))
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
return (function (p__24807){
var vec__24808 = p__24807;
var v = cljs.core.nth.call(null,vec__24808,(0),null);
var p = cljs.core.nth.call(null,vec__24808,(1),null);
var job = vec__24808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24326__auto___25001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results){
return (function (state_24816){
var state_val_24817 = (state_24816[(1)]);
if((state_val_24817 === (1))){
var state_24816__$1 = state_24816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24816__$1,(2),res,v);
} else {
if((state_val_24817 === (2))){
var inst_24813 = (state_24816[(2)]);
var inst_24814 = cljs.core.async.close_BANG_.call(null,res);
var state_24816__$1 = (function (){var statearr_24818 = state_24816;
(statearr_24818[(7)] = inst_24813);

return statearr_24818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24816__$1,inst_24814);
} else {
return null;
}
}
});})(c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results))
;
return ((function (switch__24055__auto__,c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_24822 = [null,null,null,null,null,null,null,null];
(statearr_24822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__);

(statearr_24822[(1)] = (1));

return statearr_24822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1 = (function (state_24816){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object)){
var ex__24059__auto__ = e24823;
var statearr_24824_25006 = state_24816;
(statearr_24824_25006[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25007 = state_24816;
state_24816 = G__25007;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = function(state_24816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1.call(this,state_24816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results))
})();
var state__24328__auto__ = (function (){var statearr_24825 = f__24327__auto__.call(null);
(statearr_24825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___25001);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___25001,res,vec__24808,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24826){
var vec__24827 = p__24826;
var v = cljs.core.nth.call(null,vec__24827,(0),null);
var p = cljs.core.nth.call(null,vec__24827,(1),null);
var job = vec__24827;
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
var n__21370__auto___25012 = n;
var __25013 = (0);
while(true){
if((__25013 < n__21370__auto___25012)){
var G__24830_25014 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24830_25014) {
case "compute":
var c__24326__auto___25016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25013,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (__25013,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function (state_24843){
var state_val_24844 = (state_24843[(1)]);
if((state_val_24844 === (1))){
var state_24843__$1 = state_24843;
var statearr_24845_25017 = state_24843__$1;
(statearr_24845_25017[(2)] = null);

(statearr_24845_25017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (2))){
var state_24843__$1 = state_24843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24843__$1,(4),jobs);
} else {
if((state_val_24844 === (3))){
var inst_24841 = (state_24843[(2)]);
var state_24843__$1 = state_24843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24843__$1,inst_24841);
} else {
if((state_val_24844 === (4))){
var inst_24833 = (state_24843[(2)]);
var inst_24834 = process.call(null,inst_24833);
var state_24843__$1 = state_24843;
if(cljs.core.truth_(inst_24834)){
var statearr_24846_25019 = state_24843__$1;
(statearr_24846_25019[(1)] = (5));

} else {
var statearr_24847_25020 = state_24843__$1;
(statearr_24847_25020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (5))){
var state_24843__$1 = state_24843;
var statearr_24848_25022 = state_24843__$1;
(statearr_24848_25022[(2)] = null);

(statearr_24848_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (6))){
var state_24843__$1 = state_24843;
var statearr_24849_25024 = state_24843__$1;
(statearr_24849_25024[(2)] = null);

(statearr_24849_25024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (7))){
var inst_24839 = (state_24843[(2)]);
var state_24843__$1 = state_24843;
var statearr_24850_25028 = state_24843__$1;
(statearr_24850_25028[(2)] = inst_24839);

(statearr_24850_25028[(1)] = (3));


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
});})(__25013,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
;
return ((function (__25013,switch__24055__auto__,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_24854 = [null,null,null,null,null,null,null];
(statearr_24854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__);

(statearr_24854[(1)] = (1));

return statearr_24854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1 = (function (state_24843){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24856){if((e24856 instanceof Object)){
var ex__24059__auto__ = e24856;
var statearr_24857_25033 = state_24843;
(statearr_24857_25033[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25034 = state_24843;
state_24843 = G__25034;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = function(state_24843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1.call(this,state_24843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__;
})()
;})(__25013,switch__24055__auto__,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
})();
var state__24328__auto__ = (function (){var statearr_24859 = f__24327__auto__.call(null);
(statearr_24859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___25016);

return statearr_24859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(__25013,c__24326__auto___25016,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
);


break;
case "async":
var c__24326__auto___25035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25013,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (__25013,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function (state_24872){
var state_val_24873 = (state_24872[(1)]);
if((state_val_24873 === (1))){
var state_24872__$1 = state_24872;
var statearr_24875_25038 = state_24872__$1;
(statearr_24875_25038[(2)] = null);

(statearr_24875_25038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (2))){
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24872__$1,(4),jobs);
} else {
if((state_val_24873 === (3))){
var inst_24870 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24872__$1,inst_24870);
} else {
if((state_val_24873 === (4))){
var inst_24862 = (state_24872[(2)]);
var inst_24863 = async.call(null,inst_24862);
var state_24872__$1 = state_24872;
if(cljs.core.truth_(inst_24863)){
var statearr_24876_25040 = state_24872__$1;
(statearr_24876_25040[(1)] = (5));

} else {
var statearr_24877_25043 = state_24872__$1;
(statearr_24877_25043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (5))){
var state_24872__$1 = state_24872;
var statearr_24878_25045 = state_24872__$1;
(statearr_24878_25045[(2)] = null);

(statearr_24878_25045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (6))){
var state_24872__$1 = state_24872;
var statearr_24879_25047 = state_24872__$1;
(statearr_24879_25047[(2)] = null);

(statearr_24879_25047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (7))){
var inst_24868 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24880_25048 = state_24872__$1;
(statearr_24880_25048[(2)] = inst_24868);

(statearr_24880_25048[(1)] = (3));


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
});})(__25013,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
;
return ((function (__25013,switch__24055__auto__,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_24886 = [null,null,null,null,null,null,null];
(statearr_24886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__);

(statearr_24886[(1)] = (1));

return statearr_24886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1 = (function (state_24872){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24887){if((e24887 instanceof Object)){
var ex__24059__auto__ = e24887;
var statearr_24888_25049 = state_24872;
(statearr_24888_25049[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25050 = state_24872;
state_24872 = G__25050;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = function(state_24872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1.call(this,state_24872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__;
})()
;})(__25013,switch__24055__auto__,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
})();
var state__24328__auto__ = (function (){var statearr_24890 = f__24327__auto__.call(null);
(statearr_24890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___25035);

return statearr_24890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(__25013,c__24326__auto___25035,G__24830_25014,n__21370__auto___25012,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25051 = (__25013 + (1));
__25013 = G__25051;
continue;
} else {
}
break;
}

var c__24326__auto___25052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___25052,jobs,results,process,async){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___25052,jobs,results,process,async){
return (function (state_24912){
var state_val_24913 = (state_24912[(1)]);
if((state_val_24913 === (1))){
var state_24912__$1 = state_24912;
var statearr_24914_25053 = state_24912__$1;
(statearr_24914_25053[(2)] = null);

(statearr_24914_25053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (2))){
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24912__$1,(4),from);
} else {
if((state_val_24913 === (3))){
var inst_24910 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24912__$1,inst_24910);
} else {
if((state_val_24913 === (4))){
var inst_24893 = (state_24912[(7)]);
var inst_24893__$1 = (state_24912[(2)]);
var inst_24894 = (inst_24893__$1 == null);
var state_24912__$1 = (function (){var statearr_24915 = state_24912;
(statearr_24915[(7)] = inst_24893__$1);

return statearr_24915;
})();
if(cljs.core.truth_(inst_24894)){
var statearr_24916_25054 = state_24912__$1;
(statearr_24916_25054[(1)] = (5));

} else {
var statearr_24917_25055 = state_24912__$1;
(statearr_24917_25055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (5))){
var inst_24896 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24912__$1 = state_24912;
var statearr_24918_25056 = state_24912__$1;
(statearr_24918_25056[(2)] = inst_24896);

(statearr_24918_25056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (6))){
var inst_24893 = (state_24912[(7)]);
var inst_24898 = (state_24912[(8)]);
var inst_24898__$1 = cljs.core.async.chan.call(null,(1));
var inst_24899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24900 = [inst_24893,inst_24898__$1];
var inst_24901 = (new cljs.core.PersistentVector(null,2,(5),inst_24899,inst_24900,null));
var state_24912__$1 = (function (){var statearr_24919 = state_24912;
(statearr_24919[(8)] = inst_24898__$1);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(8),jobs,inst_24901);
} else {
if((state_val_24913 === (7))){
var inst_24908 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24920_25057 = state_24912__$1;
(statearr_24920_25057[(2)] = inst_24908);

(statearr_24920_25057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (8))){
var inst_24898 = (state_24912[(8)]);
var inst_24903 = (state_24912[(2)]);
var state_24912__$1 = (function (){var statearr_24921 = state_24912;
(statearr_24921[(9)] = inst_24903);

return statearr_24921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(9),results,inst_24898);
} else {
if((state_val_24913 === (9))){
var inst_24905 = (state_24912[(2)]);
var state_24912__$1 = (function (){var statearr_24922 = state_24912;
(statearr_24922[(10)] = inst_24905);

return statearr_24922;
})();
var statearr_24923_25058 = state_24912__$1;
(statearr_24923_25058[(2)] = null);

(statearr_24923_25058[(1)] = (2));


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
});})(c__24326__auto___25052,jobs,results,process,async))
;
return ((function (switch__24055__auto__,c__24326__auto___25052,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1 = (function (state_24912){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__24059__auto__ = e24928;
var statearr_24929_25059 = state_24912;
(statearr_24929_25059[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25060 = state_24912;
state_24912 = G__25060;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = function(state_24912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1.call(this,state_24912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___25052,jobs,results,process,async))
})();
var state__24328__auto__ = (function (){var statearr_24930 = f__24327__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___25052);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___25052,jobs,results,process,async))
);


var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,jobs,results,process,async){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,jobs,results,process,async){
return (function (state_24968){
var state_val_24969 = (state_24968[(1)]);
if((state_val_24969 === (7))){
var inst_24964 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
var statearr_24970_25061 = state_24968__$1;
(statearr_24970_25061[(2)] = inst_24964);

(statearr_24970_25061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (20))){
var state_24968__$1 = state_24968;
var statearr_24971_25062 = state_24968__$1;
(statearr_24971_25062[(2)] = null);

(statearr_24971_25062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (1))){
var state_24968__$1 = state_24968;
var statearr_24972_25063 = state_24968__$1;
(statearr_24972_25063[(2)] = null);

(statearr_24972_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (4))){
var inst_24933 = (state_24968[(7)]);
var inst_24933__$1 = (state_24968[(2)]);
var inst_24934 = (inst_24933__$1 == null);
var state_24968__$1 = (function (){var statearr_24973 = state_24968;
(statearr_24973[(7)] = inst_24933__$1);

return statearr_24973;
})();
if(cljs.core.truth_(inst_24934)){
var statearr_24974_25064 = state_24968__$1;
(statearr_24974_25064[(1)] = (5));

} else {
var statearr_24975_25065 = state_24968__$1;
(statearr_24975_25065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (15))){
var inst_24946 = (state_24968[(8)]);
var state_24968__$1 = state_24968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24968__$1,(18),to,inst_24946);
} else {
if((state_val_24969 === (21))){
var inst_24959 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
var statearr_24976_25066 = state_24968__$1;
(statearr_24976_25066[(2)] = inst_24959);

(statearr_24976_25066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (13))){
var inst_24961 = (state_24968[(2)]);
var state_24968__$1 = (function (){var statearr_24977 = state_24968;
(statearr_24977[(9)] = inst_24961);

return statearr_24977;
})();
var statearr_24978_25067 = state_24968__$1;
(statearr_24978_25067[(2)] = null);

(statearr_24978_25067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (6))){
var inst_24933 = (state_24968[(7)]);
var state_24968__$1 = state_24968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24968__$1,(11),inst_24933);
} else {
if((state_val_24969 === (17))){
var inst_24954 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
if(cljs.core.truth_(inst_24954)){
var statearr_24979_25068 = state_24968__$1;
(statearr_24979_25068[(1)] = (19));

} else {
var statearr_24980_25069 = state_24968__$1;
(statearr_24980_25069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (3))){
var inst_24966 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24968__$1,inst_24966);
} else {
if((state_val_24969 === (12))){
var inst_24943 = (state_24968[(10)]);
var state_24968__$1 = state_24968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24968__$1,(14),inst_24943);
} else {
if((state_val_24969 === (2))){
var state_24968__$1 = state_24968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24968__$1,(4),results);
} else {
if((state_val_24969 === (19))){
var state_24968__$1 = state_24968;
var statearr_24981_25070 = state_24968__$1;
(statearr_24981_25070[(2)] = null);

(statearr_24981_25070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (11))){
var inst_24943 = (state_24968[(2)]);
var state_24968__$1 = (function (){var statearr_24982 = state_24968;
(statearr_24982[(10)] = inst_24943);

return statearr_24982;
})();
var statearr_24983_25071 = state_24968__$1;
(statearr_24983_25071[(2)] = null);

(statearr_24983_25071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (9))){
var state_24968__$1 = state_24968;
var statearr_24984_25072 = state_24968__$1;
(statearr_24984_25072[(2)] = null);

(statearr_24984_25072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (5))){
var state_24968__$1 = state_24968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24985_25073 = state_24968__$1;
(statearr_24985_25073[(1)] = (8));

} else {
var statearr_24986_25074 = state_24968__$1;
(statearr_24986_25074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (14))){
var inst_24946 = (state_24968[(8)]);
var inst_24948 = (state_24968[(11)]);
var inst_24946__$1 = (state_24968[(2)]);
var inst_24947 = (inst_24946__$1 == null);
var inst_24948__$1 = cljs.core.not.call(null,inst_24947);
var state_24968__$1 = (function (){var statearr_24987 = state_24968;
(statearr_24987[(8)] = inst_24946__$1);

(statearr_24987[(11)] = inst_24948__$1);

return statearr_24987;
})();
if(inst_24948__$1){
var statearr_24988_25075 = state_24968__$1;
(statearr_24988_25075[(1)] = (15));

} else {
var statearr_24989_25076 = state_24968__$1;
(statearr_24989_25076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (16))){
var inst_24948 = (state_24968[(11)]);
var state_24968__$1 = state_24968;
var statearr_24990_25077 = state_24968__$1;
(statearr_24990_25077[(2)] = inst_24948);

(statearr_24990_25077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (10))){
var inst_24940 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
var statearr_24991_25078 = state_24968__$1;
(statearr_24991_25078[(2)] = inst_24940);

(statearr_24991_25078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (18))){
var inst_24951 = (state_24968[(2)]);
var state_24968__$1 = state_24968;
var statearr_24992_25079 = state_24968__$1;
(statearr_24992_25079[(2)] = inst_24951);

(statearr_24992_25079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24969 === (8))){
var inst_24937 = cljs.core.async.close_BANG_.call(null,to);
var state_24968__$1 = state_24968;
var statearr_24993_25080 = state_24968__$1;
(statearr_24993_25080[(2)] = inst_24937);

(statearr_24993_25080[(1)] = (10));


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
});})(c__24326__auto__,jobs,results,process,async))
;
return ((function (switch__24055__auto__,c__24326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_24997 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__);

(statearr_24997[(1)] = (1));

return statearr_24997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1 = (function (state_24968){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_24968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e24998){if((e24998 instanceof Object)){
var ex__24059__auto__ = e24998;
var statearr_24999_25081 = state_24968;
(statearr_24999_25081[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25082 = state_24968;
state_24968 = G__25082;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__ = function(state_24968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1.call(this,state_24968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,jobs,results,process,async))
})();
var state__24328__auto__ = (function (){var statearr_25000 = f__24327__auto__.call(null);
(statearr_25000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_25000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,jobs,results,process,async))
);

return c__24326__auto__;
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
var args25083 = [];
var len__21530__auto___25095 = arguments.length;
var i__21531__auto___25097 = (0);
while(true){
if((i__21531__auto___25097 < len__21530__auto___25095)){
args25083.push((arguments[i__21531__auto___25097]));

var G__25098 = (i__21531__auto___25097 + (1));
i__21531__auto___25097 = G__25098;
continue;
} else {
}
break;
}

var G__25091 = args25083.length;
switch (G__25091) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25083.length)].join('')));

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
var args25108 = [];
var len__21530__auto___25121 = arguments.length;
var i__21531__auto___25122 = (0);
while(true){
if((i__21531__auto___25122 < len__21530__auto___25121)){
args25108.push((arguments[i__21531__auto___25122]));

var G__25126 = (i__21531__auto___25122 + (1));
i__21531__auto___25122 = G__25126;
continue;
} else {
}
break;
}

var G__25116 = args25108.length;
switch (G__25116) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25108.length)].join('')));

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
var args25145 = [];
var len__21530__auto___25220 = arguments.length;
var i__21531__auto___25221 = (0);
while(true){
if((i__21531__auto___25221 < len__21530__auto___25220)){
args25145.push((arguments[i__21531__auto___25221]));

var G__25222 = (i__21531__auto___25221 + (1));
i__21531__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var G__25152 = args25145.length;
switch (G__25152) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25145.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24326__auto___25224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___25224,tc,fc){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___25224,tc,fc){
return (function (state_25183){
var state_val_25184 = (state_25183[(1)]);
if((state_val_25184 === (7))){
var inst_25179 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
var statearr_25186_25225 = state_25183__$1;
(statearr_25186_25225[(2)] = inst_25179);

(statearr_25186_25225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (1))){
var state_25183__$1 = state_25183;
var statearr_25187_25226 = state_25183__$1;
(statearr_25187_25226[(2)] = null);

(statearr_25187_25226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (4))){
var inst_25158 = (state_25183[(7)]);
var inst_25158__$1 = (state_25183[(2)]);
var inst_25159 = (inst_25158__$1 == null);
var state_25183__$1 = (function (){var statearr_25191 = state_25183;
(statearr_25191[(7)] = inst_25158__$1);

return statearr_25191;
})();
if(cljs.core.truth_(inst_25159)){
var statearr_25193_25227 = state_25183__$1;
(statearr_25193_25227[(1)] = (5));

} else {
var statearr_25194_25228 = state_25183__$1;
(statearr_25194_25228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (13))){
var state_25183__$1 = state_25183;
var statearr_25195_25229 = state_25183__$1;
(statearr_25195_25229[(2)] = null);

(statearr_25195_25229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (6))){
var inst_25158 = (state_25183[(7)]);
var inst_25164 = p.call(null,inst_25158);
var state_25183__$1 = state_25183;
if(cljs.core.truth_(inst_25164)){
var statearr_25197_25232 = state_25183__$1;
(statearr_25197_25232[(1)] = (9));

} else {
var statearr_25198_25234 = state_25183__$1;
(statearr_25198_25234[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (3))){
var inst_25181 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25183__$1,inst_25181);
} else {
if((state_val_25184 === (12))){
var state_25183__$1 = state_25183;
var statearr_25202_25236 = state_25183__$1;
(statearr_25202_25236[(2)] = null);

(statearr_25202_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (2))){
var state_25183__$1 = state_25183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25183__$1,(4),ch);
} else {
if((state_val_25184 === (11))){
var inst_25158 = (state_25183[(7)]);
var inst_25169 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25183__$1,(8),inst_25169,inst_25158);
} else {
if((state_val_25184 === (9))){
var state_25183__$1 = state_25183;
var statearr_25204_25238 = state_25183__$1;
(statearr_25204_25238[(2)] = tc);

(statearr_25204_25238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (5))){
var inst_25161 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25162 = cljs.core.async.close_BANG_.call(null,fc);
var state_25183__$1 = (function (){var statearr_25205 = state_25183;
(statearr_25205[(8)] = inst_25161);

return statearr_25205;
})();
var statearr_25206_25241 = state_25183__$1;
(statearr_25206_25241[(2)] = inst_25162);

(statearr_25206_25241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (14))){
var inst_25177 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
var statearr_25207_25244 = state_25183__$1;
(statearr_25207_25244[(2)] = inst_25177);

(statearr_25207_25244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (10))){
var state_25183__$1 = state_25183;
var statearr_25209_25245 = state_25183__$1;
(statearr_25209_25245[(2)] = fc);

(statearr_25209_25245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25184 === (8))){
var inst_25172 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
if(cljs.core.truth_(inst_25172)){
var statearr_25211_25246 = state_25183__$1;
(statearr_25211_25246[(1)] = (12));

} else {
var statearr_25212_25247 = state_25183__$1;
(statearr_25212_25247[(1)] = (13));

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
});})(c__24326__auto___25224,tc,fc))
;
return ((function (switch__24055__auto__,c__24326__auto___25224,tc,fc){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_25216 = [null,null,null,null,null,null,null,null,null];
(statearr_25216[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_25216[(1)] = (1));

return statearr_25216;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_25183){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_25183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object)){
var ex__24059__auto__ = e25217;
var statearr_25218_25248 = state_25183;
(statearr_25218_25248[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25249 = state_25183;
state_25183 = G__25249;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_25183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_25183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___25224,tc,fc))
})();
var state__24328__auto__ = (function (){var statearr_25219 = f__24327__auto__.call(null);
(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___25224);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___25224,tc,fc))
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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_25321){
var state_val_25322 = (state_25321[(1)]);
if((state_val_25322 === (7))){
var inst_25317 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25323_25351 = state_25321__$1;
(statearr_25323_25351[(2)] = inst_25317);

(statearr_25323_25351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (1))){
var inst_25299 = init;
var state_25321__$1 = (function (){var statearr_25324 = state_25321;
(statearr_25324[(7)] = inst_25299);

return statearr_25324;
})();
var statearr_25325_25354 = state_25321__$1;
(statearr_25325_25354[(2)] = null);

(statearr_25325_25354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (4))){
var inst_25303 = (state_25321[(8)]);
var inst_25303__$1 = (state_25321[(2)]);
var inst_25304 = (inst_25303__$1 == null);
var state_25321__$1 = (function (){var statearr_25326 = state_25321;
(statearr_25326[(8)] = inst_25303__$1);

return statearr_25326;
})();
if(cljs.core.truth_(inst_25304)){
var statearr_25327_25356 = state_25321__$1;
(statearr_25327_25356[(1)] = (5));

} else {
var statearr_25328_25361 = state_25321__$1;
(statearr_25328_25361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (6))){
var inst_25307 = (state_25321[(9)]);
var inst_25299 = (state_25321[(7)]);
var inst_25303 = (state_25321[(8)]);
var inst_25307__$1 = f.call(null,inst_25299,inst_25303);
var inst_25308 = cljs.core.reduced_QMARK_.call(null,inst_25307__$1);
var state_25321__$1 = (function (){var statearr_25330 = state_25321;
(statearr_25330[(9)] = inst_25307__$1);

return statearr_25330;
})();
if(inst_25308){
var statearr_25331_25374 = state_25321__$1;
(statearr_25331_25374[(1)] = (8));

} else {
var statearr_25332_25377 = state_25321__$1;
(statearr_25332_25377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (3))){
var inst_25319 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25321__$1,inst_25319);
} else {
if((state_val_25322 === (2))){
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(4),ch);
} else {
if((state_val_25322 === (9))){
var inst_25307 = (state_25321[(9)]);
var inst_25299 = inst_25307;
var state_25321__$1 = (function (){var statearr_25334 = state_25321;
(statearr_25334[(7)] = inst_25299);

return statearr_25334;
})();
var statearr_25335_25378 = state_25321__$1;
(statearr_25335_25378[(2)] = null);

(statearr_25335_25378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (5))){
var inst_25299 = (state_25321[(7)]);
var state_25321__$1 = state_25321;
var statearr_25337_25384 = state_25321__$1;
(statearr_25337_25384[(2)] = inst_25299);

(statearr_25337_25384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (10))){
var inst_25315 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25338_25390 = state_25321__$1;
(statearr_25338_25390[(2)] = inst_25315);

(statearr_25338_25390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (8))){
var inst_25307 = (state_25321[(9)]);
var inst_25311 = cljs.core.deref.call(null,inst_25307);
var state_25321__$1 = state_25321;
var statearr_25339_25397 = state_25321__$1;
(statearr_25339_25397[(2)] = inst_25311);

(statearr_25339_25397[(1)] = (10));


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
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24056__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24056__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = cljs$core$async$reduce_$_state_machine__24056__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var cljs$core$async$reduce_$_state_machine__24056__auto____1 = (function (state_25321){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_25321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__24059__auto__ = e25347;
var statearr_25348_25410 = state_25321;
(statearr_25348_25410[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25415 = state_25321;
state_25321 = G__25415;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24056__auto__ = function(state_25321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24056__auto____1.call(this,state_25321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24056__auto____0;
cljs$core$async$reduce_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24056__auto____1;
return cljs$core$async$reduce_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_25350 = f__24327__auto__.call(null);
(statearr_25350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_25350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
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
var args25426 = [];
var len__21530__auto___25485 = arguments.length;
var i__21531__auto___25486 = (0);
while(true){
if((i__21531__auto___25486 < len__21530__auto___25485)){
args25426.push((arguments[i__21531__auto___25486]));

var G__25487 = (i__21531__auto___25486 + (1));
i__21531__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var G__25432 = args25426.length;
switch (G__25432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25426.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_25457){
var state_val_25458 = (state_25457[(1)]);
if((state_val_25458 === (7))){
var inst_25439 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
var statearr_25459_25492 = state_25457__$1;
(statearr_25459_25492[(2)] = inst_25439);

(statearr_25459_25492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (1))){
var inst_25433 = cljs.core.seq.call(null,coll);
var inst_25434 = inst_25433;
var state_25457__$1 = (function (){var statearr_25460 = state_25457;
(statearr_25460[(7)] = inst_25434);

return statearr_25460;
})();
var statearr_25461_25496 = state_25457__$1;
(statearr_25461_25496[(2)] = null);

(statearr_25461_25496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (4))){
var inst_25434 = (state_25457[(7)]);
var inst_25437 = cljs.core.first.call(null,inst_25434);
var state_25457__$1 = state_25457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25457__$1,(7),ch,inst_25437);
} else {
if((state_val_25458 === (13))){
var inst_25451 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
var statearr_25462_25497 = state_25457__$1;
(statearr_25462_25497[(2)] = inst_25451);

(statearr_25462_25497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (6))){
var inst_25442 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
if(cljs.core.truth_(inst_25442)){
var statearr_25463_25498 = state_25457__$1;
(statearr_25463_25498[(1)] = (8));

} else {
var statearr_25464_25499 = state_25457__$1;
(statearr_25464_25499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (3))){
var inst_25455 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25457__$1,inst_25455);
} else {
if((state_val_25458 === (12))){
var state_25457__$1 = state_25457;
var statearr_25465_25500 = state_25457__$1;
(statearr_25465_25500[(2)] = null);

(statearr_25465_25500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (2))){
var inst_25434 = (state_25457[(7)]);
var state_25457__$1 = state_25457;
if(cljs.core.truth_(inst_25434)){
var statearr_25466_25501 = state_25457__$1;
(statearr_25466_25501[(1)] = (4));

} else {
var statearr_25467_25502 = state_25457__$1;
(statearr_25467_25502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (11))){
var inst_25448 = cljs.core.async.close_BANG_.call(null,ch);
var state_25457__$1 = state_25457;
var statearr_25468_25503 = state_25457__$1;
(statearr_25468_25503[(2)] = inst_25448);

(statearr_25468_25503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (9))){
var state_25457__$1 = state_25457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25469_25504 = state_25457__$1;
(statearr_25469_25504[(1)] = (11));

} else {
var statearr_25471_25505 = state_25457__$1;
(statearr_25471_25505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (5))){
var inst_25434 = (state_25457[(7)]);
var state_25457__$1 = state_25457;
var statearr_25472_25506 = state_25457__$1;
(statearr_25472_25506[(2)] = inst_25434);

(statearr_25472_25506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (10))){
var inst_25453 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
var statearr_25474_25507 = state_25457__$1;
(statearr_25474_25507[(2)] = inst_25453);

(statearr_25474_25507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (8))){
var inst_25434 = (state_25457[(7)]);
var inst_25444 = cljs.core.next.call(null,inst_25434);
var inst_25434__$1 = inst_25444;
var state_25457__$1 = (function (){var statearr_25476 = state_25457;
(statearr_25476[(7)] = inst_25434__$1);

return statearr_25476;
})();
var statearr_25477_25508 = state_25457__$1;
(statearr_25477_25508[(2)] = null);

(statearr_25477_25508[(1)] = (2));


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
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null,null];
(statearr_25481[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_25457){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_25457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object)){
var ex__24059__auto__ = e25482;
var statearr_25483_25509 = state_25457;
(statearr_25483_25509[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25510 = state_25457;
state_25457 = G__25510;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_25457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_25457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_25484 = f__24327__auto__.call(null);
(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25769 = (function (mult,ch,cs,meta25770){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25770 = meta25770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25771,meta25770__$1){
var self__ = this;
var _25771__$1 = this;
return (new cljs.core.async.t_cljs$core$async25769(self__.mult,self__.ch,self__.cs,meta25770__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25771){
var self__ = this;
var _25771__$1 = this;
return self__.meta25770;
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25770","meta25770",892903172,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25769";

cljs.core.async.t_cljs$core$async25769.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async25769");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25769 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25769(mult__$1,ch__$1,cs__$1,meta25770){
return (new cljs.core.async.t_cljs$core$async25769(mult__$1,ch__$1,cs__$1,meta25770));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25769(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24326__auto___26024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___26024,cs,m,dchan,dctr,done){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___26024,cs,m,dchan,dctr,done){
return (function (state_25909){
var state_val_25910 = (state_25909[(1)]);
if((state_val_25910 === (7))){
var inst_25905 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25912_26029 = state_25909__$1;
(statearr_25912_26029[(2)] = inst_25905);

(statearr_25912_26029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (20))){
var inst_25808 = (state_25909[(7)]);
var inst_25820 = cljs.core.first.call(null,inst_25808);
var inst_25821 = cljs.core.nth.call(null,inst_25820,(0),null);
var inst_25822 = cljs.core.nth.call(null,inst_25820,(1),null);
var state_25909__$1 = (function (){var statearr_25913 = state_25909;
(statearr_25913[(8)] = inst_25821);

return statearr_25913;
})();
if(cljs.core.truth_(inst_25822)){
var statearr_25915_26030 = state_25909__$1;
(statearr_25915_26030[(1)] = (22));

} else {
var statearr_25916_26031 = state_25909__$1;
(statearr_25916_26031[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (27))){
var inst_25777 = (state_25909[(9)]);
var inst_25857 = (state_25909[(10)]);
var inst_25852 = (state_25909[(11)]);
var inst_25850 = (state_25909[(12)]);
var inst_25857__$1 = cljs.core._nth.call(null,inst_25850,inst_25852);
var inst_25858 = cljs.core.async.put_BANG_.call(null,inst_25857__$1,inst_25777,done);
var state_25909__$1 = (function (){var statearr_25917 = state_25909;
(statearr_25917[(10)] = inst_25857__$1);

return statearr_25917;
})();
if(cljs.core.truth_(inst_25858)){
var statearr_25918_26032 = state_25909__$1;
(statearr_25918_26032[(1)] = (30));

} else {
var statearr_25919_26037 = state_25909__$1;
(statearr_25919_26037[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (1))){
var state_25909__$1 = state_25909;
var statearr_25921_26038 = state_25909__$1;
(statearr_25921_26038[(2)] = null);

(statearr_25921_26038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (24))){
var inst_25808 = (state_25909[(7)]);
var inst_25827 = (state_25909[(2)]);
var inst_25828 = cljs.core.next.call(null,inst_25808);
var inst_25786 = inst_25828;
var inst_25787 = null;
var inst_25788 = (0);
var inst_25789 = (0);
var state_25909__$1 = (function (){var statearr_25922 = state_25909;
(statearr_25922[(13)] = inst_25788);

(statearr_25922[(14)] = inst_25787);

(statearr_25922[(15)] = inst_25786);

(statearr_25922[(16)] = inst_25789);

(statearr_25922[(17)] = inst_25827);

return statearr_25922;
})();
var statearr_25923_26047 = state_25909__$1;
(statearr_25923_26047[(2)] = null);

(statearr_25923_26047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (39))){
var state_25909__$1 = state_25909;
var statearr_25927_26048 = state_25909__$1;
(statearr_25927_26048[(2)] = null);

(statearr_25927_26048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (4))){
var inst_25777 = (state_25909[(9)]);
var inst_25777__$1 = (state_25909[(2)]);
var inst_25778 = (inst_25777__$1 == null);
var state_25909__$1 = (function (){var statearr_25928 = state_25909;
(statearr_25928[(9)] = inst_25777__$1);

return statearr_25928;
})();
if(cljs.core.truth_(inst_25778)){
var statearr_25929_26057 = state_25909__$1;
(statearr_25929_26057[(1)] = (5));

} else {
var statearr_25931_26058 = state_25909__$1;
(statearr_25931_26058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (15))){
var inst_25788 = (state_25909[(13)]);
var inst_25787 = (state_25909[(14)]);
var inst_25786 = (state_25909[(15)]);
var inst_25789 = (state_25909[(16)]);
var inst_25804 = (state_25909[(2)]);
var inst_25805 = (inst_25789 + (1));
var tmp25924 = inst_25788;
var tmp25925 = inst_25787;
var tmp25926 = inst_25786;
var inst_25786__$1 = tmp25926;
var inst_25787__$1 = tmp25925;
var inst_25788__$1 = tmp25924;
var inst_25789__$1 = inst_25805;
var state_25909__$1 = (function (){var statearr_25933 = state_25909;
(statearr_25933[(13)] = inst_25788__$1);

(statearr_25933[(14)] = inst_25787__$1);

(statearr_25933[(15)] = inst_25786__$1);

(statearr_25933[(16)] = inst_25789__$1);

(statearr_25933[(18)] = inst_25804);

return statearr_25933;
})();
var statearr_25935_26065 = state_25909__$1;
(statearr_25935_26065[(2)] = null);

(statearr_25935_26065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (21))){
var inst_25831 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25940_26067 = state_25909__$1;
(statearr_25940_26067[(2)] = inst_25831);

(statearr_25940_26067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (31))){
var inst_25857 = (state_25909[(10)]);
var inst_25861 = done.call(null,null);
var inst_25862 = cljs.core.async.untap_STAR_.call(null,m,inst_25857);
var state_25909__$1 = (function (){var statearr_25941 = state_25909;
(statearr_25941[(19)] = inst_25861);

return statearr_25941;
})();
var statearr_25942_26068 = state_25909__$1;
(statearr_25942_26068[(2)] = inst_25862);

(statearr_25942_26068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (32))){
var inst_25851 = (state_25909[(20)]);
var inst_25849 = (state_25909[(21)]);
var inst_25852 = (state_25909[(11)]);
var inst_25850 = (state_25909[(12)]);
var inst_25864 = (state_25909[(2)]);
var inst_25865 = (inst_25852 + (1));
var tmp25936 = inst_25851;
var tmp25937 = inst_25849;
var tmp25938 = inst_25850;
var inst_25849__$1 = tmp25937;
var inst_25850__$1 = tmp25938;
var inst_25851__$1 = tmp25936;
var inst_25852__$1 = inst_25865;
var state_25909__$1 = (function (){var statearr_25943 = state_25909;
(statearr_25943[(20)] = inst_25851__$1);

(statearr_25943[(21)] = inst_25849__$1);

(statearr_25943[(11)] = inst_25852__$1);

(statearr_25943[(22)] = inst_25864);

(statearr_25943[(12)] = inst_25850__$1);

return statearr_25943;
})();
var statearr_25944_26070 = state_25909__$1;
(statearr_25944_26070[(2)] = null);

(statearr_25944_26070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (40))){
var inst_25877 = (state_25909[(23)]);
var inst_25881 = done.call(null,null);
var inst_25882 = cljs.core.async.untap_STAR_.call(null,m,inst_25877);
var state_25909__$1 = (function (){var statearr_25945 = state_25909;
(statearr_25945[(24)] = inst_25881);

return statearr_25945;
})();
var statearr_25946_26071 = state_25909__$1;
(statearr_25946_26071[(2)] = inst_25882);

(statearr_25946_26071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (33))){
var inst_25868 = (state_25909[(25)]);
var inst_25870 = cljs.core.chunked_seq_QMARK_.call(null,inst_25868);
var state_25909__$1 = state_25909;
if(inst_25870){
var statearr_25947_26072 = state_25909__$1;
(statearr_25947_26072[(1)] = (36));

} else {
var statearr_25948_26073 = state_25909__$1;
(statearr_25948_26073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (13))){
var inst_25798 = (state_25909[(26)]);
var inst_25801 = cljs.core.async.close_BANG_.call(null,inst_25798);
var state_25909__$1 = state_25909;
var statearr_25949_26076 = state_25909__$1;
(statearr_25949_26076[(2)] = inst_25801);

(statearr_25949_26076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (22))){
var inst_25821 = (state_25909[(8)]);
var inst_25824 = cljs.core.async.close_BANG_.call(null,inst_25821);
var state_25909__$1 = state_25909;
var statearr_25950_26078 = state_25909__$1;
(statearr_25950_26078[(2)] = inst_25824);

(statearr_25950_26078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (36))){
var inst_25868 = (state_25909[(25)]);
var inst_25872 = cljs.core.chunk_first.call(null,inst_25868);
var inst_25873 = cljs.core.chunk_rest.call(null,inst_25868);
var inst_25874 = cljs.core.count.call(null,inst_25872);
var inst_25849 = inst_25873;
var inst_25850 = inst_25872;
var inst_25851 = inst_25874;
var inst_25852 = (0);
var state_25909__$1 = (function (){var statearr_25951 = state_25909;
(statearr_25951[(20)] = inst_25851);

(statearr_25951[(21)] = inst_25849);

(statearr_25951[(11)] = inst_25852);

(statearr_25951[(12)] = inst_25850);

return statearr_25951;
})();
var statearr_25952_26081 = state_25909__$1;
(statearr_25952_26081[(2)] = null);

(statearr_25952_26081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (41))){
var inst_25868 = (state_25909[(25)]);
var inst_25884 = (state_25909[(2)]);
var inst_25885 = cljs.core.next.call(null,inst_25868);
var inst_25849 = inst_25885;
var inst_25850 = null;
var inst_25851 = (0);
var inst_25852 = (0);
var state_25909__$1 = (function (){var statearr_25953 = state_25909;
(statearr_25953[(20)] = inst_25851);

(statearr_25953[(27)] = inst_25884);

(statearr_25953[(21)] = inst_25849);

(statearr_25953[(11)] = inst_25852);

(statearr_25953[(12)] = inst_25850);

return statearr_25953;
})();
var statearr_25954_26084 = state_25909__$1;
(statearr_25954_26084[(2)] = null);

(statearr_25954_26084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (43))){
var state_25909__$1 = state_25909;
var statearr_25955_26085 = state_25909__$1;
(statearr_25955_26085[(2)] = null);

(statearr_25955_26085[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (29))){
var inst_25893 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25956_26086 = state_25909__$1;
(statearr_25956_26086[(2)] = inst_25893);

(statearr_25956_26086[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (44))){
var inst_25902 = (state_25909[(2)]);
var state_25909__$1 = (function (){var statearr_25957 = state_25909;
(statearr_25957[(28)] = inst_25902);

return statearr_25957;
})();
var statearr_25958_26087 = state_25909__$1;
(statearr_25958_26087[(2)] = null);

(statearr_25958_26087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (6))){
var inst_25841 = (state_25909[(29)]);
var inst_25840 = cljs.core.deref.call(null,cs);
var inst_25841__$1 = cljs.core.keys.call(null,inst_25840);
var inst_25842 = cljs.core.count.call(null,inst_25841__$1);
var inst_25843 = cljs.core.reset_BANG_.call(null,dctr,inst_25842);
var inst_25848 = cljs.core.seq.call(null,inst_25841__$1);
var inst_25849 = inst_25848;
var inst_25850 = null;
var inst_25851 = (0);
var inst_25852 = (0);
var state_25909__$1 = (function (){var statearr_25959 = state_25909;
(statearr_25959[(30)] = inst_25843);

(statearr_25959[(20)] = inst_25851);

(statearr_25959[(21)] = inst_25849);

(statearr_25959[(29)] = inst_25841__$1);

(statearr_25959[(11)] = inst_25852);

(statearr_25959[(12)] = inst_25850);

return statearr_25959;
})();
var statearr_25960_26090 = state_25909__$1;
(statearr_25960_26090[(2)] = null);

(statearr_25960_26090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (28))){
var inst_25868 = (state_25909[(25)]);
var inst_25849 = (state_25909[(21)]);
var inst_25868__$1 = cljs.core.seq.call(null,inst_25849);
var state_25909__$1 = (function (){var statearr_25961 = state_25909;
(statearr_25961[(25)] = inst_25868__$1);

return statearr_25961;
})();
if(inst_25868__$1){
var statearr_25962_26094 = state_25909__$1;
(statearr_25962_26094[(1)] = (33));

} else {
var statearr_25963_26096 = state_25909__$1;
(statearr_25963_26096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (25))){
var inst_25851 = (state_25909[(20)]);
var inst_25852 = (state_25909[(11)]);
var inst_25854 = (inst_25852 < inst_25851);
var inst_25855 = inst_25854;
var state_25909__$1 = state_25909;
if(cljs.core.truth_(inst_25855)){
var statearr_25965_26098 = state_25909__$1;
(statearr_25965_26098[(1)] = (27));

} else {
var statearr_25966_26099 = state_25909__$1;
(statearr_25966_26099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (34))){
var state_25909__$1 = state_25909;
var statearr_25967_26100 = state_25909__$1;
(statearr_25967_26100[(2)] = null);

(statearr_25967_26100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (17))){
var state_25909__$1 = state_25909;
var statearr_25969_26103 = state_25909__$1;
(statearr_25969_26103[(2)] = null);

(statearr_25969_26103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (3))){
var inst_25907 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25909__$1,inst_25907);
} else {
if((state_val_25910 === (12))){
var inst_25836 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25970_26105 = state_25909__$1;
(statearr_25970_26105[(2)] = inst_25836);

(statearr_25970_26105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (2))){
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25909__$1,(4),ch);
} else {
if((state_val_25910 === (23))){
var state_25909__$1 = state_25909;
var statearr_25972_26109 = state_25909__$1;
(statearr_25972_26109[(2)] = null);

(statearr_25972_26109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (35))){
var inst_25891 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25973_26111 = state_25909__$1;
(statearr_25973_26111[(2)] = inst_25891);

(statearr_25973_26111[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (19))){
var inst_25808 = (state_25909[(7)]);
var inst_25812 = cljs.core.chunk_first.call(null,inst_25808);
var inst_25813 = cljs.core.chunk_rest.call(null,inst_25808);
var inst_25814 = cljs.core.count.call(null,inst_25812);
var inst_25786 = inst_25813;
var inst_25787 = inst_25812;
var inst_25788 = inst_25814;
var inst_25789 = (0);
var state_25909__$1 = (function (){var statearr_25974 = state_25909;
(statearr_25974[(13)] = inst_25788);

(statearr_25974[(14)] = inst_25787);

(statearr_25974[(15)] = inst_25786);

(statearr_25974[(16)] = inst_25789);

return statearr_25974;
})();
var statearr_25975_26112 = state_25909__$1;
(statearr_25975_26112[(2)] = null);

(statearr_25975_26112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (11))){
var inst_25786 = (state_25909[(15)]);
var inst_25808 = (state_25909[(7)]);
var inst_25808__$1 = cljs.core.seq.call(null,inst_25786);
var state_25909__$1 = (function (){var statearr_25980 = state_25909;
(statearr_25980[(7)] = inst_25808__$1);

return statearr_25980;
})();
if(inst_25808__$1){
var statearr_25981_26113 = state_25909__$1;
(statearr_25981_26113[(1)] = (16));

} else {
var statearr_25982_26114 = state_25909__$1;
(statearr_25982_26114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (9))){
var inst_25838 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25987_26115 = state_25909__$1;
(statearr_25987_26115[(2)] = inst_25838);

(statearr_25987_26115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (5))){
var inst_25784 = cljs.core.deref.call(null,cs);
var inst_25785 = cljs.core.seq.call(null,inst_25784);
var inst_25786 = inst_25785;
var inst_25787 = null;
var inst_25788 = (0);
var inst_25789 = (0);
var state_25909__$1 = (function (){var statearr_25988 = state_25909;
(statearr_25988[(13)] = inst_25788);

(statearr_25988[(14)] = inst_25787);

(statearr_25988[(15)] = inst_25786);

(statearr_25988[(16)] = inst_25789);

return statearr_25988;
})();
var statearr_25989_26116 = state_25909__$1;
(statearr_25989_26116[(2)] = null);

(statearr_25989_26116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (14))){
var state_25909__$1 = state_25909;
var statearr_25992_26117 = state_25909__$1;
(statearr_25992_26117[(2)] = null);

(statearr_25992_26117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (45))){
var inst_25899 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25994_26118 = state_25909__$1;
(statearr_25994_26118[(2)] = inst_25899);

(statearr_25994_26118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (26))){
var inst_25841 = (state_25909[(29)]);
var inst_25895 = (state_25909[(2)]);
var inst_25896 = cljs.core.seq.call(null,inst_25841);
var state_25909__$1 = (function (){var statearr_25996 = state_25909;
(statearr_25996[(31)] = inst_25895);

return statearr_25996;
})();
if(inst_25896){
var statearr_25997_26119 = state_25909__$1;
(statearr_25997_26119[(1)] = (42));

} else {
var statearr_25998_26120 = state_25909__$1;
(statearr_25998_26120[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (16))){
var inst_25808 = (state_25909[(7)]);
var inst_25810 = cljs.core.chunked_seq_QMARK_.call(null,inst_25808);
var state_25909__$1 = state_25909;
if(inst_25810){
var statearr_25999_26121 = state_25909__$1;
(statearr_25999_26121[(1)] = (19));

} else {
var statearr_26000_26122 = state_25909__$1;
(statearr_26000_26122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (38))){
var inst_25888 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_26001_26124 = state_25909__$1;
(statearr_26001_26124[(2)] = inst_25888);

(statearr_26001_26124[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (30))){
var state_25909__$1 = state_25909;
var statearr_26002_26126 = state_25909__$1;
(statearr_26002_26126[(2)] = null);

(statearr_26002_26126[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (10))){
var inst_25787 = (state_25909[(14)]);
var inst_25789 = (state_25909[(16)]);
var inst_25797 = cljs.core._nth.call(null,inst_25787,inst_25789);
var inst_25798 = cljs.core.nth.call(null,inst_25797,(0),null);
var inst_25799 = cljs.core.nth.call(null,inst_25797,(1),null);
var state_25909__$1 = (function (){var statearr_26003 = state_25909;
(statearr_26003[(26)] = inst_25798);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25799)){
var statearr_26004_26128 = state_25909__$1;
(statearr_26004_26128[(1)] = (13));

} else {
var statearr_26005_26129 = state_25909__$1;
(statearr_26005_26129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (18))){
var inst_25834 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_26006_26130 = state_25909__$1;
(statearr_26006_26130[(2)] = inst_25834);

(statearr_26006_26130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (42))){
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25909__$1,(45),dchan);
} else {
if((state_val_25910 === (37))){
var inst_25868 = (state_25909[(25)]);
var inst_25777 = (state_25909[(9)]);
var inst_25877 = (state_25909[(23)]);
var inst_25877__$1 = cljs.core.first.call(null,inst_25868);
var inst_25878 = cljs.core.async.put_BANG_.call(null,inst_25877__$1,inst_25777,done);
var state_25909__$1 = (function (){var statearr_26007 = state_25909;
(statearr_26007[(23)] = inst_25877__$1);

return statearr_26007;
})();
if(cljs.core.truth_(inst_25878)){
var statearr_26008_26131 = state_25909__$1;
(statearr_26008_26131[(1)] = (39));

} else {
var statearr_26009_26132 = state_25909__$1;
(statearr_26009_26132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (8))){
var inst_25788 = (state_25909[(13)]);
var inst_25789 = (state_25909[(16)]);
var inst_25791 = (inst_25789 < inst_25788);
var inst_25792 = inst_25791;
var state_25909__$1 = state_25909;
if(cljs.core.truth_(inst_25792)){
var statearr_26010_26135 = state_25909__$1;
(statearr_26010_26135[(1)] = (10));

} else {
var statearr_26011_26137 = state_25909__$1;
(statearr_26011_26137[(1)] = (11));

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
});})(c__24326__auto___26024,cs,m,dchan,dctr,done))
;
return ((function (switch__24055__auto__,c__24326__auto___26024,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24056__auto__ = null;
var cljs$core$async$mult_$_state_machine__24056__auto____0 = (function (){
var statearr_26015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26015[(0)] = cljs$core$async$mult_$_state_machine__24056__auto__);

(statearr_26015[(1)] = (1));

return statearr_26015;
});
var cljs$core$async$mult_$_state_machine__24056__auto____1 = (function (state_25909){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_25909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e26016){if((e26016 instanceof Object)){
var ex__24059__auto__ = e26016;
var statearr_26017_26139 = state_25909;
(statearr_26017_26139[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26140 = state_25909;
state_25909 = G__26140;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24056__auto__ = function(state_25909){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24056__auto____1.call(this,state_25909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24056__auto____0;
cljs$core$async$mult_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24056__auto____1;
return cljs$core$async$mult_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___26024,cs,m,dchan,dctr,done))
})();
var state__24328__auto__ = (function (){var statearr_26018 = f__24327__auto__.call(null);
(statearr_26018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___26024);

return statearr_26018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___26024,cs,m,dchan,dctr,done))
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
var args26141 = [];
var len__21530__auto___26144 = arguments.length;
var i__21531__auto___26145 = (0);
while(true){
if((i__21531__auto___26145 < len__21530__auto___26144)){
args26141.push((arguments[i__21531__auto___26145]));

var G__26146 = (i__21531__auto___26145 + (1));
i__21531__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26143 = args26141.length;
switch (G__26143) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26141.length)].join('')));

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
var len__21530__auto___26181 = arguments.length;
var i__21531__auto___26182 = (0);
while(true){
if((i__21531__auto___26182 < len__21530__auto___26181)){
args__21537__auto__.push((arguments[i__21531__auto___26182]));

var G__26183 = (i__21531__auto___26182 + (1));
i__21531__auto___26182 = G__26183;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26173){
var map__26174 = p__26173;
var map__26174__$1 = ((((!((map__26174 == null)))?((((map__26174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26174):map__26174);
var opts = map__26174__$1;
var statearr_26176_26188 = state;
(statearr_26176_26188[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26174,map__26174__$1,opts){
return (function (val){
var statearr_26177_26189 = state;
(statearr_26177_26189[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26174,map__26174__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26178_26190 = state;
(statearr_26178_26190[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26165){
var G__26166 = cljs.core.first.call(null,seq26165);
var seq26165__$1 = cljs.core.next.call(null,seq26165);
var G__26167 = cljs.core.first.call(null,seq26165__$1);
var seq26165__$2 = cljs.core.next.call(null,seq26165__$1);
var G__26168 = cljs.core.first.call(null,seq26165__$2);
var seq26165__$3 = cljs.core.next.call(null,seq26165__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26166,G__26167,G__26168,seq26165__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26356 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26357){
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
this.meta26357 = meta26357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26358,meta26357__$1){
var self__ = this;
var _26358__$1 = this;
return (new cljs.core.async.t_cljs$core$async26356(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26357__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26358){
var self__ = this;
var _26358__$1 = this;
return self__.meta26357;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26356.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26357","meta26357",669336346,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26356";

cljs.core.async.t_cljs$core$async26356.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26356");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26356 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26357){
return (new cljs.core.async.t_cljs$core$async26356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26357));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26356(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24326__auto___26543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26458){
var state_val_26459 = (state_26458[(1)]);
if((state_val_26459 === (7))){
var inst_26374 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26460_26544 = state_26458__$1;
(statearr_26460_26544[(2)] = inst_26374);

(statearr_26460_26544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (20))){
var inst_26386 = (state_26458[(7)]);
var state_26458__$1 = state_26458;
var statearr_26461_26545 = state_26458__$1;
(statearr_26461_26545[(2)] = inst_26386);

(statearr_26461_26545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (27))){
var state_26458__$1 = state_26458;
var statearr_26462_26546 = state_26458__$1;
(statearr_26462_26546[(2)] = null);

(statearr_26462_26546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (1))){
var inst_26362 = (state_26458[(8)]);
var inst_26362__$1 = calc_state.call(null);
var inst_26364 = (inst_26362__$1 == null);
var inst_26365 = cljs.core.not.call(null,inst_26364);
var state_26458__$1 = (function (){var statearr_26463 = state_26458;
(statearr_26463[(8)] = inst_26362__$1);

return statearr_26463;
})();
if(inst_26365){
var statearr_26464_26547 = state_26458__$1;
(statearr_26464_26547[(1)] = (2));

} else {
var statearr_26465_26548 = state_26458__$1;
(statearr_26465_26548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (24))){
var inst_26418 = (state_26458[(9)]);
var inst_26409 = (state_26458[(10)]);
var inst_26432 = (state_26458[(11)]);
var inst_26432__$1 = inst_26409.call(null,inst_26418);
var state_26458__$1 = (function (){var statearr_26466 = state_26458;
(statearr_26466[(11)] = inst_26432__$1);

return statearr_26466;
})();
if(cljs.core.truth_(inst_26432__$1)){
var statearr_26467_26549 = state_26458__$1;
(statearr_26467_26549[(1)] = (29));

} else {
var statearr_26468_26550 = state_26458__$1;
(statearr_26468_26550[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (4))){
var inst_26377 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26377)){
var statearr_26471_26551 = state_26458__$1;
(statearr_26471_26551[(1)] = (8));

} else {
var statearr_26473_26552 = state_26458__$1;
(statearr_26473_26552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (15))){
var inst_26403 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26403)){
var statearr_26474_26553 = state_26458__$1;
(statearr_26474_26553[(1)] = (19));

} else {
var statearr_26475_26554 = state_26458__$1;
(statearr_26475_26554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (21))){
var inst_26408 = (state_26458[(12)]);
var inst_26408__$1 = (state_26458[(2)]);
var inst_26409 = cljs.core.get.call(null,inst_26408__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26410 = cljs.core.get.call(null,inst_26408__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26411 = cljs.core.get.call(null,inst_26408__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26458__$1 = (function (){var statearr_26477 = state_26458;
(statearr_26477[(12)] = inst_26408__$1);

(statearr_26477[(10)] = inst_26409);

(statearr_26477[(13)] = inst_26410);

return statearr_26477;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26458__$1,(22),inst_26411);
} else {
if((state_val_26459 === (31))){
var inst_26440 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26440)){
var statearr_26478_26555 = state_26458__$1;
(statearr_26478_26555[(1)] = (32));

} else {
var statearr_26479_26556 = state_26458__$1;
(statearr_26479_26556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (32))){
var inst_26417 = (state_26458[(14)]);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26458__$1,(35),out,inst_26417);
} else {
if((state_val_26459 === (33))){
var inst_26408 = (state_26458[(12)]);
var inst_26386 = inst_26408;
var state_26458__$1 = (function (){var statearr_26480 = state_26458;
(statearr_26480[(7)] = inst_26386);

return statearr_26480;
})();
var statearr_26481_26557 = state_26458__$1;
(statearr_26481_26557[(2)] = null);

(statearr_26481_26557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (13))){
var inst_26386 = (state_26458[(7)]);
var inst_26393 = inst_26386.cljs$lang$protocol_mask$partition0$;
var inst_26394 = (inst_26393 & (64));
var inst_26395 = inst_26386.cljs$core$ISeq$;
var inst_26396 = (inst_26394) || (inst_26395);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26396)){
var statearr_26482_26558 = state_26458__$1;
(statearr_26482_26558[(1)] = (16));

} else {
var statearr_26483_26559 = state_26458__$1;
(statearr_26483_26559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (22))){
var inst_26418 = (state_26458[(9)]);
var inst_26417 = (state_26458[(14)]);
var inst_26416 = (state_26458[(2)]);
var inst_26417__$1 = cljs.core.nth.call(null,inst_26416,(0),null);
var inst_26418__$1 = cljs.core.nth.call(null,inst_26416,(1),null);
var inst_26419 = (inst_26417__$1 == null);
var inst_26420 = cljs.core._EQ_.call(null,inst_26418__$1,change);
var inst_26421 = (inst_26419) || (inst_26420);
var state_26458__$1 = (function (){var statearr_26484 = state_26458;
(statearr_26484[(9)] = inst_26418__$1);

(statearr_26484[(14)] = inst_26417__$1);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26421)){
var statearr_26485_26560 = state_26458__$1;
(statearr_26485_26560[(1)] = (23));

} else {
var statearr_26486_26561 = state_26458__$1;
(statearr_26486_26561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (36))){
var inst_26408 = (state_26458[(12)]);
var inst_26386 = inst_26408;
var state_26458__$1 = (function (){var statearr_26487 = state_26458;
(statearr_26487[(7)] = inst_26386);

return statearr_26487;
})();
var statearr_26488_26566 = state_26458__$1;
(statearr_26488_26566[(2)] = null);

(statearr_26488_26566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (29))){
var inst_26432 = (state_26458[(11)]);
var state_26458__$1 = state_26458;
var statearr_26489_26567 = state_26458__$1;
(statearr_26489_26567[(2)] = inst_26432);

(statearr_26489_26567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (6))){
var state_26458__$1 = state_26458;
var statearr_26492_26568 = state_26458__$1;
(statearr_26492_26568[(2)] = false);

(statearr_26492_26568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (28))){
var inst_26428 = (state_26458[(2)]);
var inst_26429 = calc_state.call(null);
var inst_26386 = inst_26429;
var state_26458__$1 = (function (){var statearr_26494 = state_26458;
(statearr_26494[(7)] = inst_26386);

(statearr_26494[(15)] = inst_26428);

return statearr_26494;
})();
var statearr_26495_26573 = state_26458__$1;
(statearr_26495_26573[(2)] = null);

(statearr_26495_26573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (25))){
var inst_26454 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26497_26575 = state_26458__$1;
(statearr_26497_26575[(2)] = inst_26454);

(statearr_26497_26575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (34))){
var inst_26452 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26498_26578 = state_26458__$1;
(statearr_26498_26578[(2)] = inst_26452);

(statearr_26498_26578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (17))){
var state_26458__$1 = state_26458;
var statearr_26499_26579 = state_26458__$1;
(statearr_26499_26579[(2)] = false);

(statearr_26499_26579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (3))){
var state_26458__$1 = state_26458;
var statearr_26500_26580 = state_26458__$1;
(statearr_26500_26580[(2)] = false);

(statearr_26500_26580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (12))){
var inst_26456 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26458__$1,inst_26456);
} else {
if((state_val_26459 === (2))){
var inst_26362 = (state_26458[(8)]);
var inst_26367 = inst_26362.cljs$lang$protocol_mask$partition0$;
var inst_26368 = (inst_26367 & (64));
var inst_26369 = inst_26362.cljs$core$ISeq$;
var inst_26370 = (inst_26368) || (inst_26369);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26370)){
var statearr_26501_26581 = state_26458__$1;
(statearr_26501_26581[(1)] = (5));

} else {
var statearr_26502_26582 = state_26458__$1;
(statearr_26502_26582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (23))){
var inst_26417 = (state_26458[(14)]);
var inst_26423 = (inst_26417 == null);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26423)){
var statearr_26503_26583 = state_26458__$1;
(statearr_26503_26583[(1)] = (26));

} else {
var statearr_26504_26584 = state_26458__$1;
(statearr_26504_26584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (35))){
var inst_26443 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26443)){
var statearr_26505_26585 = state_26458__$1;
(statearr_26505_26585[(1)] = (36));

} else {
var statearr_26506_26586 = state_26458__$1;
(statearr_26506_26586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (19))){
var inst_26386 = (state_26458[(7)]);
var inst_26405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26386);
var state_26458__$1 = state_26458;
var statearr_26507_26593 = state_26458__$1;
(statearr_26507_26593[(2)] = inst_26405);

(statearr_26507_26593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (11))){
var inst_26386 = (state_26458[(7)]);
var inst_26390 = (inst_26386 == null);
var inst_26391 = cljs.core.not.call(null,inst_26390);
var state_26458__$1 = state_26458;
if(inst_26391){
var statearr_26508_26595 = state_26458__$1;
(statearr_26508_26595[(1)] = (13));

} else {
var statearr_26509_26596 = state_26458__$1;
(statearr_26509_26596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (9))){
var inst_26362 = (state_26458[(8)]);
var state_26458__$1 = state_26458;
var statearr_26510_26597 = state_26458__$1;
(statearr_26510_26597[(2)] = inst_26362);

(statearr_26510_26597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (5))){
var state_26458__$1 = state_26458;
var statearr_26511_26598 = state_26458__$1;
(statearr_26511_26598[(2)] = true);

(statearr_26511_26598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (14))){
var state_26458__$1 = state_26458;
var statearr_26512_26599 = state_26458__$1;
(statearr_26512_26599[(2)] = false);

(statearr_26512_26599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (26))){
var inst_26418 = (state_26458[(9)]);
var inst_26425 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26418);
var state_26458__$1 = state_26458;
var statearr_26513_26600 = state_26458__$1;
(statearr_26513_26600[(2)] = inst_26425);

(statearr_26513_26600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (16))){
var state_26458__$1 = state_26458;
var statearr_26514_26601 = state_26458__$1;
(statearr_26514_26601[(2)] = true);

(statearr_26514_26601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (38))){
var inst_26448 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26515_26602 = state_26458__$1;
(statearr_26515_26602[(2)] = inst_26448);

(statearr_26515_26602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (30))){
var inst_26418 = (state_26458[(9)]);
var inst_26409 = (state_26458[(10)]);
var inst_26410 = (state_26458[(13)]);
var inst_26435 = cljs.core.empty_QMARK_.call(null,inst_26409);
var inst_26436 = inst_26410.call(null,inst_26418);
var inst_26437 = cljs.core.not.call(null,inst_26436);
var inst_26438 = (inst_26435) && (inst_26437);
var state_26458__$1 = state_26458;
var statearr_26516_26603 = state_26458__$1;
(statearr_26516_26603[(2)] = inst_26438);

(statearr_26516_26603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (10))){
var inst_26362 = (state_26458[(8)]);
var inst_26382 = (state_26458[(2)]);
var inst_26383 = cljs.core.get.call(null,inst_26382,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26384 = cljs.core.get.call(null,inst_26382,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26385 = cljs.core.get.call(null,inst_26382,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26386 = inst_26362;
var state_26458__$1 = (function (){var statearr_26517 = state_26458;
(statearr_26517[(7)] = inst_26386);

(statearr_26517[(16)] = inst_26384);

(statearr_26517[(17)] = inst_26383);

(statearr_26517[(18)] = inst_26385);

return statearr_26517;
})();
var statearr_26518_26604 = state_26458__$1;
(statearr_26518_26604[(2)] = null);

(statearr_26518_26604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (18))){
var inst_26400 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26519_26605 = state_26458__$1;
(statearr_26519_26605[(2)] = inst_26400);

(statearr_26519_26605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (37))){
var state_26458__$1 = state_26458;
var statearr_26520_26606 = state_26458__$1;
(statearr_26520_26606[(2)] = null);

(statearr_26520_26606[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (8))){
var inst_26362 = (state_26458[(8)]);
var inst_26379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26362);
var state_26458__$1 = state_26458;
var statearr_26521_26607 = state_26458__$1;
(statearr_26521_26607[(2)] = inst_26379);

(statearr_26521_26607[(1)] = (10));


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
});})(c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24055__auto__,c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24056__auto__ = null;
var cljs$core$async$mix_$_state_machine__24056__auto____0 = (function (){
var statearr_26525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26525[(0)] = cljs$core$async$mix_$_state_machine__24056__auto__);

(statearr_26525[(1)] = (1));

return statearr_26525;
});
var cljs$core$async$mix_$_state_machine__24056__auto____1 = (function (state_26458){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_26458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e26526){if((e26526 instanceof Object)){
var ex__24059__auto__ = e26526;
var statearr_26527_26613 = state_26458;
(statearr_26527_26613[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26614 = state_26458;
state_26458 = G__26614;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24056__auto__ = function(state_26458){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24056__auto____1.call(this,state_26458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24056__auto____0;
cljs$core$async$mix_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24056__auto____1;
return cljs$core$async$mix_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24328__auto__ = (function (){var statearr_26528 = f__24327__auto__.call(null);
(statearr_26528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___26543);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___26543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26636 = [];
var len__21530__auto___26639 = arguments.length;
var i__21531__auto___26640 = (0);
while(true){
if((i__21531__auto___26640 < len__21530__auto___26639)){
args26636.push((arguments[i__21531__auto___26640]));

var G__26641 = (i__21531__auto___26640 + (1));
i__21531__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var G__26638 = args26636.length;
switch (G__26638) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26636.length)].join('')));

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
var args26652 = [];
var len__21530__auto___26777 = arguments.length;
var i__21531__auto___26778 = (0);
while(true){
if((i__21531__auto___26778 < len__21530__auto___26777)){
args26652.push((arguments[i__21531__auto___26778]));

var G__26779 = (i__21531__auto___26778 + (1));
i__21531__auto___26778 = G__26779;
continue;
} else {
}
break;
}

var G__26654 = args26652.length;
switch (G__26654) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26652.length)].join('')));

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
return (function (p1__26651_SHARP_){
if(cljs.core.truth_(p1__26651_SHARP_.call(null,topic))){
return p1__26651_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26651_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26655 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26656){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26656 = meta26656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26657,meta26656__$1){
var self__ = this;
var _26657__$1 = this;
return (new cljs.core.async.t_cljs$core$async26655(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26656__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26657){
var self__ = this;
var _26657__$1 = this;
return self__.meta26656;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26656","meta26656",1855515480,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26655";

cljs.core.async.t_cljs$core$async26655.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26655");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26655 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26655(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26656){
return (new cljs.core.async.t_cljs$core$async26655(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26656));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26655(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24326__auto___26784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___26784,mults,ensure_mult,p){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___26784,mults,ensure_mult,p){
return (function (state_26729){
var state_val_26730 = (state_26729[(1)]);
if((state_val_26730 === (7))){
var inst_26725 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26731_26785 = state_26729__$1;
(statearr_26731_26785[(2)] = inst_26725);

(statearr_26731_26785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (20))){
var state_26729__$1 = state_26729;
var statearr_26732_26786 = state_26729__$1;
(statearr_26732_26786[(2)] = null);

(statearr_26732_26786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (1))){
var state_26729__$1 = state_26729;
var statearr_26733_26788 = state_26729__$1;
(statearr_26733_26788[(2)] = null);

(statearr_26733_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (24))){
var inst_26708 = (state_26729[(7)]);
var inst_26717 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26708);
var state_26729__$1 = state_26729;
var statearr_26734_26789 = state_26729__$1;
(statearr_26734_26789[(2)] = inst_26717);

(statearr_26734_26789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (4))){
var inst_26660 = (state_26729[(8)]);
var inst_26660__$1 = (state_26729[(2)]);
var inst_26661 = (inst_26660__$1 == null);
var state_26729__$1 = (function (){var statearr_26735 = state_26729;
(statearr_26735[(8)] = inst_26660__$1);

return statearr_26735;
})();
if(cljs.core.truth_(inst_26661)){
var statearr_26736_26790 = state_26729__$1;
(statearr_26736_26790[(1)] = (5));

} else {
var statearr_26737_26791 = state_26729__$1;
(statearr_26737_26791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (15))){
var inst_26702 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26738_26792 = state_26729__$1;
(statearr_26738_26792[(2)] = inst_26702);

(statearr_26738_26792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (21))){
var inst_26722 = (state_26729[(2)]);
var state_26729__$1 = (function (){var statearr_26739 = state_26729;
(statearr_26739[(9)] = inst_26722);

return statearr_26739;
})();
var statearr_26740_26793 = state_26729__$1;
(statearr_26740_26793[(2)] = null);

(statearr_26740_26793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (13))){
var inst_26684 = (state_26729[(10)]);
var inst_26686 = cljs.core.chunked_seq_QMARK_.call(null,inst_26684);
var state_26729__$1 = state_26729;
if(inst_26686){
var statearr_26741_26794 = state_26729__$1;
(statearr_26741_26794[(1)] = (16));

} else {
var statearr_26742_26795 = state_26729__$1;
(statearr_26742_26795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (22))){
var inst_26714 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
if(cljs.core.truth_(inst_26714)){
var statearr_26743_26796 = state_26729__$1;
(statearr_26743_26796[(1)] = (23));

} else {
var statearr_26744_26797 = state_26729__$1;
(statearr_26744_26797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (6))){
var inst_26710 = (state_26729[(11)]);
var inst_26708 = (state_26729[(7)]);
var inst_26660 = (state_26729[(8)]);
var inst_26708__$1 = topic_fn.call(null,inst_26660);
var inst_26709 = cljs.core.deref.call(null,mults);
var inst_26710__$1 = cljs.core.get.call(null,inst_26709,inst_26708__$1);
var state_26729__$1 = (function (){var statearr_26745 = state_26729;
(statearr_26745[(11)] = inst_26710__$1);

(statearr_26745[(7)] = inst_26708__$1);

return statearr_26745;
})();
if(cljs.core.truth_(inst_26710__$1)){
var statearr_26746_26800 = state_26729__$1;
(statearr_26746_26800[(1)] = (19));

} else {
var statearr_26747_26801 = state_26729__$1;
(statearr_26747_26801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (25))){
var inst_26719 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26748_26804 = state_26729__$1;
(statearr_26748_26804[(2)] = inst_26719);

(statearr_26748_26804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (17))){
var inst_26684 = (state_26729[(10)]);
var inst_26693 = cljs.core.first.call(null,inst_26684);
var inst_26694 = cljs.core.async.muxch_STAR_.call(null,inst_26693);
var inst_26695 = cljs.core.async.close_BANG_.call(null,inst_26694);
var inst_26696 = cljs.core.next.call(null,inst_26684);
var inst_26670 = inst_26696;
var inst_26671 = null;
var inst_26672 = (0);
var inst_26673 = (0);
var state_26729__$1 = (function (){var statearr_26749 = state_26729;
(statearr_26749[(12)] = inst_26673);

(statearr_26749[(13)] = inst_26671);

(statearr_26749[(14)] = inst_26695);

(statearr_26749[(15)] = inst_26670);

(statearr_26749[(16)] = inst_26672);

return statearr_26749;
})();
var statearr_26750_26805 = state_26729__$1;
(statearr_26750_26805[(2)] = null);

(statearr_26750_26805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (3))){
var inst_26727 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26729__$1,inst_26727);
} else {
if((state_val_26730 === (12))){
var inst_26704 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26751_26806 = state_26729__$1;
(statearr_26751_26806[(2)] = inst_26704);

(statearr_26751_26806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (2))){
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26729__$1,(4),ch);
} else {
if((state_val_26730 === (23))){
var state_26729__$1 = state_26729;
var statearr_26752_26807 = state_26729__$1;
(statearr_26752_26807[(2)] = null);

(statearr_26752_26807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (19))){
var inst_26710 = (state_26729[(11)]);
var inst_26660 = (state_26729[(8)]);
var inst_26712 = cljs.core.async.muxch_STAR_.call(null,inst_26710);
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26729__$1,(22),inst_26712,inst_26660);
} else {
if((state_val_26730 === (11))){
var inst_26684 = (state_26729[(10)]);
var inst_26670 = (state_26729[(15)]);
var inst_26684__$1 = cljs.core.seq.call(null,inst_26670);
var state_26729__$1 = (function (){var statearr_26753 = state_26729;
(statearr_26753[(10)] = inst_26684__$1);

return statearr_26753;
})();
if(inst_26684__$1){
var statearr_26754_26808 = state_26729__$1;
(statearr_26754_26808[(1)] = (13));

} else {
var statearr_26755_26809 = state_26729__$1;
(statearr_26755_26809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (9))){
var inst_26706 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26756_26810 = state_26729__$1;
(statearr_26756_26810[(2)] = inst_26706);

(statearr_26756_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (5))){
var inst_26667 = cljs.core.deref.call(null,mults);
var inst_26668 = cljs.core.vals.call(null,inst_26667);
var inst_26669 = cljs.core.seq.call(null,inst_26668);
var inst_26670 = inst_26669;
var inst_26671 = null;
var inst_26672 = (0);
var inst_26673 = (0);
var state_26729__$1 = (function (){var statearr_26757 = state_26729;
(statearr_26757[(12)] = inst_26673);

(statearr_26757[(13)] = inst_26671);

(statearr_26757[(15)] = inst_26670);

(statearr_26757[(16)] = inst_26672);

return statearr_26757;
})();
var statearr_26758_26813 = state_26729__$1;
(statearr_26758_26813[(2)] = null);

(statearr_26758_26813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (14))){
var state_26729__$1 = state_26729;
var statearr_26762_26814 = state_26729__$1;
(statearr_26762_26814[(2)] = null);

(statearr_26762_26814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (16))){
var inst_26684 = (state_26729[(10)]);
var inst_26688 = cljs.core.chunk_first.call(null,inst_26684);
var inst_26689 = cljs.core.chunk_rest.call(null,inst_26684);
var inst_26690 = cljs.core.count.call(null,inst_26688);
var inst_26670 = inst_26689;
var inst_26671 = inst_26688;
var inst_26672 = inst_26690;
var inst_26673 = (0);
var state_26729__$1 = (function (){var statearr_26763 = state_26729;
(statearr_26763[(12)] = inst_26673);

(statearr_26763[(13)] = inst_26671);

(statearr_26763[(15)] = inst_26670);

(statearr_26763[(16)] = inst_26672);

return statearr_26763;
})();
var statearr_26764_26815 = state_26729__$1;
(statearr_26764_26815[(2)] = null);

(statearr_26764_26815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (10))){
var inst_26673 = (state_26729[(12)]);
var inst_26671 = (state_26729[(13)]);
var inst_26670 = (state_26729[(15)]);
var inst_26672 = (state_26729[(16)]);
var inst_26678 = cljs.core._nth.call(null,inst_26671,inst_26673);
var inst_26679 = cljs.core.async.muxch_STAR_.call(null,inst_26678);
var inst_26680 = cljs.core.async.close_BANG_.call(null,inst_26679);
var inst_26681 = (inst_26673 + (1));
var tmp26759 = inst_26671;
var tmp26760 = inst_26670;
var tmp26761 = inst_26672;
var inst_26670__$1 = tmp26760;
var inst_26671__$1 = tmp26759;
var inst_26672__$1 = tmp26761;
var inst_26673__$1 = inst_26681;
var state_26729__$1 = (function (){var statearr_26765 = state_26729;
(statearr_26765[(12)] = inst_26673__$1);

(statearr_26765[(13)] = inst_26671__$1);

(statearr_26765[(15)] = inst_26670__$1);

(statearr_26765[(17)] = inst_26680);

(statearr_26765[(16)] = inst_26672__$1);

return statearr_26765;
})();
var statearr_26766_26816 = state_26729__$1;
(statearr_26766_26816[(2)] = null);

(statearr_26766_26816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (18))){
var inst_26699 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26767_26817 = state_26729__$1;
(statearr_26767_26817[(2)] = inst_26699);

(statearr_26767_26817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (8))){
var inst_26673 = (state_26729[(12)]);
var inst_26672 = (state_26729[(16)]);
var inst_26675 = (inst_26673 < inst_26672);
var inst_26676 = inst_26675;
var state_26729__$1 = state_26729;
if(cljs.core.truth_(inst_26676)){
var statearr_26768_26818 = state_26729__$1;
(statearr_26768_26818[(1)] = (10));

} else {
var statearr_26769_26819 = state_26729__$1;
(statearr_26769_26819[(1)] = (11));

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
});})(c__24326__auto___26784,mults,ensure_mult,p))
;
return ((function (switch__24055__auto__,c__24326__auto___26784,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_26729){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_26729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__24059__auto__ = e26774;
var statearr_26775_26820 = state_26729;
(statearr_26775_26820[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26821 = state_26729;
state_26729 = G__26821;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___26784,mults,ensure_mult,p))
})();
var state__24328__auto__ = (function (){var statearr_26776 = f__24327__auto__.call(null);
(statearr_26776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___26784);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___26784,mults,ensure_mult,p))
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
var args26822 = [];
var len__21530__auto___26833 = arguments.length;
var i__21531__auto___26834 = (0);
while(true){
if((i__21531__auto___26834 < len__21530__auto___26833)){
args26822.push((arguments[i__21531__auto___26834]));

var G__26835 = (i__21531__auto___26834 + (1));
i__21531__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26824 = args26822.length;
switch (G__26824) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26822.length)].join('')));

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
var args26837 = [];
var len__21530__auto___26842 = arguments.length;
var i__21531__auto___26843 = (0);
while(true){
if((i__21531__auto___26843 < len__21530__auto___26842)){
args26837.push((arguments[i__21531__auto___26843]));

var G__26844 = (i__21531__auto___26843 + (1));
i__21531__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var G__26839 = args26837.length;
switch (G__26839) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26837.length)].join('')));

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
var args26852 = [];
var len__21530__auto___26926 = arguments.length;
var i__21531__auto___26927 = (0);
while(true){
if((i__21531__auto___26927 < len__21530__auto___26926)){
args26852.push((arguments[i__21531__auto___26927]));

var G__26928 = (i__21531__auto___26927 + (1));
i__21531__auto___26927 = G__26928;
continue;
} else {
}
break;
}

var G__26854 = args26852.length;
switch (G__26854) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26852.length)].join('')));

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
var c__24326__auto___26938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26893){
var state_val_26894 = (state_26893[(1)]);
if((state_val_26894 === (7))){
var state_26893__$1 = state_26893;
var statearr_26895_26939 = state_26893__$1;
(statearr_26895_26939[(2)] = null);

(statearr_26895_26939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (1))){
var state_26893__$1 = state_26893;
var statearr_26896_26940 = state_26893__$1;
(statearr_26896_26940[(2)] = null);

(statearr_26896_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (4))){
var inst_26857 = (state_26893[(7)]);
var inst_26859 = (inst_26857 < cnt);
var state_26893__$1 = state_26893;
if(cljs.core.truth_(inst_26859)){
var statearr_26897_26941 = state_26893__$1;
(statearr_26897_26941[(1)] = (6));

} else {
var statearr_26898_26942 = state_26893__$1;
(statearr_26898_26942[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (15))){
var inst_26889 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26899_26943 = state_26893__$1;
(statearr_26899_26943[(2)] = inst_26889);

(statearr_26899_26943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (13))){
var inst_26882 = cljs.core.async.close_BANG_.call(null,out);
var state_26893__$1 = state_26893;
var statearr_26900_26944 = state_26893__$1;
(statearr_26900_26944[(2)] = inst_26882);

(statearr_26900_26944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (6))){
var state_26893__$1 = state_26893;
var statearr_26901_26945 = state_26893__$1;
(statearr_26901_26945[(2)] = null);

(statearr_26901_26945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (3))){
var inst_26891 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26893__$1,inst_26891);
} else {
if((state_val_26894 === (12))){
var inst_26879 = (state_26893[(8)]);
var inst_26879__$1 = (state_26893[(2)]);
var inst_26880 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26879__$1);
var state_26893__$1 = (function (){var statearr_26902 = state_26893;
(statearr_26902[(8)] = inst_26879__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26880)){
var statearr_26903_26946 = state_26893__$1;
(statearr_26903_26946[(1)] = (13));

} else {
var statearr_26904_26947 = state_26893__$1;
(statearr_26904_26947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (2))){
var inst_26856 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26857 = (0);
var state_26893__$1 = (function (){var statearr_26905 = state_26893;
(statearr_26905[(9)] = inst_26856);

(statearr_26905[(7)] = inst_26857);

return statearr_26905;
})();
var statearr_26906_26948 = state_26893__$1;
(statearr_26906_26948[(2)] = null);

(statearr_26906_26948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (11))){
var inst_26857 = (state_26893[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26893,(10),Object,null,(9));
var inst_26866 = chs__$1.call(null,inst_26857);
var inst_26867 = done.call(null,inst_26857);
var inst_26868 = cljs.core.async.take_BANG_.call(null,inst_26866,inst_26867);
var state_26893__$1 = state_26893;
var statearr_26907_26949 = state_26893__$1;
(statearr_26907_26949[(2)] = inst_26868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (9))){
var inst_26857 = (state_26893[(7)]);
var inst_26870 = (state_26893[(2)]);
var inst_26871 = (inst_26857 + (1));
var inst_26857__$1 = inst_26871;
var state_26893__$1 = (function (){var statearr_26908 = state_26893;
(statearr_26908[(7)] = inst_26857__$1);

(statearr_26908[(10)] = inst_26870);

return statearr_26908;
})();
var statearr_26909_26950 = state_26893__$1;
(statearr_26909_26950[(2)] = null);

(statearr_26909_26950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (5))){
var inst_26877 = (state_26893[(2)]);
var state_26893__$1 = (function (){var statearr_26910 = state_26893;
(statearr_26910[(11)] = inst_26877);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26893__$1,(12),dchan);
} else {
if((state_val_26894 === (14))){
var inst_26879 = (state_26893[(8)]);
var inst_26884 = cljs.core.apply.call(null,f,inst_26879);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26893__$1,(16),out,inst_26884);
} else {
if((state_val_26894 === (16))){
var inst_26886 = (state_26893[(2)]);
var state_26893__$1 = (function (){var statearr_26911 = state_26893;
(statearr_26911[(12)] = inst_26886);

return statearr_26911;
})();
var statearr_26912_26951 = state_26893__$1;
(statearr_26912_26951[(2)] = null);

(statearr_26912_26951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (10))){
var inst_26861 = (state_26893[(2)]);
var inst_26862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26893__$1 = (function (){var statearr_26913 = state_26893;
(statearr_26913[(13)] = inst_26861);

return statearr_26913;
})();
var statearr_26914_26952 = state_26893__$1;
(statearr_26914_26952[(2)] = inst_26862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (8))){
var inst_26875 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26916_26953 = state_26893__$1;
(statearr_26916_26953[(2)] = inst_26875);

(statearr_26916_26953[(1)] = (5));


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
});})(c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24055__auto__,c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_26920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26920[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_26920[(1)] = (1));

return statearr_26920;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_26893){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_26893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e26921){if((e26921 instanceof Object)){
var ex__24059__auto__ = e26921;
var statearr_26922_26957 = state_26893;
(statearr_26922_26957[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26958 = state_26893;
state_26893 = G__26958;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_26893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_26893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24328__auto__ = (function (){var statearr_26924 = f__24327__auto__.call(null);
(statearr_26924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___26938);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___26938,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26970 = [];
var len__21530__auto___27043 = arguments.length;
var i__21531__auto___27044 = (0);
while(true){
if((i__21531__auto___27044 < len__21530__auto___27043)){
args26970.push((arguments[i__21531__auto___27044]));

var G__27045 = (i__21531__auto___27044 + (1));
i__21531__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var G__26978 = args26970.length;
switch (G__26978) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26970.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___27047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___27047,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___27047,out){
return (function (state_27019){
var state_val_27020 = (state_27019[(1)]);
if((state_val_27020 === (7))){
var inst_26991 = (state_27019[(7)]);
var inst_26992 = (state_27019[(8)]);
var inst_26991__$1 = (state_27019[(2)]);
var inst_26992__$1 = cljs.core.nth.call(null,inst_26991__$1,(0),null);
var inst_26993 = cljs.core.nth.call(null,inst_26991__$1,(1),null);
var inst_26996 = (inst_26992__$1 == null);
var state_27019__$1 = (function (){var statearr_27021 = state_27019;
(statearr_27021[(7)] = inst_26991__$1);

(statearr_27021[(8)] = inst_26992__$1);

(statearr_27021[(9)] = inst_26993);

return statearr_27021;
})();
if(cljs.core.truth_(inst_26996)){
var statearr_27022_27048 = state_27019__$1;
(statearr_27022_27048[(1)] = (8));

} else {
var statearr_27023_27049 = state_27019__$1;
(statearr_27023_27049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (1))){
var inst_26981 = cljs.core.vec.call(null,chs);
var inst_26982 = inst_26981;
var state_27019__$1 = (function (){var statearr_27024 = state_27019;
(statearr_27024[(10)] = inst_26982);

return statearr_27024;
})();
var statearr_27025_27050 = state_27019__$1;
(statearr_27025_27050[(2)] = null);

(statearr_27025_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (4))){
var inst_26982 = (state_27019[(10)]);
var state_27019__$1 = state_27019;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27019__$1,(7),inst_26982);
} else {
if((state_val_27020 === (6))){
var inst_27015 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27026_27051 = state_27019__$1;
(statearr_27026_27051[(2)] = inst_27015);

(statearr_27026_27051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (3))){
var inst_27017 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27019__$1,inst_27017);
} else {
if((state_val_27020 === (2))){
var inst_26982 = (state_27019[(10)]);
var inst_26984 = cljs.core.count.call(null,inst_26982);
var inst_26985 = (inst_26984 > (0));
var state_27019__$1 = state_27019;
if(cljs.core.truth_(inst_26985)){
var statearr_27028_27052 = state_27019__$1;
(statearr_27028_27052[(1)] = (4));

} else {
var statearr_27029_27053 = state_27019__$1;
(statearr_27029_27053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (11))){
var inst_26982 = (state_27019[(10)]);
var inst_27008 = (state_27019[(2)]);
var tmp27027 = inst_26982;
var inst_26982__$1 = tmp27027;
var state_27019__$1 = (function (){var statearr_27030 = state_27019;
(statearr_27030[(10)] = inst_26982__$1);

(statearr_27030[(11)] = inst_27008);

return statearr_27030;
})();
var statearr_27031_27054 = state_27019__$1;
(statearr_27031_27054[(2)] = null);

(statearr_27031_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (9))){
var inst_26992 = (state_27019[(8)]);
var state_27019__$1 = state_27019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27019__$1,(11),out,inst_26992);
} else {
if((state_val_27020 === (5))){
var inst_27013 = cljs.core.async.close_BANG_.call(null,out);
var state_27019__$1 = state_27019;
var statearr_27032_27055 = state_27019__$1;
(statearr_27032_27055[(2)] = inst_27013);

(statearr_27032_27055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (10))){
var inst_27011 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27033_27056 = state_27019__$1;
(statearr_27033_27056[(2)] = inst_27011);

(statearr_27033_27056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (8))){
var inst_26991 = (state_27019[(7)]);
var inst_26982 = (state_27019[(10)]);
var inst_26992 = (state_27019[(8)]);
var inst_26993 = (state_27019[(9)]);
var inst_27003 = (function (){var cs = inst_26982;
var vec__26987 = inst_26991;
var v = inst_26992;
var c = inst_26993;
return ((function (cs,vec__26987,v,c,inst_26991,inst_26982,inst_26992,inst_26993,state_val_27020,c__24326__auto___27047,out){
return (function (p1__26963_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26963_SHARP_);
});
;})(cs,vec__26987,v,c,inst_26991,inst_26982,inst_26992,inst_26993,state_val_27020,c__24326__auto___27047,out))
})();
var inst_27004 = cljs.core.filterv.call(null,inst_27003,inst_26982);
var inst_26982__$1 = inst_27004;
var state_27019__$1 = (function (){var statearr_27034 = state_27019;
(statearr_27034[(10)] = inst_26982__$1);

return statearr_27034;
})();
var statearr_27035_27060 = state_27019__$1;
(statearr_27035_27060[(2)] = null);

(statearr_27035_27060[(1)] = (2));


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
});})(c__24326__auto___27047,out))
;
return ((function (switch__24055__auto__,c__24326__auto___27047,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_27039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27039[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_27039[(1)] = (1));

return statearr_27039;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_27019){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27040){if((e27040 instanceof Object)){
var ex__24059__auto__ = e27040;
var statearr_27041_27065 = state_27019;
(statearr_27041_27065[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27066 = state_27019;
state_27019 = G__27066;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_27019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_27019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___27047,out))
})();
var state__24328__auto__ = (function (){var statearr_27042 = f__24327__auto__.call(null);
(statearr_27042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___27047);

return statearr_27042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___27047,out))
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
var args27067 = [];
var len__21530__auto___27124 = arguments.length;
var i__21531__auto___27125 = (0);
while(true){
if((i__21531__auto___27125 < len__21530__auto___27124)){
args27067.push((arguments[i__21531__auto___27125]));

var G__27126 = (i__21531__auto___27125 + (1));
i__21531__auto___27125 = G__27126;
continue;
} else {
}
break;
}

var G__27071 = args27067.length;
switch (G__27071) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27067.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___27128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___27128,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___27128,out){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var inst_27077 = (state_27095[(7)]);
var inst_27077__$1 = (state_27095[(2)]);
var inst_27078 = (inst_27077__$1 == null);
var inst_27079 = cljs.core.not.call(null,inst_27078);
var state_27095__$1 = (function (){var statearr_27097 = state_27095;
(statearr_27097[(7)] = inst_27077__$1);

return statearr_27097;
})();
if(inst_27079){
var statearr_27098_27129 = state_27095__$1;
(statearr_27098_27129[(1)] = (8));

} else {
var statearr_27099_27130 = state_27095__$1;
(statearr_27099_27130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (1))){
var inst_27072 = (0);
var state_27095__$1 = (function (){var statearr_27100 = state_27095;
(statearr_27100[(8)] = inst_27072);

return statearr_27100;
})();
var statearr_27101_27131 = state_27095__$1;
(statearr_27101_27131[(2)] = null);

(statearr_27101_27131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(7),ch);
} else {
if((state_val_27096 === (6))){
var inst_27090 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27102_27137 = state_27095__$1;
(statearr_27102_27137[(2)] = inst_27090);

(statearr_27102_27137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (3))){
var inst_27092 = (state_27095[(2)]);
var inst_27093 = cljs.core.async.close_BANG_.call(null,out);
var state_27095__$1 = (function (){var statearr_27103 = state_27095;
(statearr_27103[(9)] = inst_27092);

return statearr_27103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (2))){
var inst_27072 = (state_27095[(8)]);
var inst_27074 = (inst_27072 < n);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27074)){
var statearr_27104_27138 = state_27095__$1;
(statearr_27104_27138[(1)] = (4));

} else {
var statearr_27105_27139 = state_27095__$1;
(statearr_27105_27139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (11))){
var inst_27072 = (state_27095[(8)]);
var inst_27082 = (state_27095[(2)]);
var inst_27083 = (inst_27072 + (1));
var inst_27072__$1 = inst_27083;
var state_27095__$1 = (function (){var statearr_27106 = state_27095;
(statearr_27106[(10)] = inst_27082);

(statearr_27106[(8)] = inst_27072__$1);

return statearr_27106;
})();
var statearr_27107_27144 = state_27095__$1;
(statearr_27107_27144[(2)] = null);

(statearr_27107_27144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var state_27095__$1 = state_27095;
var statearr_27108_27152 = state_27095__$1;
(statearr_27108_27152[(2)] = null);

(statearr_27108_27152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (5))){
var state_27095__$1 = state_27095;
var statearr_27109_27156 = state_27095__$1;
(statearr_27109_27156[(2)] = null);

(statearr_27109_27156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (10))){
var inst_27087 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27110_27160 = state_27095__$1;
(statearr_27110_27160[(2)] = inst_27087);

(statearr_27110_27160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27077 = (state_27095[(7)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(11),out,inst_27077);
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
});})(c__24326__auto___27128,out))
;
return ((function (switch__24055__auto__,c__24326__auto___27128,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27117[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_27117[(1)] = (1));

return statearr_27117;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_27095){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object)){
var ex__24059__auto__ = e27118;
var statearr_27119_27161 = state_27095;
(statearr_27119_27161[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27162 = state_27095;
state_27095 = G__27162;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___27128,out))
})();
var state__24328__auto__ = (function (){var statearr_27123 = f__24327__auto__.call(null);
(statearr_27123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___27128);

return statearr_27123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___27128,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27176 = (function (map_LT_,f,ch,meta27177){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27177 = meta27177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27178,meta27177__$1){
var self__ = this;
var _27178__$1 = this;
return (new cljs.core.async.t_cljs$core$async27176(self__.map_LT_,self__.f,self__.ch,meta27177__$1));
});

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27178){
var self__ = this;
var _27178__$1 = this;
return self__.meta27177;
});

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27183 = (function (map_LT_,f,ch,meta27177,_,fn1,meta27184){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27177 = meta27177;
this._ = _;
this.fn1 = fn1;
this.meta27184 = meta27184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27185,meta27184__$1){
var self__ = this;
var _27185__$1 = this;
return (new cljs.core.async.t_cljs$core$async27183(self__.map_LT_,self__.f,self__.ch,self__.meta27177,self__._,self__.fn1,meta27184__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27185){
var self__ = this;
var _27185__$1 = this;
return self__.meta27184;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27163_SHARP_){
return f1.call(null,(((p1__27163_SHARP_ == null))?null:self__.f.call(null,p1__27163_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27177","meta27177",2066105173,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27176","cljs.core.async/t_cljs$core$async27176",1053549532,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27184","meta27184",-438409465,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27183";

cljs.core.async.t_cljs$core$async27183.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27183");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27183 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27183(map_LT___$1,f__$1,ch__$1,meta27177__$1,___$2,fn1__$1,meta27184){
return (new cljs.core.async.t_cljs$core$async27183(map_LT___$1,f__$1,ch__$1,meta27177__$1,___$2,fn1__$1,meta27184));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27183(self__.map_LT_,self__.f,self__.ch,self__.meta27177,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27177","meta27177",2066105173,null)], null);
});

cljs.core.async.t_cljs$core$async27176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27176";

cljs.core.async.t_cljs$core$async27176.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27176");
});

cljs.core.async.__GT_t_cljs$core$async27176 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27176(map_LT___$1,f__$1,ch__$1,meta27177){
return (new cljs.core.async.t_cljs$core$async27176(map_LT___$1,f__$1,ch__$1,meta27177));
});

}

return (new cljs.core.async.t_cljs$core$async27176(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27204 = (function (map_GT_,f,ch,meta27205){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27205 = meta27205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27206,meta27205__$1){
var self__ = this;
var _27206__$1 = this;
return (new cljs.core.async.t_cljs$core$async27204(self__.map_GT_,self__.f,self__.ch,meta27205__$1));
});

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27206){
var self__ = this;
var _27206__$1 = this;
return self__.meta27205;
});

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27205","meta27205",1193312913,null)], null);
});

cljs.core.async.t_cljs$core$async27204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27204";

cljs.core.async.t_cljs$core$async27204.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27204");
});

cljs.core.async.__GT_t_cljs$core$async27204 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27204(map_GT___$1,f__$1,ch__$1,meta27205){
return (new cljs.core.async.t_cljs$core$async27204(map_GT___$1,f__$1,ch__$1,meta27205));
});

}

return (new cljs.core.async.t_cljs$core$async27204(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27224 = (function (filter_GT_,p,ch,meta27225){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27225 = meta27225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27226,meta27225__$1){
var self__ = this;
var _27226__$1 = this;
return (new cljs.core.async.t_cljs$core$async27224(self__.filter_GT_,self__.p,self__.ch,meta27225__$1));
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27226){
var self__ = this;
var _27226__$1 = this;
return self__.meta27225;
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27225","meta27225",1983261716,null)], null);
});

cljs.core.async.t_cljs$core$async27224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27224";

cljs.core.async.t_cljs$core$async27224.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27224");
});

cljs.core.async.__GT_t_cljs$core$async27224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27224(filter_GT___$1,p__$1,ch__$1,meta27225){
return (new cljs.core.async.t_cljs$core$async27224(filter_GT___$1,p__$1,ch__$1,meta27225));
});

}

return (new cljs.core.async.t_cljs$core$async27224(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27240 = [];
var len__21530__auto___27292 = arguments.length;
var i__21531__auto___27293 = (0);
while(true){
if((i__21531__auto___27293 < len__21530__auto___27292)){
args27240.push((arguments[i__21531__auto___27293]));

var G__27294 = (i__21531__auto___27293 + (1));
i__21531__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var G__27246 = args27240.length;
switch (G__27246) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27240.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___27296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___27296,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___27296,out){
return (function (state_27267){
var state_val_27268 = (state_27267[(1)]);
if((state_val_27268 === (7))){
var inst_27263 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27269_27297 = state_27267__$1;
(statearr_27269_27297[(2)] = inst_27263);

(statearr_27269_27297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (1))){
var state_27267__$1 = state_27267;
var statearr_27270_27298 = state_27267__$1;
(statearr_27270_27298[(2)] = null);

(statearr_27270_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (4))){
var inst_27249 = (state_27267[(7)]);
var inst_27249__$1 = (state_27267[(2)]);
var inst_27250 = (inst_27249__$1 == null);
var state_27267__$1 = (function (){var statearr_27271 = state_27267;
(statearr_27271[(7)] = inst_27249__$1);

return statearr_27271;
})();
if(cljs.core.truth_(inst_27250)){
var statearr_27272_27307 = state_27267__$1;
(statearr_27272_27307[(1)] = (5));

} else {
var statearr_27273_27308 = state_27267__$1;
(statearr_27273_27308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (6))){
var inst_27249 = (state_27267[(7)]);
var inst_27254 = p.call(null,inst_27249);
var state_27267__$1 = state_27267;
if(cljs.core.truth_(inst_27254)){
var statearr_27278_27309 = state_27267__$1;
(statearr_27278_27309[(1)] = (8));

} else {
var statearr_27279_27310 = state_27267__$1;
(statearr_27279_27310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (3))){
var inst_27265 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27267__$1,inst_27265);
} else {
if((state_val_27268 === (2))){
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27267__$1,(4),ch);
} else {
if((state_val_27268 === (11))){
var inst_27257 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27280_27319 = state_27267__$1;
(statearr_27280_27319[(2)] = inst_27257);

(statearr_27280_27319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (9))){
var state_27267__$1 = state_27267;
var statearr_27281_27320 = state_27267__$1;
(statearr_27281_27320[(2)] = null);

(statearr_27281_27320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (5))){
var inst_27252 = cljs.core.async.close_BANG_.call(null,out);
var state_27267__$1 = state_27267;
var statearr_27282_27321 = state_27267__$1;
(statearr_27282_27321[(2)] = inst_27252);

(statearr_27282_27321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (10))){
var inst_27260 = (state_27267[(2)]);
var state_27267__$1 = (function (){var statearr_27283 = state_27267;
(statearr_27283[(8)] = inst_27260);

return statearr_27283;
})();
var statearr_27284_27330 = state_27267__$1;
(statearr_27284_27330[(2)] = null);

(statearr_27284_27330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (8))){
var inst_27249 = (state_27267[(7)]);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27267__$1,(11),out,inst_27249);
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
});})(c__24326__auto___27296,out))
;
return ((function (switch__24055__auto__,c__24326__auto___27296,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_27288 = [null,null,null,null,null,null,null,null,null];
(statearr_27288[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_27288[(1)] = (1));

return statearr_27288;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_27267){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27289){if((e27289 instanceof Object)){
var ex__24059__auto__ = e27289;
var statearr_27290_27339 = state_27267;
(statearr_27290_27339[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27348 = state_27267;
state_27267 = G__27348;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_27267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_27267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___27296,out))
})();
var state__24328__auto__ = (function (){var statearr_27291 = f__24327__auto__.call(null);
(statearr_27291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___27296);

return statearr_27291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___27296,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27349 = [];
var len__21530__auto___27366 = arguments.length;
var i__21531__auto___27367 = (0);
while(true){
if((i__21531__auto___27367 < len__21530__auto___27366)){
args27349.push((arguments[i__21531__auto___27367]));

var G__27368 = (i__21531__auto___27367 + (1));
i__21531__auto___27367 = G__27368;
continue;
} else {
}
break;
}

var G__27358 = args27349.length;
switch (G__27358) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27349.length)].join('')));

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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_27588){
var state_val_27589 = (state_27588[(1)]);
if((state_val_27589 === (7))){
var inst_27580 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27593_27646 = state_27588__$1;
(statearr_27593_27646[(2)] = inst_27580);

(statearr_27593_27646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (20))){
var inst_27549 = (state_27588[(7)]);
var inst_27560 = (state_27588[(2)]);
var inst_27562 = cljs.core.next.call(null,inst_27549);
var inst_27535 = inst_27562;
var inst_27536 = null;
var inst_27537 = (0);
var inst_27538 = (0);
var state_27588__$1 = (function (){var statearr_27594 = state_27588;
(statearr_27594[(8)] = inst_27537);

(statearr_27594[(9)] = inst_27560);

(statearr_27594[(10)] = inst_27535);

(statearr_27594[(11)] = inst_27538);

(statearr_27594[(12)] = inst_27536);

return statearr_27594;
})();
var statearr_27595_27655 = state_27588__$1;
(statearr_27595_27655[(2)] = null);

(statearr_27595_27655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (1))){
var state_27588__$1 = state_27588;
var statearr_27596_27656 = state_27588__$1;
(statearr_27596_27656[(2)] = null);

(statearr_27596_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (4))){
var inst_27523 = (state_27588[(13)]);
var inst_27523__$1 = (state_27588[(2)]);
var inst_27524 = (inst_27523__$1 == null);
var state_27588__$1 = (function (){var statearr_27597 = state_27588;
(statearr_27597[(13)] = inst_27523__$1);

return statearr_27597;
})();
if(cljs.core.truth_(inst_27524)){
var statearr_27598_27657 = state_27588__$1;
(statearr_27598_27657[(1)] = (5));

} else {
var statearr_27599_27658 = state_27588__$1;
(statearr_27599_27658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (15))){
var state_27588__$1 = state_27588;
var statearr_27607_27659 = state_27588__$1;
(statearr_27607_27659[(2)] = null);

(statearr_27607_27659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (21))){
var state_27588__$1 = state_27588;
var statearr_27608_27660 = state_27588__$1;
(statearr_27608_27660[(2)] = null);

(statearr_27608_27660[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (13))){
var inst_27537 = (state_27588[(8)]);
var inst_27535 = (state_27588[(10)]);
var inst_27538 = (state_27588[(11)]);
var inst_27536 = (state_27588[(12)]);
var inst_27545 = (state_27588[(2)]);
var inst_27546 = (inst_27538 + (1));
var tmp27600 = inst_27537;
var tmp27601 = inst_27535;
var tmp27602 = inst_27536;
var inst_27535__$1 = tmp27601;
var inst_27536__$1 = tmp27602;
var inst_27537__$1 = tmp27600;
var inst_27538__$1 = inst_27546;
var state_27588__$1 = (function (){var statearr_27609 = state_27588;
(statearr_27609[(8)] = inst_27537__$1);

(statearr_27609[(10)] = inst_27535__$1);

(statearr_27609[(11)] = inst_27538__$1);

(statearr_27609[(14)] = inst_27545);

(statearr_27609[(12)] = inst_27536__$1);

return statearr_27609;
})();
var statearr_27610_27661 = state_27588__$1;
(statearr_27610_27661[(2)] = null);

(statearr_27610_27661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (22))){
var state_27588__$1 = state_27588;
var statearr_27614_27662 = state_27588__$1;
(statearr_27614_27662[(2)] = null);

(statearr_27614_27662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (6))){
var inst_27523 = (state_27588[(13)]);
var inst_27533 = f.call(null,inst_27523);
var inst_27534 = cljs.core.seq.call(null,inst_27533);
var inst_27535 = inst_27534;
var inst_27536 = null;
var inst_27537 = (0);
var inst_27538 = (0);
var state_27588__$1 = (function (){var statearr_27618 = state_27588;
(statearr_27618[(8)] = inst_27537);

(statearr_27618[(10)] = inst_27535);

(statearr_27618[(11)] = inst_27538);

(statearr_27618[(12)] = inst_27536);

return statearr_27618;
})();
var statearr_27619_27663 = state_27588__$1;
(statearr_27619_27663[(2)] = null);

(statearr_27619_27663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (17))){
var inst_27549 = (state_27588[(7)]);
var inst_27553 = cljs.core.chunk_first.call(null,inst_27549);
var inst_27554 = cljs.core.chunk_rest.call(null,inst_27549);
var inst_27555 = cljs.core.count.call(null,inst_27553);
var inst_27535 = inst_27554;
var inst_27536 = inst_27553;
var inst_27537 = inst_27555;
var inst_27538 = (0);
var state_27588__$1 = (function (){var statearr_27620 = state_27588;
(statearr_27620[(8)] = inst_27537);

(statearr_27620[(10)] = inst_27535);

(statearr_27620[(11)] = inst_27538);

(statearr_27620[(12)] = inst_27536);

return statearr_27620;
})();
var statearr_27621_27664 = state_27588__$1;
(statearr_27621_27664[(2)] = null);

(statearr_27621_27664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (3))){
var inst_27582 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27582);
} else {
if((state_val_27589 === (12))){
var inst_27570 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27624_27665 = state_27588__$1;
(statearr_27624_27665[(2)] = inst_27570);

(statearr_27624_27665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (2))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(4),in$);
} else {
if((state_val_27589 === (23))){
var inst_27578 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27625_27666 = state_27588__$1;
(statearr_27625_27666[(2)] = inst_27578);

(statearr_27625_27666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (19))){
var inst_27565 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27626_27667 = state_27588__$1;
(statearr_27626_27667[(2)] = inst_27565);

(statearr_27626_27667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (11))){
var inst_27549 = (state_27588[(7)]);
var inst_27535 = (state_27588[(10)]);
var inst_27549__$1 = cljs.core.seq.call(null,inst_27535);
var state_27588__$1 = (function (){var statearr_27627 = state_27588;
(statearr_27627[(7)] = inst_27549__$1);

return statearr_27627;
})();
if(inst_27549__$1){
var statearr_27628_27668 = state_27588__$1;
(statearr_27628_27668[(1)] = (14));

} else {
var statearr_27629_27669 = state_27588__$1;
(statearr_27629_27669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (9))){
var inst_27572 = (state_27588[(2)]);
var inst_27573 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27588__$1 = (function (){var statearr_27630 = state_27588;
(statearr_27630[(15)] = inst_27572);

return statearr_27630;
})();
if(cljs.core.truth_(inst_27573)){
var statearr_27631_27671 = state_27588__$1;
(statearr_27631_27671[(1)] = (21));

} else {
var statearr_27632_27672 = state_27588__$1;
(statearr_27632_27672[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (5))){
var inst_27527 = cljs.core.async.close_BANG_.call(null,out);
var state_27588__$1 = state_27588;
var statearr_27633_27677 = state_27588__$1;
(statearr_27633_27677[(2)] = inst_27527);

(statearr_27633_27677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (14))){
var inst_27549 = (state_27588[(7)]);
var inst_27551 = cljs.core.chunked_seq_QMARK_.call(null,inst_27549);
var state_27588__$1 = state_27588;
if(inst_27551){
var statearr_27634_27678 = state_27588__$1;
(statearr_27634_27678[(1)] = (17));

} else {
var statearr_27635_27679 = state_27588__$1;
(statearr_27635_27679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (16))){
var inst_27568 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27636_27680 = state_27588__$1;
(statearr_27636_27680[(2)] = inst_27568);

(statearr_27636_27680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (10))){
var inst_27538 = (state_27588[(11)]);
var inst_27536 = (state_27588[(12)]);
var inst_27543 = cljs.core._nth.call(null,inst_27536,inst_27538);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(13),out,inst_27543);
} else {
if((state_val_27589 === (18))){
var inst_27549 = (state_27588[(7)]);
var inst_27558 = cljs.core.first.call(null,inst_27549);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(20),out,inst_27558);
} else {
if((state_val_27589 === (8))){
var inst_27537 = (state_27588[(8)]);
var inst_27538 = (state_27588[(11)]);
var inst_27540 = (inst_27538 < inst_27537);
var inst_27541 = inst_27540;
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27541)){
var statearr_27637_27685 = state_27588__$1;
(statearr_27637_27685[(1)] = (10));

} else {
var statearr_27638_27686 = state_27588__$1;
(statearr_27638_27686[(1)] = (11));

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
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____0 = (function (){
var statearr_27642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__);

(statearr_27642[(1)] = (1));

return statearr_27642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____1 = (function (state_27588){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27643){if((e27643 instanceof Object)){
var ex__24059__auto__ = e27643;
var statearr_27644_27687 = state_27588;
(statearr_27644_27687[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27688 = state_27588;
state_27588 = G__27688;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24056__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_27645 = f__24327__auto__.call(null);
(statearr_27645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_27645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27689 = [];
var len__21530__auto___27692 = arguments.length;
var i__21531__auto___27693 = (0);
while(true){
if((i__21531__auto___27693 < len__21530__auto___27692)){
args27689.push((arguments[i__21531__auto___27693]));

var G__27697 = (i__21531__auto___27693 + (1));
i__21531__auto___27693 = G__27697;
continue;
} else {
}
break;
}

var G__27691 = args27689.length;
switch (G__27691) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27689.length)].join('')));

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
var args27702 = [];
var len__21530__auto___27716 = arguments.length;
var i__21531__auto___27717 = (0);
while(true){
if((i__21531__auto___27717 < len__21530__auto___27716)){
args27702.push((arguments[i__21531__auto___27717]));

var G__27718 = (i__21531__auto___27717 + (1));
i__21531__auto___27717 = G__27718;
continue;
} else {
}
break;
}

var G__27710 = args27702.length;
switch (G__27710) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27702.length)].join('')));

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
var args27723 = [];
var len__21530__auto___27774 = arguments.length;
var i__21531__auto___27775 = (0);
while(true){
if((i__21531__auto___27775 < len__21530__auto___27774)){
args27723.push((arguments[i__21531__auto___27775]));

var G__27776 = (i__21531__auto___27775 + (1));
i__21531__auto___27775 = G__27776;
continue;
} else {
}
break;
}

var G__27725 = args27723.length;
switch (G__27725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27723.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___27784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___27784,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___27784,out){
return (function (state_27749){
var state_val_27750 = (state_27749[(1)]);
if((state_val_27750 === (7))){
var inst_27744 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27751_27788 = state_27749__$1;
(statearr_27751_27788[(2)] = inst_27744);

(statearr_27751_27788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (1))){
var inst_27726 = null;
var state_27749__$1 = (function (){var statearr_27752 = state_27749;
(statearr_27752[(7)] = inst_27726);

return statearr_27752;
})();
var statearr_27753_27792 = state_27749__$1;
(statearr_27753_27792[(2)] = null);

(statearr_27753_27792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (4))){
var inst_27729 = (state_27749[(8)]);
var inst_27729__$1 = (state_27749[(2)]);
var inst_27730 = (inst_27729__$1 == null);
var inst_27731 = cljs.core.not.call(null,inst_27730);
var state_27749__$1 = (function (){var statearr_27754 = state_27749;
(statearr_27754[(8)] = inst_27729__$1);

return statearr_27754;
})();
if(inst_27731){
var statearr_27755_27801 = state_27749__$1;
(statearr_27755_27801[(1)] = (5));

} else {
var statearr_27756_27802 = state_27749__$1;
(statearr_27756_27802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (6))){
var state_27749__$1 = state_27749;
var statearr_27757_27807 = state_27749__$1;
(statearr_27757_27807[(2)] = null);

(statearr_27757_27807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (3))){
var inst_27746 = (state_27749[(2)]);
var inst_27747 = cljs.core.async.close_BANG_.call(null,out);
var state_27749__$1 = (function (){var statearr_27758 = state_27749;
(statearr_27758[(9)] = inst_27746);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27749__$1,inst_27747);
} else {
if((state_val_27750 === (2))){
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(4),ch);
} else {
if((state_val_27750 === (11))){
var inst_27729 = (state_27749[(8)]);
var inst_27738 = (state_27749[(2)]);
var inst_27726 = inst_27729;
var state_27749__$1 = (function (){var statearr_27759 = state_27749;
(statearr_27759[(10)] = inst_27738);

(statearr_27759[(7)] = inst_27726);

return statearr_27759;
})();
var statearr_27760_27816 = state_27749__$1;
(statearr_27760_27816[(2)] = null);

(statearr_27760_27816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (9))){
var inst_27729 = (state_27749[(8)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27749__$1,(11),out,inst_27729);
} else {
if((state_val_27750 === (5))){
var inst_27726 = (state_27749[(7)]);
var inst_27729 = (state_27749[(8)]);
var inst_27733 = cljs.core._EQ_.call(null,inst_27729,inst_27726);
var state_27749__$1 = state_27749;
if(inst_27733){
var statearr_27762_27826 = state_27749__$1;
(statearr_27762_27826[(1)] = (8));

} else {
var statearr_27763_27827 = state_27749__$1;
(statearr_27763_27827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (10))){
var inst_27741 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27764_27828 = state_27749__$1;
(statearr_27764_27828[(2)] = inst_27741);

(statearr_27764_27828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (8))){
var inst_27726 = (state_27749[(7)]);
var tmp27761 = inst_27726;
var inst_27726__$1 = tmp27761;
var state_27749__$1 = (function (){var statearr_27765 = state_27749;
(statearr_27765[(7)] = inst_27726__$1);

return statearr_27765;
})();
var statearr_27766_27829 = state_27749__$1;
(statearr_27766_27829[(2)] = null);

(statearr_27766_27829[(1)] = (2));


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
});})(c__24326__auto___27784,out))
;
return ((function (switch__24055__auto__,c__24326__auto___27784,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_27770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27770[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_27770[(1)] = (1));

return statearr_27770;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_27749){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27771){if((e27771 instanceof Object)){
var ex__24059__auto__ = e27771;
var statearr_27772_27830 = state_27749;
(statearr_27772_27830[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27831 = state_27749;
state_27749 = G__27831;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_27749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_27749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___27784,out))
})();
var state__24328__auto__ = (function (){var statearr_27773 = f__24327__auto__.call(null);
(statearr_27773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___27784);

return statearr_27773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___27784,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27834 = [];
var len__21530__auto___27905 = arguments.length;
var i__21531__auto___27906 = (0);
while(true){
if((i__21531__auto___27906 < len__21530__auto___27905)){
args27834.push((arguments[i__21531__auto___27906]));

var G__27907 = (i__21531__auto___27906 + (1));
i__21531__auto___27906 = G__27907;
continue;
} else {
}
break;
}

var G__27836 = args27834.length;
switch (G__27836) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27834.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___27919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___27919,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___27919,out){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (7))){
var inst_27870 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27876_27920 = state_27874__$1;
(statearr_27876_27920[(2)] = inst_27870);

(statearr_27876_27920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (1))){
var inst_27837 = (new Array(n));
var inst_27838 = inst_27837;
var inst_27839 = (0);
var state_27874__$1 = (function (){var statearr_27877 = state_27874;
(statearr_27877[(7)] = inst_27838);

(statearr_27877[(8)] = inst_27839);

return statearr_27877;
})();
var statearr_27878_27928 = state_27874__$1;
(statearr_27878_27928[(2)] = null);

(statearr_27878_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (4))){
var inst_27842 = (state_27874[(9)]);
var inst_27842__$1 = (state_27874[(2)]);
var inst_27843 = (inst_27842__$1 == null);
var inst_27844 = cljs.core.not.call(null,inst_27843);
var state_27874__$1 = (function (){var statearr_27879 = state_27874;
(statearr_27879[(9)] = inst_27842__$1);

return statearr_27879;
})();
if(inst_27844){
var statearr_27880_27932 = state_27874__$1;
(statearr_27880_27932[(1)] = (5));

} else {
var statearr_27881_27933 = state_27874__$1;
(statearr_27881_27933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (15))){
var inst_27864 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27882_27934 = state_27874__$1;
(statearr_27882_27934[(2)] = inst_27864);

(statearr_27882_27934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (13))){
var state_27874__$1 = state_27874;
var statearr_27883_27939 = state_27874__$1;
(statearr_27883_27939[(2)] = null);

(statearr_27883_27939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (6))){
var inst_27839 = (state_27874[(8)]);
var inst_27860 = (inst_27839 > (0));
var state_27874__$1 = state_27874;
if(cljs.core.truth_(inst_27860)){
var statearr_27884_27943 = state_27874__$1;
(statearr_27884_27943[(1)] = (12));

} else {
var statearr_27885_27944 = state_27874__$1;
(statearr_27885_27944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (3))){
var inst_27872 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
if((state_val_27875 === (12))){
var inst_27838 = (state_27874[(7)]);
var inst_27862 = cljs.core.vec.call(null,inst_27838);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(15),out,inst_27862);
} else {
if((state_val_27875 === (2))){
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27874__$1,(4),ch);
} else {
if((state_val_27875 === (11))){
var inst_27854 = (state_27874[(2)]);
var inst_27855 = (new Array(n));
var inst_27838 = inst_27855;
var inst_27839 = (0);
var state_27874__$1 = (function (){var statearr_27886 = state_27874;
(statearr_27886[(7)] = inst_27838);

(statearr_27886[(10)] = inst_27854);

(statearr_27886[(8)] = inst_27839);

return statearr_27886;
})();
var statearr_27887_27959 = state_27874__$1;
(statearr_27887_27959[(2)] = null);

(statearr_27887_27959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (9))){
var inst_27838 = (state_27874[(7)]);
var inst_27852 = cljs.core.vec.call(null,inst_27838);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(11),out,inst_27852);
} else {
if((state_val_27875 === (5))){
var inst_27847 = (state_27874[(11)]);
var inst_27838 = (state_27874[(7)]);
var inst_27842 = (state_27874[(9)]);
var inst_27839 = (state_27874[(8)]);
var inst_27846 = (inst_27838[inst_27839] = inst_27842);
var inst_27847__$1 = (inst_27839 + (1));
var inst_27848 = (inst_27847__$1 < n);
var state_27874__$1 = (function (){var statearr_27888 = state_27874;
(statearr_27888[(11)] = inst_27847__$1);

(statearr_27888[(12)] = inst_27846);

return statearr_27888;
})();
if(cljs.core.truth_(inst_27848)){
var statearr_27889_27967 = state_27874__$1;
(statearr_27889_27967[(1)] = (8));

} else {
var statearr_27890_27969 = state_27874__$1;
(statearr_27890_27969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (14))){
var inst_27867 = (state_27874[(2)]);
var inst_27868 = cljs.core.async.close_BANG_.call(null,out);
var state_27874__$1 = (function (){var statearr_27892 = state_27874;
(statearr_27892[(13)] = inst_27867);

return statearr_27892;
})();
var statearr_27893_27970 = state_27874__$1;
(statearr_27893_27970[(2)] = inst_27868);

(statearr_27893_27970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (10))){
var inst_27858 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27894_27971 = state_27874__$1;
(statearr_27894_27971[(2)] = inst_27858);

(statearr_27894_27971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (8))){
var inst_27847 = (state_27874[(11)]);
var inst_27838 = (state_27874[(7)]);
var tmp27891 = inst_27838;
var inst_27838__$1 = tmp27891;
var inst_27839 = inst_27847;
var state_27874__$1 = (function (){var statearr_27895 = state_27874;
(statearr_27895[(7)] = inst_27838__$1);

(statearr_27895[(8)] = inst_27839);

return statearr_27895;
})();
var statearr_27896_27972 = state_27874__$1;
(statearr_27896_27972[(2)] = null);

(statearr_27896_27972[(1)] = (2));


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
});})(c__24326__auto___27919,out))
;
return ((function (switch__24055__auto__,c__24326__auto___27919,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_27874){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__24059__auto__ = e27901;
var statearr_27902_27973 = state_27874;
(statearr_27902_27973[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_27874;
state_27874 = G__27974;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___27919,out))
})();
var state__24328__auto__ = (function (){var statearr_27903 = f__24327__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___27919);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___27919,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27982 = [];
var len__21530__auto___28074 = arguments.length;
var i__21531__auto___28075 = (0);
while(true){
if((i__21531__auto___28075 < len__21530__auto___28074)){
args27982.push((arguments[i__21531__auto___28075]));

var G__28076 = (i__21531__auto___28075 + (1));
i__21531__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var G__27987 = args27982.length;
switch (G__27987) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27982.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24326__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___28080,out){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___28080,out){
return (function (state_28033){
var state_val_28034 = (state_28033[(1)]);
if((state_val_28034 === (7))){
var inst_28028 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
var statearr_28040_28081 = state_28033__$1;
(statearr_28040_28081[(2)] = inst_28028);

(statearr_28040_28081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (1))){
var inst_27988 = [];
var inst_27989 = inst_27988;
var inst_27990 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28033__$1 = (function (){var statearr_28041 = state_28033;
(statearr_28041[(7)] = inst_27989);

(statearr_28041[(8)] = inst_27990);

return statearr_28041;
})();
var statearr_28042_28082 = state_28033__$1;
(statearr_28042_28082[(2)] = null);

(statearr_28042_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (4))){
var inst_27993 = (state_28033[(9)]);
var inst_27993__$1 = (state_28033[(2)]);
var inst_27994 = (inst_27993__$1 == null);
var inst_27995 = cljs.core.not.call(null,inst_27994);
var state_28033__$1 = (function (){var statearr_28046 = state_28033;
(statearr_28046[(9)] = inst_27993__$1);

return statearr_28046;
})();
if(inst_27995){
var statearr_28047_28083 = state_28033__$1;
(statearr_28047_28083[(1)] = (5));

} else {
var statearr_28048_28084 = state_28033__$1;
(statearr_28048_28084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (15))){
var inst_28022 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
var statearr_28049_28085 = state_28033__$1;
(statearr_28049_28085[(2)] = inst_28022);

(statearr_28049_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (13))){
var state_28033__$1 = state_28033;
var statearr_28050_28086 = state_28033__$1;
(statearr_28050_28086[(2)] = null);

(statearr_28050_28086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (6))){
var inst_27989 = (state_28033[(7)]);
var inst_28017 = inst_27989.length;
var inst_28018 = (inst_28017 > (0));
var state_28033__$1 = state_28033;
if(cljs.core.truth_(inst_28018)){
var statearr_28051_28094 = state_28033__$1;
(statearr_28051_28094[(1)] = (12));

} else {
var statearr_28052_28095 = state_28033__$1;
(statearr_28052_28095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (3))){
var inst_28030 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28033__$1,inst_28030);
} else {
if((state_val_28034 === (12))){
var inst_27989 = (state_28033[(7)]);
var inst_28020 = cljs.core.vec.call(null,inst_27989);
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28033__$1,(15),out,inst_28020);
} else {
if((state_val_28034 === (2))){
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28033__$1,(4),ch);
} else {
if((state_val_28034 === (11))){
var inst_27997 = (state_28033[(10)]);
var inst_27993 = (state_28033[(9)]);
var inst_28007 = (state_28033[(2)]);
var inst_28011 = [];
var inst_28012 = inst_28011.push(inst_27993);
var inst_27989 = inst_28011;
var inst_27990 = inst_27997;
var state_28033__$1 = (function (){var statearr_28056 = state_28033;
(statearr_28056[(7)] = inst_27989);

(statearr_28056[(11)] = inst_28007);

(statearr_28056[(8)] = inst_27990);

(statearr_28056[(12)] = inst_28012);

return statearr_28056;
})();
var statearr_28057_28117 = state_28033__$1;
(statearr_28057_28117[(2)] = null);

(statearr_28057_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (9))){
var inst_27989 = (state_28033[(7)]);
var inst_28005 = cljs.core.vec.call(null,inst_27989);
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28033__$1,(11),out,inst_28005);
} else {
if((state_val_28034 === (5))){
var inst_27997 = (state_28033[(10)]);
var inst_27993 = (state_28033[(9)]);
var inst_27990 = (state_28033[(8)]);
var inst_27997__$1 = f.call(null,inst_27993);
var inst_27998 = cljs.core._EQ_.call(null,inst_27997__$1,inst_27990);
var inst_27999 = cljs.core.keyword_identical_QMARK_.call(null,inst_27990,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28000 = (inst_27998) || (inst_27999);
var state_28033__$1 = (function (){var statearr_28058 = state_28033;
(statearr_28058[(10)] = inst_27997__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_28000)){
var statearr_28059_28122 = state_28033__$1;
(statearr_28059_28122[(1)] = (8));

} else {
var statearr_28060_28126 = state_28033__$1;
(statearr_28060_28126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (14))){
var inst_28025 = (state_28033[(2)]);
var inst_28026 = cljs.core.async.close_BANG_.call(null,out);
var state_28033__$1 = (function (){var statearr_28062 = state_28033;
(statearr_28062[(13)] = inst_28025);

return statearr_28062;
})();
var statearr_28063_28131 = state_28033__$1;
(statearr_28063_28131[(2)] = inst_28026);

(statearr_28063_28131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (10))){
var inst_28015 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
var statearr_28064_28135 = state_28033__$1;
(statearr_28064_28135[(2)] = inst_28015);

(statearr_28064_28135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (8))){
var inst_27989 = (state_28033[(7)]);
var inst_27997 = (state_28033[(10)]);
var inst_27993 = (state_28033[(9)]);
var inst_28002 = inst_27989.push(inst_27993);
var tmp28061 = inst_27989;
var inst_27989__$1 = tmp28061;
var inst_27990 = inst_27997;
var state_28033__$1 = (function (){var statearr_28065 = state_28033;
(statearr_28065[(7)] = inst_27989__$1);

(statearr_28065[(14)] = inst_28002);

(statearr_28065[(8)] = inst_27990);

return statearr_28065;
})();
var statearr_28066_28150 = state_28033__$1;
(statearr_28066_28150[(2)] = null);

(statearr_28066_28150[(1)] = (2));


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
});})(c__24326__auto___28080,out))
;
return ((function (switch__24055__auto__,c__24326__auto___28080,out){
return (function() {
var cljs$core$async$state_machine__24056__auto__ = null;
var cljs$core$async$state_machine__24056__auto____0 = (function (){
var statearr_28070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28070[(0)] = cljs$core$async$state_machine__24056__auto__);

(statearr_28070[(1)] = (1));

return statearr_28070;
});
var cljs$core$async$state_machine__24056__auto____1 = (function (state_28033){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28071){if((e28071 instanceof Object)){
var ex__24059__auto__ = e28071;
var statearr_28072_28152 = state_28033;
(statearr_28072_28152[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28153 = state_28033;
state_28033 = G__28153;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
cljs$core$async$state_machine__24056__auto__ = function(state_28033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24056__auto____1.call(this,state_28033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24056__auto____0;
cljs$core$async$state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24056__auto____1;
return cljs$core$async$state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___28080,out))
})();
var state__24328__auto__ = (function (){var statearr_28073 = f__24327__auto__.call(null);
(statearr_28073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___28080);

return statearr_28073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___28080,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1522121078749