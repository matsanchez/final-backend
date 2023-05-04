import axios from "axios";
import config from "../../config.js";
import fs from "fs";

(async () => {
  try {
    let pathFile = "./src/http/http-res.json";
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
    console.log({ statusResponse: response.status });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
})();
