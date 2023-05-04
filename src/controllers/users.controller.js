const getUser = (req, res) => {
  const { name, age, address, phone, file, username, createdAt } = req.user;
  const user = {
    name: name,
    address: address,
    age: age,
    phone: phone,
    email: username,
    file: file,
    create: createdAt,
  };
  res.render("pages/profile", { profile: user });
};
const getById = (req, res) => {};
const create = (req, res) => {};
const deleteById = (req, res) => {};
const deleteAll = (req, res) => {};
const updateById = (req, res) => {};
const renderRegister = (req, res) => {
  return res.render("pages/register");
};
const renderLogin = (req, res) => {
  return res.render("pages/login");
};

export default {
  getUser,
  getById,
  create,
  deleteById,
  deleteAll,
  updateById,
  renderLogin,
  renderRegister,
};
