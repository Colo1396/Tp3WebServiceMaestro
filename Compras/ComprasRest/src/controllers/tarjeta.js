const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const { TarjetaService } = require('../services/TarjetaService');


router.get('/tarjetas/:userId', auth.authenticated, async(req, res) =>{

    var userId = req.params.userId;
    var tarjetas = await TarjetaService.getTarjetasByUser(userId);

    if(tarjetas == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        tarjetas
    });
});

router.post('/tarjeta/new', auth.authenticated, async(req, res) =>{

    let params = req.body;
    console.log(params);
    try{
        var datosTarjeta = {
            tipo: params.tipo,
            numero: params.numero,
            nombreTitular: params.nombreTitular,
            dniTitular: params.dniTitular,
            fechaVenc: params.fechaVenc,
            codSeguridad: params.codSeguridad,
            idUser: params.idUser
        }
        const createdTarjeta = await TarjetaService.add(datosTarjeta);
        //Devolver respuesta
        console.log(createdTarjeta);
        return res.status(200).send({
            status: "success",
            createdTarjeta
        });
    } catch(err){
        return res.status(400).send({
            status: "error",
            message: err
        });
    }
});


module.exports = router;