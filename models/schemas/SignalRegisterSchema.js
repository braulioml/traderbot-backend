const { Schema } = require("mongoose")

let signalRegisterSchema = new Schema({
  username: { type: String, required: true },
  strategy: { type: String, required: true },
  side: { type: String, required: true },
  size: { type: Number, required: true },
  takeProfitPrice: { type: Number, required: true },
  stopLossPrice: { type: Number, required: true },
  executed: { type: Boolean, required: true, default: false },
  received_at: { type: Date, default: Date.now }
});

module.exports = signalRegisterSchema
