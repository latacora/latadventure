// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('advenjure.items');
goog.require('advenjure.rooms');
goog.require('advenjure.ui.output');
goog.require('advenjure.gettext.core');
/**
 * Get the current room spec from game state.
 */
advenjure.utils.current_room = (function advenjure$utils$current_room(game_state){
return cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state)], null));
});
advenjure.utils.direction_mappings = cljs.core.PersistentHashMap.fromArrays([advenjure.gettext.core._.call(null,"north"),advenjure.gettext.core._.call(null,"south"),advenjure.gettext.core._.call(null,"u"),advenjure.gettext.core._.call(null,"southwest"),advenjure.gettext.core._.call(null,"d"),advenjure.gettext.core._.call(null,"sw"),advenjure.gettext.core._.call(null,"n"),advenjure.gettext.core._.call(null,"w"),advenjure.gettext.core._.call(null,"east"),advenjure.gettext.core._.call(null,"down"),advenjure.gettext.core._.call(null,"s"),advenjure.gettext.core._.call(null,"southeast"),advenjure.gettext.core._.call(null,"nw"),advenjure.gettext.core._.call(null,"se"),advenjure.gettext.core._.call(null,"ne"),advenjure.gettext.core._.call(null,"e"),advenjure.gettext.core._.call(null,"northwest"),advenjure.gettext.core._.call(null,"northeast"),advenjure.gettext.core._.call(null,"west"),advenjure.gettext.core._.call(null,"up")],[new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"up","up",-269712113)]);
advenjure.utils.direction_names = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"north","north",651323902)],[advenjure.gettext.core._.call(null,"southwest"),advenjure.gettext.core._.call(null,"down"),advenjure.gettext.core._.call(null,"west"),advenjure.gettext.core._.call(null,"south"),advenjure.gettext.core._.call(null,"northwest"),advenjure.gettext.core._.call(null,"east"),advenjure.gettext.core._.call(null,"up"),advenjure.gettext.core._.call(null,"southeast"),advenjure.gettext.core._.call(null,"northeast"),advenjure.gettext.core._.call(null,"north")]);
advenjure.utils.directions = cljs.core.set.call(null,cljs.core.vals.call(null,advenjure.utils.direction_mappings));
/**
 * Returns the spec of the room by the given name, if it's connected and visible
 *   (i.e. known or visited) current one.
 */
advenjure.utils.get_visible_room = (function advenjure$utils$get_visible_room(game_state,room_name){
var current = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state);
var rmap = new cljs.core.Keyword(null,"room-map","room-map",978449264).cljs$core$IFn$_invoke$arity$1(game_state);
var name_mappings = advenjure.rooms.visible_name_mappings.call(null,rmap,current);
var room_name__$1 = (cljs.core.truth_(room_name)?clojure.string.lower_case.call(null,room_name):null);
return cljs.core.get.call(null,name_mappings,room_name__$1);
});
/**
 * Adapt the room record to be used as an item. For now it just removes :items
 *   to avoid conflicts.
 */
advenjure.utils.room_as_item = (function advenjure$utils$room_as_item(room){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,room,new cljs.core.Keyword(null,"names","names",-1943074658),advenjure.rooms.names.call(null,room)),new cljs.core.Keyword(null,"items","items",1031954938));
});
/**
 * Try to find the given item name either in the inventory or the current room.
 */
