const express = require('express');
const administradorRouter = require('./administrador.router');
const tipoDeCambioRouter = require('./tipodecambio.router');
const localidadesRouter = require('./localidades.router');
const contratoRouter = require('./contratos.router');
const clientesRouter = require('./clientes.router');
const mikonosRouter = require('./mikonos.router');
const lotesRouter = require('./lotes.router');
const pagosRouter = require('./pagos.router');
const loginRouter = require('./login.router');
function routerApi(app){
    const router = express.Router();
    app.use('/api_gestordepagos_mikonos',router);
    router.use('/administrador',administradorRouter);
    router.use('/localidades',localidadesRouter);
    router.use('/clientes',clientesRouter);
    router.use('/zafiro',mikonosRouter);
    router.use('/lotes',lotesRouter);
    router.use('/dolar',tipoDeCambioRouter);
    router.use('/pagos',pagosRouter);
    router.use('/contratos',contratoRouter);
    router.use('/login',loginRouter);
}

module.exports = routerApi;
