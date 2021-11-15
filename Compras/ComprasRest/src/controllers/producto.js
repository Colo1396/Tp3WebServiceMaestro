const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authenticated');
const {ProductoService} = require('../services/ProductoService');

router.get('/productos', async(req, res) =>{
    
    var productos = await ProductoService.getAll();

    console.log(productos);
    if(productos.length == 0){
        return res.status(400).send({
            status: "error",
            message: "No hay productos que mostrar."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        productos
    });
});

router.get('/producto/:productoId', auth.authenticated, async(req, res) =>{

    var productoId = req.params.productoId;

    console.log(productoId);
    
    var producto = await ProductoService.getById(productoId);

    console.log(producto);
    if(producto === null){
        return res.status(400).send({
            status: "error",
            message: "No existe el producto."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        producto
    });
});


module.exports = router;