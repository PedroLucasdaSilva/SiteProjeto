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
    username: 'Pedro',
    password: 'Pedro2010@',
    database: "SiteProjeto",
    host: '0.0.0.0',
    dialect: 'mysql',
  }
};
 
