export default class AuthorizationStrategyError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }

  static cacheNotProvided() {
    return new AuthorizationStrategyError('User cache not provided.', 400);
  }

}
