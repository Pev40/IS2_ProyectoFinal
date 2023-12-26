const express = require("express");
const router = express.Router();
const connectionDb = require('../../config/dbconnections');

class TiposDeCambioModel{

    async updateCambioDolar(actualizarCambio){
        const con = connectionDb.promise();
        const data = await con.query("CALL ActualizarCambioDeDolar(?)",actualizarCambio);
        console.log("error SQL: ",data);
        return data;
    }

    async getNow(){
        const con = connectionDb.promise();
        const data = await con.query("CALL ConsultarCambioDeDolar()");
        console.log("error SQL: ",data);
        return data[0][0][0];
    }

}
module.exports = TiposDeCambioModel;