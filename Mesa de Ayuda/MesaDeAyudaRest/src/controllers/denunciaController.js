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
        //return res.render('listaDenuncias', {filtroDenuncias: filtrarDenuncias(denuncias)}); 
        return res.status(200).send({
            denuncias
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const obtenerDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        let denuncia = await DenunciaService.getById(id);
        if(denuncia){
            return res.status(200).send({
                denuncia
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({
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
           // return res.render('listaDenuncias', {filtroDenuncias: filtrarDenuncias(denuncias)});  
           return res.status(200).send({
                denuncias
           });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const crearDenuncia = async (req,res)=>{
    try{
        const {categoria, comentario,productoId} = req.body;

        let user = await UserService.getById(req.user.id);
        if( user ){
            let denuncia = {
                "categoria": categoria,
                "comentario": comentario,
                "productoId": productoId,
                "userId": user.id
            };
            let denunciaCreada = await DenunciaService.add(denuncia);
            //res.redirect("/home");
            res.status(200).send({
                message: 'Denuncia creada exitosamente!!!',
                denunciaCreada
            });

        }else return res.status(200).send({
            message: "El User indicado no existe"
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });    
    }
}

const aceptarDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        let denuncia = {
                "id": id,
                "estado": "resuelto",
        };
        var denunciasAceptadas = await DenunciaService.getAllByState("resuelto");

        for (let index = 0; index < denunciasAceptadas.length; index++) {
            if(denunciasAceptadas[index].id == id){
                return res.status(200).send({
                    message: 'La denuncia ya ha sido aceptada',
                    denunciaAceptada: denunciasAceptadas[index]
                });
            }
        }
        await DenunciaService.update(denuncia);

        //procedo a eliminar el producto de la denuncia
        let denunciaAceptada = await DenunciaService.getById(id);
        let productoEliminado = await ProductoService.delete(denunciaAceptada.productoId);

        return res.status(200).send({
            message: 'Denuncia aceptada exitosamente!!!',
            denunciaAceptada,
            productoEliminado
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const rechazarDenuncia = async(req,res)=>{
    try{
        const {id} = req.params;
        await DenunciaService.delete(id);
        //return res.redirect('/denuncias/lista');
        res.status(200).send({
            message: 'Denuncia rechazada exitosamente!!!'
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

module.exports = {
    crearDenuncia,
    aceptarDenuncia,
    rechazarDenuncia,
    obtenerDenuncia,
    obtenerDenunciasPorEstado,
    obtenerDenuncias
}