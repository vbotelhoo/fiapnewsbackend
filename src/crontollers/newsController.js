import { Router } from "express";
import { listaNoticias, createNoticia, procurarNoticias, procurarNoticiasPorParametros} from "../services/newsService.js";

const router = Router();

router.get('/', async (req, res) =>{
    const newsList = await listaNoticias();
    res.send(newsList);
})

router.get('/buscarPorTitulo', async (req, res) => {
    try {
        const titulo = req.query.titulo;
        const noticia = await procurarNoticias(titulo);
        res.send(noticia);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/buscarPorParametros', async (req, res) => {
    try {
        const parametros = req.query;
        const noticias = await procurarNoticiasPorParametros(parametros);
        res.send(noticias);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', async (req, res) =>{
    try {
        const noticia = await createNoticia(req.body)
        res.status(201).send(noticia);
    } catch (error) {
        res.status(400).send(error)
    }
})

export default router;