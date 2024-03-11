const mongoose = require('mongoose');

const paymentShcema = mongoose.Schema({
  user: {
    type: Object
  },
  data: {
    type: Array,
    default: []
  },
  product: {
    type: Array,
    default: []
  }
}, {timestamps: true});

const Payment = mongoose.model("Payment", paymentShcema);

module.exports = Payment;