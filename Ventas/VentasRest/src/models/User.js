module.exports = (sequalize, type)=>{
    return sequalize.define('user',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
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
        billetera: {
            type: type.DECIMAL,
            allowNull: false
        }
    });
}
