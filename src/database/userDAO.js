let users, reservations; //comment
exports.injectDB = async function injectDB(conn) {
    if (users) {
        return;
    }
    try {
        reservations = await conn.db('reservations');
        users = await conn.db('reservations').collection("reservations");
    } catch (e) {
        console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
        );
    }
}

exports.insertOne = async function insertOne (userInfo) {
    try {
        await users.insertOne({ userInfo });
        return true;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A user with the given email already exists." };
        }
        console.error(`Error occurred while adding new user, ${e}.`);
        return { error: e };
    }
}