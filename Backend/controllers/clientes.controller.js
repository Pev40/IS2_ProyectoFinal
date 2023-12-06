/**
 * Librerias
 */
 const express = require("express");
 const router = express.Router();
 
 /*
  Modelos
  */
 const ClientesModel = require("../models/clientes.model");
 const clientesDb = new ClientesModel();

 class ClientesController {
    constructor (){}
    async getAllSimple(){
        var result = clientesDb.getAllSinCOO();
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null;
        })
        return data;
    }

    async getAllConCOO(){
        var result = clientesDb.getAllConCOO();
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null;
        })
        return data;
    }

    async createCliente(Nombres,Direccion,Localidad,DNI,Telefono,Email,NombreCoo,TelefonoCoo){
        console.log(Nombres,Direccion,Localidad,DNI,Telefono,Email,NombreCoo,TelefonoCoo);
        if( NombreCoo == 'null' || NombreCoo == 'NULL' || NombreCoo == null || NombreCoo == '' || NombreCoo== undefined){
            var result = clientesDb.createSinCoopropietario(Nombres,Direccion,Localidad,DNI,Telefono,Email);

        }else{
            var result = clientesDb.createConCoopropietario(Nombres,Direccion,Localidad,DNI,Telefono,Email,NombreCoo,TelefonoCoo);
        }
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null;
        })
        return data;
    }
    async deleteCliente(DNI){
        var result = clientesDb.deleteCliente(DNI);
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null;
        })
        return data;
    }

    async actualizarCliente(Nombres,Email,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo){
        console.log(Nombres,Email,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo);
        if( NombreCoo == 'null' || NombreCoo == 'NULL' || NombreCoo == null || NombreCoo == '' || NombreCoo== undefined){
            var result = clientesDb.updateCliente(Nombres,Email,Direccion,Localidad,DNI,Telefono,undefined,undefined);
        }
        var result = clientesDb.updateCliente(Nombres,Email,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo);
        const data = await result.catch((err)=>{
            console.log('Error Controller',err);
            return null;
        })
        return data;
    }
    
    async getClienteDNI(DNI){
        var result = clientesDb.getDNI(DNI);
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null;
        })
        return data;
    }
    

 }
 module.exports = ClientesController;