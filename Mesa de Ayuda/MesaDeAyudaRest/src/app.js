
const { json } = require('express');
const express= require('express');
const morgan = require('morgan');

const app = express();

//middlewares
app.use(morgan('dev')); //mostar por consola lo que va llegando
app.use(json()); //enteder los datos json

module.exports = app;