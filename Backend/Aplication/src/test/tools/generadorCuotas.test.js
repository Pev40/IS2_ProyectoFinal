const { generarArrayCuotasIniciales, generarArrayCuotas, editarCouta } = require("../../libs/generadorCuotas.js");

describe('Función generarArrayCuotasIniciales', () => {
  test('Genera un array con la cantidad de cuotas iniciales especificadas', () => {
    const cuotasIniciales = generarArrayCuotasIniciales(3);
    expect(cuotasIniciales.ArraySalida).toHaveLength(3);
    // Añade más aserciones según lo esperado de esta función
  });
});

describe('Función generarArrayCuotas', () => {
  test('Genera un array con la cantidad de cuotas especificadas', () => {
    const montoRestante = 20000;
    const cuotas = generarArrayCuotas(5, montoRestante);
    expect(cuotas).toHaveLength(5);
    // Añade más aserciones según lo esperado de esta función
  });
});

describe('Función editarCouta', () => {
  test('Edita una cuota específica dentro del array de cuotas', () => {
    const montoRestante = 20000;
    const cuotas = generarArrayCuotas(5, montoRestante);
    const cuotasEditadas = editarCouta(3, 1500, montoRestante, cuotas);

    // Verifica que la cuota editada tenga el valor esperado
    expect(cuotasEditadas[2]).toBe(1500);
    // Añade más aserciones según lo esperado de esta función
  });
});
