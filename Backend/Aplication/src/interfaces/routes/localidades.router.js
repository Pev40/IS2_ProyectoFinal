const express = require('express');
const LocalidadesController = require('../controllers/localidades.controller');
/**
 * Documentación Completa
 */
const router = express.Router();
const localidadeControl = new LocalidadesController();
router.get('/',async(req,res)=>{
    const info = await localidadeControl.getAll();
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.status(200).end(JSON.stringify(info));
})

module.exports = router
