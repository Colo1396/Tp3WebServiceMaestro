const Op = require('sequelize').Op;
const {TarjetaModel} = require('../connection');

class TarjetaService {
    
    static async add(newTarjeta){
        return await TarjetaModel.create(newTarjeta); 
    }

    static async getTarjetasByUser(idUser){
        var tarjetas = await TarjetaModel.findAll({
            attributes: ['id','tipo', 'numero', 'nombreTitular', 'dniTitular'],
            where : { idUser: idUser}
        });
        return  tarjetas;    
        //return {domicilios};
    }

    static async getTarjeta(idUser){
        var tarjetas = await TarjetaModel.findOne({
            attributes: ['id','tipo', 'numero', 'nombreTitular', 'dniTitular'],
            where : { idUser: idUser}
        });
        return  tarjetas;    
        //return {domicilios};
    }

    static async getTarjetaByPk(idTarjeta){
        var tarjeta = await TarjetaModel.findAll({
            attributes: ['tipo', 'numero', 'nombreTitular', 'dniTitular'],
            where : { id: idTarjeta}
        });

        return  tarjeta;    
    }
}

module.exports = {
    TarjetaService
}