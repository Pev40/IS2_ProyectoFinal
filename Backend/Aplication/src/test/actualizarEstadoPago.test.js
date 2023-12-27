const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);

afterAll(() => {
  server.close(); // Cierra el servidor al terminar todas las pruebas
});
test('Proyección Por Intervalos desde el endpoint /api_gestordepagos/pagos/update', async () => {
  // Datos de prueba
  const requestData = {
    "idPago": 27,
    "idEstado": 1
};

  // Realizar la solicitud HTTP
  const response = await api
    .patch('/api_gestordepagos/pagos/update')
    .send(requestData);

  // Verificar que la respuesta sea la esperada
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/application\/json/);

  const responseData = response.body;
  // Ajusta las expectativas según la estructura real de la respuesta que esperas
  expect(responseData).toEqual([
    {
        "fieldCount": 0,
        "affectedRows": 0,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
    },
    null
]);
});