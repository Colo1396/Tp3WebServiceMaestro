const {Router} = require('express');
const router = Router();
const {esRolMesaDeAyuda,esRolComprador,esRolVendedor} = require('../middlewares/authjwt');
const {isLoggedIn, isNotLoggedIn} = require('../libs/auth');
const {MedioDePagoService} = require('../services/MedioDePagosService');
const {crearProducto, actualizarProducto, obtenerProducto,obtenerProductos} = require('../controllers/productoController');


// /productos/
router.get('/nuevo', [isLoggedIn, esRolVendedor] ,async(req,res)=>{
    const mediosDepago = await MedioDePagoService.getAll();
    res.render('nuevoProducto', {mediosDepago: mediosDepago});
});
router.post('/nuevoPost' , [isLoggedIn, esRolVendedor] ,crearProducto);

module.exports = router;