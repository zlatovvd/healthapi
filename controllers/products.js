const { Product, Intake } = require("../model");
const { controllerWrapper, createIntake } = require("../helpers");

const getByName = async (req, res) => {
  const query = req.params.product;
  const products = await Product.find({ "title.ua": { $regex: query } });

  return res.json(products);
};

const getIntake = async (req, res) => {
  const { typeblood, height, age, cweight, dweight } = req.query;

  const intake = createIntake(height, age, cweight, dweight);

  queryName = `groupBloodNotAllowed.${typeblood}`;

  const products = await Product.find({ [queryName]: true }).distinct(
    "categories"
  );

  res.json({ products, intake });
};

const saveIntake = async (req, res) => {
  const { typeblood, height, age, cweight, dweight } = req.body;

  const intake = createIntake(height, age, cweight, dweight);

  queryName = `groupBloodNotAllowed.${typeblood}`;

  const notproducts = await Product.find({ [queryName]: true }).distinct(
    "categories"
  );

  const { _id: owner } = req.user;
  const result = await Intake.create({
    ...req.body,
    intake,
    notproducts,
    owner,
  });
  res.status(201).json(result);
};

module.exports = {
  getByName: controllerWrapper(getByName),
  getIntake: controllerWrapper(getIntake),
  saveIntake: controllerWrapper(saveIntake),
};
