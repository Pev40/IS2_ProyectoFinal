const express = require('express');
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class ClientesModel{

    async createConCoopropietario(Nombre,Direccion,Localidad,DNI,Telefono,Correo,NombreCoo,TelefonoCoo){
        const con = connectionDb.promise();
        const data = await con.query("CALL CrearNuevoClienteConCooPropietario(?,?,?,?,?,?,?,?)",[Nombre,Direccion,Localidad,DNI,Correo,Telefono,NombreCoo,TelefonoCoo]);
        console.log("error: ",data);
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


    async updateCliente(Nombres,Email,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo){
        console.log(Nombres,Email,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo);
        if(NombreCoo == undefined|| Telefono == undefined){
            const con = connectionDb.promise();
            const data = await con.query("CALL ActualizarClientes(?,?,?,?,?,?,?,?)",[Nombres,Email,Localidad,Direccion,DNI,Telefono,null,null]);
            console.log("Error:",data);
            return data; 
        }
        const con = connectionDb.promise();
        const data = await con.query("CALL ActualizarClientes(?,?,?,?,?,?,?,?)",[Nombres,Email,Localidad,Direccion,DNI,Telefono,NombreCoo,TelefonoCoo]);
        console.log("Error:",data);
        return data; 
    }

    async getDNI(DNI){
        const con = connectionDb.promise();
        const data = await con.query("CALL ConsultarUnCliente(?)",DNI);
        console.log("Error:",data);
        return data[0][0];
        
    }

}
module.exports = ClientesModel;