const request = require('supertest');
const express = require('express');
const app = express();

// Importa tu configuración de la aplicación y tus rutas
const routerApiMikonos = require('../routes/administrador.router');  // Ajusta la ruta según la ubicación real de tu aplicación

app.use(express.json());
app.use('/api_gestordepagos_mikonos/administrador', routerApiMikonos);

describe('GET /api_gestordepagos_mikonos/administrador/buscarIDPorDNI', () => {
    
    let dni = 29573830;
    test('should respond with JSON containing idAdministrador', async () => {
    const response = await request(app).get('/api_gestordepagos_mikonos/administrador/buscarIDPorDNI?DNI='+dni);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      idAdministrador: 94
    });
  });
});
