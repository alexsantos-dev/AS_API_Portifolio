import express from 'express';
import projetoController from '../controllers/projeto.controller.mjs';

const router = express.Router();

router.get('/', projetoController.buscarTodosProjetos)

router.get('/recentes', projetoController.projetoMaisRecente)

router.get('/relevantes', projetoController.projetoMaisRelevante)

router.get('/:projetoId', projetoController.buscarUmProjeto)

router.post('/', projetoController.criarProjeto)

router.delete('/:projetoId', projetoController.deletarProjeto)

router.patch('/:projectId', projetoController.atualizarProjeto)

router.patch('/like/:projetoId', projetoController.like);

router.patch('/compartilhar/:projetoId', projetoController.compartilhar);

export default router;
