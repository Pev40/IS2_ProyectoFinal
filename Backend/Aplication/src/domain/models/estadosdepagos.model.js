const express = require("express");
const router = express.Router();
const connectionDb = require('../../config/dbconnections');

class EstadosDePagosModel{

    async getAll(){
        const con = connectionDb.promise();
        const data = con.query("CALL ConsultarEstadosDePagos();")
        console.log("error: ",data);
        return data[0];
    }

}
module.exports = EstadosDePagosModel;