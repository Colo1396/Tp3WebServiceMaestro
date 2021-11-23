const server = require('./app');

server.listen(process.env.PORT || 8082, ()=>{
    console.log('Escuchando el puerto', process.env.PORT || 8082);
});

