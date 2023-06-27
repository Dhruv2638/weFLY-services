const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common/");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = new AppError([
      "flightNumber is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = new AppError([
      "airplaneId is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "departureAirportId is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "arrivalAirportId is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "arrivalTime is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "departureTime is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "price is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "not able to SuccessFully Created an Flight";
    ErrorResponse.error = new AppError([
      "totalSeats is not found on incoming request!",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
