const Op = require('sequelize').Op;
const {ProductoCarritoModel} = require('../database/connection');

class ProductoCarritoService {
    
    static async add(newProductoCarrito){
        return await ProductoCarritoModel.create(newProductoCarrito); 
    }
}

module.exports = {
    ProductoCarritoService
}