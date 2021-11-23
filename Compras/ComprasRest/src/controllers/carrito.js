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


router.post('/addProductoCarrito', auth.authenticated, async(req, res) =>{
    let params = req.body;
    try{
        //Busco el producto para obtener su vendedor
        var producto = await ProductoService.getById(params.idProducto);
        if(producto.stock >= params.cantidad && params.cantidad > 0){
            var datosNuevoCarrito = {
                total: 0,
                idComprador: params.idUser,
                idVendedor: producto.idUser, 
            }
            //Busco si existe un carrito de ese vendedor
            var carritoExistente = await CarritoService.getCarritoByVendedoryComprador(producto.idUser, params.idUser);
    
            //Creo un carrito, si no hay un carrito asociado a ese vendedor
            if(carritoExistente == null){
                carritoExistente = await CarritoService.add(datosNuevoCarrito);
            }
    
            //Busco si ya está ese producto en el carrito
            const productoCarritoExistente = await ProductoCarritoService.getProductoCarritoByVendedoryComprador(carritoExistente.id, params.idProducto);
    
            if(productoCarritoExistente == null){
                var datosProductoCarrito = {
                    cantidad: params.cantidad,
                    idProducto: params.idProducto,
                    idCarrito: carritoExistente.id,
                }
                var nuevoProductoCarrito = await ProductoCarritoService.add(datosProductoCarrito);
                console.log("devolver producto");
                console.log(nuevoProductoCarrito);
            }else{
                productoCarritoExistente.cantidad += parseInt(params.cantidad);
                productoCarrito = await ProductoCarritoService.update(productoCarritoExistente);
                console.log("devolver producto");
                console.log(productoCarritoExistente);
            }
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



module.exports = router;