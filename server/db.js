const {Pool} = require("pg")

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "DBNest.js",
    password: "asda",
    port: "5432",
});

module.exports = pool;