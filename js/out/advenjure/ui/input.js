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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__,key_chan){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__,key_chan){
return (function (state_28274){
var state_val_28275 = (state_28274[(1)]);
if((state_val_28275 === (1))){
var inst_28263 = advenjure.ui.input.term.call(null);
var inst_28265 = inst_28263.pause();
var inst_28268 = (function (){return ((function (inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan){
return (function (ev){
(window["onkeydown"] = null);

var c__24326__auto___28311__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan){
return (function (state_28283){
var state_val_28284 = (state_28283[(1)]);
if((state_val_28284 === (1))){
var inst_28279 = (ev["key"]);
var state_28283__$1 = state_28283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28283__$1,(2),key_chan,inst_28279);
} else {
if((state_val_28284 === (2))){
var inst_28281 = (state_28283[(2)]);
var state_28283__$1 = state_28283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28283__$1,inst_28281);
} else {
return null;
}
}
});})(c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan))
;
return ((function (switch__24055__auto__,c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24056__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24056__auto____0 = (function (){
var statearr_28296 = [null,null,null,null,null,null,null];
(statearr_28296[(0)] = advenjure$ui$input$read_value_$_state_machine__24056__auto__);

(statearr_28296[(1)] = (1));

return statearr_28296;
});
var advenjure$ui$input$read_value_$_state_machine__24056__auto____1 = (function (state_28283){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28297){if((e28297 instanceof Object)){
var ex__24059__auto__ = e28297;
var statearr_28298_28319 = state_28283;
(statearr_28298_28319[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28283;
state_28283 = G__28320;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24056__auto__ = function(state_28283){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24056__auto____1.call(this,state_28283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24056__auto____0;
advenjure$ui$input$read_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24056__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan))
})();
var state__24328__auto__ = (function (){var statearr_28299 = f__24327__auto__.call(null);
(statearr_28299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto___28311__$1);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto___28311__$1,inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan))
);


return advenjure.ui.input.term.call(null).resume();
});
;})(inst_28263,inst_28265,state_val_28275,c__24326__auto__,key_chan))
})();
var inst_28269 = (window["onkeydown"] = inst_28268);
var state_28274__$1 = (function (){var statearr_28300 = state_28274;
(statearr_28300[(7)] = inst_28269);

(statearr_28300[(8)] = inst_28265);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(2),key_chan);
} else {
if((state_val_28275 === (2))){
var inst_28271 = (state_28274[(2)]);
var inst_28272 = cljs.reader.read_string.call(null,inst_28271);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28274__$1,inst_28272);
} else {
return null;
}
}
});})(c__24326__auto__,key_chan))
;
return ((function (switch__24055__auto__,c__24326__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24056__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24056__auto____0 = (function (){
var statearr_28306 = [null,null,null,null,null,null,null,null,null];
(statearr_28306[(0)] = advenjure$ui$input$read_value_$_state_machine__24056__auto__);

(statearr_28306[(1)] = (1));

return statearr_28306;
});
var advenjure$ui$input$read_value_$_state_machine__24056__auto____1 = (function (state_28274){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28307){if((e28307 instanceof Object)){
var ex__24059__auto__ = e28307;
var statearr_28308_28321 = state_28274;
(statearr_28308_28321[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28323 = state_28274;
state_28274 = G__28323;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24056__auto__ = function(state_28274){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24056__auto____1.call(this,state_28274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24056__auto____0;
advenjure$ui$input$read_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24056__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__,key_chan))
})();
var state__24328__auto__ = (function (){var statearr_28309 = f__24327__auto__.call(null);
(statearr_28309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__,key_chan))
);

return c__24326__auto__;
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
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_28356){
var state_val_28357 = (state_28356[(1)]);
if((state_val_28357 === (1))){
var inst_28352 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,(2),inst_28352,command);
} else {
if((state_val_28357 === (2))){
var inst_28354 = (state_28356[(2)]);
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28356__$1,inst_28354);
} else {
return null;
}
}
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var advenjure$ui$input$process_command_$_state_machine__24056__auto__ = null;
var advenjure$ui$input$process_command_$_state_machine__24056__auto____0 = (function (){
var statearr_28370 = [null,null,null,null,null,null,null];
(statearr_28370[(0)] = advenjure$ui$input$process_command_$_state_machine__24056__auto__);

(statearr_28370[(1)] = (1));

return statearr_28370;
});
var advenjure$ui$input$process_command_$_state_machine__24056__auto____1 = (function (state_28356){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28371){if((e28371 instanceof Object)){
var ex__24059__auto__ = e28371;
var statearr_28372_28397 = state_28356;
(statearr_28372_28397[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28398 = state_28356;
state_28356 = G__28398;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$ui$input$process_command_$_state_machine__24056__auto__ = function(state_28356){
switch(arguments.length){
case 0:
return advenjure$ui$input$process_command_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$ui$input$process_command_$_state_machine__24056__auto____1.call(this,state_28356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$process_command_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$process_command_$_state_machine__24056__auto____0;
advenjure$ui$input$process_command_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$process_command_$_state_machine__24056__auto____1;
return advenjure$ui$input$process_command_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_28377 = f__24327__auto__.call(null);
(statearr_28377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
});
/**
 * 
 *   Compare the verb tokens with the complete input tokens and if they match,
 *   return the next verb token to be suggested. If no match returns nil.
 *   
 */
advenjure.ui.input.get_suggested_token = (function advenjure$ui$input$get_suggested_token(verb_tokens,input_tokens){
var G__28440 = verb_tokens;
var vec__28442 = G__28440;
var seq__28443 = cljs.core.seq.call(null,vec__28442);
var first__28444 = cljs.core.first.call(null,seq__28443);
var seq__28443__$1 = cljs.core.next.call(null,seq__28443);
var verb = first__28444;
var next_verbs = seq__28443__$1;
var G__28441 = input_tokens;
var vec__28445 = G__28441;
var seq__28446 = cljs.core.seq.call(null,vec__28445);
var first__28447 = cljs.core.first.call(null,seq__28446);
var seq__28446__$1 = cljs.core.next.call(null,seq__28446);
var input = first__28447;
var next_inputs = seq__28446__$1;
var G__28440__$1 = G__28440;
var G__28441__$1 = G__28441;
while(true){
var vec__28454 = G__28440__$1;
var seq__28455 = cljs.core.seq.call(null,vec__28454);
var first__28456 = cljs.core.first.call(null,seq__28455);
var seq__28455__$1 = cljs.core.next.call(null,seq__28455);
var verb__$1 = first__28456;
var next_verbs__$1 = seq__28455__$1;
var vec__28457 = G__28441__$1;
var seq__28458 = cljs.core.seq.call(null,vec__28457);
var first__28459 = cljs.core.first.call(null,seq__28458);
var seq__28458__$1 = cljs.core.next.call(null,seq__28458);
var input__$1 = first__28459;
var next_inputs__$1 = seq__28458__$1;
if((input__$1 == null)){
return [cljs.core.str(verb__$1),cljs.core.str(" ")].join('');
} else {
if((verb__$1 == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,clojure.string.trim.call(null,input__$1),clojure.string.trim.call(null,verb__$1))){
var G__28493 = next_verbs__$1;
var G__28494 = next_inputs__$1;
G__28440__$1 = G__28493;
G__28441__$1 = G__28494;
continue;
} else {
if(clojure.string.starts_with_QMARK_.call(null,verb__$1,"(?<")){
var G__28495 = next_verbs__$1;
var G__28496 = next_inputs__$1;
G__28440__$1 = G__28495;
G__28441__$1 = G__28496;
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
return cljs.core.map.call(null,(function (p1__28497_SHARP_){
return [cljs.core.str(p1__28497_SHARP_),cljs.core.str(" ")].join('');
}),items);
} else {
if(clojure.string.includes_QMARK_.call(null,token,"?<dir")){
return cljs.core.map.call(null,(function (p1__28498_SHARP_){
return [cljs.core.str(p1__28498_SHARP_),cljs.core.str(" ")].join('');
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
var encode = (function (p1__28514_SHARP_,p2__28515_SHARP_){
return clojure.string.replace.call(null,p1__28514_SHARP_,cljs.core.re_pattern.call(null,p2__28515_SHARP_),clojure.string.replace.call(null,p2__28515_SHARP_,/ /,"%%W%%"));
});
var input__$1 = clojure.string.replace.call(null,input,/[\s|\u00A0]/," ");
var input__$2 = cljs.core.reduce.call(null,encode,input__$1,cljs.core.concat.call(null,items,dirs));
var tokens = clojure.string.split.call(null,input__$2,/ /);
var tokens__$1 = cljs.core.map.call(null,((function (encode,input__$1,input__$2,tokens){
return (function (p1__28516_SHARP_){
return clojure.string.replace.call(null,p1__28516_SHARP_,/%%W%%/," ");
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
return (function (p1__28529_SHARP_){
return advenjure.ui.input.get_suggested_token.call(null,p1__28529_SHARP_,input_tokens);
});})(input__$1,input_tokens,verb_tokens,room,items,name_mappings,dirs))
,verb_tokens)));
var suggested = cljs.core.distinct.call(null,cljs.core.mapcat.call(null,((function (input__$1,input_tokens,suggested1,verb_tokens,room,items,name_mappings,dirs){
return (function (p1__28530_SHARP_){
return advenjure.ui.input.expand_suggestion.call(null,p1__28530_SHARP_,items,dirs);
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

return advenjure.ui.input.term.call(null).push(advenjure.ui.input.process_command,(function (){var obj28554 = {"prompt":prompt,"completion":advenjure.ui.input.get_completion.call(null,gs,verb_map)};
return obj28554;
})());
});
/**
 * Wait for input to be written in the input channel
 */
advenjure.ui.input.get_input = (function advenjure$ui$input$get_input(state){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
return (function (state_28619){
var state_val_28620 = (state_28619[(1)]);
if((state_val_28620 === (1))){
var inst_28612 = advenjure.ui.input.set_interpreter.call(null,state);
var inst_28613 = advenjure.ui.input.term.call(null);
var inst_28614 = inst_28613.echo(" ");
var inst_28615 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28619__$1 = (function (){var statearr_28621 = state_28619;
(statearr_28621[(7)] = inst_28614);

(statearr_28621[(8)] = inst_28612);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28619__$1,(2),inst_28615);
} else {
if((state_val_28620 === (2))){
var inst_28617 = (state_28619[(2)]);
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28619__$1,inst_28617);
} else {
return null;
}
}
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var advenjure$ui$input$get_input_$_state_machine__24056__auto__ = null;
var advenjure$ui$input$get_input_$_state_machine__24056__auto____0 = (function (){
var statearr_28629 = [null,null,null,null,null,null,null,null,null];
(statearr_28629[(0)] = advenjure$ui$input$get_input_$_state_machine__24056__auto__);

(statearr_28629[(1)] = (1));

return statearr_28629;
});
var advenjure$ui$input$get_input_$_state_machine__24056__auto____1 = (function (state_28619){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28631){if((e28631 instanceof Object)){
var ex__24059__auto__ = e28631;
var statearr_28632_28657 = state_28619;
(statearr_28632_28657[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28662 = state_28619;
state_28619 = G__28662;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$ui$input$get_input_$_state_machine__24056__auto__ = function(state_28619){
switch(arguments.length){
case 0:
return advenjure$ui$input$get_input_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$ui$input$get_input_$_state_machine__24056__auto____1.call(this,state_28619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$get_input_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$get_input_$_state_machine__24056__auto____0;
advenjure$ui$input$get_input_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$get_input_$_state_machine__24056__auto____1;
return advenjure$ui$input$get_input_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_28634 = f__24327__auto__.call(null);
(statearr_28634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_28634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
});
/**
 * Ask the user to enter a value
 */
advenjure.ui.input.prompt_value = (function advenjure$ui$input$prompt_value(prompt){
var c__24326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24326__auto__){
return (function (){
var f__24327__auto__ = (function (){var switch__24055__auto__ = ((function (c__24326__auto__){
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
});})(c__24326__auto__))
;
return ((function (switch__24055__auto__,c__24326__auto__){
return (function() {
var advenjure$ui$input$prompt_value_$_state_machine__24056__auto__ = null;
var advenjure$ui$input$prompt_value_$_state_machine__24056__auto____0 = (function (){
var statearr_28708 = [null,null,null,null,null,null,null,null];
(statearr_28708[(0)] = advenjure$ui$input$prompt_value_$_state_machine__24056__auto__);

(statearr_28708[(1)] = (1));

return statearr_28708;
});
var advenjure$ui$input$prompt_value_$_state_machine__24056__auto____1 = (function (state_28702){
while(true){
var ret_value__24057__auto__ = (function (){try{while(true){
var result__24058__auto__ = switch__24055__auto__.call(null,state_28702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24058__auto__;
}
break;
}
}catch (e28709){if((e28709 instanceof Object)){
var ex__24059__auto__ = e28709;
var statearr_28710_28722 = state_28702;
(statearr_28710_28722[(5)] = ex__24059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28726 = state_28702;
state_28702 = G__28726;
continue;
} else {
return ret_value__24057__auto__;
}
break;
}
});
advenjure$ui$input$prompt_value_$_state_machine__24056__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return advenjure$ui$input$prompt_value_$_state_machine__24056__auto____0.call(this);
case 1:
return advenjure$ui$input$prompt_value_$_state_machine__24056__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$prompt_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$prompt_value_$_state_machine__24056__auto____0;
advenjure$ui$input$prompt_value_$_state_machine__24056__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$prompt_value_$_state_machine__24056__auto____1;
return advenjure$ui$input$prompt_value_$_state_machine__24056__auto__;
})()
;})(switch__24055__auto__,c__24326__auto__))
})();
var state__24328__auto__ = (function (){var statearr_28711 = f__24327__auto__.call(null);
(statearr_28711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24326__auto__);

return statearr_28711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24328__auto__);
});})(c__24326__auto__))
);

return c__24326__auto__;
});

//# sourceMappingURL=input.js.map?rel=1522121079400