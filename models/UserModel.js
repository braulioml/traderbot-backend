'use strict'

const mongoose = require('mongoose')

const UserSchema = require('./schemas/UserSchema')

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel
