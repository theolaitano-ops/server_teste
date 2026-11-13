import express from "express";
import banco from "./db.js";
const app = express();

app.use(express.json());

app.get('/alunos', async (req, res)=>{
    const resultado = await banco.query('select * from alunos');
    res.json(resultado.rows);
});
app.listen(3000);
console.log("rodando")

async function funcao1(){
    await console.log("rodou")
};

funcao1()