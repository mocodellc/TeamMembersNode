import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const updateMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await prisma.teamMember.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(member);
};
