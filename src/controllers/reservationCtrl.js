const reservationDAO = require("../database/reservationDAO");

exports.setReservation = async (req,res,next) => {
    res.send(  await reservationDAO.insertOne(req.body) );
};

exports.getAllReservation = async (req,res) => {
    res.send( await reservationDAO.findAll() );
}

exports.deleteAllReservation = async (req,res) => {
    res.send( await reservationDAO.deleteAll() );
}

exports.getOneReservation = async (req,res) => {
    res.send( await reservationDAO.findOne(req.body._id) );
}