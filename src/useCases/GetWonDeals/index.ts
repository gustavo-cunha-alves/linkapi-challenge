import { PipedriveDealProvider } from "../../providers/implementations/PipedriveDealProvider"
import { GetWonDealsController } from "./GetWonDealsController";
import { GetWonDealsUseCase } from "./GetWonDealsUseCase";

const pipedriveDeal = new PipedriveDealProvider();
const getWonDealsUseCase = new GetWonDealsUseCase(pipedriveDeal);
const getWonDealsController = new GetWonDealsController(getWonDealsUseCase);

export { getWonDealsController, getWonDealsUseCase }