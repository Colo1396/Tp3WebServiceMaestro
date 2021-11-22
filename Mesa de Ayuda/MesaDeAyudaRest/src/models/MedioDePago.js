module.exports = (sequelize, type) =>{
    return sequelize.define(
        'medioDePago',{
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

