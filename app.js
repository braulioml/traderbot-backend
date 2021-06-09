'use strict'

const express = require('express')
const database = require('./modules/database')
const bearerToken = require('express-bearer-token');

//middlewares con las rutas
const indexController = require('./controllers/IndexController')
const receivedSignalsController = require('./controllers/receivedSignalsController')
const usersController = require('./controllers/UsersController')
const authController = require('./controllers/AuthController')

//server instance
const app = express()

//app.use(bearerToken())


//middleware para parsear los cuerpos tipo application/JSON en el cuerpo
app.use(express.json())

//enganchamos los controladores de los diferentes recursos
app.use(indexController)
app.use(receivedSignalsController)
//app.use(usersController)
//app.use(authController)

//database.connect()

module.exports = app
