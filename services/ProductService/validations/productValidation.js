const { ResultStruct } = require("../../../utils/Scopes")



async function getProductValidation(productId){
    const ProductService = require("../PruductService")
    const productService = new ProductService()
    const product = await productService.getById(productId)
    return product === null ? new ResultStruct(false, 'Product does not exist.') : new ResultStruct(true, product) 
}

async function getProductsValidation(productsId){
    const ProductService = require("../PruductService")
    const productService = new ProductService()

    const products = await productService.baseModel.findAll({
        where: {
            id: productsId
        }
    })
    
    return products.length !== new Set(products).size ? new ResultStruct(false, 'Product does not exist.') : new ResultStruct(true, products) 
}

module.exports = {
    getProductValidation,
    getProductsValidation
}
