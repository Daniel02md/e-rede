const { ResultStruct } = require("../../../utils/Scopes")


function passwordValidation(password){
    if (password){
        return new ResultStruct(true)
    } else{
        return new ResultStruct(false, 'Empty password.')
    }
}

async function match(email, password){
    const UserService = require("../UserService")
    const userService = new UserService()
    const user = await userService.getByEmail(email)
    if (user && user.password === password){
        return new ResultStruct(true, user)
    }else {
        return new ResultStruct(false, 'Wrong password or email.')
    }
}

module.exports= {
    passwordValidation,
    match
}