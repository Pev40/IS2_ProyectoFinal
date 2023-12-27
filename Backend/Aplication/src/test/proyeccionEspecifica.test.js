const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);

afterAll(() => {
  server.close(); // Cierra el servidor al terminar todas las pruebas
});

test('Proyección Especifica (MES - AÑO) desde el endpoint /api_gestordepagos/pagos/proyeccion/especifica', async () => {
  // Datos de prueba
  const requestData = {
    anho: 2023,
    mes: 7,
  };

  // Realizar la solicitud HTTP
  const response = await api
    .post('/api_gestordepagos/pagos/proyeccion/especifica?fechaInicio=2020-09-01&fechaFin=2021-01-01')
    .send(requestData);

  // Verificar que la respuesta sea la esperada
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/application\/json/);

  const responseData = response.body;
  // Ajusta las expectativas según la estructura real de la respuesta que esperas
  expect(responseData).toEqual({
    "Resultado": 148870,
    "Soles": 0,
    "Dolares": 0
});
});
