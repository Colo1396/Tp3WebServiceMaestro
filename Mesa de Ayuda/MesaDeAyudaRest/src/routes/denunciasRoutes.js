const {Router} = require('express');
const router = Router();

const {isAuthenticated} = require('../middlewares/authenticate');
const {esRolComprador,esRolMesaDeAyuda,esRolVendedor} = require('../middlewares/validationRol');
const {crearDenuncia,rechazarDenuncia,aceptarDenuncia, obtenerDenuncia, obtenerDenunciasPorEstado, obtenerDenuncias} = require('../controllers/denunciaController');

// /denuncias/

//router.get('/:id',  obtenerDenuncia);

router.post('/nuevaPost', [isAuthenticated, esRolComprador], crearDenuncia);
router.get('/lista',[isAuthenticated, esRolMesaDeAyuda] , obtenerDenuncias);
router.post('/listaPorEstado',[isAuthenticated,esRolMesaDeAyuda], obtenerDenunciasPorEstado);
router.post('/aceptar/:id',[isAuthenticated,esRolMesaDeAyuda] ,aceptarDenuncia);
router.post('/rechazar/:id',[isAuthenticated,esRolMesaDeAyuda] ,rechazarDenuncia);

module.exports = router;