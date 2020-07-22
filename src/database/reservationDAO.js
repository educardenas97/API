const { query } = require("express");

let resCollection, reservation; 

exports.injectDB = async (conn) => {
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
};

exports.insertOne = async (reservationInfo) => {
    try {
        let result = await reservation.insertOne({ ...reservationInfo });
        return result.insertedId;
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            return { error: "A reservation already exists." };
        }
        console.error(`Error occurred while adding new reservation, ${e}.`);
        return { error: e };
    }
};

exports.findOne = async (reservationId) => {
    try {
        console.log(reservationId);
        return await reservation.findOne(reservationId);
    } catch (e) {
        console.error(`Error occurred while find reservation, ${e}.`);
        return { error: e };
    }
}

exports.find = async (query) => {
    try {
        console.log(query);
        let cursor = await reservation.find(query);
        return cursor.toArray();
    } catch (e) {
        console.error(`Error occurred while find reservation, ${e}.`);
        return { error: e };
    }
}

exports.deleteOne = async (reservationId) => {
    try {
        console.log(reservationId);
        let cursor = await reservation.deleteOne(reservationId);
        return await cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete all reservations, ${e}.`);
        return { error: e };
    }
};

//Only dev functions
exports.findAll = async () => {
    try {
        let cursor = await reservation.find({});
        return await cursor.toArray();
    } catch (e) {
        console.error(`Error occurred while find all reservations, ${e}.`);
        return { error: e };
    }
};

exports.deleteAll = async () => {
    try {
        let cursor = await reservation.deleteMany({});
        return await cursor.result;
    } catch (e) {
        console.error(`Error occurred while delete all reservations, ${e}.`);
        return { error: e };
    }
};