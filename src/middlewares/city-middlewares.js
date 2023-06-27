const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error')

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = "not able to SuccessFully Created an City";
        ErrorResponse.error = new AppError(['City name is not found on incoming request!']);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
} 

module.exports = {
    validateCreateRequest
}