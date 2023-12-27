# Proyecto de CI/CD para Aplicación Web

## Descripción del Proyecto

Este proyecto consiste en la implementación de un pipeline de CI/CD para el desarrollo y evolución de una aplicación web. La aplicación debe contar con una interfaz gráfica de usuario, una base de datos (puede ser MySql, SQLite, MongoDB, Neo4J u otro), y seguir los patrones y estilos de arquitectura establecidos. Además, se deben aplicar prácticas de desarrollo de software como Domain-driven Design (DDD), estilos y convenciones de codificación, Clean Code y los principios SOLID.


### Repositorio y Ramas

Este proyecto utiliza GitHub o GitLab como repositorio de código fuente. Se han creado las siguientes ramas:


Este proyecto consiste en la implementación de un pipeline de CI/CD para el desarrollo y evolución de una aplicación web. La aplicación debe contar con una interfaz gráfica de usuario, una base de datos (puede ser MySql, SQLite, MongoDB, Neo4J u otro), y seguir los patrones y estilos de arquitectura establecidos. Además, se deben aplicar prácticas de desarrollo de software como Domain-driven Design (DDD), estilos y convenciones de codificación, Clean Code y los principios SOLID.

## Equipos

Se ha formado un equipo conformado por 6 integrantes, quienes trabajarán en conjunto para llevar a cabo el desarrollo y evolución de la aplicación.
- Jharold Alonso Mayorga Villena
- Andrea del Rosario López Condori
- Piero Vizcarra Vargas
- Ancel Alain Fernando Cruz Chaiña
- Alessander Jesus Carazas Quispe

## Selección del Proyecto de Software

El equipo ha seleccionado un proyecto de software web relativamente complejo y poco estructurado. Se ha optado por un proyecto disponible en GitHub, preferiblemente uno desarrollado durante el curso de Ingeniería de Software I. En caso de cambio de proyecto, se han considerado opciones de proyectos Open Source, utilizando listas de proyectos web populares disponibles en los siguientes enlaces:

## Repositorio de Software

Se utiliza Git, GitHub o GitLab como repositorio de código fuente. Se han creado las siguientes ramas:

- `master`: Rama principal del proyecto.
- `desarrollo`: Rama para integrar cambios en desarrollo.
- `integranteX` (o `featureX`): Ramas individuales para cada integrante del equipo o características específicas.

Se realiza la integración de cambios mediante merges, siguiendo el flujo `integranteX` (o `featureX`) -> `desarrollo` -> `master`. Además, se sincronizan los cambios utilizando rebase o merge, siguiendo el flujo `master` -> `desarrollo` (y opcionalmente, `desarrollo` -> `integranteX`).

### Pipeline de CI/CD en Jenkins

Se implementa un pipeline de CI/CD en Jenkins con las siguientes etapas y pasos:
## Construcción Automática:
   - Se utiliza la herramienta Maven o Gradle para proyectos Java.

## Análisis Estático de Código Fuente:
   - Se incorpora la herramienta SonarQube para realizar análisis estático del código fuente y mejorar la calidad del mismo. En el cual se encontro 253 errores en `Frontend`, 107 en `Backend` y 10 errores en Seguridad



## Pruebas Unitarias:


   - Se implementan pruebas unitarias utilizando frameworks xUnit, como JUnit para proyectos Java.

     
**Ejemplo de Pruebas Unitarias**
- *Prueba de Proyección Por Intervalos desde el endpoint /api_gestordepagos/pagos/update*
```javascript
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

```
La prueba utiliza `supertest` para realizar una solicitud PATCH al endpoint `/api_gestordepagos/pagos/update` con un conjunto de datos de prueba. Luego, verifica que la respuesta del servidor tenga un código de estado 200 y un encabezado de tipo de contenido `application/json`.

Además, se espera que la respuesta del servidor coincida con una estructura específica, que se define en las expectativas. En este caso, se espera que la respuesta sea un array que contenga un objeto con propiedades como `fieldCount`, `affectedRows`, `insertId`, entre otras.

