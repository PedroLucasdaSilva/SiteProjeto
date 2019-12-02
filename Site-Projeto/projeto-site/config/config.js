module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'root',
    password: 'bandtec',
    database: "site",
    host: '0.0.0.0',
    dialect: 'mysql',
  }
};
 
