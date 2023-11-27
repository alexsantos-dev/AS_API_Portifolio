import express from 'express';
import projetoController from '../controllers/projeto.controller.mjs';
import projetoMiddlewares from '../middlewares/projeto.middleware.mjs';

const router = express.Router();

router.get('/', projetoController.buscarTodosProjetos)

router.get('/:projetoId', projetoController.buscarUmProjeto)

// router.get('/', projetoController.projetosMaisRelevantes)

// router.get('/recentes', projetoController.projetosMaisRecentes)

router.post('/', projetoController.criarProjeto)

router.delete('/:projetoId', projetoController.deletarProjeto)

router.patch('/:projectId', projetoController.atualizarProjeto)

router.patch('/like/:projetoId', projetoMiddlewares.relevancia, projetoController.like);

router.patch('/compartilhar/:projetoId', projetoMiddlewares.relevancia, projetoController.compartilhar);

export default router;
