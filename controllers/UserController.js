const Controller = require('./Controllers')
const {UserService} = require('../services')


const userService = new UserService()

class UserController extends Controller{
    constructor(){
        super(userService)
    }

    async create(req, res){
        const {name, email, password} = req.body
        const userResult = await this.service.create(name, email, password)
        if (!userResult.success){
            res.status(400).json(userResult)
            
        } else{
            userResult.result = {
                id: userResult.result.id,
                email: userResult.result.email
            }
            res.status(200).json(userResult)
        }
        
    }
    async login(req, res){
        const {email, password} = req.body
        const loginResult = await this.service.login(email, password)
        if (!loginResult.success){
            res.status(400).json(loginResult)
        } else{
            res.status(200).json(loginResult)
        }
        
    }
}

module.exports = UserController