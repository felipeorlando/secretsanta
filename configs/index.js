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
    key: 'key-631206f8f40de90f784d37a8dadb953a',
  },
};

export default configs;
