import { Request, Response } from "express";
import { GetOrdersDayUseCase } from "./GetOrdersDayUseCase";


export class GetOrdersDayController {

  constructor(
    private getOrdersDayUseCase: GetOrdersDayUseCase
  ) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const ordersDay = await this.getOrdersDayUseCase.execute();
      return res.status(200).json({ body: ordersDay })
    } catch (error) {
      return res.status(500).json({ message: 'internal error' })
    }
  }
}