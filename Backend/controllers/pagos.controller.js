const express = require('express');
const PagosModel = require('../models/pagos.model');
const PagosDb = new PagosModel();
const esBisiesto = (year) => {
    return (year % 400 === 0) ? true :
        (year % 100 === 0) ? false :
            year % 4 === 0;
};


function roundJS(number) {
  return Math.round(number * 100) / 100;
}
class PagosController{

    constructor(){}

    async getPagosCliente(idContrato){
      let result =  PagosDb.verPagosCliente(idContrato);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      })
      return data[0][0];

    }

    async armarFechaFinal(mes, anho) {
      if (esBisiesto(anho) && mes === 2) {
        let fechaFin = `${anho}-${mes}-29`;
        return fechaFin;
      }
  
      if (mes < 13) {
        console.log(mes);
        if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
          let fechaFin = `${anho}-${mes}-31`;
          console.log(fechaFin);
          return fechaFin;
        } else {
          let fechaFin = `${anho}-${mes}-30`;
          console.log(fechaFin);
          return fechaFin;
        }
      }
    }



    async proyeccionEspecifica(mes,anho){
      try {
      var resultSoles = await PagosDb.calcularProyecciónIntervaloSolesEspecifico(mes,anho);
      console.log(resultSoles);
      if(resultSoles.Soles == null){resultSoles.Soles = 0;  }
      let resultDolares = await PagosDb.calcularProyecciónIntervaloDolaresEspecifico(mes,anho);
      if(resultDolares.Dolares == null){resultDolares.Dolares = 0;  }
      
      console.log(resultSoles);
      resultSoles.Dolares = roundJS(resultDolares.Dolares);
      
      let resondeo = roundJS(resultSoles.Soles);
      console.log("Mi resultado interno: ",resondeo);
      resultSoles.Soles = resondeo;
      console.log("SAlida: ", resultSoles);
      const data = resultSoles;
      return data; 
      } catch (error) {
        console.log(error);
        return null;
      }
    }
    async proyeccionIntervalo(FechaInicio,FechaFin){
      try {
      console.log(typeof(FechaInicio,FechaFin));
      
      const resultSoles = await PagosDb.calcularProyecciónIntervaloSolesIntervalo(FechaInicio,FechaFin);
      let prueba  = resultSoles;
      console.log(typeof prueba.Soles)
      if(prueba.Soles == null ){resultSoles.Soles = 0;  }
      var resultDolares = await PagosDb.calcularProyecciónIntervaloDolaresIntervalo(FechaInicio,FechaFin);
      if(resultDolares.Dolares == null){resultDolares.Dolares = 0;  }
      
      console.log(resultSoles);
      resultSoles.Dolares = resultDolares.Dolares;
      let resondeo = roundJS(resultSoles.Soles);
      console.log("Mi resultado interno: ",resondeo);
      resultSoles.Soles = resondeo;
      console.log("SAlida: ", resultSoles);
      const data = resultSoles;
      return data; 
      } catch (error) {
        console.log("Error Proyeccion Intervalo: ",error)
        return null;
      }
    }


    async proyeccionIntervaloMESES_PROBLEMATICOS(mesInicial,anhoInicial,mesFinal,anhoFinal){
      try {
      console.log(typeof(mesInicial,anhoInicial,mesFinal,anhoFinal));
      
      const resultSoles = await PagosDb.calcularProyecciónIntervaloSolesIntervaloProblematico(fechaInicial,FechaFin);
      let prueba  = resultSoles;
      console.log(typeof prueba.Soless)
      if(prueba.Soles == null ){resultSoles.Soles = 0;  }
      var resultDolares = await PagosDb.calcularProyecciónIntervaloDolaresIntervaloProblematico(fechaInicial,FechaFin);
      if(resultDolares.Dolares == null){resultDolares.Dolares = 0;  }
      
      console.log(resultSoles);
      resultSoles.Dolares = resultDolares.Dolares;
      console.log("SAlida: ", resultSoles);
      const data = resultSoles;
      return data; 
      } catch (error) {
        console.log("Error Proyeccion Intervalo: ",error)
        return null;
      }
    }

    async update(idPago, idEstado){
      console.log(typeof(FechaInicia),typeof(FechaFin));
      var result =  PagosDb.actualizarPagoCliente(idPago,idEstado);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      })
      return data;
    }

    async createObjects(idLote, coutasIniciales, coutasFinanciadas) {
      try {
        for (const coutaInicial of coutasIniciales) {
          console.log("Coutas iniciales: ", "\n Datos:", coutaInicial);
          let monto = coutaInicial.monto;
          let fecha = coutaInicial.fecha;
          let saldo = coutaInicial.saldo;
          let result = await PagosDb.createPagoInicial(idLote, monto, fecha, saldo);
        }
  
        for (const coutaFinanciada of coutasFinanciadas) {
          let monto = coutaFinanciada.monto;
          let fecha = coutaFinanciada.fecha;
          let saldo = coutaFinanciada.saldo;
          let result = await PagosDb.createPagoFinanciamiento(idLote, monto, fecha, saldo);
        }
  
        const data = await result.catch((err) => {
          console.log("Controller Error: ", err);
          return null;
        });
  
        return data;
      } catch (error) {
        return new Error('Problema en el controlador de pagos, atte. TI');
      }
    }

}

module.exports = PagosController;