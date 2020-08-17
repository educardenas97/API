const userDAO = require('../database/userDAO');

exports.setOneUser = async (req) => { 
    let registrationDate = Date.now();
    const userDoc = {
        'userId':req.body.email,
        'registrationDate': registrationDate,
        'personalData' : {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'pass': req.body.pass,
            'email': [req.body.email],
            'phoneNumber': [req.body.phoneNumber],
        },
        'academicData' : {
            'role': req.body.role,
            'career': req.body.career,
        },    
    };
    return( await userDAO.insertOne(userDoc) );
}

exports.updateOneUser = async (req) => {
    return req.body.userId ? 
        await userDAO.updateOne(req.body.userId,req.body) : 
        'no userId in argument';
}


exports.updatePersonalData = async (req) => {
    const personalData = {
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
        'pass': req.body.pass,
        'email': [req.body.email],
        'phoneNumber': [req.body.phoneNumber],
    };
    return req.body.userId ?
        await userDAO.updatePersonalData(req.body.userId, personalData) :
        'no userId in argument';
}

exports.updateAcademicData = async (req) => {
    const academicData = {
        'role': req.body.role,
        'career': req.body.career
    };
    return req.body.userId ?
        await userDAO.updateAcademicData(req.body.userId,academicData) :
        'no userId in argument';
}


exports.deleteOneUser = async (req) => {
    return req.body.userId ? 
        await userDAO.deleteOne(req.body.userId) :
        ('no userId in argument');
}

exports.deletePersonalData = async (req) => {
    return req.body.userId ?
        await userDAO.deletePersonalData(req.body.userId) :
        ('no userId in argument');
}

exports.deleteAcademicData = async (req) => {
    return req.body.userId ?
        await userDAO.deleteAcademicData(req.body.userId) :
        ('no userId in argument');
}

exports.findUser = async (req) => {
    return await userDAO.find(req.body.userId);
}

exports.deleteAllUsers = async(req) => await userDAO.deleteAll();