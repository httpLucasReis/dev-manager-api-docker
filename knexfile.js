require('dotenv').config();
const pg = require('pg')
pg.defaults.ssl = {
   rejectUnauthorized: false,
}

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}${process.env.MIGRATIONS}`
    }, 
    seeds: {
      directory: `${__dirname}${process.env.SEEDS}`
    }
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
          min: 2,
          max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    }, 
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp()
  `
};
