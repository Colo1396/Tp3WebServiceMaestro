'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = "tpDistribuidosWebService";

//Middleware (metodo que ejecuta antes del controller) para comprobar el jwt token, ponerselo a la ruta
exports.authenticated = function(req, res, next){
    //Comprobar si llega autorización
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'La petición no tiene cabecera de authorization.'
        });
    }

    //Token sin comillas
    var token = req.headers.authorization.replace(/['"]+/g, '');

    try{
        //Decodificar token
        var payload = jwt.decode(token, secret);
        //Comprobar si el token ha expirado
        if(payload.exp <= moment().unix()){
            return res.status(404).send({
                message: 'EL token ha expirado.'
            });
        }
    }catch(ex){
        return res.status(404).send({
            message: 'EL token no es válido'
        });
    }

    //Adjuntar usuario identificado a request
    req.user = payload;

    //Continuar con la acción del controller
    next();
}