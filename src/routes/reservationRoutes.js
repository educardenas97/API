var express = require('express');
var router = express.Router();
var reservationCtrl = require('../controllers/reservationCtrl');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req,res) => {
  res.send('User home page');
});

// only dev routes
router.get('/all', (req,res) => {
  reservationCtrl.getAllReservation(req,res);
})

router.delete('/all',(req,res) => {
  reservationCtrl.deleteAllReservation(req,res);
});

// define post route
router.post('/', (req,res,next) => {
  reservationCtrl.setReservation(req,res,next);
});


module.exports = router;