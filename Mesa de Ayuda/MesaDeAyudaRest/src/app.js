
const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const mediosDePagoRoutes = require('./routes/mediosDePago');
const productosRoutes = require('./routes/productos');
const usuariosRoutes = require('./routes/usuarios');
const denunciasRouters = require('./routes/denuncias');
const reclamosRouters = require('./routes/reclamos');

//inicializo
const app = express();
const {MedioDePagoModel,UserModel,ProductoModel} = require('./database/connection');


//middlewares
app.use(express.urlencoded({extended:false}))//para q cuando envien un POST desde un form lo entienda
app.use(express.json()); //enteder los datos json
app.use(morgan('dev')); //mostar por consola lo que va llegando
app.use(cors());//para q permita q cualquier servidor pida cosas y haga operaciones
app.use(express.static(path.join(__dirname, './views/static')));


//SETTINGS---------------------------------------------
app.set('json spaces', 2);
app.set('view engine', 'hbs');
app.set('views', './src/views');

//VARIABLES GLOBALES-----------------------------------
app.use((req, res, next) =>{
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    res.locals.user = req.user;
    next();
});

//routes
app.use("/api/mediosDePago/",mediosDePagoRoutes);
app.use("/api/productos/",productosRoutes);
app.use("/api/usuarios/",usuariosRoutes);
app.use("/api/denuncias/",denunciasRouters);
app.use("/api/reclamos/",reclamosRouters);


module.exports = app;

