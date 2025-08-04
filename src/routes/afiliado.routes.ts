import { Router } from "express";
import { AfiliadoController } from "../controllers/AfiliadoController";

const router = Router();

router.post('/', AfiliadoController.criar);
router.get('/', AfiliadoController.listar);

export default router;