const {Router} = require('express')
const {CategoryController} = require('../controllers')

const router = Router()
const categoryController = new CategoryController()

router.get(
    '/category',
    (req, res) => categoryController.getCategories(req, res)
)

module.exports = router