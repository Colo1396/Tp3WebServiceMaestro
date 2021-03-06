const Op = require('sequelize').Op;
const { ReclamoModel } = require('../database/connection');

class ReclamoService{
    static async add(nuevoReclamo){
        return await ReclamoModel.create(nuevoReclamo);
    }

    static async update(reclamo){
        let reclamoModificado = await ReclamoModel.update({
            "estado": reclamo.estado
        },
        {
            where: {
                "id": reclamo.id
            }
        });
        return reclamoModificado;
    }

    static async delete(idReclamo){
        let reclamoEliminado = await ReclamoModel.destroy({
            where: {
                "id": idReclamo
            }
        });
        return reclamoEliminado;
    }

    static async getById(id){
        const reclamo = await ReclamoModel.findByPk(id);
        return reclamo;    
    }

    static async getAll(){
        const reclamos = await ReclamoModel.findAll({
            raw: true,
            nest: true
         });
        return reclamos;    
    }

    static async getAllByUser(idUser){
        const reclamos = await ReclamoModel.findAll({
            raw: true,
            nest: true,
            where:{
               "compradorId": idUser
            }
        });
        return reclamos;
    }
    
    static async getAllByProduct(idProduct){
        const reclamos = await ReclamoModel.findAll({
            raw: true,
            nest: true,
            where:{
               "productoId": idProduct
            }
        });
        return reclamos;
    }

    static async getAllByState(estado){
        const reclamos = await ReclamoModel.findAll({
            raw: true,
            nest: true,
            where: {
                "estado": estado
            }
        });
        return reclamos;
    }
}

module.exports = { ReclamoService }