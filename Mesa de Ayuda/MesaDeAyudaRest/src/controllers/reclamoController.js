const {ReclamoService} = require('../services/ReclamoService');
const {UserService} = require('../services/UsuarioServices');
const {CompraService} = require('../services/CompraService');


const filtrarReclamos =  (reclamosAFiltrar)=>{
    let filtroReclamos = [];
    reclamosAFiltrar.forEach((r) => {
        if(r.estado === "a resolver") {
            filtroReclamos.push({
                resuelto: false,
                reclamo: r,
            });
        }else{
            filtroReclamos.push({
                resuelto: true,
                reclamo: r,
            });
        }
    });
    return filtroReclamos;
}

const obtenerReclamos = async(req,res)=>{
    try{
        let reclamos = await ReclamoService.getAll();
       // return res.render('listaReclamos', {filtroReclamos: filtrarReclamos(reclamos)});  
       res.status(200).send({
         reclamos
       });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}


const obtenerReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        let reclamo = await ReclamoService.getById(id);
        if(reclamo){
            res.status(200).send({
                reclamo
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const obtenerReclamosPorEstado = async(req,res)=>{
    try{
        const {estado} = req.body;
        let reclamos = [];

        if(estado === "todos") reclamos = await ReclamoService.getAll();
        else reclamos = await ReclamoService.getAllByState(estado);
        if(reclamos){
            //return res.render('listaReclamos', {filtroReclamos: filtrarReclamos(reclamos)});  
            return res.status(200).send({
                reclamos
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const crearReclamo = async(req,res) =>{
    try{
        let user = await UserService.getById(req.user.id);
        if( user ){
            let reclamo = {
                "compraId": req.body.compraId,
                "compradorId": user.id
            };
            let reclamoCreado = await ReclamoService.add(reclamo);
            return res.status(200).send({
                message: "Reclamo creado con exito!!!",
                reclamoCreado
            });
        }else return res.status(400).send({
            message: "El User indicado no existe"
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });    
    }
}

const aceptarReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        let reclamo = {
                "id": id,
                "estado": "resuelto",
        };
        var reclamosAceptados = await ReclamoService.getAllByState("resuelto");

        for (let index = 0; index < reclamosAceptados.length; index++) {
            if(reclamosAceptados[index].id == id){
                return res.status(200).send({
                    message: 'El reclamo ya ha sido aceptado',
                    reclamoAceptado: reclamosAceptados[index]
                });
            }
        }
        await ReclamoService.update(reclamo);
        let reclamoAceptado = await ReclamoService.getById(id);
        //res.redirect("/reclamos/lista");
        return res.status(200).send({
            message: 'Reclamo aceptado exitosamente!!!',
            reclamoAceptado
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}

const rechazarReclamo = async(req,res)=>{
    try{
        const {id} = req.params;
        let reclamoEliminado = await ReclamoService.delete(id);
            return res.status(200).send({
                message: "Reclamo rechazado con exito!!!",
            });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Ocurrio un error --> "+err
        });
    }
}


module.exports = {
    crearReclamo,
    aceptarReclamo,
    rechazarReclamo,
    obtenerReclamo,
    obtenerReclamosPorEstado,
    obtenerReclamos
}