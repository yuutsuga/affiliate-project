import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";

export const AuthController = {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const afiliado = await prisma.afiliado.findUnique({ where: { email } });
    if (!afiliado)
      return res.status(401).json({ error: "Credenciais inválidas" });

    const valido = await bcrypt.compare(senha, afiliado.senha);
    if (!valido)
      return res.status(401).json({ error: "Credenciais Inválidas" });

    const token = jwt.sign(
      { id: afiliado.id, email: afiliado.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return res.json({ token });
  },
};
