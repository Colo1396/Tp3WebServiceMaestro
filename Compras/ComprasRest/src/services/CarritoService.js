const Op = require('sequelize').Op;
const {CarritoModel} = require('../connection');

class CarritoService {
    
    static async add(newCarrito){
        return await CarritoModel.create(newCarrito); 
    }
}

module.exports = {
    CarritoService
}