const Op = require('sequelize').Op;
const {CarritoModel} = require('../database/connection');

class CarritoService {
    
    static async add(newCarrito){
        return await CarritoModel.create(newCarrito); 
    }
}

module.exports = {
    CarritoService
}