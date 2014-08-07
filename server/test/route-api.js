var expect = require('chai').expect
  , request = require('supertest');

describe('REST API', function () {
  var app = require('../server').app;
  var id;

  it('should POST /api/users', function (done) {
    request(app)
      .post('/api/users')
      .send({
        firstName: 'John',
        lastName: 'Doe'
      })
      .end(function (err, res) {
        if(err) return done(err);
        id = res.body.user._id;
        expect(res.body.success).to.equal(true);
        done();
      });
  });
  
  it('should GET /api/users', function (done) {
    request(app)
      .get('/api/users')
      .end(function (err, res) {
        if(err) return done(err);
        expect(res.body).to.be.an.instanceof(Array);
        expect('Content-Type', 'application/json; charset=utf-8');
        done();
      });
  });

  it('should GET /api/users/:id', function (done) {
    request(app)
      .get('/api/users/' + id)
      .end(function (err, res) {
        if(err) return done(err);
        expect(res.body._id).to.equal(id);
        expect('Content-Type', 'application/json; charset=utf-8');
        done();
      });
  });

  it('should PUT /api/users/:id', function (done) {
    request(app)
      .put('/api/users/' + id)
      .send({
        firstName: 'John',
        lastName: 'Doe',
        city: 'Silicon Valley'
      })
      .end(function (err, res) {
        if(err) return done(err);
        expect(res.body.success).to.equal(true);
        done();
      });
  });

  it('should DELETE /api/users/:id', function (done) {
    request(app)
      .delete('/api/users/' + id)
      .end(function (err, res) {
        if(err) return done(err);
        expect(res.body.success).to.equal(true);
        done();
      });
  });
});