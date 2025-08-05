import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const RedirectController = {
  async redirecionar(req: Request, res: Response) {
    const { codigo } = req.params;

    if (!codigo) {
        return res.status(400).json({ error: 'Código não informado' });
    }

    const link = await prisma.linkAfiliado.findUnique({
      where: { codigo },
    });

    if (!link) {
      return res.status(404).json({ error: 'Link não encontrado' });
    }

    const ip = req.ip || req.headers['x-forwarded-for'] as string || 'desconhecido';

    // registrar clique
    await prisma.clique.create({
      data: {
        linkId: link.id,
        ip,
        userAgent: req.headers['user-agent'] || '',
      },
    });

    // redirecionar para o URL destino
    return res.redirect(link.urlDestino);
  },
};
