const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modalNumber: req.body.modalNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "not able to SuccessFully Created an Airplane";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)  
    } catch (error) {
        ErrorResponse.message = "not able to get list of all Airplanes!";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)   
    } catch (error) {
        ErrorResponse.message = "not able to get pertucluar Airplane";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

async function destroyAirplane(req, res) {
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)   
    } catch (error) {
        ErrorResponse.message = "not able to delete airplane for given ID!";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

async function updateAirplane(req, res) {
    try {
        const bodyReq = req.body;
        const bodyData = {}
        if(bodyReq.modelNumber){
            bodyData.modelNumber = bodyReq.modelNumber;
        }
        if(bodyReq.capacity){
            bodyData.capacity = bodyReq.capacity;
        }
        const airplane = await AirplaneService.updateAirplane(req.params.id, bodyData);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    } catch (error) {
        rrorResponse.message = "not able to update airplane for given ID!";
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}