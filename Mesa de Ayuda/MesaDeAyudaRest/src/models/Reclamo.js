const {Sequelize} = require('sequelize');

module.exports = (sequelize, type) =>{
    return sequelize.define('reclamo', {
        id: {
            type: type.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        compraId:{
            type: type.INTEGER,
            allowNull: false
        },
        estado:{
            type: Sequelize.ENUM("a resolver", "resuelto"),
            defaultValue: "a resolver",
            allowNull: false
        }
       
    });
     
}