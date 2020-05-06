import { CustomError } from './CustomError';

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to a Database';
  statusCode = 500;
  constructor() {
    super('Error conneting to database');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialzeErrors() {
    return [{ message: this.reason }];
  }
}
