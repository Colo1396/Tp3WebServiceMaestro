const express = require('express');
const router = express.Router();
const medioDePagoController = require('../controllers/medioDePagoController');

router.get('/', medioDePagoController.getAllMedios);

module.exports = router;