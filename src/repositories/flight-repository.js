const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter) {
    const responce = await Flight.findAll({
      where: filter,
    });
    return responce;
  }
}

module.exports = FlightRepository;
