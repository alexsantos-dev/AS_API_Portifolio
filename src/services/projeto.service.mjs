import ProjetoModel from "../models/projeto.model.mjs"


class ProjetoService {

    async like(projetoId, usuarioAnonimoId) {
        console.log('Operação de Like Iniciada');
        console.log('ID do Projeto:', projetoId);

        try {
            const projeto = await ProjetoModel.findById(projetoId);
            console.log('Projeto encontrado:', projeto);

            const usuarioCurtiu = projeto.likes.some(
                (like) => like.usuarioAnonimoId === usuarioAnonimoId
            );

            if (usuarioCurtiu) {
                projeto.likes = projeto.likes.filter(
                    (like) => like.usuarioAnonimoId !== usuarioAnonimoId
                );
                projeto.relevancia--;
            } else {
                projeto.likes.push({ usuarioAnonimoId });
                projeto.relevancia++;
            }

            console.log(projeto.likes.length);

            const projetoAtualizado = await projeto.save();
            console.log('Operação de Like Concluída');

            return {
                projeto: projetoAtualizado,
                usuarioCurtiu,
            };
        } catch (error) {
            console.error('Erro ao dar like:', error);
            throw error;
        }
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