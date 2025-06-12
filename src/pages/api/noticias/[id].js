import { noticias } from "./noticias"
export default function handler(req, res) {
  console.log(req.query.id)

  const encontrado = noticias.find((noticia) =>
    noticia.idnoticia.toString() === req.query.id);
  
  res.status(200).json(encontrado)
}