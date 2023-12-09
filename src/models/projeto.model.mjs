import mongoose from "mongoose";

const DataAtualFormatada = () => {
    const dataAtual = Date.now()
    return (dataAtual.toLocaleString('pt-BR'), 'dd-mm-aa')
}

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
        type: String,
        default: DataAtualFormatada,
    },

    tecnologiasUsadas: {
        type: [String],
        required: true,
    },

    repositorio: {
        type: String,
        required: true,
    },

    deploy: {
        type: String,
        required: true,
    },

    compartilhamentos: {
        type: Number,
        default: 0,
    },

    acessRepositorio: {
        type: Number,
        default: 0,
    },

    visualizacoes: {
        type: Number,
        default: 0,
    },



    relevancia: {
        type: Number,
        default: 0,
    }
});

const ProjetoModel = mongoose.model("Projeto", projetoSchema)

export default ProjetoModel