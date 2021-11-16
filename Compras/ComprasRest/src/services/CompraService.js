const Op = require('sequelize').Op;
const {CompraModel} = require('../connection');

class CompraService {
    
    static async add(newCompra){
        return await CompraModel.create(newCompra); 
    }
}

module.exports = {
    CompraService
}