abstract class CustomError extends Error {
  public message: string;

  constructor(message: string) {
    super(message);
  }

  abstract StatusCode: number;
  abstract serialize(): { message: string };
}

export { CustomError };
