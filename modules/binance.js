const axios = require('axios')
const querystring = require('querystring')
const hmacSignature = require('./hmacSignature');

const connectionData = {
  spotTestnet: {
    url: 'https://testnet.binance.vision',
    apiKey: 'FPEs71JfrnAeN1DYR49RTcXY6JSDFkzNXjSK3us3prqkVTc6cdP6lRHnvUAPzfIz',
    apiSecret: 'tfQJnbY66WT5VDCeRS6PwKg8eNJcLQNmXWJnQhLtBhIz8ppKWATKDm4vi8YBpbcF',
  }
}

class Binance {

  constructor() {
  }

  async checkConnection() {
    const method = 'get'
    const apiParams = connectionData.spotTestnet
    const queryParams = { }
    const address = '/api/v3/ping'
    const signed = false
    const response = await this._request(method, apiParams, address, queryParams, signed)
    console.log(response.status)
    const result = (response.status==200)
    return result
  }

  async _request(method, apiParams, address, queryParams, signed){
    const queryString = querystring.stringify(queryParams)
    let url = apiParams.url + address + '?' + queryString

    if (signed){
      const signature = hmacSignature(queryString, apiParams.apiSecret)
      url += `&signature=${signature}`
    }

    const axiosRequestConfig = {
      method: method,
      url: url,
      headers: { 
        'Content-Type': 'application/json', 
        'X-MBX-APIKEY': apiParams.apiKey
      }
    };
    
    let response = null

    try{
      response = await axios(axiosRequestConfig)
    }catch(error){
      console.log(error);
      console.log('Request to API failed');
    }

    return response
  }

  async getPrice(symbol){
    const method = 'get'
    const apiParams = connectionData.spotTestnet
    const queryParams = { 
            symbol: symbol
          }
    const address = '/api/v3/ticker/price'
    const signed = false
    const response = await this._request(method, apiParams, address, queryParams, signed)
    const price = response.data.price
    console.log(symbol +' price: ' + price)
    return price
  }

  async checkBalance(asset){
    const method = 'get'
    const apiParams = connectionData.spotTestnet
    const queryParams = { 
            timestamp: Date.now()
          }
    const address = '/api/v3/account'
    const signed = true
    const response = await this._request(method, apiParams, address, queryParams, signed)
    const balance = response.data.balances.find(element => element.asset === asset).free
    console.log(asset +' balance: ' + balance)
    return balance
  }

  async sellAll(asset, symbol){
    const assetBalance = await this.checkBalance(asset)
    const didItWork = await this.placeSpotOrder(symbol, 'SELL', 'MARKET', assetBalance)
    return didItWork
  }

  async buyWithPercentageOfCollateral(symbol, boughtAsset, collateralAsset, percentage){
    const symbolPrice = await this.getPrice(symbol)
    const collateralAmountTotal = await this.checkBalance(collateralAsset)
    const collaretalToSpend = percentage * collateralAmountTotal / 100
    const assetAmountToBuy = (collaretalToSpend * (1/symbolPrice)).toFixed(4)
    console.log('assetAmountToBuy: '+assetAmountToBuy)
    const didItWork = await this.placeSpotOrder(symbol, 'BUY', 'MARKET', assetAmountToBuy)
    const newAssetBalance = await this.checkBalance(boughtAsset)
    return didItWork
  }

  async placeSpotOrder(symbol, side, type, quantity){
    const method = 'post'
    const apiParams = connectionData.spotTestnet
    const queryParams = { 
            symbol: symbol,
            side: side, 
            type: type, 
            quantity: quantity, 
            timestamp: Date.now()
          }
    const address = '/api/v3/order'
    const signed = true
    const response = await this._request(method, apiParams, address, queryParams, signed)
    console.log(response.status)
    console.log(response.data.status)
    return (response.status===200)
  }
}

module.exports = new Binance()
