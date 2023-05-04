import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class User {
  static get model() {
    return "Users";
  }

  static get schema() {
    return {
      name: String,
      address: String,
      age: String,
      phone: String,
      file: String,
      username: String,
      password: String,
      cart_id: String,
    };
  }
}
