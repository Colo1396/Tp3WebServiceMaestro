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
                [Op.and]: [ 
                    {idVendedor: idVendedor }, 
                    { idComprador: idComprador},
                    { idCompra: {
                        [Op.eq]: null
                        }
                    }]
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
    }

    static async getCarritosByUserSinAsociarEnCompra(idUser){
        var carritos = await CarritoModel.findAll({
            attributes: ['id', 'idVendedor'],
            where:{
                [Op.and]: [ 
                    {idComprador: idUser }, 
                    { idCompra: {
                    [Op.eq]: null
                        }
                    }],
            }
        });
        return  carritos;    
    }

    static async getCarritoByPk(idCarrito){
        var carrito = await CarritoModel.findAll({
            where : { id: idCarrito},
            include: ['productosCarrito', 'vendedor']
        });
        return  carrito;    
    }
    
    static async update(carrito){
        console.log("dentro de update");
        console.log(carrito);
        var carritoActualizado = await CarritoModel.update(
            {total: carrito.total, idComprador: carrito.idComprador, idVendedor: carrito.idVendedor, idCompra: carrito.idCompra},
            {where: {
                id: carrito.id
            }},
        );
        console.log(carritoActualizado);

        return carritoActualizado;
    }


    static async getById(idCarrito){
        var carrito = await CarritoModel.findByPk(idCarrito);
        return  carrito;    
    }


}

module.exports = {
    CarritoService
}