![image](https://github.com/andrealopezco20/ADA/assets/104209000/d824d661-5edb-4cd2-9e19-0957ce41777b)

## UNIT TEST

¿Qué es el Unit Testing?

El Unit testing, son trozos de código diseñados para comprobar que el código principal está funcionando como esperábamos. Estas pruebas forman parte de los diferentes procedimientos que podemos llevar a cabo en una metodología ágil.

El proceso que se lleva a cabo consta de tres partes:

Arrange: donde se definen los requisitos que debe cumplir el código principal.

Act: el proceso de creación, donde vamos acumulando los resultados que analizaremos.

Asert: se considera el momento en que comprobamos si los resultados agrupados son correctos o incorrectos. Dependiendo del resultado, se valida y continúa, o se repara, de forma que el error desaparezca.

Para ver si hay errores de integración es necesario realizar otro tipo de pruebas de software conjuntas y de esta manera comprobar la efectividad total del código.

¿Por qué hacer pruebas y por qué son tan importantes?

Hacer unit testing o pruebas es la forma de asegurarse que lo que queremos que haga nuestro programa, lo haga, y lo haga bien.

La construcción de software, una aplicación o un sitio web implica conocimiento, experiencia, talento, capacidad intelectual y un punto de arte. Es decir, es una labor muy difícil, y falta aún mucho para que eso cambie a mejor.

Los fallos y errores son inevitables si los intentamos evitar con solo nuestras capacidades humanas.

### VERIFICACION DE RESPUESTAS Y STATUS 

<img width="1680" alt="Screenshot 2023-12-27 at 10 57 10 AM" src="https://github.com/Pev40/IS2_ProyectoFinal/assets/26489042/cd8c75b0-83cc-45a1-bcee-14a83a062d9a">

### TEST CON JTEST 

<img width="722" alt="cap_test" src="https://github.com/Pev40/IS2_ProyectoFinal/assets/26489042/dfcd08a1-ffc8-488a-9ad6-5f539adb2e63">

### TEST VER CLIENTES

```
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
```

### TEST LOGIN

```
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
```

### TEST BUSCAR ADMIN BY DNI

```
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

```
### TEST eliminar por dni:
![4dd8600f-b084-46f7-bd8f-d1f8bdfe406b](https://github.com/Pev40/IS2_ProyectoFinal/assets/104175707/be0cd0e3-2240-427d-9b98-43b1b4e45528)


### TEST buscar por dni:
![Captura de pantalla 2023-12-26 015949111](https://github.com/Pev40/IS2_ProyectoFinal/assets/104175707/93db8077-687b-43b4-9431-0076cec83aa6)



### TEST ver lotes:

![Captura de pantalla 2023-03-02 100157](https://github.com/Pev40/IS2_ProyectoFinal/assets/104175707/e319804c-8f45-4a17-9dab-1e6a37753af7)
![Captura de pantalla 2023-12-27 110131](https://github.com/Pev40/IS2_ProyectoFinal/assets/104175707/a0f18f48-fcbc-4fce-b8c3-f758c44c5362)


## Pruebas Funcionales:
   - Se realizan pruebas funcionales con el framework Selenium o Appium para garantizar el correcto funcionamiento de la aplicación.


### Ejemplo de Pruebas Funcionales

El archivo `pruebas.py` contiene un conjunto de pruebas funcionales utilizando el framework de testing `pytest` y la biblioteca `selenium` para realizar pruebas automatizadas en una aplicación web. A continuación, se proporciona una descripción de las principales funciones y la estructura del código:

1. **Clase `LoginPage`:**
   - Inicializa un objeto para interactuar con la página de inicio de sesión.
   - Métodos:
     - `enter_username`: Ingresa el nombre de usuario en el campo correspondiente.
     - `enter_password`: Ingresa la contraseña en el campo correspondiente.
     - `click_login_button`: Hace clic en el botón de inicio de sesión.

2. **Clase `CustomerPage`:**
   - Inicializa un objeto para interactuar con la página de clientes.
   - Métodos:
     - `click_edit_button`: Hace clic en el botón de edición.
     - `eliminar`: Hace clic en el botón de eliminación.
     - `click_delete_button`: Hace clic en el botón de confirmación de eliminación.
     - `click_create_button`: Hace clic en el botón de creación.
     - `change_password`: Cambia la contraseña del usuario.
     - `crear_usuario`: Crea un nuevo usuario proporcionando información específica.
     - `eliminar_usuario`: Realiza las acciones necesarias para eliminar a un usuario.

3. **Clase `TestFunctionalTests`:**
   - Contiene métodos `setup_method` y `teardown_method` para inicializar y cerrar el navegador respectivamente.
   - Contiene un método de prueba llamado `test_login_and_create_customer`, que simula el inicio de sesión, accede a la página de clientes, crea un usuario, cambia su contraseña y llama a la función para eliminar al usuario (actualmente comentada).

4. **Ejecución:**
   - Se utiliza `webdriver.Chrome()` para iniciar el navegador Chrome.
   - La prueba se realiza en la URL "http://localhost:3000/pagos_mykonos/login".
   - Después de la ejecución de la prueba, el navegador se cierra.

5. **Uso de `pytest`:**
   - La última línea (`if __name__ == "__main__":`) ejecuta las pruebas utilizando el comando `pytest.main()`.

Es importante tener en cuenta que algunas acciones dentro de los métodos de las clases `CustomerPage` pueden estar comentadas, como la eliminación de un usuario. Además, puede ser necesario ajustar las rutas de los elementos web (XPath, ID, NAME, etc.) según la estructura específica de la interfaz de la aplicación que estás probando.





**Ejemplo de Pruebas Funcionales**

*- Prueba Funcional de Usuarios*

El archivo `pruebas.py` contiene un conjunto de pruebas funcionales utilizando el framework de testing `pytest` y la biblioteca `selenium` para realizar pruebas automatizadas en una aplicación web. A continuación, se proporciona una descripción de las principales funciones y la estructura del código:

```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ... (Clases y métodos anteriores)

class TestFunctionalTests:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/pagos_mykonos/login")

    def teardown_method(self):
        self.driver.quit()

    def test_login_and_create_customer(self):
        login_page = LoginPage(self.driver)
        login_page.enter_username("IS2@unsa.edu.com")
        login_page.enter_password("CSUNSA")
        login_page.click_login_button()

        customer_page = CustomerPage(self.driver)
        pagos_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/header/div/div/div[4]/button[3]'))
        )
        pagos_button.click()

        # Crear usuario
        customer_page.crear_usuario("Andre", "Le", "71837183", "andrea@example.com", "ewpassword", "ewpassword")
        
        # Cambiar contraseña del usuario
        customer_page.change_password("al71837159", "71837159", "71837159")

        # Llama a la función para eliminar al usuario
        # customer_page.eliminar_usuario()

        # Realiza las verificaciones necesarias para asegurarte de que el cliente se haya eliminado correctamente

if __name__ == "__main__":
    pytest.main()
```
![Captura de pantalla 2023-12-27 094341](https://github.com/Pev40/IS2_ProyectoFinal/assets/104209000/fb004eae-5898-4ad9-ac20-3af15584c424)

## Pruebas de Performance:
   - Se llevan a cabo pruebas de rendimiento utilizando la herramienta JMeter para evaluar el desempeño de la aplicación bajo diferentes condiciones.
   ![image](https://github.com/Pev40/IS2_ProyectoFinal/assets/104209000/6eed563c-6f41-4297-ba7e-066a4fdf0dc4)
   *Imagen Prueba de Fallo*
![image](https://github.com/Pev40/IS2_ProyectoFinal/assets/104209000/09a855a7-5dbe-46ba-af4a-94a1894f4d81)
*Imagen Prueba de Exito*


## Pruebas de Seguridad:
   - Se ejecutan pruebas de seguridad utilizando la herramienta OWASP ZAP para identificar y corregir posibles vulnerabilidades.
   ![image](https://github.com/andrealopezco20/ADA/assets/104209000/cb44f531-8043-46e8-bcf7-5976a179080b)
     *Imagen original de los errores anterioes*
![image](https://github.com/andrealopezco20/ADA/assets/104209000/c8ebd4ea-f8bf-4753-9f7e-1e89f7392c34)
*Imagen actual despues de la modificacion de los errores*
