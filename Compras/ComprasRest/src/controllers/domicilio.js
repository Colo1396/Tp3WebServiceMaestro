const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const {DomicilioService} = require('../services/DomicilioService');

router.get('/domicilios/:userId', auth.authenticated, async(req, res) =>{

    var userId = req.params.userId;
    var domicilios = await DomicilioService.getDomiciliosByUser(userId);

    if(domicilios == null){
        return res.status(400).send({
            status: "error",
            message: "No existe el usuario."
        });
    }

    //Devolver respuesta
    return res.status(200).send({
        status: "success",
        domicilios
    });

});

router.post('/domicilio/new', auth.authenticated, async(req, res) =>{

    let params = req.body;
    console.log(params);
    try{
        var datosDomicilio = {
            provincia: params.provincia,
            localidad: params.localidad,
            calle: params.calle,
            numero: params.numero,
            pisoDepto: params.pisoDepto,
            idUser: params.idUser
        }
        const createdDomicilio = await DomicilioService.add(datosDomicilio);
        //Devolver respuesta
        return res.status(200).send({
            status: "success",
            createdDomicilio
        });
    } catch(err){
        return res.status(400).send({
            status: "error",
            message: err
        });
    }
});

module.exports = router;