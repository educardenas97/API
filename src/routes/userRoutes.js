var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

router.use( (req, res, next) => {
    console.log(req.body);
    next();
});

router.post('/', async (req,res) => {
    res.send(await userCtrl.setOneUser(req));
});


//Only dev functions
router.delete('/all', async (req,res) => {
    res.json(await userCtrl.deleteAllUsers(req));
});

module.exports = router;