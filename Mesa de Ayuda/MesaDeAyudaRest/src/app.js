const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const dotenv = require('dotenv');
const { cloudinaryConfig } = require('./middlewares/cloudinaryConfig');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
dotenv.config({path: __dirname + '/.env.local'});

//ROUTES-IMPORTS-------------------------------------------------
const authRoutes = require('./routes/authRoutes');
const denunciaRoutes = require('./routes/denunciasRoutes')
const reclamoRoutes = require('./routes/reclamosRoutes')
const rolRoute = require('./routes/rolesRoutes');
const userRoute = require('./routes/usuariosRoutes');
const categoriaRoute = require('./routes/categoriaRoutes');
const productoRoute = require('./routes/productosRoutes');
const medioDePagoRoute = require('./routes/mediosDePagoRoutes');

//INICIALIZACIONES-------------------------------------------------
const app = express();

//MIDDLEWARES------------------------------------------
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//SETTINGS---------------------------------------------
app.set('json spaces', 2);

//ROUTES-----------------------------------------------
app.use('*', cloudinaryConfig)
app.use('/', swaggerUI.serve);
app.use(authRoutes);
app.use('/users', userRoute);
app.use('/denuncias/', denunciaRoutes);
app.use('/reclamos/', reclamoRoutes);
app.use('/productos', productoRoute);
app.use('/mediosDePago', medioDePagoRoute);
app.use('/roles', rolRoute);
app.use('/categorias', categoriaRoute);
app.get('/', swaggerUI.setup(swaggerDocument));

module.exports=app