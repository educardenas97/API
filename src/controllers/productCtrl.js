productDAO = require('../database/productDAO');

exports.setProduct = async (body) => {
    let registrationDate = Date.now();
    const squema = {
        'productCode': body.code,
        'registrationDate': registrationDate,
        'features': {
            'ram': body.ram,
            'cpu': body.cpu,
            'disk': body.disk,
            'gpu': body.gpu
        },
        'maintenance': [
            {
                'date': null,
                'description': null,
            }
        ]
    };
    return await productDAO.insertOne(squema);
};

exports.getProduct = async (body) => {
    return await productDAO.findProduct(body);
};