module.exports = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "insta",
    entities: ["server/entities/**/*.ts"],
    migrations: ["server/migrations/**/*.ts"],
    logging: false,
    cli: {
        "entitiesDir": "server/entities",
        "migrationsDir": "server/migrations",
      },
    synchronize: true
}


    
