const {Sequelize} = require('sequelize');
const fs = require('fs');

const productoModel = require('../models/Producto');
const cuentaBancariaModel = require('../models/CuentaBancaria');
const userModel = require('../models/Usuario');
const medioDePagoModel = require('../models/MedioDePago');
const rolModel = require('../models/Rol');
const denunciaModel = require('../models/Denuncia');
const reclamoModel = require('../models/Reclamo');
const domicilioModel = require('../models/Domicilio');
const tarjetaModel = require('../models/Tarjeta');
const compraModel = require('../models/Compra');
const categoriaModel = require('../models/Categoria');
const productoCarritoModel = require('../models/ProductoCarrito');
const carritoModel = require('../models/Carrito');

/** CONFIGURACIÓN CONEXION PARA LA BD */
const sequelize = new Sequelize("tpiiitienda", "root", "123456789" ,{
    host : "localhost",
    port: "3306",
    dialect: "mysql",
    dialectOptions: {
        multipleStatements: true
    } 
});

// const sequelize = new Sequelize("bbglhfbpl88th3ne8zmg", "unyu1hkmsskogwus", "V96syZVkwK1AwOV0O3Wn" ,{
//     host : "bbglhfbpl88th3ne8zmg-mysql.services.clever-cloud.com",
//     port: "3306",
//     dialect: "mysql"
// });

/*** REALIZO LOS MAPEOS DE LAS CLASES */
const MedioDePagoModel = medioDePagoModel(sequelize, Sequelize);
const CuentaBancariaModel = cuentaBancariaModel(sequelize, Sequelize);
const UserModel = userModel(sequelize, Sequelize);
const ProductoModel = productoModel(sequelize, Sequelize);
const RolModel = rolModel(sequelize, Sequelize);
const DenunciaModel = denunciaModel(sequelize, Sequelize);
const ReclamoModel = reclamoModel(sequelize, Sequelize);
const DomicilioModel = domicilioModel(sequelize, Sequelize);
const TarjetaModel = tarjetaModel(sequelize, Sequelize);
const CompraModel = compraModel(sequelize, Sequelize);
const CategoriaModel = categoriaModel(sequelize, Sequelize);
const ProductoCarritoModel = productoCarritoModel(sequelize, Sequelize);
const CarritoModel = carritoModel(sequelize, Sequelize);

/*** relacion one to many de User y Tarjeta **/
UserModel.hasMany(TarjetaModel, {
    foreignKey: 'idUser' , 
    as: 'tarjetas'
});
TarjetaModel.belongsTo(UserModel, {
    foreignKey: 'idUser',
    as: 'usuario'
});

/*** relacion one to many de User y Domicilio **/
UserModel.hasMany(DomicilioModel, {
    foreignKey: 'idUser' , 
    as: 'domicilios'
});
DomicilioModel.belongsTo(UserModel, {
    foreignKey: 'idUser',
    as: 'usuario'
});

/* relacion one to many de User y Rol*/
RolModel.hasMany(UserModel, {
    foreignKey: 'rolId',
    as: 'roles'
});
UserModel.belongsTo(RolModel, {
    foreignKey: 'rolId',
    as: 'rol'
});

/***********PRODUCTO **********/
/*** relacion one to many de Categoria y Producto **/
CategoriaModel.hasMany(ProductoModel, {
    foreignKey: 'idCategoria' , 
    as: 'productos'
});
ProductoModel.belongsTo(CategoriaModel, {
    foreignKey: 'idCategoria',
    as: 'categoria'
});

/*** relacion one to many de Producto y ProductoCarrito **/
ProductoModel.hasMany(ProductoCarritoModel, {
    foreignKey: 'idProducto' , 
    as: 'productosCarrito'
});
ProductoCarritoModel.belongsTo(ProductoModel, {
    foreignKey: 'idProducto',
    as: 'producto'
});

/*** relacion one to many de Carrito y ProductoCarrito **/
CarritoModel.hasMany(ProductoCarritoModel, {
    foreignKey: 'idCarrito' , 
    as: 'productosCarrito'
});
ProductoCarritoModel.belongsTo(CarritoModel, {
    foreignKey: 'idCarrito',
    as: 'carrito'
});
/* relacion one to many de User y Producto */
UserModel.hasMany(ProductoModel, {
    foreignKey: 'idVendedor',
    as: 'productos'
});
ProductoModel.belongsTo(UserModel, {
    foreignKey: 'idVendedor',
    as: 'usuario'
});

/*******************COMPRAS**********************/
/*** relacion one to many de Compra y User (vendedor) **/
UserModel.hasMany(CompraModel, {
    foreignKey: 'idVendedor' , 
    as: 'ventas'
});
CompraModel.belongsTo(UserModel, {
    foreignKey: 'idVendedor',
    as: 'vendedor'
});

/*** relacion one to many de Compra y User (comprador) **/
UserModel.hasMany(CompraModel, {
    foreignKey: 'idComprador' , 
    as: 'compras'
});
CompraModel.belongsTo(UserModel, {
    foreignKey: 'idComprador',
    as: 'comprador'
});
/*** relacion one to one entre Compra y Carrito **/
CompraModel.belongsTo(CarritoModel, {
    foreignKey: 'idCarrito',
    as: 'carrito'
});

/*** relacion one to one entre Compra y Tarjeta (como medioDePago) **/
CompraModel.belongsTo(TarjetaModel, {
    foreignKey: 'idMedioDePago',
    as: 'medioDePago'
});
/*** relacion one to one entre Compra y Domicilio (Destino) **/
CompraModel.belongsTo(DomicilioModel, {
    foreignKey: 'idDestino',
    as: 'destino'
});

/****************DENUNCIA************ */
/* relacion one to many de user y denuncia */
UserModel.hasMany(DenunciaModel,{
    foreignKey: 'userId',
    as: 'denuncias'
});
DenunciaModel.belongsTo(UserModel,{
    foreignKey: 'userId',
    as: 'usuario'
});


/****************RECLAMO************ */
/* relacion one to many de compra y reclamo */
CompraModel.hasMany(ReclamoModel,{
    foreignKey: 'compraId',
    as: 'reclamos'
});
ReclamoModel.belongsTo(CompraModel,{
    foreignKey: 'compraId',
    as: 'compra'
});


/**********PRODUCTO MEDIO DE PAGO **************/
/* relacion many to many de Producto y MedioDePago */
ProductoModel.belongsToMany(MedioDePagoModel, { through: 'producto_mediodepago', as: 'mediosDePago'});
MedioDePagoModel.belongsToMany(ProductoModel, { through: 'producto_mediodepago', as: 'productos'});

UserModel.hasMany(CuentaBancariaModel, {
    foreignKey: 'idVendedor',
    as: 'cuentasBancarias'
});
CuentaBancariaModel.belongsTo(UserModel, {
    foreignKey: 'idVendedor',
    as: 'vendedor'
});

/** INICIALIZO EL MAPEO **/
sequelize.sync({ force: false})
    .then( ()=>{
        console.log("Models mapeados!!!");
        const config = fs.readFileSync(__dirname + '/datos.sql', 'utf-8');
        sequelize.query(config);
    });

/** EXPORTO LOS OBJETOS PARA PODER USARLOS PARA LAS CONSULTAS */
module.exports = {
    MedioDePagoModel,
    CuentaBancariaModel,
    UserModel,
    ProductoModel,
    RolModel,
    DenunciaModel,
    ReclamoModel,
    DomicilioModel,
    TarjetaModel,
    CompraModel,
    CategoriaModel,
    ProductoCarritoModel,
    CarritoModel
}