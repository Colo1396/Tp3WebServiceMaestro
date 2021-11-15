const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');

const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config.security');


const registrarse = async(req, res)=> {
    try{
        const {username,password,nombre,apellido,dni, rolId} = req.body;
        let user ={
            "username": username,
            "password": password,
            "nombre": nombre,
            "apellido": apellido,
            "dni": parseInt(dni),
            "rolId": rolId
        };
        console.log(user); 
        const rolAsignado = await RolService.getById(rolId);
        if(!rolAsignado){
            const rolUser = await RolService.getByType("user"); //cuando no se le indica un rol, el rol por defecto es rol "user"
            user.rolId = rolUser.id;
        }

        let nuevoUsuario = await UserService.register(user);
        
        if(nuevoUsuario){

            const token = jwt.sign({id: nuevoUsuario.id}, SECRET, {
                expiresIn: 1200 //expira en 1 hora el token
            });
            /*
            res.status(200).json({
                message: "User created succesfully!!!",
                data: nuevoUsuario,
                token: token
            });
            */
            res.redirect('/api/usuarios/login');

        }else{
            res.status(200).json({
            message: "User cant be created",
            data: nuevoUsuario
            });
            res.redirect('/api/usuarios/register');
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

const ingresar = async(req,res)=>{
        let user = {
            "username": req.body.username,
            "password": req.body.password
        }
        if(user){
            try{
                let loginInfo = await UserService.login(user);
                /*
                return res.status(200).json({
                    message: "login succesfully!!!",
                    data: loginInfo
                });
                */
               res.redirect("/api/usuarios/home");
            }catch(err){
                console.log(err);
                /*
                return res.status(400).json({
                    message: "cant connect because -->" + err
                });
                */
                res.redirect("/api/usuarios/login");

            }

        }
}

const obtenerUsuarios = async(req,res)=>{
    try{
        let users = await UserService.getAll();
        if(users){
            res.status(200).json({
                message: "Users succesfully encountered",
                data: users
            });        
        
        }else{
            res.status(200).json({
            message: "Users not found",
            data: users
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    } 
}

const obtenerUsuario = async(req,res)=>{
    try{
        const {id} = req.params;
        let user = await UserService.getById(id);
        if(user){
            res.status(200).json({
                message: "User succesfully encountered",
                data: user
            });
        }else{
            res.status(200).json({
                message: "User not found",
                data: user
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

module.exports ={
    registrarse,
    ingresar,
    obtenerUsuarios,
    obtenerUsuario
};   
