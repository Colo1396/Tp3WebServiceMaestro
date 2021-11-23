const {Router} = require('express');
const router = Router();
const {esRolComprador,esRolMesaDeAyuda,esRolVendedor} = require('../middlewares/validationRol');
const {isAuthenticated} = require('../middlewares/authenticate');
const {crearReclamo, aceptarReclamo, rechazarReclamo, obtenerReclamo, obtenerReclamosPorEstado, obtenerReclamos} = require('../controllers/reclamoController');

// /reclamos/

router.post('/nuevoPost', [isAuthenticated,esRolComprador], crearReclamo);
router.get('/lista',[isAuthenticated,esRolMesaDeAyuda] , obtenerReclamos);
router.post('/listaPorEstado',[isAuthenticated,esRolMesaDeAyuda], obtenerReclamosPorEstado);
router.post('/aceptar/:id',[isAuthenticated,esRolMesaDeAyuda] ,aceptarReclamo);
router.post('/rechazar/:id',[isAuthenticated,esRolMesaDeAyuda] ,rechazarReclamo);

module.exports = router;