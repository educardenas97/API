let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/userCtrl');

router.use( (req, res, next) => {
    console.log(`req method: ${req.method}`);
    next();
});

router.get('/', async (req,res) => res.json( await userCtrl.findOneUser(req)) );
router.put('/', async (req,res) => res.json( await userCtrl.updateOneUser(req)) );
router.post('/', async (req,res) => res.send( await userCtrl.setOneUser(req)) );
router.delete('/', async (req,res) => res.send( await userCtrl.deleteOneUser(req)) );

router.get('/career', async (req,res) => res.json( await userCtrl.findUsers(req)) );


//Only dev functions
router.delete('/all', async (req,res) => res.send( await userCtrl.deleteAllUsers(req)) );
router.get('*', (req,res) => res.send('Not found ' + req.method) );

module.exports = router;