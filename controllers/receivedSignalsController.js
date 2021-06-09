
'use strict'

const express = require('express')
const router = express.Router()
//const { Mongoose } = require("mongoose")
//const authMiddleware = require('../modules/authenticator')
//const publicAccess = authMiddleware(false, ['user', 'admin'])
//const onlyAdminAccess = authMiddleware(true, ['admin'])

//require("../modules/database")

router.route('/receivedSignals')
  .post(async (req, res) => {
    try {
      let newSignal = req.body



      //newSignal = await new Article(newArticle).save()
      console.log(newSignal)


      //What to do with signal.
      //1: Extract info: side, strategy + optional tp/sl
      //2: Determine size, tp, sl, (depending on strategy, account balance)
      //3: If execution enabled: execute on binance module. Flag if executed or not.
      //
      //

      res.status(201).json(newSignal)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router
