var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello");
});

router.post('/', function(req, res, next) {
    var phoneNum = req.body.phoneNum;
    res.send({
        'pickUpLine':   req.body.phoneNum
    });
});

module.exports = router;
