const express = require('express');
const LotesController = require('../controllers/lotes.controller');
/**
 * Documentación Completa
 */
const router = express.Router();
const lotesControl = new LotesController();
router.get('/anidado',async(req,res)=>{
    const info = await lotesControl.getAllAnidada();
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

router.get('/extendido',async(req,res)=>{
    const info = await lotesControl.getAllExtendido();
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})


router.put('/actualizar',async(req,res)=>{
    const {idLote,idEstado,Precio} = req.body;
    const info = await lotesControl.actualizarPrecioYEstado(parseInt( idLote),parseInt(idEstado),Number(Precio));
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

router.get('/buscarID',async(req,res)=>{
    const {idLote} = req.query;
    const info = await lotesControl.searchIdLote(parseInt(idLote));
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

router.get('/buscarLetraYNumero',async(req,res)=>{
    const {Letra,Numero} = req.query;
    const info = await lotesControl.searchLetraYNumero(Letra.toUpperCase(),Number(Numero));
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

module.exports = router