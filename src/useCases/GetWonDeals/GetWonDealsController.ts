import { Request, Response } from "express";
import { GetWonDealsUseCase } from "./GetWonDealsUseCase";

export class GetWonDealsController {

  constructor(
    private GetWonDealsUseCase: GetWonDealsUseCase
  ) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {

      const deals = await this.GetWonDealsUseCase.execute();
      return res.status(200).json(deals);
      
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error'
      });
    }
  }
}