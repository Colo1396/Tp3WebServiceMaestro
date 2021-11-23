const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const soap = require('soap');
const xmlParser = require('xml-js');
const { RolService } = require('./RolService');
const { UserModel, CuentaBancariaModel } = require('../connection');
const wsUrl = 'http://localhost:8080/BancaSoap-0.0.1/CuentaBancariaService?wsdl';

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
            const cuentas = await updatedUser.getCuentasBancarias();
            for(let i in cuentas){
                if(cuentas[i].dataValues.nroCuenta === user.cuentaNueva.nroCuenta){
                    throw new Error('La cuenta ingresada ya esta asociada');
                }
            }
            const nuevaCuenta = {
                nroCuentaBancaria: user.cuentaNueva.nroCuenta 
            }
            const client = await soap.createClientAsync(wsUrl);
            const cuenta = await client.findByNroCtaAsync(nuevaCuenta);
            const response = JSON.parse(xmlParser.xml2json(cuenta[1], {compact: true, spaces: 2}));

            if(response['soap:Envelope']['soap:Body']['ns2:findByNroCtaResponse'].return){
                await CuentaBancariaModel.create(user.cuentaNueva);
            }
            else{
                throw new Error('La cuenta ingresada no existe');
            }
        }

        return updatedUser;
    }

    static async transferir(user, nroCuenta, monto){
        const userExists = await this.getById(user.id);

        if(userExists.billetera < monto){
            throw new Error('El monto ingresado supera su saldo actual');
        }

        const cuentas = await userExists.getCuentasBancarias();
        let cuentaValida = false;
        for(let i in cuentas){
            if(cuentas[i].dataValues.nroCuenta === nroCuenta){
                cuentaValida = true;
                break;
            }
        }
        if(!cuentaValida){
            throw new Error('No se encontro una cuenta asociada con ese numero');
        }

        let cuentaExists = {
            nroCuentaBancaria: nroCuenta
        }
        let client = await soap.createClientAsync(wsUrl);
        const cuenta = await client.findByNroCtaAsync(cuentaExists);
        let response = JSON.parse(xmlParser.xml2json(cuenta[1], {compact: true, spaces: 2}));
        response = response['soap:Envelope']['soap:Body']['ns2:findByNroCtaResponse'].return;

        if(!response){
            throw new Error('No se encontro una cuenta con ese numero');
        }
        
        const cuentaActualizada = {
            cuentaBancaria:{
                idCuentaBancaria: response.idCuentaBancaria._text,
                idUsuario: response.idUsuario._text,
                monto: Number(response.monto._text) + monto,
                nroCuenta: response.nroCuenta._text
            }
        }

        client = await soap.createClientAsync(wsUrl);
        const updatedCuenta = await client.updateAsync(cuentaActualizada);
        response = JSON.parse(xmlParser.xml2json(updatedCuenta[1], {compact: true, spaces: 2}));
        response = response['soap:Envelope']['soap:Body']['ns2:updateResponse'].return;

        if(!response){
            throw new Error('No se pudo realizar la transferencia');
        }

        const updatedUser = await userExists.update(
            {
                billetera: userExists.billetera - monto
            },
            {
                where: {
                    id: userExists.id
                }
            }
        );

        return updatedUser;
    }
}

module.exports = { UserService }