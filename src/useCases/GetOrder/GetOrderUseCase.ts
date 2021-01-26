import { Order } from "../../entities/Order";
import { IOrderProvider } from "../../providers/IOrderProvider";

export class GetOrderUseCase {

  constructor(
    private orderProvider: IOrderProvider
  ){}

  async execute(): Promise<Order[]> {
    const result: Array<Order> = await this.orderProvider.getOrder();
    return result
  }

}