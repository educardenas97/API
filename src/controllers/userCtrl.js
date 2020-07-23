const userDAO = require('../database/userDAO');

exports.setOneUser = async (req) => {
    let registrationDate = Date.now();
    const userDoc = {
        'firstName':req.body.firstName,
        'lastName':req.body.lastName,
        'pass':req.body.pass,
        'email':req.body.email,
        'career':req.body.career,
        'phoneNumber':req.body.phoneNumber,
        'registrationDate': registrationDate
    };
    return( await userDAO.insertOne(userDoc) );
}

exports.findOneUser = async (req) => {
    return await userDAO.findOne();
}

exports.deleteAllUsers = async(req) => {
    return( await userDAO.deleteAll());
}