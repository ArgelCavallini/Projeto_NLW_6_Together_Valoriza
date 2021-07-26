import { Router } from 'express';

import { ListUserReceiveComplimentsController } from "../controllers/ListUserReceiveComplimentsController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";

const router = Router();

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.use(ensureAthenticated);

router.get("/users/compliments/list_receive", ensureAthenticated, listUserReceiveComplimentsController.handle);

export default router;
