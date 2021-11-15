const {ReclamoService} = require('../services/ReclamoService');
const {UserService} = require('../services/UsuarioServices');

const crearReclamo = async(req,res) =>{
    try{
        const {productoId, compradorId} = req.body;

        let user = await UserService.getById(compradorId);
        if( user ){
            let reclamo = {
                "productoId": productoId,
                "compradorId": compradorId
            };
            let reclamoCreado = await ReclamoService.add(reclamo);
            return res.status(200).json({
                message: "Reclamo creado con exito!!!",
                data: reclamoCreado
            });
        }else return res.status(400).json({
            message: "El User indicado no existe"
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    crearReclamo
}