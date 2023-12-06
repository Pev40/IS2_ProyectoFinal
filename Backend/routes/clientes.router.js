const express = require("express");
const ClientesController = require("../controllers/clientes.controller");
/**
 * Documentación Completa
 */
const router = express.Router();
const clientesControl = new ClientesController();

router.get("/", async (req, res) => {
  const info = await clientesControl.getAllSimple();
  res.setHeader("Content-Type", "application/json");
  if (info == null) {
    res.status(500).end(JSON.stringify(info));
    return;
  }
  res.end(JSON.stringify(info));
});

router.get("/COO", async (req, res) => {
  const info = await clientesControl.getAllConCOO();
  res.setHeader("Content-Type", "application/json");
  if (info == null) {
    res.status(500).end(JSON.stringify(info.error));
    return;
  }
  res.end(JSON.stringify(info));
});

router.post("/register", async (req, res) => {
  let info;
  const {
    Nombres, Direccion, Localidad,  DNI,  Telefono,  Email,  NombreCoo, TelefonoCoo,
  } = req.query;
  if (
    (Nombres && Direccion && Localidad && DNI && Telefono && Email)  ||   NombreCoo ||   TelefonoCoo
  ) {
    info = await clientesControl.createCliente(
      Nombres,
      Direccion,
      Localidad,
      DNI,
      Telefono,
      Email,
      NombreCoo,
      TelefonoCoo
    );
  } else {
    info = await clientesControl.createCliente(
      req.body.Nombres,
      req.body.Direccion,
      req.body.Localidad,
      req.body.DNI,
      req.body.Telefono,
      req.body.Email,
      req.body.NombreCoo,
      req.body.TelefonoCoo
    );
  }
  res.setHeader("Content-Type", "application/json");
  if ( info == null) {
    return res.status(500).json({
      status: "ERROR",
    });
    
  }else{
    return res.status(200).json({ status: "ok" });
  }
});

router.delete("/eliminar", async (req, res) => {
  const info = await clientesControl.deleteCliente(req.query.DNI);
  res.setHeader("Content-Type", "application/json");
  if (info == null) {
    return res.status(500).end(JSON.stringify(info)).json({
      status: "ERROR",
    });
    
  }
  res.json({ status: "ok" });
});

router.get("/buscar", async (req, res) => {

  const info = await clientesControl.getClienteDNI(req.query.DNI);
  res.setHeader("Content-Type", "application/json");
  if (info == null) {
    res.status(500).end(JSON.stringify(info)).json({
      status: "ERROR",
    });
    return;
  }
  res.end(JSON.stringify(info));
});
router.put('/actualizar',async(req,res)=>{
  let info;
  const {
    Nombres,
    Direccion,
    Localidad,
    DNI,
    Telefono,
    Email,
    NombreCoo,
    TelefonoCoo
  } = req.query;

  if ((Nombres && Direccion && Localidad && DNI && Telefono && Email) || NombreCoo ||TelefonoCoo ){

       info = await clientesControl.actualizarCliente(    
        Nombres,
        Email,
        Direccion,
        Number(Localidad),
        DNI,
        Telefono,
        NombreCoo,
        TelefonoCoo)

    }
  else{
    info = await clientesControl.actualizarCliente(
      req.body.Nombres,
      req.body.Email,
      req.body.Direccion,
     Number(req.body.Localidad),
      req.body.DNI,
      req.body.Telefono,
      req.body.NombreCoo,
      req.body.TelefonoCo
    );
  }

  res.setHeader("Content-Type", "application/json");
  if ( info == null) {
    return res.status(500).json({
      status: "ERROR",
    });
    
  }else{
    console.log("Esto es Info: ",info)
    return res.status(200).json({ status: "ok" });
  }



  })


module.exports = router;
