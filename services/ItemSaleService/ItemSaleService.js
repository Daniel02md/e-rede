const Services = require("../Services");
const { Product, Sale, User} = require('../../models')

class ItemSaleService extends Services{
    constructor(){
        super('ItemSale')
    }

    async bulkCreate(orders){
        const createdOrders = await this.baseModel.bulkCreate(
            orders
        )
        return createdOrders
    }
}

module.exports = ItemSaleService