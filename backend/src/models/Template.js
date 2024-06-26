const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: String,
  price: {
    type: Number,
    default: 0
  },
  images: {
    type: Array,
    default: []
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  sold: {
    type: Number,
    default: 0,
  }
})

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;