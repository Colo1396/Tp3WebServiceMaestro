const Op = require('sequelize').Op;
const {CarritoModel} = require('../connection');

class CarritoService {
    
    static async add(newCarrito){
        return await CarritoModel.create(newCarrito); 
    }

    static async getCarritoByVendedor(idVendedor){
        var carrito = await CarritoModel.findOne({
            where : { idVendedor: idVendedor}
            //attributes: ['username', 'password', 'nombre', 'apellido']
        });
        return carrito;    
    }

    static async getCarritoByVendedoryComprador(idVendedor, idComprador){
        var carrito = await CarritoModel.findOne({
            where : { 
                [Op.and]: [ {idVendedor: idVendedor }, { idComprador: idComprador}],
            }
            //attributes: ['username', 'password', 'nombre', 'apellido']
        });
        return carrito;    
    }



}

module.exports = {
    CarritoService
}