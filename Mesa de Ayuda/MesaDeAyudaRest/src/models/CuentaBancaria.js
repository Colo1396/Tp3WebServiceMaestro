module.exports = (sequalize, type)=>{
    return sequalize.define('cuentaBancaria',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nroCuenta: {
            type: type.STRING,
            allowNull: false
        },
        idVendedor: {
            type: type.INTEGER,
            allowNull: false
        }
    });
}