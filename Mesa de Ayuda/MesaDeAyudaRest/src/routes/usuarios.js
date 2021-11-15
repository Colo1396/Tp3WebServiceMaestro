const {Router} = require('express');
const router = Router();
const {verificacionToken, esRolUser, esRolVendedor} = require('../middlewares/authjwt');

const {registrarse,obtenerUsuarios, obtenerUsuario, ingresar } = require('../controllers/usuarioController');
const { validarRegister } = require('../middlewares/authRegister');

//api/usuarios/
router.get('/',obtenerUsuarios);

router.get('/register', (req, res) => {
    res.render('register', { page_title: 'Registro de usuario' });
});
router.post('/registerPost', validarRegister ,registrarse );


router.get('/login', (req,res)=>{
    res.render('login', { page_title: 'Login de usuario' });
});
router.post('/loginPost', ingresar);


router.get('/home', (req,res)=>{
    res.render('home', {page_title: 'Home'});
})

router.get('/:id' , verificacionToken ,obtenerUsuario );

module.exports = router;