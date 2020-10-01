import dotenv from 'dotenv';

dotenv.config();

const {
    DB_SERVER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_USER,
} = process.env;

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: DB_SERVER,
            database: DB_DATABASE,
            user: DB_USER,
            password: DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: '__knex_migrations',
        },
    },
};