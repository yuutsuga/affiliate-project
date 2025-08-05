import { Router } from "express";
import { LinkController } from "../controllers/LinkController";
import { RedirectController } from "../controllers/RedirectController";
import { autenticar } from "../middlewares/auth";

const router = Router();

// Rota protegida (afiliado gera link)
router.post('/links', autenticar, LinkController.criar);

// Rota pública (redireciona e rastreia)
router.get('/r/:codigo', RedirectController.redirecionar);

export default router;