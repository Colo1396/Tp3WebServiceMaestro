const {CategoriaModel} = require('../connection');

class CategoriaService {
    static async getAll(){
        return await CategoriaModel.findAll({
            raw: true,
            nest: true
         });
    }
    
    static async add(newCategoria){
        return await CategoriaModel.create(newCategoria); 
    }
}

module.exports = {CategoriaService};