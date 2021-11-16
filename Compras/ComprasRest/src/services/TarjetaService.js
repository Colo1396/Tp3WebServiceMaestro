const Op = require('sequelize').Op;
const {TarjetaModel} = require('../connection');

class TarjetaService {
    
    static async add(newTarjeta){
        return await TarjetaModel.create(newTarjeta); 
    }
}

module.exports = {
    TarjetaService
}