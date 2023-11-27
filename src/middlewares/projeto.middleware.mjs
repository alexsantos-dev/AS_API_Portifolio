import ProjetoModel from "../models/projeto.model.mjs";
import projetoService from "../services/projeto.service.mjs";

class ProjetoMiddlewares {
    async relevancia(req, res, next) {
        try {
            const projeto = await ProjetoModel.findById(req.params.projetoId)

            projeto.relevancia += projeto.likes.length + projeto.compartilhamentos.length
            await projeto.save()
        }
        catch {
            console.log("Erro ao efetuar relevancia")
            res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
        next()
    }

}
const projetoMiddlewares = new ProjetoMiddlewares()
export default projetoMiddlewares