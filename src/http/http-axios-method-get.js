import axios from "axios";
import config from "../../config.js";

(async () => {
  try {
    const response = await axios.request({
      baseURL: `http://localhost:${config.yargs.port}/`,
      url: "api/products",
      method: "GET",
    });

    console.log({ statusResponse: response.status });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
})();
