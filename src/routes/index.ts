import { Router } from "express";
import afiliadoRoutes from './afiliado.routes';

const router = Router();

router.use('/afiliados', afiliadoRoutes);

export default router;