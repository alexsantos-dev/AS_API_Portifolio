import express from "express";
import conectDatabase from "./src/config/database.mjs";
import dotenv from "dotenv"
import ProjetoRouter from "./src/routes/projeto.routes.mjs";
import axios from "axios";

dotenv.config()

const app = express()
const porta = process.env.PORT || 3000

conectDatabase()
app.use(express.json())
app.use('/', ProjetoRouter);


app.get('/', (req, res) => {
    res.send('<script>window.open("https://api-portifolio-ohio-br.onrender.com/recentes", "_self");</script>');
})

async function main() {
    const accessUrl = async () => {
        try {
            await axios.get('https://api-portifolio-ohio-br.onrender.com/');
        } catch (error) {
            console.error(error.message);
            setInterval(accessUrl, 5000);
        }
    };

    setInterval(accessUrl, 900000);


    await new Promise(() => { });
}

main();

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))