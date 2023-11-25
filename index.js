import express from "express";
import conectDatabase from "./src/config/database.js";
import dotenv from "dotenv"

dotenv.config()

const app = express()
const porta = process.env.PORT || 3000

conectDatabase()
app.use(express.json())

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))