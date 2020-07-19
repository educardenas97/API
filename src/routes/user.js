var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req,res) => {
  res.send('User home page');
});
// define the about route
router.get('/about', (res,req) => {
  res.send('About users');
});
// define login route
router.post('/login', (req,res,next) => {
  userCtrl.signUp(req,res,next);
});

module.exports = router;