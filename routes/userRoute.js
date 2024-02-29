const {Router} = require('express')
const UserController = require('../controllers/UserController')
const AuthenticationController = require('../controllers/AuthenticationController')

const router = Router()
const userController = new UserController()

router.get('/user', AuthenticationController.validateToken, (req, res) => userController.getAll(req, res))
router.post('/user', (req, res) => userController.create(req, res))
router.post('/login', (req, res) => userController.login(req, res))
module.exports = router