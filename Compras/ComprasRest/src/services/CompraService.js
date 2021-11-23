const Op = require('sequelize').Op;
const {CompraModel} = require('../connection');

class CompraService {
    
    static async add(newCompra){
        return await CompraModel.create(newCompra); 
    }

    static async getCompraByCarrito(idCarrito){
        var compra = await CompraModel.findAll({
            where : { idCarrito: idCarrito}
        });
        return  compra;    
    }

    static async getCompra(idCompra){
        var compra = await CompraModel.findOne({
            where : { id: idCompra},
            include: ['comprador', 'vendedor', 'carrito', 'destino', 'medioDePago' ]
        });
        return  compra;    
    }
}

module.exports = {
    CompraService
}