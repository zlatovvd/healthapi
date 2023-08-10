const authController = require('./auth');
const productsController = require('./products');
const dailyController = require('./daily');

const test = () => {
    console.log("h-page");
}

module.exports = { authController, productsController, dailyController };