import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
import serverController from "../controllers/server.controller.js";

const router = Router();

router.get("/config-server", logger, serverController.getConfig);

export default router;
