let product, proCollection;

exports.injectDB = async (conn) => {
    if (product) {
        return;
    }
    try {
        proCollection = await conn.db('reservations');
        product = await conn.db('reservations').collection("products");
    } catch (e) {
        console.error(
            `Unable to establish a collection handle in productDAO: ${e}`
        );
    }
};

exports.insertOne = async (squema) => {
    try {
        let cursor = await product.insertOne({ ...squema }, { w: "majority" });
        return cursor.result;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A user already exists." };
        }
        console.error(`Error occurred while adding new user, ${e}.`);
        return { error: e };
    }
};

exports.findProduct = async (squema) => {
    try {
        let cursor = await product.findOne({});
        return cursor;
    } catch (e) {
        console.error(`Error occurred while find one user, ${e}.`);
        return { error: e };
    }
};

exports.updateFeatures = async (productId,productFeatures) => {
    try {
        const newValues = { $set: {"features": {...productFeatures}} };
        let cursor = await product.updateOne({"productCode": productId}, newValues, {upsert:true} );
        return cursor.result;
    } catch (e) {
        console.error(`Error occurred while update product.features, ${e}.`);
        return { error: e }; 
    }
};

exports.deleteProduct = async (productId) => {
    try {
        let cursor = await product.deleteOne({"productCode":productId});
        return cursor.result;
    } catch (e) {
        console.error(`Error occurred while update product.academicData, ${e}.`);
        return { error: e }; 
    }
};