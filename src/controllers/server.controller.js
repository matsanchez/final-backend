import info from "../process/info.process.js";

const getConfig = (req, res) => {
  return res.render("pages/info", { info });
};

export default { getConfig };
