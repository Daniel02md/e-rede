const {Router} = require('express')
const ProductController = require('../controllers/ProductController')

const router = Router()
const productController = new ProductController()

router.get('/product', (req, res) => productController.getProductsByCategory( req, res))

module.exports = router