const {MedioDePagoService} = require('../services/MedioDePagosService');

const obtenerMediosDePago = async(req,res)=>{
        try{
            let mediosDePago = await MedioDePagoService.getAll();
            if(mediosDePago){
                res.status(200).json({
                    message: "mediosDePago succesfully encountered",
                    data: mediosDePago
                });        
            }else{
                res.status(200).json({
                        message: "mediosDePago not found",
                        data: mediosDePago
                });
            }
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "Something goes wrong"
            });
        } 
}

const obtenerMedioDePago = async(req,res)=>{
        try{
                const {id} = req.params;
                let medioDePago = await MedioDePagoService.getById(id);
                if(medioDePago){
                        res.status(200).json({
                                message: "medioDePago succesfully encountered",
                                data: medioDePago
                        });
                }else{
                        res.status(200).json({
                                message: "medioDePago not found",
                                data: medioDePago
                        });
                }
        }catch(err){
                console.log(err);
                        res.status(500).json({
                        message: "Something goes wrong"
                });
        }
}  

module.exports ={
        obtenerMediosDePago,
        obtenerMedioDePago
};   

