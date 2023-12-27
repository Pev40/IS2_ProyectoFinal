const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);


afterAll(() => {
    server.close(); // Cierra el servidor al terminar todas las pruebas
  });
test('Eliminar Contrato y Pagos desde el endpoint /api_gestordepagos/contratos/delete', async () => {
  // Datos de prueba
  const requestData = {
    idContrato: 138,
  };

  // Realizar la solicitud HTTP
  const response = await api
    .delete('/api_gestordepagos/contratos/delete')
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
afterAll(() => {
    server.close(); // Cierra el servidor al terminar todas las pruebas
  });
