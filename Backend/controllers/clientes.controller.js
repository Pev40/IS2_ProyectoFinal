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

    
    async getAllSimple(){

       try {
           const result = await clientesDb.getAllSinCOO();
           return result;
       } catch (err) {
           console.log("Controller Error: ", err);
           return null;
       }
   }


   async getAllConCOO(){
       try {
           const result = await clientesDb.getAllConCOO();
           return result;
       } catch (err) {
           console.log("Controller Error: ", err);
           return null;
       }
   }

   async createCliente(params) {
       console.log(params.Nombres, params.Direccion, params.Localidad, params.DNI, params.Telefono, params.Email, params.NombreCoo, params.TelefonoCoo);
       let result;
       if (params.NombreCoo == 'null' || params.NombreCoo == 'NULL' || params.NombreCoo == null || params.NombreCoo == '' || params.NombreCoo == undefined) {
           result = clientesDb.createSinCoopropietario(params.Nombres, params.Direccion, params.Localidad, params.DNI, params.Telefono, params.Email);
       } else {
           result = clientesDb.createConCoopropietario(params.Nombres, params.Direccion, params.Localidad, params.DNI, params.Telefono, params.Email, params.NombreCoo, params.TelefonoCoo);
       }
       try {
           const data = result;
           return data;
       } catch (err) {
           console.log("Controller Error: ", err);
           return null;
       }
   }


   async deleteCliente(DNI) {
       try {
           const result = await clientesDb.deleteCliente(DNI);
           return result;
       } catch (err) {
           console.log("Controller Error: ", err);
           return null;
       }
   }


   async actualizarCliente(params) {
       console.log(params.Nombres, params.Email, params.Direccion, params.Localidad, params.DNI, params.Telefono, params.NombreCoo, params.TelefonoCoo);
       let result;
       if (params.NombreCoo == 'null' || params.NombreCoo == 'NULL' || params.NombreCoo == null || params.NombreCoo == '' || params.NombreCoo == undefined) {
           result = await clientesDb.updateCliente(params.Nombres, params.Email, params.Direccion, params.Localidad, params.DNI, params.Telefono, undefined, undefined);
       } else {
           result = await clientesDb.updateCliente(params.Nombres, params.Email, params.Direccion, params.Localidad, params.DNI, params.Telefono, params.NombreCoo, params.TelefonoCoo);
       }
       try {
           const data = result;
           return data;
       } catch (err) {
           console.log('Error Controller', err);
           return null;
       }
   }

   async getClienteDNI(DNI) {
       try {
           const result = await clientesDb.getDNI(DNI);
           return result;
       } catch (err) {
           console.log("Controller Error: ", err);
           return null;
       }
   }
}
module.exports = ClientesController;