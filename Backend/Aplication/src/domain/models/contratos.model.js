const express = require('express');
const connectionDb = require('../../config/dbconnections');

class ContratosModel{
    async createContratoDolar(DNI,idAdmin,idLote,MontoFinal,FechaPagoInicial){
        const con = dbconnections.promise();
        const data = await con.query("CALL CrearNuevoContratoDolar(?,?,?,?,?)",[DNI,idAdmin,idLote,MontoFinal,FechaPagoInicial]);
        return data;//Te retorna el idContrato para usarlo en pagos
    }
    async createContratoSoles(DNI,idAdmin,idLote,MontoFinal,FechaPagoInicial){
        const con =  dbconnections.promise();
        const data =  await con.query("CALL CrearNuevoContratoSoles(?,?,?,?,?)",[DNI,idAdmin,idLote,MontoFinal,FechaPagoInicial]);
        return data;//Te retorna el idContrato para usarlo en pagos
    }

    async verContrato(){
        const con =  dbconnections.promise();
        const data = await con.query('CALL VerContratosActivos()');

        console.log('Data ', data);
        return data;
    }

    

    async verContratoPorId(id){
        const con =  dbconnections.promise();
        const data = await con.query('CALL VerContratos(?)',id);
        console.log('Data ', data);
        return data;
    }

    async eliminar(idContrato){
        const con = dbconnections.promise();
        const data = await con.query('CALL EliminarContrato(?)',idContrato);
        console.log('Data ', data);
        return data;
    }
}
module.exports = ContratosModel;