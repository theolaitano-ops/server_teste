import {Pool} from "pg";

const banco = new Pool({
    port: 5432,
    host: "localhost",
    database: "serverbanco",
    user: "postgres",
    password: "senai",
});

export default banco;