const request = require('supertest');
const express = require('express');
const app = express();

const clientesRouter = require('../routes/clientes.router'); 

app.use(express.json());
app.use('/clientes', clientesRouter);

describe('GET /clientes', () => {
  test('should respond with JSON', async () => {
    const response = await request(app)
      .get('/clientes');

    expect(response.status).toBe(200); 
    expect(response.header['content-type']).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true); // Verifica que la respuesta sea un array
    expect(response.body.length).toBeGreaterThan(0); // Verifica que el array no esté vacío
  });
});


