const { ResultStruct } = require("../../../utils/Scopes")
const jwt = require('jsonwebtoken')


function tokenValidation(token){
    const genericTokenRegex = /eyJ[A-Za-z0-9-_]+\.eyJ[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/]*/
    if (token && genericTokenRegex.test(token)){
        return new ResultStruct(true)
    }else{
        return new ResultStruct(false, 'Permission denied. Invalid Token.')
    }
}

async function tokenUserValidation(token){
    const UserService = require("../../UserService/UserService")
    const userService = new UserService()
    const decodedToken = jwt.decode(token, {complete: true})
    const userId = decodedToken.payload.sub
    const checkUserExist = await userService.getById(userId) 

    if (checkUserExist){
        return new ResultStruct(true)
    }else {
       return new ResultStruct(false, 'Permission Denied. Invalid token.')
    }
    
}

module.exports = {
    tokenValidation,
    tokenUserValidation
}