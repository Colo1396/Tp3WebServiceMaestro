module.exports = (sequalize, type)=>{
    return sequalize.define('tarjeta',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        tipo: {
            type: type.STRING,
            allowNull : false
        },
        numero: {
            type: type.STRING,
            allowNull : false
        },
        nombreTitular: {
            type: type.STRING,
            allowNull : false
        },
        dniTitular: {
            type: type.INTEGER,
            allowNull: false
        },
        fechaVenc: {
            type: type.DATE,
            allowNull : false
        },
        codSeguridad: {
            type: type.STRING,
            allowNull : false
        },
        idUser: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}
