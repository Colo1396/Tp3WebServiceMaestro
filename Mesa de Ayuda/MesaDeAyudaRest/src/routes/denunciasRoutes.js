const {Router} = require('express');
const router = Router();

const {isAuthenticated} = require('../middlewares/authenticate');
const {esRolComprador,esRolMesaDeAyuda,esRolVendedor} = require('../middlewares/validationRol');
const {crearDenuncia,eliminarDenuncia,modificarDenuncia, obtenerDenuncia, obtenerDenunciasPorEstado, obtenerDenuncias} = require('../controllers/denunciaController');

// /denuncias/

//router.get('/:id',  obtenerDenuncia);


router.get('/nueva',[isAuthenticated,esRolComprador,esRolVendedor], (req,res)=>{
    res.render('nuevaDenuncia');
});
router.post('/nuevaPost', [isAuthenticated,esRolComprador, esRolVendedor], crearDenuncia);

router.get('/lista',[isAuthenticated, esRolMesaDeAyuda] , obtenerDenuncias);
router.post('/listaPorEstado',[isAuthenticated,esRolMesaDeAyuda], obtenerDenunciasPorEstado);
router.post('/aceptar/:id',[isAuthenticated,esRolMesaDeAyuda] ,modificarDenuncia);
router.post('/rechazar/:id',[isAuthenticated,esRolMesaDeAyuda] ,eliminarDenuncia);

module.exports = router;