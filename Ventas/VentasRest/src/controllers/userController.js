const { UserService } = require('../services/UserService');
const { ProductoService } = require('../services/ProductoService');

const register = async (req, res) => {
    try{
        const user = {
            username: req.body.username,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: req.body.password,
            dni: req.body.dni,
            billetera: 10,
            rolId: req.body.rolId
        }
        const createdUser = await UserService.register(user);
        res.status(200).send(createdUser);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const login = async (req, res) => {
    try{
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        const loginInfo = await UserService.login(user);
        res.status(200).send(loginInfo);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const getUser = async (req, res) => {
    try{
        const user = await UserService.getById(req.params.idUser);
        res.status(200).send(user);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const putUser = async (req, res) => {
    try{
        console.log(req.body.cuentaNueva);
        const user = {
            username: req.body.username,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni,
            telefono: req.body.telefono,
            cuentaNueva: req.body.cuentaNueva
        }
        const updatedUser = await UserService.update(user, req.user.id);
        res.status(200).send(updatedUser);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const transferir = async (req, res) => {
    try{
        const result = await UserService.transferir(req.user, req.body.nroCuenta, req.body.monto);
        res.status(200).send(result);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = {
    register,
    login,
    getUser,
    putUser,
    transferir
}