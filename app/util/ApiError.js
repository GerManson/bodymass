module.exports = class ApiError {
  constructor (status, message, code) {
    this.status = status;
    this.message = message;
    this.code = code;
  }
  static AttributeMissing (attributeName) {
    return new ApiError(400, `${attributeName} is required`);
  }
  static Unauthorized (message = 'Unauthorized') {
    return new ApiError(401, message);
  }
  static Forbidden (message = 'Permission denied') {
    return new ApiError(403, message);
  }
  static NotFound (message = 'Not found') {
    return new ApiError(404, message);
  }
};
