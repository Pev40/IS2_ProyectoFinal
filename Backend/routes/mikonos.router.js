const express = require('express');
const LotesController = require('../controllers/lotes.controller');
/**
 * Documentación Completa
 */
const router = express.Router();
const lotesControl = new LotesController();

router.get('/extendido',async(req,res)=>{
    const info = await lotesControl.getAllExtendidoVisualizadorMikonos();
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

router.put('/update',async(req,res)=>{
    const info = await lotesControl.actualizarEstado(req.body.id,req.body.disponibility);
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})



module.exports = router;