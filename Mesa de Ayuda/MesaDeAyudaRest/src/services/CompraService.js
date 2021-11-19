const Op = require('sequelize').Op;
const {CompraModel} = require('../database/connection');

class CompraService {
    
    static async add(newCompra){
        return await CompraModel.create(newCompra); 
    }

    static async getById(idCompra){
        let compra = await CompraModel.findByPk(idCompra);
        return compra;
    }
}

module.exports = {
    CompraService
}