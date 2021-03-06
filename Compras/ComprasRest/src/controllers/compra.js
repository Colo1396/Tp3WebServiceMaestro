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
    try{
        //Verificamos que no exista una compra asociada a ese carrito
        var compra = await CompraService.getCompraByCarrito(params.idCarrito);
        if(compra === null || !compra.length || compra.length === 0){
            //Busco el carrito para obtener el vendedor
            var carrito = await CarritoService.getById(params.idCarrito);

            //Obtengo los productos de ese carrito
            var productosCarrito = await ProductoCarritoService.getProductosCarritoByIdCarrito(params.idCarrito);

            //Obtengo la tarjeta del usuario
            const tarjeta = await TarjetaService.getTarjeta(params.idComprador);

            productosCarrito.forEach(async(element) =>{
                var productoMedioDePago = await ProductoService.getById(element.idProducto);
                if(productoMedioDePago.formaDePago != tarjeta.tipo){
                    return res.status(400).send({
                        status: "error",
                        message: "No se acepta el medio de pago seleccionado"
                    });
                }
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
            
            carrito.idCompra = nuevaCompra.id;
            var actualizoCarrito = await CarritoService.update(carrito);

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

    var compraId = req.params.compraId;
    var compras = await CompraService.getCompra(compraId);
    var productosCarritoComprado = await ProductoCarritoService.getProductosCarritoByIdCarrito(compras.idCarrito);
    var vendedor = await UserService.getVendedor(compras.idVendedor);

    //Compra con menos datos 
    var fechaCompra = await CompraService.getFechaCompra(compraId);

    var medioDePago = await TarjetaService.getTarjetaFindOne(compras.idMedioDePago);
    var destino = await DomicilioService.getDomicilioByPk(compras.idDestino);

    if(compras == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        fechaCompra,
        productosCarritoComprado,
        vendedor,
        medioDePago,
        destino
    });

});

router.get('/compras/:userId', auth.authenticated, async(req, res) =>{

    var userId = req.params.userId;
    var compras = await CompraService.getComprasByUser(userId);

    console.log(compras);
    if(compras == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        compras
    });

});

module.exports = router;