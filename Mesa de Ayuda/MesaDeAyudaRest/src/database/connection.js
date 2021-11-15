const {Sequelize} = require("sequelize");

const userModel = require('../models/Usuario');
const productoModel = require('../models/Producto');
const medioDePagoModel = require('../models/MedioDePago');
const rolModel = require('../models/Rol');
const denunciaModel = require('../models/Denuncia');
const reclamoModel = require('../models/Reclamo');

const sequelize = new Sequelize(
    "mesadeayuda_db", "root", "123456789",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        logging: false
    }
);

/*
const sequelize = new Sequelize(
    "bbglhfbpl88th3ne8zmg", "unyu1hkmsskogwus", "V96syZVkwK1AwOV0O3Wn",
    {
        host: "bbglhfbpl88th3ne8zmg-mysql.services.clever-cloud.com",
        port: "3306",
        dialect: "mysql",
        logging: false
    }
);
*/

/*** REALIZO LOS MAPEOS DE LAS CLASES */
const UserModel = userModel(sequelize, Sequelize);
const ProductoModel = productoModel(sequelize, Sequelize);
const MedioDePagoModel = medioDePagoModel(sequelize, Sequelize);
const RolModel = rolModel(sequelize, Sequelize);
const DenunciaModel = denunciaModel(sequelize, Sequelize);
const ReclamoModel = reclamoModel(sequelize, Sequelize);

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
    as: 'usuario'
});

/* relacion one to many de user y denuncia */
UserModel.hasMany(DenunciaModel,{
    foreignKey: 'compradorId',
    as: 'denuncias'
});
DenunciaModel.belongsTo(UserModel,{
    foreignKey: 'compradorId',
    as: 'comprador'
});

/* relacion one to many de user y reclamo */
UserModel.hasMany(ReclamoModel,{
    foreignKey: 'compradorId',
    as: 'reclamos'
});
ReclamoModel.belongsTo(UserModel,{
    foreignKey: 'compradorId',
    as: 'comprador'
});

/* relacion one to many de producto y denuncia */
ProductoModel.hasMany(DenunciaModel,{
    foreignKey: 'productoId',
    as: 'denuncias'
});
DenunciaModel.belongsTo(ProductoModel,{
    foreignKey: 'productoId',
    as: 'producto'
});

/* relacion one to many de producto y reclamo */
ProductoModel.hasMany(ReclamoModel,{
    foreignKey: 'productoId',
    as: 'reclamos'
});
ReclamoModel.belongsTo(ProductoModel,{
    foreignKey: 'productoId',
    as: 'producto'
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
    RolModel,
    ReclamoModel,
    DenunciaModel
}