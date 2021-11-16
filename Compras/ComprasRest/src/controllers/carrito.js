const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('../lib/jwt');

const auth = require('../middlewares/authenticated');
const {CarritoService} = require('../services/CarritoService');

module.exports = router;