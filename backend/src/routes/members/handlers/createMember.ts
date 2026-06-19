import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const createMember = async (req: Request, res: Response) => {
  const member = await prisma.teamMember.create({ data: req.body });
  res.json(member);
};
