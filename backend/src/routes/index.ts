import { Router } from "express";
import membersRouter from "./members/index.js";
import groupsRouter from "./groups/index.js";

const router = Router();

router.use("/members", membersRouter);
router.use("/groups", groupsRouter);

export default router;
