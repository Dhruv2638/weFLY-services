const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common')

function validateCreateRequest(req, res, next) {
    if(!req.body.modalNumber) {
        ErrorResponse.message = "not able to SuccessFully Created an Airplane";
        ErrorResponse.error = {explnation: "create request doesn't have proper input as per requirnment please check for modalNumber!"};
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
} 

module.exports = {
    validateCreateRequest
}