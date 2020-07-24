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


exports.findOne = async (email) => {
    try {
        let cursor = await user.find({ email: email}).project({ _id: 0, registrationDate: 0 });
        return await cursor.toArray();
    } catch (e) {
        console.error(`Error occurred find a random user, ${e}.`);
        return { error: e };
    }
}

exports.find = async (career) => {
    try {
        let cursor = await user
            .find({career: career})
            .sort({registrationDate: 1})
            .project({ _id: 0, registrationDate: 0 });
        
        return await cursor.toArray();
    } catch (e) {
        console.error(`Error occurred find user, ${e}.`);
        return { error: e };  
    }
}

exports.insertOne = async (userData) => {
    try {
        let cursor = await user.insertOne({...userData},{ w : "majority"});
        return userData.email;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A user already exists." };
        }
        console.error(`Error occurred while adding new user, ${e}.`);
        return { error: e };
        
    }
}

exports.deleteOne = async (userId) => {
    try {
        let cursor = await user.deleteOne({userId: userId},{ w: 'majority'});
        return cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete user, ${e}.`);
        return { error: e };       
    }
}

//Only dev function
exports.deleteAll = async () => {
    try {
        let cursor = await user.deleteMany({}, { w : "majority"});
        return cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete all users, ${e}.`);
        return { error: e };       
    }
}