const User = require('../models/User.model')
const Drug = require('../models/Drug.model');
module.exports.usersController = {


  postUser: async (req, res) => {
    try {
      const { name, hasDrugs, money, basket, reciped } = req.body;
      const user = await User.create({
        name,
        hasDrugs,
        money,
        basket,
        reciped
      })
      res.json(user)
    } catch (error) {
      console.log(error)
    }
  },

  addDrugsInBasket: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const drug = await Drug.findById(req.body.drug);
      if (!(drug.needRecipe) || (drug.needRecipe && user.reciped === drug)) {
        await User.findByIdAndUpdate(user, {
          $inc: { 'basket.sum': drug.price },
          $push: { 'basket.hasDrugs': drug }
        }, { new: true })
        res.json('лекарство добавлено в карзину')
      } else {
        res.json('нет рецепта')
      }
    }
    catch (error) {
      res.json(error)

    }
  },

  deleteDrugInBasket: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const drug = await Drug.findById(req.body.drug);
      await User.findByIdAndUpdate(user, {
        $pull: { 'basket.hasDrugs': req.body.drug },
        $inc: { 'basket.sum': - drug.price },
      }, { new: true })
      res.json('delete drug')
    } catch (error) {
      res.json(error)
    }
  },

  clearBasket: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      user.basket.hasDrugs = []
      user.basket.sum = 0
      user.save()
      res.json('корзина очищена')
    } catch (error) {
      res.json(error)
    }
  },

  bayDrug: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      user.money -= user.basket.sum;
      user.basket.hasDrugs = []
      user.basket.sum = 0
      user.save()
      res.json('вы купили эти лекарства')
    } catch (error) {
      res.json(error)
    }
  }
}