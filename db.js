import {Pool} from "pg";

const banco = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "senai",
    database: "serverbanco"
});

export default banco;