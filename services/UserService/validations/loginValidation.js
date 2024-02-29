const { ResultServiceScope } = require("../../../Utils/Scopes")


function passwordValidation(password){
    if (password){
        return new ResultServiceScope(true)
    } else{
        return new ResultServiceScope(false, 'Empty password.')
    }
}

async function match(email, password){
    const UserService = require("../UserService")
    const userService = new UserService()
    const user = await userService.getByEmail(email)
    if (user && user.password === password){
        return new ResultServiceScope(true, user)
    }else {
        return new ResultServiceScope(false, 'Wrong password or email.')
    }
}

module.exports= {
    passwordValidation,
    match
}