const {Router} = require('express')
const UserController = require('../controllers/UserController')

const router = Router()
const userController = new UserController()

router.get('/user', (req, res) => userController.getAll(req, res))
router.post('/user', (req, res) => userController.create(req, res))
module.exports = router