const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const {CarritoService} = require('../services/CarritoService');
const {ProductoService} = require('../services/ProductoService');
const {ProductoCarritoService} = require('../services/ProductoCarritoService');
const {UserService} = require('../services/UserService');
const ProductoCarrito = require('../models/ProductoCarrito');
const { CompraService } = require('../services/CompraService');


router.post('/addProductoCarrito', auth.authenticated, async(req, res) =>{
    let params = req.body;
    console.log("llego");

    try{
        //Busco el producto para obtener su vendedor
        var producto = await ProductoService.getById(params.idProducto);
        if(producto.stock >= params.cantidad && params.cantidad > 0){
            var datosNuevoCarrito = {
                total: 0,
                idComprador: params.idUser,
                idVendedor: producto.idUser, 
                idCompra: null
            }
            console.log(datosNuevoCarrito);

            //Busco si existe un carrito de ese vendedor
            var carritoExistente = await CarritoService.getCarritoByVendedoryComprador(producto.idUser, params.idUser);
            console.log(carritoExistente);

            console.log("1r");
            console.log(carritoExistente);

            //Creo un carrito, si no hay un carrito asociado a ese vendedor
            if(carritoExistente == null){
                carritoExistente = await CarritoService.add(datosNuevoCarrito);
            }
            console.log("2r");

    
            //Busco si ya está ese producto en el carrito
            const productoCarritoExistente = await ProductoCarritoService.getProductoCarritoByVendedoryComprador(carritoExistente.id, params.idProducto);
            console.log("PRODUCTO EXISTENTE");
            var total = 0;
            if(productoCarritoExistente == null){
                var datosProductoCarrito = {
                    cantidad: params.cantidad,
                    idProducto: params.idProducto,
                    idCarrito: carritoExistente.id,
                }
                var nuevoProductoCarrito = await ProductoCarritoService.add(datosProductoCarrito);
                total = carritoExistente.total + (nuevoProductoCarrito.cantidad * producto.precio);
                console.log("despues del add");
            }else{
                productoCarritoExistente.cantidad += parseInt(params.cantidad);
                productoCarrito = await ProductoCarritoService.update(productoCarritoExistente);
                total = carritoExistente.total + (productoCarritoExistente.cantidad * producto.precio);
            }

            carritoExistente.total = total;
            carritoExistente = await CarritoService.update(carritoExistente);
            //Devolver respuesta
            return res.status(200).send({
                status: "success",
            });
        }else{
            return res.status(400).send({
                status: "error",
            });
        }
    } catch(err){
        return res.status(400).send({
            status: "error",
            message: err
        });
    }
});

router.get('/carritos/:userId', auth.authenticated, async(req, res) =>{

    var userId = req.params.userId;
    var carritos = await CarritoService.getCarritosByUserSinAsociarEnCompra(userId);

    console.log(carritos);
    if(carritos == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        carritos
    });

});

router.get('/productosCarrito/:carritoId', auth.authenticated, async(req, res) =>{

    var carritoId = req.params.carritoId;
    var carrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(carritoId);

    if(carrito == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        carrito
    });

});

router.get('/carrito/:carritoId', auth.authenticated, async(req, res) =>{
    var carritoId = req.params.carritoId;
    var carrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(carritoId);

    if(carrito == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        carrito
    });

});



module.exports = router;