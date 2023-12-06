  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }






function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 function gererarArrayCoutasIniciales(cantidad){
      let Monto,Acumulador=0,ArraySalida =[] ;
      for (let i = 0; i < cantidad; i++) {
      Monto = getRandomInt(100,15000);
      Acumulador = Acumulador + Monto;
      ArraySalida.unshift(Monto); 
      }
      return {ArraySalida, Acumulador}
}


  /**
   * 
   * @param {Se refiere a las cantidad de cotas a financiar } CantidadCoutas 
   * @param {Monto a financiar} Monto 
   * @returns 
   */
function generarArrayCuotas(CantidadCoutas, Monto) {
    let couta = parseFloat(Math.round(Monto/CantidadCoutas*100)/100);
    console.log(couta);
    let ArrayCoutas = [];
    for (let i = 0; i < CantidadCoutas; i++) {
        ArrayCoutas.unshift(couta);        
    }
    let acumulador;
    acumulador = couta * (CantidadCoutas-1)
    console.log(acumulador);
    Monto = Monto-acumulador;
    console.log(Monto);
    ArrayCoutas[ArrayCoutas.length - 1] = parseFloat(Math.round( Monto*100)/100);

    return ArrayCoutas;
}






function editarCouta(numeroCouta, MontoAModificar,MontoActual,ArrayCoutas){  
if(numeroCouta  == ArrayCoutas.length )
{
  ArrayCoutas2 = ArrayCoutas;
  ArrayCoutas2[numeroCouta-1] = MontoAModificar;
  let CantidadPagada =0;// 
  for (let i = 0; i < ArrayCoutas2.length-1; i++) {
    CantidadPagada = CantidadPagada+ArrayCoutas2[i];    
  }
  CantidadPagada = Math.round(CantidadPagada*100)/100;
  console.log("Cantidad a Cambiar ",CantidadPagada);
  let coutasPendientes = ArrayCoutas2.length -1;
  CantidadPendiente = CantidadPagada -MontoAModificar ;
  let coutaNueva = Math.round(CantidadPendiente/coutasPendientes*100)/100;
  for (let i = 0; i < ArrayCoutas2.length-1; i++) {
    ArrayCoutas2[i] = coutaNueva;    
  }
 return ArrayCoutas2;


}else{


  ArrayCoutas[numeroCouta-1] = MontoAModificar;
  let CantidadPagada =0;
  for (let i = 0; i < numeroCouta; i++) {
    CantidadPagada = CantidadPagada+ArrayCoutas[i];    
  }
  CantidadPagada = Math.round(CantidadPagada*100)/100;
  let coutasPendientes = ArrayCoutas.length - numeroCouta;
  CantidadPendiente = MontoActual - CantidadPagada 
  let coutaNueva = Math.round(CantidadPendiente/coutasPendientes*100)/100;

  //let couta = parseFloat(Math.round(CantidadPendiente/coutasPendientes*100)/100);

  //console.log('Cambio de Couta: ',coutaNueva, " Cantidad Pendiente: ",CantidadPendiente, "Cantidad Pagada ", CantidadPagada, "Monto de ingreso: ",MontoActual);
  for (let i = numeroCouta; i < ArrayCoutas.length-1; i++) {
    ArrayCoutas[i] = coutaNueva;    
  }
  let saldo = CantidadPendiente - (coutaNueva*(coutasPendientes-1))
  //console.log("SAldo, ", saldo);
  ArrayCoutas[ArrayCoutas.length-1] =  Math.round(saldo*100)/100; 

  //console.log(CantidadPendiente,"Cuanto es la Couta ", coutaNueva, "Cantidad de Coutas",coutasPendientes);
  //console.log('Cambio de Couta: ',coutaNueva, " Monto: ",CantidadPendiente);

  return ArrayCoutas;
}
}

/**
 * TEST CASO 1 y 2
 */

var MontoInicial = 35000; 
var ArrayCoutasIniciales = gererarArrayCoutasIniciales(3);
console.log("Arrat Coutas Iniciales : " ,ArrayCoutasIniciales);
var MontoInicial = MontoInicial - ArrayCoutasIniciales.Acumulador;
arrat = generarArrayCuotas(37,MontoInicial);
console.log("Coutas a Financiar ",arrat);
arrat2 = editarCouta(6,1500,MontoInicial,arrat);
console.log("Cambio",arrat2);

/**
 * TEST 3
 */

 var MontoInicial = 35000; 
 var ArrayCoutasIniciales = gererarArrayCoutasIniciales(3);
 console.log("Arrat Coutas Iniciales : " ,ArrayCoutasIniciales);
 var MontoInicial = MontoInicial - ArrayCoutasIniciales.Acumulador;
 arrat = generarArrayCuotas(15,MontoInicial);
 console.log("Coutas a Financiar ",arrat);
 arrat2 = editarCouta(15,1500,MontoInicial,arrat);
 console.log("Cambio",arrat2);