const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const {UserService} = require('../services/UserService');
const {validarRegister} = require('../middlewares/authRegister');

//Rutas de usuarios
router.post('/register', validarRegister, async(req, res) =>{ 
    //Parámetros de la petición
    let params = req.body;
    
    try{
        //Valido los datos
        var validate_nombre = !validator.isEmpty(params.nombre);
        var validate_apellido = !validator.isEmpty(params.apellido);
        var validate_username = !validator.isEmpty(params.username);
        var validate_password = !validator.isEmpty(params.password);
        var validate_dni = !validator.isEmpty(params.dni);
    }catch(err){
        return res.status(200).send({
            message: "Faltan datos por enviar.", 
            params
        });
    }

    //Validación correcta
    if(validate_nombre && validate_apellido && validate_username && validate_password && validate_dni){
        
        //Compruebo si el usuario existe
        var userExistente = await UserService.getUserByDniyUsername(params.dni, params.username);
        console.log(userExistente);
        //Si no existe,
        //if(!userExistente){
        if(userExistente.user == null){
            //Cifrar la contraseña
            const salt = await bcrypt.genSalt(10); //genero un patron
            const hash = await bcrypt.hash(params.password, salt); //le doy la pass y el patron
            
            //Guardar usuario
            //FUNCIONA
            //const result = await UserService.add(user);
            const result = await UserService.add(params.username, hash, params.rolId, params.nombre, params.apellido, params.dni);
            //Devolver respuesta        
            return res.status(200).send({
                status : "success nuevo user registrado",
                user: result
            });
        
        }else{
            return res.status(200).send({
                message: "El usuario ya está registrado"
            });
        }
    }else{
        //Devuelvo otra respuesta
        return res.status(400).send({
            message: "Validación de los datos del usuario incorrecta, intentalo de nuevo "
        });
    }
});

router.post('/login', async(req, res) =>{ 
    //Parámetros de la petición
    const params = req.body;

    try{
        //Valido los datos
        var validate_username = !validator.isEmpty(params.username);
        var validate_password = !validator.isEmpty(params.password);
    }catch(err){
        return res.status(200).send({
            message: "Faltan datos por enviar"
        });
    }

    if(!validate_username || !validate_password){
        return res.status(200).send({
            message: "Los datos son incorrectos."
        });
    }

    //Buscar usuarios que coincidan con el username
    var userExistente = await UserService.getByUsername(params.username);
    //Si no lo encuentra
    if(userExistente.user == null){
        return res.status(404).send({
            message: "El usuario no existe."
        });
    }

    //Comprobar la contraseña (coincidencia de username y password / bcrypt)
    const validPassword = await bcrypt.compare(params.password, userExistente.user.password);
    //Si es correcto
    if(validPassword){
        //Generar token de jwt y devolverlo 
        if(params.gettoken){
            //Devolver los datos
            return res.status(200).send({
                token: jwt.createToken(userExistente.user)
            });
        }

        //No devuelvo la contraseña
        userExistente.user.password = undefined;
        userExistente.user.createdAt = undefined;
        userExistente.user.updatedAt = undefined;
        
        //Devolver los datos
        return res.status(200).send({
            status: "success",
            userExistente
        });
        
    }else{
        return res.status(404).send({
            message: "Username o password incorrecto."
        });
    }
});

router.put('/updateUser', auth.authenticated, async(req, res) =>{
    
    //Obtener datos del usuario
    var params = req.body;

    
    try{
        //Validacion datos
        var validate_nombre = !validator.isEmpty(params.nombre);
        var validate_apellido = !validator.isEmpty(params.apellido);
        var validate_username = !validator.isEmpty(params.username);
        var validate_dni = !validator.isEmpty(params.dni);
    }catch(er){
        return res.status(200).send({
            message: "Faltan datos por enviar.", 
            params
        });
    }
    //Eliminar propiedades innecesarias
    delete params.password;
    delete params.rol;

    //Buscar y actualizar
    var userId = req.user.sub;

    //Comprobar si el username es unico
    var usernameExistente = await UserService.getByUsername(params.username);
    console.log(usernameExistente);
    
    if(usernameExistente.user){
        return res.status(200).send({
            message: "El username no puede ser modificado porque ya está en uso."
        });
    }
    
    //Comprobar si el DNI es unico
    var dniExistente = await UserService.getByDni(params.dni);
    console.log(dniExistente);
    
    if(dniExistente.user){
        return res.status(200).send({
            message: "El dni no puede ser modificado porque ya está en uso."
        });
    }

    try{
        //SOLO PERMITIA MODIFICAR NOMBRE, APELLIDO
        //var userActualizado = await UserService.updateUser(userId, params.nombre, params.apellido);
        var userActualizado = await UserService.updateUser(userId, params.username, params.nombre, params.apellido, params.dni);
    }catch(err){
        return res.status(500).send({
            status: "error",
            message: "Error al actualizar el usuario." 
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        message: "Update user.", 
        user: userActualizado
    });
    
});

router.get('/users', async(req, res) =>{
    
    var users = await UserService.getAll();

    console.log(users);
    if(users.users.length == 0){
        return res.status(400).send({
            status: "error",
            message: "No hay usuarios que mostrar."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        users
    });
});

router.get('/user/:userId', auth.authenticated, async(req, res) =>{

    var userId = req.params.userId;

    console.log(userId);
    
    var user = await UserService.getById(userId);

    console.log(user);
    if(user.user == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        user
    });
});


module.exports = router;