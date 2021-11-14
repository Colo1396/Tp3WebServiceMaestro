const {Sequelize} = require("sequelize");

const userModel = require('../models/Usuario');
const productoModel = require('../models/Producto');
const medioDePagoModel = require('../models/MedioDePago');
const rolModel = require('../models/Rol');


const sequelize = new Sequelize(
    "mesadeayuda_db", "root", "123456789",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        logging: false
    }
);

/*** REALIZO LOS MAPEOS DE LAS CLASES */
const UserModel = userModel(sequelize, Sequelize);
const ProductoModel = productoModel(sequelize, Sequelize);
const MedioDePagoModel = medioDePagoModel(sequelize, Sequelize);
const RolModel = rolModel(sequelize, Sequelize);

/* relacion one to many de User y Rol*/
RolModel.hasMany(UserModel, {
    foreignKey: 'rolId',
    as: 'roles'
});
UserModel.belongsTo(RolModel, {
    foreignKey: 'rolId',
    as: 'rol'
});

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
ProductoModel.belongsToMany(MedioDePagoModel, { through: 'producto_mediodepago'});
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
    MedioDePagoModel,
    RolModel
}