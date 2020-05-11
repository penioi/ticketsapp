import request from 'supertest';
import { app } from '../../app';
import { response } from 'express';

it('responds with details of the current user', async () => {
  const cookie = await global.signin();
  const response = await request(app)
    .get('/api/users/currentUser')
    .set('Cookie', cookie)
    .send({})
    .expect(200);
  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null is not authenicated', async () => {
  const response = await request(app)
    .get('/api/users/currentUser')
    .send({})
    .expect(200);
  expect(response.body.currentUser).toBeUndefined();
});
