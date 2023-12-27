const request = require('supertest');
const express = require('express');
const app = express();
const loginRouter = require('../routes/login.router');

app.use(express.json());
app.use('/login', loginRouter);

describe('POST /login', () => {
  test('should respond with JSON', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'IS2@unsa.edu.com',
        Password: 'CSUNSA',
      });

    expect(response.status).toBe(200);
  });
});

