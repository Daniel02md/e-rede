const { ResultServiceScope } = require("../../../Utils/Scopes")

async function exists(categoryName){
    const CategoryService = require('../CategoryService')
    const categoryService = new CategoryService()
    
    const category = await categoryService.baseModel.findAll({
        where: {
            name: categoryName
        }
    })
    return category.length > 0 ? new ResultServiceScope(true, category[0]) : new ResultServiceScope(false, 'Category not found.') 
}


module.exports = {
    exists
}