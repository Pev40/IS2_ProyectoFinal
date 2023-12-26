const bcrypt = require("bcryptjs");
const { toHash, compareHash } = require('../../libs/encriptado');

describe('Función toHash', () => {
    test('Cifra correctamente una contraseña', () => {
      const plaintextPassword = 'password123';
      const hashedPassword = toHash(plaintextPassword);
  
      // Verifica si el resultado del cifrado existe y es diferente a la contraseña original
      expect(hashedPassword).toBeDefined();
      expect(hashedPassword).not.toEqual(plaintextPassword);
      // Puedes agregar más aserciones según lo esperado de esta función
    });
  });
  

describe('Función compareHash', () => {
    test('Compara una contraseña con su hash correspondiente', () => {
      const plaintextPassword = 'password123';
      const hashedPassword = bcrypt.hashSync(plaintextPassword, bcrypt.genSaltSync(10));
  
      const isMatch = compareHash(plaintextPassword, hashedPassword);
      expect(isMatch).toBe(true);
      // Añade más aserciones según lo esperado de esta función
    });
  
    test('Compara una contraseña incorrecta con su hash correspondiente', () => {
      const plaintextPassword = 'password123';
      const incorrectPassword = 'wrongpassword';
      const hashedPassword = bcrypt.hashSync(plaintextPassword, bcrypt.genSaltSync(10));
  
      const isMatch = compareHash(incorrectPassword, hashedPassword);
      expect(isMatch).toBe(false);
      // Añade más aserciones según lo esperado de esta función
    });
  });