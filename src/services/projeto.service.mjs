import ProjetoModel from "../models/projeto.model.mjs"


class ProjetoService {

    async like(projetoId, usuarioAnonimoId) {
        console.log('Operação de Like Iniciada');
        console.log('ID do Projeto:', projetoId);
        const projeto = await ProjetoModel.findById(projetoId);
        console.log('Projeto encontrado:', projeto);
        const likeAtivo = projeto.likes.some(like => like.usuarioAnonimoId === usuarioAnonimoId);

        if (likeAtivo) {
            projeto.likes = projeto.likes.filter(like => like.usuarioAnonimoId !== usuarioAnonimoId);
            projeto.relevancia--

        } else {
            projeto.likes.push({ usuarioAnonimoId })
            projeto.relevancia++
        }
        console.log(projeto.likes.length)
        return projeto.save();
        console.log('Operação de Like Concluída');
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