import { Request, Response, Router } from "express";
const router = Router()

import { getWonDealsController } from './useCases/GetWonDeals'
import { insertOrderController } from './useCases/InsertOrder'

router.get('/deals', getWonDealsController.handle)
router.post('/orders', insertOrderController.handle)

export { router }