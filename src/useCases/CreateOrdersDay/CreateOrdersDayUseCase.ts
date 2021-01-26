import { OrdersDay } from "../../entities/OrdersDay";
import { IOrdersDayRepository } from "../../repositories/IOrdersDayRepository";
import { CreateOrdersDayDTO } from "./CreateOrdersDayDTO";

export class CreateOrdersDayUseCase {

  constructor(
    private ordersDayRepository: IOrdersDayRepository
  ) { }

  async execute(data: CreateOrdersDayDTO) {
    const ordersDay = new OrdersDay({ date: data.date, value: data.value });
    const ordersDayAlreadyExists = await this.ordersDayRepository.findByDate(ordersDay.date);

    if (!ordersDayAlreadyExists)
      await this.ordersDayRepository.save(ordersDay);

    await this.ordersDayRepository.update(ordersDay);
  }
}