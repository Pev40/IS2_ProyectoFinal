# Proyecto de CI/CD para Aplicación Web

## Descripción del Proyecto

Este proyecto consiste en la implementación de un pipeline de CI/CD para el desarrollo y evolución de una aplicación web. La aplicación debe contar con una interfaz gráfica de usuario, una base de datos (puede ser MySql, SQLite, MongoDB, Neo4J u otro), y seguir los patrones y estilos de arquitectura establecidos. Además, se deben aplicar prácticas de desarrollo de software como Domain-driven Design (DDD), estilos y convenciones de codificación, Clean Code y los principios SOLID.

## Equipos

Se ha formado un equipo conformado por 3 a 6 integrantes, quienes trabajarán en conjunto para llevar a cabo el desarrollo y evolución de la aplicación.

## Selección del Proyecto de Software

El equipo ha seleccionado un proyecto de software web relativamente complejo y poco estructurado. Se ha optado por un proyecto disponible en GitHub, preferiblemente uno desarrollado durante el curso de Ingeniería de Software I. En caso de cambio de proyecto, se han considerado opciones de proyectos Open Source, utilizando listas de proyectos web populares disponibles en los siguientes enlaces:
- [Proyectos Web Populares](https://github.com/unicodeveloper/awesome-opensource-apps)
- [Proyectos Web Java](https://github.com/topics/java-web-app)

## Repositorio de Software

Se utiliza Git, GitHub o GitLab como repositorio de código fuente. Se han creado las siguientes ramas:
- `master`: Rama principal del proyecto.
- `desarrollo`: Rama para integrar cambios en desarrollo.
- `integranteX` (o `featureX`): Ramas individuales para cada integrante del equipo o características específicas.

Se realiza la integración de cambios mediante merges, siguiendo el flujo `integranteX` (o `featureX`) -> `desarrollo` -> `master`. Además, se sincronizan los cambios utilizando rebase o merge, siguiendo el flujo `master` -> `desarrollo` (y opcionalmente, `desarrollo` -> `integranteX`).

## Pipeline de CI/CD en Jenkins

Se implementa un pipeline de CI/CD en Jenkins con las siguientes etapas y pasos:

1. **Construcción Automática:**
   - Se utiliza la herramienta Maven o Gradle para proyectos Java.

2. **Análisis Estático de Código Fuente:**
   - Se incorpora la herramienta SonarQube para realizar análisis estático del código fuente y mejorar la calidad del mismo.

3. **Pruebas Unitarias:**
   - Se implementan pruebas unitarias utilizando frameworks xUnit, como JUnit para proyectos Java.

4. **Pruebas Funcionales:**
   - Se realizan pruebas funcionales con el framework Selenium o Appium para garantizar el correcto funcionamiento de la aplicación.

5. **Pruebas de Performance:**
   - Se llevan a cabo pruebas de rendimiento utilizando la herramienta JMeter para evaluar el desempeño de la aplicación bajo diferentes condiciones.

6. **Pruebas de Seguridad:**
   - Se ejecutan pruebas de seguridad utilizando la herramienta OWASP ZAP para identificar y corregir posibles vulnerabilidades.

7. **Gestión de Issues:**
   - Se utiliza GitHub Issues, Trello o Jira para la gestión efectiva de problemas y tareas, permitiendo un seguimiento adecuado del progreso del proyecto.

El pipeline de CI/CD se ha implementado de manera integral, abarcando desde la construcción automática hasta la gestión de issues, asegurando un proceso de desarrollo continuo y una entrega continua de la aplicación web.
