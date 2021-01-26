import { Order } from "../../entities/Order";
import { IDeal } from "../../providers/IDealProvider";
import { IOrderProvider } from "../../providers/IOrderProvider";

export class InsertOrderUseCase {

  constructor(
    private orderProvider: IOrderProvider
  ){}

  async execute(data: IDeal[]) {
    data.map(async data => {
      const order = new Order(data);
      return await this.orderProvider.insertOrder(order);
    })
  }
}