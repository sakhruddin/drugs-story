// const User = require('../modeles/User.model');
const Drug = require('../models/Drug.model');
module.exports.drugsController = {

  postDrug: async (req, res) => {
    const { name, needRecipe, price, category } = req.body
    await Drug.create({
      name,
      price,
      needRecipe,
      category
    })
    res.json('added drug')
  },

  getDrug: async (req, res) => {
    try {
 res.json(await Drug.find({}).populate('needRecipe', '-__v -_id'))
     
    } catch (error) {
      res.json(error)
    }
  },

  getDrugByID: async (req, res) => {
    try {
    res.json(await Drug.findById(req.params.id))
     
    } catch (error) {
      res.json(error)
    }
  },



}