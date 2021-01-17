import { IDealProvider } from "../../providers/IDealProvider";

export class GetWonDealsUseCase {

  constructor(
    private dealProvider: IDealProvider
  ){}

  async execute() {
    return await this.dealProvider.getWonDeals()
  }
}