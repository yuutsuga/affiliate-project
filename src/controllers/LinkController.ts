import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { nanoid } from "nanoid";

export const LinkController = {
  async criar(req: Request, res: Response) {
    const { urlDestino } = req.body;
    const user = (req as any).user;

    if (!urlDestino) {
      return res.status(400).json({ error: "Url de destino é obrigatória" });
    }

    const codigo = nanoid(6); // Gera um código único porém curto

    const link = await prisma.linkAfiliado.create({
      data: {
        codigo,
        urlDestino,
        afiliadoId: user.id,
      },
    });

    return res.status(201).json({
      link: `http://localhost:7777/${codigo}`,
      codigo,
      urlDestino,
    });
  },
};
