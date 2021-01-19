import { MongoOrdersDayRepository } from '../../repositories/implementations/MongoOrdersDayRepository'
import { CreateOrdersDayUseCase } from './CreateOrdersDayUseCase'

const mongoOrdersDayRepository = new MongoOrdersDayRepository();
const createOrdersDayUseCase = new CreateOrdersDayUseCase(mongoOrdersDayRepository);

export { createOrdersDayUseCase }