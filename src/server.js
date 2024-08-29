import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
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
    }
]

const personagens = [
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
]

app.get("/", (req, res) => {
    return res.status(200)
    .send({ message: "Hello, word!"}) 
})
app.get("/personagens", (req, res) => {
    return res.status(200)
    .send( personagens ) 
})
app.get("/emocoes", (req, res) => {
    return res.status(200)
    .send( emocoes ) 
})
app.get("/2tds2", (req, res) => {
    return res.status(200)
    .send({ message: "Hello, word!"}) 
})

app.listen(serverPort, () => {
    console.log(`🃏 Server started on http://localhost:${serverPort}`);
})