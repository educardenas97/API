let resCollection, reservation; 


exports.injectDB = async function injectDB(conn) {
    if (reservation) {
        return;
    }
    try {
        resCollection = await conn.db('reservations');
        reservation = await conn.db('reservations').collection("reservations");
    } catch (e) {
        console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
        );
    }
}


exports.findAll = async () => {
    try {
        let cursor = await reservation.find({});
        return await cursor.toArray();
    } catch (e) {
        console.error(`Error occurred while find all reservations, ${e}.`);
        return { error: e };
    }
}

exports.deleteAll = async () => {
    try {
        let cursor = await reservation.deleteMany({});
        return await cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete all reservations, ${e}.`);
        return { error: e };
    }
}

exports.insertOne = async (reservationInfo) => {
    try {
        let result = await reservation.insertOne({ reservationInfo });
        return result.insertedId;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A reservation already exists." };
        }
        console.error(`Error occurred while adding new reservation, ${e}.`);
        return { error: e };
    }
}