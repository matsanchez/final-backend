import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class Order {
  static get model() {
    return "Orders";
  }

  static get schema() {
    return {
      name: String,
      email: String,
      products: [],
      total: Number,
    };
  }
}
