const express = require('express');

const { CityConroller } = require('../../controllers');

const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/', CityMiddlewares.validateCreateRequest, CityConroller.createCity);

module.exports = router;


