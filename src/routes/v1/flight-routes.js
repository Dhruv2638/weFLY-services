const express = require("express");

const { FlightController } = require("../../controllers");

const { FlightMidddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  FlightMidddlewares.validateCreateRequest,
  FlightController.createFlight
);

router.get("/", FlightController.getAllFlights);

module.exports = router;
