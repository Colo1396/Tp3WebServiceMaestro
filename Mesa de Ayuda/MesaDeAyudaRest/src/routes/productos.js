const {Router} = require('express');
const router = Router();


const {obtenerProducto, obtenerProductos, crearProducto, actualizarProducto} = require('../controllers/productoController');
const { verificacionToken, esRolVendedor } = require('../middlewares/authjwt');

//api/productos/
router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.post('/nuevoProducto',  [verificacionToken, esRolVendedor] ,crearProducto);
router.post('/actualizar/:id', [verificacionToken, esRolVendedor] , actualizarProducto);

module.exports = router;