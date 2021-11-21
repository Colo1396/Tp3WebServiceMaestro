//REQUIRES
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const http = require('http');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const hbs = require( 'hbs' );

//SERVICES--------------------------------------
const {UserService} = require('./src/services/UserService');
const {CarritoService} = require('./src/services/CarritoService');
const {CategoriaService} = require('./src/services/CategoriaService');
const {CompraService} = require('./src/services/CompraService');
const {DomicilioService} = require('./src/services/DomicilioService');
const {ProductoCarritoService} = require('./src/services/ProductoCarritoService');
const {ProductoService} = require('./src/services/ProductoService');
const {TarjetaService} = require('./src/services/TarjetaService');

//----------------------------------------------
//CARGAR ARCHIVOS DE RUTAS
var indexRouter = require('./src/controllers/index');
var probandoRouter = require('./src/controllers/probando');
var userRouter = require('./src/routes/user'); 

//EJECUTO EXPRESS
const app = express();
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
/*app.engine( 'hbs', hbs( { 
  extname: 'hbs', 
  defaultLayout: 'index', 
  partialsDir: __dirname + '/views/partials/'
} ) );*/
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
//PROBANDO
app.use(require('./src/controllers/probando'));
//USER
app.use(require('./src/controllers/user'));
//PRODUCTO
app.use(require('./src/controllers/producto'));
//USER
app.use(require('./src/controllers/domicilio'));


//Crear el servidor
server.listen(process.env.PORT || 8080, ()=>{
  console.log('Escuchando el puerto', process.env.PORT || 8080);
});

module.exports = app;
