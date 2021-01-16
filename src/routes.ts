import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(201).send();
})

export { router }