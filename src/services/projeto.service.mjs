import ProjetoModel from "../models/projeto.model.mjs"


class ProjetoService {
    async like(projetoId, usuarioAnonimoId) {
        const projeto = await ProjetoModel.findById(projetoId);

        const index = projeto.likes.findIndex(like => like.usuarioAnonimoId === usuarioAnonimoId);

        if (index === -1) {
            projeto.likes.push({ usuarioAnonimoId });
        } else {
            projeto.likes.splice(index, 1);
        }

        return projeto.save();
    }

    async compartilhar(projetoId, usuarioAnonimoId) {
        const projeto = await ProjetoModel.findById(projetoId);

        projeto.compartilhamentos.push({ usuarioAnonimoId });

        return projeto.save();
    }
}

const projetoService = new ProjetoService()
export default projetoService