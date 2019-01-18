const express = require('express');
const api = express();

const test = require('./test.routes');

api.use('/', test);

module.exports = api;
