const { error } = require("console")
const pool = require("./db")

pool.query("SELECT * FROM question", (error, results) => {
    if (error) {
        console.error("Error whith PostgreSQL responce");
    } else {
        console.error("Response result - ", results.rows)
    }
})