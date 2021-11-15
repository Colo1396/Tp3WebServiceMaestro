const {Sequelize} = require('sequelize');

const userModel = require('./models/User');
const domicilioModel = require('./models/Domicilio');
const tarjetaModel = require('./models/Tarjeta');
const compraModel = require('./models/Compra');
const productoModel = require('./models/Producto');
const categoriaModel = require('./models/Categoria');
const productoCarritoModel = require('./models/ProductoCarrito');
const carritoModel = require('./models/Carrito');

/** CONFIGURACIÓN CONEXION PARA LA BD */
const sequelize = new Sequelize("tp3-compras", "root", "toor" ,{
    host : "localhost",
    port: "3306",
    dialect: "mysql"
});

/*** REALIZO LOS MAPEOS DE LAS CLASES */
const UserModel = userModel(sequelize, Sequelize);
const DomicilioModel = domicilioModel(sequelize, Sequelize);
const TarjetaModel = tarjetaModel(sequelize, Sequelize);
const CompraModel = compraModel(sequelize, Sequelize);
const ProductoModel = productoModel(sequelize, Sequelize);
const CategoriaModel = categoriaModel(sequelize, Sequelize);
const ProductoCarritoModel = productoCarritoModel(sequelize, Sequelize);
const CarritoModel = carritoModel(sequelize, Sequelize);

//USER
/*** relacion one to many de User y Tarjeta **/
UserModel.hasMany(TarjetaModel, {
        foreignKey: 'idUser' , 
        as: 'tarjetas'
    });
TarjetaModel.belongsTo(UserModel, {
    foreignKey: 'idUser',
    as: 'user'
});

/*** relacion one to many de User y Domicilio **/
UserModel.hasMany(DomicilioModel, {
    foreignKey: 'idUser' , 
    as: 'domicilios'
});
DomicilioModel.belongsTo(UserModel, {
    foreignKey: 'idUser',
    as: 'user'
});

//PRODUCTO

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

//COMPRAS
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

/** INICIALIZO EL MAPEO **/
sequelize.sync({ force: false})
    .then( ()=>{
        console.log("Models mapeados!!!");
    });

/** EXPORTO LOS OBJETOS PARA PODER USARLOS PARA LAS CONSULTAS */
module.exports = {
    UserModel,
    DomicilioModel,
    TarjetaModel, 
    CategoriaModel,
    ProductoModel,
    ProductoCarritoModel,
    CarritoModel,
    CompraModel,
    sequelize
}