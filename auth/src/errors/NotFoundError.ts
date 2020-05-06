import { CustomError } from './CustomError';

export class NotFoundError extends CustomError {
  statusCode = 500;

  constructor() {
    super('Object not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialzeErrors() {
    return [{ message: 'Not Found!' }];
  }
}
