import ProjetoModel from "../models/projeto.model.mjs"


class ProjetoService {

    async visualizacoes(projetoId) {
        const projeto = await ProjetoModel.findById(projetoId);

        projeto.visualizacoes++;
        projeto.relevancia++
        return projeto.save();
    }

    async compartilhar(projetoId) {
        const projeto = await ProjetoModel.findById(projetoId);

        projeto.compartilhamentos++;
        projeto.relevancia++
        return projeto.save();
    }
}

const projetoService = new ProjetoService()
export default projetoService