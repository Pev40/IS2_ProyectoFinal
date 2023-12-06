const express = require('express');
const TipoDeCambioController = require('../controllers/tipodecambio.controller');
/**
 * Documentación Completa
 */
const router = express.Router();
const tipoDeCambioControl = new TipoDeCambioController();

router.get('/now',async(req,res)=>{
    const info = await tipoDeCambioControl.get();
    if (info.error){
        res.status(info.error).end(JSON.stringify(info))
        return ;
      }
      console.log(info);
      res.end(JSON.stringify( info));

})


router.put('/update',async(req,res)=>{
    const DOLAR = req.body.Dolar;
    try {
    const info = await tipoDeCambioControl.updateTipoDeCambio(DOLAR);
    if (info.error || info == null){
      res.status(info.error).end(JSON.stringify(info))
      return ;
    }
      res.end(JSON.stringify( info));
  } catch (error) {
    return res.status(501);   
  }
})

module.exports = router;