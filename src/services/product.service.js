import Product from "../models/product.model.js"
import Repository from "./Repository.service.js";

export default class ProductService extends Repository {
  constructor(dao) {
    super(dao, Product.model);
  }
}

