var express = require('express');
var router = express.Router();
var request = require('request');

function dispatchResult(res, result) {
    res.send({
        'pickUpLine':   result
    });
}

router.get('/', function(req, res, next) {
    res.send('test');
});

router.get('/getline', function(req, res, next){
	var word1;
	var word2;
	var word3;
	var word4;
	var result;
	switch(Math.floor((Math.random()*16)+1)) {
		case 1:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
				word4 = JSON.parse(body)['word'];
                request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/person/json', function(error, response, body){
                    word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*5)+1)];
                    request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/tower/json', function(error, response, body){
                        word2 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*7)+1)];
                        request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/appendage/json', function(error, response, body){
                            word3 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*6)+1)];
                            result = "Hey "+word1+" did you fall from "+word2+" because you're "+word3+" is "+word4;
                            dispatchResult(res, result);
                        });
                    });
                });
			});
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
			dispatchResult(res, result);
			break;
		case 3:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=150000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
				word1 = JSON.parse(body)['word'];
                request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=noun-plural&minCorpusCount=150000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
                    word2 = JSON.parse(body)['word'];
                    request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=noun-plural&minCorpusCount=150000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
                        word3 = JSON.parse(body)['word'];
                        result = "You make me "+word1+" like a "+word2+" on a(n) "+word3+".";
                        dispatchResult(res, result);
                    });
                });
            });
            break;
        case 4:
			request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/icy/json', function(error, response, body){
                word1 = JSON.parse(body)['adjective']['syn'][Math.floor((Math.random()*7)+1)];
                result = word1+". It's an icebreaker."; 
                dispatchResult(res, result);
			});
			break;
		case 5:
			request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/ball/json', function(error, response, body){
                word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*6)+1)];
                result = "I must be a "+word1+" because I've fallen for you.";
                dispatchResult(res, result);
			});
			break;
		case 6:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word1 = JSON.parse(body)['word'];
                result = "Hey, didn't I seee your name in the dictionary under "+word1+".";
                dispatchResult(res, result);
			});
			break;
		case 7:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=150000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word1 = JSON.parse(body)['word'];
                result = "There's only one thing I want to change about you, and that's your "+word1;
                dispatchResult(res, result);
			});
			break;
		case 8:
			var rando = Math.floor((Math.random()*3)+1);
			if(rando == 1)
				result = "Kiss me if I'm wrong, but 2+2=5, right?";
			else if(rando == 2)
				result = "Kiss me if I'm wrong, but dinosaurs still exist, right?";
			else
				result = "Kiss me if I'm wrong, but tommorow's Friday, right?";
			dispatchResult(res, result);
			break;
		case 9:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=15000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function(error, response, body){
                word1 = JSON.parse(body)['word'];
                result = "If "+word1+" lasts forever, will you be my "+word1+"?";
                dispatchResult(res, result);
			});
			break;
		case 10:
			request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/arm/json', function(error, response, body){
                word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*10)+1)];
                result = "Your "+word1+" look so lonely, would they like to meet mine?";
                dispatchResult(res, result);
			});
			break;
		case 11:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word2 = JSON.parse(body)['word'];
                request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/appendage/json', function(error, reponse, body){
                    word3 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*5)+1)];
                    request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/person/json', function(error, response, body){
                        word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*5)+1)];
                        result = "Hey, don't I know you? Yeah, you're the "+word1+" with the "+word2+" "+word3+".";
                        dispatchResult(res, result);
                    });
                });
			});
			break;
		case 12:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=150000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word1 = JSON.parse(body)['word'];
                result = "If I told you that you had a great "+word1+", would you hold it against me?";
                dispatchResult(res, result);
			});
			break;
		case 13:
			request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a4a67090f5a1551d064670f528901c73a351b7fedc7a3e898', function(error, response, body){
                word1 = JSON.parse(body)['word'];
                result = "Were you arrested earlier, because its gotta be illegal to look that "+word1+".";
                dispatchResult(res, result);
			});
			break;
		case 14:
			result = "How you doin?";
			dispatchResult(res, result);
			break;
		case 15:
			request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/fries/json', function(error, response, body){
                word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*8)+1)];
                request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/hotdog/json', function(error, response, body){
                    word2 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*11)+1)];
                    result = "Hey baby! You want some "+word1+" with that "+word2+"?";
                    dispatchResult(res, result);
                });
            });
			break;
		case 16:
			request('http://words.bighugelabs.com/api/2/1b764ed15e63ce1aca7988445461e523/back/json', function(error, response, body){
                word1 = JSON.parse(body)['noun']['syn'][Math.floor((Math.random()*6)+1)];
                result = "Your "+word1+" looks heavy, can I hold it for you?"; 
                dipatchResult(res, result);
			});
			break;
		case 20:
			//code, jk this one doesnt go in production because too innappropriate/sexy
			result = "I've been wondering, do your "+word1+" taste a good as they look?";
			break;
	}
});

module.exports = router;
