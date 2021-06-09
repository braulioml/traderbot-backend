const config = require('./config')
const axios = require('axios')

class Binance {

  constructor(apiKey) {
    this.connectionStatus=null
    this.apiKey = apiKey
  }

  async checkConnection() {
  }

  async openPosition(side, size, tp, sl) {
    const MARKET = 1

    const LONG = 1
    const SHORT = 2

    defaults = {
      symbol: 'BTCUSDTPERP',
      orderType : MARKET
    }

    

    petitionURL = "{{url}}/fapi/v1/order?symbol=&side=&positionSide=&type=&timeInForce=&quantity=&reduceOnly=&price=&newClientOrderId=&stopPrice=&closePosition=&activationPrice=&callbackRate=&workingType=CONTRACT_PRICE&newOrderRespType=&timestamp={{timestamp}}&signature={{signature}}"

    url = 'https://fapi.binance.com'

    data = {}

    config = {
      params: { 
        symbol: "update-user",
        side: side
        positionSide: side
        type: MARKET
        quantity = size
      },
      headers: { 
        'X-MBX-APIKEY': this.apiKey
      }
    }

    let response = await axios.post(url, data, conﬁg)
    
    console.log(response.data)

  }

  async closeAllPositions() {
  }



}

module.exports = new Binance()
