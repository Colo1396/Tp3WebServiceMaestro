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


module.exports = router;