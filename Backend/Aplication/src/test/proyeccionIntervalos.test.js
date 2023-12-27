const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);

afterAll(() => {
  server.close(); // Cierra el servidor al terminar todas las pruebas
});

test('Proyección Por Intervalos desde el endpoint /api_gestordepagos/pagos/proyeccion/intervalo', async () => {
  // Datos de prueba
  const requestData = {
    FechaFin: "2022-02-28",
    FechaInicio: "2022-02-01",
  };

  // Realizar la solicitud HTTP
  const response = await api
    .post('/api_gestordepagos/pagos/proyeccion/intervalo')
    .send(requestData);

  // Verificar que la respuesta sea la esperada
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/application\/json/);

  const responseData = response.body;
  // Ajusta las expectativas según la estructura real de la respuesta que esperas
  expect(responseData).toEqual({
    "Soles": 0,
    "Dolares": 0
});
});