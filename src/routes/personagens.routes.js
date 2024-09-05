import { Router } from "express";

const personagensRoutes = Router();

let personagens = [
    {
        id: 100,
        nome: "Brian O'Conner",
        vivo: false,
        studio: " Universal Studios "
    },
    {
        id: 100,
        nome: "Godzilla",
        vivo: true,
        studio: " TriStar Pictures "
    },
    {
        id: 100,
        nome: "Goku",
        vivo: true,
        studio: " Toei Animation "
    }
];

personagensRoutes.get("/personagens", (req, res) => {
    return res.status(200)
    .send( personagens ) 
});