import { Router } from "express"

const emocoesRoutes = Router()

let emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "verde"
    }, 
    {
        id: 2,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    },
];

// rota para buscar todas as emoções
emocoesRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( emocoes ) 
});

// Rota para criar uma nova emoção
emocoesRoutes.post("/", (req, res) => {
    const{ nome, cor } = req.body;
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(201)
    .send( novaEmocao ) 
});

emocoesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const emocao  = emocoes.find((emotion)=> emotion.id == id)
    if(!emocao ){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    return res.status(200).send({
        message: "Emoção encontrada", 
        emocao,
    });
});

emocoesRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const emocao = emocoes.find((emotion) => emotion.id == id);
    if(!emocao){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    const { nome, cor } = req.body;
    emocao.nome = nome;
    emocao.cor = cor;
    return res.status(200).send({
        message: "Emoção atualizada!",
        emocao,
    });
});
export default emocoesRoutes;