var express = require('express');
var router = express.Router();

router.get('/getline', function(req, res, next){
	var word1;
	var word2;
	var word3;
	var word4;
	var result;
	switch(Math.floor((Math.random()*17)+1){
		case 1:
			//code
			result = "Hey "+word1+" did you fall from "+word2+" because you're "+word3+" is "+word4;
			break;
		case 2:
			var rando = (Math.floor((Math.random()*3)+1);
			if(rando == 1){
				result = "Are you a magnet, because I'm attracted to you.";
			}
			else if(rando == 2){
				result = "Are you a candle, because I'm hot for you.";
			}
			else{
				result = "Are you a lamp, because I'm bright for you.";
			}
			break;
		case 3:
			//code
			result = "You make me "+word1+" like a "+word2+" on a(n) "+word3+".";
			break;
		case 4:
			//code
			result = word1+". It's an icebreaker."; 
			break;
		case 5:
			//code
			result = "I must be a "+word1+" because I've fallen for you.";
			break;
		case 6:
			//code
			result = "Hey, didn't I seee your name in the dictionary under "+word1+".";
			break;
		case 7:
			//code
			result = "There' only one thing I want to change about you, and that's your "+word1;
			break;
		case 8:
			var rando = (Math.floor((Math.random()*3)+1);
			if(rando == 1)
				result = "Kiss me if I'm wrong, but 2+2=5, right?";
			else if(rando == 2)
				result = "Kiss me if I'm wrong, but dinosaurs still exist, right?";
			else
				result = "Kiss me if I'm wrong, but tommorow's Friday, right?";
			break;
		case 9:
			//code
			result = "If "+word1+" lasts forever, will you be my "+word1+"?";
			break;
		case 10:
			//code
			result = "Your "+word1+" look so lonely, would they like to meet mine?";
			break;
		case 11:
			//code
			result = "Hey, don't I know you? Yeah, you're the "+word1+" with the "+word2+" "+word3+".";
			break;
		case 12:
			//code
			result = "If I told you that you had a great "+word1+", would you hold it against me?";
			break;
		case 13:
			//code
			result = "Were you arrested earlier, because its gotta be illegal to look that "+word1+".";
			break;
		case 14:
			//code
			result = "How you doin?";
			break;
		case 15:
			//code
			result = "Hey baby! You want some "+word1+" with that "+word2+"?";
			break;
		case 16:
			//code
			result = "Your "+word1+" looks heavy, can I hold it for you?"; 
			break;
		case 20:
			//code
			result = "I've been wondering, do your "+word1+" taste a good as they look?";
			break;
	}
	res.send({
		'pickUpLine': result
	});
});














