const express = require('express');

const { CityConroller } = require('../../controllers');

const router = express.Router();

router.post('/', CityConroller.createCity);

module.exports = router;


