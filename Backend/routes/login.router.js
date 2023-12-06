const express = require('express');
const AdministradorController = require('../controllers/administrador.controller');
const router = express.Router();


const AdministradorControl = new AdministradorController();

router.post('/', async(req,res)=>{
   try {
    const info = await AdministradorControl.login(req.body.email,req.body.Password);   
    res.setHeader("Content-Type", "application/json");
    if (info.error){
      res.status(info.error).end(JSON.stringify(info))
      return
    }
    res.end(JSON.stringify(info));

} catch (error) {
  console.log("Router Error:",error);
       return res.status(401).json({
           status:'Error'
       })
   }
    
})

module.exports = router;