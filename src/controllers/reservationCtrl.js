const reservationDAO = require("../database/reservationDAO");

exports.setReservation = async (req,res,next) => {
    res.send(  await reservationDAO.insertOne(req.body) );
};

exports.getReservation = async (req,res) => {
    res.json( await reservationDAO.find(req.body));
}

exports.getOneReservation = async (req,res) => {
    res.json( await reservationDAO.findOne(req.body) );
}

exports.deleteOneReservation = async (req,res) => {
    res.send( await reservationDAO.deleteOne(req.body) );
}

//Only dev functions
exports.getAllReservation = async (req,res) => {
    res.json( await reservationDAO.findAll() );
}

exports.deleteAllReservation = async (req,res) => {
    res.send( await reservationDAO.deleteAll() );
}