var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');
const { route } = require('./reservationRoutes');

router.use( (req, res, next) => {
    console.log(req.body);
    next();
});

router.post('/', async (req,res) => {
    res.send(await userCtrl.setOneUser(req));
});

router.get('/', async (req,res) => {
    res.json(await userCtrl.setOneUser(req));
});


//Only dev functions
router.delete('/all', async (req,res) => {
    res.send(await userCtrl.deleteAllUsers(req));
});

router.get('*', (req,res) => {
    res.send('Not found ' + req.method);
});

module.exports = router;