const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common/');
const AppError = require('../utils/errors/app-error')

function validateCreateRequest(req, res, next) {
    if(!req.body.modalNumber) {
        ErrorResponse.message = "not able to SuccessFully Created an Airplane";
        ErrorResponse.error = new AppError(['Airplane Modal name is not found on incoming request!']);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
} 

module.exports = {
    validateCreateRequest
}