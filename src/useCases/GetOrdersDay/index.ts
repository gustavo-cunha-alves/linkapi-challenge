import { MongoOrdersDayRepository } from '../../repositories/implementations/MongoOrdersDayRepository'
import { GetOrdersDayUseCase } from './GetOrdersDayUseCase'
import { GetOrdersDayController } from './GetOrdersDayController'

const mongoOrdersDayRepository = new MongoOrdersDayRepository();
const getOrdersDayUseCase = new GetOrdersDayUseCase(mongoOrdersDayRepository);
const getOrdersDayController = new GetOrdersDayController(getOrdersDayUseCase);

export { getOrdersDayController, getOrdersDayUseCase }