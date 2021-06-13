const { Schema } = require("mongoose")

let signalRegisterSchema = new Schema({
  username: { type: String, required: false },
  strategy: { type: String, required: false },
  side: { type: String, required: true },
  size: { type: Number, required: true },
  takeProfitPrice: { type: Number, required: false },
  stopLossPrice: { type: Number, required: false },
  executed: { type: Boolean, required: false, default: false },
  received_at: { type: Date, default: Date.now }
});

module.exports = signalRegisterSchema
