const errorMessages = {
  401: 'Unauthorized error',
  404: 'Page not found',
  500: 'Internal server error',
};

class HttpErrorHelper {
  static init(app) {
    let error;
    let code;
    let message;

    app.use((err, req, res, next) => {
      if (!err) return next();

      error = true;
      code = 500;

      if (err.name === 'UnauthorizedError') {
        code = 401;
      }

      message = errorMessages[code];

      res.status(code).json({ error, message });
    });

    app.use((req, res) => {
      error = true;
      message = errorMessages['404'];

      res.status(404).json({ error, message });
    });
  }
}

export default HttpErrorHelper;
