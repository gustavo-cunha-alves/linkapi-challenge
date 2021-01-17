import { IDeal } from "../providers/IDealProvider";

export class Order {
  date: Date;
  client: {
    name: string;
  }
  item: {
    id: number;
    description: string;
    amount: number;
    unit_value: number;
  }

  constructor(deal: IDeal) {
    this.date = deal.won_time;
    this.client = { name: deal.org_name };
    this.item = {
      id: deal.id,
      description: deal.title,
      amount: 1,
      unit_value: deal.value,
    };
  }
}