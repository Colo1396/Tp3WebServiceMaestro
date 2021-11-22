module.exports = (sequalize, type)=>{
    return sequalize.define('domicilio',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        provincia: {
            type: type.STRING,
            allowNull : false
        },
        localidad: {
            type: type.STRING,
            allowNull : false
        },
        calle: {
            type: type.STRING,
            allowNull : false
        },
        numero: {
            type: type.INTEGER,
            allowNull : false
        },
        pisoDepto: {
            type: type.STRING,
            allowNull : true
        },
        idUser: {
            type: type.INTEGER,
            allowNull : false
        }
    });
}
