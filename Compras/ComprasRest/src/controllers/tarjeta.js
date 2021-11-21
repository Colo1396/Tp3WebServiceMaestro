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


module.exports = router;