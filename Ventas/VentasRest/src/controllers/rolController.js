const { RolService } = require('../services/RolService');

const getAll = async (req, res) => {
    try{
        const categorias = await RolService.getAll();
        res.status(200).send(categorias);
    } catch(err){
        console.error(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = {
    getAll
}