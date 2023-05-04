import axios from "axios";
import config from "../../config.js";
import fs from "fs";

(async () => {
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

    if (response.status === 201) fs.writeFileSync("./src/http/http-res.json", JSON.stringify(response.data, null, 2));
    console.log({ statusResponse: response.status });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
})();
