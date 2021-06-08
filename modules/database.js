const mongoose = require('mongoose')
const config = require('./config')

class Database {
  constructor() {
    this.db = null
  }

  async connect() {

    //habilita de forma global los validadores durante la actualización
    mongoose.set('runValidators', true)

    this.db = mongoose.connection;

    try {
      await mongoose.connect(config.DB_CONNECTION_STRING, {useFindAndModify:false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

      console.log("Conectado a MongoDB");
    } catch (e) {
      console.log("Error al conectar con la base de datos");
      console.error(e)
    }

  }
}

module.exports = new Database()
