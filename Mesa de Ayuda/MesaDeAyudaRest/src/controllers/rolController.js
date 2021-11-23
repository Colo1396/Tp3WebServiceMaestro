const { RolService } = require('../services/RolService');

const filterRoles =  (roles)=>{
    return roles.filter(r => r.tipo !== "mesa")
}

const getAll = async (req, res) => {
    try{
        const categorias = await RolService.getAll();
       console.log( filterRoles(categorias));
        res.status(200).send(filterRoles(categorias));
    } catch(err){
        console.error(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = {
    getAll
}