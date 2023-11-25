import projetoService from "../services/projeto.service.mjs";

class ProjetoController {
    async darLike(req, res) {
        const { projetoId } = req.params;
        const { usuarioAnonimoId } = req.body;

        try {
            const projeto = await projetoService.darLike(projetoId, usuarioAnonimoId);
            res.json(projeto);
        } catch (error) {
            console.error('Erro ao dar like:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async compartilhar(req, res) {
        const { projetoId } = req.params;
        const { usuarioAnonimoId } = req.body;

        try {
            const projeto = await projetoService.compartilhar(projetoId, usuarioAnonimoId);
            res.json(projeto);
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }
}

const projetoController = new ProjetoController();

export default projetoController;