import supertest from 'supertest';

import app from '../app';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// Apis tests below

// Test API of members
test('GET /api/v1/members/', async () => {
  const response = await request.get('/api/v1/members/').expect(200);
  expect(response.body.length).toEqual(3);
  expect(response.body[0]).toEqual({
    name: 'FreeYeti',
    age: 18,
    email: 'yeti@freeyeti.net',
  });
});
