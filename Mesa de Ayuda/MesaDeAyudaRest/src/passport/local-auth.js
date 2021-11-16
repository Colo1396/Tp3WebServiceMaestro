const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const {UserService} = require('../services/UsuarioServices');

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req,username,password, done)=>{
    let userExistente = await UserService.getByUsername(username);
    if( userExistente){
        console.log("Usuario existente");
        return done(null, false);
    }else{
        let {nombre, apellido, dni, rolId} = req.body;
        if(rolId === undefined) rolId = 1;//si el rol no se indica, por defecto se le agrega el rol "comprador"
        let usuarioModel={
            "rolId": parseInt(rolId),
            "nombre": nombre,
            "apellido": apellido,
            "dni": parseInt(dni),
            "username": username,
            "password": password,
        }
        console.log(usuarioModel);
        const nuevoUsuario = await UserService.register(usuarioModel);
        usuarioModel.id = nuevoUsuario.id; 
        return done(null, usuarioModel);
    }

}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done)=>{
    const user = await UserService.getByUsername(username);
    if(user){
        let userALoguearse = {
            "username": username,
            "password": password,
            "rolId": user.rolId,
            "nombre": user.nombre,
            "apellido": user.apellido,
            "dni": user.dni
        };
        const isValid = await UserService.login(userALoguearse);
        if(isValid){
            done(null,user);
        }else{
            done(null, false);
        }
    }else{
        console.log("El usuario no existe");
        return done(null, false);
    }
}));

//SERIALIZO EL USER EN BASE AL ID
passport.serializeUser((user, done) => {
    done(null, user.id); //para guardar la session
  });
  
  //DESERIALIZO EN BASE AL ID
  passport.deserializeUser(async (id, done) => {
    const user = await UserService.getById(id);
    done(null, user);
  });
