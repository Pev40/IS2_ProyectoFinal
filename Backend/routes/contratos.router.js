const express = require('express');
/**
 * Documentación Completa
 */
const ContratosController = require('../controllers/contratos.controller');
const PagosController = require('../controllers/pagos.controller');
const router = express.Router();

const ContratosControl = new ContratosController();
const PagosControl = new PagosController();

router.get('/',async(req,res)=>{

  const info = await ContratosControl.getContratos();
  console.log("RouterINFO: ",info);
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})

router.post('/create',async(req,res)=>{
  try{
    info = await ContratosControl.createContrato(Number(req.body.idDivisa),req.body.DNI,Number(req.body.idAdmin),Number( req.body.idLote),Number( req.body.MontoFinal),req.body.FechaInicial);
    info2 = await PagosControl.createObjects(Number(req.body.idLote),req.body.cuotasInicial,req.body.cuotasFinanciar);  
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error || info2.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.status(200).json({ status: "ok" });
  
  } catch (error) {
    return res.status(500).json({status: 'error'});
  }
  
  })

router.get('/especifico',async(req,res)=>{

  const info = await ContratosControl.getContratosID(req.body.idContrato);
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})


router.delete('/delete',async(req,res)=>{

  const info = await ContratosControl.delete(Number(req.body.idContrato));
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
})








module.exports = router;