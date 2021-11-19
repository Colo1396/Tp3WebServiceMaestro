const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');

const obtenerUsuarios = async(req,res)=>{
    try{
        let users = await UserService.getAll();
        if(users){
            res.status(200).json({
                message: "Users succesfully encountered",
                data: users
            });        
        
        }else{
            res.status(200).json({
            message: "Users not found",
            data: users
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    } 
}

const obtenerUsuario = async(req,res)=>{
    try{
        const {id} = req.params;
        let user = await UserService.getById(id);
        if(user){
            res.status(200).json({
                message: "User succesfully encountered",
                data: user
            });
        }else{
            res.status(200).json({
                message: "User not found",
                data: user
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

module.exports ={
    obtenerUsuarios,
    obtenerUsuario
};   
