import { BlingOrderProvider } from '../../providers/implementations/BlingOrderProvider'
import { GetOrderUseCase } from './GetOrderUseCase'

const blingOrderProvider = new BlingOrderProvider();
const getOrderUseCase = new GetOrderUseCase(blingOrderProvider);

export { getOrderUseCase }