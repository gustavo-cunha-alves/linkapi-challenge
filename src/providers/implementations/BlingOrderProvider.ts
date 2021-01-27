import { IOrderProvider } from "../IOrderProvider";
import { Order } from '../../entities/Order'
import axios from 'axios';
const { toXML } = require('jstoxml');

export class BlingOrderProvider implements IOrderProvider {

  private base_url = `https://bling.com.br/Api/v2/`;

  async insertOrder(order: Order): Promise<void> {

    try {
      const endpoint = `${this.base_url}pedido/json/?apikey=${process.env.API_KEY_BLING}`
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
          data: order.dateFormatted
        }
      }
      const xml = toXML(payload);
      await axios.post(endpoint + '&xml=' + xml);
    } catch (error) {
      console.log(error)
    }

  }

  async getOrder(): Promise<Order[]> {
    try {
      const endpoint = `${this.base_url}pedidos/json/?apikey=${process.env.API_KEY_BLING}`
      const response = await axios.get(endpoint);

      if(response.data.retorno.erros)
        return []

      const orders: Array<Order> = response.data.retorno.pedidos.map((pedido) => {

        const order: Order = {
          client: {
            name: pedido.pedido.cliente.nome
          },
          date: pedido.pedido.data,
          item: {
            amount: pedido.pedido.itens[0].item.quantidade,
            description: pedido.pedido.itens[0].item.descricao,
            id: pedido.pedido.itens[0].item.codigo,
            unit_value: parseFloat(pedido.pedido.itens[0].item.valorunidade)
          }
        }

        return order
      })

      return orders
    } catch (error) {
      console.log(error)
    }
  }
}