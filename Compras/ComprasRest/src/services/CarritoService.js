const Op = require('sequelize').Op;
const {CarritoModel} = require('../connection');
const {ProductoModel} = require('../connection');

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

    static async getCarritosByUser(idUser){
        var carritos = await CarritoModel.findAll({
            attributes: ['id', 'idVendedor'],
            where : { idComprador: idUser}
        });
        return  carritos;    
        //return {domicilios};
    }

    static async getCarritoByPk(idCarrito){
        var carrito = await CarritoModel.findAll({
            where : { id: idCarrito},
            include: ['productosCarrito', 'vendedor']
        });
        //var carrito = await CarritoModel.findByPk(idCarrito);

        return  carrito;    
        //return {domicilios};
    }
    
    static async update(carrito){
        var carritoActualizado = await CarritoModel.update(
            {total: carrito.total, idComprador: carrito.idComprador, idVendedor: carrito.idVendedor},
            {where: {
                id: carrito.id
            }},
        );
        return carritoActualizado;
    }


}

module.exports = {
    CarritoService
}