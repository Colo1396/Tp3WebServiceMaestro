module.exports = (sequelize, type) =>{
    return sequelize.define('categoria', {
        id: {
            type: type.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: type.STRING,
            allowNull: false
        }
    });
     
}
