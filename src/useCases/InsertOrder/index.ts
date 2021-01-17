import { BlingOrderProvider } from "../../providers/implementations/BlingOrderProvider"
import { InsertOrderController } from "./InsertOrderController";
import { InsertOrderUseCase } from "./InsertOrderUseCase";

const blingOrderProvider = new BlingOrderProvider();
const insertOrderUseCase = new InsertOrderUseCase(blingOrderProvider);
const insertOrderController = new InsertOrderController(insertOrderUseCase);

export { insertOrderController, insertOrderUseCase }