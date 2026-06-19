import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const deleteGroup = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.teamGroups.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
};
