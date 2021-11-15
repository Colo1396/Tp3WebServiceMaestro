const {MedioDePagoService} = require('../services/MedioDePagosService');

const obtenerMediosDePago = async(req,res)=>{
        try{
            let mediosDePago = await MedioDePagoService.getAll();
            if(mediosDePago){
                res.status(200).json({
                    message: "mediosDePago encontrados exitosamente",
                    data: mediosDePago
                });        
            }else{
                res.status(200).json({
                        message: "mediosDePago no encontrado",
                        data: mediosDePago
                });
            }
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "Ocurrio un error --> "+ err
            });
        } 
}

const obtenerMedioDePago = async(req,res)=>{
        try{
                const {id} = req.params;
                let medioDePago = await MedioDePagoService.getById(id);
                if(medioDePago){
                        res.status(200).json({
                                message: "medioDePago encontrado exitosamente",
                                data: medioDePago
                        });
                }else{
                        res.status(200).json({
                                message: "medioDePago no encontrado",
                                data: medioDePago
                        });
                }
        }catch(err){
                console.log(err);
                        res.status(500).json({
                        message: "Ocurrio un error --> "+ err
                });
        }
}  

module.exports ={
        obtenerMediosDePago,
        obtenerMedioDePago
};   

