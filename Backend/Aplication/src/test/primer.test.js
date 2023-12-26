const supertest = require('supertest');
//--verbose --coverage
const {app,server} = require('../app');

const api = supertest(app);

afterEach(() => {
    server.close(); // Cierra el servidor después de cada prueba
  });
  test('Obtener administradores desde el endpoint /', async () => {
    const response = await api.get('/api_gestordepagos/administrador/');
    
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
  
    if (response.req.connection.destroy) {
      response.req.connection.destroy(); // Intenta forzar el cierre de la conexión
    }
  });
  
  test('Obtener cantidad de administradores desde el endpoint /', async () => {
    const response = await api.get('/api_gestordepagos/administrador/');
    const responseData = JSON.parse(response.text);
  
    expect(responseData.length).toBe(2);
  });

  afterAll(() => {
    server.close(); // Cierra el servidor al terminar las pruebas
  });