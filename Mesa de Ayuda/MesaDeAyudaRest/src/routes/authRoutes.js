const {Router} = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const {validarRegister} = require('../middlewares/authRegister');
const {isAuthenticated,isNotAuthenticated} = require('../middlewares/authenticate');
const {RolService} = require('../services/RolServices');
const {UserService} = require('../services/UsuarioServices');

/*****AUTENTICACION DE USUARIO LOGIN/REGISTER***/
router.get('/register', isNotAuthenticated , async(req,res)=>{
    const roles = await RolService.getAll();
    let rolesBuscados = [];
    roles.forEach(rol => {
        if(rol.tipo !== "mesa") rolesBuscados.push(rol);
    });
    res.render('register', {rolesBuscados: rolesBuscados});
});
router.post('/registerPost',[isNotAuthenticated,validarRegister] ,async (req,res) =>{
    try{
        let {username,password,dni,nombre,apellido, rolId} = req.body;
        if(rolId === undefined) rolId = 1; //por defecto si no se le asigna un rol, tendra por defecto el rol "comprador"
        const user =await UserService.register({
            rolId,
            username,
            password,
            dni,
            nombre,
            apellido
        });
        return res.status(200).json({
            user
        });
    }catch(err){
        return res.status(500).json({
            message: 'Ocurrio un error --> '+ err
        });
    }
});

router.get('/login', isNotAuthenticated ,(req,res)=>{
    res.render('login');
});
router.post('/loginPost',isNotAuthenticated,async(req,res)=>{
    try{
        let {username, password} = req.body;
        const sessionInfo = await UserService.login({
            username,
            password
        });
        return res.status(200).json({
            sessionInfo
        });
    }catch(err){
        res.status(500).json({
            message: 'Ocurrio un error --> '+err
        });
    }
});
/*
router.post('/logout', isAuthenticated ,async(req, res) => {
    try{
        console.log(req.header('auth_token'));
        var tokenSession =req.header('auth_token');
        tokenSession.replace(tokenSession,'');

        //le quito el token de la session al user, agregandole ''
        res.status(200).send({
            message: `Usuario deslogueado exitosamente`
        });
    }catch(err){
        res.status(500).json({
            message: 'Ocurrio un error --> '+ err
        });
    }
});
*/



/************* HOME ****************/
router.get('/' ,(req,res)=>{
    res.redirect('/login');
});
router.get('/home', isAuthenticated , (req,res)=>{
    res.render('home');
});

module.exports = router;