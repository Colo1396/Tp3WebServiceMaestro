const { MedioDePagoService } = require('../services/MedioDePagoService');

const getAllMedios = async (req, res) => {
    try{
        const mediosDePago = await MedioDePagoService.getAll();
        res.status(200).send(mediosDePago);
    } catch(err){
        console.error(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = {
    getAllMedios
}