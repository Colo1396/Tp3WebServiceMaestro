const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');


module.exports = (sequelize, type) =>{
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: false
        },
        imagen: {
            type: type.STRING,
            allowNull: false
        },
        precio: {
            type: type.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: type.INTEGER,
            allowNull: false
        },
        idVendedor:{
            type: type.INTEGER,
            allowNull: false
        },
        cantidadVentas: {
            type: type.INTEGER,
            allowNull: false
        }
    });
     
}
