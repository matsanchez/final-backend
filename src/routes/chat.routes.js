import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
import { auth } from "../middlewares/middlewares.js";
import { mensajesSchema } from "../models/mensajes.model.js";

const router = Router();

router
  .get("/", logger, auth, async (req, res) => {
    const chats = await mensajesSchema.find();
    res.render("pages/chat", { chat: chats, userLogin: req.user.username, idCart: req.user.cart_id });
  })
  .get("/:id", logger, auth, async (req, res) => {
    const chats = await mensajesSchema.find({ email: req.params.id }).lean();
    res.render("pages/my-chats", { chats: chats });
  });

export default router;
