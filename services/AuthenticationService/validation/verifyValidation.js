const { ResultServiceScope } = require("../../../Utils/Scopes")

function tokenValidation(token){
    const genericTokenRegex = /eyJ[A-Za-z0-9-_]+\.eyJ[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/]*/
    if (token && genericTokenRegex.test(token)){
        return new ResultServiceScope(true)
    }else{
        return new ResultServiceScope(false, 'Permission denied. Invalid Token.')
    }
}

module.exports = {
    tokenValidation
}