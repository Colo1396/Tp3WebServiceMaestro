const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');

module.exports = (sequelize, type) =>{
    
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        rolId:{
            type: type.INTEGER,
            allowNull: false
        },
        username: {
            type: type.STRING,
            allowNull : false
        },
        nombre: {
            type: type.STRING,
            allowNull : false
        },
        apellido: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull : false
        },
        dni: {
            type: type.INTEGER,
            allowNull: false
        }
    });

}


