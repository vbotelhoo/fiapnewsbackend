import databaseConnection from "../utils/database.js";
import newsModel from "../models/newsModel.js";


export const listaNoticias = async () => {
    await databaseConnection();
    const noticias = await newsModel.find()
    return noticias;
};

export const procurarNoticias = async (titulo) => {
    await databaseConnection();
    const noticia = await newsModel.find({ tituloNoticia: titulo });
    return noticia;
};

export const procurarNoticiasPorParametros = async (parametros) => {
    try {
        await databaseConnection();
        const noticias = await newsModel.find(parametros);
        return noticias;
    } catch (error) {
        throw new Error('Erro ao procurar notícias: ' + error.message);
    }
};

export const createNoticia = async (noticia) => {
    await databaseConnection();
    const createNoticia = await newsModel.create(noticia);
    return createNoticia;
};