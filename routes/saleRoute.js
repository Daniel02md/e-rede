const { Router } = require("express");
const { SaleController } = require("../controllers");
const AuthenticationCotroller = require("../controllers/AuthenticationController");

const router = Router()
const saleController = new SaleController()

router.post(
    '/sale',
    AuthenticationCotroller.validateToken,
    (req, res) => saleController.order(req, res)
    
)

router.get(
    '/sale',
    AuthenticationCotroller.validateToken,
    (req, res) => saleController.getOrders(req, res)
)



module.exports = router