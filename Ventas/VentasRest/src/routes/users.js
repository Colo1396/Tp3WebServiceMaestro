const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorize } = require('../middlewares/authorize');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:idCliente', authorize, userController.getUser);
router.get('/:idCliente/productos', userController.getAllProductos);

module.exports = router;