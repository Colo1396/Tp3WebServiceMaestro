const Op = require('sequelize').Op;
const {DomicilioModel} = require('../database/connection');

class DomicilioService {
    
    static async add(newDomicilio){
        return await DomicilioModel.create(newDomicilio); 
    }
}

module.exports = {
    DomicilioService
}