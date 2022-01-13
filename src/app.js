/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const util = require('util');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const _get = require('lodash/get');

const pkg = require(path.resolve('package.json'));
const config = require('./config');
const accessLogger = require('./utils/access-logger');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();

// Global variables
global.APP_ENV = _get(config, 'env', 'development');
global.APP_NAME = _get(pkg, 'name', '');
global.APP_PORT = _get(config, 'app.port', 80);
global.APP_ROOT = path.resolve(__dirname, '../../');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(accessLogger());
app.use(routes.init());

module.exports = app;
