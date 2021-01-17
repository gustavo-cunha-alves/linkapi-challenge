import { Order } from "../entities/Order";

export interface IOrderProvider {
  insertOrder(order: Order): Promise<void>;
}