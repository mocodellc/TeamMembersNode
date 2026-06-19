import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const createGroup = async (req: Request, res: Response) => {
  const group = await prisma.teamGroups.create({ data: req.body });
  res.json(group);
};
