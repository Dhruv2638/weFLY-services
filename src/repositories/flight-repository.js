const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const responce = await Flight.findAll({
      where: filter,
      order: sort,
    });
    return responce;
  }
}

module.exports = FlightRepository;
