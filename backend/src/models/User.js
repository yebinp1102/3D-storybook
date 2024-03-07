const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cart: {
    type: Array,
    default: []
  },
  address: {
    type: {},
    default: {},
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;