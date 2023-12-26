
const express = require('express');
const router = express.Router();
/**
 * Documentación Completa
 */
const AdministradorController = require('../controllers/administrador.controller');
const administradorDb = new AdministradorController();

router.get('/',async(req,res)=>{
    const info = await administradorDb.getAdministradores();
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));

})

router.post('/create',async(req,res)=>{

  const {
    Nombres,Apellidos,DNI,Email,Password
  } = req.query;
  console.log(Nombres,Apellidos,DNI,Email,Password);
  if (Password && Nombres && Apellidos && DNI  && Email ){
   const info = await administradorDb.createAdministrador(Nombres,Apellidos,DNI,Email,Password);

   res.setHeader("Content-Type", "application/json");
   if (info.error) {
       console.log("Error Ruta")
       res.status(info.error).end(JSON.stringify(info)).json({
       status: "ERROR",
     });
     return;
   }
   res.status(200).end(JSON.stringify(info));


  }else{   
  const info = await administradorDb.createAdministrador(req.body.Nombres,req.body.Apellidos,req.body.DNI,req.body.Email,req.body.Password);
  res.setHeader("Content-Type", "application/json");
  if (info.error) {
      console.log("Error Ruta")
      res.status(info.error).end(JSON.stringify(info)).json({
      status: "ERROR",
    });
    return;
  }
  res.status(200).end(JSON.stringify(info));

}
})


router.get('/buscarIDPorDNI',async(req,res)=>{
    const info = await administradorDb.getAdministradoresPorToken(req.query.DNI);
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));

})


router.put('/password',async(req,res)=>{
  const { PasswordNueva, DNI } = req.body;
  const info = await administradorDb.actualizarPassword(PasswordNueva,PasswordNueva,DNI);
  res.setHeader("Content-Type", "application/json");
  if (info.error) {
    res.status(info.error).end(JSON.stringify(info)).json({
      status: "ERROR",
    });
    return;
  }
  return res.end(JSON.stringify(info));
})

router.delete('/eliminar',async(req,res)=>{
  const info = await administradorDb.deleteAdministrador(req.query.DNI);
  res.setHeader("Content-Type", "application/json");
  if (info == null) {
    res.status(500).end(JSON.stringify(info)).json({
      status: "ERROR",
    });
    return;
  }
  res.status(200).end(JSON.stringify(info));
  
})





module.exports = router;



