const configs = {
  app: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8888,
    jwtSecret: process.env.JWT_SECRET || 'secretOfSecretSanta',
  },

  db: {
    config: process.env.MONGO_CONFIG || 'mongodb://localhost/secretsanta',
  },

  redis: {
    pkg: process.env.REDIS_PKG || 'ioredis',
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASSWORD || null,
    port: process.env.REDIS_PORT || 6379,
    database: process.env.REDIS_DB || 0,
  },

  mailgun: {
    username: 'api',
    key: process.env.MAILGUN_KEY,
  },
};

export default configs;
