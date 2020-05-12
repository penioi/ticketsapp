import { CustomError } from './custom-error';

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
