import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const updateGroup = async (req: Request, res: Response) => {
  const { id } = req.params;
  const group = await prisma.teamGroups.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(group);
};
