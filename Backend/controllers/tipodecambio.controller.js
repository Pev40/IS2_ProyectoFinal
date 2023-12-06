const express = require('express');
const TiposDeCambioModel = require('../models/tipodecambio.model');

const tipoDeCambioDb = new TiposDeCambioModel();

class TipoDeCambioController{
    constructor(){}

    async get(){
        var result = tipoDeCambioDb.getNow();
        const data = await result.catch((err) =>{
            console.log('Controller error',err);
            return null;
        })
        return data;
    }

    async prueba(DOLAR){
        var result = tipoDeCambioDb.updateCambioDolar(DOLAR);
        const data = await result.catch((err) =>{
            console.log('Controller error',err);
            return null;
        })
        return data;
    }

    async updateTipoDeCambio(DOLAR){
        if(DOLAR>=0){
        var result = tipoDeCambioDb.updateCambioDolar(DOLAR);
        const data = await result.catch((err) =>{
            console.log('Controller error',err);
            return null;
        })
        return data;
        }else{
        return null;
        }

    }

}

module.exports = TipoDeCambioController;