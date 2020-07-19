const userDAO = require("../database/userDAO");

exports.signUp = (req,res,next) => {
    console.log(req.body);
    userDAO.insertOne(req.body);
    res.json({
        'name': 'recibe'
    });
};
