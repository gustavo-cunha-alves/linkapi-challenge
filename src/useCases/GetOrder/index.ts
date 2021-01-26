import { BlingOrderProvider } from '../../providers/implementations/BlingOrderProvider'
import { GetOrderUseCase } from './GetOrderUseCase'
import { GetOrderController } from './GetOrderController'

const blingOrderProvider = new BlingOrderProvider();
const getOrderUseCase = new GetOrderUseCase(blingOrderProvider);
const getOrderController = new GetOrderController(getOrderUseCase);

export { getOrderController, getOrderUseCase }