module.exports = (sequalize, type)=>{
    return sequalize.define('carrito',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        total: {
            type: type.DOUBLE,
            allowNull : false
        },
        idComprador: {
            type: type.INTEGER,
            allowNull : false
        },
        idVendedor: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}
