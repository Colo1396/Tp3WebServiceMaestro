module.exports = (sequalize, type)=>{
    return sequalize.define('compra',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        idVendedor: {
            type: type.INTEGER,
            allowNull : false
        },
        idComprador: {
            type: type.INTEGER,
            allowNull : false
        },
        idCarrito: {
            type: type.INTEGER,
            allowNull : false
        },
        idMedioDePago: {
            type: type.INTEGER,
            allowNull : false
        },
        idDestino: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}