import { OrdersDay } from "../../entities/OrdersDay";
import { IOrdersDayRepository } from "../../repositories/IOrdersDayRepository";
import { getWonDealsUseCase } from '../GetWonDeals'
import { insertOrderUseCase } from '../InsertOrder'
import { getOrderUseCase } from '../GetOrder'
import { createOrdersDayUseCase } from '../CreateOrdersDay'
import { Order } from "../../entities/Order";
import { IDeal } from "../../providers/IDealProvider";

export class GetOrdersDayUseCase {

  constructor(
    private ordersDayRepository: IOrdersDayRepository
  ) {
  }

  async execute() {

    const wonDeals = await getWonDealsUseCase.execute();
    await insertOrderUseCase.execute(wonDeals);
    const orders = await getOrderUseCase.execute();
    const sumOrdersDay = this.sumOrdersDayValue(orders);
    for(const sumDay of sumOrdersDay){
      await createOrdersDayUseCase.execute(sumDay);
    }
    const ordersDay: Array<OrdersDay> = await this.ordersDayRepository.find();
    
    return ordersDay;
  }

  sumOrdersDayValue(orders: Order[]): OrdersDay[] {
    const sumDays: any = new Object();

    orders.map((order: Order) => {

      const deal: IDeal = {
        id: order.item.id,
        org_name: order.client.name,
        title: order.item.description,
        value: order.item.unit_value,
        won_time: order.date
      }

      const orderDeal = new Order(deal);

      if (sumDays[orderDeal.dateFormatted]) {
        sumDays[orderDeal.dateFormatted].value += order.item.unit_value
      } else {
        sumDays[orderDeal.dateFormatted] = new Object();
        sumDays[orderDeal.dateFormatted].value = order.item.unit_value;
      }
    })

    const sumOrdersDay: OrdersDay[] = Object.keys(sumDays).map(key => {
      sumDays[key].date = key
      return sumDays[key]
    })

    return sumOrdersDay
  }

}