const Op = require('sequelize').Op;
const { DenunciaModel } = require('../database/connection');

class DenunciaService{

    static async add(nuevaDenuncia){
        return await DenunciaModel.create(nuevaDenuncia);
    }

    static async update(denuncia){
        let denunciaModficada = await DenunciaModel.update({
            "estado": denuncia.estado
        },
        {
            where: {
                "id": denuncia.id
            }
        });
        return denunciaModficada;
    }

    static async delete(idDenuncia){
        let denunciaEliminada = await DenunciaModel.destroy({
            where: {
                "id": idDenuncia
            }
        });
        return denunciaEliminada;
    }

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
               "userId": idUser
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