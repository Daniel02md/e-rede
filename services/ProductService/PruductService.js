const Services = require("../Services");
const dataSource = require('../../models')
const CategoryService = require('../CategoryService/CategoryService')

class ProductService extends Services{
    constructor(){
        super('Product')
    }

    async getProductsByCategory(categoryName){
        const categoryService = new CategoryService()
        return await categoryService.getProducts(categoryName)
    }
}

module.exports = ProductService