advenjure.utils.find_item = (function advenjure$utils$find_item(game_state,token){
return cljs.core.concat.call(null,advenjure.items.get_from.call(null,cljs.core.PersistentHashSet.fromArray([advenjure.utils.room_as_item.call(null,advenjure.utils.current_room.call(null,game_state))], true),token),advenjure.items.get_from.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),token),advenjure.items.get_from.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,game_state)),token));
});
advenjure.utils.find_first = cljs.core.comp.call(null,cljs.core.first,advenjure.utils.find_item);
advenjure.utils.remove_item = (function advenjure$utils$remove_item(game_state,item){
var room_kw = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state);
var room = advenjure.utils.current_room.call(null,game_state);
var inventory = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state);
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"inventory","inventory",860201871),advenjure.items.remove_from.call(null,inventory,item)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),room_kw,new cljs.core.Keyword(null,"items","items",1031954938)], null),advenjure.items.remove_from.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room),item));
});
advenjure.utils.replace_item = (function advenjure$utils$replace_item(game_state,old_item,new_item){
var room_kw = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state);
var room = advenjure.utils.current_room.call(null,game_state);
var inventory = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state);
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"inventory","inventory",860201871),advenjure.items.replace_from.call(null,inventory,old_item,new_item)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),room_kw,new cljs.core.Keyword(null,"items","items",1031954938)], null),advenjure.items.replace_from.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room),old_item,new_item));
});
advenjure.utils.string_wrap = (function advenjure$utils$string_wrap(var_args){
var args23613 = [];
var len__21530__auto___23638 = arguments.length;
var i__21531__auto___23639 = (0);
while(true){
if((i__21531__auto___23639 < len__21530__auto___23638)){
args23613.push((arguments[i__21531__auto___23639]));

var G__23641 = (i__21531__auto___23639 + (1));
i__21531__auto___23639 = G__23641;
continue;
} else {
}
break;
}

var G__23617 = args23613.length;
switch (G__23617) {
case 1:
return advenjure.utils.string_wrap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.utils.string_wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23613.length)].join('')));

}
});

advenjure.utils.string_wrap.cljs$core$IFn$_invoke$arity$1 = (function (text){
return advenjure.utils.string_wrap.call(null,text,(80));
});

advenjure.utils.string_wrap.cljs$core$IFn$_invoke$arity$2 = (function (text,max_size){
var G__23623 = clojure.string.split.call(null,text,/ /);
var vec__23624 = G__23623;
var seq__23625 = cljs.core.seq.call(null,vec__23624);
var first__23626 = cljs.core.first.call(null,seq__23625);
var seq__23625__$1 = cljs.core.next.call(null,seq__23625);
var word = first__23626;
var others = seq__23625__$1;
var current = "";
var lines = cljs.core.PersistentVector.EMPTY;
var G__23623__$1 = G__23623;
var current__$1 = current;
var lines__$1 = lines;
while(true){
var vec__23627 = G__23623__$1;
var seq__23628 = cljs.core.seq.call(null,vec__23627);
var first__23629 = cljs.core.first.call(null,seq__23628);
var seq__23628__$1 = cljs.core.next.call(null,seq__23628);
var word__$1 = first__23629;
var others__$1 = seq__23628__$1;
var current__$2 = current__$1;
var lines__$2 = lines__$1;
if(cljs.core.truth_(word__$1)){
var new_current = [cljs.core.str(current__$2),cljs.core.str(" "),cljs.core.str(word__$1)].join('');
var line_size = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,new_current,/\n/)));
if((max_size > line_size)){
var G__23651 = others__$1;
var G__23652 = new_current;
var G__23653 = lines__$2;
G__23623__$1 = G__23651;
current__$1 = G__23652;
lines__$1 = G__23653;
continue;
} else {
var G__23656 = others__$1;
var G__23657 = word__$1;
var G__23658 = cljs.core.conj.call(null,lines__$2,current__$2);
G__23623__$1 = G__23656;
current__$1 = G__23657;
lines__$1 = G__23658;
continue;
}
} else {
return clojure.string.triml.call(null,clojure.string.join.call(null,"\n",cljs.core.conj.call(null,lines__$2,current__$2)));
}
break;
}
});

advenjure.utils.string_wrap.cljs$lang$maxFixedArity = 2;

/**
 * Converts first character to upper-case, leaves the rest untouched.
 */
advenjure.utils.capfirst = (function advenjure$utils$capfirst(s){
return [cljs.core.str(clojure.string.capitalize.call(null,cljs.core.first.call(null,s))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
});
advenjure.utils.say = (function advenjure$utils$say(speech){
return advenjure.ui.output.print_line.call(null,advenjure.utils.string_wrap.call(null,advenjure.utils.capfirst.call(null,speech)));
});
advenjure.utils.say_inline = (function advenjure$utils$say_inline(speech){
return advenjure.ui.output.print.call(null,[cljs.core.str(advenjure.utils.capfirst.call(null,speech))].join(''));
});

//# sourceMappingURL=utils.js.map?rel=1522121075683