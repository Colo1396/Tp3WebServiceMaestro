const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');

module.exports = (sequelize, type) =>{
    return sequelize.define(
        'MedioDePago',{
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull : false
            },
            nombre: {
                type: type.STRING,
                allowNull: false
            }
    });
} 


