const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);

afterAll(() => {
  server.close(); // Cierra el servidor al terminar todas las pruebas
});
test('Obtener Datos Contrato desde el endpoint /api_gestordepagos/contratos/especifico', async () => {
  // Datos de prueba
  const requestData = {
    idContrato: 162,
  };

  // Realizar la solicitud HTTP
  const response = await api
    .get('/api_gestordepagos/contratos/especifico')
    .send(requestData);
    console.log(response);
  // Verificar que la respuesta sea la esperada
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/application\/json/);

  const responseData = response.body;
  expect(responseData).toEqual({
    "idContrato": 162,
    "Nombres": "JONATHAN DIEGO ROMAÑA VILLA",
    "Lote": "A-13",
    "NombreMoneda": "Sol",
    "idTipoDeCambio": 23,
    "Monto": 60429.7,
    "FechaInicio": "2023-03-18T05:00:00.000Z"
});
});
