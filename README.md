### Repositorio y Ramas

Este proyecto utiliza GitHub o GitLab como repositorio de código fuente. Se han creado las siguientes ramas:

- `master`: Rama principal del proyecto.
- `desarrollo`: Rama para integrar cambios en desarrollo.
- `integranteX` (o `featureX`): Ramas individuales para cada integrante del equipo o características específicas.

Se realiza la integración de cambios mediante merges, siguiendo el flujo `integranteX` (o `featureX`) -> `desarrollo` -> `master`. Además, se sincronizan los cambios utilizando rebase o merge, siguiendo el flujo `master` -> `desarrollo` (y opcionalmente, `desarrollo` -> `integranteX`).

### Pipeline de CI/CD en Jenkins

Se implementa un pipeline de CI/CD en Jenkins con las siguientes etapas y pasos:

1. **Construcción Automática:**
   - Se utiliza la herramienta Maven o Gradle para proyectos Java.

2. **Análisis Estático de Código Fuente:**
   - Se incorpora la herramienta SonarQube para realizar análisis estático del código fuente y mejorar la calidad del mismo.

3. **Pruebas Unitarias:**
   - Se implementan pruebas unitarias utilizando frameworks xUnit, como JUnit para proyectos Java.

4. **Pruebas Funcionales:**
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

5. **Pruebas de Performance:**
   - Se llevan a cabo pruebas de rendimiento utilizando la herramienta JMeter para evaluar el desempeño de la aplicación bajo diferentes condiciones.

6. **Pruebas de Seguridad:**
   - Se ejecutan pruebas de seguridad utilizando la herramienta OWASP ZAP para identificar y corregir posibles vulnerabilidades.

7. **Gestión de Issues:**
   - Se utiliza GitHub Issues, Trello o Jira para la gestión efectiva de problemas y tareas, permitiendo un seguimiento adecuado del progreso del proyecto.

El pipeline de CI/CD se ha implementado de manera integral, abarcando desde la construcción automática hasta la gestión de issues, asegurando un proceso de desarrollo continuo y una entrega continua de la aplicación web.
