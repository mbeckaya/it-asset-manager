import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "YOUR_PASSWORD",
      database: "YOUR_DATABASE",
    },
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "YOUR_PASSWORD",
      database: "YOUR_DATABASE",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
   client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "YOUR_PASSWORD",
      database: "YOUR_DATABASE",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
