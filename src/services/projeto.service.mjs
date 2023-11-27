import ProjetoModel from "../models/projeto.model.mjs"


class ProjetoService {

    async like(projetoId, usuarioAnonimoId) {
        const projeto = await ProjetoModel.findById(projetoId);
        const likeAtivo = projeto.likes.some(like => like.usuarioAnonimoId === usuarioAnonimoId);

        if (likeAtivo) {
            projeto.likes = projeto.likes.filter(like => like.usuarioAnonimoId !== like.usuarioAnonimoId);
            projeto.relevancia--

        } else {
            projeto.likes.push({ usuarioAnonimoId })
            projeto.relevancia++
        }
        console.log(projeto.likes.length)
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