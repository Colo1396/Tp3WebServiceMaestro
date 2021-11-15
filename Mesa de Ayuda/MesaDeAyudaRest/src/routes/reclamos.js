const {Router} = require('express');
const router = Router();

const {esRolMesaDeAyuda,verificacionToken, esRolUser} = require('../middlewares/authjwt');

const {crearReclamo,modificarReclamo,eliminarReclamo,obtenerReclamo} = require('../controllers/reclamoController');

//api/reclamos/
//router.get('/', obtenerMediosDePago);
router.get('/:id', verificacionToken , obtenerReclamo);
router.post('/nuevoReclamo',[verificacionToken, esRolUser] ,crearReclamo);
router.post('/modificarReclamo/:id',[verificacionToken, esRolMesaDeAyuda] ,modificarReclamo);
router.post('/eliminarReclamo/:id',[verificacionToken, esRolMesaDeAyuda] ,eliminarReclamo);

module.exports = router;