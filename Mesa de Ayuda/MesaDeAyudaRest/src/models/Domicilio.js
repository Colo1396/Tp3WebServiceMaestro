const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');

module.exports = (sequalize, type)=>{
    return sequalize.define('domicilio',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        provincia: {
            type: type.STRING,
            allowNull : false
        },
        localidad: {
            type: type.STRING,
            allowNull : false
        },
        calle: {
            type: type.STRING,
            allowNull : false
        },
        numero: {
            type: type.INTEGER,
            allowNull : false
        },
        pisoDepto: {
            type: type.STRING,
            allowNull : false
        },
        idUser: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}