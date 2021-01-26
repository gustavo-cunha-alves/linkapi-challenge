export class OrdersDay {
  public date: string;
  public value: number;

  constructor(props: OrdersDay){
    this.date = props.date;
    this.value = props.value;
  }
}