import { Router } from "express";
import { auth } from "../middlewares/middlewares.js";
import { logger } from "../middlewares/loggers.middleware.js";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get("/", logger, auth, productsController.getAll);

export default router;
