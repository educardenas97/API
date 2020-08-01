let express = require('express');
let router = express.Router();
let productCtrl = require('../controllers/productCtrl');

router.use('/', (req,res,next) => {
    console.log(`req method: ${req.method}`);
    next();
});

router.post('/', async (req,res) => {
    res.json( await productCtrl.setProduct(req.body));
});

router.get('/', async (req,res) => {
    res.json( await productCtrl.getProduct(req.body));
});

router.put('/', async (req,res) => {
    res.json( await productCtrl.updateProduct(req.body));
});

router.delete('/', async (req,res) => {
    res.json( await productCtrl.deleteProduct(req.body));
});

router.get('/all', (req, res) => {
    console.log(req);
    res.json(req.body.date);
});

module.exports = router;