import { Router } from "express";

const personagensRoutes = Router();

let personagens = [
    {
        id: 1,
        nome: "Brian O'Conner",
        vivo: false,
        studio: " Universal Studios "
    },
    {
        id: 2,
        nome: "Godzilla",
        vivo: true,
        studio: " TriStar Pictures "
    },
    {
        id: 3,
        nome: "Goku",
        vivo: true,
        studio: " Toei Animation "
    }
];

personagensRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( personagens ) 
});

// Criando novo personagem
personagensRoutes.post("/", (req, res) => {
    const{ nome, studio, vivo } = req.body;
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo
    }
    personagens.push(novoPersonagem)
    return res.status(201)
    .send( novoPersonagem ) 
});

personagensRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const personagem =  personagens.find((person) => person.id == id);
    if(!personagem){
        return res.status(404).send({
            message: "Personagem não encontrado!",
        });
    }
    personagens = personagens.filter((person) => person.id != id);
    return res.status(200).send({
        message: "Personagem deletado!",
        personagem,
    });
});

export default personagensRoutes;