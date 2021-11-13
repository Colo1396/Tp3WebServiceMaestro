const {Sequelize} = require('sequelize');

const userModel = require('./models/User');
const productoModel = require('./models/Producto');
const medioDePagoModel = require('./models/MedioDePago');

/** CONFIGURACIÓN CONEXION PARA LA BD */
const sequelize = new Sequelize("tpIIItienda", "root", "root" ,{
    host : "localhost",
    port: "3306",
    dialect: "mysql"
});

/*** REALIZO LOS MAPEOS DE LAS CLASES */
const UserModel = userModel(sequelize, Sequelize);
const ProductoModel = productoModel(sequelize, Sequelize);
const MedioDePagoModel = medioDePagoModel(sequelize, Sequelize);

/* relacion one to many de User y Producto */
UserModel.hasMany(ProductoModel, {
    foreignKey: 'idVendedor',
    as: 'productos'
});
ProductoModel.belongsTo(UserModel, {
    foreignKey: 'idVendedor',
    as: 'vendedor'
});

/* relacion many to many de Producto y MedioDePago */
ProductoModel.belongsToMany(MedioDePagoModel, { through: 'producto_mediodepago', as: 'mediosDePago'});
MedioDePagoModel.belongsToMany(ProductoModel, { through: 'producto_mediodepago'});

/** INICIALIZO EL MAPEO **/
sequelize.sync({ force: false})
    .then( ()=>{
        console.log("Models mapeados!!!");
    });

/** EXPORTO LOS OBJETOS PARA PODER USARLOS PARA LAS CONSULTAS */
module.exports = {
    UserModel,
    ProductoModel,
    MedioDePagoModel
}