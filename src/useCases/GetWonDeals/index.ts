import { PipedriveDealProvider } from "../../providers/implementations/PipedriveDealProvider"
import { GetWonDealsUseCase } from "./GetWonDealsUseCase";

const pipedriveDeal = new PipedriveDealProvider();
const getWonDealsUseCase = new GetWonDealsUseCase(pipedriveDeal);

export { getWonDealsUseCase }