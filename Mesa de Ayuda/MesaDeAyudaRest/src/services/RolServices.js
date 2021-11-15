const { RolModel } = require('../database/connection');

class RolService{

    static async getAll(){
        var roles = await RolModel.findAll({
            raw: true,
            nest: true
        });

        return roles;
    }

    static async getById( idRol){
        var rolBuscado = await RolModel.findByPk(idRol);
        return rolBuscado;
    }

    static async getByType( type){
        var rolBuscado = await RolModel.findOne({
            where:{
                tipo: type
            }
        });
        return rolBuscado;
    }
}

module.exports = {
    RolService
}