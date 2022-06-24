const { Router } = require('express');
const { usersController } = require('../controllers/users.controllers');
const router = Router();

router.post('/users', usersController.postUser);
// router.patch('/users/:id', usersController.loanBook)
// router.patch('/admin/users/:id', usersController.returnBookAndBlocked);
router.patch('/users/:id', usersController.addDrugsInBasket);
router.patch('/users/basket/:id', usersController.deleteDrugInBasket)
router.delete('/users/basket/:id', usersController.clearBasket)
router.post('/users/basket/:id', usersController.bayDrug)

module.exports = router;