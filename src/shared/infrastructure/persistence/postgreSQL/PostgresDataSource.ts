import { evalENVBoolean } from './../../../utils';
import { PostgreSQLConfig } from './PostgreSQLConfig';
import { DataSource } from "typeorm";
import 'dotenv/config'

const dbConfig: PostgreSQLConfig = {
    name: process.env.NODE_ENV || "dev",
    host: process.env.DB_HOST || "localhost",
    port: +(process.env.BD_PORT || 5432),
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "postgres",
    synchronize: process.env.DB_SYNC ? evalENVBoolean(process.env.DB_SYNC) : true,
    logging: process.env.DB_LOGGING ? evalENVBoolean(process.env.DB_LOGGING) : false,
    schema: process.env.DB_SCHEMA || "public"
}

export const PSDataSource = new DataSource({
    type: "postgres",
    name: dbConfig.name,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: dbConfig.synchronize,
    logging: dbConfig.logging,
    schema: dbConfig.schema,
    entities: [
        "src/context/**/infrastructure/*.Entity.*"
    ],
    subscribers: [],
    migrations: [],
}) 