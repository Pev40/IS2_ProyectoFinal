require("dotenv").config();
const createError = require('http-errors');
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require('./routes');

/**
 * Creación de la app
 */
const app = express();
//Definición de puerto
const PORT = process.env.PORT || 3015;
// Carga de dependencias
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
routerApi(app);



/**
 * VISUALIZADOR DE PAGOS //////////
 */

 const usersRoutesVisualizador = require("./Visualizador/users/users.routes");
 const lotesRoutesVisualizador = require("./Visualizador/lotes/lotes.routes");

/**
 * Rutas del visualizador de lotes
 */

 app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "thissdasda",
  });
});

app.use(usersRoutesVisualizador);
app.use(lotesRoutesVisualizador);

/**
 * FUNCIONES ESPECIFICAS DEL APP
 */
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports=app;
