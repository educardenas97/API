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

exports.updateProduct = async (body) => {
    const features = {
        "cpu": body.cpu,
        "ram": body.ram,
        "disk": body.disk,
        "gpu": body.gpu,
        "SO": body.so
    };
    return await productDAO.updateFeatures(body.productCode,features);
};

exports.deleteProduct = async (body) => {
    return await productDAO.deleteProduct(body.productCode);
};