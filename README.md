# Pasos de instalación:
## Installation

Instalar complementos del proyecto.

```sh
$ npm install
```

Crear base de datos
```sh
Example: mybasededatos
```
Configurar el archivo /config/config.json
```sh
"development": {
    "username": "root",
    "password": "",
    "database": "mybasededatos",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
},
```
Ejecutar la migracion para la creacion de tablas en la base de datos:
```sh
$ npx sequelize-cli db:migrate
```
Ejecutar script para iniciar sistema
```sh
$ npm run start
```
ó
```sh
$ nodemon start
```
Abrir
```sh
http://localhost:3000/
```
Desarrollado por Gnxcode
Web [gnxcode.dev](https://gnxcode.dev)