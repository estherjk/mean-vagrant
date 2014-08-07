var request = require('supertest');

describe('Route Index', function () {
  var app = require('../server').app;
  
  it('should serve the index file', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8', done);
  });
});