const {RolService} = require('../services/RolServices');

const validarRegister = async(req,res,next)=>{
    const rolAsignado = await RolService.getById(req.body.rolId);
    if(rolAsignado){
        if(rolAsignado.tipo === "user" || rolAsignado.tipo === "vendedor"){
            next();
        }else return res.status(403).json({
            "message": "Unauthorized rol for register"
        });
    }else{
        next();
    }

}

module.exports = {
    validarRegister
}