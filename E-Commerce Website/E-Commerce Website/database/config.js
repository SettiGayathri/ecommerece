module.exports = {
  development: {
    username: 'your_username',
    password: 'your_password',
    database: 'ecommerce_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'your_username',
    password: 'your_password',
    database: 'ecommerce_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'your_username',
    password: 'your_password',
    database: 'ecommerce_prod',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};