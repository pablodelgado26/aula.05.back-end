import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js";
import personagensRoutes from "./personagens.routes.js";

const routes = Router();

routes.use("/emocoes", emocoesRoutes);
routes.use("/personagens", personagensRoutes);

export default routes;