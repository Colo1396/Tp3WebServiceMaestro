const Op = require('sequelize').Op;
const {DomicilioModel} = require('../connection');

class DomicilioService {
    
    static async add(newDomicilio){
        return await DomicilioModel.create(newDomicilio); 
    }

    static async getDomiciliosByUser(idUser){
        var domicilios = await DomicilioModel.findAll({
            attributes: ['id', 'provincia', 'localidad', 'calle', 'numero', 'pisoDepto'],
            where : { idUser: idUser}
        });
        return  domicilios;    
        //return {domicilios};
    }

    static async getDomicilioByPk(id){
        var domicilio = await DomicilioModel.findByPk(id);
        return  domicilio;    
    }
}

module.exports = {
    DomicilioService
}