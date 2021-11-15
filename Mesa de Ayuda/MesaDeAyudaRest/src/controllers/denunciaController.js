const {UserService} = require('../services/UsuarioServices');
const {DenunciaService} = require('../services/DenunciaService');

const obtenerDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        let denuncia = await DenunciaService.getById(id);
        if(denuncia){
            res.status(200).json({
                message: "denuncia encontrada exitosamente",
                data: denuncia
            });
        }else{
            res.status(200).json({
                message: "no se encontro la denuncia",
                data: denuncia
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

const crearDenuncia = async (req,res)=>{
    try{
        const {categoria, comentario,productoId, compradorId} = req.body;

        let user = await UserService.getById(compradorId);
        if( user ){
            let denuncia = {
                "categoria": categoria,
                "comentario": comentario,
                "productoId": productoId,
                "compradorId": compradorId
            };
            let denunciaCreada = await DenunciaService.add(denuncia);
            return res.status(200).json({
                message: "Denuncia creada con exito!!!",
                data: denunciaCreada
            });
        }else return res.status(200).json({
            message: "El User indicado no existe"
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });    
    }
}

const modificarDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        const {estado} = req.body;        
        let denuncia = {
                "id": id,
                "estado": estado,
        };
        let denunciaModificada = await DenunciaService.update(denuncia);
            return res.status(200).json({
                message: "Denuncia modificada con exito!!!",
                data: denunciaModificada
            });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

const eliminarDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        let denunciaEliminada = await DenunciaService.delete(id);
            return res.status(200).json({
                message: "Denuncia eliminada con exito!!!",
                data: denunciaEliminada
            });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

module.exports = {
    crearDenuncia,
    modificarDenuncia,
    eliminarDenuncia,
    obtenerDenuncia
}