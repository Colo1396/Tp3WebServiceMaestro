const {Router} = require('express');
const router = Router();
const {esRolComprador,esRolMesaDeAyuda,esRolVendedor} = require('../middlewares/validationRol');
const {MedioDePagoService} = require('../services/MedioDePagosService');
const {crearProducto, actualizarProducto, obtenerProducto,obtenerProductos} = require('../controllers/productoController');


// /productos/
router.get('/nuevo', [esRolVendedor] ,async(req,res)=>{
    const mediosDepago = await MedioDePagoService.getAll();
    res.render('nuevoProducto', {mediosDepago: mediosDepago});
});
router.post('/nuevoPost' , [esRolVendedor] ,crearProducto);

module.exports = router;