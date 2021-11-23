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

    static async getComprasByUser(idUser){
        var compras = await CompraModel.findAll({
            attributes: ['id', 'createdAt'],
            where : { idComprador: idUser}
        });
        return  compras;    
    }

    static async getFechaCompra(idCompra){
        var compra = await CompraModel.findOne({
            attributes: ['id', 'createdAt'],
            where : { id: idCompra}
        });
        return  compra;    
    }

}

module.exports = {
    CompraService
}