const express = require("express");
const router = express.Router();
const connectionDb = require('../../config/dbconnections');

class TiposDePagosModel{

    async getAll(){
        const con = connectionDb.promise();
        const data = con.query("CALL MostrarEstadosLotes();")
        console.log("error: ",data);
        return data[0];
    }

}
module.exports = TiposDePagosModel;