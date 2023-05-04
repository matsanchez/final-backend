import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
import cartController from "../controllers/cart.controller.js";
import { auth } from "../middlewares/middlewares.js";

const router = Router();

router
  .get("/", logger, auth, cartController.getById)
  .post("/", logger, auth, cartController.create)
  .post("/:id_cart/products/:id_prod", logger, auth, cartController.addProductCart)
  .post("/:id_cart/products/:id_prod/delete", logger, auth, cartController.deleteProductCart)
  .post("/:id_cart/products/:id_prod/increment", logger, auth, cartController.incrementProductCart)
  .post("/:id_cart/products/:id_prod/decrement", logger, auth, cartController.decrementProductCart);

export default router;
