const Op = require('sequelize').Op;
const {ProductoCarritoModel} = require('../connection');

class ProductoCarritoService {
    
    static async add(newProductoCarrito){
        return await ProductoCarritoModel.create(newProductoCarrito); 
    }

    static async getProductoCarritoByVendedoryComprador(idCarrito, idProducto){
        var productoCarrito = await ProductoCarritoModel.findOne({
            where : { 
                [Op.and]: [ {idCarrito: idCarrito }, { idProducto: idProducto}],
            }
        });
        return productoCarrito;    
    }

    static async update(producto){
        var productoActualizado = await ProductoCarritoModel.update(
            {cantidad: producto.cantidad, idProducto: producto.idProducto, idCarrito: producto.idCarrito},
            {where: {
                id: producto.id
            }},
        );
        return productoActualizado;
    }
}

module.exports = {
    ProductoCarritoService
}