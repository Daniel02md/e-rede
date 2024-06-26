const jwt = require('jsonwebtoken')
const { verifyValidation } = require('./validation')
const { ResultStruct } = require('../../utils/Scopes')

class AuthenticationService {
    static options = {
        expiresIn: '3 days',
        issuer: 'e-rede',
    }

    static createToken(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, this.options)
    }

    static async validateToken(token) {
        const checkToken = verifyValidation.tokenValidation(token)
        if (!checkToken.success) {
            return checkToken
        } else {
            const checkUserValid = await verifyValidation.tokenUserValidation(token)
            if (!checkUserValid.success) {
                return checkUserValid
            } else {
                try {

                    jwt.verify(token, process.env.SECRET_KEY)
                    return new ResultStruct(true)
                } catch {
                    return new ResultStruct(false, 'Permission Denied. Invalid token.')
                }
            }

        }

    }
}

module.exports = AuthenticationService