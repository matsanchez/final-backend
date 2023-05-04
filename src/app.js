import config from "../config.js";
import cluster from "cluster";
import core from "os";
import loggerApp from "./utils/logger.utils.js";
import msgFlash from "connect-flash";
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import compression from "compression";
import productsRouter from "./routes/products.routes.js";
import cartRouter from "./routes/cart.routes.js";
import userRouter from "./routes/user.routes.js";
import indexRouter from "./routes/index.routes.js";
import profileRouter from "./routes/profile.routes.js";
import chatRouter from "./routes/chat.routes.js";
import orderRouter from "./routes/order.routes.js";
import { initializePassport } from "./strategies/passport.strategy.js";
import { mensajesSchema } from "./models/mensajes.model.js";

if (config.yargs.port === null) {
  config.yargs.port = process.env.PORT;
}

if (config.yargs.server.toLowerCase() === "cluster" && cluster.isPrimary) {
  loggerApp.info(`>>>>> 🚀 Server Up! Port: ${config.yargs.port} 💻 Server modo: ${config.yargs.server.toLowerCase()}`);
  for (let i = 0; i < core.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  if (config.yargs.server != "cluster") {
    loggerApp.info(
      `>>>>> 🚀 Server Up! Port: ${config.yargs.port} 💻 Server modo: ${config.yargs.server.toLowerCase()}`
    );
  }
  const app = express();
  const server = app.listen(config.yargs.port, () => {
    loggerApp.info(`>>>>> 👼 Proceso N°: ${process.pid}`);
  });
  app.use(compression());
  app.use(express.static("src/public"));
  app.use(express.json());
  app.use(msgFlash());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      store: MongoStore.create({ mongoUrl: config.session.url }),
      key: config.session.key,
      secret: config.session.secret,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 600000000,
      },
    })
  );
  initializePassport();
  app.use(passport.initialize());
  app.use(passport.session());
  app.engine(
    "hbs",
    handlebars.engine({
      extname: ".hbs",
    })
  );
  app.set("views", "./src/public/views");
  app.set("view engine", "hbs");
  app.use("/api/user/auth", userRouter);
  app.use("/api/user/profile", profileRouter);
  app.use("/api/user/chat", chatRouter);
  app.use("/api/products", productsRouter);
  app.use("/api/cart", cartRouter);
  app.use("/", indexRouter);
  app.use("/api/order", orderRouter);
  app.use((req, res) => {
    loggerApp.warn(`ruta ${req.baseUrl} ${req.url} metodo ${req.method} no implementada`);
    res
      .status(404)
      .render("pages/404", { error: `ruta ${req.baseUrl}${req.url} metodo ${req.method} no implementada` });
  });

  const io = new Server(server);

  io.on("connection", async (socket) => {
    loggerApp.info("🔛 Usuario Conectado");

    const loadContent = async () => {
      const logChat = await mensajesSchema.find();
      socket.emit("server:loadMessages", logChat);
    };
    loadContent();

    socket.on("client:newMessage", async (obj) => {
      let message = await mensajesSchema.create(obj);
      io.emit("server:newMessage", message);
    });
  });
}
