import express from 'express';
import projetoController from '../controllers/projeto.controller.mjs';
import cors from "cors"

const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PATCH,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// const corsOptions2 = {
//     origin: 'http://192.168.100.232:5173/',
//     methods: 'GET,HEAD,PATCH,PUT,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// };

router.use(cors(corsOptions));

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
