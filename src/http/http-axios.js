// FALTA ACOMODAR ///

/* import axios from "axios";
import config from "../../config.js";
import fs from "fs";
let pathFile = "./src/http/http-res.json";

const getAllProducts = async () => {
  try {
    const response = await axios.request({
      baseURL: `http://localhost:${config.yargs.port}/`,
      url: "api/products",
      method: "GET",
    });

    return console.log(response.data), console.log({ statusResponse: response.status });
  } catch (error) {
    console.log(error.message);
  }
};

const createProduct = async () => {
  try {
    const data = {
      name: "Desafio 19",
      price: 10,
      thumbnail: "url-imagen",
    };
    const response = await axios.request({
      baseURL: `http://localhost:${config.yargs.port}/`,
      url: "api/products",
      proxy: undefined,
      method: "POST",
      data: data,
    });

    if (response.status === 201)
      await fs.writeFileSync("./src/http/http-res.json", JSON.stringify(response.data, null, 2));

    return console.log(response.data), console.log({ statusResponse: response.status });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async () => {
  try {
    let productUpdate = [];
    if (fs.existsSync(pathFile)) {
      let data = await fs.promises.readFile(pathFile, "utf-8");
      productUpdate.push(JSON.parse(data));
    }
    let update = {
      name: "Desafio 19-Modificado",
      price: 1010,
      thumbnail: "url-imagen-modificada",
    };
    const response = await axios.request({
      baseURL: `http://localhost:${config.yargs.port}/`,
      url: `api/products/${productUpdate[0]._id}`,
      method: "PUT",
      data: update,
    });

    return console.log(response.data), console.log({ statusResponse: response.status });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteProduct = async () => {
  try {
    let id;
    if (fs.existsSync(pathFile)) {
      let data = await fs.promises.readFile(pathFile, "utf-8");
      let product = JSON.parse(data);
      id = product._id;
    }
    if (id === undefined) {
      return console.log("Debe indicar id del producto");
    }
    const response = await axios.request({
      baseURL: `http://localhost:${config.yargs.port}/`,
      url: `api/products/${id}`,
      method: "DELETE",
    });
    if (response.status === 200) await fs.promises.unlink(pathFile);

    return console.log(response.data), console.log({ statusResponse: response.status });
  } catch (error) {
    console.log(error.message);
  }
};

Promise.all([getAllProducts(), createProduct(), updateProduct(), deleteProduct()]).then(function (result) {
  const modelo1 = result[0];
  const modelo2 = result[1];
  const modelo3 = result[2];
  const modelo4 = result[3];
}); */
