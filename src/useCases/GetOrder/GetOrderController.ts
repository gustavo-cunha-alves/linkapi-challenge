import { Request, Response } from "express";
import { GetOrderUseCase } from "./GetOrderUseCase";

export class GetOrderController {

  constructor(
    private getOrderUseCase: GetOrderUseCase
  ) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {

      const deals = await this.getOrderUseCase.execute();
      return res.status(200).json(deals);
      
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error'
      });
    }
  }
}