import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class Message {
  static get model() {
    return "Message";
  }

  static get schema() {
    return {
      email: String,
      text: String,
      timestamp: String,
    };
  }
}
