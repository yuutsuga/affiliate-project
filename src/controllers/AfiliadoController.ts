import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const AfiliadoController = {
    async criar(req: Request, res: Response) {
        const { nome, email } = req.body;
        const afiliado = await prisma.afiliado.create({
            data: { nome, email }
        });
        return res.status(201).json(afiliado);
    },

    async listar(req: Request, res: Response) {
        const afiliados = await prisma.afiliado.findMany();
        return res.json(afiliados);
    }
};