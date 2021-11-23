const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');
const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    try{
        //Chequeo si el header con el token esta
        const token = req.header('auth_token');
        if(!token) return res.status(401).send('Token missing');

        //Compruebo si es un token valido
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
        if(!req.user){
            return res.status(401).send('Session expired');
        }

        return next();
    } catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

const isNotAuthenticated = (req,res,next)=>{
    try{
        //Chequeo si el header con el token esta
        const token = req.header('auth_token');
        if(!token) return next();
        else{
            //compruebo que el token no sea valido
            let decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
            if(!token || !decodedToken.id){
                return next();
            }
        }
    } catch(err){
        console.log(err);
        res.status(500).send({
            message: 'Ocurrio un error: ' + err 
        });
    }
}

module.exports = {
    isAuthenticated,
    isNotAuthenticated
}