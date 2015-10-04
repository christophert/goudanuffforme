var express = require('express');
var router = express.Router();
var request = require('request');
var configuration = require('../config.json');

function getAPickupLine() {
    request('http://goudanufffor.me/actions/getline', function(err, resp, body) {
        if(!err && resp.statusCode == 200) {
            var line = JSON.parse(body)['pickUpLine'];
            return line;
        } else {
            return 'we failed you, there\'s no pickup line';
        }
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello");
});

router.post('/', function(req, res, next) {
    var phoneNum = req.body.phoneNum;
    var client = require('twilio')(configuration.twilio.ACCT_SID, configuration.twilio.AUTH_TOKEN);

    var pkline = getAPickupLine();

    client.messages.create({
        body: pkline,
        to: "+1"+phoneNum,
        from: "+15859783364"
    }, function(err, message) {
        if(err) {
            console.log(err); 
            res.send({
                'status': 'ERROR',
                'errmsg': message
            });
            return -1;
        }
    });
    res.send({
        'status': 'OK',
        'pickUpLine': pkline
    });
});

module.exports = router;
