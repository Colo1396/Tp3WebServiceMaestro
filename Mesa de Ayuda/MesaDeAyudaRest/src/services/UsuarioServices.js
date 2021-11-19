const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../database/connection');
const {RolService} = require('./RolServices');

class UserService{
    static async register(user){
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

        const createdUser = await UserModel.create(user);
        return createdUser;
    }   

    static async login(user){
        const userExists = await this.getByUsername(user.username);
        if(!userExists){
            throw new Error("El usuario ingresado no existe");
        }
        console.log(user);
        console.log(userExists);
        let isValid = await bcrypt.compare(user.password, userExists.password);
        const rolDelUser = await RolService.getById(userExists.rolId);
        let estaEncriptada = false;
        let esLaContraseniaCorrecta = (user.password === userExists.password);

        try{
            console.log(await bcrypt.getRounds(userExists.password));
            estaEncriptada = true;
        }catch(err){
            console.log(err);
        }

        if(rolDelUser.tipo === "mesa" && !estaEncriptada && esLaContraseniaCorrecta){ //si no esta encriptada la password y es del userRol "mesa" se incripta, esto se usa para los user que no se registran desde el end point
            const salt = await bcrypt.genSalt(12);
            const hashUserPassword = await bcrypt.hash(userExists.password, salt); //hasheo la contraseña del usuario
            await UserModel.update({ //modifico el user con la contraseña hasehada
                "password": hashUserPassword
                },
                {
                    where: {
                        "id": userExists.id
                    }
                }
            );
            const validar = await bcrypt.compare(user.password, hashUserPassword); //compara las dos contraseñas ahora si hasheadas
            if(validar) isValid = true;
            else isValid = false; 
        }
       
        if(isValid){
            const token = jwt.sign({ id: userExists.id }, process.env.TOKEN_SECRET,{ expiresIn: 60 * 60 * 2}); //expira en 2 horas el token
            const loginInfo = {
                auth_token: token, 
                id: userExists.id, 
                username: userExists.username
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
        var users = await UserModel.findByPk(id);
        return  users;    
    }

    static async getByUsername(username){
        const users = await UserModel.findOne({
            where:{
                username: username
            }
        });

        return users;
    }

    static async getByDNI(dni){
        const users = await UserModel.findOne({
            where:{
                dni: dni
            }
        });

        return users;
    }

}

module.exports = { UserService }