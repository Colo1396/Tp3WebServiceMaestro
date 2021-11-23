const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { RolService } = require('./RolService');
const { UserModel, CuentaBancariaModel } = require('../connection');

class UserService{
    static async register(user){
        const role = await RolService.getById(user.rolId);
        if(role.tipo !== 'vendedor'){
            throw new Error('El tipo de rol de usuario no es permitido');
        }

        const usernameExists = await this.getByUsername(user.username);
        if(usernameExists){
            throw new Error("Ya existe un usuario con ese username");
        }

        const dniExists = await this.getByDNI(user.dni);
        if(dniExists){
            throw new Error("Ya existe un usuario con ese dni");
        }

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;

        const createdUser = await UserModel.create(user)

        return createdUser;
    }   

    static async login(user){
        const userExists = await this.getByUsername(user.username);
        if(!userExists){
            throw new Error("El usuario ingresado no existe");
        }
        
        const isValid = await bcrypt.compare(user.password, userExists.password);
        
        if(userExists.rol.dataValues.tipo !== 'vendedor'){
            throw new Error('El tipo de rol de usuario no es permitido');
        }

        if(isValid){
            const token = jwt.sign({ id: userExists.id }, process.env.TOKEN_SECRET);
            const loginInfo = {
                auth_token: token, 
                id: userExists.id, 
                rol: userExists.rol
            };
            return loginInfo;
        }
        else{
            throw new Error("La contraseña ingresada es incorrecta");
        }
    }   

    static async getAll(){
        var users = await UserModel.findAll({
            raw: true,
            nest: true
         });
        return  users;    
    }

    static async getById(id){
        var users = await UserModel.findOne({
            where:{
                id: id
            },
            include: ['cuentasBancarias']
        });
        return  users;    
    }

    static async getByUsername(username){
        const users = await UserModel.findOne({
            where:{
                username: username
            },
            include: ['cuentasBancarias'],
            include: ['rol']
        });

        return users;
    }

    static async getByDNI(dni){
        const users = await UserModel.findOne({
            where:{
                dni: dni
            },
            include: ['cuentasBancarias']
        });

        return users;
    }

    static async update(user, idUser){
        const usernameExists = await this.getByUsername(user.username);
        if(usernameExists){
            if(usernameExists.id != idUser) throw new Error("Ya existe un usuario con ese username");
        }

        const dniExists = await this.getByDNI(user.dni);
        if(dniExists){
            if(dniExists.id != idUser) throw new Error("Ya existe un usuario con ese dni");
        }

        const updatedUser = await this.getById(idUser);

        await updatedUser.update(
            {
                username: user.username,
                nombre: user.nombre,
                apellido: user.apellido,
                dni: user.dni,
                telefono: user.telefono
            },
            {
                where: {
                    id: idUser
                }
            }
        );
        
        if(user.cuentaNueva){
            await CuentaBancariaModel.create(user.cuentaNueva);
        }

        return updatedUser;
    }
}

module.exports = { UserService }