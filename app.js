'use strict'

const express = require('express')
//const nunjucks = require('nunjucks')
//const database = require('./modules/database')
//const bearerToken = require('express-bearer-token');
//const cors = require("cors");

//middlewares con las rutas
const indexController = require('./controllers/IndexController')
const tradingviewController = require('./controllers/TradingViewController')
//const articleController = require('./controllers/ArticlesController')
//const usersController = require('./controllers/UsersController')
//const authController = require('./controllers/AuthController')
//const messagesController = require('./controllers/CommentsController')

//server instance
const app = express()

//app.use(bearerToken())
//app.use(cors())

//configuramos nunjucks para renderizar las plantillas de email únicamente
// nunjucks.configure('views', {
//   autoescape: true,
//   express: app
// })

//middleware para parsear los cuerpos tipo application/JSON en el cuerpo
app.use(express.json())

//enganchamos los controladores de los diferentes recursos
app.use(indexController)
app.use(tradingviewController)
//app.use(usersController)
//app.use(authController)

//database.connect()

module.exports = app
