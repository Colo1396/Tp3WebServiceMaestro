const {Router} = require('express');
const router = Router();
const {validarRegister} = require('../middlewares/authRegister');
const {isAuthenticated,isNotAuthenticated} = require('../middlewares/authenticate');
const usuaripController = require('../controllers/usuarioController');

/*****AUTENTICACION DE USUARIO LOGIN/REGISTER***/
router.post('/registerPost',[isNotAuthenticated,validarRegister] , usuaripController.register );

router.post('/loginPost',isNotAuthenticated, usuaripController.login);

module.exports = router;