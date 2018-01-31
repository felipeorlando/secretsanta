const configs = {
  app: {
    host: 'localhost',
    port: 8888,
    jwtSecret: 'secretOfSecretSanta',
  },

  db: {
    name: 'secretSanta',
    username: 'root',
    password: 'root',
    host: 'localhost',
  },

  redis: {
    pkg: 'ioredis',
    host: '127.0.0.1',
    password: null,
    port: 6379,
    database: 0,
  },

  mailgun: {
    username: 'api',
    key: 'key-5f2d55ebbd5c877154be4df39be0e4ed',
  },
};

export default configs;
