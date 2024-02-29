const { AuthenticationService } = require("../services");

class AuthenticationCotroller{
    static validateToken(req, res, next){
        
        const token = req.header('Authorization')
        const verificationResult = AuthenticationService.validateToken(token)
        if (!verificationResult.success){
            res.status(400).json(verificationResult)
        } else{
            next()
        }
    }
}

module.exports = AuthenticationCotroller