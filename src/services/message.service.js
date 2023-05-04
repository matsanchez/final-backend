import Message from "../models/messages.model.js";
import Repository from "./Repository.service.js";

export default class MessageService extends Repository {
  constructor(dao) {
    super(dao, Message.model);
  }
}
