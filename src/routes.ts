import { Request, Response, Router } from "express";
const router = Router()

import { getOrdersDayController } from './useCases/GetOrdersDay'

router.get('/orders_day', getOrdersDayController.handle)

export { router }