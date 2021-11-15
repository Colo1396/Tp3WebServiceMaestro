'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');

exports.createToken = function(user){
    var payload = {
        sub: user.id,
        nombre : user.nombre,
        apellido : user.apellido,
        username : user.username,
        rol : user.rol,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, 'tpDistribuidosWebService');
}