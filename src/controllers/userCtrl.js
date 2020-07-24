const userDAO = require('../database/userDAO');

exports.setOneUser = async (req) => {
    let registrationDate = Date.now();
    const userDoc = {
        'userId':req.body.email,
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

exports.updateOneUser = async (req) => {
    
}

exports.deleteOneUser = async (req) => {
    return req.body.userId ? 
        await userDAO.deleteOne(req.body.userId) :
        ('no userId in argument');
}

exports.findOneUser = async (req) => await userDAO.findOne(req.body.email);


exports.findUsers = async (req) => {
    return await userDAO.find(req.body.career);
};

exports.deleteAllUsers = async(req) => await userDAO.deleteAll();