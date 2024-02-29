const Controller = require('./Controllers')
const {ProductService} = require('../services')
const { ResultServiceScope } = require('../Utils/Scopes')


const productService = new ProductService()

class ProductController extends Controller{
    constructor(){
        super(productService)
    }
    
    async getProductsByCategory(req, res){
        
        const {category} = req.query
        const productsResult = await this.service.getProductsByCategory(category)
        
        if (!productsResult.success){
            res.status(400).json(productsResult)
        }else{
            return res.status(200).json(productsResult)
        }
        
    }
}

module.exports = ProductController