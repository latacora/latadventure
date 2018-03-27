// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.ui.input');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('jquery.mousewheel');
goog.require('jquery');
goog.require('cljs.core.async');
goog.require('jquery.terminal');
goog.require('clojure.string');
goog.require('advenjure.utils');
goog.require('advenjure.rooms');
goog.require('cljs.reader');
advenjure.ui.input.term = (function advenjure$ui$input$term(){
return $("#terminal").terminal();
});
advenjure.ui.input.input_chan = cljs.core.atom.call(null,cljs.core.async.chan.call(null));
/**
 * Need to recreate input chan so previous game loop doesnt receive input anymore.
 */
advenjure.ui.input.figwheel_cleanup = (function advenjure$ui$input$figwheel_cleanup(){
cljs.core.println.call(null,"resetting input channel for figwheel cleanup");

cljs.core.async.close_BANG_.call(null,cljs.core.deref.call(null,advenjure.ui.input.input_chan));

return cljs.core.reset_BANG_.call(null,advenjure.ui.input.input_chan,cljs.core.async.chan.call(null));
});
advenjure.ui.input.exit = (function advenjure$ui$input$exit(){
return advenjure.ui.input.term.call(null).pause();
});
advenjure.ui.input.read_value = (function advenjure$ui$input$read_value(){
var key_chan = cljs.core.async.chan.call(null);
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__,key_chan){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__,key_chan){
return (function (state_28278){
var state_val_28279 = (state_28278[(1)]);
if((state_val_28279 === (1))){
var inst_28270 = advenjure.ui.input.term.call(null);
var inst_28271 = inst_28270.pause();
var inst_28272 = (function (){return ((function (inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan){
return (function (ev){
(window["onkeydown"] = null);

var c__24228__auto___28303__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan){
return (function (state_28284){
var state_val_28285 = (state_28284[(1)]);
if((state_val_28285 === (1))){
var inst_28280 = (ev["key"]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28284__$1,(2),key_chan,inst_28280);
} else {
if((state_val_28285 === (2))){
var inst_28282 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28284__$1,inst_28282);
} else {
return null;
}
}
});})(c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan))
;
return ((function (switch__24031__auto__,c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24032__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24032__auto____0 = (function (){
var statearr_28289 = [null,null,null,null,null,null,null];
(statearr_28289[(0)] = advenjure$ui$input$read_value_$_state_machine__24032__auto__);

(statearr_28289[(1)] = (1));

return statearr_28289;
});
var advenjure$ui$input$read_value_$_state_machine__24032__auto____1 = (function (state_28284){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28290){if((e28290 instanceof Object)){
var ex__24035__auto__ = e28290;
var statearr_28291_28320 = state_28284;
(statearr_28291_28320[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28321 = state_28284;
state_28284 = G__28321;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24032__auto__ = function(state_28284){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24032__auto____1.call(this,state_28284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24032__auto____0;
advenjure$ui$input$read_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24032__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan))
})();
var state__24230__auto__ = (function (){var statearr_28294 = f__24229__auto__.call(null);
(statearr_28294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto___28303__$1);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto___28303__$1,inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan))
);


return advenjure.ui.input.term.call(null).resume();
});
;})(inst_28270,inst_28271,state_val_28279,c__24228__auto__,key_chan))
})();
var inst_28273 = (window["onkeydown"] = inst_28272);
var state_28278__$1 = (function (){var statearr_28295 = state_28278;
(statearr_28295[(7)] = inst_28273);

(statearr_28295[(8)] = inst_28271);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(2),key_chan);
} else {
if((state_val_28279 === (2))){
var inst_28275 = (state_28278[(2)]);
var inst_28276 = cljs.reader.read_string.call(null,inst_28275);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28278__$1,inst_28276);
} else {
return null;
}
}
});})(c__24228__auto__,key_chan))
;
return ((function (switch__24031__auto__,c__24228__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24032__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24032__auto____0 = (function (){
var statearr_28299 = [null,null,null,null,null,null,null,null,null];
(statearr_28299[(0)] = advenjure$ui$input$read_value_$_state_machine__24032__auto__);

(statearr_28299[(1)] = (1));

return statearr_28299;
});
var advenjure$ui$input$read_value_$_state_machine__24032__auto____1 = (function (state_28278){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28300){if((e28300 instanceof Object)){
var ex__24035__auto__ = e28300;
var statearr_28301_28334 = state_28278;
(statearr_28301_28334[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28278;
state_28278 = G__28335;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24032__auto__ = function(state_28278){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24032__auto____1.call(this,state_28278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24032__auto____0;
advenjure$ui$input$read_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24032__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__,key_chan))
})();
var state__24230__auto__ = (function (){var statearr_28302 = f__24229__auto__.call(null);
(statearr_28302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__,key_chan))
);

return c__24228__auto__;
});
advenjure.ui.input.read_key = advenjure.ui.input.read_value;
cljs.reader.register_tag_parser_BANG_.call(null,"advenjure.items.Item",advenjure.items.map__GT_Item);
cljs.reader.register_tag_parser_BANG_.call(null,"advenjure.rooms.Room",advenjure.rooms.map__GT_Room);
advenjure.ui.input.read_file = (function advenjure$ui$input$read_file(file){
return cljs.reader.read_string.call(null,(localStorage[file]));
});
/**
 * Write command to the input channel
 */
advenjure.ui.input.process_command = (function advenjure$ui$input$process_command(command,term){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_28373){
var state_val_28374 = (state_28373[(1)]);
if((state_val_28374 === (1))){
var inst_28369 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28373__$1,(2),inst_28369,command);
} else {
if((state_val_28374 === (2))){
var inst_28371 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28373__$1,inst_28371);
} else {
return null;
}
}
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var advenjure$ui$input$process_command_$_state_machine__24032__auto__ = null;
var advenjure$ui$input$process_command_$_state_machine__24032__auto____0 = (function (){
var statearr_28383 = [null,null,null,null,null,null,null];
(statearr_28383[(0)] = advenjure$ui$input$process_command_$_state_machine__24032__auto__);

(statearr_28383[(1)] = (1));

return statearr_28383;
});
var advenjure$ui$input$process_command_$_state_machine__24032__auto____1 = (function (state_28373){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28385){if((e28385 instanceof Object)){
var ex__24035__auto__ = e28385;
var statearr_28386_28411 = state_28373;
(statearr_28386_28411[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28418 = state_28373;
state_28373 = G__28418;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$ui$input$process_command_$_state_machine__24032__auto__ = function(state_28373){
switch(arguments.length){
case 0:
return advenjure$ui$input$process_command_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$ui$input$process_command_$_state_machine__24032__auto____1.call(this,state_28373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$process_command_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$process_command_$_state_machine__24032__auto____0;
advenjure$ui$input$process_command_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$process_command_$_state_machine__24032__auto____1;
return advenjure$ui$input$process_command_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_28388 = f__24229__auto__.call(null);
(statearr_28388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});
/**
 * 
 *   Compare the verb tokens with the complete input tokens and if they match,
 *   return the next verb token to be suggested. If no match returns nil.
 *   
 */
advenjure.ui.input.get_suggested_token = (function advenjure$ui$input$get_suggested_token(verb_tokens,input_tokens){
var G__28460 = verb_tokens;
var vec__28462 = G__28460;
var seq__28463 = cljs.core.seq.call(null,vec__28462);
var first__28464 = cljs.core.first.call(null,seq__28463);
var seq__28463__$1 = cljs.core.next.call(null,seq__28463);
var verb = first__28464;
var next_verbs = seq__28463__$1;
var G__28461 = input_tokens;
var vec__28465 = G__28461;
var seq__28466 = cljs.core.seq.call(null,vec__28465);
var first__28467 = cljs.core.first.call(null,seq__28466);
var seq__28466__$1 = cljs.core.next.call(null,seq__28466);
var input = first__28467;
var next_inputs = seq__28466__$1;
var G__28460__$1 = G__28460;
var G__28461__$1 = G__28461;
while(true){
var vec__28468 = G__28460__$1;
var seq__28469 = cljs.core.seq.call(null,vec__28468);
var first__28470 = cljs.core.first.call(null,seq__28469);
var seq__28469__$1 = cljs.core.next.call(null,seq__28469);
var verb__$1 = first__28470;
var next_verbs__$1 = seq__28469__$1;
var vec__28471 = G__28461__$1;
var seq__28472 = cljs.core.seq.call(null,vec__28471);
var first__28473 = cljs.core.first.call(null,seq__28472);
var seq__28472__$1 = cljs.core.next.call(null,seq__28472);
var input__$1 = first__28473;
var next_inputs__$1 = seq__28472__$1;
if((input__$1 == null)){
return [cljs.core.str(verb__$1),cljs.core.str(" ")].join('');
} else {
if((verb__$1 == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,clojure.string.trim.call(null,input__$1),clojure.string.trim.call(null,verb__$1))){
var G__28496 = next_verbs__$1;
var G__28497 = next_inputs__$1;
G__28460__$1 = G__28496;
G__28461__$1 = G__28497;
continue;
} else {
if(clojure.string.starts_with_QMARK_.call(null,verb__$1,"(?<")){
var G__28498 = next_verbs__$1;
var G__28499 = next_inputs__$1;
G__28460__$1 = G__28498;
G__28461__$1 = G__28499;
continue;
} else {
return null;
}
}
}
}
break;
}
});
advenjure.ui.input.expand_suggestion = (function advenjure$ui$input$expand_suggestion(token,items,dirs){
if(clojure.string.includes_QMARK_.call(null,token,"?<item")){
return cljs.core.map.call(null,(function (p1__28500_SHARP_){
return [cljs.core.str(p1__28500_SHARP_),cljs.core.str(" ")].join('');
}),items);
} else {
if(clojure.string.includes_QMARK_.call(null,token,"?<dir")){
return cljs.core.map.call(null,(function (p1__28501_SHARP_){
return [cljs.core.str(p1__28501_SHARP_),cljs.core.str(" ")].join('');
}),dirs);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null);

}
}
});
advenjure.ui.input.tokenize_verb = (function advenjure$ui$input$tokenize_verb(verb){
return clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,verb,/\$/,""),/\^/,""),/ /);
});
/**
 * 
 *   Get the finished tokens (partial tokens are ingnored, since that part of the
 *   completion is handled by jquery terminal).
 *   Encodes/decodes item and dir names to avoid breaking them in separate tokens.
 *   
 */
advenjure.ui.input.tokenize_input = (function advenjure$ui$input$tokenize_input(input,items,dirs){
var encode = (function (p1__28502_SHARP_,p2__28503_SHARP_){
return clojure.string.replace.call(null,p1__28502_SHARP_,cljs.core.re_pattern.call(null,p2__28503_SHARP_),clojure.string.replace.call(null,p2__28503_SHARP_,/ /,"%%W%%"));
});
var input__$1 = clojure.string.replace.call(null,input,/[\s|\u00A0]/," ");
var input__$2 = cljs.core.reduce.call(null,encode,input__$1,cljs.core.concat.call(null,items,dirs));
var tokens = clojure.string.split.call(null,input__$2,/ /);
var tokens__$1 = cljs.core.map.call(null,((function (encode,input__$1,input__$2,tokens){
return (function (p1__28504_SHARP_){
return clojure.string.replace.call(null,p1__28504_SHARP_,/%%W%%/," ");
});})(encode,input__$1,input__$2,tokens))
,tokens);
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,input__$2)," ")){
return tokens__$1;
} else {
return cljs.core.butlast.call(null,tokens__$1);
}
});
advenjure.ui.input.get_full_input = (function advenjure$ui$input$get_full_input(){
return $(".prompt").next().text();
});
advenjure.ui.input.get_completion = (function advenjure$ui$input$get_completion(game_state,verb_map){
var verb_tokens = cljs.core.map.call(null,advenjure.ui.input.tokenize_verb,cljs.core.keys.call(null,verb_map));
var room = advenjure.utils.current_room.call(null,game_state);
var items = advenjure.items.all_item_names.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.utils.room_as_item.call(null,room)], null)));
var name_mappings = advenjure.rooms.visible_name_mappings.call(null,new cljs.core.Keyword(null,"room-map","room-map",978449264).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state));
var dirs = cljs.core.concat.call(null,cljs.core.keys.call(null,advenjure.utils.direction_mappings),cljs.core.keys.call(null,name_mappings));
return ((function (verb_tokens,room,items,name_mappings,dirs){
return (function (term,input,cb){
var input__$1 = advenjure.ui.input.get_full_input.call(null);
var input_tokens = advenjure.ui.input.tokenize_input.call(null,input__$1,items,dirs);
var suggested1 = cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (input__$1,input_tokens,verb_tokens,room,items,name_mappings,dirs){
return (function (p1__28520_SHARP_){
return advenjure.ui.input.get_suggested_token.call(null,p1__28520_SHARP_,input_tokens);
});})(input__$1,input_tokens,verb_tokens,room,items,name_mappings,dirs))
,verb_tokens)));
var suggested = cljs.core.distinct.call(null,cljs.core.mapcat.call(null,((function (input__$1,input_tokens,suggested1,verb_tokens,room,items,name_mappings,dirs){
return (function (p1__28521_SHARP_){
return advenjure.ui.input.expand_suggestion.call(null,p1__28521_SHARP_,items,dirs);
});})(input__$1,input_tokens,suggested1,verb_tokens,room,items,name_mappings,dirs))
,suggested1));
return cb.call(null,cljs.core.apply.call(null,cljs.core.array,suggested));
});
;})(verb_tokens,room,items,name_mappings,dirs))
});
advenjure.ui.input.set_interpreter = (function advenjure$ui$input$set_interpreter(gs){
var verb_map = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746)], null));
var prompt_fn = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"prompt","prompt",-78109487)], null));
var prompt = prompt_fn.call(null,gs);
if((advenjure.ui.input.term.call(null).level() > (1))){
advenjure.ui.input.term.call(null).pop();
} else {
}

