import { Request, Response } from "express";
import { prisma } from "../config/prisma";

import bcrypt from 'bcryptjs';

export const AfiliadoController = {
    async criar(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        const jaExiste = await prisma.afiliado.findUnique({ where: { email } });
        if (jaExiste) return res.status(400).json({ error: `Email já cadastrado` });

        const hash = await bcrypt.hash(senha, 10);

        const afiliado = await prisma.afiliado.create({
            data: { nome, email, senha: hash }
        });
        return res.status(201).json({ id: afiliado.id, nome: afiliado.nome, email: afiliado.email });
    },

    async listar(req: Request, res: Response) {
        const afiliados = await prisma.afiliado.findMany();
        return res.json(afiliados);
    }
};