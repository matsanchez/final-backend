import ModelsMongoDAO from "../daos/modelsDAO.model.js";
import UserService from "./user.service.js";
import ProductService from "./product.service.js";
import CartService from "./cart.service.js";
import OrderService from "./order.service.js";
import MessageService from "./message.service.js";
import config from "../../config.js";

let dao;
switch (config.app.persistence) {
  case "MONGO":
    dao = new ModelsMongoDAO(config.mongo);
    break;
  default:
    break;
}

export const userService = new UserService(dao);
export const productService = new ProductService(dao);
export const cartService = new CartService(dao);
export const orderService = new OrderService(dao);
export const messageService = new MessageService(dao);
