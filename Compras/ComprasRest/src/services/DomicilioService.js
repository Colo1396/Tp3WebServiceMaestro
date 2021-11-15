const Op = require('sequelize').Op;
const {DomicilioModel} = require('../connection');

class DomicilioService {
    
    static async add(newDomicilio){
        return await DomicilioModel.create(newDomicilio); 
    }
}

module.exports = {
    DomicilioService
}