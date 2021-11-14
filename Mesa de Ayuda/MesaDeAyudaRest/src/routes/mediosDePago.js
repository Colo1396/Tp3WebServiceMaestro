const {Router} = require('express');
const router = Router();


const {obtenerMedioDePago,obtenerMediosDePago} = require('../controllers/medioDePagoContoller');

//api/mediosDePago/
router.get('/', obtenerMediosDePago);
router.get('/:id', obtenerMedioDePago);

module.exports = router;