import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const getGroups = async (req: Request, res: Response) => {
  const groups = await prisma.teamGroups.findMany();
  res.json(groups);
};
