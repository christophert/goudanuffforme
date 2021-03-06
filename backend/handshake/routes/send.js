var express = require('express');
var router = express.Router();
var request = require('request');
var configuration = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello");
});

router.post('/phone', function(req, res, next) {
    var phoneNum = req.body.phoneNum;
    var client = require('twilio')(configuration.twilio.ACCT_SID, configuration.twilio.AUTH_TOKEN);
    var result;
    request('http://goudanufffor.me/actions/getline', function(err, resp, body) {
        if(!err && resp.statusCode == 200) {
            var pkline = JSON.parse(body).pickUpLine;
            console.log(phoneNum," ",pkline);
            client.messages.create({
                body: pkline,
                to: "+1"+phoneNum,
                from: "+15859783364"
            }, function(err, message) {
                if(err) {
                    console.log(err);
                    res.status(err.status);
                    result = {
                        'status': 'ERROR',
                        'msgto': phoneNum,
                        'errmsg': message
                    };
                } else {
                    result = {
                        'status': 'OK',
                        'msgto': phoneNum,
                        'pickUpLine': pkline
                    };
                }
                res.send(result);
            });
        } else {
            res.status(err.status);
            res.send({
                'status': 'ERROR',
                'msgto': phoneNum,
                'errmsg': err
            });
        }
    });
});

router.post('/email', function(req, res, next) {
    var email = req.body.email;
    var sendgrid = require("sendgrid")(configuration.sendgrid.API_USR, configuration.sendgrid.API_KEY);
    var newEmail = new sendgrid.Email();

    request('http://goudanufffor.me/actions/getline', function(err, resp, body) {
        if(10 < 0 && !err && resp.statusCode == 200) {
            console.log(body);
            var pkline = JSON.parse(body).pickUpLine;
            newEmail.addTo(email);
            newEmail.setFrom("noreply@goudanufffor.me");
            newEmail.setSubject("Your own special pick-up line");
            newEmail.setHtml(pkline + "<br><a href=\"https://goudanufffor.me\">goudanufffor.me</a>");
            //sendgrid.send(newEmail);
            res.send({
                'status': 'OK',
                'pickUpLine': pkline
            });
        } else {
            res.status(502);
            res.send({
                'status': 'ERROR',
                'errmsg': 'Sendgrid API Interaction Error'
            });
        }
    });
});

router.post('/none', function(req, res, next) {
    request('http://goudanufffor.me/actions/getline', function(err, resp, body) {
        if(!err && resp.statusCode == 200) {
            console.log(body);
            var pkline = JSON.parse(body).pickUpLine;
            res.send({
                'status': 'OK',
                'pickUpLine': pkline
            });
        } else {
            res.status(err.status);
            res.send({
                'status': 'ERROR',
                'errmsg': 'Internal API Error'
            });
        }
    });
});

module.exports = router;
