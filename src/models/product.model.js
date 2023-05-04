import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class Product {
  static get model() {
    return "Products";
  }

  static get schema() {
    return {
      name: String,
      price: Number,
      thumbnail: String,
      description: String,
      category: String,
    };
  }
}
