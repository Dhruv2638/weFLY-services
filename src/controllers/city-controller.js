const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');

const { ErrorResponse, SuccessResponse } = require('../utils/common');


// POST Request -> req-body -> {name: "London"}
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "not able to SuccessFully Created an City!";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

module.exports = {
    createCity
}