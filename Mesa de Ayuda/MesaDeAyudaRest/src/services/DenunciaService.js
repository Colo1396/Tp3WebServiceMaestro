const Op = require('sequelize').Op;
const { DenunciaModel } = require('../database/connection');

class DenunciaService{
    static async getById(id){
        const denuncia = await DenunciaModel.findByPk(id);
        return denuncia;    
    }

    static async getAll(){
        const denuncias = await DenunciaModel.findAll({
            raw: true,
            nest: true
         });
        return denuncias;    
    }

    static async getAllByUser(idUser){
        const denuncias = await DenunciaModel.findAll({
            raw: true,
            nest: true,
            where:{
               "compradorId": idUser
            }
        });
        return denuncias;
    }
    
    static async getAllByProduct(idProduct){
        const denuncias = await DenunciaModel.findAll({
            raw: true,
            nest: true,
            where:{
               "productoId": idProduct
            }
        });
        return denuncias;
    }

    static async getAllByState(estado){
        const denuncias = await DenunciaModel.findAll({
            raw: true,
            nest: true,
            where: {
                "estado": estado
            }
        });
        return denuncias;
    }
}

module.exports = { DenunciaService }