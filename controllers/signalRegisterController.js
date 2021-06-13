
'use strict'

const express = require('express')
const router = express.Router()
const { Mongoose } = require("mongoose")

const Signal = require('../models/SignalRegisterModel')

//const authMiddleware = require('../modules/authenticator')
//const publicAccess = authMiddleware(false, ['user', 'admin'])
//const onlyAdminAccess = authMiddleware(true, ['admin'])

require("../modules/database")

router.route('/signalRegister')
  .get(async (req, res) => {
    try {


      // if (!req.tokenData || req.tokenData.profile === 'user') {
      //   filterParams.enabled = true
      // }

      const signalList = await Signal.find().exec()

      res.json(signalList)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })


module.exports = router
