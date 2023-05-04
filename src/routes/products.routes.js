import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
import productController from "../controllers/products.controller.js";

const router = Router();

router
  .get("/", logger, productController.getAll)
  .get("/create", logger, productController.renderCreate)
  .get("/:id", logger, productController.getById)
  .get("/category/:id", logger, productController.getByCategory)
  .post("/", logger, productController.create)
  .put("/:id", logger, productController.updateById)
  .delete("/:id", logger, productController.deleteById);

export default router;
