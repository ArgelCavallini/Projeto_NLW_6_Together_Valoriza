import { Router } from 'express';

import { ListUserSendComplimentsController } from "../controllers/ListUserSendComplimentsController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";

const router = Router();

const listUserSendComplimentsController = new ListUserSendComplimentsController();

router.use(ensureAthenticated);

router.get("/users/compliments/list_sender", ensureAthenticated, listUserSendComplimentsController.handle);

export default router;
