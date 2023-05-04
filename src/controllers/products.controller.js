import { productService } from "../services/index.service.js";
import loggerApp from "../utils/logger.utils.js";

const getAll = async (req, res) => {
  const products = await productService.get();
  res.render("pages/home", { userLogin: req.user.username, products, idCart: req.user.cart_id });
};

const getById = async (req, res) => {
  let { id } = req.params;
  try {
    let result = await productService.getById({ _id: id });
    console.log(result);
    if (result === null) return res.status(400).send({ message: "Debe indicar un id / No existe producto con ese ID" });
    res.status(200).send(result);
  } catch (error) {
    loggerApp.error(error.message);
    res
      .status(400)
      .send({ status: 400, message: "Debe indicar un id / No existe producto con ese ID", error: error.message });
  }
};

const getByCategory = async (req, res) => {
  let { id } = req.params;
  let products = await productService.get({ category: id });
  if (products.length === 0) {
    return res.status(200).send({ message: "No hay productos con esa categoria", status: 200 });
  }
  res.render("pages/home", { userLogin: req.user.username, products, idCart: req.user.cart_id });
};

const renderCreate = async (req, res) => {
  res.render("pages/create-product");
};

const create = async (req, res) => {
  let { name, price, description, category, thumbnail } = req.body;
  try {
    if ((!name, !price, !thumbnail)) return res.status(400).send({ message: "Todos los campos son requeridos" });
    let product = await productService.save({ name, price, description, category, thumbnail });
    res.status(201);
    res.render("pages/create-product", { product: product });
  } catch (error) {
    res.status(400).send(error);
    loggerApp.error(error.message);
  }
};

const deleteById = async (req, res) => {
  let { id } = req.params;
  let result = await productService.delete({ _id: id });
  if (result.deletedCount === 0)
    return res.status(204).send({ message: "Debe indicar un id / No existe producto con ese ID" });
  res.status(200).send(result);
};

const deleteAll = (req, res) => {};

const updateById = async (req, res) => {
  let { id } = req.params;
  let { body } = req;
  let product = await productService.update({ _id: id }, body);
  if (product.matchedCount === 0)
    return res.status(204).send({ message: "Debe indicar un id / No existe producto con ese ID" });
  res.status(200).send(product);
};

export default { getAll, getById, getByCategory, create, deleteById, deleteAll, updateById, renderCreate };
