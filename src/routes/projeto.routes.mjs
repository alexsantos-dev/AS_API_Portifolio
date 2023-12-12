import express from 'express';
import projetoController from '../controllers/projeto.controller.mjs';
import cors from "cors"

const router = express.Router();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://192.168.100.232:5173', 'https://alexsantos-fullstack.vercel.app', 'http://18.231.155.174:3000'],
    methods: 'GET,HEAD,PATCH,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

router.use(cors(corsOptions));

router.get('/', projetoController.buscarTodosProjetos)

router.get('/recentes', projetoController.projetoMaisRecente)

router.get('/relevantes', projetoController.projetoMaisRelevante)

router.get('/:projetoId', projetoController.buscarUmProjeto)

router.post('/', projetoController.criarProjeto)

router.delete('/:projetoId', projetoController.deletarProjeto)

router.patch('/:projetoId', projetoController.atualizarProjeto)

router.patch('/compartilhar/:projetoId', projetoController.compartilhar);

router.patch('/acessRepositorio/:projetoId', projetoController.acessRepositorio);

router.patch('/visualizacoes/:projetoId', projetoController.visualizacoes);

export default router;
