const express = require('express');
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class ClientesModel{
   
    async createConCoopropietario(clienteData) {
	    const { Nombre, Direccion, Localidad, DNI, Telefono, Correo, NombreCoo, TelefonoCoo } = clienteData;
	    const con = connectionDb.promise();
	    const data = await con.query("CALL CrearNuevoClienteConCooPropietario(?,?,?,?,?,?,?,?)", [Nombre, Direccion, Localidad, DNI, Correo, Telefono, NombreCoo, TelefonoCoo]);
	    console.log("error: ", data);
	    return data[0];
	}
    
    async createSinCoopropietario(Nombre,Direccion,Localidad,DNI,Telefono,Correo){
        const con = connectionDb.promise();
        const data = await con.query("CALL CrearNuevoClienteSinCooPropietario(?,?,?,?,?,?)",[Nombre,Direccion,Localidad,DNI,Correo,Telefono]);
        console.log("error: ",data);
        return data[0];
    }

    async getAllSinCOO(){
        const con = connectionDb.promise();
        const data = await con.query("CALL MostrarVistaClientes()");
        console.log("Error:",data);
        return data[0][0];
    }

    async getAllConCOO(){
        const con = connectionDb.promise();
        const data = await con.query("CALL MostrarVistaClientesCompleto()");
        console.log("Error:",data);
        return data[0][0];
    }

    async deleteCliente(DNI){
        const con = connectionDb.promise();
        const data = await con.query("CALL EliminarCliente(?)",DNI);
        console.log("Error:",data);
        return data;
    }


    async updateCliente(clienteData) {
        console.log(clienteData);
        const con = connectionDb.promise();
        const params = [
            clienteData.Nombres,
            clienteData.Email,
            clienteData.Localidad,
            clienteData.Direccion,
            clienteData.DNI,
            clienteData.Telefono
        ];
        if (clienteData.NombreCoo === undefined || clienteData.TelefonoCoo === undefined) {
            params.push(null, null);
        } else {
            params.push(clienteData.NombreCoo, clienteData.TelefonoCoo);
        }
        const data = await con.query("CALL ActualizarClientes(?,?,?,?,?,?,?,?)", params);
        console.log("Error:", data);
        return data;
    }

    async getDNI(DNI){
        const con = connectionDb.promise();
        const data = await con.query("CALL ConsultarUnCliente(?)",DNI);
        console.log("Error:",data);
    }
}

module.exports = ClientesModel;