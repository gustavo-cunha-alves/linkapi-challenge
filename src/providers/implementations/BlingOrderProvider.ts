import { IOrderProvider } from "../IOrderProvider";
import { Order } from '../../entities/Order'
import axios from 'axios';
const { toXML } = require('jstoxml');

export class BlingOrderProvider implements IOrderProvider {

  private base_url = "https://bling.com.br/Api/v2/";

  async insertOrder(order: Order): Promise<void> {

    const endpoint = `${this.base_url}pedido/json/?apikey=${process.env.API_KEY_BLING}`;
    const payload = {
      pedido: {
        cliente: {
          nome: order.client.name
        },
        item: {
          codigo: order.item.id,
          descricao: order.item.description,
          qtde: order.item.amount,
          vlr_unit: order.item.unit_value
        },
        data: order.date
      }
    }
    const xml = toXML(payload);
    const response = await axios.post(endpoint + '&xml=' + xml);

    if (response.status !== 200 || response.data.retorno.erros)
      throw new Error('error inserting order');

  }
}