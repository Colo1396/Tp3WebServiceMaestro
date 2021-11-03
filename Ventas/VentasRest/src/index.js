const app = require('./app');


//SERVER-START-------------------------------------
app.listen(app.get('port'),()=>{
    console.log('Escuchando el puerto', app.get('port'));
})