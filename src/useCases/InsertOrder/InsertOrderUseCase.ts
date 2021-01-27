import { Order } from "../../entities/Order";
import { IDeal } from "../../providers/IDealProvider";
import { IOrderProvider } from "../../providers/IOrderProvider";

export class InsertOrderUseCase {

  constructor(
    private orderProvider: IOrderProvider
  ){}

  async execute(deals: IDeal[]): Promise<void> {
    for(const deal of deals){
      const order = new Order(deal);
      await this.orderProvider.insertOrder(order);
    }
  }
}