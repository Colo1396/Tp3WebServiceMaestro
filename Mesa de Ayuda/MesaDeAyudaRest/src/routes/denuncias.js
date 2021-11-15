const {Router} = require('express');
const router = Router();

const {esRolMesaDeAyuda,verificacionToken, esRolUser} = require('../middlewares/authjwt');

const {crearDenuncia,eliminarDenuncia,modificarDenuncia, obtenerDenuncia} = require('../controllers/denunciaController');

//api/denuncias/
//router.get('/', obtenerMediosDePago);
router.get('/:id', verificacionToken ,obtenerDenuncia);
router.post('/nuevaDenuncia',[verificacionToken, esRolUser] ,crearDenuncia);
router.post('/modificarDenuncia/:id',[verificacionToken, esRolMesaDeAyuda] ,modificarDenuncia);
router.post('/eliminarDenuncia/:id',[verificacionToken, esRolMesaDeAyuda] ,eliminarDenuncia);

module.exports = router;