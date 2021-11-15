const {Router} = require('express');
const router = Router();
const {verificacionToken, esRolUser, esRolVendedor} = require('../middlewares/authjwt');


const {registrarse,obtenerUsuarios, obtenerUsuario, ingresar } = require('../controllers/usuarioController');
const { validarRegister } = require('../middlewares/authRegister');

//api/usuarios/
router.get('/'  , verificacionToken ,obtenerUsuarios);
router.post('/register', validarRegister ,registrarse );
router.post('/login', ingresar);
  
router.get('/:id' , verificacionToken ,obtenerUsuario );

module.exports = router;