import { CustomError } from './CustomError';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super('Not authorized!');
    Object.setPrototypeOf(this, NotAuthorizedError);
  }

  serialzeErrors() {
    return [{ message: 'Not authorized!' }];
  }
}
