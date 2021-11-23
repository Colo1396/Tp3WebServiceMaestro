const {RolService} = require('../services/RolServices');

const validarRegister = async(req,res,next)=>{
    const rolAsignado = await RolService.getById(req.body.rolId);
    console.log(rolAsignado);
    if(rolAsignado){
        if(rolAsignado.tipo === "comprador" || rolAsignado.tipo === "vendedor"){
            next();
        }
    }
}

module.exports = {
    validarRegister
}