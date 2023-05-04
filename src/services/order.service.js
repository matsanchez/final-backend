import Order from "../models/order.model.js";
import Repository from "./Repository.service.js";

export default class OrderService extends Repository {
  constructor(dao) {
    super(dao, Order.model);
  }
}
