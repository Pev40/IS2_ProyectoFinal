const express = require('express');
const PagosController = require('../controllers/pagos.controller');



const router = express.Router();
const PagosControl = new PagosController();


router.post('/proyeccion/especifica', async (req, res) => {
  const { anho, mes } = req.body;
  const info = await PagosControl.proyeccionEspecifica(mes, anho);
  res.setHeader("Content-Type", "application/json");
  if (info.error) {
    res.status(info.error).end(JSON.stringify(info))
    return;
  }
  res.end(JSON.stringify(info));

})

router.post('/proyeccion/intervalo', async (req, res) => {
  const { FechaInicio,FechaFin } = req.body;
    const info = await PagosControl.proyeccionIntervalo(FechaInicio,FechaFin);
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info))
      return;
    }
    res.end(JSON.stringify(info));

})


router.patch('/update', async (req, res) => {

  const info = await PagosControl.update(Number(req.body.idPago), Number(req.body.idEstado));
  res.setHeader("Content-Type", "application/json");
  if (info.error) {
    res.status(info.error).end(JSON.stringify(info))
    return
  }
  res.end(JSON.stringify(info));

})


router.post('/cliente', async (req, res) => {
  try {
    let info = await PagosControl.getPagosCliente(Number(req.body.idContrato));
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));
  } catch (err) {
    return res.status(401);
  }
})



module.exports = router;

