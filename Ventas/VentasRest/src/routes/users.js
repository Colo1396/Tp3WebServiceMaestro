const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorize } = require('../middlewares/authorize');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/transferir', authorize, userController.transferir);
router.get('/:idUser', authorize, userController.getUser);
router.put('/', authorize, userController.putUser);

module.exports = router;