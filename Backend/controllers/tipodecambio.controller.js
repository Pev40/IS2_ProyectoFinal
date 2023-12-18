const express = require('express');
const TiposDeCambioModel = require('../models/tipodecambio.model');

const tipoDeCambioDb = new TiposDeCambioModel();

class TipoDeCambioController{

    async get(){
        let result = tipoDeCambioDb.getNow();
        const data = await result.catch((err) =>{
            console.log('Controller error',err);
            return null;
        })
        return data;
    }

    async prueba(DOLAR){
        let result = tipoDeCambioDb.updateCambioDolar(DOLAR);
        const data = await result.catch((err) =>{
            console.log('Controller error',err);
            return null;
        })
        return data;
    }

    async updateTipoDeCambio(DOLAR){
        if(DOLAR>=0){
        let result = tipoDeCambioDb.updateCambioDolar(DOLAR);
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