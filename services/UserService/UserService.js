const Services = require("../Services");
const dataSource = require('../../models')
const {insertValidation, loginValidation} = require('./validations');
const { ResultStruct } = require("../../utils/Scopes");
const AuthenticationService = require("../AuthenticationService/AuthenticationService");


class UserService extends Services{
    constructor(){
        super('User')
    }

    async login(email, password){
        const checkEmail = insertValidation.emailValidation(email)
        const checkPassword = loginValidation.passwordValidation(password)
        const checkMatch  = await loginValidation.match(email, password)
        if (!checkEmail.success){

            return checkEmail

        } else if (!checkPassword.success){

            return checkPassword

        } else if (!checkMatch.success){
            
            return checkMatch
            
        } else{
            checkMatch.result = {
                token: AuthenticationService.createToken({
                    sub: checkMatch.result.id,
                    email: email,
                })
            }
            return checkMatch 
        }
    }

    async getByEmail(email){
        const checkEmail = insertValidation.emailValidation(email)
        if (!checkEmail.success){
            return checkEmail
        }else{
            let result = await dataSource[this.model].findAll({
                where: {
                    email: email
                },
                raw: true
            })
                        
            return result.length > 0 ? result[0] : undefined
        }
    }

    

    async create (name, email, password){
        const checkName = insertValidation.nameValidation(name) 
        const checkEmail = insertValidation.emailValidation(email)
        const checkPassword = insertValidation.passwordValidation(password)
        const checkExists = await insertValidation.exists(email)
        if (!checkName.success){

            return checkName

        } else if(!checkEmail.success){

            return checkEmail

        } else if(!checkPassword.success){

            return checkPassword

        } else if (!checkExists.success) {

            return checkExists
        
        }else{
            const queryResult = await dataSource[this.model].create(
                {
                    name,
                    email,
                    password
                },
                {   
                    raw: true,
                }
            )
            return new ResultStruct(true, queryResult)
        }
    }


}


module.exports = UserService