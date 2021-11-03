const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { authorize } = require('../middlewares/authorize');
const { multerUpload } = require('../middlewares/multerConfig');

router.get('/:idProducto', productoController.getProducto);
router.post('/', authorize, multerUpload, productoController.postProducto);
router.put('/:idProducto', authorize, multerUpload, productoController.putProducto);

module.exports = router;