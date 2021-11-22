const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

//INITIALIZATE
const app = express();

//SETTINGS---------------------------------------------
dotenv.config({path: __dirname + '/.env.local'});
//app.set('json spaces', 2);
//app.set('view engine', 'hbs');
//app.set('views', './src/views');

//MIDDLEWARES
app.use(express.urlencoded({extended:false}))//para q cuando envien un POST desde un form lo entienda
app.use(express.json()); //enteder los datos json
app.use(morgan('dev')); //mostar por consola lo que va llegando
app.use(cors());//para q permita q cualquier servidor pida cosas y haga operaciones
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, './views/static')));


//ROUTES------------------------------------------------
app.use(require('./routes/authRoutes'));
app.use("/denuncias/",require('./routes/denunciasRoutes'));
app.use("/reclamos/",require('./routes/reclamosRoutes'));

module.exports = app;

