const { ProductoService } = require('../services/ProductoService');
const { dataURI } = require('../middlewares/multerConfig');

const getAllProductos = async (req, res) => {
    try{
        const productos = await ProductoService.getAll(
            req.query.vendedor, 
            req.query.sinstock, 
            req.query.precioGte,
            req.query.precioLte,
            req.query.idCategoria);
        res.status(200).send(productos);
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const getProducto = async (req, res) => {
    try{
        const producto = await ProductoService.getById(req.params.idProducto);
        res.status(200).send(producto);
        res.end();
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const postProducto = async (req, res) => {
    try{
        const imagen = dataURI(req);

        const producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: imagen,
            precio: req.body.precio,
            stock: req.body.stock,
            mediosDePago: req.body.mediosDePago,
            idCategoria: req.body.idCategoria
        }
        const createdProducto = await ProductoService.add(producto, req.user);
        res.status(200).send(createdProducto);    
        res.end();
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const putProducto = async (req, res) => {
    try{
        const imagen = dataURI(req);

        const producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: imagen,
            precio: req.body.precio,
            stock: req.body.stock,
            mediosDePago: req.body.mediosDePago
        }
        const updatedProducto = await ProductoService.update(producto, req.params.idProducto);
        res.status(200).send(updatedProducto);    
        res.end();
    } catch(err){
        console.error(err);
        res.status(400).send(err.message);
    }
}

const deleteProducto = async (req, res) => {

}

module.exports = {
    getAllProductos,
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}

