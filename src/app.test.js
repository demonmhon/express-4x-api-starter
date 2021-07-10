const request = require('supertest');
const app = require('./app');

describe('Common endpoints', () => {
  it('health check', async () => {
    const res = await request(app).get('/health').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('api');
  });

  it('non-existent endpoint', async () => {
    const res = await request(app).get('/incorrect-endpoint').send();
    expect(res.statusCode).toEqual(404);
  });
});
