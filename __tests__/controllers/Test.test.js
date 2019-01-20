const request = require('supertest');
const expect = require('chai').expect;

const app = require('../../src/app');

it('GET /v1', async () => {
  const res = await request(app).get('/v1');
  expect(res.statusCode).to.be.equal(200);
});
