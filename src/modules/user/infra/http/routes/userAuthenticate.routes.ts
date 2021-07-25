import { Router } from 'express';

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const router = Router();

const authenticateUserController = new AuthenticateUserController();

router.post("/login", authenticateUserController.handle);

export default router;
