const { Sequelize } = require("sequelize");
const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport } = require("../models");

const db = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const responce = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "Airplane_details",
        },
        {
          model: Airport,
          required: true,
          as: "departure_airport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departure_airport.code")
            ),
          },
        },
        {
          model: Airport,
          required: true,
          as: "arrival_airport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrival_airport.code")
            ),
          },
        },
      ],
    });
    return responce;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(
      `SELECT * FROM Flights WHERE Flights.id = ${flightId} FOR UPDATE;`
    );
    const flight = await Flight.findByPk(flightId);
    if (parseInt(dec)) {
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }
    await flight.save();
    return flight;
  }
}

module.exports = FlightRepository;
