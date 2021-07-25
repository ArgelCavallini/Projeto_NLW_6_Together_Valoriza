import { Router } from 'express';

import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";

const router = Router();

const createComplimentController = new CreateComplimentController();

router.use(ensureAthenticated);

router.post("/compliment", ensureAthenticated, createComplimentController.handle);

export default router;
