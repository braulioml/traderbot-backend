
'use strict'

const express = require('express')
const router = express.Router()
//const { Mongoose } = require("mongoose")
//const authMiddleware = require('../modules/authenticator')
//const publicAccess = authMiddleware(false, ['user', 'admin'])
//const onlyAdminAccess = authMiddleware(true, ['admin'])

//require("../modules/database")

router.route('/tradingview')
  .post(async (req, res) => {
    try {
      let newSignal = req.body



      //newSignal = await new Article(newArticle).save()
      console.log(newSignal)

      res.status(201).json(newSignal)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router
