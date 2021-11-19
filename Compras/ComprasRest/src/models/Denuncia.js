const {Sequelize} = require('sequelize');

module.exports = (sequelize, type) =>{
    return sequelize.define('denuncia', {
        id: {
            type: type.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        }, 
        categoria: {
            type: Sequelize.ENUM("falsificación", "producto ilegal", "fraude", "contenido inapropiado"),
            allowNull: false
        },
        comentario: {
            type: type.STRING,
            allowNull: true
        },
        productoId:{
            type: type.INTEGER,
            allowNull: false
        },
        userId:{
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
