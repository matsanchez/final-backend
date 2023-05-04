import { cartService } from "../services/index.service.js";
import { productService } from "../services/index.service.js";
import loggerApp from "../utils/logger.utils.js";

const getById = async (req, res) => {
  let products = await cartService.getById({ _id: req.user.cart_id });
  res.render("pages/cart", { products: { ...products }, idCart: req.user.cart_id });
};
const create = async (req, res) => {};

const addProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    const product = await productService.getById({ _id: id_prod });
    await cartService.saveProductInCart(id_cart, product);
    return res.redirect("/api/cart");
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    await cartService.deleteProductInCart({ _id: id_cart }, id_prod);
    return res.redirect("/api/cart");
  } catch (error) {
    loggerApp.error(error);
  }
};
const incrementProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    const product = await productService.getById({ _id: id_prod });
    await cartService.incrementProductCart(id_cart, product);
    return res.redirect("/api/cart");
  } catch (error) {
    loggerApp.error(error);
  }
};
const decrementProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    const product = await productService.getById({ _id: id_prod });
    await cartService.decrementProductCart(id_cart, product);
    return res.redirect("/api/cart");
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteAllProdToCart = async (req, res) => {
  try {
    await cartService.deleteAllProdToCart(req.user.cart_id);
    res.send("Todo borrado");
  } catch (error) {
    loggerApp.error(error);
  }
};

const updateById = (req, res) => {};

export default {
  getById,
  create,
  deleteAllProdToCart,
  updateById,
  addProductCart,
  deleteProductCart,
  incrementProductCart,
  decrementProductCart,
};
