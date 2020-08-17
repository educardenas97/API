const validator = require('validator');

exports.schema = (data) => {
    data.personalData.email.map( (email) => {
        console.log( validator.isEmail(email) );
    });   
}