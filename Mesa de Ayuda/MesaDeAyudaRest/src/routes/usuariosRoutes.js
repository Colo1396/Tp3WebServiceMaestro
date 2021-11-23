const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');
const { isAuthenticated } = require('../middlewares/authenticate');

router.get('/:idUser', isAuthenticated, userController.getUser);
router.put('/', isAuthenticated, userController.putUser);

module.exports = router;