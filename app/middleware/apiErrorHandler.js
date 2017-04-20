module.exports = function (err, req, res, next) {
  if (err) {
    if (err.message.includes('Missing credentials')) err.status = 400;
    return res.status(err.status || 500).json({
      message: err.message,
      code: err.code,
      ok: false
    });
  }
  next();
};
