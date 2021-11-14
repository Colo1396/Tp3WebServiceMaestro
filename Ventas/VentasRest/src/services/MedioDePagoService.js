const Op = require('sequelize').Op;
const { MedioDePagoModel } = require('../connection');

class MedioDePagoService{
    static async getById(id){
        const medioDePago = await MedioDePagoModel.findByPk(id);
        return medioDePago;    
    }

    static async getAll(){
        const mediosDePago = await MedioDePagoModel.findAll({
            raw: true,
            nest: true
         });
        return mediosDePago;    
    }
}

module.exports = { MedioDePagoService }