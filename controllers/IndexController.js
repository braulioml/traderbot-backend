'use strict'

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    const indexMessage = `TraderBot API - Braulio`
    res.send(indexMessage)
  })

module.exports = router
