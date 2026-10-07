const express = require('express') // Lembre-se de importar o express
const app = express()
const port = 3000

// 1. Rota de carros
app.get("/carros/:lanchas", (req, res) => {
    res.send(req.params)
})

// 2. Rota de motos
app.get("/motos", (req, res) => {
    res.send("ola pessoal")
})

// 3. Inicialização do servidor (sempre no final)
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})