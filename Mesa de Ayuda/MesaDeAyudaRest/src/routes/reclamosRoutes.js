const {Router} = require('express');
const router = Router();
const {esRolComprador,esRolMesaDeAyuda,esRolVendedor} = require('../middlewares/validationRol');
const {isAuthenticated} = require('../middlewares/authenticate');
const {crearReclamo, eliminarReclamo, modificarReclamo, obtenerReclamo, obtenerReclamosPorEstado, obtenerReclamos} = require('../controllers/reclamoController');

// /reclamos/


router.get('/nuevo',[isAuthenticated,esRolComprador], (req,res)=>{
    res.render('nuevoReclamo');
});
router.post('/nuevoPost', [isAuthenticated,esRolComprador], crearReclamo);

router.get('/lista',[isAuthenticated,esRolMesaDeAyuda] , obtenerReclamos);
router.post('/listaPorEstado',[isAuthenticated,esRolMesaDeAyuda], obtenerReclamosPorEstado);
router.post('/aceptar/:id',[isAuthenticated,esRolMesaDeAyuda] ,modificarReclamo);
router.post('/rechazar/:id',[isAuthenticated,esRolMesaDeAyuda] ,eliminarReclamo);

module.exports = router;