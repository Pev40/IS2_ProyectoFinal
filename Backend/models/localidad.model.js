const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class LocalidadModel{

    async getDistritosPeru(){
        const con = connectionDb.promise();
        const data = await con.query("CALL DistritosPeru()");
        console.log("error: ",data);
        return data[0][0];
    }

}
module.exports = LocalidadModel;