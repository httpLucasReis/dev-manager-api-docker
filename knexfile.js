require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
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
    connection: process.env.DB_URL,
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
