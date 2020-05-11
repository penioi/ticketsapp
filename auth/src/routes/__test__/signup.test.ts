import request from 'supertest';
import { app } from '../../app';
import { response } from 'express';

it('Returns 201 on successfull signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'secret',
    })
    .expect(201);
});

it('Returns 400 on wrong email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'secret',
    })
    .expect(400);
});

it('Returns 400 on wrong pass', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@sdf.com',
      password: '',
    })
    .expect(400);
});

it('Returns 400 on empty request', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: '',
    })
    .expect(400);
});

it('Dissallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'duplicate@test.com',
      password: 'asssf',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'duplicate@test.com',
      password: 'assssf',
    })
    .expect(400);
});

it('sets a coockie on successfull signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'secret',
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});
