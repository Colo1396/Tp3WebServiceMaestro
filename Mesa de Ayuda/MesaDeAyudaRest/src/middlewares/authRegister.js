const {RolService} = require('../services/RolServices');

const validarRegister = async(req,res,next)=>{
    const rolAsignado = await RolService.getById(req.body.rolId);
    console.log(rolAsignado);
    if(rolAsignado){
        if(rolAsignado.tipo === "comprador" || rolAsignado.tipo === "vendedor"){
            next();
        }else{
            return res.render('login'); //si no es de rol comprador y vendedor lo redirige a la vista de login
        }
    }else{
        next();
    }

}

module.exports = {
    validarRegister
}