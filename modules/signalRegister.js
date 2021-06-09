const config = require('./config')
const axios = require('axios')

class SignalRegister {

  constructor(apiKey) {
    this.connectionStatus = null
    this.apiKey = apiKey
  }

  async method() {
  }

}

module.exports = new SignalRegister()
