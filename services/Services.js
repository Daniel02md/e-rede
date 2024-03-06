const dataSource = require('../models')
const { ResultStruct } = require('../utils/Scopes')

class Services{
    constructor (modelName){
        this.model = modelName
        this.baseModel = dataSource[this.model]
    }
    
    async getById(id){
        const result = await this.baseModel.findByPk(id)
        return result
    }
    async getAll() {
        const result = await this.baseModel.findAll()
        return new ResultStruct(true, result)
    }
}

module.exports = Services