const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');


module.exports = (sequelize, type) =>{
    return sequelize.define('reclamo', {
        id: {
            type: type.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        productoId:{
            type: type.INTEGER,
            allowNull: false
        },
        compradorId:{
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
