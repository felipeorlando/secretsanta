const errorMessages = {
  401: 'Unauthorized error',
  404: 'Page not found',
  500: 'Internal server error',
};

class RouterErrorHandler extends Error {
  constructor(code = 500, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.message = `Router Error: ${this.errorMessage}`;
    this.error = true;

    return this;
  }

  get errorMessage() {
    return errorMessages[this.code];
  }
}

export default RouterErrorHandler;
