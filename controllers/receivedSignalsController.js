
'use strict'

const express = require('express')
const router = express.Router()
//const { Mongoose } = require("mongoose")
//const authMiddleware = require('../modules/authenticator')
const binance = require('../modules/binance')
const signalRegister = require('../modules/signalRegister')
const BotMode = require('../models/BotMode')
const SignalRegisterModel = require('../models/SignalRegisterModel')
//const publicAccess = authMiddleware(false, ['user', 'admin'])
//const onlyAdminAccess = authMiddleware(true, ['admin'])

//require("../modules/database")

router.route('/receivedSignals')
  .post(async (req, res) => {
    try {
      let newSignal = req.body
      
      let signalWasExecuted = false

      if (BotMode.isOn()){
        if (newSignal.side == 'BUY'){
          try{
            await binance.buyWithPercentageOfCollateral('BTCUSDT', 'BTC', 'USDT', newSignal.percentageOfCollateral)
          }catch(error){
            console.log('didnt work')
            console.log(error)
            //res.status(500).json({ message: error.message })
          }
          signalWasExecuted = true
          
        }
        if (newSignal.side == 'SELL'){
          try{
            await binance.sellAll('BTC','BTCUSDT')
          }catch(error){
            console.log('didnt work')
            console.log(error)
            //res.status(500).json({ message: error.message })
          }
          signalWasExecuted = true
        }
      };

      const signalRegisterParams = {
        side: newSignal.side,
        size: newSignal.percentageOfCollateral,
        executed: signalWasExecuted
      }

      await new SignalRegisterModel(signalRegisterParams).save()

      //signalRegisterParams = signalRegisterParams.toJSON()
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router
