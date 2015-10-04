var express = require('express');
var router = express.Router();
var request = require('request');
var configuration = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello");
});

router.post('/', function(req, res, next) {
    var phoneNum = req.body.phoneNum;
    var client = require('twilio')(configuration.twilio.ACCT_SID, configuration.twilio.AUTH_TOKEN);

    var pkline = getAPickupLine();
    var result;
    request('http://direct.goudanufffor.me/actions/getline', function(err, resp, body) {
        console.log("err: ", err, " resp: ", resp, " body: ", body);
        if(!err && resp.statusCode == 200) {
            console.log(body);
            var pkline = JSON.parse(body).pickUpLine;
            client.messages.create({
                body: pkline,
                to: "+1"+phoneNum,
                from: "+15859783364"
            }, function(err, message) {
                if(err) {
                    console.log(err); 
                    result = {
                        'status': 'ERROR',
                        'errmsg': message
                    };
                } else {
                    result = {
                        'status': 'OK',
                        'pickUpLine': pkline
                    };
                }
                res.send(result);
            });
        } else {
            res.send({
                'status': 'ERROR',
                'errmsg': err
            });
        }
    });
});

module.exports = router;
