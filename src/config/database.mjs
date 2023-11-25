import mongoose from "mongoose";

mongoose.set("debug", true)


const conectDatabase = () => {
    console.log("Esperando conexão com o banco de dados...")

    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB Atlas conectado!"))
        .catch((error) => console.log(error))
}

export default conectDatabase
