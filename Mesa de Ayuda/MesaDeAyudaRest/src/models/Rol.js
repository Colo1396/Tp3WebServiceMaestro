const {Sequelize} = require('sequelize');
const sequelize = require('../database/connection');

module.exports = (sequelize, type) =>{
    return sequelize.define(
        'Rol',{
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull : false
            },
            tipo: {
                type: type.STRING,
                allowNull: false
            }
    });
} 


