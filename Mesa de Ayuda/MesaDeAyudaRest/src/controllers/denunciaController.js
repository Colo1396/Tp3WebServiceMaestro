const {UserService} = require('../services/UsuarioServices');
const {DenunciaService} = require('../services/DenunciaService');
const {ProductoService} = require('../services/ProductosServices');

const filtrarDenuncias = (denunciasAFiltrar)=>{
    let filtroDenuncias = [];
    denunciasAFiltrar.forEach((d) => {
        if(d.estado === "a resolver") {
            filtroDenuncias.push({
                resuelto: false,
                denuncia: d,
            });
        }else{
            filtroDenuncias.push({
                resuelto: true,
                denuncia: d,
            });
        }
    });
    return filtroDenuncias;
}

const obtenerDenuncias = async(req,res)=>{
    try{
        let denuncias = await DenunciaService.getAll();
        return res.render('listaDenuncias', {filtroDenuncias: filtrarDenuncias(denuncias)});  
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Ocurrio un error --> "+err
        });
    }
}

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

const obtenerDenunciasPorEstado = async(req,res)=>{
    try{
        const {estado} = req.body;
        let denuncias = [];
        if(estado === "todos") denuncias = await DenunciaService.getAll();
        else denuncias = await DenunciaService.getAllByState(estado);

        if(denuncias){
            return res.render('listaDenuncias', {filtroDenuncias: filtrarDenuncias(denuncias)});  
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
        const {categoria, comentario,productoId} = req.body;

        let user = await UserService.getById(res.locals.currentUser.dataValues.id);
        if( user ){
            let denuncia = {
                "categoria": categoria,
                "comentario": comentario,
                "productoId": productoId,
                "userId": user.id
            };
            let denunciaCreada = await DenunciaService.add(denuncia);
            res.redirect("/home");

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
        let denuncia = {
                "id": id,
                "estado": "resuelto",
        };
        let denunciaModificada = await DenunciaService.update(denuncia);
        return res.redirect('/denuncias/lista');
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
        return res.redirect('/denuncias/lista');
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
    obtenerDenuncia,
    obtenerDenunciasPorEstado,
    obtenerDenuncias
}