import { Order } from "../../entities/Order";
import { IOrderProvider } from "../../providers/IOrderProvider";
import { InsertOrderDTO } from "./InsertOrderDTO";

export class InsertOrderUseCase {

  constructor(
    private orderProvider: IOrderProvider
  ){}

  async execute(data: InsertOrderDTO[]) {
    data.map(async data => {
      const order = new Order(data);
      return await this.orderProvider.insertOrder(order);
    })
  }
}