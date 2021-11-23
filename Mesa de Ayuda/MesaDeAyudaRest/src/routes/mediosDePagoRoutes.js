const express = require('express');
const router = express.Router();
const medioDePagoController = require('../controllers/medioDePagoContoller');

router.get('/', medioDePagoController.getAllMedios);

module.exports = router;