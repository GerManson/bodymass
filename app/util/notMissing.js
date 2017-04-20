const ApiError = require('./ApiError');

/**
 * Returns a Promise that rejects when the object doesn't contain
 * one of the attributes in the array
 * @param {object} object
 * @param {Array} attributeArray
 */
function notMissing (object, attributeArray) {
  if (!object) return Promise.reject(ApiError.AttributeMissing('body'));
  for (let i = 0; i < attributeArray.length; i++) {
    let deep = deepValue(object, attributeArray[i]);
    if (!deep) return Promise.reject(ApiError.AttributeMissing(attributeArray[i]));
  }
  return Promise.resolve();
}

var deepValue = function (obj, path) {
  const paths = path.split('.');
  paths.forEach(p => {
    obj = obj[p];
  });
  return obj;
};

module.exports = notMissing;
