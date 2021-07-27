import { Router } from 'express';

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";
import { ensureAthenticated } from "../../../../../middlewares/ensureAthenticated";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();


router.post("/users", createUserController.handle);
router.get("/users/", ensureAthenticated,listUserController.handle);
router.post("/login", authenticateUserController.handle);

export default router;
