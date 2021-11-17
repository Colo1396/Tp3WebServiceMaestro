const {Router} = require('express');
const router = Router();

const {esRolMesaDeAyuda, esRolComprador} = require('../middlewares/authjwt');

const {crearReclamo, eliminarReclamo, modificarReclamo, obtenerReclamo, obtenerReclamosPorEstado, obtenerReclamos} = require('../controllers/reclamoController');
const { isLoggedIn } = require('../libs/auth');

// /reclamos/


router.get('/nuevo',[isLoggedIn,esRolComprador], (req,res)=>{
    res.render('nuevoReclamo');
});
router.post('/nuevoPost', [isLoggedIn,esRolComprador], crearReclamo);

router.get('/lista',[isLoggedIn,esRolMesaDeAyuda] , obtenerReclamos);
router.post('/listaPorEstado',[isLoggedIn,esRolMesaDeAyuda], obtenerReclamosPorEstado);
router.post('/aceptar/:id',[isLoggedIn,esRolMesaDeAyuda] ,modificarReclamo);
router.post('/rechazar/:id',[isLoggedIn,esRolMesaDeAyuda] ,eliminarReclamo);

module.exports = router;