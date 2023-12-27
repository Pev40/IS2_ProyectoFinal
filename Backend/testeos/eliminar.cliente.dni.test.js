const axios = require('axios');

describe('Prueba de la API de eliminación de clientes', () => {
  test('Eliminar cliente por DNI', async () => {
    const dni = '46088101';

    const response = await axios.delete(`http://localhost:3015/api_gestordepagos/clientes/eliminar?DNI=${dni}`);
    const responseData = response.data;

    const respuestaEsperada = {
      "status": "ok"
    };
    expect(response.status).toBe(200);
    expect(responseData).toEqual(respuestaEsperada);
  });
});
