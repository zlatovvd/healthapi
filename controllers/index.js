const authController = require('./auth');
const productsController = require('./products');
const dailyController = require('./daily');

const test = () => {
    console.log("test pagegit ");
}

module.exports = { authController, productsController, dailyController };