const express = require('express');
const dbconnections = require('../../config/dbconnections');
class PagosModel{

    async createPagoInicial(LoteID,Monto,FechaDePago,Saldo){
        const con = dbconnections.promise();
        const data = await con.query("CALL CrearPagoInicial(?,?,?,?)",[LoteID,Monto,FechaDePago,Saldo]);
        console.log("Error: ",data);
        return data;
    }

    async createPagoFinanciamiento(LoteID,Monto,FechaDePago,Saldo){
        const con = dbconnections.promise();
        const data = await con.query("CALL CrearPagoFinanciamiento(?,?,?,?)",[LoteID,Monto,FechaDePago,Saldo]);
        console.log("Error: ",data);
        return data;
    }

    async verPagosCliente(idContrato){
        try {
        const con = dbconnections.promise();
        const data = await con.query('CALL VerPagosClientes(?)',idContrato);
        return data;
        } catch (error) {
            console.log(error);
            return null;
        }
        
    }

    async VerPagosClientesVistaPagos(idContrato){
        const con = await dbconnections.promise();
        const data = await con.query('CALL VerPagosClientesVistaPagos(?)',idContrato);
        return data[0][0][0];
    }

    async CuantoDebePagosVencidos(idContrato){
        const con = await dbconnections.promise();
        const data = await con.query('CALL CuantoDebePagosVencidos(?)',idContrato);
        return data[0][0][0];
    }



    async actualizarPagoCliente(idCuota,idNuevoEstado){
        const con = dbconnections.promise();
        const data =  await con.query('CALL ActualizarPago(?,?)',[idCuota,idNuevoEstado]);
        return data;
    }

    async calcularProyecciónIntervaloSolesEspecifico(mes,anho){
        console.log(mes,anho);
        const con =  dbconnections.promise();
        const data = await con.query('CALL CalcularProyeccionIntervaloSolesEspecifico(?,?)',[mes,anho]);
        console.log("Error: ",data);
        return data[0][0][0];
    }

    async calcularProyecciónIntervaloDolaresEspecifico(mes,anho){
        console.log(mes,anho);
        const con =  dbconnections.promise();
        const data = await con.query('CALL CalcularProyeccionIntervaloDolaresEspecifico(?,?)',[mes,anho]);
        console.log("Error: ",data);
        return data[0][0][0];
    }

    async calcularProyecciónIntervaloSolesIntervalo(FechaInicio,FechaFin){
        console.log(FechaInicio,FechaFin);
        const con =  dbconnections.promise();
        const data = await con.query('CALL CalcularProyeccionIntervaloSoles(?,?)',[FechaInicio,FechaFin]);
        console.log("Error Soles: ",data[0][0][0]);
        return data[0][0][0];
    }

    async calcularProyecciónIntervaloDolaresIntervalo(FechaInicio,FechaFin){
        console.log(FechaInicio,FechaFin);
        const con =  dbconnections.promise();
        const data = await con.query('CALL CalcularProyeccionIntervaloDolares(?,?)',[FechaInicio,FechaFin]);
        console.log("Error Dolares: ",data[0][0][0]);
        return data[0][0][0];
    }

}
module.exports=PagosModel;