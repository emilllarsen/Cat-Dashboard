export class BusinessLogicError extends Error {
  constructor(msg, statusCode = 400) {
    super(msg);
    this.statusCode = statusCode;
    this.name = "BusinessLogicError";
  };
};
