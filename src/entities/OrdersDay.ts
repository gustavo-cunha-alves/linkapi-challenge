export class OrdersDay {
  public date: Date;
  public value: number;

  constructor(props: OrdersDay){

    const dateFormat = {
      year: props.date.getFullYear(),
      month: props.date.getMonth() < 9 ? '0'+(props.date.getMonth()+1) : props.date.getMonth()+1,
      date: props.date.getDate()
    }

    this.date = new Date(`${dateFormat.year}-${dateFormat.month}-${dateFormat.date}T00:00:00`);
    this.value = props.value;
  }
}