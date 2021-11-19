const {UserService} = require('../services/UsuarioServices');
const {RolService} = require('../services/RolServices');
const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    try{
        //Chequeo si el header con el token esta
        let authorization = req.header('auth_token');
        if( authorization && authorization.toLowerCase().startsWith('bearer')) {
            let token = authorization.split(' ')[1];
            console.log(token);
            //Compruebo si es un token valido
            const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
            if(!token || !decodedToken ){
                    return res.status(401).send({
                        message: 'Token invalido o expirado'
                    });
                }else{ req.user = decodedToken;  next();}

        }else{
            return res.status(401).send({
                messae: 'El header no tiene un token asignado'
            });
        }
 
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: 'Ocurrio un error: ' + err 
        });
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