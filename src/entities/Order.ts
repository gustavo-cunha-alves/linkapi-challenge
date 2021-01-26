import { IDeal } from "../providers/IDealProvider";

export class Order {
  public date: Date;
  public dateFormatted?: string;
  public client: {
    name: string;
  }
  public item: {
    id: number;
    description: string;
    amount: number;
    unit_value: number;
  }

  constructor(deal: IDeal) {
    const won_date = new Date(deal.won_time)
    this.date = deal.won_time;
    this.dateFormatted = `${won_date.getDate()+1}/${won_date.getMonth() < 9 ? '0'+(won_date.getMonth()+1) : won_date.getMonth()+1}/${won_date.getFullYear()}`
    this.client = { name: deal.org_name };
    this.item = {
      id: deal.id,
      description: deal.title,
      amount: 1,
      unit_value: deal.value,
    };
  }
}