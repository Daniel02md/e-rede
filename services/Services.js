const dataSource = require('../models')

class Services{
    constructor (modelName){
        this.model = modelName
        this.baseModel = dataSource[this.model]
    }
    
    async getById(id){
        const result = await dataSource[this.model].findByPk(id)
        return result
    }
    async getAll() {
        const result = await dataSource[this.model].findAll()
        return result
    }
}

module.exports = Services