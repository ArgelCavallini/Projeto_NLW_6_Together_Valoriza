import { Router } from 'express';

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.get("/users/", ensureAthenticated,listUserController.handle);

export default router;
