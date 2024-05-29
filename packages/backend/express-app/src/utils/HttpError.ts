class HttpError extends Error {
  public statusCode: number;

  constructor(statusCode: number = 500, message: string = "") {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { HttpError };
