/**
 * Librerias
 */
 const express = require("express");
const LotesPagosModel = require("../models/lotespagos.model");
 const router = express.Router();
 
 /*
  Modelos
  */

const lotesPagosDb = new LotesPagosModel();

class LotesController{

    constructor(){}
    async getAllAnidada(){
        var result = lotesPagosDb.getAllContraido();
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    }

    async getAllExtendido(){
        var result = lotesPagosDb.getAll();
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    }


    async getAllExtendidoVisualizadorMikonos(){
        var result = lotesPagosDb.getAllContraidoMikonos();
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    }


    async actualizarPrecioYEstado(idLote,idEstado,Precio){
        var result = lotesPagosDb.updateEstadoYPrecio(idLote,idEstado,Precio);
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
        
    }

    async actualizarEstado(idLote,idEstado){
        var result = lotesPagosDb.updateEstado(idLote,idEstado);
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    }

    async searchIdLote(idLote){
        var result = lotesPagosDb.searchPorID(idLote);
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    
    }

    async searchLetraYNumero(Letra,Numero){
        var result = lotesPagosDb.searchPorLetraYNumero(Letra,Numero);
        const data = await result.catch((err)=>{
            console.log('controller Error: ',err);
            return null;
        })
        return data;
    
        
    }





}
module.exports = LotesController;