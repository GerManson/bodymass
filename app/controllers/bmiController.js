const ApiError = require('../util/ApiError');

const calculate = (req, res, next) => {
  let data = req.body;
  if (!data.mass) return next(new ApiError(400, 'Ingresa tu peso en kilogramos'));
  if (!data.height) return next(new ApiError(400, 'Ingresa tu altura en metros'));

  let calculateBmi = new Promise((resolve, reject) => {
    let bmi = {
      bmi: Math.round(data.mass / (data.height * data.height)),
      category: 'Obeso'
    };
    resolve(bmi);
  });

  calculateBmi.then(bmi => res.json(bmi))
  .catch(next);
};

const serviceController = {
  calculate
};

module.exports = serviceController;