return advenjure.ui.input.term.call(null).push(advenjure.ui.input.process_command,(function (){var obj28569 = {"prompt":prompt,"completion":advenjure.ui.input.get_completion.call(null,gs,verb_map)};
return obj28569;
})());
});
/**
 * Wait for input to be written in the input channel
 */
advenjure.ui.input.get_input = (function advenjure$ui$input$get_input(state){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_28625){
var state_val_28626 = (state_28625[(1)]);
if((state_val_28626 === (1))){
var inst_28618 = advenjure.ui.input.set_interpreter.call(null,state);
var inst_28619 = advenjure.ui.input.term.call(null);
var inst_28620 = inst_28619.echo(" ");
var inst_28621 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28625__$1 = (function (){var statearr_28631 = state_28625;
(statearr_28631[(7)] = inst_28620);

(statearr_28631[(8)] = inst_28618);

return statearr_28631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28625__$1,(2),inst_28621);
} else {
if((state_val_28626 === (2))){
var inst_28623 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28625__$1,inst_28623);
} else {
return null;
}
}
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var advenjure$ui$input$get_input_$_state_machine__24032__auto__ = null;
var advenjure$ui$input$get_input_$_state_machine__24032__auto____0 = (function (){
var statearr_28643 = [null,null,null,null,null,null,null,null,null];
(statearr_28643[(0)] = advenjure$ui$input$get_input_$_state_machine__24032__auto__);

(statearr_28643[(1)] = (1));

return statearr_28643;
});
var advenjure$ui$input$get_input_$_state_machine__24032__auto____1 = (function (state_28625){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28644){if((e28644 instanceof Object)){
var ex__24035__auto__ = e28644;
var statearr_28645_28669 = state_28625;
(statearr_28645_28669[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28671 = state_28625;
state_28625 = G__28671;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$ui$input$get_input_$_state_machine__24032__auto__ = function(state_28625){
switch(arguments.length){
case 0:
return advenjure$ui$input$get_input_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$ui$input$get_input_$_state_machine__24032__auto____1.call(this,state_28625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$get_input_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$get_input_$_state_machine__24032__auto____0;
advenjure$ui$input$get_input_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$get_input_$_state_machine__24032__auto____1;
return advenjure$ui$input$get_input_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_28650 = f__24229__auto__.call(null);
(statearr_28650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_28650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});
/**
 * Ask the user to enter a value
 */
advenjure.ui.input.prompt_value = (function advenjure$ui$input$prompt_value(prompt){
var c__24228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24228__auto__){
return (function (){
var f__24229__auto__ = (function (){var switch__24031__auto__ = ((function (c__24228__auto__){
return (function (state_28702){
var state_val_28703 = (state_28702[(1)]);
if((state_val_28703 === (1))){
var inst_28696 = advenjure.ui.input.term.call(null);
var inst_28697 = inst_28696.set_prompt(prompt);
var inst_28698 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28702__$1 = (function (){var statearr_28704 = state_28702;
(statearr_28704[(7)] = inst_28697);

return statearr_28704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(2),inst_28698);
} else {
if((state_val_28703 === (2))){
var inst_28700 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28702__$1,inst_28700);
} else {
return null;
}
}
});})(c__24228__auto__))
;
return ((function (switch__24031__auto__,c__24228__auto__){
return (function() {
var advenjure$ui$input$prompt_value_$_state_machine__24032__auto__ = null;
var advenjure$ui$input$prompt_value_$_state_machine__24032__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = advenjure$ui$input$prompt_value_$_state_machine__24032__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var advenjure$ui$input$prompt_value_$_state_machine__24032__auto____1 = (function (state_28702){
while(true){
var ret_value__24033__auto__ = (function (){try{while(true){
var result__24034__auto__ = switch__24031__auto__.call(null,state_28702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24034__auto__;
}
break;
}
}catch (e28711){if((e28711 instanceof Object)){
var ex__24035__auto__ = e28711;
var statearr_28712_28720 = state_28702;
(statearr_28712_28720[(5)] = ex__24035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28721 = state_28702;
state_28702 = G__28721;
continue;
} else {
return ret_value__24033__auto__;
}
break;
}
});
advenjure$ui$input$prompt_value_$_state_machine__24032__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return advenjure$ui$input$prompt_value_$_state_machine__24032__auto____0.call(this);
case 1:
return advenjure$ui$input$prompt_value_$_state_machine__24032__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$prompt_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$prompt_value_$_state_machine__24032__auto____0;
advenjure$ui$input$prompt_value_$_state_machine__24032__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$prompt_value_$_state_machine__24032__auto____1;
return advenjure$ui$input$prompt_value_$_state_machine__24032__auto__;
})()
;})(switch__24031__auto__,c__24228__auto__))
})();
var state__24230__auto__ = (function (){var statearr_28714 = f__24229__auto__.call(null);
(statearr_28714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24228__auto__);

return statearr_28714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24230__auto__);
});})(c__24228__auto__))
);

return c__24228__auto__;
});

//# sourceMappingURL=input.js.map?rel=1522181423179