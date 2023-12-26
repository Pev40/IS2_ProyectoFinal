const { getRandomInt } = require("./tools.js");

  /**
   * Genera un array de cuotas iniciales aleatorias.
   * @param {Número de cuotas iniciales} cantidad
   * @returns {Objeto con un array de cuotas y su acumulador}
   */
  function generarArrayCuotasIniciales(cantidad) {
    let Monto, Acumulador = 0, ArraySalida = [];
    for (let i = 0; i < cantidad; i++) {
      Monto = getRandomInt(100, 15000);
      Acumulador = Acumulador + Monto;
      ArraySalida.unshift(Monto);
    }
    return { ArraySalida, Acumulador };
  }
  
  /**
   * Genera un array de cuotas a financiar.
   * @param {Número de cuotas a financiar} CantidadCoutas
   * @param {Monto total a financiar} Monto
   * @returns {Array de cuotas}
   */
  function generarArrayCuotas(CantidadCoutas, Monto) {
    let cuota = parseFloat(Math.round(Monto / CantidadCoutas * 100) / 100);
    let ArrayCoutas = [];
    for (let i = 0; i < CantidadCoutas; i++) {
      ArrayCoutas.unshift(cuota);
    }
    let acumulador = cuota * (CantidadCoutas - 1);
    Monto = Monto - acumulador;
    ArrayCoutas[ArrayCoutas.length - 1] = parseFloat(Math.round(Monto * 100) / 100);
    return ArrayCoutas;
  }
  
  /**
   * Edita una cuota específica en el array de cuotas.
   * @param {Número de la cuota a editar} numeroCouta
   * @param {Nuevo monto para la cuota} MontoAModificar
   * @param {Monto total actual} MontoActual
   * @param {Array de cuotas} ArrayCoutas
   * @returns {Array de cuotas actualizado}
   */
  function editarCouta(numeroCouta, MontoAModificar, MontoActual, ArrayCoutas) {
    if (numeroCouta == ArrayCoutas.length) {
      const ArrayCoutas2 = ArrayCoutas.slice();
      ArrayCoutas2[numeroCouta - 1] = MontoAModificar;
      let CantidadPagada = 0;
      for (let i = 0; i < ArrayCoutas2.length - 1; i++) {
        CantidadPagada += ArrayCoutas2[i];
      }
      CantidadPagada = Math.round(CantidadPagada * 100) / 100;
      const coutasPendientes = ArrayCoutas2.length - 1;
      const CantidadPendiente = CantidadPagada - MontoAModificar;
      const coutaNueva = Math.round(CantidadPendiente / coutasPendientes * 100) / 100;
      for (let i = 0; i < ArrayCoutas2.length - 1; i++) {
        ArrayCoutas2[i] = coutaNueva;
      }
      return ArrayCoutas2;
    } else {
      ArrayCoutas[numeroCouta - 1] = MontoAModificar;
      let CantidadPagada = 0;
      for (let i = 0; i < numeroCouta; i++) {
        CantidadPagada += ArrayCoutas[i];
      }
      CantidadPagada = Math.round(CantidadPagada * 100) / 100;
      const coutasPendientes = ArrayCoutas.length - numeroCouta;
      const CantidadPendiente = MontoActual - CantidadPagada;
      const coutaNueva = Math.round(CantidadPendiente / coutasPendientes * 100) / 100;
      for (let i = numeroCouta; i < ArrayCoutas.length - 1; i++) {
        ArrayCoutas[i] = coutaNueva;
      }
      const saldo = CantidadPendiente - (coutaNueva * (coutasPendientes - 1));
      ArrayCoutas[ArrayCoutas.length - 1] = Math.round(saldo * 100) / 100;
      return ArrayCoutas;
    }
  }
  
  module.exports = {
    generarArrayCuotasIniciales,
    generarArrayCuotas,
    editarCouta
  };