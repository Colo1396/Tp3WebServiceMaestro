module.exports = (sequalize, type)=>{
    return sequalize.define('productoCarrito',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        cantidad: {
            type: type.INTEGER,
            allowNull : false
        },
        idProducto: {
            type: type.INTEGER,
            allowNull : false
        },
        idCarrito: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}
