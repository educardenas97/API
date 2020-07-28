var express = require('express');
var router = express.Router();
var reservationCtrl = require('../controllers/reservationCtrl');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req,res) => {
  reservationCtrl.getReservation(req,res);
});

router.post('/', (req,res,next) => {
  reservationCtrl.setReservation(req,res,next);
});

router.delete('/',(req,res) => {
  reservationCtrl.deleteOneReservation(req,res);
});


// only dev routes
router.get('/all', (req,res) => {
  reservationCtrl.getAllReservation(req,res);
})

router.delete('/all',(req,res) => {
  reservationCtrl.deleteAllReservation(req,res);
});



module.exports = router;