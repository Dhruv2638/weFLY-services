const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common/");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = new AppError([
      "Airport name is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = new AppError([
      "Airport code is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = new AppError([
      "Airport cityId is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
