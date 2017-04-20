const ApiError = require('../util/ApiError');

const calculate = (req, res, next) => {
  let data = req.body;
  if (!data.mass) return next(new ApiError(400, 'Ingresa tu peso en kilogramos'));
  if (!data.height) return next(new ApiError(400, 'Ingresa tu altura en metros'));

  let calculateBmi = new Promise((resolve, reject) => {
    let bmi = Math.round(data.mass / (data.height * data.height));
    let category = '';

    if (bmi >= 40) category = 'Obesidad mórbida';
    if (bmi < 40) category = 'Obesidad media';
    if (bmi < 35) category = 'Obesidad leve';
    if (bmi < 30) category = 'Preobeso';
    if (bmi < 25) category = 'Normal';
    if (bmi < 18.5) category = 'Delgadez leve';
    if (bmi < 17) category = 'Delgadez moderada';
    if (bmi < 16) category = 'Delgadez severa';

    resolve({
      bmi: bmi,
      category: category
    });
  });

  calculateBmi.then(bmi => res.json(bmi))
  .catch(next);
};

const bmiController = {
  calculate
};

module.exports = bmiController;
