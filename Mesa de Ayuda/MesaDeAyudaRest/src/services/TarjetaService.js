const Op = require('sequelize').Op;
const {TarjetaModel} = require('../database/connection');

class TarjetaService {
    
    static async add(newTarjeta){
        return await TarjetaModel.create(newTarjeta); 
    }
}

module.exports = {
    TarjetaService
}