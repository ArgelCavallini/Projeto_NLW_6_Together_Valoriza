import { Router } from "express";

import usersRouter from '../../../../modules/user/infra/http/routes/user.routes';
//import loginRouter from '../../../../modules/user/infra/http/routes/user.routes';
import tagsRouter from '../../../../modules/tag/infra/http/routes/tag.routes';
import complimentsRouter from '../../../../modules/compliment/infra/http/routes/compliment.routes';

//router.post("/login", authenticateUserController.handle);
//import { CreateUserController } from "@modules/user/infra/http/routes/";///controllers/CreateUserController";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/tags', tagsRouter);
routes.use('/compliments', complimentsRouter);

export default routes;