const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const {isLoggedIn,isNotLoggedIn} = require('./libs/auth');
const {actualizarProducto,crearProducto,obtenerProducto,obtenerProductos} = require('./controllers/productoController');

/**SERVICES */
const {MedioDePagoService} = require('./services/MedioDePagosService');
const {ProductoService} = require('./services/ProductosServices');
const {UserService} = require('./services/UsuarioServices');

//INITIALIZATE
const app = express();
const {MedioDePagoModel,UserModel,ProductoModel} = require('./database/connection');
const { SECRET } = require('./config/config.security');
require("./libs/passport");


//middlewares
app.use(express.urlencoded({extended:false}))//para q cuando envien un POST desde un form lo entienda
app.use(express.json()); //enteder los datos json
app.use(morgan('dev')); //mostar por consola lo que va llegando
app.use(cors());//para q permita q cualquier servidor pida cosas y haga operaciones
app.use(express.static(path.join(__dirname, './views/static')));
app.use(cookieParser());
app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//SETTINGS---------------------------------------------
app.set('json spaces', 2);
app.set('view engine', 'hbs');
app.set('views', './src/views');

//VARIABLES GLOBALES-----------------------------------
app.use((req, res, next) =>{
    app.locals.currentUser = req.user;
    res.locals.currentUser = req.user;
    next();
});

//ROUTES------------------------------------------------
app.use(require('./routes/authRoutes'));
app.use("/productos/",require('./routes/productsRoutes'));
app.use("/denuncias/",require('./routes/denunciasRoutes'));
app.use("/reclamos/",require('./routes/reclamosRoutes'));

/** HOME **/
app.get('/home', isLoggedIn ,(req,res)=>{
    res.render('home');
});

module.exports = app;

