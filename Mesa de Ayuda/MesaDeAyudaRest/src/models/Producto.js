module.exports = (sequalize, type)=>{
    return sequalize.define('producto',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: false
        },
        imagen: {
            type: type.STRING,
            allowNull: false
        },
        precio: {
            type: type.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: type.INTEGER,
            allowNull: false
        },
        idVendedor:{
            type: type.INTEGER,
            allowNull: false
        },
        cantidadVentas: {
            type: type.INTEGER,
            allowNull: false
        },
        idCategoria: {
            type: type.INTEGER,
            allowNull: false
        }
    });
}
