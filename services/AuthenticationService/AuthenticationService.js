const jwt = require('jsonwebtoken')
const { verifyValidation } = require('./validation')
const { ResultServiceScope } = require('../../Utils/Scopes')

class AuthenticationService{
    static options = {
        expiresIn: '3 days',
        issuer: 'e-rede',
    }
    
    static createToken(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, this.options)
    }
    
    static validateToken(token){
        const checkToken = verifyValidation.tokenValidation(token)
        if (!checkToken.success){
            return checkToken
        } else {
            try {
                jwt.verify(token, process.env.SECRET_KEY)
                return new ResultServiceScope(true)
            }catch{
                return new ResultServiceScope(false, 'Permission Denied. Invalid token.')
            }
            
        }
            
    }
}

module.exports = AuthenticationService