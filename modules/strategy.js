const config = require('./config')

class Strategy {

  constructor(apiKey) {
    this.connectionStatus=null
    this.apiKey = apiKey
  }

  async method() {
  }

}

module.exports = new Strategy()
