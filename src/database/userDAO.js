let user, usrCollection;

exports.injectDB = async (conn) => {
    if (user) {
        return;
    }
    try {
        usrCollection = await conn.db('reservations');
        user = await conn.db('reservations').collection("users");
    } catch (e) {
        console.error(
        `Unable to establish a collection handle in userDAO: ${e}`
        );
    }
};


exports.findOne = async () => {
    try {
        let cursor = await user.findOne({});
        return cursor;
    } catch (e) {
        console.error(`Error occurred find a random user, ${e}.`);
        return { error: e };
        
    }
}

exports.insertOne = async (userData) => {
    try {
        let cursor = await user.insertOne({...userData},{ w : "majority"});
        return cursor.insertedId;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A user already exists." };
        }
        console.error(`Error occurred while adding new user, ${e}.`);
        return { error: e };
        
    }
}

exports.deleteAll = async () => {
    try {
        let cursor = await user.deleteMany({}, { w : "majority"});
        return cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete all users, ${e}.`);
        return { error: e };       
    }
}