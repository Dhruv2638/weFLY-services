const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "not able to SuccessFully Created an Airport";
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "not able to get list of all Airports!";
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "not able to get pertucluar Airport!";
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function destroyAirport(req, res) {
  try {
    const responce = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = responce;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "not able to delete airport for given ID!";
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function updateAirport(req, res) {
  try {
    const bodyReq = req.body;
    const bodyData = {};
    if (bodyReq.name) {
      bodyData.name = bodyReq.name;
    }
    if (bodyReq.code) {
      bodyData.code = bodyReq.code;
    }
    if (bodyReq.address) {
      bodyData.address = bodyReq.address;
    }
    if (bodyReq.cityId) {
      bodyData.cityId = bodyReq.cityId;
    }
    const airport = await AirportService.updateAirport(req.params.id, bodyData);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    rrorResponse.message = "not able to update airport for given ID!";
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}
module.exports = {
  createAirport,
  destroyAirport,
  updateAirport,
  getAirport,
  getAirports,
};
