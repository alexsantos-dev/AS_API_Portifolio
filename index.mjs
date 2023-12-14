import express from "express";
import conectDatabase from "./src/config/database.mjs";
import dotenv from "dotenv"
import ProjetoRouter from "./src/routes/projeto.routes.mjs";


dotenv.config()

const app = express()
const porta = process.env.PORT || 3000

conectDatabase()
app.use(express.json())
app.use('/', ProjetoRouter);


app.get('/', (req, res) => {
    // Envia o script JavaScript para abrir uma nova aba e acessar o endereço especificado
    res.send('<script>window.open("https://https://api-portifolio-ohio-br.onrender.com/recentes", "_blank");</script>');
})

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))