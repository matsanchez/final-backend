import User from "../models/user.model.js";
import Repository from "./Repository.service.js";

export default class UserService extends Repository {
  constructor(dao) {
    super(dao, User.model);
  }
}
