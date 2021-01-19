import { OrdersDay } from "../entities/OrdersDay";

export interface IOrdersDayRepository {
  save(orderDay: OrdersDay): Promise<OrdersDay>
  update(orderDay: OrdersDay ): Promise<void>
  find(): Promise<OrdersDay[]>
  findByDate(date: Date): Promise<OrdersDay>
}