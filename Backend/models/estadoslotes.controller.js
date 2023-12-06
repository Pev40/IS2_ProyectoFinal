const express = require("express");
const router = express.Router();
const connectionDb = require("../config/db");

class EstadosDeLotesModel{

    async getAll(){
        const con = connectionDb.promise();
        const data = con.query("CALL VerEstadosDeLotes();")
        console.log("error: ",data);
        return data[0];
    }

}
module.exports = EstadosDeLotesModel;