const Op = require('sequelize').Op;
const {TarjetaModel} = require('../connection');

class TarjetaService {
    
    static async add(newTarjeta){
        return await TarjetaModel.create(newTarjeta); 
    }

    static async getTarjetasByUser(idUser){
        var tarjetas = await TarjetaModel.findAll({
            attributes: ['tipo', 'numero', 'nombreTitular', 'dniTitular'],
            where : { idUser: idUser}
        });
        return  tarjetas;    
        //return {domicilios};
    }
}

module.exports = {
    TarjetaService
}