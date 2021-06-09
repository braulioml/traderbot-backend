const { Schema } = require("mongoose")

let userSchema = new Schema({
  username: { type: String, required: true, minlength: 3, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 200 },
  profile: { type: String, required: false, default: 'user' },
  enabled: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  binance_API_key: { type: String },
  balance: { type: Number, required: true, default: 0 }
});

module.exports = userSchema
