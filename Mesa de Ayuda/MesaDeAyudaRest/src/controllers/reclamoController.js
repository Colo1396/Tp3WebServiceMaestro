const {ReclamoService} = require('../services/ReclamoService');
const {UserService} = require('../services/UsuarioServices');


const obtenerReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        let reclamo = await ReclamoService.getById(id);
        if(reclamo){
            res.status(200).json({
                message: "reclamo encontrado exitosamente",
                data: reclamo
            });
        }else{
            res.status(200).json({
                message: "no se encontro el reclamo",
                data: reclamo
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

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

const modificarReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {estado} = req.body;        
        let reclamo = {
                "id": id,
                "estado": estado,
        };
        let reclamoModificado = await ReclamoService.update(reclamo);
            return res.status(200).json({
                message: "Reclamo modificado con exito!!!",
                data: reclamoModificado
            });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

const eliminarReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        let reclamoEliminado = await ReclamoService.delete(id);
            return res.status(200).json({
                message: "Reclamo eliminado con exito!!!",
                data: reclamoEliminado
            });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}


module.exports = {
    crearReclamo,
    modificarReclamo,
    eliminarReclamo,
    obtenerReclamo
}