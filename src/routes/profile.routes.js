import { Router } from "express";
import { auth } from "../middlewares/middlewares.js";
import { logger } from "../middlewares/loggers.middleware.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", logger, auth, usersController.getUser);

export default router;
