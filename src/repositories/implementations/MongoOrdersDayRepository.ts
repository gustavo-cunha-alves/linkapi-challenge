import { OrdersDay } from "../../entities/OrdersDay";
import OrdersDayModel from "../../models/OrdersDay";
import { IOrdersDayRepository } from "../IOrdersDayRepository";

export class MongoOrdersDayRepository implements IOrdersDayRepository {

  async save(ordersDay: OrdersDay): Promise<OrdersDay> {
    try {
      const { date, value }: any = await OrdersDayModel.create(ordersDay);
      const createdOrdersDay = new OrdersDay({ date: new Date(date), value });
      return createdOrdersDay
    } catch (error) {
      console.log(error);
    }
  }

  async update(ordersDay: OrdersDay): Promise<void> {
    try {
      await OrdersDayModel.updateOne({ date: ordersDay.date }, { value: ordersDay.value })
    } catch (error) {
      console.log(error);
    }
  }

  async find(): Promise<OrdersDay[]> {
    try {
      let ordersDayDatabase = await OrdersDayModel.find();

      const od: Array<OrdersDay> = ordersDayDatabase.map(ordersDayDatabase => {
        const ordersDays = { date: new Date(ordersDayDatabase.date), value: ordersDayDatabase.value };
        return ordersDays
      })

      return od
    } catch (error) {
      console.log(error)
    }
  }

  async findByDate(dateFilter: Date): Promise<OrdersDay> {
    try {
      let [result] = await OrdersDayModel.find({ date: dateFilter });

      if (!result)
        return result

      const od = new OrdersDay({ date: new Date(result.date), value: result.value })

      return od
    } catch (error) {
      console.log(error)
    }
  }
}