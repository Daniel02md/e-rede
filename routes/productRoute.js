const {Router} = require('express')
const {ProductController} = require('../controllers')

const router = Router()
const productController = new ProductController()

router.get('/product', (req, res, next) => productController.getProductsByCategory(req, res, next),
                       (req, res) => productController.getAll(req, res))

module.exports = router