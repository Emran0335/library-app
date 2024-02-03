export class UnableToSaveUserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class InvalidUserNameOrPasswordError extends Error {
  constructor(message: string) {
    super(message);
  }
}
