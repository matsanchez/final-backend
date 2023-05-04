import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
import orderController from "../controllers/order.controller.js";
import { auth } from "../middlewares/middlewares.js";

const router = Router();

router
  .get("/", logger, auth, orderController.getById)
  .get("/:id", logger, auth, orderController.getById)
  .post("/", logger, auth, orderController.create);

export default router;
