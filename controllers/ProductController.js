const Controller = require('./Controllers')
const {ProductService} = require('../services')
const { ResultStruct } = require('../Utils/Scopes')


const productService = new ProductService()

class ProductController extends Controller{
    constructor(){
        super(productService)
    }
    async getAll(req, res){
        const result = await this.service.getAll()
        res.status(200).json(result)
        
    }
    async getProductsByCategory(req, res, next){
        
        const {category} = req.query
        if (!category){return next()}
        const productsResult = await this.service.getProductsByCategory(category)
        
        if (!productsResult.success){
            res.status(400).json(productsResult)
        }else{
            return res.status(200).json(productsResult)
        }
        
    }
}

module.exports = ProductController