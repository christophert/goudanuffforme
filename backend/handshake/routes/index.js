var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Gouda \'nuff for me' });
});

router.get('/us', function(req, res, next) {
    res.render('about', { title: 'About' });
});

module.exports = router;
