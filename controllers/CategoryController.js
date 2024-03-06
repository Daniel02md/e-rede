const { CategoryService } = require("../services");
const Controller = require("./Controllers");
const categoryService = new CategoryService()

class CategoryController extends Controller{
    constructor(){
        super(categoryService)
    }

    async getCategories(req, res) {
        const categories = await this.service.getAll()
        res.status(200).json(categories)
    }
}


module.exports = CategoryController