// Compiled by ClojureScript 1.9.229 {}
goog.provide('latadventure.rooms');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.items');
goog.require('advenjure.utils');
goog.require('advenjure.dialogs');
latadventure.rooms.dais = advenjure.rooms.make.call(null,"Dais","You are by some kind of dais. It is made of smooth black leather.");
latadventure.rooms.entryway = advenjure.rooms.make.call(null,"Entryway","An entryway. Not much to see here.");
latadventure.rooms.server = advenjure.items.make.call(null,"server","Big rectangular metal box with lights. It is making noise and is warm to the touch. Best not wake it up. It might get angry.");
latadventure.rooms.make_food = (function latadventure$rooms$make_food(name,description){
return advenjure.items.make.call(null,name,description,new cljs.core.Keyword(null,"take","take",-768884900),true,new cljs.core.Keyword(null,"eat","eat",1686757401),"Truly a great perk of working here.");
});
latadventure.rooms.fridge = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fridge","refrigerator"], null),"A metal box with a glass front. It appears to be a container. The glass is cold to the touch.",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.fromArray([latadventure.rooms.make_food.call(null,"bresaola","a delicious cut of beef"),latadventure.rooms.make_food.call(null,"country ham","a delicious cut of pork")], true));
latadventure.rooms.kitchen = advenjure.rooms.add_item.call(null,advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"Kitchen","Some sort of kitchen. There are lots of metal boxes here."),latadventure.rooms.server),latadventure.rooms.fridge);
latadventure.rooms.pre_drink_bottle = (function latadventure$rooms$pre_drink_bottle(s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tried","tried",-1728444308).cljs$core$IFn$_invoke$arity$1(advenjure.utils.find_first.call(null,s,"bottle")))){
return "Not in a million years.";
} else {
return true;
}
});
latadventure.rooms.post_drink_bottle = (function latadventure$rooms$post_drink_bottle(old,new$){
var bottle = advenjure.utils.find_first.call(null,old,"bottle");
advenjure.utils.say.call(null,"Yeeech! This tastes like ox-bile soap.");

return advenjure.utils.replace_item.call(null,new$,bottle,cljs.core.assoc.call(null,bottle,new cljs.core.Keyword(null,"tried","tried",-1728444308),true));
});
latadventure.rooms.bottle = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottle","windex","windex bottle"], null),"a bottle. It says \"Mal\u00F6rt\", but you've heard the locals pronounce it \"win-deks\".",new cljs.core.Keyword(null,"take","take",-768884900),true,new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"drink","drink",298215495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Symbol("latadventure.rooms","pre-drink-bottle","latadventure.rooms/pre-drink-bottle",-744549847,null),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Symbol("latadventure.rooms","post-drink-bottle","latadventure.rooms/post-drink-bottle",-697733024,null)], null),new cljs.core.Keyword(null,"tried","tried",-1728444308),false);
latadventure.rooms.cabinet = advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"Alchemy cabinet","There is some kind of alchemy cabinet here. There are a number of bottles of colored liquid ranging from yellow to ochre to brown. Every bottle is on the top shelf, out of reach -- except one."),latadventure.rooms.bottle);
latadventure.rooms.paper = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paper"], null),"A paper about dif-fuh-ren-shul ah-na-lee-sis. Strange, I didn't think Annalee had a sister. But it makes sense you wouldn't know that if they were hard to tell apart, I suppose.",new cljs.core.Keyword(null,"take","take",-768884900),true);
latadventure.rooms.trash = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a pile of trash","a pile of garbage","trash","garbage"], null),"A pile of miscellaneous detritus from the denizens of the \"ah-fis\".",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.fromArray([latadventure.rooms.paper], true));
latadventure.rooms.office = advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"Center of the office","You are in the center of an \"ah-fis\". The floor turns from strange soft gray wool to a strange surface that looks like wood but clearly isn't. There is a giant pile of trash here."),latadventure.rooms.trash);
latadventure.rooms.lvh_cape = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cape","wizard cape"], null),"A cape, adorned with the colors and shapes of the night sky. You want it. It is your entire reason for existing.",new cljs.core.Keyword(null,"take","take",-768884900),"The wizard scowls at you angrily as you attempt to take his cape from him.");
latadventure.rooms.greet_lvh = (function latadventure$rooms$greet_lvh(game_state__23551__auto__){
if(cljs.core.truth_(advenjure.dialogs.event_QMARK_.call(null,new cljs.core.Keyword(null,"knows-lvh","knows-lvh",-207472860)).call(null,game_state__23551__auto__))){
return (function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Hi \"ell vee aitch\"!");
}).call(null,game_state__23551__auto__);
} else {
return (function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Uh, hello?");
}).call(null,game_state__23551__auto__);
}
});
latadventure.rooms.lvh_response = (function latadventure$rooms$lvh_response(game_state__23541__auto__){
var selected__23542__auto__ = cljs.core.get.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"LVH","Hm?");
}),(function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"LVH","What do you want?");
}),(function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"LVH","I'm busy.");
})], null),cljs.core.rand_int.call(null,3));
return selected__23542__auto__.call(null,game_state__23541__auto__);
});
latadventure.rooms.take_paper = (function latadventure$rooms$take_paper(s){
advenjure.utils.say.call(null,"The wizard mumbles something about \"a fine sai-fer\". He seems very upset about the \"sai-fer\" given that it's supposedly fine. On the other hand he seems pretty generally curmudgeonly so maybe you shouldn't read into it too much.");

var distract = advenjure.dialogs.set_event.call(null,new cljs.core.Keyword(null,"lvh-distracted","lvh-distracted",1297516940));
return distract.call(null,advenjure.utils.remove_item.call(null,s,latadventure.rooms.paper));
});
latadventure.rooms.take_bottle = (function latadventure$rooms$take_bottle(s){
advenjure.utils.say.call(null,"The wizard takes a terrifyingly big swig straight from the bottle. He doesn't give it back. That's, uh, fine by you.");

var intoxicate = advenjure.dialogs.set_event.call(null,new cljs.core.Keyword(null,"lvh-drunk","lvh-drunk",-1472023736));
return intoxicate.call(null,advenjure.utils.remove_item.call(null,s,latadventure.rooms.bottle));
});
latadventure.rooms.lvh_leaves = (function latadventure$rooms$lvh_leaves(s){
advenjure.utils.say.call(null,"The wizard leaves the office, leaving the cape for the taking!");

return advenjure.utils.replace_item.call(null,advenjure.utils.remove_item.call(null,s,latadventure.rooms.lvh),latadventure.rooms.lvh_cape,cljs.core.assoc.call(null,latadventure.rooms.lvh_cape,new cljs.core.Keyword(null,"take","take",-768884900),true));
});
latadventure.rooms.lvh_dialog_options = (function latadventure$rooms$lvh_dialog_options(game_state__23535__auto__){
return advenjure.dialogs.execute_optional.call(null,game_state__23535__auto__,(function (){var x__21289__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23737",new cljs.core.Keyword(null,"title","title",636505583),"Who are you?",new cljs.core.Keyword(null,"dialog","dialog",1415150135),(function (game_state__23497__auto__){
return advenjure.dialogs.set_event.call(null,new cljs.core.Keyword(null,"knows-lvh","knows-lvh",-207472860)).call(null,advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Who are you?"),"LVH","I am \"ell vee aitch\". Who are you?"));
}),new cljs.core.Keyword(null,"go-back","go-back",1642157803),false,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),true,new cljs.core.Keyword(null,"show-if","show-if",467186064),advenjure.dialogs.not_event_QMARK_.call(null,new cljs.core.Keyword(null,"knows-lvh","knows-lvh",-207472860))], null);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23738",new cljs.core.Keyword(null,"title","title",636505583),"Why are you here?",new cljs.core.Keyword(null,"dialog","dialog",1415150135),((function (x__21289__auto__){
return (function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Why are you here?"),"LVH","I work here, dude.");
});})(x__21289__auto__))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),false,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),false,new cljs.core.Keyword(null,"show-if","show-if",467186064),((function (x__21289__auto__){
return (function (gs__23514__auto__){
return true;
});})(x__21289__auto__))
], null);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23739",new cljs.core.Keyword(null,"title","title",636505583),"Would you like this bottle?",new cljs.core.Keyword(null,"dialog","dialog",1415150135),((function (x__21289__auto____$1,x__21289__auto__){
return (function (game_state__23497__auto__){
return latadventure.rooms.take_bottle.call(null,advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Would you like this bottle?"),"LVH","Sure, might as well. What a fucking day, man. Fucking \"vee-ruh-coat\". Even with the form letters, it's a mess."));
});})(x__21289__auto____$1,x__21289__auto__))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),false,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),false,new cljs.core.Keyword(null,"show-if","show-if",467186064),advenjure.dialogs.item_QMARK_.call(null,"bottle")], null);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23740",new cljs.core.Keyword(null,"title","title",636505583),"Have you read this paper?",new cljs.core.Keyword(null,"dialog","dialog",1415150135),((function (x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__){
return (function (game_state__23497__auto__){
return latadventure.rooms.take_paper.call(null,advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Have you read this paper?"),"LVH","Yeah. I should read it again though. It's a good paper."));
});})(x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),false,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),false,new cljs.core.Keyword(null,"show-if","show-if",467186064),advenjure.dialogs.item_QMARK_.call(null,"paper")], null);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$4 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23741",new cljs.core.Keyword(null,"title","title",636505583),"Maybe you should go back to your tower?",new cljs.core.Keyword(null,"dialog","dialog",1415150135),((function (x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__){
return (function (game_state__23497__auto__){
return latadventure.rooms.lvh_leaves.call(null,advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Sounds like you had a long day, man. Maybe you should go back to your tower?"),"LVH","Yeah. You're right. See ya."));
});})(x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),true,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),false,new cljs.core.Keyword(null,"show-if","show-if",467186064),((function (x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__){
return (function latadventure$rooms$lvh_dialog_options_$_lvh_ready_to_go(s){
var distracted = advenjure.dialogs.event_QMARK_.call(null,new cljs.core.Keyword(null,"lvh-distracted","lvh-distracted",1297516940)).call(null,s);
var drunk = advenjure.dialogs.event_QMARK_.call(null,new cljs.core.Keyword(null,"lvh-drunk","lvh-drunk",-1472023736)).call(null,s);
cljs.core.println.call(null,[cljs.core.str("checked if lvh was distracted: "),cljs.core.str(distracted),cljs.core.str(" or drunk: "),cljs.core.str(drunk)].join(''));

var and__20443__auto__ = distracted;
if(cljs.core.truth_(and__20443__auto__)){
return drunk;
} else {
return and__20443__auto__;
}
});})(x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__))
], null);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$5 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"opt23742",new cljs.core.Keyword(null,"title","title",636505583),"Bye.",new cljs.core.Keyword(null,"dialog","dialog",1415150135),((function (x__21289__auto____$4,x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__){
return (function (game_state__23497__auto__){
return advenjure.dialogs.print_dialog.call(null,advenjure.dialogs.print_dialog.call(null,game_state__23497__auto__,"ME","Bye."),"NPC","See you.");
});})(x__21289__auto____$4,x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),true,new cljs.core.Keyword(null,"sticky","sticky",-2121213869),true,new cljs.core.Keyword(null,"show-if","show-if",467186064),((function (x__21289__auto____$4,x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__){
return (function (gs__23514__auto__){
return true;
});})(x__21289__auto____$4,x__21289__auto____$3,x__21289__auto____$2,x__21289__auto____$1,x__21289__auto__))
], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$5);
})(),x__21289__auto____$4);
})(),x__21289__auto____$3);
})(),x__21289__auto____$2);
})(),x__21289__auto____$1);
})(),x__21289__auto__);
})());
});
latadventure.rooms.lvh_dialog = (function latadventure$rooms$lvh_dialog(game_state__23497__auto__){
return latadventure.rooms.lvh_dialog_options.call(null,latadventure.rooms.lvh_response.call(null,latadventure.rooms.greet_lvh.call(null,game_state__23497__auto__)));
});
latadventure.rooms.lvh = advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wizard","lvh"], null),"Some sort of wizard. He is tapping a strange black surface furiously. He has a long, forked beard.",new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Symbol("latadventure.rooms","lvh-dialog","latadventure.rooms/lvh-dialog",-1939743543,null));
latadventure.rooms.wizard_den = advenjure.rooms.add_item.call(null,advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"Wizard's den","You are by the wizard's den."),latadventure.rooms.lvh),latadventure.rooms.lvh_cape);
latadventure.rooms.room_map = advenjure.rooms.connect.call(null,advenjure.rooms.connect.call(null,advenjure.rooms.connect.call(null,advenjure.rooms.connect.call(null,advenjure.rooms.connect.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dais","dais",59303308),latadventure.rooms.dais,new cljs.core.Keyword(null,"cabinet","cabinet",245597793),latadventure.rooms.cabinet,new cljs.core.Keyword(null,"entryway","entryway",840125351),latadventure.rooms.entryway,new cljs.core.Keyword(null,"kitchen","kitchen",-1134129242),latadventure.rooms.kitchen,new cljs.core.Keyword(null,"office","office",-733494767),latadventure.rooms.office,new cljs.core.Keyword(null,"wizard-den","wizard-den",-1854796612),latadventure.rooms.wizard_den], null),new cljs.core.Keyword(null,"dais","dais",59303308),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"office","office",-733494767)),new cljs.core.Keyword(null,"dais","dais",59303308),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"cabinet","cabinet",245597793)),new cljs.core.Keyword(null,"cabinet","cabinet",245597793),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"entryway","entryway",840125351)),new cljs.core.Keyword(null,"entryway","entryway",840125351),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"kitchen","kitchen",-1134129242)),new cljs.core.Keyword(null,"office","office",-733494767),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"wizard-den","wizard-den",-1854796612));

//# sourceMappingURL=rooms.js.map?rel=1522181797541