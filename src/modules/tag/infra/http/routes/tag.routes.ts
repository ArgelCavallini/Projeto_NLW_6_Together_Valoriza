import { Router } from 'express';

import { CreateTagController } from "../controllers/CreateTagController";
import { ListTagController } from "../controllers/ListTagController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";
import { ensureAdmin } from "../../../../../middlewares/ensureAdmin";

const router = Router();

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

router.use(ensureAthenticated);

router.post("/tags", ensureAthenticated, ensureAdmin, createTagController.handle);
router.get("/tags/", ensureAthenticated,listTagController.handle);

export default router;
