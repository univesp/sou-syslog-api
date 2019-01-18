const express = require('express');
const api = express();

const ApiV1 = require('./v1');

api.use('/v1', ApiV1);

module.exports = api;
