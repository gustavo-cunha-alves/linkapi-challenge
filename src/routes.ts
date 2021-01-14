import { Request, Response, Router } from "express";

const router = Router()

router.post('/', (req: Request, res: Response) => {
  return res.status(201).send();
})

export { router }