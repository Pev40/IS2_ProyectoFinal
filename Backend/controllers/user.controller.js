/**
 * Librerias
 */
const express = require('express');
const router = express.Router();

/*
Modelos
*/
const ClientesModel = require('../models/clientes.model');
const LocalidadModel = require('../models/localidad.model');
const TiposDeCambioModel = require('../models/tipodecambio.model');
const clienteDb = ClientesModel();
const tipoDeCambiodb = TiposDeCambioModel();
const localidadDb = LocalidadModel();


class UserController{


    /**
     * Controladores Locaciones
     */


    async getLocalizaciones(){
        const result = localidadDb.getDistritosPeru();
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
            })
            return data;
    }


    /**
     * Controladores para CDUV
     */
    constructor(){}
    async createCliente(Nombre,Direccion,Localidad,DNI,Telefono,Correo,NombreCoo,TelefonoCoo){
        if(NombreCoo === null && TelefonoCoo == null){
            var result = clienteDb.createSinCoopropietario(Nombre,Direccion,Localidad,DNI,Telefono,Correo);
        }else{
            var result = clienteDb.createConCoopropietario(Nombre,Direccion,Localidad,DNI,Telefono,Correo,NombreCoo,TelefonoCoo);
        }
        
        const data = await result.catch((err)=>{
        console.log("Controller Error: ",err);
        return null
        })
        return data;
    }

    async deleteCliente(DNI){
        const result = clienteDb.deleteCliente(DNI);
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
        })
        return data;
    }

    async updateCliente(Nombre,Direccion,Localidad,DNI,Telefono,Correo,NombreCoo,TelefonoCoo){
        const result = clienteDb.updateCliente(Nombre,Correo,Direccion,Localidad,DNI,Telefono,NombreCoo,TelefonoCoo);
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
        })
        return data;
    }

    async viewClientes(){
        const result = clienteDb.getAll();
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
        })
        return data;
    }

/**
 * Controladores Vista Tipo de Cambio
 */

    async createNuevoTipoDeCambio(NuevoCambio){
        const result = tipoDeCambiodb.updateNuevoTipoDeCambio(NuevoCambio);
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
        })
        return data;
    }

    async getTipoDeCambioActual(){
        const result = tipoDeCambiodb.getNow();
        const data = await result.catch((err)=>{
            console.log("Controller Error: ",err);
            return null
        })
        return data;
    }

/**
 * 
 */

}
module.exports = UserController;