var express = require('express');
var router = express.Router();
var configuration = require('../config.json');

function getAPickupLine() {
    return 'this should be a pickup line';
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
        res.send({
            'status': 'ERROR',
            'errmsg': message
        });
        return -1;
    });
    res.send({
        'status': 'OK',
        'pickUpLine': pkline
    });
});

module.exports = router;
