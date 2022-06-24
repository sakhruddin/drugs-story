const { Router } = require('express');
const { drugsController } = require('../controllers/drugs.controllers');
const router = Router();


router.post('/admin/drugs', drugsController.postDrug);
router.get('/drugs', drugsController.getDrug);
router.get('/drugs/:id', drugsController.getDrugByID);

module.exports = router;