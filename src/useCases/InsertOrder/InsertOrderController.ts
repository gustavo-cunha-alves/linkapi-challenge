import { Request, Response } from "express";
import { InsertOrderDTO } from "./InsertOrderDTO";
import { InsertOrderUseCase } from "./InsertOrderUseCase";

export class InsertOrderController {

  constructor(
    private insertOrderUseCase: InsertOrderUseCase
  ) { }

  handle = async (req: Request, res: Response) => {
    try {
      const deals: Array<InsertOrderDTO> = req.body

      if (!deals)
        return res.status(400).json({ message: 'bad request' })

      await this.insertOrderUseCase.execute(deals)
      res.status(201).json({ message: 'created' });
    } catch (error) {
      console.log(error);
      res.status(400).send();
    }
  }
}