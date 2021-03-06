const Op = require('sequelize').Op;
const {UserModel} = require('../connection');

class UserService {
    
    static async add(username, password, rol, nombre, apellido, dni){
        //Crear objeto de usuario
        var user = new UserModel();
        
        //Asignar valores al usuario
        user.nombre = nombre;
        user.apellido = apellido;
        user.username = username;
        user.password = password;
        //user.email = params.email.toLowerCase();
        user.dni = dni;
        user.rolId = rol;
        return await user.save(); 
    }

    static async getUserByDniyUsername(dni, username){
        var user = await UserModel.findOne({
            where: {
                [Op.or]: [ {username: username }, { dni: dni}],
            }
        });
        return  { user};    
    }

    static async getByUsername(username){
        var user = await UserModel.findOne({
            where : { username: username}
            //attributes: ['username', 'password', 'nombre', 'apellido']
        });
        return  {user};    
    }

    static async getByDni(dni){
        var user = await UserModel.findOne({
            where : { dni: dni}
            //attributes: ['username', 'password', 'nombre', 'apellido']
        });
        return  {user};    
    }

    static async updateUser(idUser, rolId, username, nombre, apellido, dni, telefono){
        var userActualizado = await UserModel.update(
            //{nombre: nombre, apellido: apellido},
            {rolId: rolId, username: username, nombre: nombre, apellido: apellido, dni: dni, telefono: telefono},
            {where: {
                id: idUser
            }},
        );

        return {userActualizado};
    }

    static async getAll(){
        var users = await UserModel.findAll({
            raw: true,
            nest: true
         });
        return  {users};
    }

    static async getById(id){
        var user = await UserModel.findByPk(id);
        return  {user};    
    }

    static async getVendedor(id){
        var vendedor = await UserModel.findByPk(id);
        return  vendedor;    
    }
}

module.exports = {
    UserService
}