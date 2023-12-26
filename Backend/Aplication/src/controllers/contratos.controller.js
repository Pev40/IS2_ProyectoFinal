const express = require("express");
const ContratosModel = require("../../models/contratos.model");
const PagosModel = require("../../models/pagos.model");

const contratosDb = new ContratosModel();
const pagosDb = new PagosModel();

class ContratosController {

  async createContrato(
    tipoMoneda,
    DNI,
    idAdmin,
    idLote,
    MontoFinal,
    FechaInicial
  ) {
    let result;
    if (tipoMoneda === 1) {
      result = contratosDb.createContratoDolar(
        DNI,
        idAdmin,
        idLote,
        MontoFinal,
        FechaInicial
      );
    }
    if (tipoMoneda === 2) {
      result = contratosDb.createContratoSoles(
        DNI,
        idAdmin,
        idLote,
        MontoFinal,
        FechaInicial
      );
    }
    try {
      const data = await result;
      return data;
    } catch (err) {
      console.log("Controller Error: ", err);
      return null;
    }
  }

  async getContratos() {
    try {
      const result = await contratosDb.verContrato();
      console.log(result);
      const result2 = result[0][0];
      for (let index = 0; index < result[0][0].length; index++) {
        const fechas = await pagosDb.VerPagosClientesVistaPagos(
          result2[index].idContrato
        );
        console.log(fechas);
        const montoPendiente = await pagosDb.CuantoDebePagosVencidos(
          result2[index].idContrato
        );
        console.log(montoPendiente);
        result2[index].Deuda = montoPendiente.Deuda;
        result2[index].CuotasVencidas = montoPendiente.CuotasVencidas;

        if (fechas === undefined) {
          if (result2[index].CuotasVencidas == 0) {
            result2[index].Estado = "Cancelado";
          } else {
            result2[index].Estado = "Pendiente";
          }
        } else {
          result2[index].SiguientePago = fechas.FechaDePago;
          result2[index].Estado = fechas.Nombre;
        }
      }
      console.log(result[0]);
      return result[0][0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getContratosID(idContrato) {
    const result = contratosDb.verContratoPorId(idContrato);
    try {
      const data = await result;
      return data[0][0][0];
    } catch (err) {
      console.log("Controller Error: ", err);
      return null;
    }
  }


  async delete(idContrato) {
    const result = contratosDb.eliminar(idContrato);
    try {
      const data = await result;
      return data;
    } catch (err) {
      console.log("Controller Error: ", err);
      return null;
    }
  }

}

module.exports = ContratosController;