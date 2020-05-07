import { CustomError } from './CustomError';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError);
  }

  serialzeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
