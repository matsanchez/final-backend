import Cart from "../models/cart.model.js";
import Repository from "./Repository.service.js";

export default class CartService extends Repository {
  constructor(dao) {
    super(dao, Cart.model);
  }
}
