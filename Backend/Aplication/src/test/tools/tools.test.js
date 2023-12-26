// Importa las funciones que estás probando
const { getRandomInt } = require('../../libs/tools.js');

describe('Función getRandomInt', () => {
  test('Genera un número entero dentro del rango especificado', () => {
    const min = 5;
    const max = 15;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThan(max);
    expect(Number.isInteger(randomInt)).toBe(true);
    // Añade más aserciones según lo esperado de esta función
  });

  test('Genera un número entero dentro del rango con valores negativos', () => {
    const min = -10;
    const max = -5;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThan(max);
    expect(Number.isInteger(randomInt)).toBe(true);
    // Añade más aserciones según lo esperado de esta función con valores negativos
  });

  test('Genera un número entero en un rango grande', () => {
    const min = Number.MIN_SAFE_INTEGER;
    const max = Number.MAX_SAFE_INTEGER;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThan(max);
    expect(Number.isInteger(randomInt)).toBe(true);
    // Añade más aserciones según lo esperado de esta función con un rango grande
  });
});
