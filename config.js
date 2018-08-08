'use strict';
require('dotenv').config();

module.exports = {
  DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/socket-io',
  TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL || 'mongodb://localhost/socket-io',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'   
};
