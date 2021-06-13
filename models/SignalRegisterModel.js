'use strict'

const mongoose = require('mongoose')

const signalRegisterSchema = require('./schemas/signalRegisterSchema')

const UserModel = mongoose.model('signalRegister', signalRegisterSchema)

module.exports = UserModel
