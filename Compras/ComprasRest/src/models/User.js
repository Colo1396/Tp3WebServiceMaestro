const {Sequelize} = require('sequelize');

module.exports = (sequelize, type) =>{
    return sequelize.define('usuario', {
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
        },
        telefono: {
            type: type.INTEGER,
            allowNull: true
        },
        billetera: {
            type: type.DECIMAL,
            allowNull: false,
            defaultValue: 0
        }
    });
}