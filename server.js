import express from "express";
import banco from "./db";
const app = express();

app.use(express.json());

app.get('/alunos', async (req, res)=>{
    const alunos = await banco.query('select * from alunos') 
    res.json(alunos);
});
app.listen(3000);






async function funcao1(){
    await console.log("rodou")
};

funcao1()