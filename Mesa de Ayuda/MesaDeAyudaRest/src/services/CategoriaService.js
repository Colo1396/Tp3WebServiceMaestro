const Op = require('sequelize').Op;
const {CategoriaModel} = require('../database/connection');

class CategoriaService {
    
    static async add(newCategoria){
        return await CategoriaModel.create(newCategoria); 
    }
}

module.exports = {
    CategoriaService
}