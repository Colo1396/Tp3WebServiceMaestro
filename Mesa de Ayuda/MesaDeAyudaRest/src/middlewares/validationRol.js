const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');

const esRolComprador = async(req,res,next)=>{
    const user = await UserService.getById(req.user.id);
    const rol = await RolService.getById(user.rolId);

    console.log(rol);
    if(rol.tipo === "comprador"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'comprador'"
    });
}

const esRolVendedor = async(req,res,next)=>{
    const user = await UserService.getById(req.user.id);
    const rol = await RolService.getById(user.rolId);
    if(rol.tipo === "vendedor"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'vendedor'"
    });
}

const esRolMesaDeAyuda = async(req,res,next)=>{
    const user = await UserService.getById(req.user.id);
    console.log(user);
    const rol = await RolService.getById(user.rolId);

    console.log(rol);
    if(rol.tipo === "mesa"){
        next();
    }else return res.status(403).json({
        "message": "Requiere el rol 'mesa'"
    });
}

module.exports = {
    esRolComprador,
    esRolMesaDeAyuda,
    esRolVendedor
}