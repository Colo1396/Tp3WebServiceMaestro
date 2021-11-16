const {Router} = require('express');
const router = Router();
const {validarRegister} = require('../middlewares/authRegister');
const {isLoggedIn, isNotLoggedIn} = require('../libs/auth');
const passport = require('passport');
const {RolService} = require('../services/RolServices');


/*****AUTENTICACION DE USUARIO LOGIN/REGISTER***/
router.get('/register', isNotLoggedIn , async(req,res)=>{
    const roles = await RolService.getAll();
    let rolesBuscados = [];
    roles.forEach(rol => {
        if(rol.tipo !== "mesa") rolesBuscados.push(rol);
    });
    res.render('register', {rolesBuscados: rolesBuscados});
});
router.post('/registerPost', validarRegister ,passport.authenticate('local-signup',{
    successRedirect: '/home',
    failureRedirect: '/register',
    passReqToCallback: true
}));

router.get('/login', isNotLoggedIn ,(req,res)=>{
    res.render('login');
});
router.post('/loginPost', passport.authenticate('local-signin',{
    successRedirect: '/home',
    failureRedirect: '/login',
    passReqToCallback: true
}));

router.get('/logout', isLoggedIn , (req, res) => {
    req.logOut(); //Función de passport para eliminar la sesión
    res.render('login', { page_title: 'Login' });
});

module.exports = router;