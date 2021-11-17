const {Router} = require('express');
const router = Router();

const {esRolMesaDeAyuda, esRolComprador} = require('../middlewares/authjwt');

const {crearDenuncia,eliminarDenuncia,modificarDenuncia, obtenerDenuncia, obtenerDenunciasPorEstado, obtenerDenuncias} = require('../controllers/denunciaController');
const { isLoggedIn } = require('../libs/auth');

// /denuncias/

//router.get('/:id',  obtenerDenuncia);


router.get('/nueva',[isLoggedIn,esRolComprador], (req,res)=>{
    res.render('nuevaDenuncia');
});
router.post('/nuevaPost', [isLoggedIn,esRolComprador], crearDenuncia);

router.get('/lista',[isLoggedIn,esRolMesaDeAyuda] , obtenerDenuncias);
router.post('/listaPorEstado',[isLoggedIn,esRolMesaDeAyuda], obtenerDenunciasPorEstado);
router.post('/aceptar/:id',[isLoggedIn,esRolMesaDeAyuda] ,modificarDenuncia);
router.post('/rechazar/:id',[isLoggedIn,esRolMesaDeAyuda] ,eliminarDenuncia);

module.exports = router;