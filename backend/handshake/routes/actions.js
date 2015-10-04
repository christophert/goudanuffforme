var express = require('express');
var router = express.Router();

router.get('/getline', function(req, res, next){
	var word1;
	var word2;
	var word3;
	var word4;
	var result;
	switch(/*Math.floor((Math.random()*17)+1*/3){
		case 1:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
				word4 = JSON.parse(body)['word'];
			});
			result = "Hey "+word1+" did you fall from "+word2+" because you're "+word3+" is "+word4;
			break;
		case 2:
			var rando = Math.floor((Math.random()*3)+1);
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
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=15000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
				word1 = JSON.parse(body)['word'];
			});
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=noun-plural&minCorpusCount=15000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
				word2 = JSON.parse(body)['word'];
			});
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=noun-plural&minCorpusCount=15000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
                word3 = JSON.parse(body)['word'];
            });

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
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word1 = JSON.parse(body)['word'];
            });
			result = "Hey, didn't I seee your name in the dictionary under "+word1+".";
			break;
		case 7:
			//code
			result = "There' only one thing I want to change about you, and that's your "+word1;
			break;
		case 8:
			var rando = Math.floor((Math.random()*3)+1);
			if(rando == 1)
				result = "Kiss me if I'm wrong, but 2+2=5, right?";
			else if(rando == 2)
				result = "Kiss me if I'm wrong, but dinosaurs still exist, right?";
			else
				result = "Kiss me if I'm wrong, but tommorow's Friday, right?";
			break;
		case 9:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=15000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
				word1 = JSON.parse(body)['word'];
			});
			result = "If "+word1+" lasts forever, will you be my "+word1+"?";
			break;
		case 10:
			//code
			result = "Your "+word1+" look so lonely, would they like to meet mine?";
			break;
		case 11:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', functio(error, response, body){
                word2 = JSON.parse(body)['word'];
            });
			result = "Hey, don't I know you? Yeah, you're the "+word1+" with the "+word2+" "+word3+".";
			break;
		case 12:
			//code
			result = "If I told you that you had a great "+word1+", would you hold it against me?";
			break;
		case 13:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', functio(error, response, body){
                word1 = JSON.parse(body)['word'];
            });
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














