const userDAO = require("../database/userDAO");

exports.signUp = (req,res,next) => {
    console.log("req:" + req.body);
    userDAO.insertOne(req.body).catch(console.log(true));
    res.json({
        'name': 'sha'
    });
};
