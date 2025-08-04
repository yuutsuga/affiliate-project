import { Router } from "express";
import { AfiliadoController } from "../controllers/AfiliadoController";
import { AuthController } from "../controllers/AuthController";
import { autenticar } from "../middlewares/auth";

const router = Router();

// ROTAS PÚBLICAS
router.post('/', AfiliadoController.criar);
router.post('/login', AuthController.login);

// ROTAS PROTEGIDAS
router.get('/', autenticar, AfiliadoController.listar);

export default router;