const Op = require('sequelize').Op;
const {ProductoModel} = require('../connection');

class ProductoService {
    
    static async add(newProducto){
        return await ProductoModel.create(newProducto); 
    }

    static async getAll(){
        return await ProductoModel.findAll({
            raw: true,
            nest: true
         });
    }

    static async getById(id){
        return await ProductoModel.findByPk(id);
    }

    static async getProductoMedioDePago(idProducto){
        var producto = await ProductoModel.findAll({
            where : { id: idProducto}
            //include: ['producto_mediodepago']
        });
        return  producto;    
    }
}

module.exports = {
    ProductoService
}