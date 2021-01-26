import { IDeal, IDealProvider } from "../IDealProvider";
import axios from 'axios'

export class PipedriveDealProvider implements IDealProvider {

  private base_url = "https://api.pipedrive.com/v1/deals"
  
  async getWonDeals(): Promise<IDeal[]> {
    const endpoint: string = `${this.base_url}?status=won&start=0&api_token=${process.env.API_KEY_PIPEDRIVE}`
    const response = await axios.get(endpoint)

    const deals = response.data.data.map(deal => {
      let ideal: IDeal = {
        id: deal.id,
        status: deal.status,
        title: deal.title,
        value: deal.value,
        won_time: deal.won_time.split(' ')[0],
        org_name: deal.org_name
      }
      return ideal
    })

    return deals
  }
}