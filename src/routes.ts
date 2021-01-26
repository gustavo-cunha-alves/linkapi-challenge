import { Request, Response, Router } from "express";
const router = Router()

import { getWonDealsController } from './useCases/GetWonDeals'
import { insertOrderController } from './useCases/InsertOrder'
import { getOrderController } from './useCases/GetOrder'
import { getOrdersDayController } from './useCases/GetOrdersDay'

router.get('/deals', getWonDealsController.handle)
router.post('/orders', insertOrderController.handle)
router.get('/orders', getOrderController.handle)
router.get('/orders_day', getOrdersDayController.handle)

export { router }