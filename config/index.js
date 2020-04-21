require('dotenv').config();
module.exports = {
    development: {
      dialect: process.env.DIALECTDB,
      database: process.env.DATABASEDB,
      username: process.env.USERNAMEDB,
      password: process.env.PASSWORDDB,
      host: process.env.DEV_HOST,
    },
    production: {
      dialect: "mariadb",
      database: process.env.DATABASEDB,
      username: process.env.USERNAMEDB,
      password: process.env.PASSWORDDB,
      host: 'localhost',
      dialectOptions: {
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
      }
    }
}