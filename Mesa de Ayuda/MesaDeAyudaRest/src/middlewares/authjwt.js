const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config.security');
const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');

const verificacionToken = async (req,res,next) =>{
    const token = req.headers["x-access-token"];
    console.log(token);  

    if(!token) return res.status(403).json({
        message: "No token provided"
    });

    const decoded = jwt.verify(token,SECRET);
    req.userId = decoded.id;
    const user = await UserService.getById(req.userId);
    if(!user){
        res.status(400).json({
            message: "User not exist!!!"
        })
    }
    next();
}

const esRolUser = async(req,res,next)=>{
    const user = await UserService.getById(req.userId);
    const rol = await RolService.getById(user.rolId);

    console.log(rol);
    if(rol.tipo === "user"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'user'"
    });
}

const esRolVendedor = async(req,res,next)=>{
    const user = await UserService.getById(req.userId);
    const rol = await RolService.getById(user.rolId);

    console.log(rol);
    if(rol.tipo === "vendedor"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'vendedor'"
    });
}

const esRolMesaDeAyuda = async(req,res,next)=>{

    const user = await UserService.getById(req.userId);
    const rol = await RolService.getById(user.rolId);

    console.log(rol);
    if(rol.tipo === "mesa"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'mesa'"
    });
}

module.exports = {
    verificacionToken,
    esRolUser,
    esRolVendedor,
    esRolMesaDeAyuda
}