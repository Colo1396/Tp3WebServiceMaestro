module.exports = (sequalize, type)=>{
    return sequalize.define('categoria',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: type.STRING,
            allowNull : false
        }
    });
}
