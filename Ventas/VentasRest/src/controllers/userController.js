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
            billetera: 0
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
        const user = await UserService.getById(req.user.id);
        res.status(200).send(user);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const putUser = async (req, res) => {
    try{
        const user = {
            username: req.body.username,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni,
            telefono: req.body.telefono
        }
        const updatedUser = await UserService.update(user, req.user.id);
        res.status(200).send(updatedUser);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = {
    register,
    login,
    getUser,
    putUser
}