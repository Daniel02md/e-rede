const Services = require('../Services')
const { ResultStruct } = require('../../utils/Scopes')
const ItemSaleService = require('../ItemSaleService/ItemSaleService')
const {
    orderValidation
} = require('./validations')

class SaleService extends Services {
    constructor() {
        super('Sale')
    }

    async order(products, userId) {
        const itemSaleService = new ItemSaleService()
        const [date, time] = (new Date()).toISOString().split('T')
        const [sale, created] = await this.baseModel.findOrCreate({
            where: {
                date: date
            },
            defaults: {
                date: date
            },
            raw: true
        })

        const checkDecrement = await orderValidation.decrementProductsValidation(products)
        if (!checkDecrement.success) {
            return checkDecrement
        } else {
            const orders =  []
            checkDecrement.result.forEach(
                product => {
                    orders.push({
                        user_id: userId,
                        product_id: product.id,
                        sale_id: sale.id
                    })
                }
            ) 
            return new ResultStruct(true, await itemSaleService.bulkCreate(orders))
        }
    }
}


module.exports = SaleService