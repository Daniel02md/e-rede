const Services = require("../Services");
const dataSource = require('../../models')
const CategoryService = require('../CategoryService/CategoryService');
const { ResultStruct } = require("../../utils/Scopes");
const { productValidation } = require("./validations");

class ProductService extends Services {
    constructor() {

        super('Product')
    }

    async decrementProductsAmount(products) {
        const productIds = products.map(productId => {return productId.id}) 
        const checkExists = await productValidation.getProductsValidation(productIds)

        if (!checkExists.success) {

            return checkExists

        } else {

            const productsInstances = checkExists.result
            for (let product of productsInstances) {
                const decrementValue = products.find(element => element.id === product.id).amount

                if ((product.stock - decrementValue) >= 0) {
                    product.stock -= decrementValue
                } else {
                    return new ResultStruct(false, `Not avaliable amount for the product "${product.name}".`)
                }
            }
            return new ResultStruct(true, productsInstances)
        }
    }

    async getAll() {
        const result = await this.baseModel.findAll({
            raw: true,
            nest: true,
            attributes: {
                exclude: ['category_id']
            },
            include: [{
                model: dataSource.Category,
                as: 'category'
            }]
        })
        return new ResultStruct(true, result)
    }

    async getProductsByCategory(categoryName) {
        const categoryService = new CategoryService()
        return await categoryService.getProducts(categoryName)
    }
}

module.exports = ProductService