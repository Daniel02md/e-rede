const development = {
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    port: process.env.DEV_PORT,
    host: process.env.DEV_HOST,
    dialect: 'postgres'
}
const test = {
    
}

const production = {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    port: process.env.PROD_PORT,
    host: process.env.PROD_HOST,
    dialect: 'postgres',
    dialectOptions: { 
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

module.exports = {  
    development: development,
    test: test,
    production: production
}

