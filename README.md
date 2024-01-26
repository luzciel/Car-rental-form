# Gestión de Solicitudes de Venta

## Descripción Solicitud 1

Web que registra los vehículos y lista en una tabla los 10 últimos registros

### Stack tecnológico

- React 
- Styled Components
- Redux Toolkit

## Ejecución del Proyecto 1

- Clona este repositorio en tu máquina local.

```js
git clone <URL_DEL_REPOSITO>
```

```js
git clone <URL_DEL_REPOSITORIO>
```

- Instalar dependencias: 
```js
$ npm install
```

- Correr el proyecto: 
```js
$ npm run dev
```

## Descripción Solicitud 2

El repositorio de la Solicitud 2 se encuentra en el siguiente enlace: https://github.com/luzciel/SQL-server-script

### Ejecución del Proyecto 2

Este proyecto utiliza Docker y Make para facilitar el manejo del entorno y la ejecución de comandos relacionados con SQL Server. A continuación, se proporcionan instrucciones sobre cómo ejecutar y configurar el proyecto.

### Pasos Previos
Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo desde https://www.docker.com/get-started.

### Configuración Inicial

- Clona el repositorio [LINK](https://github.com/luzciel/SQL-server-script) en tu máquina local.

```js
git clone <URL_DEL_REPOSITORIO
```

```js
git clone <URL_DEL_REPOSITORIO
```

- Abre una terminal y ejecuta el siguiente comando para CONFIGURAR el entorno:

```js
make setup
```
Este comando utilizará Docker Compose para iniciar un contenedor SQL Server, esperará 10 segundos para asegurarse de que SQL Server esté completamente iniciado.

- Para DETENER y LIMPIAR los recursos del proyecto, ejecuta:

```js
make down
```

- Para INICIALIZAR la base de datos con las tablas y los datos precargados, ejecuta:
```js
make run-init
```

- Para CREAR los procedimientos almacenados, ejecuta:
```js
make run-create-procedures
```

- Para EJECUTAR procedimientos almacenados, ejecuta:
```js
make run-procedures
```

- EJECUTAR TODAS LAS TAREAS, si deseas ejecutar todos los pasos anteriores en un solo comando, puedes usar:
```js
make run-all
```
Este comando realizará la configuración inicial, inicializará la base de datos, creará procedimientos almacenados y los ejecutará.

Recuerda ajustar las contraseñas y otros detalles según la configuración específica de tu entorno. ¡Listo para comenzar!
