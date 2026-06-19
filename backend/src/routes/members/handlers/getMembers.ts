import { Request, Response } from "express";
import { prisma } from "../../../config/prisma.js";

export const getMembers = async (req: Request, res: Response) => {
  const includeDeleted = req.query.includeDeleted === "true";
  const members = await prisma.teamMember.findMany({
    where: includeDeleted ? {} : { deletedDate: null },
    // This tells Prisma to fetch the related groups
    include: {
      groups: true,
    },
  });
  res.json(members);
};
