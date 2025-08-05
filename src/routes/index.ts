import { Router } from "express";
import afiliadoRoutes from './afiliado.routes';
import linkRoutes from './link.routes';

const router = Router();

router.use('/afiliados', afiliadoRoutes);
router.use('/links', linkRoutes); // rota raiz para /r/:codigo

export default router;