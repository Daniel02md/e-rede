const Services = require("../Services");
const dataSource = require('../../models')
const {insertValidation} = require('./validations');
const { ResultServiceScope } = require("../../Utils/Scopes");

class UserService extends Services{
    constructor(){
        super('User')
    }

    async login(email, password){

    }

    async getByEmail(email){
        const checkEmail = insertValidation.emailValidation(email)
        if (!checkEmail.success){
            return checkEmail
        }else{
            let result = await dataSource[this.model].findAll({
                where: {
                    email: email
                }
            })
                        
            return result.length > 0 ? result[0] : undefined
        }
    }
0
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
            return new ResultServiceScope(true, queryResult)
        }
    }


}


module.exports = UserService