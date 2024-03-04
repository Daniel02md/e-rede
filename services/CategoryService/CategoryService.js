const Services = require('../Services')
const dataSource = require('../../models')
const {readValidation} = require('./validations')
const { ResultStruct } = require('../../utils/Scopes')

class CategoryService extends Services{
    constructor(){
        super('Category')
    }

    async getProducts(categoryName){
        const checkExists = await readValidation.exists(categoryName)
        if (!checkExists.success){
            return checkExists
        } else{
            let products = await checkExists.result.getProducts() 
            products = products.map( product => {
                const result = product.get('', {
                    raw: true
                })
                delete result.category_id;
                result.category = {
                    id: checkExists.result.id,
                    name: checkExists.result.name
                }
                return result
            })
           
            return new ResultStruct(true, products)
        }
        
    }
}

module.exports = CategoryService