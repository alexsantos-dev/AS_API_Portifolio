import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true,
    },

    resumo: {
        type: String,
        required: true,
    },

    banner: {
        type: String,
        required: true,
    },

    dataDePostagem: {
        type: Date,
        default: Date.now,
    },

    tecnologiasUsadas: {
        type: [String],
        required: true,
    },

    likes: [
        {
            usuarioAnonimoId: {
                type: String,
                required: true,
            },
        },
    ],

    compartilhamentos: [
        {
            anonymousUserId: {
                type: String,
                required: true,
            },
        },
    ],
});

const ProjetoModel = mongoose.model("Projeto", projetoSchema)

export default ProjetoModel