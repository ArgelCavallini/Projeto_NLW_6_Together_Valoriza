import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAthenticated } from "./middlewares/ensureAthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/tags", ensureAthenticated, ensureAdmin, createTagController.handle);
router.post("/compliment", ensureAthenticated, createComplimentController.handle);

router.get("/users/compliments/list_sender", ensureAthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/list_receive", ensureAthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags/", ensureAthenticated,listTagController.handle);
router.get("/users/", ensureAthenticated,listUserController.handle);

export { router};