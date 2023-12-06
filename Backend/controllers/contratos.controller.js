const express = require("express");
const ContratosModel = require("../models/contratos.model");
const PagosModel = require("../models/pagos.model");

const contratosDb = new ContratosModel();
const pagosDb = new PagosModel();
class ContratosController {
  constructor() {}

  async createContrato(
    tipoMoneda,
    DNI,
    idAdmin,
    idLote,
    MontoFinal,
    FechaInicial
  ) {
    if (tipoMoneda === 1) {
      var result = contratosDb.createContratoDolar(
        DNI,
        idAdmin,
        idLote,
        MontoFinal,
        FechaInicial
      );
    }
    if (tipoMoneda === 2) {
      var result = contratosDb.createContratoSoles(
        DNI,
        idAdmin,
        idLote,
        MontoFinal,
        FechaInicial
      );
    }
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }

  async getContratos(){
    try {
      var result = await  contratosDb.verContrato();
      console.log(result);
      
      
      let result2 = result[0][0];
      for (let index = 0; index < result[0][0].length; index++) {
      
      let fechas = await pagosDb.VerPagosClientesVistaPagos(result2[index].idContrato);
      console.log(fechas);
      let montoPendiente = await pagosDb.CuantoDebePagosVencidos(result2[index].idContrato);
      console.log(montoPendiente);
      result2[index].Deuda = montoPendiente.Deuda;
      result2[index].CuotasVencidas = montoPendiente.CuotasVencidas;
      
      if(fechas === undefined){
        if(result2[index].CuotasVencidas == 0 ) {
          result2[index].Estado = 'Cancelado';
        } else{
          result2[index].Estado = 'Pendiente';
        }
      }else{
        
        result2[index].SiguientePago = fechas.FechaDePago;
        result2[index].Estado = fechas.Nombre;
      }
      }
      console.log(result[0]);
   
      /*const data = await  result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });*/
      
      
      return result[0][0];
    } catch (error) {
      console.log(error);
      return null;
    }
 


    

    
  }

  async getContratosID(idContrato){
    var result = contratosDb.verContratoPorId(idContrato);
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data[0][0][0];
  }


  async delete(idContrato){
    var result = contratosDb.eliminar(idContrato);
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }
  




}

module.exports = ContratosController;
