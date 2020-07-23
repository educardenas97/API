const userDAO = require('../database/userDAO');

exports.setOneUser = async (req) => {
    return( await userDAO.insertOne(req.body) );
}

exports.deleteAllUsers = async(req) => {
    return( await userDAO.deleteAll());
}