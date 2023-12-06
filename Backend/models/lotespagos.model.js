const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class LotesPagosModel{

    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("CALL MostrarVistaManteminientoExtendido(); ")
        console.log("error: ",data);
        return data[0][0];
    }
    async getAllContraido(){
        const con = connectionDb.promise();
        const data = await con.query("CALL MostrarVistaManteminiento();");
        console.log("error: ",data);
        return data[0][0];
    }

    async updateEstadoYPrecio(idLote,idEstado,Precio){
        const con = connectionDb.promise();
        const data = await con.query("CALL ActualizarEstadoLotePrecio(?,?,?)",[idLote,idEstado,Precio]);
        console.log("error: ",data);
        return data;
    }


    async updateEstado(idLote,idEstado){
        const con = connectionDb.promise();
        const data = await con.query("CALL ActualizarEstadoLote(?,?)",[idLote,idEstado]);
        console.log("error: ",data);
        return data;
    }

    async searchPorID(idLote){
        const con = connectionDb.promise();
        const data = await con.query("CALL BusquedaDeLotePorID(?)",idLote);
        console.log("error: ",data);
        return data[0][0];
    }
    async searchPorLetraYNumero(Letra,Numero){
        const con = connectionDb.promise();
        const data = await con.query("CALL BusquedaDeLotePorLetraYNumero(?,?)",[Letra,Numero]);
        console.log("error: ",data);
        return data[0][0];
    }

    async getAllContraidoMikonos(){
        const con = connectionDb.promise();
        const data = await con.query("CALL MostrarVistaManteminientoMikonos();");
        console.log("error: ",data);
        return data[0][0];
    }

}
module.exports = LotesPagosModel;