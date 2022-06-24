const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name: String,

  money: {
    type: Number,
    default: 5000
  },


  basket: {
    sum: {
      type: Number,
      default: 0
    },
    hasDrugs: [{
      ref: 'Drug',
      type: mongoose.Schema.Types.ObjectId
    }],
  },
  reciped: [{
    ref: 'Drug',
    type: mongoose.Schema.Types.ObjectId
  }]
})


const User = mongoose.model('User', userSchema)
module.exports = User