const {ProductoService} = require('../services/ProductosServices');
const {UserService} = require('../services/UsuarioServices');


const obtenerProductos = async(req,res)=>{
    try{
        let products = await ProductoService.getAll();
        if(products){
            res.status(200).json({
                message: "Products succesfully encountered",
                data: products
            });        
        
        }else{
            res.status(200).json({
            message: "Products not found",
            data: products
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    } 
}

const obtenerProducto = async(req,res)=>{
    try{
        const {id} = req.params;
        let product = await ProductoService.getById(id);
        if(product){
            res.status(200).json({
                message: "product succesfully encountered",
                data: product
            });
        }else{
            res.status(200).json({
                message: "product not found",
                data: product
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

const crearProducto = async (req, res) => {
    try{
        const producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            precio: req.body.precio,
            stock: req.body.stock,
            mediosDePago: req.body.mediosDePago.id
        }
        const user = await UserService.getById(req.body.idVendedor);
        const createdProducto = await ProductoService.add(producto, user);
        if(createdProducto){
            res.status(200).json({
                message: "product succesfully created",
                data: createdProducto
            });
        }
    } catch(err){
        console.error(err);
        res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

const actualizarProducto = async (req, res) => {
    try{
        const producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            precio: req.body.precio,
            stock: req.body.stock,
            cantidadVentas: req.body.cantidadVentas,
            mediosDePago: req.body.mediosDePago
        }
        const updatedProducto = await ProductoService.update(producto, req.params.id);
        if(updatedProducto){
            res.status(200).json({
                message: "product succesfully updated",
                data: updatedProducto
            });
        }
    } catch(err){
        console.error(err);
        res.status(500).json({
            message: "Something goes wrong"
        });    
    }
}


module.exports ={
    obtenerProducto,
    obtenerProductos,
    crearProducto,
    actualizarProducto
};   
