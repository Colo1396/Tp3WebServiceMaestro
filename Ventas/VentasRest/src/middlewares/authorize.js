const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
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

module.exports = { authorize };