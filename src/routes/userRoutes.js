var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

router.use(function timeLog(req, res, next) {
    console.log(req.body);
    next();
});

router.post('/', (req,res) => {
    res.send(userCtrl.setOneUser(req));
});


//Only dev functions
router.delete('/all',async (req,res) => {
    res.json(await userCtrl.deleteAllUsers(req));
});

module.exports = router;