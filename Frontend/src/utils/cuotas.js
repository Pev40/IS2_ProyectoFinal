import { cuotasFields } from "models/Pagos.model";

export const roundJS = (number) => {
  return Math.round(number * 100) / 100;
};

/**
 * Funcion que calcula las cuotas cuando el valor del monto es 0 o vacio
 * @param {[]} cuotas
 * @param {number} index
 * @param {number} saldo
 * @returns
 */
export const calcCuotas = (cuotas = [], index, saldo = 0, value = 0) => {
  if (value) cuotas[index][cuotasFields.monto] = +value;
  else cuotas[index][cuotasFields.monto] = 0;

  if (index > 0) {
    if (!value)
      cuotas[index][cuotasFields.saldo] = roundJS( cuotas[index - 1][cuotasFields.saldo]  );
      let saldoInicial = roundJS(cuotas[index - 1][cuotasFields.saldo]);
    for (let i = index; i < cuotas.length; i++) {
      saldoInicial -= cuotas[i][cuotasFields.monto];
      cuotas[i][cuotasFields.saldo] = roundJS(saldoInicial);
    }
    return cuotas;
  }

  if (!value) cuotas[index].saldo = roundJS(saldo);

  let saldoInicial = saldo;
  for (let i = 0; i < cuotas.length; i++) {
    saldoInicial -= cuotas[i][cuotasFields.monto];
    cuotas[i][cuotasFields.saldo] = roundJS(saldoInicial);
  }
  return cuotas;
};

export const calcCuotasFinanciar = (cuotas) => {
  let array = [];
  let acumulador = 0;
  for (let index = 0; index < cuotas.length; index++) {
    array.unshift(cuotas[index][cuotasFields.saldo]);
    acumulador += cuotas[index][cuotasFields.saldo];
  }
  return { array, acumulador };
};

export function generarArrayCuotas(CantidadCoutas, Monto) {
  let couta = roundJS((Monto / CantidadCoutas));
  let ArrayCoutas = [];
  for (let i = 0; i < CantidadCoutas; i++) {
    ArrayCoutas.unshift(couta);
  }
  let acumulador;
  acumulador = roundJS(couta * (CantidadCoutas - 1));
  Monto = Monto - acumulador;
  ArrayCoutas[ArrayCoutas.length - 1] = roundJS(Monto);
  console.log("Array de Coutas: ", ArrayCoutas);
  return ArrayCoutas;
}

export function editarCouta(
  numeroCouta,
  MontoAModificar,
  MontoActual,
  ArrayCoutas
) {
  if (numeroCouta === ArrayCoutas.length) {
    let ArrayCoutas2 = ArrayCoutas;
    ArrayCoutas2[numeroCouta - 1].monto = MontoAModificar;
    let CantidadPagada = MontoActual - MontoAModificar;
    let CantidadAPagar = roundJS(CantidadPagada);

    let coutasPendientes = ArrayCoutas2.length - 1;
    let coutaNueva = roundJS((CantidadAPagar / coutasPendientes));
    for (let i = 0; i < ArrayCoutas2.length - 1; i++) {
      ArrayCoutas2[i].monto = coutaNueva;
    }
    /**
     * Ajustar Saldo
     */
    ArrayCoutas2[numeroCouta - 1].saldo = 0;
    ArrayCoutas2[0].saldo = roundJS(MontoActual - coutaNueva);
    if (!MontoAModificar) {
      for (let i = numeroCouta - 1; i > 0; i--) {
        if (
          !MontoAModificar &&
          i === numeroCouta - 1 &&
          MontoAModificar === 0
        ) {
          ArrayCoutas2[numeroCouta - 2].saldo = 0;
        } else {
          if (i < numeroCouta - 2)
            ArrayCoutas2[i].saldo = roundJS(ArrayCoutas2[i + 1].saldo + coutaNueva);
        }
      }
      return ArrayCoutas2;
    }

    for (let i = numeroCouta - 2; i > 0; i--) {
      if (MontoAModificar > 0) {
        ArrayCoutas2[i].saldo = roundJS(ArrayCoutas2[i + 1].saldo + coutaNueva);
      }
    }

    return ArrayCoutas2;
  }

  if (numeroCouta < ArrayCoutas.length) {
    // console.log("SEGUNDA CONDICIOóN");
    let ArrayCoutas2 = ArrayCoutas;
    ArrayCoutas2[numeroCouta - 1].monto = +MontoAModificar;

    let CantidadPagada = 0;
    for (let i = 0; i < numeroCouta; i++) {
      CantidadPagada = CantidadPagada + ArrayCoutas2[i].monto;
    }
    CantidadPagada = Math.round(CantidadPagada * 100) / 100;
    let coutasPendientes = ArrayCoutas2.length - numeroCouta;
    let CantidadPendiente = MontoActual - CantidadPagada;
    let coutaNueva =
      Math.round((CantidadPendiente / coutasPendientes) * 100) / 100;

    //let couta = parseFloat(Math.round(CantidadPendiente/coutasPendientes*100)/100);

    //console.log('Cambio de Couta: ',coutaNueva, " Cantidad Pendiente: ",CantidadPendiente, "Cantidad Pagada ", CantidadPagada, "Monto de ingreso: ",MontoActual);
    for (let i = numeroCouta; i < ArrayCoutas2.length - 1; i++) {
      ArrayCoutas2[i].monto = coutaNueva;
    }
    let saldo = CantidadPendiente - coutaNueva * (coutasPendientes - 1);
    //console.log("SAldo, ", saldo);
    ArrayCoutas2[ArrayCoutas2.length - 1].monto = Math.round(saldo * 100) / 100;

    //console.log(CantidadPendiente,"Cuanto es la Couta ", coutaNueva, "Cantidad de Coutas",coutasPendientes);
    //console.log('Cambio de Couta: ',coutaNueva, " Monto: ",CantidadPendiente);
    for (let i = numeroCouta - 1; i < ArrayCoutas2.length - 1; i++) {
      if (i === 0 || i < 0) {
        ArrayCoutas2[i].saldo = roundJS(MontoActual - ArrayCoutas2[i].monto);
      } else {
        ArrayCoutas2[i].saldo = roundJS(
          ArrayCoutas2[i - 1].saldo - ArrayCoutas2[i].monto
        );
      }
    }

    return ArrayCoutas2;
  }
}
