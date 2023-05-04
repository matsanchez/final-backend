import mongoose from "mongoose";

let Schema = mongoose.Schema;

export default class Cart {
  static get model() {
    return "Carts";
  }

  static get schema() {
    return {
      email: String,
      name: String,
      products: Array,
    };
  }
}
