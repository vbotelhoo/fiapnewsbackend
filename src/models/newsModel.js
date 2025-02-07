import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    tituloNoticia: { type: String, require: true },
    conteudoNoticia: {type: String, require: true},
    autorNoticia: {type: String, require: true},
    categoriaNoticia: {type: String, require: true},
    date: { type: Date, default: Date.now }
});

export default mongoose.models.Noticia || mongoose.model('Noticia', NewsSchema);