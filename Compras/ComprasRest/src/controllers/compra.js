const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const {CompraService} = require('../services/CompraService');
const { CarritoService } = require('../services/CarritoService');
const { ProductoCarritoService } = require('../services/ProductoCarritoService');
const { ProductoService } = require('../services/ProductoService');
const { TarjetaService } = require('../services/TarjetaService');
const {UserService} = require('../services/UserService');
const {DomicilioService} = require('../services/DomicilioService');


const ProductoCarrito = require('../models/ProductoCarrito');

router.post('/compra/new', auth.authenticated, async(req, res) =>{
    let params = req.body;
    console.log("llego");
    try{
        //Verificamos que no exista una compra asociada a ese carrito
        var compra = await CompraService.getCompraByCarrito(params.idCarrito);
        console.log(compra);
        console.log(compra.length);
        if(compra === null || !compra.length){
            //Busco el carrito para obtener el vendedor
            var carrito = await CarritoService.getById(params.idCarrito);

            //Obtengo los productos de ese carrito
            var productosCarrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(params.idCarrito);

            //Obtengo la tarjeta del usuario
            const tarjeta = await TarjetaService.getTarjeta(params.idComprador);
            //console.log(tarjeta.tipo);

            productosCarrito.forEach(async(element) =>{
                var productoMedioDePago = await ProductoService.getById(element.idProducto);
                if(productoMedioDePago.formaDePago != tarjeta.tipo){
                    return res.status(400).send({
                        status: "error",
                        message: "No se acepta el medio de pago seleccionado"
                    });
                }
                /*
                if(productoMedioDePago.formaDePago == tarjeta.tipo){
                    console.log("entro 2do if");
                    console.log(productoMedioDePago.formaDePago);
                    console.log(tarjeta.tipo);
                }*/
            });

            //Verificar si cambió la cantidad solicitada de un producto. De ser así, se actualiza.
            var total = 0;
            productosCarrito.forEach(async(i) =>{
                params.carrito.forEach(async(j) =>{
                    if(i.idProducto == j.idProducto){
                        if(i.cantidad != j.cantidad){
                            i.cantidad = j.cantidad;
                            var productoActualizado = await ProductoCarritoService.update(i);
                        }
                    }
                });
                total += (i.cantidad*i.producto.precio);
            });

            carrito.total = total;
            var totalCarritoActualizado = await CarritoService.update(carrito);

            //Datos de la compra
            var datosCompra = {
                idVendedor: carrito.idVendedor,
                idComprador: params.idComprador,
                idCarrito: params.idCarrito,
                idMedioDePago: params.idMedioDePago,
                idDestino: params.idDestino
            }
            //Persisto la compra
            var nuevaCompra = await CompraService.add(datosCompra);

            return res.status(200).send({
                status: "success",
                message: "La compra se realizó exitosamente.",
                nuevaCompra
            });
        }else{
            return res.status(400).send({
                status: "error",
                message: "El carrito ya se encuentra asociado a una compra." 
            });
        }
    }catch(err){
        return res.status(400).send({
            status: "error",
            message: err 
        });
    }
});

router.get('/compra/:compraId', auth.authenticated, async(req, res) =>{

    console.log(req.params.compraId);

    var compraId = req.params.compraId;
    var compra = await CompraService.getCompra(compraId);
    console.log("compra");
    console.log(compra);
    var productosCarrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(compra.idCarrito);
    console.log("productosCarrito");
    console.log(productosCarrito);
    var vendedor = await UserService.getById(compra.idVendedor);
    console.log("vendedor");
    console.log(vendedor);
    var tarjeta = await TarjetaService.getTarjetaByPk(compra.idMedioDePago);
    console.log("tarjeta");
    console.log(tarjeta);

    var destino = await DomicilioService.getDomiciliosByUser(compra.idDestino);
    console.log("destino");
    console.log(destino);

    /*
    
    console.log("tarjeta");
    console.log(compra.idMedioDePago.tarjeta);

    var vendedor = await UserService.getById(compra.idVendedor);
    var productosCarrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(compra.compraId);
    var tarjeta = await TarjetaService.getTarjetaByPk(compra.idMedioDePago.id);
    console.log("tarjeta");
    console.log(tarjeta);

    var destino = await DomicilioService.getDomiciliosByUser(compra.idDestino.id);
    console.log("destino");

    console.log(destino);
    */


    if(compra == null){
        return res.status(400).send({
            status: "error",
            message: "No existe la compra."
        });
    }

    console.log(compra);
    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        compra,
        productosCarrito,
        vendedor,
        destino, 
        tarjeta 

    });

});

module.exports = router;