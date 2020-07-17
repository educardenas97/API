exports.login = (req,res,next) => {
    console.log(req.body.name);
    res.json({
        'name': 'recibe'
    })
}
