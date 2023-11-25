import mongoose from "mongoose";

const projetoSchema = mongoose.Schema(
    {
        "titulo":
        {
            type: String,
            required: true,
        },

        "resumo":
        {
            type: String,
            required: true,
        },

        "banner":
        {
            type: String,
            required: true,
        },

        "dataDePostagem":
        {
            type: Date,
            default: Date.now(),
        },

        "likes":
        {
            type: Array,
            required: true,
        },

        "compartilhamentos":
        {
            type: Array,
            required: true,
        }
    }
)

const Projeto = mongoose.model("Projeto", projetoSchema)

export default Projeto