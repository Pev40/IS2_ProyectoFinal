/**
 * Librerias
 */
 const express = require("express");
 const router = express.Router();
 
 /*
  Modelos
  */
const LocalidadModel = require("../../models/localidad.model"); 
const localidadesDb  = new LocalidadModel();

 class LocalidadesController {
    constructor(){}
    async getAll(){
        var result = localidadesDb.getDistritosPeru();
        const data = await result.catch((err)=>{
            console.log ("Controller Error: ",err);
            return null;
        })
        return data;
    }

 }
 module.exports = LocalidadesController;