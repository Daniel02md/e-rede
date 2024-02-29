const { ResultServiceScope } = require("../../../Utils/Scopes")


function nameValidation (name){
    if (name){
        if (typeof(name) === "string"){
           return new ResultServiceScope(true)
        }else{
            return new ResultServiceScope(false,
             `Invalid type of name. It must be a string.`)
        }
    } else{
        return new ResultServiceScope(false,
             'Invalid value of name.')
    }
}

function emailValidation(email){
    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email){
        if (!mailRegex.test(email)){
            return new ResultServiceScope(false, "Invalid email.")
        } else{
            return new ResultServiceScope(true)
        }
    } else{
        return new ResultServiceScope(true)
    }
    
}
function passwordValidation(password){
    const passwdRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/

    if (password){
        if (passwdRegex.test(password)){
            return new ResultServiceScope(true)
        }else{
            return new ResultServiceScope(false, "Password require at leat 1 Upper Letter.")
        }
    } else{
        return new ResultServiceScope(false, 'Null password.')
    }
}

async function exists(email){
    const UserService = require('../UserService')
    const userService = new UserService()
    const user = await userService.getByEmail(email)
    
    return user === undefined ? new ResultServiceScope(true) : new ResultServiceScope(false, 'Email exists.')
}

module.exports = {
    nameValidation,
    emailValidation,
    passwordValidation,
    exists
}