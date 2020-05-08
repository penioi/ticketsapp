import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'abcd';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  (await mongoose.connection.db.collections()).forEach((collection) =>
    collection.deleteMany({})
  );
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
