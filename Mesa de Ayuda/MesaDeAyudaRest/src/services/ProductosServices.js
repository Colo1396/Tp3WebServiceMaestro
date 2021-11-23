const Op = require('sequelize').Op;
const { ProductoModel, MedioDePagoModel } = require('../database/connection');
const { MedioDePagoService } = require('./MedioDePagosService');

class ProductoService{
    static async getByUserId(idVendedor){
        const productos = await ProductoModel.findAll({
            where: {
                idVendedor: idVendedor
            }
         });
        return productos;    
    }

    static async getById(id){
        const producto = await ProductoModel.findOne({
            where: {
                id: id
            },
            include: [MedioDePagoModel]
        });
        return producto;    
    }

    static async add(producto, user){
        // Chequeo que los medios de pago enviados existan, esto se puede mejorar
        for(var i = 0; i < producto.mediosDePago.length; i++){
            const medio = await MedioDePagoService.getById(producto.mediosDePago[i]);
            if(!medio){
                throw new Error('Uno o varios de los medios de pago seleccionados no existen');
            }
        }

        producto.idVendedor = user.id;
        producto.cantidadVentas = 0;
        //const result = await uploader.upload(producto.imagen);
        //producto.imagen = result.url;

        const createdProducto = await ProductoModel.create(producto);
        await createdProducto.setMedioDePagos(producto.mediosDePago);
        return createdProducto;
    }   

    static async update(producto, idProducto){

        if(producto.mediosDePago){
            for(let i = 0; i < producto.mediosDePago.length; i++){
                const medio = await MedioDePagoService.getById(producto.mediosDePago[i].id);
                console.log(medio);
                if(!medio){
                    throw new Error('Uno o varios de los medios de pago seleccionados no existen');
                }
            }
        }

        const productoData = await ProductoModel.findByPk(idProducto);
        // Si ya se realizaron ventas del producto solo puede cambiar stock y medios de pago
        if(productoData.cantidadVentas > 0){
            producto = {
                stock: producto.stock,
                mediosDePago: producto.mediosDePago
            }
        }
/*
        var newImagen = undefined;
        const previousImage = path.basename(productoData.imagen, path.extname(productoData.imagen));
        if(producto.imagen){
            const result = await uploader.upload(producto.imagen);
            newImagen = result.url;
        }
*/
        await productoData.update(
            {
                ...producto.nombre ? { nombre: producto.nombre } : {},
                ...producto.descripcion ? { descripcion: producto.descripcion } : {},
                //...newImagen ? { imagen: newImagen } : {},
                ...producto.imagen ? { imagen: producto.imagen } : {},
                ...producto.precio ? { precio: producto.precio } : {},
                ...producto.stock ? { stock: producto.stock } : {},
                ...producto.cantidadVentas ? { cantidadVentas: producto.cantidadVentas } : {},
            }
        );
        
        if(producto.mediosDePago){
            producto.mediosDePago.forEach(async(medio) => {
                await productoData.setMedioDePagos(medio.id);
            });
        }
        /*
        if(newImagen){
            await uploader.destroy(previousImage);
        }*/

        return productoData;
    }

    static async getAll(){
        var products = await ProductoModel.findAll({
            raw: true,
            nest: true
         });
         return products;
    }

    static async delete(idProducto){
        let prductoEliminado = await ProductoModel.destroy({
            where: {
                "id": idProducto
            }
        });
        return prductoEliminado;    }
}

module.exports = { ProductoService }