const request = require('supertest');

describe('Prueba de la API de clientes', () => {
  test('Consulta a la API con DNI', async () => {
    const dni = '40007204';

    const response = await request('http://localhost:3015')
      .get('/api_gestordepagos/clientes/buscar')
      .query({ DNI: dni });
    const respuestaEsperada = [
      {
        "idCliente": 159,
        "Nombres": "JESSICA JULIA CAYLLAHUA NINA",
        "Telefono": "958961214",
        "Email": "psicologo.saludocupacional@gmail.com",
        "DNI": "40007204",
        "Direccion": "PASAJE TUPAC AMARU 207 TAHUANTINSUYO",
        "Localidad": 341,
        "NombresCoopropietario": "-",
        "TelefonoCoopropietario": "-"
      }
    ];
    expect(response.status).toBe(200);
    expect(response.body).toEqual(respuestaEsperada);
  });
});
