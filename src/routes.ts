import { Request, Response, Router } from "express";
const router = Router()

import { getWonDealsController } from './useCases/GetWonDeals'

router.get('/deals', getWonDealsController.handle)

export { router }