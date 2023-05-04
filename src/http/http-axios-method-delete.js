import axios from "axios";
import config from "../../config.js";
import fs from "fs";

(async () => {
  try {
    let pathFile = "./src/http/http-res.json";
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
    if (response.status === 200) fs.promises.unlink(pathFile);
    console.log({ statusResponse: response.status });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
})();
