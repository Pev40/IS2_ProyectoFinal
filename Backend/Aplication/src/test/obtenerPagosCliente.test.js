const supertest = require('supertest');
const { app, server } = require('../app');

const api = supertest(app);

afterAll(() => {
  server.close(); // Cierra el servidor al terminar todas las pruebas
});

test('Ver Pagos Por Cliente desde el endpoint /api_gestordepagos/pagos/cliente', async () => {
  // Datos de prueba
  const requestData = {
    idContrato: 162,
  };

  // Realizar la solicitud HTTP
  const response = await api
    .post('/api_gestordepagos/pagos/cliente')
    .send(requestData);

  // Verificar que la respuesta sea la esperada
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/application\/json/);

  const responseData = response.body;
  // Ajusta las expectativas según la estructura real de la respuesta que esperas
  expect(responseData).toEqual([
    {
        "idPago": 1752,
        "Tipo de Pago": "Inicial",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-03-18T05:00:00.000Z",
        "Monto": 500,
        "Saldo": 59930
    },
    {
        "idPago": 1753,
        "Tipo de Pago": "Inicial",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-03-30T05:00:00.000Z",
        "Monto": 14487,
        "Saldo": 45443
    },
    {
        "idPago": 1754,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-04-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 44686
    },
    {
        "idPago": 1755,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-05-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 43906
    },
    {
        "idPago": 1756,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-06-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 43149
    },
    {
        "idPago": 1757,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-07-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 42392
    },
    {
        "idPago": 1758,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-08-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 41635
    },
    {
        "idPago": 1759,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-09-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 40878
    },
    {
        "idPago": 1760,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-10-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 40121
    },
    {
        "idPago": 1761,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-11-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 39364
    },
    {
        "idPago": 1762,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pagado",
        "idEstadoDePago": 1,
        "FechaDePago": "2023-12-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 38607
    },
    {
        "idPago": 1763,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-01-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 37850
    },
    {
        "idPago": 1764,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-02-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 37093
    },
    {
        "idPago": 1765,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-03-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 36336
    },
    {
        "idPago": 1766,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-04-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 35579
    },
    {
        "idPago": 1767,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-05-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 34822
    },
    {
        "idPago": 1768,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-06-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 34065
    },
    {
        "idPago": 1769,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-07-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 33308
    },
    {
        "idPago": 1770,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-08-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 32551
    },
    {
        "idPago": 1771,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-09-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 31794
    },
    {
        "idPago": 1772,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-10-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 31037
    },
    {
        "idPago": 1773,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-11-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 30280
    },
    {
        "idPago": 1774,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2024-12-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 29523
    },
    {
        "idPago": 1775,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-01-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 28766
    },
    {
        "idPago": 1776,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-02-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 28009
    },
    {
        "idPago": 1777,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-03-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 27252
    },
    {
        "idPago": 1778,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-04-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 26495
    },
    {
        "idPago": 1779,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-05-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 25738
    },
    {
        "idPago": 1780,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-06-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 24981
    },
    {
        "idPago": 1781,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-07-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 24224
    },
    {
        "idPago": 1782,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-08-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 23467
    },
    {
        "idPago": 1783,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-09-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 22710
    },
    {
        "idPago": 1784,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-10-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 21953
    },
    {
        "idPago": 1785,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-11-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 21196
    },
    {
        "idPago": 1786,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2025-12-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 20439
    },
    {
        "idPago": 1787,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-01-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 19682
    },
    {
        "idPago": 1788,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-02-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 18925
    },
    {
        "idPago": 1789,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-03-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 18168
    },
    {
        "idPago": 1790,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-04-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 17411
    },
    {
        "idPago": 1791,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-05-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 16654
    },
    {
        "idPago": 1792,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-06-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 15897
    },
    {
        "idPago": 1793,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-07-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 15140
    },
    {
        "idPago": 1794,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-08-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 14383
    },
    {
        "idPago": 1795,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-09-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 13626
    },
    {
        "idPago": 1796,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-10-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 12869
    },
    {
        "idPago": 1797,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-11-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 12112
    },
    {
        "idPago": 1798,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2026-12-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 11355
    },
    {
        "idPago": 1799,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-01-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 10598
    },
    {
        "idPago": 1800,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-02-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 9841
    },
    {
        "idPago": 1801,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-03-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 9084
    },
    {
        "idPago": 1802,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-04-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 8327
    },
    {
        "idPago": 1803,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-05-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 7570
    },
    {
        "idPago": 1804,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-06-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 6813
    },
    {
        "idPago": 1805,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-07-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 6056
    },
    {
        "idPago": 1806,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-08-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 5299
    },
    {
        "idPago": 1807,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-09-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 4542
    },
    {
        "idPago": 1808,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-10-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 3785
    },
    {
        "idPago": 1809,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-11-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 3028
    },
    {
        "idPago": 1810,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2027-12-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 2271
    },
    {
        "idPago": 1811,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2028-01-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 1514
    },
    {
        "idPago": 1812,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2028-02-15T05:00:00.000Z",
        "Monto": 757,
        "Saldo": 757
    },
    {
        "idPago": 1813,
        "Tipo de Pago": "Financiamiento",
        "Nombre": "Pendiente",
        "idEstadoDePago": 2,
        "FechaDePago": "2028-03-15T05:00:00.000Z",
        "Monto": 780,
        "Saldo": 0
    }
]);
});
