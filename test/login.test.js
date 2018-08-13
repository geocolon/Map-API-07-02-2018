'use strict';

const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { TEST_DATABASE_URL, JWT_SECRET } = require('../config');

const User = require('../models/user');

const seedUsers = require('../db/seed/users');

const expect = chai.expect;
chai.use(chaiHttp);


describe('WebSocket API - Login', function () {

  before(function () {
    return mongoose.connect(TEST_DATABASE_URL)
      .then(() => mongoose.connection.db.dropDatabase());
  });
  
  beforeEach(function () {
    return User.insertMany(seedUsers);
  });
  
  afterEach(function () {
    return mongoose.connection.db.dropDatabase();
  });
  
  after(function () {
    return mongoose.disconnect();
  });
  
  describe('WebSocket /api/login', function () {
    it('Should return a valid auth token', function () {
      const { _id: id, username, firstname, lastname, password  } = seedUsers[0];
  
      return chai.request(app)
        .post('/api/login')
        .send({ username, password: 'password' })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.authToken).to.be.a('string');
  
          const payload = jwt.verify(res.body.authToken, JWT_SECRET);
  
          expect(payload.user).to.not.have.property('password');
          expect(payload.user).to.deep.equal({ id, username, firstname, lastname, password });
        });
    });
  
  });
});