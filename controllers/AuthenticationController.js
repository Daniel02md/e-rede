const { AuthenticationService } = require("../services");
const jwt = require('jsonwebtoken')

class AuthenticationCotroller{
    static async validateToken(req, res, next){
        
        const token = req.header('Authorization')
        const verificationResult = await AuthenticationService.validateToken(token)
        if (!verificationResult.success){
            res.status(400).json(verificationResult)
        } else{
            const userId = jwt.decode(token, {complete: true}).payload.sub
            req.user_id = userId
            next()
        }
    }
}

module.exports = AuthenticationCotroller