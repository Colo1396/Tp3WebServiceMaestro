const { UserService } = require('../services/UserService');
const { ProductoService } = require('../services/ProductoService');

const register = async (req, res) => {
    try{
        const user = {
            username: req.body.username,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: req.body.password,
            dni: req.body.dni
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

const getAllProductos = async (req, res) => {
    try{
        const productos = await ProductoService.getByUserId(req.params.idCliente);
        res.status(200).send(productos);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = {
    register,
    login,
    getUser,
    getAllProductos
}