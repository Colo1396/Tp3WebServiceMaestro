const Op = require('sequelize').Op;
const { uploader } = require('../middlewares/cloudinaryConfig');
const { ProductoModel, MedioDePagoModel } = require('../connection');
const { MedioDePagoService } = require('./MedioDePagoService');
const path = require('path');

class ProductoService{
    static async getAll(idVendedor = null, sinStock = null, precioGte = null, precioLte = null, idCategoria = null){
        const productos = await ProductoModel.findAll({
            where: {
                ...idVendedor ? {idVendedor: idVendedor} : {},
                ...sinStock ? {} : { stock: { [Op.gt]: 0 } },
                ...(precioGte && !precioLte) ? { precio: { [Op.gte]: precioGte } } : {},
                ...(precioLte && !precioGte) ? { precio: { [Op.lte]: precioLte } } : {},
                ...(precioGte && precioLte) ? { precio: { [Op.between]: [precioGte, precioLte] } } : {},
                ...idCategoria ? { idCategoria: idCategoria } : {}
            },
            include: ['mediosDePago', 'categoria'],
         });
        return productos;    
    }

    static async getById(id){
        const producto = await ProductoModel.findOne({
            where: {
                id: id
            },
            include: ['mediosDePago', 'categoria']
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
        const result = await uploader.upload(producto.imagen);
        producto.imagen = result.url;

        const createdProducto = await ProductoModel.create(producto);
        await createdProducto.setMediosDePago(producto.mediosDePago);
        return createdProducto;
    }   

    static async update(producto, idProducto){
        if(producto.mediosDePago){
            for(var i = 0; i < producto.mediosDePago.length; i++){
                const medio = await MedioDePagoService.getById(producto.mediosDePago[i]);
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

        var newImagen = undefined;
        const previousImage = path.basename(productoData.imagen, path.extname(productoData.imagen));
        if(producto.imagen){
            const result = await uploader.upload(producto.imagen);
            newImagen = result.url;
        }

        await productoData.update(
            {
                ...producto.nombre ? { nombre: producto.nombre } : {},
                ...producto.descripcion ? { descripcion: producto.descripcion } : {},
                ...newImagen ? { imagen: newImagen } : {},
                ...producto.precio ? { precio: producto.precio } : {},
                ...producto.stock ? { stock: producto.stock } : {},
            }
        );
        
        if(producto.mediosDePago){
            await productoData.removeMediosDePago();
            await productoData.setMediosDePago(producto.mediosDePago);
        }
        if(newImagen){
            await uploader.destroy(previousImage);
        }

        return productoData;
    }
}

module.exports = { ProductoService }