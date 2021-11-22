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
            allowNull : false
        },
        descripcion: {
            type: type.STRING,
            allowNull : false
        },
        imagen: {
            type: type.STRING,
            allowNull : false
        },
        precio: {
            type: type.DOUBLE,
            allowNull : false
        },
        stock: {
            type: type.INTEGER,
            allowNull : false
        },
        formaDePago: {
            type: type.STRING,
            allowNull : false
        },
        idUser: {
            type: type.INTEGER,
            allowNull : false
        },
        idCategoria: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}