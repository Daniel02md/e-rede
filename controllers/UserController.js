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
        const loginResult = await this.service.check(email, password)
        if (loginResult.error){
            res.status(400).json({
                message: error.message
            })
        } else{
            res.status(200).json({
                id: loginResult.id,
                name: loginResult.name
            })
        }
        
    }
}

module.exports = UserController