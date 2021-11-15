var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/probando', function(req, res, next) {
  //res.render('index', { title: 'User' });
  //return res.status(200).send("<h1>Hola mundo</h1>");
  return res.status(200).send({
    nombre: "Rocío",
    message: "Hola mundo"
  });

});

router.post('/probando', function(req, res, next) {
  //res.render('index', { title: 'User' });
  //return res.status(200).send("<h1>Hola mundo</h1>");
  return res.status(200).send({
    nombre: "Rocío",
    message: "Hola mundo desde POST"
  });
});

module.exports = router;
