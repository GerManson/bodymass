// const ApiError = require('../util/ApiError');
const notMissing = require('../util/notMissing');

const calculate = (req, res, next) => {
  let sanitizedData = Object.assign({}, req.body, {
    owner: req.user.id
  });
  notMissing(sanitizedData, [
    'mass', 'height'
  ]).then(_ => {
    let bmi = {
      bmi: 1337,
      category: 'Obeso'
    };
    return bmi;
  }).then(bmi => res.json(bmi))
  .catch(next);
};

const serviceController = {
  calculate
};

module.exports = serviceController;
