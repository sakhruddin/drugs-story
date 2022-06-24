const mongoose = require('mongoose')
const drugsSchema = mongoose.Schema({

  name:String,
  caregory: String,
  needRecipe: Boolean,
  price: Number
})
const Drug = mongoose.model('Drug', drugsSchema);
module.exports = Drug;