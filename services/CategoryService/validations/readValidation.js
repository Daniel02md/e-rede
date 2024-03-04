const { ResultStruct } = require("../../../utils/Scopes")

async function exists(categoryName){
    const CategoryService = require('../CategoryService')
    const categoryService = new CategoryService()
    
    const category = await categoryService.baseModel.findAll({
        where: {
            name: categoryName
        }
    })
    return category.length > 0 ? new ResultStruct(true, category[0]) : new ResultStruct(false, 'Category not found.') 
}


module.exports = {
    exists
}