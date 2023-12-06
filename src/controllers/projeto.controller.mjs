import ProjetoModel from "../models/projeto.model.mjs";
import projetoService from "../services/projeto.service.mjs";

class ProjetoController {

    async like(req, res) {
        const { projetoId } = req.params;
        const { usuarioAnonimoId } = req.body;

        try {
            const projeto = await projetoService.like(projetoId, usuarioAnonimoId);
            res.json(projeto);
        } catch (error) {
            console.error('Erro ao dar like:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async compartilhar(req, res) {
        const { projetoId } = req.params;

        try {
            const projeto = await projetoService.compartilhar(projetoId);
            res.json(projeto);
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async criarProjeto(req, res) {
        const { titulo, resumo, banner, tecnologiasUsadas, repositorio, deploy } = req.body;

        try {
            const novoProjeto = await ProjetoModel.create({
                titulo,
                resumo,
                banner,
                tecnologiasUsadas,
                repositorio,
                deploy,
                dataDePostagem: new Date()
            });

            const projetoSalvo = await novoProjeto.save();

            res.status(201).json(projetoSalvo);
        }

        catch (error) {
            console.error('Erro ao criar projeto:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async atualizarProjeto(req, res) {

        try {
            const { projetoId } = req.params
            const { titulo, resumo, banner, tecnologiasUsadas } = req.body

            if (!titulo && !resumo && !banner && !tecnologiasUsadas) {
                res.status(400).send({ message: "Envie pelo menos um campo para efetuar a atualização." })
            }

            if (typeof (projetoId) !== String) {
                res.status(400).send({ message: "Por favor, envie somentes campos do tipo String" })
            }

            const projetoAtualizado = await ProjetoModel.findByIdAndUpdate(projetoId, { titulo, resumo, banner, tecnologiasUsadas })


            if (projetoAtualizado) {
                res.json({ mensagem: 'Projeto atualizado com sucesso.' });
            } else {
                res.status(404).json({ mensagem: 'Projeto não encontrado.' });
            }
        }

        catch (error) {
            console.error('Erro ao atualizar projeto:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async deletarProjeto(req, res) {
        const { projetoId } = req.params;

        try {
            const projetoRemovido = await ProjetoModel.findByIdAndDelete(projetoId);

            if (projetoRemovido) {
                res.json({ mensagem: 'Projeto removido com sucesso.' });
            } else {
                res.status(404).json({ mensagem: 'Projeto não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao deletar projeto:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async buscarTodosProjetos(req, res) {
        try {
            const projetos = await ProjetoModel.find();
            res.json(projetos);
        } catch (error) {
            console.error('Erro ao buscar todos os projetos:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async buscarUmProjeto(req, res) {
        const { projetoId } = req.params;

        try {
            const projeto = await ProjetoModel.findById(projetoId);

            if (projeto) {
                res.json(projeto);
            } else {
                res.status(404).json({ mensagem: 'Projeto não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao buscar um projeto:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async projetoMaisRecente(req, res) {
        try {
            const projetos = await ProjetoModel.find().sort({ dataDePostagem: -1 });
            res.json(projetos);
        } catch (error) {
            console.error('Erro ao buscar projetos mais recentes:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async projetoMaisRelevante(req, res) {
        try {
            const projetos = await ProjetoModel.find().sort({ relevancia: -1 });
            res.json(projetos)
        }

        catch (error) {
            console.error('Erro ao buscar projetos mais relevantes:', error);
            res.status(500).json({ mensagem: 'Erro interno do servidor.' });

        }
    }
}
const projetoController = new ProjetoController();
export default projetoController;