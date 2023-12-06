export const pagosFields = {
  cliente: "DNI",
  proyecto: "proyecto",
  usuario: "idAdmin",
  lote: "idLote",
  moneda: "idDivisa",
  precio: "MontoFinal",
  fechaInicial: "FechaInicial",
  cuotasInicial: "cuotasInicial",
  cuotasFinanciar: "cuotasFinanciar",

  cantidadCuotasInicial: "cantidadCuotasMontoInicial",
  fechaInicioCuotasInicial: "fechaInicioCuotasMontoInicial",
  cantidadCuotasFinanciar: "cantidadCuotasMontoFinanciar",
  fechaInicioCuotasFinanciar: "fechaInicioCuotasMontoFinanciar",
};

export const cuotasFields = {
  numero: "n",
  fecha: "fecha",
  monto: "monto",
  saldo: "saldo",
  tipo: "tipo",
  estado: "estado",
};

export const contratosFields = {
  cliente: "Nombres",
  mz: "Letra",
  lote: "Numero",
  moneda: "NombreMoneda",
  fechaInicio: "FechaInicio",
  fechaPago: "SiguientePago",
  estadoPago: "Estado",
  cuotasVencidas: "CuotasVencidas",
  deudaPendiente: "Deuda",
  precio: "MontoFinal",
  tipoCambio: "TipoDeCambio",
};
