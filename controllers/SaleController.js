const { SaleService } = require('../services')
const Controllers = require('./Controllers')
const saleService = new SaleService()


class SaleController extends Controllers{
    constructor(){
        super(saleService)
    }

    async getOrders(req, res){
        const orders = await saleService.getOrdersByUser(req.user_id)
        res.status(200).json(orders)
    }


    async order(req, res){
        const {products} = req.body
        const orderResult = await this.service.order(products, req.user_id)
        if (!orderResult.success){
            res.status(404).json(orderResult)
        } else{
            res.status(200).json(orderResult)
        }
    }
}

module.exports = SaleController 