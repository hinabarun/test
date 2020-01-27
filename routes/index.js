var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Azure' });

var model = {
    tite : 'Azure',
    message : process.env.message || "This is Nabarun"
};
res.render ('index',model);

});

module.exports = router;
