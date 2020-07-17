var express = require('express');
var router = express.Router();
var user = require('../controllers/userCtrl');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('User home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About users');
});

router.post('/login',function(req,res,next){
  user.login(req,res,next);
});

module.exports = router;