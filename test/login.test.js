'use strict';

const {app, runServer, closeServer} = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

// const { TEST_DATABASE_URL, JWT_SECRET } = require('../config');

// const User = require('../models/user');

// const request = require('request');

const expect = chai.expect;
chai.use(chaiHttp);


describe('WebSocket API - Login', function () {
//   before(function() {
//     return runServer();
//   });

//   after(function() {
//     return closeServer();
//   });
  
//   describe('WebSocket /api/users', function () {
    

      
//     it('should list users on GET', function() {
//       return chai.request(app)
//         .get('/api/users')
//         .then(function(res) {
//           console.log('Is this hitting?: ',res);
//           expect(res).to.have.status(200);
//           expect(res).to.be.json;
//           //   expect(res.body).to.be.a('array');
//           //   expect(res.body.length).to.be.above(0);
//           //   res.body.forEach(function(item) {
//           //     expect(item).to.be.a('object');
//           //     expect(item).to.have.all.keys(
//           //       'id', 'firstName', 'lastName');
//           //   });
//         });
//     });

//   });
});