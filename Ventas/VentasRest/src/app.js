const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const dotenv = require('dotenv');
const { cloudinaryConfig } = require('./middlewares/cloudinaryConfig');
dotenv.config({path: __dirname + '/.env.local'});

//ROUTES-IMPORTS-------------------------------------------------
const userRoute = require('./routes/users');
const productoRoute = require('./routes/productos');
const medioDePagoRoute = require('./routes/mediosDePago');

//INICIALIZACIONES-------------------------------------------------
const app = express();

//MIDDLEWARES------------------------------------------
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//SETTINGS---------------------------------------------
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

//ROUTES-----------------------------------------------
app.use('*', cloudinaryConfig)
app.use('/users', userRoute);
app.use('/productos', productoRoute);
app.use('/mediosDePago', medioDePagoRoute);

module.exports=app