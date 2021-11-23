const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { isAuthenticated } = require('../middlewares/authenticate');
const {esRolVendedor} = require('../middlewares/validationRol');
const { multerUpload } = require('../middlewares/multerConfig');

router.get('/', productoController.getAllProductos);
router.get('/:idProducto', productoController.getProducto);
router.post('/', [isAuthenticated, esRolVendedor], multerUpload, productoController.postProducto);
router.put('/:idProducto', [isAuthenticated, esRolVendedor], multerUpload, productoController.putProducto);

module.exports = router;