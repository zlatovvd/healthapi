const express = require('express');
const { getByName, getIntake, saveIntake } = require('../controllers/products');
const authenticate = require('../middlewares/authenticate');

const productsRouter = express.Router();

productsRouter.get('/search/:product', getByName);

productsRouter.get('/intake', getIntake);

productsRouter.post('/intake', authenticate, saveIntake);

module.exports = productsRouter;